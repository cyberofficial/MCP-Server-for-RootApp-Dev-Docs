<h1>Root Job scheduler | Root developer documentation</h1>
<header><h1>Root Job scheduler</h1></header>
<p>The Root <code>JobScheduler</code> is an API for scheduling tasks that need to execute at future date(s). The API supports operations such as create, retrieve, edit, delete, and list. Behind the scenes, your jobs are stored in a database that's automatically backed up by Root.</p>
<p>The job scheduler notifies you via an event when it's time for your job to run; it doesn't actually execute your task. Typical usage is:</p>
<ol>
<li class="">
<p><strong>Subscribe</strong>: You subscribe to the <code>JobScheduleEvent.Job</code> event on the job scheduler.</p>
</li>
<li class="">
<p><strong>Create</strong>: You schedule a job to run at some time in the future (either one time or on an interval). You must provide a string called <code>resourceId</code> and optionally a string named <code>tag</code>.</p>
</li>
<li class="">
<p><strong>Execute</strong>: When the job scheduler raises the <code>JobScheduleEvent.Job</code> event, it passes you the <code>resourceId</code> and <code>tag</code> that you set when you created the job. Your code then uses the <code>resourceId</code> and <code>tag</code> to decide what to do.</p>
</li>
<li class="">
<p><strong>Delete</strong>: When you no longer need the job, you can delete it. There are several versions of the <code>delete</code> method that give you the flexibility to delete by <code>resourceId</code>, <code>tag</code>, or the id used internally by the job scheduler. Jobs are automatically deleted a few days after their end date.</p>
</li>
</ol>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="how-to-identify-a-job">How to identify a job<a href="#how-to-identify-a-job" class="hash-link" aria-label="Direct link to How to identify a job" title="Direct link to How to identify a job" translate="no">​</a></h2>
<p>There are three strings that identify a job:</p>
<ul>
<li class=""><code>resourceid</code></li>
<li class=""><code>tag</code></li>
<li class=""><code>jobScheduleId</code></li>
</ul>
<p>You have complete control over <code>resourceId</code> and <code>tag</code>; they have no intrinsic meaning to the job scheduler. You provide the values when you create jobs and the scheduler hands them back to you in the job-event data.</p>
<p>Neither <code>resourceId</code> nor <code>tag</code> need to be unique. For example, suppose you were writing code to help an MMORPG gaming community plan their raids. You might schedule jobs for 30 minutes before each raid begins so you could notify the community. You could set the tag to <code>raid-start</code> for all of these events and then use a unique raid id for the <code>resourceId</code>.</p>
<p><code>JobScheduler</code> offers methods to list and delete by either <code>resourceId</code> or <code>tag</code>. In these methods, they'll match all jobs that have the <code>resourceId</code> or <code>tag</code> that you passed in.</p>
<p>Internally, the job scheduler creates a unique id for each job. This id is given to you in the <code>jobScheduleId</code> returned from the <code>create</code> method. You'll need this <code>jobResourceId</code> for the <code>edit</code> and <code>delete</code> operations that requires a unique identifier.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="event-precision">Event precision<a href="#event-precision" class="hash-link" aria-label="Direct link to Event precision" title="Direct link to Event precision" translate="no">​</a></h2>
<p>Events occur within a window of about one minute from the exact time you asked for in your create request.</p>
<p>The job scheduler is appropriate for tasks that you need to run periodically. It's not intended or optimized for real-time needs.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="error-notification">Error notification<a href="#error-notification" class="hash-link" aria-label="Direct link to Error notification" title="Direct link to Error notification" translate="no">​</a></h2>
<p>The job scheduler API won't throw exceptions.</p>
<h2 class="anchor anchorTargetStickyNavbar_Vzrq" id="missed-jobs">Missed jobs<a href="#missed-jobs" class="hash-link" aria-label="Direct link to Missed jobs" title="Direct link to Missed jobs" translate="no">​</a></h2>
<p>It could happen that your server code isn't running at the scheduled time for a job. For example, if your server code crashed, the hosting container crashed, or if the Root infrastructure recycled your code to relocate it or do a backup.</p>
<p>The job scheduler handles this case by checking for missed events immediately when your server code starts. If it finds missed jobs, it raises the <code>JobScheduleEvent.JobMissed</code> event once for each missed job.</p>
<p>The missed job feature is intended for short pauses in your server's availability. In the unlikely case that your server isn't available for an extended period, the missed jobs are likely to be auto-deleted from the database and the job scheduler won't raise <code>JobScheduleEvent.JobMissed</code> events for those jobs.</p>