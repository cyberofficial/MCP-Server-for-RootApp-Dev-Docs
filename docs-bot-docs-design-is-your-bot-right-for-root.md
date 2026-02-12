<h1>Is Your Bot Right for Root? | Root developer documentation</h1>
<header><h1>Is Your Bot Right for Root?</h1></header>
<p>Root Bots let you add community features without building a GUI. Bots rely entirely on Root's built-in UI and API for user interaction. This makes them much faster to develop than Apps.</p>
<p>By the end of this article, you’ll be able to:</p>
<ul>
<li class=""><strong>Decide</strong> if your Bot idea is a good match for Root.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="why-use-a-bot">Why use a Bot?<a href="#why-use-a-bot" class="hash-link" aria-label="Direct link to Why use a Bot?" title="Direct link to Why use a Bot?" translate="no">​</a></h2>
<ul>
<li class=""><strong>Faster to build</strong>: With no frontend GUI code, you can focus entirely on server logic and ship faster.</li>
<li class=""><strong>Great for prototyping</strong>: Bots let you test ideas quickly and gather feedback from real users before investing in a full App with a GUI.</li>
<li class=""><strong>Perfect for backend utilities</strong>: Some use cases like background automation, data processing, or admin tools may not need a custom interface. They can monitor user actions like channel messages for input and write messages, create log files, add reactions, etc. for output.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="when-to-choose-a-bot-over-an-app">When to choose a Bot over an App<a href="#when-to-choose-a-bot-over-an-app" class="hash-link" aria-label="Direct link to When to choose a Bot over an App" title="Direct link to When to choose a Bot over an App" translate="no">​</a></h2>
<p>Here are some common use cases where Bots shine:</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="-start-with-a-bot-if">✅ Start with a Bot if…<a href="#-start-with-a-bot-if" class="hash-link" aria-label="Direct link to ✅ Start with a Bot if…" title="Direct link to ✅ Start with a Bot if…" translate="no">​</a></h3>
<ul>
<li class="">You’re <strong>exploring a new idea</strong> and want to validate it with users first.</li>
<li class="">Your feature works fine with <strong>chat messages</strong> built into the Root client.</li>
<li class="">You’re building a <strong>background service</strong> that watches channels, listens for events, or maintains state.</li>
<li class="">You need an <strong>automation tool</strong> that helps admins manage resources like roles, channels, or files.</li>
</ul>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="-build-an-app-if">🚫 Build an App if…<a href="#-build-an-app-if" class="hash-link" aria-label="Direct link to 🚫 Build an App if…" title="Direct link to 🚫 Build an App if…" translate="no">​</a></h3>
<ul>
<li class="">Your idea <strong>depends on a custom GUI</strong>, like a rich form, dashboard, or dynamic layout.</li>
<li class="">You want <strong>fine-grained control over the user experience</strong> beyond what Root's built-in UI allows.</li>
<li class="">You need to <strong>present complex visuals or workflows</strong> that wouldn’t be clear in chat alone.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="convert-to-an-app-later">Convert to an App later<a href="#convert-to-an-app-later" class="hash-link" aria-label="Direct link to Convert to an App later" title="Direct link to Convert to an App later" translate="no">​</a></h2>
<p>Bots are a great place to start, and they don’t box you in. If your Bot proves valuable and you want more control over the interface, you can always upgrade it to a full App later. You’ll keep your backend logic and add a GUI on top.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="conclusion">Conclusion<a href="#conclusion" class="hash-link" aria-label="Direct link to Conclusion" title="Direct link to Conclusion" translate="no">​</a></h2>
<p>Root Bots are a practical way to get your ideas into the hands of users—fast. Whether you're prototyping a new concept or building a behind-the-scenes utility, Bots let you focus on functionality without the overhead of a custom interface. Start simple, iterate quickly, and when the time is right, evolve into a full App with a GUI.</p>