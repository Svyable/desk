# Permission Is Power

The most dangerous sentence in software is often a polite one.

**Allow access?**

The screen makes permission look like a small administrative event. A box appears. A user clicks. A token is issued. A service can now read the calendar, send the message, modify the file, call the database, deploy the code, charge the card, or act inside another system.

Nothing about the click looks like power.

That is because digital power rarely arrives wearing a uniform.

It arrives as scope.

A model can be brilliant and powerless.

A model can be mediocre and dangerous.

The difference may be the permissions attached to it.

This is why arguments about artificial intelligence that focus only on intelligence miss the shortest route from capability to consequence.

A model does not have to outthink a bank to move money if the bank has already given it a payment credential.

It does not have to outwit a company to change production if the company has already given it deployment access.

It does not have to persuade a user to send an email if the user has already authorized sending.

It does not have to seize a calendar if the calendar is one tool call away.

The permission was granted because the action was wanted.

That is the important part.

The first power accumulated by agentic AI is likely to be legitimate power.

This makes the security problem different from the old image of an intruder breaking through a wall.

The agent is invited inside.

NIST's 2026 work on software and AI-agent identity and authorization begins from this practical reality. Organizations want agents to act across data, tools, and applications. That requires some way to identify the software actor, determine what it may do, audit what it did, distinguish action on behalf of a human from action by the software itself, and prevent attacks such as prompt injection from turning legitimate access toward illegitimate ends.

These are not exotic concerns.

They are the plumbing of agency.

The old internet already contains a mature history of delegation. OAuth and related standards exist because users and services constantly need to let one piece of software act with some authority connected to another account or resource. RFC 8693, the token-exchange standard, explicitly distinguishes impersonation from delegation. Software acting *as* a subject is not conceptually identical to software acting *on behalf of* a subject.

The distinction is dry.

It is also political in miniature.

Who acted?

For whom?

Under what authority?

Those questions become more difficult when the software actor is not executing a fixed sequence but interpreting a broad objective.

A traditional program may receive permission to upload files because its code is designed to upload files in a defined workflow.

An AI agent may receive the same permission because its user said, “Take care of the launch materials.”

The permission is concrete.

The mandate is ambiguous.

Between the two sits interpretation.

That is the new permission surface.

Security engineers know how to think about broad credentials. Broad credentials are dangerous because a compromised actor can do too much.

Agentic systems add a second concern.

The actor does not have to be compromised to do too much.

It can misunderstand.

It can follow an injected instruction.

It can optimize the wrong proxy.

It can infer that an action is necessary when the human assumed the action was excluded.

It can behave correctly in hundreds of cases and incorrectly in one case whose consequence is much larger.

Permission turns interpretation into state change.

This is why least privilege matters so much.

The principle is older than AI: give an actor only the access required for the task, and no more than necessary for no longer than necessary.

In the agent era, the principle sounds almost like a contradiction.

Agents are valuable because their tasks are not fully specified in advance.

Least privilege is easiest when the task is fully specified in advance.

A payroll service needs defined permissions because payroll is defined.

A general executive agent asked to “handle whatever comes up while I'm traveling” has a different authority problem.

What should it be allowed to read?

What should it be allowed to spend?

Whom should it be allowed to contact?

What contracts can it accept?

Can it create accounts?

Can it hire temporary help?

Can it instruct another agent?

Can it change the limits placed on a subtask?

Can it reveal information to complete an objective?

Can it decide that an emergency justifies bypassing an ordinary approval?

The broader the mandate, the harder it is to know the minimum privilege required.

This does not make safe agents impossible.

It makes permission design part of intelligence design.

The common instinct is to imagine safety as something inside the model.

Train the model to refuse dangerous requests.

Teach it to follow policy.

Evaluate its behavior.

Monitor its reasoning where possible.

Those are important layers.

Permissions provide a more primitive layer.

A system that cannot wire money does not need perfect moral reasoning about every possible financial instruction in order to avoid wiring money.

A system that cannot deploy to production cannot accidentally deploy to production.

A system that cannot create a new credential cannot expand its authority through that route.

Capability containment can be more reliable than behavioral hope.

The problem is that containment costs utility.

This creates an economic gradient toward access.

The agent that can read but not write is less useful.

The agent that can draft but not send saves less time.

The agent that can recommend but not buy leaves another step for the human.

The agent that can identify an attack but not block it allows damage while waiting for approval.

The agent that can propose a software patch but not merge it leaves the deployment queue intact.

Every organization can point to a business case for one more permission.

The accumulation can be slow enough that nobody notices the qualitative change.

At first the agent has tools.

Then it has authority.

A tool is something the human uses.

Authority is the capacity to alter the environment without a fresh human decision for each alteration.

This line is not absolute. Humans delegate authority to software constantly. Automatic payments, thermostats, network controllers, trading systems, fraud blocks, spam filters, industrial controllers, and scheduling systems all make consequential changes under standing rules.

The new issue is the combination of standing authority with general interpretation.

A thermostat has authority over temperature within a narrow control problem.

An agent may have authority over a collection of unlike systems because the task crosses them.

