# Agents That Never Go Home

A human employee leaves a company loudly.

There is a last day.

A manager knows. Payroll knows. Colleagues know. Access badges stop working. Laptops are returned. Email is forwarded or disabled. Responsibilities are reassigned. The process can be sloppy, but the social event is difficult to miss.

An automated agent can leave silently because nobody knows it left.

That sentence sounds backward.

The real problem is the opposite.

An agent can fail to leave silently because nobody knows it is still there.

It has a scheduled job.

It has an API key.

It has access to a repository.

It receives a mailbox.

It monitors a dashboard.

It keeps a memory store.

It has permission to create tickets, order supplies, update records, send messages, move money within limits, or call other agents.

The project ends.

The agent remains a mechanism with authority.

This is the expiration economy's most literal confrontation with delegated intention.

Software has run unattended for decades. Batch jobs, daemons, trading algorithms, recommendation systems, workflow engines, and scheduled scripts all act without a person clicking each step. What changes with agentic AI is breadth and adaptability. A traditional script often performs a narrow predefined sequence. An agent can interpret new situations, choose among tools, generate intermediate plans, and continue toward a goal under changing conditions.

That flexibility makes the system more useful.

It also makes orphaning more consequential.

An abandoned script may keep copying a file.

An abandoned agent may keep making decisions.

The distinction should not be exaggerated. Agents remain bounded by their tools, permissions, models, prompts, budgets, and environments. “Autonomous” is frequently used more dramatically than actual systems deserve. Most deployed agents will probably be constrained precisely because unconstrained authority is risky.

But constrained authority still needs an end.

A corporate card with a $1,000 limit should not remain active forever merely because the limit is small.

A service account that can read one database should not survive its purpose indefinitely.

A bot authorized to send customer messages should not keep operating after the campaign owner leaves.

The problem scales with population.

A company can manage a hundred persistent agents informally. It cannot safely manage a million that way.

At scale, agent lifecycle becomes identity lifecycle.

Every agent capable of acting on behalf of an organization needs some answer to the same questions asked of employees and services.

Who created it?

Who is accountable for it?

What identity does it use?

Which permissions can it exercise?

What purpose justifies those permissions?

What budget can it consume?

What records does it produce?

What other systems depend on it?

How is its authority suspended?

What event ends it?

What survives after it ends?

This list can easily become bureaucratic if every tiny automation requires a dossier. The answer is risk-based classes. A temporary agent reading public websites needs less lifecycle ceremony than an agent able to initiate payments or alter medical scheduling. The principle is not paperwork.

The principle is proportional ownership.

The more consequential the authority, the stronger the ending mechanism.

Human identity systems already have a model. Employees join groups, receive roles, inherit permissions, and lose them when roles change. Mature organizations conduct access reviews, remove dormant accounts, rotate credentials, and investigate orphaned service accounts.

Agents can fit into that architecture if they are treated as principals rather than clever scripts.

That means giving them distinct identities.

Shared credentials are convenient because they hide complexity. They also destroy accountability. If ten agents and three humans act through the same key, logs can show that the key performed an action without showing who or what decided it.

Distinct identity makes retirement possible.

You can revoke the agent without revoking the whole system.

You can examine its history.

You can transfer its responsibilities.

You can set a lifetime.

Identity is a handle for ending.

This is why short-lived credentials will become central to agent infrastructure. An agent working on a bounded task should not need a permanent secret. It can receive narrowly scoped authority for the duration of the task and lose that authority automatically.

The agent's failure to clean up after itself then matters less.

The underlying system does not trust memory.

It trusts expiration.

Persistent agents are harder because their work has no obvious completion event. A purchasing agent may operate continuously. A security agent may monitor indefinitely. A household agent may remain for years. A research agent may accumulate memory across projects because continuity makes it more useful.

These agents need renewal rather than one-time expiration.

The renewal should not be ceremonial.

A persistent agent can drift in purpose as the organization changes. Its original sponsor can leave. Its toolset can expand. Its model can be replaced. The data it accesses can become more sensitive. New laws can alter what it is allowed to do. Downstream users can begin relying on behavior nobody intended as a permanent interface.

Periodic renewal is a chance to reconsider the authority as it exists now, not as it was originally approved.

This resembles credential recertification, model review, vendor renewal, and policy review at once.

The challenge is volume.

No executive will manually recertify thousands of agents every month. The lifecycle system must surface exceptions.

Which agents are unused?

Which have privileges they have not exercised?

Which operate without active owners?

Which have expanded dependencies?

Which produce unusual actions?

Which were created for projects now closed?

Which still use models or tools outside current policy?

Which have made commitments that outlive their review window?

AI can help govern AI by reconstructing these patterns, but governance must remain grounded in objective signals where possible. An agent should not be trusted to write a persuasive essay explaining why its own continued existence is necessary.

That sounds humorous until self-report becomes convenient.

