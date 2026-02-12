<h1>JobCreateRequest | Root developer documentation</h1>
<header><h1>JobCreateRequest</h1></header><blockquote>
<p><strong>JobCreateRequest</strong>: <code>object</code> &amp; <a class="" href="/docs/bot-api-reference/type-aliases/JobSchedule/"><code>JobSchedule</code></a></p>
</blockquote>
<p>Encapsulates the specification of a job to be scheduled with the job scheduler.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-declaration">Type declaration<a href="#type-declaration" class="hash-link" aria-label="Direct link to Type declaration" title="Direct link to Type declaration" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="resourceid">resourceId<a href="#resourceid" class="hash-link" aria-label="Direct link to resourceId" title="Direct link to resourceId" translate="no">​</a></h3>
<blockquote>
<p><strong>resourceId</strong>: <code>string</code></p>
</blockquote>
<p>Your choice of value to let you identify the job. The job scheduler doesn't use this value. The scheduler simply stores it and returns it to you when you query for jobs.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="tag">tag<a href="#tag" class="hash-link" aria-label="Direct link to tag" title="Direct link to tag" translate="no">​</a></h3>
<blockquote>
<p><strong>tag</strong>: <code>string</code> | <code>null</code> | <code>undefined</code></p>
</blockquote>
<p>Your choice of value to help you categorize or filter jobs. The job scheduler doesn't use this value. The scheduler simply stores it and returns it to you when you query for jobs.</p>