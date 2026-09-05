# Machines Do Not Wait for Monday

Human organizations contain more friction than their policies admit.

A manager may have authority to spend $25,000 without another signature. That does not mean she can spend it a thousand times before breakfast. She has to notice a need, find a supplier, open a system, read a quote, make a choice, perhaps speak to someone, perhaps sleep on it. Her formal authority is broad. Her human tempo narrows its practical expression.

Software removes tempo.

That is not a metaphor. A machine can repeat an allowed action at a rate no human approver had in mind when the permission was designed. It can retry while everyone is asleep. It can monitor conditions continuously. It can queue work for later. It can call another service, which calls another service. It can continue a task after the person who initiated it has mentally moved on.

The permissions may be identical.

The practical power is not.

This is why autonomous agents make autonomy half-life more than an interesting governance principle.

They change the time geometry of delegation.

Traditional software often executes near the moment of user action. Click Buy, the purchase happens. Click Send, the message leaves. The temporal link between intention and effect is tight enough that the interface itself supplies context.

Autonomous systems loosen that link.

A user can say, “Find me a good option and book it if the price falls.”

The task may sit for three days.

“Monitor these invoices and pay anything ordinary.”

The task may sit for months.

“Keep this service healthy.”

The task has no natural end.

“Negotiate with vendors and renew contracts under these limits.”

The agent may operate across fiscal quarters, personnel changes, supplier changes, and strategy changes.

The longer the interval between instruction and consequence, the more opportunities there are for the world to become different from the one in which the instruction was given.

This is not only elapsed time. Machines can compress enormous change into a short interval.

An agent might read a new message, discover a changed price, invoke a sub-agent, receive a new contract, and trigger a payment within seconds. The world relevant to the mandate can travel farther in one second of machine activity than in an hour of human waiting.

Clock time becomes even less informative.

This is why time-bounded credentials, though valuable, cannot be the whole answer to agent authorization.

A token valid for five minutes can still carry stale purpose if the relevant context changes in the first ten seconds. A token valid for a day may remain appropriate for a low-risk read-only task in a stable environment. The right question is what happened between grant and execution.

Current standards work is beginning to confront pieces of this problem.

Internet-Drafts published during the rapid development of agent infrastructure in 2026 explore intent tokens, principal-agent protocols, authorization envelopes, delegation chains, validity windows, and cross-organizational identity. These documents are works in progress, not settled standards. Their existence is nevertheless evidence that the old assumption of a single long-lived credential is inadequate for systems that can delegate and act asynchronously.

Several ideas recur for good reason.

Scope should be explicit.

Delegation should be attributable.

Children should not gain more authority than parents.

Validity should be bounded.

Revocation should be possible.

High-risk actions may deserve fresh authorization.

These are foundations.

Autonomy half-life adds a question that cuts across them: what should happen when the token remains valid but the environment that justified it has materially changed?

The answer matters because agents do not wait for Monday’s meeting to discover the change.

They encounter it at runtime.

Runtime is where legitimacy has to survive.

A user can approve a plan at noon. By 12:02, the plan can be wrong. A policy team can approve an agent’s tools in January. By March, the agent may be connected to a new model, a new database, a new customer population, and a new chain of sub-agents.

The authorization event is historical.

Execution is present tense.

This creates a new category of systems design: runtime mandate evaluation.

The phrase can sound grander than the implementation needs to be. In simple cases it is straightforward.

Before sending a payment, recheck recipient, amount, task status, and fraud state.

Before publishing a message, recheck audience, account, classification, and whether the user still wants the campaign active.

Before changing production, recheck incident state, environment, model version, and whether a more conservative action is available.

The system does not need to reconsider the entire philosophy of the task. It needs to re-evaluate the facts that were material to the grant.

This is the birth certificate becoming executable.

Agent architectures make such checks possible because they already maintain task state. The agent knows what it is trying to do, which tool it is about to call, and often which external facts changed. Instead of treating tool authorization as a static property of the agent, the system can bind execution authority to the current task state.

This is a profound shift.

