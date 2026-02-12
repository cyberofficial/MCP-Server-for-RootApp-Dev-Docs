<h1>ReadOnlyMemberGroup | Root developer documentation</h1>
<header><h1>ReadOnlyMemberGroup</h1></header><blockquote>
<p><strong>ReadOnlyMemberGroup</strong>: <code>object</code></p>
</blockquote>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-declaration">Type declaration<a href="#type-declaration" class="hash-link" aria-label="Direct link to Type declaration" title="Direct link to Type declaration" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communityid">communityId<a href="#communityid" class="hash-link" aria-label="Direct link to communityId" title="Direct link to communityId" translate="no">​</a></h3>
<blockquote>
<p><strong>communityId</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityGuid/"><code>CommunityGuid</code></a></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communityroleids">communityRoleIds<a href="#communityroleids" class="hash-link" aria-label="Direct link to communityRoleIds" title="Direct link to communityRoleIds" translate="no">​</a></h3>
<blockquote>
<p><strong>communityRoleIds</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityRoleGuid/"><code>CommunityRoleGuid</code></a>[]</p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="id">id<a href="#id" class="hash-link" aria-label="Direct link to id" title="Direct link to id" translate="no">​</a></h3>
<blockquote>
<p><strong>id</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CustomMemberGroupGuid/"><code>CustomMemberGroupGuid</code></a></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="memberuserids">memberUserIds<a href="#memberuserids" class="hash-link" aria-label="Direct link to memberUserIds" title="Direct link to memberUserIds" translate="no">​</a></h3>
<blockquote>
<p><strong>memberUserIds</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/UserGuid/"><code>UserGuid</code></a>[]</p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="memberuseridsasset">memberUserIdsAsSet<a href="#memberuseridsasset" class="hash-link" aria-label="Direct link to memberUserIdsAsSet" title="Direct link to memberUserIdsAsSet" translate="no">​</a></h3>
<blockquote>
<p><strong>memberUserIdsAsSet</strong>: <code>Set</code>&lt;<a class="" href="/docs/bot-api-reference/type-aliases/UserGuid/"><code>UserGuid</code></a>&gt;</p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="name">name<a href="#name" class="hash-link" aria-label="Direct link to name" title="Direct link to name" translate="no">​</a></h3>
<blockquote>
<p><strong>name</strong>: <code>string</code></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="resourceid">resourceId<a href="#resourceid" class="hash-link" aria-label="Direct link to resourceId" title="Direct link to resourceId" translate="no">​</a></h3>
<blockquote>
<p><strong>resourceId</strong>: <code>string</code></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="resourcetype">resourceType<a href="#resourcetype" class="hash-link" aria-label="Direct link to resourceType" title="Direct link to resourceType" translate="no">​</a></h3>
<blockquote>
<p><strong>resourceType</strong>: <code>string</code></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="userids">userIds<a href="#userids" class="hash-link" aria-label="Direct link to userIds" title="Direct link to userIds" translate="no">​</a></h3>
<blockquote>
<p><strong>userIds</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/UserGuid/"><code>UserGuid</code></a>[]</p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="ismember">isMember()<a href="#ismember" class="hash-link" aria-label="Direct link to isMember()" title="Direct link to isMember()" translate="no">​</a></h3>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="parameters">Parameters<a href="#parameters" class="hash-link" aria-label="Direct link to Parameters" title="Direct link to Parameters" translate="no">​</a></h4>
<table><thead><tr><th>Parameter</th><th>Type</th></tr></thead><tbody><tr><td><code>user</code></td><td>{ <code>userId</code>: <code>string</code>; }</td></tr><tr><td><code>user.userId</code></td><td><code>string</code></td></tr></tbody></table>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="returns">Returns<a href="#returns" class="hash-link" aria-label="Direct link to Returns" title="Direct link to Returns" translate="no">​</a></h4>
<p><code>Promise</code>&lt;<code>boolean</code>&gt;</p>