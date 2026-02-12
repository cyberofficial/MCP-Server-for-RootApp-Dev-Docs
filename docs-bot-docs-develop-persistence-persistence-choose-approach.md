<h1>Choose your approach: persistence | Root developer documentation</h1>
<header><h1>Choose your approach: persistence</h1></header>
<p>Root supports two ways to store persistent data in your server: a <strong>key-value store</strong> and a <strong>SQLite database</strong>. The key-value store is fully ready to use while SQLite requires some setup. This article explains what they are and when to use each.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="key-value-store">Key-value store<a href="#key-value-store" class="hash-link" aria-label="Direct link to Key-value store" title="Direct link to Key-value store" translate="no">​</a></h2>
<p>A <strong>key-value store</strong> saves data as simple key-value pairs. Think of it like a dictionary or map data structure. You store a value under a key, and you retrieve it later using that key.</p>
<p>Your key-value pairs are stored in SQLite behind the scenes. Root automatically backs up and restores the SQLite file, so you won't lose data if your server restarts.</p>
<p>A key-value store works well for:</p>
<ul>
<li class=""><strong>Prototyping</strong> – It’s ready immediately. No tables to define. No database setup.</li>
<li class=""><strong>Simple data</strong> – One-to-one relationships where you don't need complicated queries.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="sqlite">SQLite<a href="#sqlite" class="hash-link" aria-label="Direct link to SQLite" title="Direct link to SQLite" translate="no">​</a></h2>
<p><strong>SQLite</strong> is a self-contained database engine that runs inside your server. You interact with it using SQL statements to store, retrieve, and manage your data. It has stores data in structured tables and supports full SQL queries, indexing, transactions, and relational integrity.</p>
<p>SQLite stores its data in a file. Root provisions the SQLite file for you and backs up and restores the file automatically.</p>
<p>A SQLite database is a good choice for:</p>
<ul>
<li class=""><strong>Production storage</strong> – When you need reliable data handling, transactions, and SQL queries.</li>
<li class=""><strong>Structured data</strong> – When your data must be organized clearly across multiple tables.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="key-differences">Key differences<a href="#key-differences" class="hash-link" aria-label="Direct link to Key differences" title="Direct link to Key differences" translate="no">​</a></h2>
<table><thead><tr><th>Feature</th><th>Key-Value Store</th><th>SQLite Database</th></tr></thead><tbody><tr><td><strong>Data structure</strong></td><td>Simple key-value pairs</td><td>Relational tables with SQL</td></tr><tr><td><strong>Querying</strong></td><td>By key only</td><td>Full SQL querying</td></tr><tr><td><strong>Transactions</strong></td><td>Minimal or none</td><td>Full ACID compliance</td></tr></tbody></table>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="conclusion">Conclusion<a href="#conclusion" class="hash-link" aria-label="Direct link to Conclusion" title="Direct link to Conclusion" translate="no">​</a></h2>
<p>Use the <strong>key-value store</strong> for quick setup and small amounts of simple data. Use <strong>SQLite</strong> when you need structured storage, complex queries, or transactions.</p>