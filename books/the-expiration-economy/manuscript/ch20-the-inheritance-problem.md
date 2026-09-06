# The Inheritance Problem

Every system leaves something to the next person.

Sometimes the inheritance is obvious. A house passes to an heir. A company passes to new leadership. A government passes obligations to the next administration. A codebase passes to the next engineering team.

More often, the inheritance arrives disguised as normal operation.

The dashboard still has to run.

The vendor contract still renews.

The policy still applies.

The shared mailbox still receives messages.

The model still serves traffic.

The integration still sends data every night.

The customer still expects an answer.

The person receiving the inheritance may never have agreed to it. They may not even know it is an inheritance.

That is what makes succession one of the hidden problems inside expiration.

An ending does not merely answer whether a thing stops. It answers whether its obligations, rights, memory, authority, and unfinished work should transfer.

The transfer can be more important than the thing itself.

A company can retire an application and discover the application was the only place a team encoded a decade of business exceptions. A founder can leave and discover that dozens of vendor relationships relied on personal trust nobody documented. A model can be replaced and reveal that users were depending on subtle behavioral patterns the replacement does not reproduce. A committee can dissolve while its unresolved decisions quietly become somebody else's responsibility.

Nothing disappears.

It changes owner badly.

This is the inheritance problem.

Human societies have spent centuries building formal machinery for some versions of it. Estates distribute property after death. Corporate law provides continuity when shareholders change. Governments maintain offices beyond individual officeholders. Trusts separate assets from the mortality of one person. Contracts assign rights and obligations. Organizations create titles precisely so a role can outlast the person filling it.

Those mechanisms are imperfect, but they acknowledge a basic fact.

Durable systems need succession.

Digital systems often pretend otherwise.

They attach ownership to usernames.

A production service is “Alice's service.”

The domain is registered in Bob's account.

The automation runs under Carol's credentials.

The billing alert goes to a former employee.

The only person who knows why the database has two nearly identical tables is on another continent and no longer works for the company.

The legal organization owns the system.

Operationally, the system has already entered probate.

This mismatch has been manageable because people were usually the scarce source of automation. If a process kept running after its owner left, somebody eventually noticed because the process needed people somewhere.

Agentic systems can make orphaning quieter.

A workflow can continue monitoring, reconciling, sending, updating, purchasing, triaging, scheduling, or answering after the person who created it leaves. The system does not become visibly abandoned. It becomes apparently competent.

Competence can hide missing stewardship.

That is a new inheritance risk.

Imagine a procurement agent created by a manager to monitor a set of suppliers. The manager changes roles. The agent keeps running. It renews routine orders, flags price changes, and sends summaries to a shared channel. Nobody shuts it down because nothing appears broken.

Two years later, the company's supplier strategy changes.

The agent still optimizes the old objective.

The problem is not malicious autonomy. The problem is inheritance without review.

The agent inherited authority that should have expired with its sponsor.

Human institutions solve versions of this with role-based authority. A treasurer can leave while the treasury function continues. The successor receives powers because the institution recognizes the office rather than treating the prior holder's personal access as permanent.

Agent systems need the same separation.

A persistent function should belong to a role before it belongs to an agent.

The role can then be reassigned, renewed, narrowed, or retired.

This distinction sounds administrative. It is architectural.

If the function belongs to the agent, replacing the agent threatens continuity.

If the function belongs to the institution, the agent becomes replaceable.

Replaceability is one of the most important forms of resilience.

It reduces the bargaining power of any one vendor, model, employee, or automated system. It makes upgrades possible. It makes failure survivable. It lets the organization decide that a particular implementation no longer deserves to remain.

The challenge is preserving enough context for the successor.

Human handoffs are famously poor. People leave documents behind and forget the exceptions that matter. They explain the official process but not the history of why the official process is strange. The successor receives the policy and discovers the reality through mistakes.

Agents can make handoffs better if their work leaves structured traces.

What commitments remain open?

Which decisions were made and why?

Which exceptions recur?

Which people or systems depend on the role?

Which risks were accepted temporarily?

What thresholds trigger escalation?

Which promises were made to customers, suppliers, regulators, or employees?

The agent may be able to summarize these things at retirement.

But the institution should not depend entirely on the retiring agent's self-description.

Important obligations should also exist in external systems: contracts, tickets, ledgers, calendars, logs, approvals, records, and human-readable documentation. The more consequential the role, the less acceptable it is for institutional memory to live only inside one opaque memory store.

Succession works when memory is portable enough to leave its current container.

This raises a difficult question about what should transfer.

The obvious answer is everything useful.

The actual answer is selective.

A successor should inherit open commitments.

