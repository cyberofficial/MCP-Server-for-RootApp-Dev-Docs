<h1>RootServer | Root developer documentation</h1>
<header><h1>RootServer</h1></header><blockquote>
<p><strong>RootServer</strong>: <code>object</code></p>
</blockquote>
<p>This type is your entry point to most of the Root server-side APIs. Root automatically creates an instance of this type and provides it for your use. You import the instance and access its properties.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="type-declaration">Type declaration<a href="#type-declaration" class="hash-link" aria-label="Direct link to Type declaration" title="Direct link to Type declaration" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="community">community<a href="#community" class="hash-link" aria-label="Direct link to community" title="Direct link to community" translate="no">​</a></h3>
<blockquote>
<p><strong>community</strong>: <code>object</code></p>
</blockquote>
<p>Represents the community where your code is installed. Provides an API to manipulate the community (e.g., create channels or send messages) and events to notify you when things in the community change (e.g., message sent or new member joins).</p>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communityaccessrules">community.accessRules<a href="#communityaccessrules" class="hash-link" aria-label="Direct link to community.accessRules" title="Direct link to community.accessRules" translate="no">​</a></h4>
<blockquote>
<p><strong>accessRules</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/AccessRuleClient/"><code>AccessRuleClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychanneldirectories">community.channelDirectories<a href="#communitychanneldirectories" class="hash-link" aria-label="Direct link to community.channelDirectories" title="Direct link to community.channelDirectories" translate="no">​</a></h4>
<blockquote>
<p><strong>channelDirectories</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/ChannelDirectoryClient/"><code>ChannelDirectoryClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychannelfiles">community.channelFiles<a href="#communitychannelfiles" class="hash-link" aria-label="Direct link to community.channelFiles" title="Direct link to community.channelFiles" translate="no">​</a></h4>
<blockquote>
<p><strong>channelFiles</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/ChannelFileClient/"><code>ChannelFileClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychannelgroups">community.channelGroups<a href="#communitychannelgroups" class="hash-link" aria-label="Direct link to community.channelGroups" title="Direct link to community.channelGroups" translate="no">​</a></h4>
<blockquote>
<p><strong>channelGroups</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/ChannelGroupClient/"><code>ChannelGroupClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychannelmessages">community.channelMessages<a href="#communitychannelmessages" class="hash-link" aria-label="Direct link to community.channelMessages" title="Direct link to community.channelMessages" translate="no">​</a></h4>
<blockquote>
<p><strong>channelMessages</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/ChannelMessageClient/"><code>ChannelMessageClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychannels">community.channels<a href="#communitychannels" class="hash-link" aria-label="Direct link to community.channels" title="Direct link to community.channels" translate="no">​</a></h4>
<blockquote>
<p><strong>channels</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/ChannelClient/"><code>ChannelClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitychannelwebrtcs">community.channelWebRtcs<a href="#communitychannelwebrtcs" class="hash-link" aria-label="Direct link to community.channelWebRtcs" title="Direct link to community.channelWebRtcs" translate="no">​</a></h4>
<blockquote>
<p><strong>channelWebRtcs</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/ChannelWebRtcClient/"><code>ChannelWebRtcClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycommunities">community.communities<a href="#communitycommunities" class="hash-link" aria-label="Direct link to community.communities" title="Direct link to community.communities" translate="no">​</a></h4>
<blockquote>
<p><strong>communities</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityClient/"><code>CommunityClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycommunitymemberbans">community.communityMemberBans<a href="#communitycommunitymemberbans" class="hash-link" aria-label="Direct link to community.communityMemberBans" title="Direct link to community.communityMemberBans" translate="no">​</a></h4>
<blockquote>
<p><strong>communityMemberBans</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityMemberBanClient/"><code>CommunityMemberBanClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycommunitymemberinvites">community.communityMemberInvites<a href="#communitycommunitymemberinvites" class="hash-link" aria-label="Direct link to community.communityMemberInvites" title="Direct link to community.communityMemberInvites" translate="no">​</a></h4>
<blockquote>
<p><strong>communityMemberInvites</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityMemberInviteClient/"><code>CommunityMemberInviteClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycommunitymemberroles">community.communityMemberRoles<a href="#communitycommunitymemberroles" class="hash-link" aria-label="Direct link to community.communityMemberRoles" title="Direct link to community.communityMemberRoles" translate="no">​</a></h4>
<blockquote>
<p><strong>communityMemberRoles</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityMemberRoleClient/"><code>CommunityMemberRoleClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycommunitymembers">community.communityMembers<a href="#communitycommunitymembers" class="hash-link" aria-label="Direct link to community.communityMembers" title="Direct link to community.communityMembers" translate="no">​</a></h4>
<blockquote>
<p><strong>communityMembers</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityMemberClient/"><code>CommunityMemberClient</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="communitycommunityroles">community.communityRoles<a href="#communitycommunityroles" class="hash-link" aria-label="Direct link to community.communityRoles" title="Direct link to community.communityRoles" translate="no">​</a></h4>
<blockquote>
<p><strong>communityRoles</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityRoleClient/"><code>CommunityRoleClient</code></a></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="datastore">dataStore<a href="#datastore" class="hash-link" aria-label="Direct link to dataStore" title="Direct link to dataStore" translate="no">​</a></h3>
<blockquote>
<p><strong>dataStore</strong>: <code>object</code></p>
</blockquote>
<p>This property groups together all your server-side persistence APIs. All the options store data on the server side except the logs. The messages you write to the logs will be available to community admins.</p>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="datastoreappdata">dataStore.appData<a href="#datastoreappdata" class="hash-link" aria-label="Direct link to dataStore.appData" title="Direct link to dataStore.appData" translate="no">​</a></h4>
<blockquote>
<p><strong>appData</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/KeyValueStore/"><code>KeyValueStore</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="datastoreconfig">dataStore.config<a href="#datastoreconfig" class="hash-link" aria-label="Direct link to dataStore.config" title="Direct link to dataStore.config" translate="no">​</a></h4>
<blockquote>
<p><strong>config</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/RootDatabaseConfig/"><code>RootDatabaseConfig</code></a></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="datastorelogs">dataStore.logs<a href="#datastorelogs" class="hash-link" aria-label="Direct link to dataStore.logs" title="Direct link to dataStore.logs" translate="no">​</a></h4>
<blockquote>
<p><strong>logs</strong>: <code>object</code></p>
</blockquote>
<h4 class="anchor anchorTargetStickyNavbar_Vzrq" id="datastorelogscommunity">dataStore.logs.community<a href="#datastorelogscommunity" class="hash-link" aria-label="Direct link to dataStore.logs.community" title="Direct link to dataStore.logs.community" translate="no">​</a></h4>
<blockquote>
<p><strong>community</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/CommunityAppLogClient/"><code>CommunityAppLogClient</code></a></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="globalsettings">globalSettings<a href="#globalsettings" class="hash-link" aria-label="Direct link to globalSettings" title="Direct link to globalSettings" translate="no">​</a></h3>
<blockquote>
<p><strong>globalSettings</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/GlobalSettings/"><code>GlobalSettings</code></a> | <code>undefined</code></p>
</blockquote>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="jobscheduler">jobScheduler<a href="#jobscheduler" class="hash-link" aria-label="Direct link to jobScheduler" title="Direct link to jobScheduler" translate="no">​</a></h3>
<blockquote>
<p><strong>jobScheduler</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/JobScheduler/"><code>JobScheduler</code></a></p>
</blockquote>
<p>A service for scheduling tasks that need to execute at future date(s). The job scheduler notifies you via an event when it's time for your job to run.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="lifecycle">lifecycle<a href="#lifecycle" class="hash-link" aria-label="Direct link to lifecycle" title="Direct link to lifecycle" translate="no">​</a></h3>
<blockquote>
<p><strong>lifecycle</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/RootBotLifecycle/"><code>RootBotLifecycle</code></a></p>
</blockquote>
<p>Lifecycle methods for your server-side component.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="membergroups">memberGroups<a href="#membergroups" class="hash-link" aria-label="Direct link to memberGroups" title="Direct link to memberGroups" translate="no">​</a></h3>
<blockquote>
<p><strong>memberGroups</strong>: <a class="" href="/docs/bot-api-reference/type-aliases/MemberGroupService/"><code>MemberGroupService</code></a></p>
</blockquote>
<p>Member groups </p>