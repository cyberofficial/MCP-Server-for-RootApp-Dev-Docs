<h1>Plan your Bot’s communication with the community | Root developer documentation</h1>
<header><h1>Plan your Bot’s communication with the community</h1></header>
<p>Even without a user interface, your Bot needs a clear communication plan. That includes deciding what to say, who to say it to, and how to send it.</p>
<p>By the end of this article, you’ll be able to:</p>
<ul>
<li class=""><strong>Decide what your Bot should communicate</strong>—and what it should stay quiet about</li>
<li class=""><strong>Choose the right channel for each kind of message</strong></li>
<li class=""><strong>Avoid over-communicating or disrupting the community</strong></li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="step-1-decide-what-needs-to-be-communicated">Step 1: Decide what needs to be communicated<a href="#step-1-decide-what-needs-to-be-communicated" class="hash-link" aria-label="Direct link to Step 1: Decide what needs to be communicated" title="Direct link to Step 1: Decide what needs to be communicated" translate="no">​</a></h2>
<p>Start by asking: <strong>What information does the community need from this Bot?</strong></p>
<ul>
<li class="">Does it take visible action that should be acknowledged?</li>
<li class="">Does it perform background tasks that only admins care about?</li>
<li class="">Does it need to respond to user input?</li>
</ul>
<p>Not every Bot needs to post in public channels. In fact, many don’t.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="step-2-use-the-appropriate-communication-type">Step 2: Use the appropriate communication type<a href="#step-2-use-the-appropriate-communication-type" class="hash-link" aria-label="Direct link to Step 2: Use the appropriate communication type" title="Direct link to Step 2: Use the appropriate communication type" translate="no">​</a></h2>
<p>Root gives you three ways to communicate:</p>
<table><thead><tr><th>Method</th><th>Who sees it</th><th>Use when...</th></tr></thead><tbody><tr><td><strong>Client-side log file</strong></td><td>Admins only</td><td>You need to share info with community leaders</td></tr><tr><td><strong>Channel message</strong></td><td>Visible to members</td><td>The community needs to see the info</td></tr><tr><td><strong>Create new channel</strong></td><td>Visible to members</td><td>You’re organizing new discussions or topics</td></tr></tbody></table>
<p>Think carefully about which type fits each kind of output. If your Bot is mostly doing automation or moderation, the log file may be all you need.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="step-3-know-your-audience">Step 3: Know your audience<a href="#step-3-know-your-audience" class="hash-link" aria-label="Direct link to Step 3: Know your audience" title="Direct link to Step 3: Know your audience" translate="no">​</a></h2>
<p>Split your communication by audience:</p>
<ul>
<li class=""><strong>Admins:</strong> Logs about decisions, exceptions, actions taken, or errors</li>
<li class=""><strong>Members:</strong> Messages that require action or show meaningful results</li>
</ul>
<p>Ask yourself for each message: <strong>Does a regular member need to see this?</strong>. If the answer is no, send it to the client-side log.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="step-4-dont-overdo-it">Step 4: Don’t overdo it<a href="#step-4-dont-overdo-it" class="hash-link" aria-label="Direct link to Step 4: Don’t overdo it" title="Direct link to Step 4: Don’t overdo it" translate="no">​</a></h2>
<p>Even useful messages become noise if you send too many. Some common signs of overcommunication:</p>
<ul>
<li class="">A message every time a minor action happens</li>
<li class="">Repeating the same message for every member</li>
<li class="">Posting updates that nobody needs in real time</li>
</ul>
<p>Instead, batch messages when possible, or keep quiet unless something changes.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="examples">Examples<a href="#examples" class="hash-link" aria-label="Direct link to Examples" title="Direct link to Examples" translate="no">​</a></h2>
<p><strong>AutoRoleBot</strong><br>
<!-- -->This Bot assigns roles based on user activity. There's no reason to announce each role change to the entire community. Instead, it logs each action to the client-side log so admins can review them if needed.<br>
<!-- -->→ <em>Use: client-side log only</em></p>
<p><strong>PollBot</strong><br>
<!-- -->This Bot runs member polls and tracks votes. Since the whole point is participation, it reads and writes to channel messages so everyone can see and interact.<br>
<!-- -->→ <em>Use: channel messages</em></p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="conclusion">Conclusion<a href="#conclusion" class="hash-link" aria-label="Direct link to Conclusion" title="Direct link to Conclusion" translate="no">​</a></h2>
<p>A well-behaved Bot stays useful without being annoying. It doesn’t spam channels. It doesn’t force awkward text input for things that should really have a UI.</p>