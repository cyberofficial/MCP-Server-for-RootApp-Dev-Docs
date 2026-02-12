<h1>Build your Root Bot | Root developer documentation</h1>
<header><h1>Build your Root Bot</h1></header>
<p>Building a Bot with Root requires a few key steps to set up your Bot's test environment and compile your project. In this guide, we’ll walk you through adding your <code>DEV_TOKEN</code> to your project and compiling your code. After going through these steps, your Bot will be ready to run locally.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="add-your-dev_token-to-the-project">Add your <code>DEV_TOKEN</code> to the project<a href="#add-your-dev_token-to-the-project" class="hash-link" aria-label="Direct link to add-your-dev_token-to-the-project" title="Direct link to add-your-dev_token-to-the-project" translate="no">​</a></h2>
<ol>
<li class="">
<p>Open the <code>.env</code> file in the Bot's project folder.</p>
</li>
<li class="">
<p>Add your previously generated <code>DEV_TOKEN</code> to the file. The completed file should look something like this (but contain your <code>DEV_TOKEN</code> value rather than this sample):</p>
<div class="language-ts codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockTitle_OeMC">Complete content of a sample .env file</div><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-ts codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token constant" style="color:rgb(100, 102, 149)">DEV_TOKEN</span><span class="token operator" style="color:rgb(212, 212, 212)">=</span><span class="token plain">ACROZj4Ilajlkgjoilkjdljfb5l2jln426k42548fdlj4359204undlajf_lkaejrln3904280294FLWalPd35aoier82m_lkad4lkjas0kj</span><span class="token operator" style="color:rgb(212, 212, 212)">-</span><span class="token plain">aeheccewqioclbaljer34akjwqpz_</span><span class="token operator" style="color:rgb(212, 212, 212)">-</span><span class="token plain">lk</span><span class="token operator" style="color:rgb(212, 212, 212)">-</span><span class="token plain">kO52jQjlaljbjlk5299elk2aklbwpcast67lka0as2lgxlmqJSO98absLa34s90gask2ac</span><br></span></code></pre></div></div>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="build-your-bot">Build your Bot<a href="#build-your-bot" class="hash-link" aria-label="Direct link to Build your Bot" title="Direct link to Build your Bot" translate="no">​</a></h2>
<p>All your Bot's config files will be in your project folder. Your source code will be in the <code>src</code> folder.</p>
<ol>
<li class="">
<p>Open a terminal in your Bot's project folder.</p>
</li>
<li class="">
<p>Install the packages by running the following command:</p>
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">npm i</span><br></span></code></pre></div></div>
</li>
<li class="">
<p>Build the Bot by running the following command:</p>
<div class="language-bash codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-bash codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token plain">npm run build</span><br></span></code></pre></div></div>
</li>
</ol>
<p>The <code>build</code> command will compile your <code>src</code> folder and produce a <code>dist</code> folder.</p>