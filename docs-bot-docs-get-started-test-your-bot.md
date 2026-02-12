<h1>Test your Root Bot | Root developer documentation</h1>
<header><h1>Test your Root Bot</h1></header>
<p>Root supports testing your Bot locally. Your Bot still needs a valid <code>DEV_TOKEN</code> because execution isn't fully local. Calls to the Community API (e.g., programmatically creating a new message in a community channel) will go through Root's servers and then to the Root native client.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="bot-execution">Bot execution<a href="#bot-execution" class="hash-link" aria-label="Direct link to Bot execution" title="Direct link to Bot execution" translate="no">​</a></h2>
<p>Your Bot will run inside the Root <code>DevHost</code>. The <code>DevHost</code> is a Node execution environment that's part of the Root SDK.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="usage">Usage<a href="#usage" class="hash-link" aria-label="Direct link to Usage" title="Direct link to Usage" translate="no">​</a></h3>
<p>To launch your Bot inside <code>DevHost</code>, do the following:</p>
<ol>
<li class="">
<p>Open a terminal in your Bot's project folder.</p>
</li>
<li class="">
<p>Run the following command:</p>
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">npm run bot</span><br></span></code></pre></div></div>
<p>The <code>bot</code> script is defined in the <code>package.json</code> file; it's shorthand for this:</p>
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">rootsdk start devhost</span><br></span></code></pre></div></div>
<p>The <strong>devhost</strong> reads your launch entry-point from the <code>root-manifest.json</code> file in your project folder. Your entry-point file is the file containing the call to <code>start</code>:</p>
<div class="language-ts codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-ts codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token keyword" style="color:rgb(86, 156, 214)">await</span><span class="token plain"> rootServer</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">lifecycle</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token function" style="color:rgb(220, 220, 170)">start</span><span class="token punctuation" style="color:rgb(212, 212, 212)">(</span><span class="token punctuation" style="color:rgb(212, 212, 212)">)</span><span class="token punctuation" style="color:rgb(212, 212, 212)">;</span><br></span></code></pre></div></div>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="root-native-client">Root native client<a href="#root-native-client" class="hash-link" aria-label="Direct link to Root native client" title="Direct link to Root native client" translate="no">​</a></h2>
<p>To see your Bot interacting with the community, you can launch the Root native client and navigate to the community represented in your <code>DEV_TOKEN</code>. The starter-code Bot responds to the <code>/echo</code> command and replies with the text you include after the command.</p>