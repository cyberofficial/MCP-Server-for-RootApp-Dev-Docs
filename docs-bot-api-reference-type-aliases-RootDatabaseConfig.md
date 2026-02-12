<h1>RootDatabaseConfig | Root developer documentation</h1>
<header><h1>RootDatabaseConfig</h1></header><blockquote>
<p><strong>RootDatabaseConfig</strong>: <code>object</code></p>
</blockquote>
<p>Root-provided configuration for database access. Root automatically creates an instance of <code>RootDatabaseConfig</code> for you and exposes it via the <code>rootServer.dataStore.config</code> property.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-declaration">Type declaration<a href="#type-declaration" class="hash-link" aria-label="Direct link to Type declaration" title="Direct link to Type declaration" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="databasetype">databaseType<a href="#databasetype" class="hash-link" aria-label="Direct link to databaseType" title="Direct link to databaseType" translate="no">​</a></h3>
<blockquote>
<p><strong>databaseType</strong>: <code>DatabaseType</code></p>
</blockquote>
<p>Returns the string <code>sqlite3</code>.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="sqlite3">sqlite3?<a href="#sqlite3" class="hash-link" aria-label="Direct link to sqlite3?" title="Direct link to sqlite3?" translate="no">​</a></h3>
<blockquote>
<p><code>optional</code> <strong>sqlite3</strong>: <code>object</code></p>
</blockquote>
<p>Provides the <code>filename</code> of your SQLite data file. Here's how you access the filename:</p>
<div class="language-ts codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-ts codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token keyword" style="color:rgb(86, 156, 214)">const</span><span class="token plain"> sqliteFilename</span><span class="token operator" style="color:rgb(212, 212, 212)">:</span><span class="token plain"> </span><span class="token builtin" style="color:rgb(86, 156, 214)">string</span><span class="token plain"> </span><span class="token operator" style="color:rgb(212, 212, 212)">=</span><span class="token plain"> rootServer</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">dataStore</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">config</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">sqlite3</span><span class="token operator" style="color:rgb(212, 212, 212)">!</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">filename</span><span class="token punctuation" style="color:rgb(212, 212, 212)">;</span><br></span></code></pre></div></div>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="sqlite3filename">sqlite3.filename<a href="#sqlite3filename" class="hash-link" aria-label="Direct link to sqlite3.filename" title="Direct link to sqlite3.filename" translate="no">​</a></h4>
<blockquote>
<p><strong>filename</strong>: <code>string</code></p>
</blockquote>