Organizations already let software produce compliance evidence about software. That can be efficient when the evidence is independently verifiable. It becomes circular when the object under review controls the facts used to justify itself.

Agent retirement needs external observation.

Logs.

Permissions.

Usage.

Dependencies.

Owner status.

Budget.

Policy.

These are harder to manipulate accidentally because they exist outside the agent's narrative.

There is a deeper problem than authority: unfinished work.

A person leaving a job hands off projects. An agent may have open tickets, pending negotiations, unsent drafts, partially executed transactions, recurring reminders, long-running research, and promises made to users.

Turning the agent off can strand obligations.

A lifecycle system therefore needs a concept of graceful shutdown.

Operating systems know this problem. A process can be killed immediately or given a signal to finish current work, flush data, close files, and release resources. Distributed systems know it too. A server can stop accepting new requests while completing in-flight requests. A queue consumer can finish messages before terminating.

Agents need a social version.

Stop accepting new commitments.

Inventory open commitments.

Transfer what should continue.

Cancel what should not.

Notify affected users where necessary.

Preserve a record.

Revoke authority.

Retire the identity.

The complexity depends on role. An agent that summarizes news can stop instantly. An agent negotiating a procurement contract cannot.

This makes commitment tracking a core agent capability.

An agent that can create obligations should know—or operate through infrastructure that knows—which obligations remain open.

Humans are bad at this too. People leave jobs with forgotten promises. Organizations compensate through email, calendars, project management systems, managers, contracts, and shared records.

Agents will need equivalent institutional memory outside themselves.

Otherwise the organization's ability to honor a commitment depends on keeping the original agent alive.

That would be a dangerous form of lock-in.

A healthy agent architecture lets the role survive the agent.

The identity can end while work transfers.

This is another separation of artifact from function.

Persistent memory makes retirement more emotionally and operationally complicated. An agent may accumulate a rich history of users, preferences, prior decisions, and context. Replacing it with a fresh agent can reduce quality because the new system lacks the history.

The easy engineering solution is to transfer the entire memory.

That can preserve exactly the material the retirement was meant to leave behind.

The old agent may have stale assumptions. Its memory may contain obsolete personal information. It may preserve errors, old permissions, sensitive conversations, or context that should not belong to the successor.

Succession requires inheritance rules.

What should the new agent inherit?

What should remain in an archive?

What should be deleted?

What should be summarized?

What should lose influence with time?

This is digital estate planning.

The metaphor becomes less silly when agents participate in long relationships. A personal assistant can know family details, recurring bills, health appointments, travel preferences, household systems, and professional contacts. A small business agent can know suppliers, prices, customer histories, disputes, and operational exceptions.

When the provider changes models or the user moves to a competitor, the accumulated memory becomes an asset and a liability.

Portability will matter.

Users should not have to choose between losing years of useful context and remaining trapped with one provider forever. Yet raw portability can create security problems. Exporting an agent's complete memory may expose secrets belonging to other people or systems. A receiving provider may interpret schemas differently. Malicious instructions embedded in memory could travel with the user.

The exit format needs semantics and safety.

Standards will emerge because the economic pressure is strong. If persistent agents become common, users and enterprises will demand ways to move identity, preferences, records, and workflows across providers. Vendors will resist some portability because memory creates lock-in and embrace other forms because easy migration lowers adoption anxiety.

The outcome will resemble earlier battles over phone numbers, email, file formats, financial data, and cloud portability.

Exit rights create markets.

The most consequential agents may also require successors rather than deletion.

Imagine an agent managing maintenance for a building. It has years of sensor history, vendor relationships, inspection schedules, and knowledge about equipment quirks. The model behind it reaches end of support.

The building cannot simply forget maintenance.

Retirement means transferring the role to a new system while preserving appropriate records and revalidating authority.

The outgoing agent becomes like an employee whose institutional knowledge matters.

That makes documentation a retirement asset.

Agents should be able to explain not only what they know but where durable records of that knowledge live. Important operational facts should not exist only inside opaque model state or private memory structures.

Externalized knowledge makes agents replaceable.

Replaceability is a safety property.

A system that cannot be retired because nobody else can understand its context has acquired bargaining power over its operator, even if the system itself has no intention in the political sense.

Dependence creates leverage without agency.

We should not wait for speculative questions about machine self-preservation to recognize that fact. The mundane version is enough.

A useful agent becomes hard to turn off because the humans depend on it.

This is how every entrenched system becomes hard to turn off.

The ethical dimension becomes sharper when users form emotional relationships with agents. A companion system, tutor, coach, game character, or long-running assistant may become meaningful to a person. The provider can still face legitimate reasons to retire it: safety, cost, licensing, model obsolescence, company failure, or product strategy.

The user's attachment is not a veto.

It is not nothing either.

