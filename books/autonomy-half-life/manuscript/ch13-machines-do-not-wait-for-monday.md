# Machines Do Not Wait for Monday

Human organizations contain more friction than their policies admit.

A manager may have authority to spend $25,000 without another signature. That does not mean she can spend it a thousand times before breakfast. She has to notice a need, find a supplier, open a system, read a quote, make a choice, perhaps speak to someone, perhaps sleep on it. Her formal authority is broad. Her human tempo narrows its practical expression.

Software removes much of that tempo. A machine can repeat an allowed action at a rate no human approver had in mind when the permission was designed. It can retry while everyone is asleep, monitor conditions continuously, queue work for later, call another service that calls another service, and continue a task after the person who initiated it has mentally moved on.

The permission can be identical while the practical power is not.

That is the governance problem autonomous agents make difficult to ignore. Traditional software often executes near the moment of user action. Click Buy, the purchase happens. Click Send, the message leaves. The temporal link between intention and effect is tight enough that the interface itself supplies some context. Autonomous systems loosen that link. “Find me a good option and book it if the price falls” may sit for three days. “Monitor these invoices and pay anything ordinary” may run for months. “Keep this service healthy” has no natural end. A vendor-negotiation agent can operate across personnel changes, supplier changes, fiscal quarters, and a strategy review nobody thought to translate into machine policy.

Elapsed time is only part of the problem. Machines can compress enormous contextual change into seconds. An agent might read a new message, discover a changed price, invoke a sub-agent, receive revised terms, and trigger a payment before a human could finish opening the thread. The world relevant to the mandate can travel farther in one second of machine activity than in an hour of human waiting.

That is why the clock is the wrong meter here too.

A token valid for five minutes can carry stale purpose after ten seconds if the recipient, task, risk, or principal changes. A token valid for a day may remain perfectly sensible for a low-risk read-only task in a stable environment. Expiration matters, but validity time and mandate freshness are different things.

The standards world is now circling this distinction from several directions. In February 2026, NIST launched an AI Agent Standards Initiative and separately published an NCCoE concept paper on software-agent identity and authorization. The problem statement is revealing. NIST is not asking only how to authenticate an agent. It is asking how organizations should identify, authorize, audit, and constrain software agents that can reach tools, applications, and data on somebody else’s behalf.

The IETF draft ecosystem is more experimental, and should be read with appropriate caution. Internet-Drafts are working documents, not standards. Still, several 2026 proposals independently reach for the same missing pieces. One proposes attenuating authorization tokens whose delegated children can have equal or narrower authority than their parents, including depth and lifetime limits. Another proposes an intent token that binds an action to a signed authorization envelope before execution. Other drafts explore delegation chains, actor provenance, resource-bound grants, and task-scoped constraints.

None of this means the authorization problem has been solved. In fact, the churn is evidence that it has not. It also corrects an easy exaggeration: fine-grained and delegated authorization did not begin with AI agents. OAuth already supports rich authorization details, and token exchange already has machinery for delegation and actor identity. The new difficulty is what happens after identity, scope, and delegation have all been represented correctly.

The credential can still be valid while the reason for using it has gone stale.

That is the gap this book cares about.

Suppose an expense agent has a valid resource-bound token, a verifiable delegation chain, a $10,000 transaction ceiling, and a declared purpose: ordinary vendor payments. At 9:00 a.m. the grant is clean. At 9:04 a vendor sends new bank details. At 9:05 an employee forwards the message into the payable queue. At 9:06 the agent is technically authorized to send the money.

Authentication answers who is acting. Scope answers what class of action is allowed. Delegation provenance answers where the authority came from. None of those questions, by themselves, answers whether this payment should still happen under these changed facts.

That last question belongs at runtime.

Runtime authority is not a new permission system layered theatrically on top of the old one. It is the practice of rechecking the conditions that were material to the grant when the system is about to create consequence. Before sending a payment, recheck recipient, amount, task status, and fraud state. Before publishing a message, recheck audience, account, campaign state, and whether the user still wants it active. Before changing production, recheck incident state, environment, model version, and whether a safer fallback is available.

