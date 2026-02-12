<h1>CommunityPermission | Root developer documentation</h1>
<header><h1>CommunityPermission</h1></header><blockquote>
<p><strong>CommunityPermission</strong>: <code>object</code></p>
</blockquote>
<p>Permissions that control access to community-level entities and settings.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-declaration">Type declaration<a href="#type-declaration" class="hash-link" aria-label="Direct link to Type declaration" title="Direct link to Type declaration" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychangemynickname">communityChangeMyNickname<a href="#communitychangemynickname" class="hash-link" aria-label="Direct link to communityChangeMyNickname" title="Direct link to communityChangeMyNickname" translate="no">​</a></h3>
<blockquote>
<p><strong>communityChangeMyNickname</strong>: <code>boolean</code></p>
</blockquote>
<p>Change your own nickname for the community.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychangeothernickname">communityChangeOtherNickname<a href="#communitychangeothernickname" class="hash-link" aria-label="Direct link to communityChangeOtherNickname" title="Direct link to communityChangeOtherNickname" translate="no">​</a></h3>
<blockquote>
<p><strong>communityChangeOtherNickname</strong>: <code>boolean</code></p>
</blockquote>
<p>Change other members’ nicknames.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycreateban">communityCreateBan<a href="#communitycreateban" class="hash-link" aria-label="Direct link to communityCreateBan" title="Direct link to communityCreateBan" translate="no">​</a></h3>
<blockquote>
<p><strong>communityCreateBan</strong>: <code>boolean</code></p>
</blockquote>
<p>Ban a member from the community. Banning immediately removes the member and sets a configurable timeout period during which they cannot rejoin, even with an invitation. The timeout can be infinite.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycreatechannelgroup">communityCreateChannelGroup<a href="#communitycreatechannelgroup" class="hash-link" aria-label="Direct link to communityCreateChannelGroup" title="Direct link to communityCreateChannelGroup" translate="no">​</a></h3>
<blockquote>
<p><strong>communityCreateChannelGroup</strong>: <code>boolean</code></p>
</blockquote>
<p>Create new channel groups.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycreateinvite">communityCreateInvite<a href="#communitycreateinvite" class="hash-link" aria-label="Direct link to communityCreateInvite" title="Direct link to communityCreateInvite" translate="no">​</a></h3>
<blockquote>
<p><strong>communityCreateInvite</strong>: <code>boolean</code></p>
</blockquote>
<p>Invite new members to join the community.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communityfullcontrol">communityFullControl<a href="#communityfullcontrol" class="hash-link" aria-label="Direct link to communityFullControl" title="Direct link to communityFullControl" translate="no">​</a></h3>
<blockquote>
<p><strong>communityFullControl</strong>: <code>boolean</code></p>
</blockquote>
<p>Grants every community-level permission and overrules channel and channel-group permission overlays.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitykick">communityKick<a href="#communitykick" class="hash-link" aria-label="Direct link to communityKick" title="Direct link to communityKick" translate="no">​</a></h3>
<blockquote>
<p><strong>communityKick</strong>: <code>boolean</code></p>
</blockquote>
<p>Remove members from the community.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitymanageapps">communityManageApps<a href="#communitymanageapps" class="hash-link" aria-label="Direct link to communityManageApps" title="Direct link to communityManageApps" translate="no">​</a></h3>
<blockquote>
<p><strong>communityManageApps</strong>: <code>boolean</code></p>
</blockquote>
<p>Install, update, or remove apps in the community. Includes permissions to create, update, and delete app channels, and automatically grants the <em>Create app channel</em> permission.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitymanageauditlog">communityManageAuditLog<a href="#communitymanageauditlog" class="hash-link" aria-label="Direct link to communityManageAuditLog" title="Direct link to communityManageAuditLog" translate="no">​</a></h3>
<blockquote>
<p><strong>communityManageAuditLog</strong>: <code>boolean</code></p>
</blockquote>
<p>View or clear the community audit log, which records logged member actions.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitymanagebans">communityManageBans<a href="#communitymanagebans" class="hash-link" aria-label="Direct link to communityManageBans" title="Direct link to communityManageBans" translate="no">​</a></h3>
<blockquote>
<p><strong>communityManageBans</strong>: <code>boolean</code></p>
</blockquote>
<p>Create, read, update, and delete community member bans.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitymanagecommunity">communityManageCommunity<a href="#communitymanagecommunity" class="hash-link" aria-label="Direct link to communityManageCommunity" title="Direct link to communityManageCommunity" translate="no">​</a></h3>
<blockquote>
<p><strong>communityManageCommunity</strong>: <code>boolean</code></p>
</blockquote>
<p>Manage overall community settings, including the community’s name, description, color, image, and system-messages channel.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitymanageemojis">communityManageEmojis<a href="#communitymanageemojis" class="hash-link" aria-label="Direct link to communityManageEmojis" title="Direct link to communityManageEmojis" translate="no">​</a></h3>
<blockquote>
<p><strong>communityManageEmojis</strong>: <code>boolean</code></p>
</blockquote>
<p>Add or remove custom emojis from the community.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitymanageinvites">communityManageInvites<a href="#communitymanageinvites" class="hash-link" aria-label="Direct link to communityManageInvites" title="Direct link to communityManageInvites" translate="no">​</a></h3>
<blockquote>
<p><strong>communityManageInvites</strong>: <code>boolean</code></p>
</blockquote>
<p>Create, list, update, and revoke community invitations.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitymanageroles">communityManageRoles<a href="#communitymanageroles" class="hash-link" aria-label="Direct link to communityManageRoles" title="Direct link to communityManageRoles" translate="no">​</a></h3>
<blockquote>
<p><strong>communityManageRoles</strong>: <code>boolean</code></p>
</blockquote>
<p>Create, list, update, delete, and assign roles.</p>