The unit of authority moves from actor to action.

A service account says, in effect, “this actor can pay.”

A task-bound mandate says, “this actor can make this class of payment for this purpose while these conditions hold.”

The second is harder to implement.

It is also much closer to what human principals mean when they delegate.

Nobody says, “You are now a being who may spend my money indefinitely.”

They say, “Handle this.”

Agent systems should preserve the this.

The need becomes clearer when agents retry.

Retries are a basic reliability technique. A network call fails, so the system tries again. A queue delays delivery, so the job runs later. A payment endpoint times out, so the client checks status and perhaps resubmits.

Retries assume that the operation remains appropriate across delay.

That assumption can fail.

A user cancels the task after the first attempt. The recipient changes. The order is filled elsewhere. The underlying incident resolves. A duplicate action becomes harmful.

A retry should not inherit authority blindly from the first attempt.

The retry is a new execution event.

It should recheck the material conditions that can change between attempts.

This principle sounds obvious to reliability engineers when framed as idempotency and duplicate prevention. Autonomy broadens it beyond technical duplication. The question is not only “Did this operation already happen?” It is “Should this operation still happen?”

The answer can change without any previous execution.

Asynchrony also creates orphaned intention.

A person starts a task and leaves the company. A customer closes an account. An employee changes roles. A project is cancelled. The task remains in a queue. The credentials remain technically valid because they belong to a service rather than the person.

Who owns the mandate now?

This is where principal identity becomes temporal.

A task should not merely know who initiated it. It should know what source of authority supported that initiation and whether the source remains valid.

If an employee’s role changes, some tasks may continue because the company, not the employee personally, owns the purpose. Others may need reassignment or cancellation. If a customer revokes consent, tasks based on that consent may need to contract even if the customer account still exists.

The principal can disappear while the process remains alive.

Machines are very good at continuing.

That is both their value and their danger.

Human tasks decay naturally because humans forget, get tired, change jobs, lose interest, and encounter social friction. A machine can preserve an instruction with perfect fidelity long after the instruction has lost practical meaning.

We often describe this as reliability.

Reliability needs an object.

Reliable at doing what the principal still wants, or reliable at doing what the principal once said?

The distinction is the entire book in one question.

Agent speed creates another problem: aggregate authority.

A per-action limit may be sensible for humans and dangerous for machines.

A manager can approve purchases up to $10,000. The organization assumes the manager will not execute hundreds of $9,999 transactions in seconds because human behavior creates natural aggregation. An agent can.

The old rule encoded a per-decision boundary while relying on human tempo to control total exposure.

Machine action removes that hidden constraint.

The authority model therefore has to represent rate and accumulation.

How much can the agent spend over an hour, day, task, or incident?

How many messages can it send before review?

How many resources can it modify?

How many sub-agents can it spawn?

How much irreversible consequence can accumulate before the principal sees the result?

These are not merely quotas. They describe the distance an autonomous process can travel on one grant.

A useful mandate includes a travel budget for consequence.

Again, the phrase should not be turned into one magic number. The point is structural. An authority that is safe for one human-scale action may be unsafe when repeated at machine scale.

This is one place where rate limits and aggregate limits become governance tools rather than only reliability controls.

They slow the growth of stale consequence.

Machine speed also changes escalation.

A human can notice uncertainty and pause because pausing is part of ordinary work. An agent optimized for completion may treat interruption as failure. If the product measures success by tasks finished without human input, designers create pressure against asking again.

Autonomy becomes a KPI.

This can distort governance.

The best agent is not necessarily the one that asks least.

It is the one that knows which decisions it was actually authorized to make.

A system that escalates one changed bank account while autonomously completing a thousand ordinary invoices may be more autonomous in the meaningful sense than a system that executes everything and forces humans to investigate afterward.

Selective interruption protects the rest of the autonomy budget.

Product teams need to measure this differently.

Instead of celebrating “percent of tasks completed without human involvement,” measure whether human involvement occurs at material mandate boundaries. Track the quality of escalations. Track false interruptions. Track consequential actions executed under stale conditions. Track how often users broaden permissions to avoid friction.

