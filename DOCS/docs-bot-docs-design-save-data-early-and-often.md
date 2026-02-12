<h1>Save data early and often | Root developer documentation</h1>
<header><h1>Save data early and often</h1></header>
<p>Your Bot automatically gets a SQLite database. Use it to store anything important. Don’t keep data only in memory—if your Bot restarts, that data is gone.</p>
<p>By the end of this article, you’ll be able to:</p>
<ul>
<li class=""><strong>Choose</strong> what data your Bot should save</li>
<li class=""><strong>Decide</strong> when to write that data to SQLite</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="why-you-need-to-save-data-to-sqlite">Why you need to save data to SQLite<a href="#why-you-need-to-save-data-to-sqlite" class="hash-link" aria-label="Direct link to Why you need to save data to SQLite" title="Direct link to Why you need to save data to SQLite" translate="no">​</a></h2>
<p>Your Bot can restart at any time. This might happen because Root moves it to a new cloud cluster, or because your code crashes. If Root shuts it down on purpose, you’ll get a few seconds’ notice. If it crashes, there’s no warning.</p>
<p>Root automatically backs up and restores your SQLite database. Anything you write to SQLite will still be there when your Bot comes back online.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="decide-what-to-store">Decide what to store<a href="#decide-what-to-store" class="hash-link" aria-label="Direct link to Decide what to store" title="Direct link to Decide what to store" translate="no">​</a></h2>
<p>You’ll usually store two kinds of data:</p>
<ul>
<li class=""><strong>Completed work</strong> – For example, if your Bot assigns roles to members, save each role assignment as soon as it happens.</li>
<li class=""><strong>In-progress tasks</strong> – Sometimes it’s useful to save partial progress. For example, suppose you were coding a polling Bot that allowed the member to create a new poll with several, separate commands. You could save the partially constructed poll after each member command so they wouldn't need to reenter their work. This adds complexity but helps prevent data loss if the Bot shuts down mid-task.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="decide-when-to-save">Decide when to save<a href="#decide-when-to-save" class="hash-link" aria-label="Direct link to Decide when to save" title="Direct link to Decide when to save" translate="no">​</a></h2>
<p>You don’t control when your Bot shuts down. It could happen without notice. The safest approach is to write important data to SQLite immediately after you receive or create it.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="conclusion">Conclusion<a href="#conclusion" class="hash-link" aria-label="Direct link to Conclusion" title="Direct link to Conclusion" translate="no">​</a></h2>
<p>Saving data early protects you from crashes, restarts, and unexpected shutdowns. If the data matters, save it to SQLite right away. That way, your Bot can pick up where it left off—no surprises, no lost work.</p>