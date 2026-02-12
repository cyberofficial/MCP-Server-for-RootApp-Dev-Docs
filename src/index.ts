#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from '@modelcontextprotocol/sdk/types.js';
import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';
import { fileURLToPath } from 'url';

interface DocFile {
  fileName: string;
  fullPath: string;
}

class RootAppDocsServer {
  private server: Server;
  private docsPath: string;
  private indexedFiles: DocFile[] = [];
  private apiKey: string;

  constructor() {
    const scriptPath = fileURLToPath(import.meta.url);
    const scriptDir = path.dirname(scriptPath);
    const projectRoot = path.resolve(scriptDir, '..');
    this.docsPath = path.join(projectRoot, 'DOCS');
    this.apiKey = this.generateApiKey();
    
    this.server = new Server(
      {
        name: 'rootapp-docs-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.indexFiles();
    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  private generateApiKey(): string {
    return crypto.randomBytes(32).toString('hex');
  }

  private indexFiles(): void {
    console.error(`Indexing documentation from: ${this.docsPath}`);
    if (!fs.existsSync(this.docsPath)) {
      console.error(`Error: DOCS directory not found at ${this.docsPath}`);
      return;
    }

    this.indexDirectoryRecursive(this.docsPath, '');
    console.error(`Indexed ${this.indexedFiles.length} documentation files`);
    console.error(`API Key: ${this.apiKey}`);
  }

  private indexDirectoryRecursive(dirPath: string, relativePath: string): void {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      const entryRelativePath = relativePath ? path.join(relativePath, entry.name) : entry.name;

      if (entry.isDirectory()) {
        this.indexDirectoryRecursive(fullPath, entryRelativePath);
      } else if (entry.isFile() && entry.name.endsWith('.md')) {
        this.indexedFiles.push({
          fileName: entry.name,
          fullPath: entryRelativePath.replace(/\\/g, '/'),
        });
      }
    }
  }

  private setupToolHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => ({
      tools: [
        {
          name: 'get_documentation',
          description: 'Retrieve a specific documentation file by path',
          inputSchema: {
            type: 'object',
            properties: {
              path: {
                type: 'string',
                description: 'Path to the documentation file (without .md extension), e.g., "bot/api/reference/classes/RootApiException"',
              },
            },
            required: ['path'],
          },
        },
        {
          name: 'list_directory',
          description: 'List files and directories in a documentation directory',
          inputSchema: {
            type: 'object',
            properties: {
              path: {
                type: 'string',
                description: 'Path to the directory (relative to DOCS root), defaults to root',
              },
            },
            required: [],
          },
        },
        {
          name: 'search_documentation',
          description: 'Search across all documentation files',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query - matches against file names and full paths (case-insensitive)',
              },
            },
            required: ['query'],
          },
        },
      ],
    }));

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'get_documentation':
            return this.handleGetDocumentation(args);
          case 'list_directory':
            return this.handleListDirectory(args);
          case 'search_documentation':
            return this.handleSearchDocumentation(args);
          default:
            throw new McpError(ErrorCode.MethodNotFound, `Unknown tool: ${name}`);
        }
      } catch (error) {
        if (error instanceof McpError) {
          throw error;
        }
        throw new McpError(
          ErrorCode.InternalError,
          `Error executing tool ${name}: ${error instanceof Error ? error.message : String(error)}`
        );
      }
    });
  }

  private handleGetDocumentation(args: any) {
    const filePath = args.path as string;
    if (!filePath) {
      throw new McpError(ErrorCode.InvalidParams, 'Path is required');
    }

    const fullPath = path.join(this.docsPath, filePath + '.md');
    
    if (!fs.existsSync(fullPath)) {
      throw new McpError(
        ErrorCode.InvalidRequest,
        `Documentation file not found: ${filePath}.md`
      );
    }

    const content = fs.readFileSync(fullPath, 'utf-8');
    
    return {
      content: [
        {
          type: 'text',
          text: content,
        },
      ],
    };
  }

  private handleListDirectory(args: any) {
    const requestedPath = (args.path as string) || '';
    const fullPath = path.join(this.docsPath, requestedPath);
    
    if (!fs.existsSync(fullPath)) {
      throw new McpError(
        ErrorCode.InvalidRequest,
        `Directory not found: ${requestedPath}`
      );
    }

    if (!fs.statSync(fullPath).isDirectory()) {
      throw new McpError(
        ErrorCode.InvalidRequest,
        `Path is not a directory: ${requestedPath}`
      );
    }

    const entries = fs.readdirSync(fullPath, { withFileTypes: true });
    const names = entries.map((entry) => entry.name);
    
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(names, null, 2),
        },
      ],
    };
  }

  private handleSearchDocumentation(args: any) {
    const query = args.query as string;
    if (!query) {
      throw new McpError(ErrorCode.InvalidParams, 'Query is required');
    }

    const lowerQuery = query.toLowerCase();
    const matches = this.indexedFiles.filter(
      (file) =>
        file.fileName.toLowerCase().includes(lowerQuery) ||
        file.fullPath.toLowerCase().includes(lowerQuery)
    );

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(matches.map((m) => m.fullPath), null, 2),
        },
      ],
    };
  }

  private setupErrorHandling(): void {
    this.server.onerror = (error) => console.error('[MCP Error]', error);
    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('RootApp Docs MCP server running on stdio');
  }
}

const server = new RootAppDocsServer();
server.run().catch(console.error);