<h1>Choose your Global Settings | Root developer documentation</h1>
<header><h1>Choose your Global Settings</h1></header>
<p><em>Global Settings</em> let community members with the <code>Manage Apps</code> permission configure how your code behaves—either during installation or later. The settings apply to everyone in the community.</p>
<div class="theme-admonition theme-admonition-note admonition_xJq3 alert alert--secondary"><div class="admonitionHeading_Gvgb"><span class="admonitionIcon_Rf37"><svg viewBox="0 0 14 16"><path fill-rule="evenodd" d="M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"></path></svg></span>note</div><div class="admonitionContent_BuS1"><p>This feature is a work in progress.</p></div></div>
<p>By the end of this article, you’ll be able to:</p>
<ul>
<li class=""><strong>Identify</strong> which settings your code needs.</li>
<li class=""><strong>Explain</strong> how those settings reach your server.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="what-are-global-settings">What are Global Settings?<a href="#what-are-global-settings" class="hash-link" aria-label="Direct link to What are Global Settings?" title="Direct link to What are Global Settings?" translate="no">​</a></h2>
<p>Global Settings are options that community members with the <code>Manage Apps</code> permission use to control how your code runs. They're analogous to configuring cloud-hosted software in that they apply to the entire community and not an individual:</p>
<ul>
<li class=""><span aria-hidden="true">❌</span> <strong>Local</strong>: If you install software on your laptop or phone, you might pick a font size or theme. Those settings affect only you. This is not what we're talking about here.</li>
<li class=""><span aria-hidden="true">✅</span> <strong>Cloud</strong>: If you're an admin setting up cloud software for a team, your choices affect everyone. Root’s Global Settings work the same way.</li>
</ul>
<p>Global Settings can be basic types like numbers or strings, or Root-specific types like channels, roles, or members.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="example-channel-announcements">Example: Channel announcements<a href="#example-channel-announcements" class="hash-link" aria-label="Direct link to Example: Channel announcements" title="Direct link to Example: Channel announcements" translate="no">​</a></h3>
<p>Suppose your code supports sending announcements to a community channel. For example, maybe your app posts reminders about events, or it shares updates when it completes a task. You’d give admins control with two Global Settings:</p>
<ul>
<li class=""><strong>Enable announcements</strong> – a checkbox to turn announcements on or off.</li>
<li class=""><strong>Announcement channel</strong> – a channel picker where admins choose where posts go.</li>
</ul>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="example-role-assignment">Example: Role assignment<a href="#example-role-assignment" class="hash-link" aria-label="Direct link to Example: Role assignment" title="Direct link to Example: Role assignment" translate="no">​</a></h3>
<p>Let’s say your code monitors new members and gives them a role after they post a certain number of messages. You could support that with two Global Settings:</p>
<ul>
<li class=""><strong>Message threshold</strong> – how many messages a member must post before getting the role.</li>
<li class=""><strong>Assigned role</strong> – the role your code will apply when the threshold is met.</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="how-do-global-settings-work">How do Global Settings work?<a href="#how-do-global-settings-work" class="hash-link" aria-label="Direct link to How do Global Settings work?" title="Direct link to How do Global Settings work?" translate="no">​</a></h2>
<p>You handle some parts. Root handles the rest.</p>
<p><strong>Your job:</strong></p>
<ul>
<li class="">List your settings in your manifest file</li>
<li class="">At runtime, load the values in your server code and listen for changes from the community</li>
</ul>
<p><strong>Root’s job:</strong></p>
<ul>
<li class="">Build the UI for your settings</li>
<li class="">Show that UI during and after installation</li>
<li class="">Store the admin’s choices</li>
<li class="">Deliver the values to your server</li>
<li class="">Notify you when settings change</li>
</ul>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="what-data-types-can-i-use">What data types can I use?<a href="#what-data-types-can-i-use" class="hash-link" aria-label="Direct link to What data types can I use?" title="Direct link to What data types can I use?" translate="no">​</a></h2>
<p>You can use both standard and Root-specific types:</p>
<table><thead><tr><th>Setting type</th><th>What you get</th></tr></thead><tbody><tr><td>Text</td><td>A string</td></tr><tr><td>Number</td><td>A number</td></tr><tr><td>Checkbox</td><td>A boolean</td></tr><tr><td>Member Picker</td><td>A list of member IDs</td></tr><tr><td>Role Picker</td><td>A list of role IDs</td></tr><tr><td>Role and Member Picker</td><td>A mix of member and role IDs</td></tr><tr><td>Channel Picker</td><td>A channel ID</td></tr><tr><td>Channel Group Picker</td><td>A channel group ID</td></tr><tr><td>Select</td><td>One or more string values from your list</td></tr><tr><td>Timestamp Picker</td><td>A timestamp</td></tr><tr><td>Time Picker</td><td>A time value</td></tr><tr><td>Date Picker</td><td>A date value</td></tr><tr><td>Color Picker</td><td>A hex color code</td></tr><tr><td>Button</td><td>Raises an event on your server—no value sent</td></tr></tbody></table>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="who-can-change-global-setting-values">Who can change Global Setting values?<a href="#who-can-change-global-setting-values" class="hash-link" aria-label="Direct link to Who can change Global Setting values?" title="Direct link to Who can change Global Setting values?" translate="no">​</a></h2>
<p>Community members need the <code>Manage Apps</code> permission to configure their community's settings.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="conclusion">Conclusion<a href="#conclusion" class="hash-link" aria-label="Direct link to Conclusion" title="Direct link to Conclusion" translate="no">​</a></h2>
<p>Global Settings give communities a way to customize how your code behaves without changing your code. You define what can be configured. Root takes care of the UI, stores the settings, and keeps your server up to date.</p>