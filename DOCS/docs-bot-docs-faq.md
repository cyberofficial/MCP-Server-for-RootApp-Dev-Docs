<h1>Root Bots FAQ | Root developer documentation</h1>
<header><h1>Root Bots FAQ</h1></header>
<hr>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="hosting">Hosting<a href="#hosting" class="hash-link" aria-label="Direct link to Hosting" title="Direct link to Hosting" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="external-service-host">Can I host my own external web service?<a href="#external-service-host" class="hash-link" aria-label="Direct link to Can I host my own external web service?" title="Direct link to Can I host my own external web service?" translate="no">​</a></h3>
<p>Yes, you can create and host your own external web service outside of Root. Your Root-hosted, server-side code can communicate with your external web service.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="self-host">Can I self-host?<a href="#self-host" class="hash-link" aria-label="Direct link to Can I self-host?" title="Direct link to Can I self-host?" translate="no">​</a></h3>
<p>You can't fully self-host. Your server-side code needs to be hosted by Root and run inside the Root cloud.</p>
<hr>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="server-side-development">Server-side development<a href="#server-side-development" class="hash-link" aria-label="Direct link to Server-side development" title="Direct link to Server-side development" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="server-code-supported-languages">Which programming languages can I use for my server-side code?<a href="#server-code-supported-languages" class="hash-link" aria-label="Direct link to Which programming languages can I use for my server-side code?" title="Direct link to Which programming languages can I use for my server-side code?" translate="no">​</a></h3>
<p>TypeScript/JavaScript</p>
<hr>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="networking">Networking<a href="#networking" class="hash-link" aria-label="Direct link to Networking" title="Direct link to Networking" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="third-party-service-use">Can I use a third-party web service?<a href="#third-party-service-use" class="hash-link" aria-label="Direct link to Can I use a third-party web service?" title="Direct link to Can I use a third-party web service?" translate="no">​</a></h3>
<p>Yes, your Root-hosted, server-side code can communicate with third-party web services using web sockets. Root is investigating how to support secret storage and webhooks to make this process easier; however, these are not currently implemented.</p>
<hr>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="test">Test<a href="#test" class="hash-link" aria-label="Direct link to Test" title="Direct link to Test" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="test-bot-local">How do I test my Bot locally?<a href="#test-bot-local" class="hash-link" aria-label="Direct link to How do I test my Bot locally?" title="Direct link to How do I test my Bot locally?" translate="no">​</a></h3>
<p>The Root SDK includes the <code>devhost</code> command that will run your Bot locally on your development machine. You can interact with your Bot using the Root desktop client - the Bot will connect to the community represented by the <code>DEV_TOKEN</code> in your <code>.env</code> file.</p>
<hr>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="troubleshooting">Troubleshooting<a href="#troubleshooting" class="hash-link" aria-label="Direct link to Troubleshooting" title="Direct link to Troubleshooting" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="database-wrong-community-configured">What does the error message <code>Community in data is xxxxx but configured for yyyyy</code> mean?<a href="#database-wrong-community-configured" class="hash-link" aria-label="Direct link to database-wrong-community-configured" title="Direct link to database-wrong-community-configured" translate="no">​</a></h3>
<p>This error occurs during testing with <code>devhost</code> when your <code>rootsdk.sqlite3</code> database file is configured for the wrong community. Root adds the community ID in your <code>DEV_TOKEN</code> to your <code>rootsdk.sqlite3</code> file. If you move to a different community (by replacing your <code>DEV_TOKEN</code>), you need a new database file. You can delete the old database file and Root will recreate it on the next run using the new community ID.</p>