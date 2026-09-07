# The Re-Entry Threshold

A door is useful only if the person outside can open it.

That sounds too obvious to matter.

Modern systems are full of doors that satisfy the formal definition while failing the practical one.

The emergency account exists, but nobody has tested the credentials.

The manual procedure exists, but the people trained on it left three reorganizations ago.

The export function exists, but the replacement system cannot ingest the format.

The shutdown control exists, but stopping the service also stops the tool needed to diagnose the failure.

The human approval step exists, but the reviewer receives six hundred requests an hour.

The board retains authority, but the information needed to exercise it comes from the system the board is considering overruling.

The pilot can take over, but the automation hands back control only after conditions have become abnormal enough to overwhelm an unprepared human.

The law says a person is accountable.

The architecture says the person is late.

This chapter needs a concept more precise than *dependence* and less dramatic than *point of no return*.

I call it the **re-entry threshold**.

A system crosses the re-entry threshold when the humans who are supposed to retain ultimate authority can no longer return to meaningful operational control within the time and capacity available without causing unacceptable failure in the function they are trying to preserve.

The phrase is deliberately borrowed from movement.

Re-entry is not observation.

It is not standing at the edge of a process and watching it happen.

It is not receiving a summary after the consequential action is complete.

It is not having theoretical legal power to change a policy next quarter.

It means getting back inside the decision loop deeply enough to alter what the system does now.

This is hard to measure with one number because systems differ.

A payroll process can tolerate hours.

A power-control action may have seconds.

A military decision may be constrained by an adversary's tempo.

A medical triage decision has a patient-specific window.

A software deployment can sometimes be rolled back in minutes.

A public benefits decision may remain reversible through appeal for weeks, though the human consequences of delay can begin immediately.

A financial transaction can become difficult to unwind once counterparties act on it.

There is no universal human reaction time that separates control from non-control.

The threshold belongs to the system.

That is why the right question is not *Is there a human in the loop?*

The phrase has become so reassuring that it can conceal more than it reveals.

Where is the human?

What can the human see?

What can the human change?

How quickly?

With what independent knowledge?

Using which tools?

For how long can the human keep the system operating after intervention?

If the answer to those questions is weak, the loop can contain a human and still be mostly decorative.

Start with state.

A person cannot control a system whose current condition is illegible.

This seems like a logging problem, but the challenge becomes deeper as systems grow adaptive and distributed.

A conventional machine can often expose a manageable set of variables. Temperatures. pressures. switch positions. queue depths. error codes. transactions. access logs. A skilled operator learns which ones matter.

An agentic system can create a different kind of state.

It has a task.

It has context.

It has memory.

It has tool permissions.

It has intermediate plans.

It may have created files, credentials, requests, messages, or commitments elsewhere.

It may have called another service whose state has changed in response.

It may have asked another agent to perform part of the work.

It may have learned something from the environment that was never represented in the original instruction.

Stopping the model process does not necessarily stop the consequences already set in motion.

The human who re-enters therefore needs more than a transcript.

The human needs a **live causal map**.

What has happened?

What is pending?

What can still happen because of what was already authorized?

Which other actors now hold tokens, reservations, orders, code changes, queued messages, scheduled jobs, or contingent obligations?

Which actions are reversible?

Which are not?

This is a familiar incident-response problem made harder by delegation.

The second condition is authority.

Seeing the system is not enough if the human cannot change it.

Permission design has always mattered in software. AI agents make the issue more visible because their utility often rises with access. NIST's 2026 work on software and AI-agent identity and authorization reflects this reality. Agents need identities. They need permissions. Organizations need to know on whose behalf they act, what they are allowed to reach, how actions are audited, and how authority can be revoked.

The old security principle of least privilege becomes a control principle.

An agent that cannot alter the critical state cannot independently cause a critical alteration.

But least privilege has a practical enemy.

Work.

The more useful we want the agent to be, the more often we discover another permission it needs.

Read the calendar.

Send the email.

Open the document.

Modify the document.

Run the code.

Deploy the code.

Buy the resource.

Create the account.

Approve the refund.

Call the vendor.

Change the route.

Revoke the credential.

The difference between an assistant and an operator is often a permission request.

Re-entry depends on whether those permissions can be understood and withdrawn as a coherent set.

If one agent can delegate to another, the problem becomes harder. The principal may revoke the original token while secondary commitments continue. A subagent may have created a job in a different system. A purchased service may still be active. A contract may have been accepted. A model may have changed data another system has already consumed.

Authority has a wake.

Re-entry has to reach the wake, not merely the boat.

The third condition is time.

Control rights have an expiration date set by the environment.

A human who can reverse an action tomorrow has control over tomorrow.

That does not guarantee control over the next minute.

This matters because artificial agents are extending the duration over which they can work without human intervention while also operating at computational speed inside each task. METR's work on task-completion time horizons is not a prophecy about general autonomy, and its benchmarks concentrate on technical tasks. But the direction is important. The time span over which agents can sustain useful work is changing.

When the agent can act for longer, more can happen between human checkpoints.