The governance system is part of the product.

If users constantly fight it, they will defeat it.

Agents also make cross-organizational delegation ordinary.

A company’s agent may call a vendor’s agent. The vendor’s agent may use a payment provider. The payment provider may invoke identity services in another trust domain. Authority crosses boundaries whose policies, clocks, and risk models differ.

A credential can attest that a request came through a valid chain.

It cannot guarantee that every organization in the chain interprets purpose the same way.

This is where compact intent becomes valuable.

The receiving system needs enough information to enforce its own obligations without receiving unnecessary private context. Purpose categories, transaction class, relevant constraints, and delegation provenance can help.

But cross-organizational autonomy exposes a hard truth: no single principal controls the whole chain.

The user wants a hotel.

The employer sets travel policy.

The hotel sets cancellation terms.

The payment network sets transaction rules.

The bank manages fraud risk.

Regulators impose legal obligations.

Each source of authority has its own half-life.

The action survives only where the mandates overlap.

This makes simple “agent permission” language misleading.

An agent does not possess one permission state. It operates at the intersection of multiple current authorities.

Machine-readable policy can help evaluate that intersection, but some conflicts will remain institutional and legal rather than computational.

The system needs escalation routes for genuine ambiguity.

Machines do not wait for Monday.

Humans still govern many of the rules they execute.

The challenge is to let machines move at machine speed inside regions where the mandate remains clear while creating enough friction at the edges that speed does not become stale power.

The goal is not to make autonomous systems slow.

It is to make authority travel no faster than its justification.

Human tempo has been doing more governance work than we usually acknowledge.

Meetings impose delay. Sleep imposes delay. Physical signatures impose delay. Working hours impose delay. Social embarrassment imposes delay. The fact that a manager can only make so many decisions before lunch imposes delay.

Many of these frictions are wasteful. Automation removes them for good reason.

But removing friction can expose controls that were never actually encoded.

Consider a customer-support representative allowed to issue refunds up to a certain amount. The policy may have been written around the assumption that the representative handles a finite queue one case at a time. Give the same formal authority to a system capable of processing every eligible case in seconds and the policy’s practical meaning changes.

Nothing about the refund limit changed.

Throughput did.

The grant’s birth certificate should therefore include, at least conceptually, the operating tempo the principal assumed.

How quickly may consequence accumulate?

How many actions can occur before observation catches up?

How much state can change before another control sees it?

This is not an argument for artificially slowing every agent to human speed. That would throw away much of the value.

It is an argument for replacing accidental friction with deliberate bounds.

If the organization relied on a human’s finite attention to limit aggregate exposure, the machine version needs an explicit aggregate control.

If the organization relied on the fact that unusual actions would be noticed in a meeting, the machine version needs an event trigger.

If the organization relied on the employee’s social awareness that “this looks strange,” the machine version needs some representation of what strange means for the mandate.

Automation should remove inefficiency, not silently remove governance.

This distinction becomes stark in queues.

A machine queue can preserve instructions indefinitely unless retention rules say otherwise. Jobs can sit behind outages, retries, throttling, or dependencies. When the queue clears, work can surge into the world based on intentions formed hours or days earlier.

The queue is a time machine for authority.

A resilient system should not assume that a task entering the queue and a task leaving the queue inhabit the same world.

High-consequence jobs deserve a mandate check when they are dequeued, not only when they are enqueued.

The task may have been valid when scheduled.

The user may have changed the instruction.

The principal may have lost the role.

The recipient may have changed.

The incident may have ended.

A newer task may have superseded the old one.

The queue should carry enough provenance to ask whether execution still fits.

This is a small architectural requirement with large consequences.

Without it, reliability machinery can resurrect stale intention.

The same applies to long plans.

An agent may construct a ten-step plan and receive approval at the beginning. By step eight, the state has changed because the first seven steps succeeded. The environment is no longer the one the principal reviewed.

The approved plan can create its own drift.

This is a subtle but important form of mandate decay.

