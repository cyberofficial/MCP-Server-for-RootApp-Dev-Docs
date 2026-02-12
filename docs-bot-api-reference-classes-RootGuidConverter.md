<h1>RootGuidConverter | Root developer documentation</h1>
<header><h1>RootGuidConverter</h1></header><h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="constructors">Constructors<a href="#constructors" class="hash-link" aria-label="Direct link to Constructors" title="Direct link to Constructors" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="new-rootguidconverter">new RootGuidConverter()<a href="#new-rootguidconverter" class="hash-link" aria-label="Direct link to new RootGuidConverter()" title="Direct link to new RootGuidConverter()" translate="no">​</a></h3>
<blockquote>
<p><strong>new RootGuidConverter</strong>(): <a class="" href="/docs/bot-api-reference/classes/RootGuidConverter/"><code>RootGuidConverter</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns">Returns<a href="#returns" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/classes/RootGuidConverter/"><code>RootGuidConverter</code></a></p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="methods">Methods<a href="#methods" class="hash-link" aria-label="Direct link to Methods" title="Direct link to Methods" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="parse">parse()<a href="#parse" class="hash-link" aria-label="Direct link to parse()" title="Direct link to parse()" translate="no">​</a></h3>
<blockquote>
<p><code>static</code> <strong>parse</strong>&lt;<code>T</code>&gt;(<code>strData</code>: <code>string</code>): <code>T</code></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters">Type Parameters<a href="#type-parameters" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>T</code> <em>extends</em> <a class="" href="/docs/bot-api-reference/enumerations/RootGuidType/"><code>RootGuidType</code></a></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters">Parameters<a href="#parameters" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>strData</code></td><td><code>string</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-1">Returns<a href="#returns-1" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><code>T</code></p>
<hr>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="tomilliseconds">toMilliseconds()<a href="#tomilliseconds" class="hash-link" aria-label="Direct link to toMilliseconds()" title="Direct link to toMilliseconds()" translate="no">​</a></h3>
<blockquote>
<p><code>static</code> <strong>toMilliseconds</strong>(<code>strData</code>: <code>string</code>): <code>number</code></p>
</blockquote>
<p>Converts a GUID string to a timestamp in milliseconds since the ROOT_EPOCH.</p>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-1">Parameters<a href="#parameters-1" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><code>strData</code></td><td><code>string</code></td><td>The GUID string to extract the timestamp from.</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-2">Returns<a href="#returns-2" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><code>number</code></p>
<p>The timestamp in milliseconds.</p>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="throws">Throws<a href="#throws" class="hash-link" aria-label="Direct link to Throws" title="Direct link to Throws" translate="no">​</a></h4>
<p>Will throw an error if the input string is null or invalid.</p>
<hr>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="torootguidtype">toRootGuidType()<a href="#torootguidtype" class="hash-link" aria-label="Direct link to toRootGuidType()" title="Direct link to toRootGuidType()" translate="no">​</a></h3>
<blockquote>
<p><code>static</code> <strong>toRootGuidType</strong>(<code>strData</code>: <code>string</code>): <a class="" href="/docs/bot-api-reference/enumerations/RootGuidType/"><code>RootGuidType</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-2">Parameters<a href="#parameters-2" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>strData</code></td><td><code>string</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-3">Returns<a href="#returns-3" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/enumerations/RootGuidType/"><code>RootGuidType</code></a></p>