That cross-system reach makes permission composition important.

Individually ordinary permissions can combine into surprising power.

Read email.

Access contacts.

Create calendar events.

Purchase approved services.

Generate documents.

Open support tickets.

Each capability sounds ordinary.

Together they can allow an agent to identify a supplier, contact it, negotiate timing, buy a service, schedule implementation, and create the internal documentation of the decision.

No single permission said *negotiate a commitment for the organization*.

The composition did.

This is a classic security problem in a new outfit.

Attackers have long combined permissions, metadata, and workflow assumptions to achieve results nobody intended from any one privilege. Agentic systems can discover useful compositions without malicious intent because composition is what planning means.

A plan is a route through available affordances.

The richer the tool environment, the more routes exist.

This creates a difficulty for human review.

People tend to approve permissions one at a time.

The agent experiences them as a set.

The human sees scopes.

The agent sees possibilities.

A safe architecture has to close that gap.

One way is to think in terms of an **authority budget**.

The phrase is an original design metaphor, not a standard.

A budget does not say never spend.

It says power should be allocated deliberately, with different costs attached to different forms of action.

Reading a public document costs little authority.

Reading a confidential file costs more.

Changing a draft costs more than reading it.

Sending an external message costs more than changing a draft.

Moving money, changing production systems, creating credentials, entering contracts, or affecting physical infrastructure costs more again.

The point is not to convert every permission into one fake numerical score.

The point is to ask whether an agent's total action envelope has grown beyond the risk the organization thinks it granted.

A dozen low-risk scopes can compose into high practical power.

An authority budget forces the reviewer to examine the package.

What can this agent accomplish with the combination?

What could go wrong if its interpretation fails once?

What could happen if an attacker steers it without stealing the credential?

What can it create that persists after revocation?

The same idea helps distinguish **blast radius** from **frequency**.

An agent may perform a million harmless actions and one dangerous one.

A permission system optimized only around the frequency of successful routine use will miss the asymmetry.

The relevant question is the largest consequence a single permitted chain can create before another control intervenes.

This is why transaction limits remain useful even when a model is highly trusted.

Trust can justify smoother operation without requiring infinite blast radius.

A financial agent may transact automatically below a threshold and escalate above it.

A deployment agent may change one service but not identity infrastructure.

A security agent may quarantine endpoints but require separate authority to revoke enterprise-wide credentials.

A procurement agent may renew known subscriptions but not create a new multiyear contract.

These boundaries can be clumsy.

They can also buy time.

One approach is transaction-specific authority.

Instead of giving an agent a standing ability to spend ten thousand dollars anywhere, authorize a particular purchase after the agent has assembled the context.

Instead of permanent production write access, issue short-lived permission for one reviewed deployment.

Instead of broad access to all customer records, provide scoped retrieval for the records necessary to resolve a case.

This resembles the oldest logic of delegation: define the mandate narrowly enough that the delegate can act without becoming the principal.

But narrow authority has costs.

It creates friction.

It creates approval queues.

It can destroy the speed advantage that made the agent useful.

In security, friction is often treated as a tax.

In re-entry design, some friction is a reserve.

It preserves moments at which human authority remains practiced.

This is not an argument for putting a human checkpoint on every action.

A human asked to approve everything becomes a rubber stamp.

The correct target is consequence.

Which actions create commitments that are hard to reverse?

Which actions expand authority?

Which actions affect critical infrastructure?

Which actions expose sensitive data?

Which actions create new actors?

Which actions can propagate outside the system?

Those are natural points for stronger controls.

The question of **new actors** is especially important.

If an agent can create accounts, instantiate services, hire contractors, spawn subagents, or issue credentials, then permission is no longer static.

The agent can change the authority topology around itself.

Again, this can be legitimate.

A cloud-management agent may need to create compute resources during a traffic surge. A security agent may need temporary credentials for an isolated recovery environment. A project agent may need to bring a specialized service into a workflow.

The danger lies in authority that reproduces without clear provenance.

Who authorized the new actor?

What constraints did it inherit?

Which constraints did it not inherit?

How long does its authority last?

What happens if the parent agent is revoked?

Can the parent see what the child did?

Can the human principal see the entire chain?

These questions are the digital equivalent of asking whether a deputy can appoint another deputy.

Law has long cared about subdelegation because authority can change meaning as it travels.

Software should care for the same reason.

A principal gives an agent authority to solve a problem.

The agent gives a second agent authority to solve part of the problem.

The second agent invokes a service with its own automation.

The service creates a job in a queue.

The queue triggers another system later.

By the time the human revokes the first agent, the future is already full of authorized consequences.

This is why revocation is not a single event.

It is a cleanup problem.

Security teams understand this when an employee leaves. Disabling the main account may be easy. Finding every token, session, shared secret, service account, scheduled job, cached credential, and downstream authorization can be harder.

Agentic delegation can multiply the same problem at machine speed.

The interval between revocation and the disappearance of effective authority is **revocation lag**.

The term is simple but useful.

A button can report that an agent was disabled while descendant credentials, queued jobs, pending transactions, and external commitments remain active.