It may not need every private conversation the predecessor ever had.

It should inherit current supplier terms.

It may not need stale personal preferences from an employee who left years ago.

It should inherit active operating exceptions.

It may not need outdated heuristics that existed only because an old system was unreliable.

Inheritance is another form of curation.

The future should receive the past's obligations without automatically receiving all of the past's baggage.

Human estate law understands this unevenly but clearly enough to offer a metaphor. An heir can receive property subject to debts, restrictions, taxes, or other conditions. The transfer does not convert history into a blank slate.

Digital succession needs similar honesty.

A successor agent may inherit a workflow whose users have rights, whose data have retention limits, whose contracts survive, and whose authority is narrower than the predecessor accumulated informally.

The handoff should be an opportunity to reset unauthorized drift.

That is one of succession's underappreciated benefits.

A long-lived role gathers sediment.

Permissions expand.

Exceptions accumulate.

Temporary workarounds become standard.

People discover shortcuts.

Systems learn habits.

A succession event can become a review boundary at which the institution asks whether all of that should continue.

The same applies to leadership.

A new executive inherits budgets and programs. The transition can be an occasion for strategic review because the incoming leader is less bound by the identity of the old decisions. Political transitions create similar moments, though they can also produce wasteful reversal for its own sake.

Succession can liberate judgment from authorship.

The person who created a system is often the person least able to see that the system's role has ended. Creation creates attachment. Success creates identity. Ownership produces defense.

The successor may be freer to ask the impolite question.

Why does this still exist?

That question can be destructive if the successor mistakes unfamiliarity for uselessness. Institutional memory protects against that too.

A good handoff therefore carries reasons, not just assets.

Why was the system created?

Which problem did it solve?

Which alternatives failed?

What evidence justified continuation last time?

What would count as evidence that the role no longer belongs?

The future should inherit enough of the argument to make a new judgment.

This is especially important in public institutions because continuity can be a democratic value. A new administration should not have to rediscover every emergency plan, infrastructure obligation, scientific program, or treaty relationship from scratch. Career institutions preserve knowledge across elections.

But continuity without review can harden into bureaucracy.

The expiration economy does not choose one side.

It asks for succession that preserves capability while reopening duration.

The same balance will matter in personal AI.

A person may use one assistant for years. It knows routines, preferences, long projects, family relationships, and the history of how certain decisions were made. The user then changes providers.

What should move?

A portable memory dump sounds attractive until one imagines what it contains.

Private information about friends.

Old credentials.

Sensitive conversations.

Incorrect inferences.

Temporary preferences.

Arguments resolved years ago.

Embarrassing details that once mattered and no longer do.

The successor should not receive the person as a frozen archive.

It should receive a curated inheritance.

This is where user agency matters most. People should be able to decide which parts of an artificial relationship belong to the next one. Some may want continuity. Others may want a clean start. Most will want both in different areas.

Keep my travel preferences.

Forget the difficult year.

Keep my recurring bills.

Do not carry over the emotional assumptions you made about me.

Keep the project history.

Discard the temporary medical discussion after the issue is resolved.

A useful succession system needs more than export.

It needs selective transfer.

That is technically harder and ethically better.

Companies will face the same issue during mergers and acquisitions. Data and systems transfer legally, but not every legacy should automatically become operational in the combined organization. Old permissions may be inappropriate. Old customer commitments may conflict. Old models may fail new standards. Old vendor arrangements may create unacceptable concentration.

An acquisition is a mass inheritance event.

The best integrations will distinguish what the buyer must honor, what it should preserve, what it can replace, and what it should deliberately end.

The worst integrations will keep both companies' systems alive forever because no one wants to decide.

This reveals the central economic connection between inheritance and expiration.

A system that cannot transfer cleanly is harder to end.

A system that cannot end cleanly is harder to transfer.

Portability, succession, and retirement are parts of the same architecture.

They ask whether function can outlive implementation without becoming hostage to it.

The inheritance problem will become more important as software grows more capable of acting after its creators leave. Every durable automated process should answer a question once reserved for estates and institutions.

Who gets this when I am gone?

The answer cannot always be nobody.

It cannot always be everyone.

Sometimes the right inheritance is the role.

Sometimes it is the record.

Sometimes it is the obligation.

Sometimes it is the asset.

Sometimes it is a warning.

Sometimes the most responsible inheritance is permission to end what the previous generation could not bring itself to stop.

Modern digital-estate law shows why the phrase inheritance can be dangerously broad. The Uniform Law Commission's Revised Uniform Fiduciary Access to Digital Assets Act was designed around the fact that executors, trustees, guardians, and agents may need access to digital property and accounts while privacy law, provider terms, and the user's own choices can restrict what a fiduciary should receive. The model law distinguishes categories that ordinary users tend to collapse into one word: digital assets, the catalog of communications, and the content of electronic communications.

