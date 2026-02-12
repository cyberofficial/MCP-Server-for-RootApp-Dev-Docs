# How to Use the RootApp Documentation MCP Server

This guide provides in-depth instructions on setting up and using the RootApp Documentation MCP Server with AI assistants like Cline, Claude Desktop, or other MCP-compatible clients.

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Available Tools](#available-tools)
4. [Usage Examples](#usage-examples)
5. [Troubleshooting](#troubleshooting)

---

## Installation

### Prerequisites

- Node.js 18 or higher
- npm (comes with Node.js)
- An MCP-compatible AI assistant (Cline, Claude Desktop, etc.)

### Step 1: Clone the Repository

```bash
git clone https://github.com/cyberofficial/RootAppDevDocs.git
cd RootAppDevDocs
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install the required package:
- `@modelcontextprotocol/sdk` - The MCP SDK for building MCP servers

### Step 3: Build the Project

```bash
npm run build
```

This compiles the TypeScript code to JavaScript in the `build/` directory and makes the main server file executable.

---

## Configuration

### Finding Your MCP Settings File

The location of your MCP settings file depends on your operating system and AI client:

#### Cline (VS Code Extension)

- **Windows:** `C:\Users\<YOUR_USERNAME>\AppData\Roaming\Code - Insiders\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- **macOS/Linux:** `~/.config/Code - Insiders/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

#### Claude Desktop

- **Windows:** `C:\Users\<YOUR_USERNAME>\AppData\Roaming\Claude\claude_desktop_config.json`
- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Linux:** `~/.config/Claude/claude_desktop_config.json`

### Adding the Server Configuration

Open your MCP settings file and add the following entry to the `mcpServers` object:

```json
{
  "mcpServers": {
    "rootapp-docs": {
      "command": "node",
      "args": ["<FULL_PATH_TO_REPO>/build/index.js"],
      "type": "stdio",
      "disabled": false
    }
  }
}
```

**Important:** Replace `<FULL_PATH_TO_REPO>` with the absolute path to your local repository:

**Windows Example:**
```json
{
  "args": ["D:/projects/RootAppDevDocs/build/index.js"]
}
```

**macOS/Linux Example:**
```json
{
  "args": ["/Users/yourname/projects/RootAppDevDocs/build/index.js"]
}
```

### Complete Configuration Example

Here's a complete example with other MCP servers:

```json
{
  "mcpServers": {
    "rootapp-docs": {
      "command": "node",
      "args": ["D:/projects/RootAppDevDocs/build/index.js"],
      "type": "stdio",
      "disabled": false
    },
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "/path/to/allowed/directory"],
      "type": "stdio",
      "disabled": false
    }
  }
}
```

### Applying the Configuration

After saving your configuration:

1. **Restart your AI assistant** (Cline/Claude Desktop)
2. The MCP server will automatically start when needed
3. You should see the tools available in your chat interface

---

## Available Tools

The RootApp Documentation MCP Server provides three tools for accessing the documentation:

### 1. `get_documentation`

Retrieves the content of a specific documentation file.

**Parameters:**

| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `path`    | string | Yes      | Path to the documentation file (without `.md` extension) |

**Example Path Format:**
```
bot/api/reference/classes/RootApiException
```

**Returns:**
- The full markdown content of the requested file

**Use Cases:**
- Getting detailed information about a specific class, enum, or type
- Reading documentation for a specific API component
- Looking up examples and code snippets

---

### 2. `list_directory`

Lists the files and directories in a specific documentation directory.

**Parameters:**

| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `path`    | string | No       | Path to the directory (relative to DOCS root). Defaults to root if not provided. |

**Example Paths:**
- `""` or omitted → List root directory
- `"bot/api/reference/classes"` → List classes directory
- `"bot/docs"` → List bot documentation directory

**Returns:**
- An array of file and directory names

**Use Cases:**
- Exploring the documentation structure
- Finding what files are available in a category
- Navigating to find specific documentation

---

### 3. `search_documentation`

Searches across all documentation files for matching file names and paths.

**Parameters:**

| Parameter | Type   | Required | Description |
|-----------|--------|----------|-------------|
| `query`   | string | Yes      | Search query (case-insensitive) |

**Behavior:**
- Searches both file names and full directory paths
- Case-insensitive matching
- Returns all matching files

**Returns:**
- An array of full file paths that match the query

**Use Cases:**
- Finding all files related to a specific topic
- Discovering documentation for a concept
- Quickly locating relevant files

---

## Usage Examples

### Example 1: Getting Started

**User:** "Show me the RootApiException class documentation"

**AI Assistant Response:**
```
I'll retrieve the RootApiException documentation for you.

[Uses get_documentation with path "bot/api/reference/classes/RootApiException"]

<h1>RootApiException</h1>
...
```

---

### Example 2: Exploring the Documentation

**User:** "What documentation files are available for channel-related features?"

**AI Assistant Response:**
```
Let me search for channel-related documentation files.

[Uses search_documentation with query "channel"]

Found 45 files matching "channel":
- bot/api/reference/type-aliases/Channel.md
- bot/api/reference/type-aliases/ChannelClient.md
- bot/api/reference/enumerations/ChannelType.md
- bot/api/reference/enumerations/ChannelEvent.md
- ...
```

---

### Example 3: Navigating Directories

**User:** "List all the classes in the reference documentation"

**AI Assistant Response:**
```
I'll list the contents of the classes directory.

[Uses list_directory with path "bot/api/reference/classes"]

Directory contents:
- RootApiException.md
- RootGuidConverter.md
```

---

### Example 4: Complex Query Workflow

**User:** "I need to understand the ChannelMessage system. First search for files, then get the main ChannelMessage documentation."

**AI Assistant Response:**
```
Let me search for ChannelMessage related files first.

[Uses search_documentation with query "ChannelMessage"]

Found 15 files:
- bot/api/reference/type-aliases/ChannelMessage.md
- bot/api/reference/type-aliases/ChannelMessageClient.md
- bot/api/reference/enumerations/ChannelMessageEvent.md
- ...

Now let me get the main ChannelMessage documentation:

[Uses get_documentation with path "bot/api/reference/type-aliases/ChannelMessage"]

<h1>ChannelMessage</h1>
... [full content]
```

---

### Example 5: Finding Enumerations

**User:** "Find all the enumerations in the API reference"

**AI Assistant Response:**
```
Let me search for enumeration files.

[Uses search_documentation with query "enumerations"]

Or better, let me list the enumerations directory:

[Uses list_directory with path "bot/api/reference/enumerations"]

Enumeration files:
- BillingPaymentType.md
- BillingSubscriptionType.md
- ChannelDirectoryEvent.md
- ChannelEvent.md
- ChannelType.md
- ...
```

---

## Troubleshooting

### Server Won't Start

**Problem:** AI assistant reports connection errors.

**Solutions:**

1. **Check the path in configuration:**
   - Ensure the path is absolute (not relative)
   - Verify the path points to `build/index.js`, not `src/index.ts`
   - On Windows, use forward slashes `/` or escaped backslashes `\\`

2. **Verify the build exists:**
   ```bash
   ls build/index.js  # macOS/Linux
   dir build\index.js # Windows
   ```
   
   If it doesn't exist, rebuild:
   ```bash
   npm run build
   ```

3. **Check file permissions:**
   The build script should set executable permissions. If needed:
   ```bash
   chmod +x build/index.js  # macOS/Linux
   ```

### Tools Not Appearing

**Problem:** Configuration is correct but tools don't appear.

**Solutions:**

1. **Restart the AI assistant** - MCP servers load on startup
2. **Check for JSON syntax errors** in the configuration file
3. **Verify `"disabled": false`** in the server config
4. **Check AI assistant logs** for connection errors

### "Documentation file not found" Error

**Problem:** get_documentation returns a file not found error.

**Solutions:**

1. **Verify the path format:**
   - Remove the `.md` extension (the server adds it automatically)
   - Use forward slashes `/` even on Windows
   - Ensure the path is relative to the DOCS directory (don't include `DOCS/` prefix)

2. **List the directory first** to find the correct file name:
   ```
   [Use list_directory to see what files are available]
   ```

### Search Returns No Results

**Problem:** search_documentation returns empty results.

**Solutions:**

1. **Try a simpler query** - Use partial matches instead of exact phrases
2. **Check for typos** in the search term
3. **Try different keywords** related to the concept

---

## Tips for Effective Use

### 1. Use Search Before Navigation

Start with `search_documentation` to find relevant files, then use `get_documentation` to read specific files.

### 2. Explore Structure

Use `list_directory` to understand how documentation is organized, especially when looking for categories.

### 3. Combine Tools

The tools work best together:
- Search → Find files
- List → See categories
- Get → Read content

### 4. Use Partial Queries

When searching, use partial terms:
- `"channel"` instead of `"ChannelMessage"`
- `"enum"` instead of `"enumerations"`
- `"client"` instead of `"ChannelClient"`

### 5. Path Patterns

Common path patterns in the documentation:
- `bot/api/reference/classes/*` - Class definitions
- `bot/api/reference/enumerations/*` - Enumerations
- `bot/api/reference/type-aliases/*` - Type aliases
- `bot/docs/*` - General documentation

---

## Development

### Rebuilding the Server

If you make changes to the source code:

```bash
npm run build
```

### Watching for Changes

For development, use watch mode:

```bash
npm run watch
```

This will automatically rebuild when TypeScript files change.

### Adding New Tools

To add new tools, edit `src/index.ts`:

1. Add the tool definition in the `setupToolHandlers` method
2. Implement the handler method
3. Rebuild with `npm run build`

---

## Support

For issues, questions, or contributions:

- **GitHub Repository:** https://github.com/cyberofficial/RootAppDevDocs
- **Issues:** Report bugs or feature requests in GitHub Issues