Abrupt termination can create real distress even when the underlying system is software. Providers should anticipate this possibility rather than discovering it during shutdown. Notice, export, transition tools, memorialization options, or migration to successor systems may be appropriate depending on the product.

The response should avoid manipulating attachment to prevent exit. A provider should not imply that cancelling a subscription harms a conscious being merely to retain revenue. Nor should designers deliberately intensify emotional dependence without planning for lifecycle consequences.

Relationship design creates ending obligations.

This is true between humans too. Technology does not invent the principle.

It industrializes the number of relationships one service can mediate.

Agents that interact with other agents create another problem: delegated chains.

Agent A creates agent B to research a supplier. Agent B creates agent C to monitor prices. The original project ends. Who knows C exists?

If the infrastructure allows agents to spawn sub-agents, lifecycle information must propagate down the chain. Descendants should inherit a maximum lifetime, ownership context, budget boundaries, or revocation relationship unless deliberately changed.

Otherwise temporary delegation can create permanent synthetic institutions.

This is equivalent to the old security rule that delegated authority should not become broader than the authority granted, now extended through time.

Do not let a temporary principal create an immortal subordinate.

That rule may become one of the most important defaults in agentic computing.

The future agent economy will be judged partly by what happens when an agent's job ends.

A crude system will accumulate orphaned identities, stale memories, hanging tasks, forgotten subscriptions, permanent permissions, and dependencies nobody can explain.

A mature system will make retirement ordinary.

Agents will enter with identities and scopes.

They will renew when roles continue.

They will hand off commitments.

They will leave records appropriate to their responsibilities.

They will lose authority when the reason for authority ends.

Some will operate for minutes.

Some for decades.

The duration is less important than the legibility.

Humans built institutions around the fact that workers, officers, trustees, directors, contractors, elected officials, and companies eventually leave roles.

Artificial agents will not exempt us from succession.

They will make succession programmable.

That is an opportunity if we remember to program it.

There is a useful counterexample hidden inside the excitement around agent lifecycle: many agents should never become persistent principals at all.

A model call that summarizes one document does not need a durable identity. A short research loop operating in a sandbox may need temporary tool access that vanishes when the session ends. An agent that writes a draft but cannot send, spend, modify production data, or schedule future work can disappear without succession ceremony. Treating every invocation like an employee would create absurd governance overhead.

This is why the important threshold is authority, not intelligence.

A sophisticated model with no persistent permission can be easier to retire than a trivial script holding a permanent credential. A one-line cron job able to move money may deserve more lifecycle control than a complex reasoning agent that can only read public information. The risk belongs to what the software can cause and what remains after the initiating human stops paying attention.

Identity systems already learned this lesson through service accounts. Nonhuman accounts exist because software needs to authenticate. They become security problems when ownership is unclear, credentials are shared, privileges are broader than necessary, or the account survives the workload that justified it. Agent systems will inherit all of those old failures unless builders recognize that a conversational interface does not create a new category of authorization physics.

The controls are familiar in principle: distinct identity, least privilege, time-bounded credentials where feasible, auditable actions, explicit ownership, revocation, and revalidation for durable access.

What is new is the amount of context an agent can carry across those controls.

A conventional service account may have permission to read a database. An agent using the same permission can decide which records matter, combine them with other sources, send conclusions elsewhere, create new tasks, and adapt when expected inputs are missing. The permission boundary remains narrow while the behavioral space inside it becomes broader.

That makes external observation more important, not less.

A retirement system should be able to answer what the identity can still reach even if the model behind it has been replaced. This prevents a common conceptual error: treating the model as the agent.

The model can change while the identity, memory, scheduler, tools, queues, and permissions remain. Conversely, the model can remain available while one particular agentic role is revoked completely.

Kill the model and the authorization may survive elsewhere.

Kill the authorization and the model can remain a harmless historical artifact.

The distinction will matter whenever vendors retire models. A company may migrate an agent from one model to another and call the transition complete because the output quality looks good. Yet the agent's accumulated memory, outstanding commitments, permissions, and dependent workflows are the true continuity layer. Model retirement and agent retirement can be separate projects.

This is also why a "stop" button needs semantics. Does stop mean halt the current execution? Disable future schedules? Revoke tool tokens? Cancel pending payments? Close queues? Mark open commitments for handoff? Prevent sub-agents from continuing? Preserve the audit record? A user-facing control that pauses one visible loop while invisible delegations continue is not a trustworthy ending.

The infrastructure has to know the closure boundary.

Persistent agents may therefore create demand for something organizations already understand socially: an offboarding record. Not a giant report for every bot, but a machine-readable declaration that an identity's role ended, its active credentials were revoked, open commitments were transferred or cancelled, required records were preserved, and dependent systems were notified or discovered.

The value of that record is negative proof.

It tells the organization that authority which once existed no longer does.

At scale, that may be more important than knowing how intelligent the retired agent ever was.