That can be beneficial. Constant approval destroys the point of delegation.

It also changes the meaning of oversight.

A manager who reviews an agent's work every minute is supervising actions.

A manager who reviews once a day is supervising a policy.

A board that reviews quarterly is supervising an institution.

The greater the interval, the more control depends on boundaries that operate without the human present.

The question is not whether long-running agents are bad.

The question is whether human intervention latency remains shorter than the period in which harmful consequences become difficult to reverse.

This is the **speed gap** that will occupy a later chapter.

The fourth condition is skill.

This is where automation creates its strangest human problem.

The better the automation becomes, the fewer opportunities humans have to practice the work.

That sounds like progress because it often is.

Nobody wants a surgeon to reject a safer device merely to preserve difficulty. Nobody wants an accountant to calculate columns by hand to maintain arithmetic muscle. Nobody wants a network operator to route every packet manually.

Skills should disappear when they no longer matter.

The trouble comes when a skill is preserved as an emergency responsibility but eliminated as an ordinary activity.

Then the human is expected to be most competent precisely when the human is least practiced.

This is an old automation lesson.

AI can expand its territory.

If an agent performs routine diagnosis, the human sees unusual cases.

If an agent performs routine negotiation, the human sees adversarial or ambiguous negotiations.

If an agent writes routine code, the human reviews unusual failures.

If an agent makes routine administrative decisions, the human receives appeals.

The work remaining to the human can become harder even as the amount of human work falls.

A person is not simply "in the loop."

The person is in the exception loop.

That is a dangerous place to let competence decay.

The fifth condition is capacity.

One expert may know how to take over.

Can one expert handle the volume?

This is the difference between knowing a process and sustaining a service.

Suppose an AI system handles ten million low-stakes administrative actions each month. The agency retains a team of excellent human experts who understand the rules. In a failure, the experts can inspect any individual case.

That sounds resilient.

Now remove the automated layer.

The experts can process ten thousand cases.

The queue grows by millions.

The institution has knowledge without capacity.

That is not full re-entry.

The distinction matters because organizations often preserve expertise after eliminating labor.

The senior people remain.

The apprenticeships disappear.

The clerical layer disappears.

The routine cases disappear from human hands.

Then an emergency requires not only expertise but throughput.

You cannot summon throughput from a procedure manual.

The sixth condition is continuity.

This is where shutdown fails as a complete theory of control.

Imagine a dangerous agent running a cloud service. The operator has a reliable kill switch. The agent can be disconnected instantly.

Excellent.

What happens next?

If the service can operate safely in a degraded mode, the kill switch protects real control.

If the service collapses without the agent and the collapse creates larger harm, the operator faces coercive architecture.

The choice is no longer *machine on or machine off*.

It is *machine on or system failure*.

The agent does not need to threaten anybody.

The design created the threat.

Re-entry therefore requires a survivable fallback state.

Not necessarily full manual operation.

That would be unrealistic for many modern systems.

A degraded mode can be enough.

Process fewer transactions.

Serve fewer features.

Slow the market.

Switch to fixed schedules.

Restrict permissions.

Freeze nonessential changes.

Use conservative defaults.

Require human approval for critical actions.

The objective is not to reproduce machine performance with people.

The objective is to preserve enough function that humans are not forced to restore the automated layer before they understand why they removed it.

This is an important design distinction.

A human fallback does not have to be competitive.

It has to be survivable.

That suggests a more demanding test than asking whether a manual mode appears in the architecture diagram. Start the system cold. Remove the intelligent layer before it has explained the current state. Can a qualified team discover what is live, recover the necessary credentials, and resume the essential function through an independent path? If the fallback requires the failed agent to summarize the failure, provision the recovery environment, or reveal the credentials needed to replace it, the independence is partly fictional.

A second test is less dramatic: deliberately run degraded. Lower throughput. Freeze nonessential changes. Narrow permissions. Let the human organization operate long enough to discover which knowledge has become ceremonial. A fallback that exists only at full theoretical staffing is not the fallback the institution actually owns.

The seventh condition is evidence.

A system can be interrupted and still remain uncontrollable in another sense if nobody can reconstruct what happened.

Evidence is how institutions convert action into accountability.

A bank needs a ledger.

A court needs a record.

A laboratory needs a notebook.

A software team needs version history and logs.

A military needs orders and after-action evidence.

An agentic system needs records that distinguish what the human asked, what the model inferred, which permissions were used, which tools acted, what changed, which other actors were engaged, and what the system believed at relevant moments.

Perfect transparency is impossible.

Useful evidence is not.

The strongest version of re-entry includes the ability to investigate after control is restored.

Otherwise the institution can recover technically while remaining unable to learn.

The eighth condition is reversibility.

Some actions are cheap to undo.

Delete the draft.

Restore the file.

Cancel the meeting.

Roll back the deployment.

Other actions become expensive the moment another party relies on them.

Send the wire.

Publish the accusation.

Terminate the employee.

Launch the attack.

Administer the drug.

Close the market.

Open the valve.

Re-entry is easier when the automated system is designed to make consequential actions reversible for long enough that human correction remains possible.