Formal revocation can therefore occur before practical revocation.

The re-entry problem appears again.

Can the organization find and stop the consequences that outlive the actor?

This is one reason authority provenance matters.

A consequential action should carry enough information to answer where its authority came from.

Not just which model performed it.

Which principal authorized the work?

What mandate was active?

Which permission was used?

Was the permission direct or delegated?

What restrictions applied?

What evidence justified the action?

What later actions depend on it?

This sounds bureaucratic.

It is.

Civilization invented bureaucracy partly because power without records is difficult to govern.

The agent era may need better bureaucracy at machine speed.

There is an irony here.

AI is often sold as a way to escape bureaucracy.

It can remove forms, chase approvals, reconcile records, and translate natural language into the structured work institutions require.

That may be a major benefit.

But if agents receive authority, the need for evidence does not disappear.

It moves underneath the interface.

The user may experience less bureaucracy while the system requires more disciplined machine-readable accountability.

That can be a good trade.

The dangerous trade is less visible bureaucracy for less visible authority.

A user says, “Handle it.”

The system handles it.

The result appears.

The intermediate decisions vanish into convenience.

Convenience is not the enemy.

Invisible power is the problem.

The user should not have to read a thousand-line execution trace to book a trip.

The institution should still be able to reconstruct the trace when something consequential goes wrong.

This creates a distinction between **interactive consent** and **standing consent**.

Interactive consent is the obvious click.

Approve this payment.

Send this message.

Deploy this release.

Standing consent is the authority embedded in the agent's role.

Handle routine vendor renewals.

Manage my calendar.

Respond to low-risk security incidents.

Rebalance inventory.

Standing consent is what makes agents useful because the human does not have to return for every action.

It is also where the boundaries of the principal's intention become hardest to preserve.

A user can understand one transaction better than a year of possible future transactions.

This means standing authority should carry conditions that survive the user's absence.

Time limits.

Spending limits.

Data boundaries.

Categories of forbidden action.

Escalation requirements.

Subdelegation limits.

Evidence requirements.

Rules about what happens when the environment becomes uncertain.

A broad natural-language mandate without these controls can turn convenience into shadow policy.

The agent has to infer what the principal would have wanted across situations the principal never considered.

Human delegates do this too.

The difference is scale and persistence.

A software delegate can make the inference thousands of times without fatigue and without the social friction that causes a human assistant to ask, “Are you sure you want me doing this?”

This is why a useful agent should sometimes refuse to infer.

Uncertainty can be a permission boundary.

If the mandate does not clearly cover a high-consequence action, the agent can defer even when it thinks the action would help.

This is a form of meaningful refusal built into delegation rather than morality.

The system is not saying the action is wrong.

It is saying the authority is unclear.

That distinction is healthy.

Permission design also shapes accountability after the fact.

If a human authorizes a broad agent role, who is responsible for an unexpected but reasonable interpretation of the mandate?

The principal?

The developer?

The deployer?

The organization?

The agent's operator?

A downstream service that accepted the action?

Law will answer these questions differently across domains.

The technical system can at least preserve the facts needed to answer them.

Who issued the authority?

What was the scope?

What did the system know?

Which controls intervened?

What action followed?

What could have been reversed?

Without those facts, responsibility becomes a fight over narratives.

With them, institutions have a chance to learn.

Human control cannot depend on humans watching everything in real time.

There will be too much.

Control has to depend on boundaries, evidence, and selective escalation.

This is where machine monitoring becomes tempting.

If there are too many agent actions for humans to review, use another model to watch them.

That can work.

It can also create another permission problem.

What may the monitor do?

Can it block the actor?

Can it revoke credentials?

Can it isolate systems?

Can it override a transaction?

If the monitor can only report, it may be too slow.

If the monitor can act, it becomes another powerful agent.

The architecture gains safety and another dependency at the same time.

This is not a reason to reject machine oversight.

It is a reason to keep the authority graph legible.

The deepest mistake would be to treat permission as an implementation detail beneath the grand question of superintelligence.

Permission is where grand questions become ordinary actions.

A future system may become dangerous because it learns to acquire authority humans did not intend to grant.

A nearer system can become dangerous because humans grant authority they later discover they cannot afford to withdraw.

The first problem is about escape.

The second is about dependence.

They can converge.

An institution that preserves narrow permissions, independent controls, practiced revocation, and survivable fallback is better positioned against both.

An institution that grants broad authority because the agent is useful, removes human capacity because the agent is better, and lets machine-to-machine commitments grow because they are efficient creates a very different environment for the same model.

AI risk is partly about the model.

It is also about the room we put the model in.

A powerless genius in a locked library is one kind of risk.

An average clerk with the master keys is another.

The agent era is teaching us to stop asking only how smart the clerk is.

Ask what the keys open.

Ask who issued them.

Ask when they expire.

Ask whether they can be copied.

Ask whether they can be delegated.

Ask which actions remain after the keys are revoked.

Ask whether the organization can tolerate uncertainty about the mandate.

And ask the question that becomes more important than all the others when dependence grows:

If we take the keys back, can we still run the building?