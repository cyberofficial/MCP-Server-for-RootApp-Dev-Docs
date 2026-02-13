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

interface SearchMatch {
  path: string;
  matchCount: number;
  snippet?: string;
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
        {
          name: 'search_content',
          description: 'Search within the content of all documentation files',
          inputSchema: {
            type: 'object',
            properties: {
              query: {
                type: 'string',
                description: 'Search query - keyword or space-separated terms to search within file contents',
              },
              limit: {
                type: 'number',
                description: 'Maximum number of results to return (default: 20)',
              },
              includeSnippet: {
                type: 'boolean',
                description: 'Include context snippets around matches (default: false)',
              },
              contextLength: {
                type: 'number',
                description: 'Number of characters before and after match in snippet (default: 100)',
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
          case 'search_content':
            return this.handleSearchContent(args);
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
      // Find similar paths to help the user/LLM
      const suggestions = this.findSimilarPaths(filePath);
      const suggestionMessage = suggestions.length > 0
        ? ` Did you mean one of these?\n  - ${suggestions.join('\n  - ')}`
        : '';
      
      throw new McpError(
        ErrorCode.InvalidRequest,
        `Documentation file not found: ${filePath}.md${suggestionMessage}`
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

  private findSimilarPaths(queryPath: string): string[] {
    const lowerQuery = queryPath.toLowerCase();
    const scores: { path: string; score: number }[] = [];

    for (const file of this.indexedFiles) {
      const filePath = file.fullPath.replace(/\.md$/, '');
      const lowerFilePath = filePath.toLowerCase();
      
      // Calculate similarity score
      let score = 0;
      
      // Exact match gets highest priority
      if (lowerFilePath === lowerQuery) {
        score = 100;
      }
      // Contains query
      else if (lowerFilePath.includes(lowerQuery)) {
        score = 80;
      }
      // Query contains the path
      else if (lowerQuery.includes(lowerFilePath)) {
        score = 70;
      }
      // Shared words
      else {
        const queryWords = lowerQuery.split(/[^a-z0-9]/).filter(w => w.length > 2);
        const pathWords = lowerFilePath.split(/[^a-z0-9]/).filter(w => w.length > 2);
        
        const sharedWords = queryWords.filter(w => pathWords.includes(w));
        score = sharedWords.length * 10;
        
        // Bonus for partial word matches
        for (const qw of queryWords) {
          for (const pw of pathWords) {
            if (qw.includes(pw) || pw.includes(qw)) {
              score += 5;
            }
          }
        }
      }

      // Penalty for length difference
      const lengthDiff = Math.abs(lowerFilePath.length - lowerQuery.length);
      score -= Math.min(lengthDiff, 50);

      if (score > 0) {
        scores.push({ path: filePath, score });
      }
    }

    // Sort by score and return top 5
    scores.sort((a, b) => b.score - a.score);
    return scores.slice(0, 5).map(s => s.path);
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
          text: JSON.stringify(matches.map((m) => m.fullPath.replace(/\.md$/, '')), null, 2),
        },
      ],
    };
  }

  private handleSearchContent(args: any) {
    const query = args.query as string;
    if (!query) {
      throw new McpError(ErrorCode.InvalidParams, 'Query is required');
    }

    const limit = (args.limit as number) || 20;
    const includeSnippet = (args.includeSnippet as boolean) || false;
    const contextLength = (args.contextLength as number) || 100;
    
    // Split query into multiple search terms by spaces
    const searchTerms = query.toLowerCase().split(/\s+/).filter(term => term.length > 0);

    const matches: SearchMatch[] = [];

    for (const file of this.indexedFiles) {
      const fullPath = path.join(this.docsPath, file.fullPath);
      
      if (!fs.existsSync(fullPath)) continue;

      const content = fs.readFileSync(fullPath, 'utf-8');
      // Strip HTML tags for cleaner search results
      const cleanContent = this.stripHtmlTags(content);
      const lowerContent = cleanContent.toLowerCase();

      const matchCount = this.countOccurrencesMultiple(lowerContent, searchTerms);

      if (matchCount > 0) {
        const match: SearchMatch = {
          path: file.fullPath.replace(/\.md$/, ''),
          matchCount,
        };

        if (includeSnippet) {
          match.snippet = this.extractSnippetMultiple(cleanContent, searchTerms, contextLength);
        }

        matches.push(match);

        if (matches.length >= limit) break;
      }
    }

    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            matches,
            total: matches.length,
            query,
            searchTerms,
          }, null, 2),
        },
      ],
    };
  }

  private stripHtmlTags(content: string): string {
    // Remove content between < and > (HTML tags)
    return content.replace(/<[^>]*>/g, '');
  }

  private countOccurrences(content: string, query: string): number {
    let count = 0;
    let position = 0;
    
    while ((position = content.indexOf(query, position)) !== -1) {
      count++;
      position += query.length;
    }
    
    return count;
  }

  private countOccurrencesMultiple(content: string, searchTerms: string[]): number {
    // Count total occurrences of all search terms
    let totalCount = 0;
    for (const term of searchTerms) {
      let position = 0;
      while ((position = content.indexOf(term, position)) !== -1) {
        totalCount++;
        position += term.length;
      }
    }
    return totalCount;
  }

  private extractSnippet(content: string, query: string, contextLength: number): string {
    const lowerContent = content.toLowerCase();
    const lowerQuery = query.toLowerCase();
    const index = lowerContent.indexOf(lowerQuery);
    
    if (index === -1) return '';

    const start = Math.max(0, index - contextLength);
    const end = Math.min(content.length, index + query.length + contextLength);
    
    let snippet = content.substring(start, end);
    
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    
    return snippet;
  }

  private extractSnippetMultiple(content: string, searchTerms: string[], contextLength: number): string {
    const lowerContent = content.toLowerCase();
    
    // Find the first occurrence of any search term
    let firstIndex = -1;
    let firstTerm = '';
    
    for (const term of searchTerms) {
      const index = lowerContent.indexOf(term);
      if (index !== -1 && (firstIndex === -1 || index < firstIndex)) {
        firstIndex = index;
        firstTerm = term;
      }
    }
    
    if (firstIndex === -1) return '';

    const start = Math.max(0, firstIndex - contextLength);
    const end = Math.min(content.length, firstIndex + firstTerm.length + contextLength);
    
    let snippet = content.substring(start, end);
    
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    
    return snippet;
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