The system does not need to reconsider the philosophy of the task every few milliseconds. It needs to remember what facts made the delegation reasonable and notice when one of those facts changes enough to matter.

This is the birth certificate becoming executable.

The unit of authority then moves closer to the action. A service account says, in effect, “this actor can pay.” A task-bound mandate says, “this actor can make this class of payment for this purpose, inside these bounds, while these conditions hold.” The second is harder to implement, but it is much closer to what human principals usually mean when they delegate. Nobody says, “You are now a being who may spend my money indefinitely.” They say, “Handle this.”

Agent systems should preserve the *this*.

Retries show why. A network call fails, so the system tries again. A queue delays delivery, so the job runs later. A payment endpoint times out, so the client checks status and perhaps resubmits. Reliability engineering already knows to worry about duplicate execution. Autonomy adds another question: even if the first attempt never succeeded, is the operation still wanted?

A user may cancel the task after the first attempt. The order may be filled elsewhere. The incident may resolve. The recipient may change. A retry is not merely a second transport attempt. It is a new execution event occurring in a potentially different world.

Queues are the same problem stretched out. A machine queue can preserve instructions through outages, throttling, dependency failures, and long backlogs. When the queue clears, old intention can surge into the present. The queue is a time machine for authority.

For consequential work, the system should not assume that a job entering the queue and a job leaving it inhabit the same mandate. The task may have been valid when scheduled. By execution, the principal may have changed roles, the account may have closed, a newer task may have superseded the old one, or the underlying need may have disappeared. Provenance helps only if the system is willing to ask whether the provenance still leads to a live source of authority.

This produces the problem of orphaned intention. A person starts a task and leaves the company. A customer revokes consent. A project is cancelled. The credential belongs to a service rather than the person, so it remains technically usable. What now owns the mandate?

Sometimes the organization does. An employee’s departure should not automatically cancel payroll, a backup, or a contractual obligation the company still owes. In other cases the person or customer was the source of the authority itself. A consent-based task should contract when consent disappears even if every API credential remains green.

The principal can disappear while the process remains alive. Machines are exceptionally good at continuing, which is both their value and their danger.

Human work has always contained accidental decay. People forget, get tired, change jobs, go home, lose interest, encounter colleagues, and feel the social friction of doing something strange. None of these is a reliable control system. Yet together they have limited how far stale instructions can travel before reality interrupts them. Automation removes many of those frictions for good reason. The mistake is removing them without noticing which governance functions they were accidentally performing.

A per-action spending limit is an easy example. A manager can approve purchases up to $10,000. The policy may work partly because the organization assumes the manager cannot execute hundreds of $9,999 transactions in seconds. Give the same formal authority to a machine and the hidden rate limit disappears.

Nothing about the dollar ceiling changed. Throughput did.

Machine delegation therefore needs to represent accumulation as well as individual scope. How much can an agent spend over an hour, day, incident, or task? How many customers can it contact before observation catches up? How many production resources can it modify? How many sub-agents can it create? How much irreversible consequence can accumulate on one grant?

These are not merely operational quotas. They define how far authority may travel before fresh evidence is required.

The same logic applies to long plans. An agent receives approval for ten steps. The first seven steps succeed and change the environment. By step eight, the state the principal approved no longer exists. A cloud-cost agent removes apparently unused resources; the removals change load and redundancy, so later removals no longer carry the same risk. A negotiation agent makes early concessions; the counterparty reacts, changing the meaning of the final concession. A robot moves one object and opens a path that changes the safety state for the next movement.

The approved plan creates its own drift.

That matters because approval is often treated as if it attaches to a sequence of verbs. In reality, the principal approved a projection of future states. Once execution changes those states materially, later actions may need to be evaluated against what actually happened rather than what the plan predicted.

The agent’s own actions are context events.

