<h1>TypedEventEmitter | Root developer documentation</h1>
<header><h1>TypedEventEmitter</h1></header><blockquote>
<p><strong>TypedEventEmitter</strong>&lt;<code>Events</code>&gt;: <code>object</code></p>
</blockquote>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters">Type Parameters<a href="#type-parameters" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h2>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>Events</code> <em>extends</em> <code>EventMap</code></td></tr></tbody></table>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-declaration">Type declaration<a href="#type-declaration" class="hash-link" aria-label="Direct link to Type declaration" title="Direct link to Type declaration" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="addlistener">addListener()<a href="#addlistener" class="hash-link" aria-label="Direct link to addListener()" title="Direct link to addListener()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-1">Type Parameters<a href="#type-parameters-1" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters">Parameters<a href="#parameters" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td><code>listener</code></td><td><code>Events</code>[<code>E</code>]</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns">Returns<a href="#returns" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="emit">emit()<a href="#emit" class="hash-link" aria-label="Direct link to emit()" title="Direct link to emit()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-2">Type Parameters<a href="#type-parameters-2" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-1">Parameters<a href="#parameters-1" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td>...<code>args</code></td><td><code>Parameters</code>&lt;<code>Events</code>[<code>E</code>]&gt;</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-1">Returns<a href="#returns-1" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><code>boolean</code></p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="eventnames">eventNames()<a href="#eventnames" class="hash-link" aria-label="Direct link to eventNames()" title="Direct link to eventNames()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-2">Returns<a href="#returns-2" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p>(<code>string</code> | <code>symbol</code> | keyof <code>Events</code>)[]</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="getmaxlisteners">getMaxListeners()<a href="#getmaxlisteners" class="hash-link" aria-label="Direct link to getMaxListeners()" title="Direct link to getMaxListeners()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-3">Returns<a href="#returns-3" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><code>number</code></p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="listenercount">listenerCount()<a href="#listenercount" class="hash-link" aria-label="Direct link to listenerCount()" title="Direct link to listenerCount()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-3">Type Parameters<a href="#type-parameters-3" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-2">Parameters<a href="#parameters-2" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-4">Returns<a href="#returns-4" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><code>number</code></p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="listeners">listeners()<a href="#listeners" class="hash-link" aria-label="Direct link to listeners()" title="Direct link to listeners()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-4">Type Parameters<a href="#type-parameters-4" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-3">Parameters<a href="#parameters-3" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-5">Returns<a href="#returns-5" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><code>Events</code>[<code>E</code>][]</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="off">off()<a href="#off" class="hash-link" aria-label="Direct link to off()" title="Direct link to off()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-5">Type Parameters<a href="#type-parameters-5" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-4">Parameters<a href="#parameters-4" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td><code>listener</code></td><td><code>Events</code>[<code>E</code>]</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-6">Returns<a href="#returns-6" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="on">on()<a href="#on" class="hash-link" aria-label="Direct link to on()" title="Direct link to on()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-6">Type Parameters<a href="#type-parameters-6" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-5">Parameters<a href="#parameters-5" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td><code>listener</code></td><td><code>Events</code>[<code>E</code>]</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-7">Returns<a href="#returns-7" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="once">once()<a href="#once" class="hash-link" aria-label="Direct link to once()" title="Direct link to once()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-7">Type Parameters<a href="#type-parameters-7" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-6">Parameters<a href="#parameters-6" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td><code>listener</code></td><td><code>Events</code>[<code>E</code>]</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-8">Returns<a href="#returns-8" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="prependlistener">prependListener()<a href="#prependlistener" class="hash-link" aria-label="Direct link to prependListener()" title="Direct link to prependListener()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-8">Type Parameters<a href="#type-parameters-8" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-7">Parameters<a href="#parameters-7" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td><code>listener</code></td><td><code>Events</code>[<code>E</code>]</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-9">Returns<a href="#returns-9" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="prependoncelistener">prependOnceListener()<a href="#prependoncelistener" class="hash-link" aria-label="Direct link to prependOnceListener()" title="Direct link to prependOnceListener()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-9">Type Parameters<a href="#type-parameters-9" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-8">Parameters<a href="#parameters-8" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td><code>listener</code></td><td><code>Events</code>[<code>E</code>]</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-10">Returns<a href="#returns-10" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="removealllisteners">removeAllListeners()<a href="#removealllisteners" class="hash-link" aria-label="Direct link to removeAllListeners()" title="Direct link to removeAllListeners()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-10">Type Parameters<a href="#type-parameters-10" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-9">Parameters<a href="#parameters-9" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code>?</td><td><code>E</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-11">Returns<a href="#returns-11" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="removelistener">removeListener()<a href="#removelistener" class="hash-link" aria-label="Direct link to removeListener()" title="Direct link to removeListener()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-parameters-11">Type Parameters<a href="#type-parameters-11" class="hash-link" aria-label="Direct link to Type Parameters" title="Direct link to Type Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Type Parameter</th></tr></thead><tbody><tr><td><code>E</code> <em>extends</em> <code>string</code> | <code>number</code> | <code>symbol</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters-10">Parameters<a href="#parameters-10" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>event</code></td><td><code>E</code></td></tr><tr><td><code>listener</code></td><td><code>Events</code>[<code>E</code>]</td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns-12">Returns<a href="#returns-12" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><a class="" href="/docs/bot-api-reference/type-aliases/TypedEventEmitter/"><code>TypedEventEmitter</code></a>&lt;<code>Events</code>&gt;</p>