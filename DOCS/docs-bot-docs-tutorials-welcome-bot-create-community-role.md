<h1>Create a new role in your community | Root developer documentation</h1>
<header><h1>Create a new role in your community</h1></header>
<p>Recall that this Bot is a simplified version of typical community management software. The key task we're automating here is the new-member transition from probationary to participant.</p>
<p>In this section, you'll create the <em>Participant</em> role in your community.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="1-open-the-community">1. Open the community<a href="#1-open-the-community" class="hash-link" aria-label="Direct link to 1. Open the community" title="Direct link to 1. Open the community" translate="no">​</a></h2>
<ol>
<li class="">Open the Root native client.</li>
<li class="">Log in if needed.</li>
<li class="">Open the community associated with your <code>DEV_TOKEN</code>.</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="2-create-the-role">2. Create the role<a href="#2-create-the-role" class="hash-link" aria-label="Direct link to 2. Create the role" title="Direct link to 2. Create the role" translate="no">​</a></h2>
<ol>
<li class="">Right-click on the overflow icon (three vertical dots) by the community image.</li>
<li class="">Navigate to the <em>Community settings</em>.</li>
<li class="">Select <em>Roles</em>.</li>
<li class="">Select <em>Create Role</em>.</li>
<li class="">Enter <code>Participant</code> as the role name.</li>
<li class="">Select <em>Save changes</em>.</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="3-uplevel-the-everyone-role">3. Uplevel the EVERYONE role<a href="#3-uplevel-the-everyone-role" class="hash-link" aria-label="Direct link to 3. Uplevel the EVERYONE role" title="Direct link to 3. Uplevel the EVERYONE role" translate="no">​</a></h2>
<p>Your Bot will automatically get the <em>EVERYONE</em> role and run with only the permissions available to that role. Unfortunately, that role doesn't have sufficient permissions to assign powerful roles. Eventually, Root will support assigning permissions to Bots to avoid this issue. In the meantime, we'll simply give the needed permission to the role the Bot does have.</p>
<ol>
<li class="">Right-click on the overflow icon (three vertical dots) by the community image.</li>
<li class="">Navigate to the <em>Community settings</em>.</li>
<li class="">Select <em>Roles</em>.</li>
<li class="">Select <em>EVERYONE</em>.</li>
<li class="">Select <em>Permissions</em>.</li>
<li class="">Enable the <em>Community Full Control</em> permission.</li>
<li class="">Select <em>Save changes</em>.</li>
</ol>