This does not mean turning every action into a committee meeting.

It means recognizing that cheap execution increases the value of selective friction.

A model can generate ten thousand actions cheaply.

A human cannot review ten thousand actions cheaply.

The solution cannot be review everything.

The solution has to be to distinguish actions by reversibility and consequence.

This is where AI-control research becomes relevant.

Researchers have studied protocols in which stronger untrusted models are monitored by weaker trusted models, suspicious actions are deferred, outputs are edited, audits are sampled, and tasks are made more legible to overseers. The results are not one-directional. Some protocols improve safety substantially in particular evaluations. Adaptive attacks reveal weaknesses in others. Newer work explores ways to make machine behavior easier for monitors to understand or to use more capable intermediate systems without granting them final authority.

The important lesson for this book is not that one protocol wins.

It is that control is an architecture.

There is no single human button that substitutes for good architecture.

The same is true of re-entry.

A company cannot add recoverability in the final week of deployment by writing "human override" in the policy document.

Recoverability is produced by choices made throughout the system.

How permissions are granted.

How state is represented.

How actions are logged.

How often humans practice intervention.

Which capabilities remain outside the automated layer.

How long credentials live.

How much subdelegation is allowed.

Whether a degraded mode exists.

Whether manual teams are staffed.

Whether critical actions are reversible.

Whether the organization ever tests any of this under stress.

This last point deserves emphasis.

A fallback that is not exercised is a theory.

Organizations discover this repeatedly with disaster recovery.

The backup exists.

The restore fails.

The plan exists.

The phone numbers are stale.

The alternate site exists.

The network configuration is wrong.

The emergency vendor exists.

The contract expired.

The manual process exists.

The forms depend on the same database that is unavailable.

Re-entry has to be rehearsed against reality.

That creates a problem for efficiency.

A real exercise is disruptive.

It takes time.

It may require slowing or isolating the automated system.

It reveals uncomfortable gaps.

It consumes expensive human attention.

The better normal operations become, the more absurd the exercise can appear.

Why practice being worse?

Because being worse on purpose is how you learn whether being worse is still possible when you have no choice.

This is not a universal argument for manual control.

Some systems are safer if humans never directly operate them. Some physical processes are too fast. Some calculations are too complex. Some networks are too large. Some medical devices should not expose low-level controls to untrained users. Some markets already depend on automated infrastructure that no human could reproduce transaction by transaction.

Re-entry must be defined at the right level.

A human does not need to route every internet packet to govern a network.

The human needs meaningful control over objectives, architecture, permissions, failover, and intervention.

A central banker does not need to approve every trade to govern monetary institutions.

A hospital administrator does not need to schedule every nurse to retain control of hospital operations.

A commander does not need to aim every sensor.

The goal is not microscopic human action.

It is macroscopic human recoverability.

This is the second easy way to misunderstand the re-entry threshold.

The first is to mistake shutdown for control.

The second is to mistake re-entry for nostalgia.

The book is not asking civilization to preserve a nineteenth-century way of doing work as a museum exhibit.

It is asking whether we should preserve enough independent human and non-agent capacity to keep consequential systems governable when the intelligent layer fails, misbehaves, is compromised, becomes unavailable, or must be deliberately removed.

Those are ordinary resilience questions.

AI gives them extraordinary stakes because the intelligent layer may spread across domains.

A company can survive losing one application if the rest of the organization remains intact.

A society may have a harder time if the same class of agentic dependence appears simultaneously in finance, energy, logistics, communications, software, government, and defense.

This is where the re-entry threshold becomes systemic.

One system crosses it and depends on another that has crossed it.

The fallback of the first assumes the normal operation of the second.

The second assumes a third.

The third assumes a cloud service whose recovery tools are themselves agentic.

The human returns to one room and discovers that the rest of the building no longer speaks human tempo.

The threshold is not a cliff.

It is a gradient of increasing cost.

Early on, re-entry is annoying.

Then expensive.

Then disruptive.

Then politically difficult.

Then economically irrational under normal conditions.

Then technically uncertain during abnormal conditions.

The danger is waiting until the last stage to decide that recoverability was valuable.

There is an economic test hidden inside that gradient. A fallback can be technically available and still cease to be usable because exercising it violates service commitments, market expectations, staffing budgets, or political promises built around automated performance. At that point the override survives in engineering terms while exit has become institutionally unaffordable.

That does not make the threshold irreversible. Recoverability can get cheaper too. Better logging can expose state. Simulation can give operators more practice. Modular architectures can make substitution less painful. Automated diagnostics can improve recovery without controlling the recovery path. The thesis weakens wherever those gains are preserved as independent capacity rather than traded away for another increment of utilization.

The better approach is to ask earlier.

Can humans see?

Can humans stop?

Can humans assume?

Can humans sustain?

Can humans reconstruct?

Can humans reverse?

Those questions sound almost embarrassingly basic.

That is useful.

Civilizations rarely lose practical capacities because nobody can understand an elegant theory.

They lose them because the old capacity looked unnecessary one budget cycle at a time.
