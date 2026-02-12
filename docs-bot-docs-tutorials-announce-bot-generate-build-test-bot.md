<h1>Generate and test Bot starter code | Root developer documentation</h1>
<header><h1>Generate and test Bot starter code</h1></header>
<p>Root supplies a command-line utility named <code>create-root</code> that generates starter code. Here, you'll create your project, build it, and test that it works with your community.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="1-generate">1. Generate<a href="#1-generate" class="hash-link" aria-label="Direct link to 1. Generate" title="Direct link to 1. Generate" translate="no">​</a></h2>
<ol>
<li class="">
<p>Open a terminal in your preferred base folder.</p>
</li>
<li class="">
<p>Run the following command:</p>
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">npx create-root@latest --bot &lt;your-project-name&gt;</span><br></span></code></pre></div></div>
</li>
<li class="">
<p>Open the generated folder in an IDE.</p>
</li>
<li class="">
<p>(Optional) If you'd like to, take a few minutes to review the generated project. Here are a few files that might be of interest:</p>
<p><strong><code>package.json</code></strong></p>
<ul>
<li class="">The necessary dependencies for the Root SDK are already included.</li>
<li class="">The <code>build</code> script will compile your code.</li>
<li class="">The <code>clean</code> script is provided as a convenience. It deletes the compiled code, the <code>node_modules</code> folder, and a few generated config files. Feel free to edit the <code>clean.js</code> file to modify this script as needed.</li>
<li class="">The <code>bot</code> script runs your Bot; when you execute it, you'll say <code>npm run bot</code> so it should be easy to remember.</li>
</ul>
<p><strong><code>src/example.ts</code></strong></p>
<ul>
<li class="">You import all Root Bot SDK types from <code>@rootsdk/server-bot</code>.</li>
<li class="">The file exports an <code>initialize</code> method that's called at Bot startup from <code>src/main.ts</code>.</li>
<li class="">There's starter code that implements an <code>echo</code> Bot:<!-- -->
<ul>
<li class="">Subscribes to the <code>ChannelMessageEvent.ChannelMessageCreated</code> event.</li>
<li class="">Retrieves the incoming message.</li>
<li class="">Sends it back to the same channel.</li>
</ul>
</li>
</ul>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="2-add-dev_token">2. Add <code>DEV_TOKEN</code><a href="#2-add-dev_token" class="hash-link" aria-label="Direct link to 2-add-dev_token" title="Direct link to 2-add-dev_token" translate="no">​</a></h2>
<ol>
<li class="">
<p>Open the <code>.env</code> file in the Bot's project folder.</p>
</li>
<li class="">
<p>Add your previously generated <code>DEV_TOKEN</code> to the file. The completed file should look something like this (but contain your <code>DEV_TOKEN</code> value rather than this sample):</p>
<div class="language-ts codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockTitle_OeMC">Complete content of a sample .env file</div><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-ts codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token constant" style="color:rgb(100, 102, 149)">DEV_TOKEN</span><span class="token operator" style="color:rgb(212, 212, 212)">=</span><span class="token plain">ACROZj4Ilajlkgjoilkjdljfb5l2jln426k42548fdlj4359204undlajf_lkaejrln3904280294FLWalPd35aoier82m_lkad4lkjas0kj</span><span class="token operator" style="color:rgb(212, 212, 212)">-</span><span class="token plain">aeheccewqioclbaljer34akjwqpz_</span><span class="token operator" style="color:rgb(212, 212, 212)">-</span><span class="token plain">lk</span><span class="token operator" style="color:rgb(212, 212, 212)">-</span><span class="token plain">kO52jQjlaljbjlk5299elk2aklbwpcast67lka0as2lgxlmqJSO98absLa34s90gask2ac</span><br></span></code></pre></div></div>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="3-build">3. Build<a href="#3-build" class="hash-link" aria-label="Direct link to 3. Build" title="Direct link to 3. Build" translate="no">​</a></h2>
<ol>
<li class="">
<p>Open a terminal in your Bot's project folder.</p>
</li>
<li class="">
<p>Install the necessary packages by running the following command:</p>
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">npm i</span><br></span></code></pre></div></div>
</li>
<li class="">
<p>Build the Bot by running the following command:</p>
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">npm run build</span><br></span></code></pre></div></div>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="4-run">4. Run<a href="#4-run" class="hash-link" aria-label="Direct link to 4. Run" title="Direct link to 4. Run" translate="no">​</a></h2>
<ol>
<li class="">Execute your Bot by running the following command:<!-- -->
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">npm run bot</span><br></span></code></pre></div></div>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="5-test">5. Test<a href="#5-test" class="hash-link" aria-label="Direct link to 5. Test" title="Direct link to 5. Test" translate="no">​</a></h2>
<p>Use the Root native client to interact with your Bot.</p>
<ol>
<li class="">Open the Root native client</li>
<li class="">Log in if needed.</li>
<li class="">Open the community associated with your <code>DEV_TOKEN</code>.</li>
<li class="">Enter your Bot's commands to interact with your Bot. The starter-code Bot responds to the <code>/echo</code> command and replies with the text you include after the command.</li>
</ol>