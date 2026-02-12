<h1>Tutorial: Announce Bot | Root developer documentation</h1>
<header><h1>Tutorial: Announce Bot</h1></header>
<p>In this tutorial, you'll build a Bot that listens for a specific command in a Root community and responds by broadcasting the message to all text channels.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="root-concepts-covered">Root concepts covered<a href="#root-concepts-covered" class="hash-link" aria-label="Direct link to Root concepts covered" title="Direct link to Root concepts covered" translate="no">​</a></h2>
<ul>
<li class=""><strong>Listening for events</strong>: Hook into <code>ChannelMessageCreatedEvent</code> to react when users send messages.</li>
<li class=""><strong>Command parsing</strong>: Check message content to identify <code>/announce</code> commands.</li>
<li class=""><strong>User mentions</strong>: Retrieve the sender’s nickname and format a Root-style user mention.</li>
<li class=""><strong>Channel discovery</strong>: Enumerate all community channel groups and text channels.</li>
<li class=""><strong>Message sending</strong>: Send a custom message to every text channel in the community.</li>
<li class=""><strong>Error handling</strong>: Gracefully handle and log both expected and unexpected exceptions using <code>RootApiException</code>.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="prerequisites">Prerequisites<a href="#prerequisites" class="hash-link" aria-label="Direct link to Prerequisites" title="Direct link to Prerequisites" translate="no">​</a></h2>
<ul>
<li class="">High-beginner to low-intermediate level TypeScript knowledge including asynchronous coding.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="solution-code">Solution code<a href="#solution-code" class="hash-link" aria-label="Direct link to Solution code" title="Direct link to Solution code" translate="no">​</a></h2>
<p>A fully implemented version of this project is available in the Root <a href="https://github.com/RootPlatform/RootSdk.Samples/tree/main/Bots/AllChannelBroadcast" target="_blank" rel="noopener noreferrer" class="">samples repository</a>.</p>