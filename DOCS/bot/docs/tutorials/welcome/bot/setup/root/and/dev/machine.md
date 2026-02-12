<h1>Set up Root and your dev machine | Root developer documentation</h1>
<header><h1>Set up Root and your dev machine</h1></header>
<p>You can develop for the Root Platform on Windows or macOS. You'll need to do a few Root setup tasks before starting to write code. Skip any steps that you've completed previously.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="1-install-software">1. Install software<a href="#1-install-software" class="hash-link" aria-label="Direct link to 1. Install software" title="Direct link to 1. Install software" translate="no">​</a></h2>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="node">Node<a href="#node" class="hash-link" aria-label="Direct link to Node" title="Direct link to Node" translate="no">​</a></h3>
<p>You'll need Node version 22 or greater to run the local test host and for its package manager: <a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer" class="">download link</a>. You can check your currently installed node version by running <code>node --version</code> from a terminal or command prompt.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="ide">IDE<a href="#ide" class="hash-link" aria-label="Direct link to IDE" title="Direct link to IDE" translate="no">​</a></h3>
<p>You'll write your Root App code using an editor of your choice, two popular options are VS Code and WebStorm:</p>
<ul>
<li class="">Visual Studio Code: <a href="https://code.visualstudio.com/download" target="_blank" rel="noopener noreferrer" class="">download link</a>.</li>
<li class="">JetBrains WebStorm: <a href="https://www.jetbrains.com/webstorm/" target="_blank" rel="noopener noreferrer" class="">download link</a>.</li>
</ul>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="root">Root<a href="#root" class="hash-link" aria-label="Direct link to Root" title="Direct link to Root" translate="no">​</a></h3>
<p>Visit the Root <a href="https://www.rootapp.com/download" target="_blank" rel="noopener noreferrer" class="">download page</a> and install the Root desktop client on your development machine.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="2-sign-up">2. Sign up<a href="#2-sign-up" class="hash-link" aria-label="Direct link to 2. Sign up" title="Direct link to 2. Sign up" translate="no">​</a></h2>
<p>You'll use a single Root account both as a Root member and a Root developer.</p>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="create-a-root-account">Create a Root account<a href="#create-a-root-account" class="hash-link" aria-label="Direct link to Create a Root account" title="Direct link to Create a Root account" translate="no">​</a></h3>
<p>Here are the steps to create a Root account:</p>
<ol>
<li class="">Start the Root application.</li>
<li class="">Select the 'Register' option at the bottom of the login screen.</li>
<li class="">Add your information to the registration page.</li>
<li class="">Select ‘Register’ to complete the registration process. You’ll be logged in and ready to go.</li>
</ol>
<h3 class="anchor anchorTargetStickyNavbar_Vzrq" id="join-the-root-developer-program">Join the Root developer program<a href="#join-the-root-developer-program" class="hash-link" aria-label="Direct link to Join the Root developer program" title="Direct link to Join the Root developer program" translate="no">​</a></h3>
<p>The Root developer program lets you generate credentials for testing and publish your work to the store.</p>
<p>Open the <a href="https://dev.rootapp.com" target="_blank" rel="noopener noreferrer" class="">Root Developer Portal</a> and login with your Root account. That's it, you're in!</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="3-create-a-project">3. Create a project<a href="#3-create-a-project" class="hash-link" aria-label="Direct link to 3. Create a project" title="Direct link to 3. Create a project" translate="no">​</a></h2>
<p>A <code>project</code> in the Root Developer Portal is a container to host the identity, versions, code, and state of your Bot. You'll need one project for each of your Bots.</p>
<ol>
<li class="">In a web browser, navigate to the <a href="https://dev.rootapp.com" target="_blank" rel="noopener noreferrer" class="">Root Developer Portal</a>.</li>
<li class="">Log in with your Root credentials.</li>
<li class="">Select the <strong>My bots</strong> tab.</li>
<li class="">Select the <strong>New bot</strong> button.</li>
<li class="">Enter a name for your Bot.</li>
<li class="">Agree to the terms.</li>
<li class="">Select <strong>Create</strong>.</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="4-generate-a-dev_token-and-a-community">4. Generate a <code>DEV_TOKEN</code> and a community<a href="#4-generate-a-dev_token-and-a-community" class="hash-link" aria-label="Direct link to 4-generate-a-dev_token-and-a-community" title="Direct link to 4-generate-a-dev_token-and-a-community" translate="no">​</a></h2>
<p>A <code>DEV_TOKEN</code> is a Root-generated token that encapsulates your identity, your authorization to access the Root infrastructure, and a community ID. You get a <code>DEV_TOKEN</code> from the Root Developer Portal.</p>
<ol>
<li class="">In a web browser, navigate to the <a href="https://dev.rootapp.com" target="_blank" rel="noopener noreferrer" class="">Root Developer Portal</a>.</li>
<li class="">Log in with your Root credentials.</li>
<li class="">Select the <strong>My bots</strong> tab.</li>
<li class="">Select one of your Bots from the list.</li>
<li class="">Select the <strong>Settings</strong> tab.</li>
<li class="">Select the <strong>Generate new dev token</strong> button.</li>
<li class="">Select <strong>Generate</strong>.</li>
<li class="">Copy the generated <code>DEV_TOKEN</code>.</li>
</ol>
<p>Don't share your <code>DEV_TOKEN</code>; treat it like a password.</p>
<p>Your code will always run in the context of a community. Root automatically creates a test community for your when you generate your first <code>DEV_TOKEN</code> for a project. The community will be named after your project name with the suffix <code>-test</code> added. If you delete the community, Root will create a new one for you the next time you generate a DEV_TOKEN.</p>