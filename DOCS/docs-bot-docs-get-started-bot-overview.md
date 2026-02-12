<h1>Root Bot overview | Root developer documentation</h1>
<header><h1>Root Bot overview</h1></header>
<p>A <strong>Root Bot</strong> is a software application that extends the functionality of Root communities. Developers build Root Bots and publish them to the Root Store. Community administrators then install Bots from the Store into their communities. A Bot runs as server-only without any client-side graphical user interface (GUI) in the community.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="analogy">Analogy<a href="#analogy" class="hash-link" aria-label="Direct link to Analogy" title="Direct link to Analogy" translate="no">​</a></h2>
<p>Before we get into the details of Root, let's think about how you'd build a <em>welcome</em> bot for a typical community platform. The bot will listen for new members that join the community and send them a greeting. This will give some intuition that'll help with Root Bots.</p>
<p>The welcome bot will be <em>headless</em> meaning that it won't have a client-side graphical user interface. All the bot code will run in a server component, and it'll use the community API to take in commands and output results.</p>
<p>The core server operations would be:</p>
<ul>
<li class=""><strong>Subscribe:</strong> Use the platform API to register for an event like <em>new-member-joined</em>.</li>
<li class=""><strong>Process:</strong> Record each new member in a database along with a timestamp for when they joined.</li>
<li class=""><strong>Respond:</strong> Use the platform API to send a welcome message to the new member.</li>
</ul>
<p>It's your job to write all this code. You're also responsible for setting up a computer somewhere to run your server; it's common to pay a cloud computing provider to host your server.</p>
<p>Root Bots work the same way with two nice simplifications: Root gives you the database and hosts your server for you.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="bot-architecture">Bot architecture<a href="#bot-architecture" class="hash-link" aria-label="Direct link to Bot architecture" title="Direct link to Bot architecture" translate="no">​</a></h2>
<p>A Root Bot has a server that processes business logic and persists data. The server is written in TypeScript and runs on Node inside the Root cloud. You'll have access to most core Node.js modules (with some security limitations). You can also pull in third-party packages from registries like <a href="https://www.npmjs.com/" target="_blank" rel="noopener noreferrer" class="">npm</a>.</p>
<p>Root Bots use <strong>SQLite</strong> for persistent data storage. It's all set up for you; Root even tracks your Bot's data file and provides automatic backup/restore. You can pull in the standard SQLite API <strong>sqlite3</strong> to access your database, or you can add a third-party ORM like <strong>sequelize</strong>.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="root-sdk">Root SDK<a href="#root-sdk" class="hash-link" aria-label="Direct link to Root SDK" title="Direct link to Root SDK" translate="no">​</a></h2>
<p>Root provides the <strong>Root SDK</strong> to help you build Bots:</p>
<ul>
<li class=""><strong>Root API</strong>: A TypeScript library for persistence, community and member access, exception handling, and more.</li>
<li class=""><strong>Test support</strong>: A host to run your Bot locally for testing.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="community-access">Community access<a href="#community-access" class="hash-link" aria-label="Direct link to Community access" title="Direct link to Community access" translate="no">​</a></h2>
<p>The only way for Bots to communicate with the community where they're installed is via the Root API. Your Bot can do (almost) everything in a community that human members can. For example, your code can:</p>
<ul>
<li class="">Create a message in a channel.</li>
<li class="">Moderate channel messages.</li>
<li class="">Upload a file to a channel.</li>
<li class="">Invite users to join.</li>
<li class="">Modify community settings like assign member roles.</li>
<li class="">Receive an event when a new member joins the community.</li>
<li class="">Receive an event when a message is posted to a channel.</li>
<li class="">Etc.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="bot-installation">Bot installation<a href="#bot-installation" class="hash-link" aria-label="Direct link to Bot installation" title="Direct link to Bot installation" translate="no">​</a></h2>
<p>When an administrator installs a Bot into their community, Root creates a single instance of the Bot that serves all members of the community. The Bot instance gets its own SQLite data file that's used only for that community. If another community installs the same Bot, that new community gets their own instance of the Bot and their own SQLite data file.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="bot-execution">Bot execution<a href="#bot-execution" class="hash-link" aria-label="Direct link to Bot execution" title="Direct link to Bot execution" translate="no">​</a></h2>
<p>Root Bots run in a <strong>containerized environment</strong> hosted by Root. For testing, Root supplies a host you can run on your local machine. In production, your Bot will run inside the Root cloud. You never need to provision your own cloud server to run your Bot.</p>