<h1>AssetInformation | Root developer documentation</h1>
<header><h1>AssetInformation</h1></header><blockquote>
<p><strong>AssetInformation</strong>: <code>object</code></p>
</blockquote>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-declaration">Type declaration<a href="#type-declaration" class="hash-link" aria-label="Direct link to Type declaration" title="Direct link to Type declaration" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="assetid">assetId<a href="#assetid" class="hash-link" aria-label="Direct link to assetId" title="Direct link to assetId" translate="no">​</a></h3>
<blockquote>
<p><strong>assetId</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/AssetGuid/"><code>AssetGuid</code></a></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="link">link<a href="#link" class="hash-link" aria-label="Direct link to link" title="Direct link to link" translate="no">​</a></h3>
<blockquote>
<p><strong>link</strong>: { <code>oneofKind</code>: <code>"url"</code>; <code>url</code>: <code>string</code>; } | { <code>image</code>: <a class="" href="/docs/bot-api-reference/type-aliases/AssetImage/"><code>AssetImage</code></a>; <code>oneofKind</code>: <code>"image"</code>; } | { <code>oneofKind</code>: <code>"video"</code>; <code>video</code>: <a class="" href="/docs/bot-api-reference/type-aliases/AssetVideo/"><code>AssetVideo</code></a>; } | { <code>invalid</code>: <code>AssetInvalid</code>; <code>oneofKind</code>: <code>"invalid"</code>; } | { <code>oneofKind</code>: <code>undefined</code>; }</p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="linkexpiresat">linkExpiresAt?<a href="#linkexpiresat" class="hash-link" aria-label="Direct link to linkExpiresAt?" title="Direct link to linkExpiresAt?" translate="no">​</a></h3>
<blockquote>
<p><code>optional</code> <strong>linkExpiresAt</strong>: <code>Date</code></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="preview">preview?<a href="#preview" class="hash-link" aria-label="Direct link to preview?" title="Direct link to preview?" translate="no">​</a></h3>
<blockquote>
<p><code>optional</code> <strong>preview</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/AssetPreview/"><code>AssetPreview</code></a></p>
</blockquote>