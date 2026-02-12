<h1>Tutorial: Welcome Bot | Root developer documentation</h1>
<header><h1>Tutorial: Welcome Bot</h1></header>
<p>In this tutorial, you'll build a Bot that counts the number of messages each user posts and assigns a special role after they post their 5th message. This is a much-simplified version of a common community-management Bot that could welcome new members, monitor their activity, give them more access as they participate, and so on.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="root-concepts-covered">Root concepts covered<a href="#root-concepts-covered" class="hash-link" aria-label="Direct link to Root concepts covered" title="Direct link to Root concepts covered" translate="no">​</a></h2>
<ul>
<li class=""><strong>Persistence using key-value-store</strong>: Use the Root API's <code>KeyValueStore</code> to record the number of messages posted by each user.</li>
<li class=""><strong>Role assignment</strong>: Assign roles programmatically.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="prerequisites">Prerequisites<a href="#prerequisites" class="hash-link" aria-label="Direct link to Prerequisites" title="Direct link to Prerequisites" translate="no">​</a></h2>
<ul>
<li class="">High-beginner to low-intermediate level TypeScript knowledge including asynchronous coding.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="solution-code">Solution code<a href="#solution-code" class="hash-link" aria-label="Direct link to Solution code" title="Direct link to Solution code" translate="no">​</a></h2>
<p>A fully implemented version of this project is available in the Root <a href="https://github.com/RootPlatform/RootSdk.Samples/tree/main/Bots/RoleAssignment" target="_blank" rel="noopener noreferrer" class="">samples repository</a>.</p>