Autonomous action changes the world, and the changed world can invalidate later parts of the same authorized plan.

A company authorizes an agent to reduce cloud cost by decommissioning unused resources. The first removals change system load and redundancy. The later removals may no longer be equivalent to the first ones.

A user authorizes a negotiation strategy. The counterparty reacts to early concessions. The final concession now occurs in a different bargaining environment from the one the user imagined.

A robot moves an object, opening a path that changes the safety state for the next movement.

Execution itself creates distance to the grant.

This means runtime mandate evaluation cannot be limited to external events.

The agent’s own actions are context events.

The more a plan transforms the environment, the more important checkpoints become before irreversible steps.

This is another reason a one-time approval of an entire plan can be misleading. The principal approved a projection of future states, not the actual states that emerged.

The system should identify points where the plan crosses consequence boundaries or where prior steps materially change the assumptions for later ones.

Again, this is not constant reapproval.

It is state-aware execution.

Machine speed also collapses the distance between detection and action.

A human analyst might see a price anomaly, investigate, discuss it, and execute hours later. An autonomous trading or purchasing system can detect and act in milliseconds or seconds.

This creates a different burden on the authorization layer.

A human approval process cannot be inserted into every loop without making the loop useless.

The mandate has to contain more preauthorized judgment.

This sounds like the opposite of decay, and it is not.

The faster the domain, the more important it is to define the expected region in advance.

Within that region, authority can be strong and immediate.

Outside it, the system should have predesigned degraded behaviors that do not depend on a human answering instantly.

A trading agent can reduce exposure automatically under abnormal conditions while losing authority to increase it. An industrial controller can stabilize equipment while refusing a new operating mode. An incident agent can roll back a known deployment while requiring fresh authority for an untested repair.

The principal’s absence is designed into the mandate rather than treated as a runtime surprise.

This is what mature autonomy looks like at machine speed.

Not a human hovering over a fast system.

A grant that already knows what ordinary variation, abnormal conditions, safe retreat, and irreversible escalation mean.

There is also a versioning problem.

The task can remain the same while the agent changes underneath it.

A model is upgraded. A planning algorithm changes. A new tool becomes available. A memory system begins retaining more context. The system can now accomplish the same instruction through paths that were impossible when the principal granted authority.

The identity string may be unchanged.

The practical actor is different.

This should sometimes shorten the mandate.

A principal who authorized a limited assistant may not have authorized a materially more capable system merely because the product upgraded automatically. Better capability can reduce error and simultaneously increase reach.

The system should distinguish continuity of identity from continuity of capability assumptions.

This is particularly important for long-running tasks. A task created under model version A may execute later under model version B. If B changes relevant behavior or consequence, the task should not inherit the old mandate without review merely because the user never reopened it.

The mandate can record which actor properties were material.

Not every model update matters. A bug fix may be irrelevant. A change that enables new tool use, recursive delegation, or materially different autonomy may not be.

This is another example of the book’s general method: identify the changes that would have altered the original grant.

Finally, machine speed changes accountability after the fact.

A human can make one bad decision and investigators can often reconstruct the moment. An agent can make ten thousand related decisions under the same stale assumption before anyone looks.

Postmortem scale becomes part of harm.

This makes early decay triggers more valuable because they cap repetition.

The first unusual changed-recipient event can narrow the mandate before a thousand transactions execute. The first evidence that a campaign purpose changed can stop later messages while preserving drafts. The first sign that a parent task ended can prevent downstream retries.

The right control point is often not the catastrophic action.

It is the earliest observable change that predicts a class of stale consequences.

That is why agents force us to think about autonomy half-life now.

Humans have always acted under stale instructions.

Machines can industrialize the mistake.

They can also industrialize the correction.

They can remember the grant, watch the material conditions, compare state at execution, narrow consequence automatically, and bring a human only the delta that genuinely deserves judgment.

Machine speed is not the enemy of responsible autonomy.

Unexamined inheritance is.

If we replace hidden human friction with explicit mandate boundaries, the machine can move faster than the human without outrunning the human’s authority.