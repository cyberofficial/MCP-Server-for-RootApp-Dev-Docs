<h1>Store the message count for each member | Root developer documentation</h1>
<header><h1>Store the message count for each member</h1></header>
<p>You need to store the number of messages each member posts. To make sure your code works even if your Bot restarts, you should use the Root API's <code>KeyValueStore</code> type. Root automatically backs up and restores the key-value store, so your data is persistent.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="1-store-the-count">1. Store the count<a href="#1-store-the-count" class="hash-link" aria-label="Direct link to 1. Store the count" title="Direct link to 1. Store the count" translate="no">​</a></h2>
<ol>
<li class="">
<p>Open the file <code>src/example.ts</code>.</p>
</li>
<li class="">
<p>Locate the <code>onMessage</code> function.</p>
</li>
<li class="">
<p>Remove the <code>echo</code> functionality (listening for <code>/echo</code> and responding).</p>
</li>
<li class="">
<p>Add the following lines of code to <code>onMessage</code> after the check for system messages. The <code>appData</code> property is the <code>KeyValueStore</code> object. The <code>update</code> method is perfect for this use case, here's how it works:</p>
<ul>
<li class="">Updates a value associated with a key.</li>
<li class="">You must include a transformation function to perform the update: the old value is retrieved, the function is called with the old value, the function's return value is used as the new value in the key-value store.</li>
<li class="">If the key does not exist, this conceptually becomes a set operation. The transformation function is applied to the default and the result becomes the value in the set operation.</li>
</ul>
<div class="language-ts codeBlockContainer_Ckt0 theme-code-block" style="--prism-color:#9CDCFE;--prism-background-color:#1E1E1E"><div class="codeBlockContent_QJqH"><pre tabindex="0" class="prism-code language-ts codeBlock_bY9V thin-scrollbar" style="color:#9CDCFE;background-color:#1E1E1E"><code class="codeBlockLines_e6Vv"><span class="token-line" style="color:#9CDCFE"><span class="token keyword" style="color:rgb(86, 156, 214)">const</span><span class="token plain"> count</span><span class="token operator" style="color:rgb(212, 212, 212)">:</span><span class="token plain"> </span><span class="token builtin" style="color:rgb(86, 156, 214)">number</span><span class="token plain"> </span><span class="token operator" style="color:rgb(212, 212, 212)">=</span><span class="token plain"> </span><span class="token keyword" style="color:rgb(86, 156, 214)">await</span><span class="token plain"> rootServer</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">dataStore</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">appData</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token function" style="color:rgb(220, 220, 170)">update</span><span class="token punctuation" style="color:rgb(212, 212, 212)">(</span><span class="token plain">evt</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">userId</span><span class="token punctuation" style="color:rgb(212, 212, 212)">,</span><span class="token plain"> </span><span class="token punctuation" style="color:rgb(212, 212, 212)">(</span><span class="token plain">val</span><span class="token operator" style="color:rgb(212, 212, 212)">:</span><span class="token builtin" style="color:rgb(86, 156, 214)">number</span><span class="token punctuation" style="color:rgb(212, 212, 212)">)</span><span class="token plain"> </span><span class="token operator" style="color:rgb(212, 212, 212)">=&gt;</span><span class="token plain"> val </span><span class="token operator" style="color:rgb(212, 212, 212)">+</span><span class="token plain"> </span><span class="token number" style="color:rgb(181, 206, 168)">1</span><span class="token punctuation" style="color:rgb(212, 212, 212)">,</span><span class="token plain"> </span><span class="token number" style="color:rgb(181, 206, 168)">0</span><span class="token punctuation" style="color:rgb(212, 212, 212)">)</span><span class="token punctuation" style="color:rgb(212, 212, 212)">;</span><span class="token plain"></span><br></span><span class="token-line" style="color:#9CDCFE"><span class="token plain"></span><span class="token builtin" style="color:rgb(86, 156, 214)">console</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token function" style="color:rgb(220, 220, 170)">log</span><span class="token punctuation" style="color:rgb(212, 212, 212)">(</span><span class="token plain">evt</span><span class="token punctuation" style="color:rgb(212, 212, 212)">.</span><span class="token plain">userId </span><span class="token operator" style="color:rgb(212, 212, 212)">+</span><span class="token plain"> </span><span class="token string" style="color:rgb(206, 145, 120)">" "</span><span class="token plain"> </span><span class="token operator" style="color:rgb(212, 212, 212)">+</span><span class="token plain"> count</span><span class="token punctuation" style="color:rgb(212, 212, 212)">)</span><span class="token punctuation" style="color:rgb(212, 212, 212)">;</span><br></span></code></pre></div></div>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="2-test-and-clean-up">2. Test and clean up<a href="#2-test-and-clean-up" class="hash-link" aria-label="Direct link to 2. Test and clean up" title="Direct link to 2. Test and clean up" translate="no">​</a></h2>
<ol>
<li class="">
<p>Build and run your Bot.</p>
</li>
<li class="">
<p>Use the Root native client to post messages to community channels. Verify that the <code>console.log</code> message shows 1 on your first message, 2 on your second, etc. This indicates the storage and <code>update</code> method are working correctly.</p>
</li>
<li class="">
<p>Stop your Bot.</p>
</li>
<li class="">
<p>Delete the <code>rootsdk.sqlite3</code> file from your Bot's project folder. The file contains the key-value store data, so deleting the file will reset the counts.</p>
</li>
</ol>