This is where checkpoints earn their cost. They need not be constant and they need not always summon a human. A checkpoint can narrow authority automatically. A trading agent may retain authority to reduce exposure under abnormal conditions while losing authority to increase it. An industrial controller may stabilize equipment while refusing a new operating mode. An incident agent may roll back a known deployment while requiring fresh authority for an untested repair.

A mature system designs the principal’s absence into the mandate. It does not discover at the worst moment that the only available control is “ask a human” and the human is asleep.

This is also the strongest counterargument to aggressive mandate decay. Fast systems are useful precisely because they can act before a committee reconvenes. Constant reauthorization would turn delegation back into centralized supervision and make autonomy ceremonial. In some domains, the cost of waiting is itself the dominant risk.

The answer is not more prompts. It is better preauthorization.

Inside a well-described region, authority can be strong and immediate. As the system approaches a boundary the principal actually cared about—changed recipient, unusual accumulation, new tool, changed principal, irreversible commitment—the authority should narrow, degrade, or ask again. The objective is selective interruption: enough friction to stop stale power at the edges without forcing ordinary work through a human tollbooth.

That suggests a different product metric. “Percent of tasks completed without human involvement” rewards silence, not judgment. A system can improve that number by making fewer escalations, including fewer correct escalations. A more serious measure would ask whether interruption occurs at material mandate boundaries, whether false interruptions are tolerable, how often consequential actions proceed after a material condition changed, and how often users broaden permissions simply to escape annoying controls.

The governance system is part of the product. If users constantly fight it, they will route around it.

Cross-organizational delegation makes the problem harder because there may be several principals at once. A travel agent can act for the user, under an employer’s travel policy, through a hotel’s cancellation rules, a payment network’s transaction requirements, a bank’s fraud controls, and legal obligations imposed on all of them. A cryptographic chain can show who delegated to whom. It cannot guarantee that all parties mean the same thing by an acceptable action.

The action survives only where the mandates overlap.

That is why “the agent has permission” is increasingly misleading language. An autonomous process operates at the intersection of several current authorities. Machine-readable policy can evaluate much of that intersection, but some conflicts remain institutional or legal rather than computational. A good system needs a degraded state for genuine ambiguity instead of treating every unresolved question as either execute or fail.

Versioning adds one more source of drift. A long-running task can stay nominally unchanged while the practical actor changes underneath it. The model is upgraded. A planning algorithm changes. A new tool becomes available. Memory becomes longer. Recursive delegation is enabled. The identity string stays the same while the set of reachable consequences expands.

Better capability is not automatically more dangerous. A model upgrade can reduce error. It can also make possible actions the principal never contemplated when granting authority. What matters is whether the changed capability would have altered the original decision to delegate.

A bug fix may not. New payment capability probably does. A better summarizer may not. The ability to spawn sub-agents across external services might.

This is another reason authorization cannot be reduced to actor identity. Continuity of name is not continuity of capability assumptions.

Machine speed changes accountability after the fact too. A human can make one bad decision and investigators can often reconstruct the moment. An agent can make ten thousand related decisions under one stale assumption before anyone looks. Postmortem scale becomes part of harm.

The most valuable control point may therefore be the first observable change that predicts a class of stale consequences, not the catastrophic action at the end. The first changed-recipient event can narrow payment authority before a thousand transactions execute. The first evidence that a campaign purpose changed can preserve drafts while stopping sends. The first sign that a parent task ended can cancel downstream retries.

Machines can industrialize stale intention. They can also industrialize its correction.

They can carry provenance, remember the material conditions of a grant, compare those conditions with the state at execution, narrow consequence automatically, and bring a human only the delta that genuinely deserves judgment. NIST’s current work on agent identity and authorization and the competing IETF drafts are useful precisely because they make the machinery of delegated authority more explicit. But the machinery will still need a theory of when an otherwise valid grant has ceased to fit the world.

That is the autonomy half-life problem at machine speed.

The next question is where to spend the freshness budget. An unsent draft, a reversible reservation, a signed contract, and a transferred payment should not demand the same mandate age. The harder an action is to unwind, the less stale authority it can safely tolerate.