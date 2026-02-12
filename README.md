# RootApp Documentation MCP Server

A simple MCP (Model Context Protocol) server that serves RootApp documentation files with search and retrieval capabilities using stdio transport.

## Docs as of Feb 11 2026

This repository contains RootApp documentation files as of February 11, 2026.


## Features

- **Retrieve Documentation**: Access any markdown file in the DOCS directory
- **List Directory**: Browse the documentation directory structure
- **Search Files**: Case-insensitive search across file names and paths
- **Search Content**: Search within the actual content of documentation files
- **Dynamic Path Resolution**: Automatically resolves DOCS path relative to the project directory

## Installation

1. Install dependencies:
```bash
npm install
```

2. Build the project:
```bash
npm run build
```

For detailed setup instructions, see [HOWTOUSE.md](HOWTOUSE.md).

## MCP Configuration (for AI Assistants)

The MCP server uses stdio transport. Configure it in your Cline/VS Code MCP settings file:

```json
{
  "mcpServers": {
    "rootapp-docs": {
      "command": "node",
      "args": ["<PATH_TO_REPO>/build/index.js"],
      "type": "stdio",
      "disabled": false
    }
  }
}
```

Replace `<PATH_TO_REPO>` with your local repository path (e.g., `/Users/yourname/RootAppDevDocs` on macOS/Linux or `d:/github/RootAppDevDocs` on Windows).

### Alternative Configuration (VS Code native MCP)

For VS Code's native MCP support, use this format:

```json
{
  "mcpServers": {
    "RootAppDocsSearchTool": {
      "type": "stdio",
      "command": "node",
      "args": [
        "d:/github/RootAppDevDocs/build/index.js"
      ]
    }
  }
}
```

Replace the path with your actual local repository path.

**Note:** After updating the MCP configuration, restart Cline or toggle MCP connections to apply the changes.

## Available Tools

### `get_documentation`

Retrieve a specific documentation file by path.

**Parameters:**
- `path` (string): Path to the documentation file without `.md` extension
  - Example: `"bot/api/reference/classes/RootApiException"`

**Returns:** Raw markdown content

### `list_directory`

List files and directories in a documentation directory.

**Parameters:**
- `path` (string, optional): Path to the directory relative to DOCS root
  - Default: root directory
  - Example: `"bot/api/reference/classes"`

**Returns:** Array of file/directory names

### `search_documentation`

Search across all documentation files.

**Parameters:**
- `query` (string): Search query
  - Example: `"client"`, `"channel"`, `"class"`

**Returns:** Array of full file paths that match the query (case-insensitive on file names and full paths)

### `search_content`

Search within the actual content of all documentation files.

**Parameters:**
- `query` (string): Search query - keyword or phrase to search within file contents
  - Example: `"exception"`, `"createMessage"`, `"permission"`
- `limit` (number, optional): Maximum number of results to return (default: 20)
- `includeSnippet` (boolean, optional): Include context snippets around matches (default: false)
- `contextLength` (number, optional): Number of characters before and after match in snippet (default: 100)

**Returns:** Array of matching files with paths, match counts, and optional snippets

**Example Response:**
```json
{
  "matches": [
    {
      "path": "bot/api/reference/classes/RootApiException.md",
      "matchCount": 15,
      "snippet": "...RootApiException is thrown when an API call fails..."
    }
  ],
  "total": 8,
  "query": "exception"
}
```

## Usage Examples

```
> List all classes in the reference documentation
> Search for files about channels
> Get the documentation for RootApiException
```

## Project Structure

```
RootAppDevDocs/
├── DOCS/                    (documentation files)
├── src/
│   └── index.ts             (MCP server implementation)
├── build/                   (compiled JavaScript)
│   └── index.js
├── package.json
├── tsconfig.json
└── .gitignore
```

## Development

To rebuild after changes:
```bash
npm run build
```

## Notes

- The server automatically resolves the DOCS path relative to the script location
- No environment variables needed
- All documentation files are indexed on server startup