That separation matters because inheriting a domain name is not the same thing as inheriting the contents of a private mailbox.

A fiduciary may need enough authority to close a bill, transfer a photograph collection, retrieve a tax file, or wind down an online business without receiving an unrestricted moral license to read every intimate message the deceased ever sent. Digital succession has to preserve both continuity and privacy after the person who could explain the difference is gone.

That is a better model for agent inheritance than the crude idea of copying memory to a successor.

Suppose a small-business owner dies and leaves behind a persistent business assistant. The assistant knows supplier relationships, customer history, inventory patterns, bank-account workflows, passwords or token references, drafts, private conversations, tax records, and personal judgments about employees. Some of that context may be essential for keeping the business alive. Some may be legally restricted. Some may be deeply private. Some may no longer be accurate. Some may refer to other people whose privacy interests did not disappear with the owner.

A successor cannot safely receive “the agent.”

The successor needs rights to particular functions and records.

This is why estate planning for active software will be less like exporting a zip file and more like resolving a bundle of authorities. Who can keep the storefront running? Who can authorize payments? Who can read customer records? Who can access personal communications? Who can revoke the old agent's credentials? Who can terminate subscriptions? Which automations should stop immediately because their authority was personal to the deceased?

The answers can differ for every layer.

Death is the clearest succession event because law treats it formally. Organizations experience quieter versions every week.

An employee goes on leave.

A contractor's engagement ends.

A founder is removed from management.

A department is reorganized.

A vendor is acquired.

A public official's term expires.

A model owner changes teams.

The corresponding digital estate may contain service accounts, scheduled jobs, API registrations, prompt libraries, fine-tuned models, billing accounts, datasets, repositories, domains, and agent identities. Most companies call this offboarding only when a human account is being disabled. The broader inheritance problem asks what depended on that human's continuing authority.

A clean offboarding system should sometimes stop things rather than transfer them.

That is a hard principle because transfer feels safer. If a departed employee owned twelve automations, assigning all twelve to the manager preserves continuity. It may also preserve twelve processes that existed only because that employee's role or preferences made them useful. Succession can become a machine for perpetuating obsolete work.

The review should therefore distinguish obligation from habit.

A regulatory filing still needs an owner.

A daily report nobody reads may not.

A customer's open commitment still needs a handoff.

A personal reminder bot does not.

A production key should move to an institutional identity if the function remains.

A one-off credential should die with the project.

This is the difference between inheritance and cloning.

Inheritance contains judgment.

Cloning preserves state.

There is another dangerous shortcut: dead-man switches. A system can be designed to release credentials, publish information, transfer assets, or execute instructions after a person fails to check in for a period. Such mechanisms can be valuable in carefully bounded settings because they acknowledge that a steward may become unable to act.

They are also easy to romanticize.

Absence is ambiguous. A missed check-in can mean incapacity, travel, technical failure, lost connectivity, or simple forgetfulness. Automatic release of private data or financial authority can create irreversible harm. The more consequential the inheritance, the less wise it is to let one weak signal substitute for a legitimate succession process.

Expiration by silence works well for temporary credentials because the default harm of nonrenewal is usually bounded.

Inheritance by silence is different.

It can move property, secrets, or authority to the wrong person.

That distinction reinforces a theme running through the book: automatic expiration is safest when failure closes a narrow permission, not when failure reallocates a complex set of rights.

The law cannot solve the architecture alone. A will can name a fiduciary, but the fiduciary still needs systems capable of separating business records from private communications, transferable assets from nontransferable licenses, active credentials from archival evidence, and the deceased person's authority from authority the successor legitimately holds.

Bad architecture turns a nuanced legal instruction into an all-or-nothing technical choice.

Good architecture preserves the distinctions the law and the user are trying to make.

That is why succession belongs at creation. A founder registering critical domains in a personal account creates a future estate problem. A company that stores corporate knowledge only in one employee's private assistant creates a future estate problem. An agent whose memory mixes customer contracts with intimate employee observations creates a future estate problem. The problem is not triggered by death or departure.

It was designed years earlier.

The future heir is another invisible stakeholder in the present architecture.

So is the future person who will have to say no, this part was never ours to inherit.

The most mature inheritance system therefore ends with a boundary.

It knows what must continue.

It knows what may transfer.

It knows what must remain private.

It knows what belongs in an archive rather than a successor's active memory.

And it knows that succession is not evidence that everything the past created deserves another life.
