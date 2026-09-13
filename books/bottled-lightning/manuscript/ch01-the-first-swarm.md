# Chapter 1 — The First Swarm

The first swarm does not look like a swarm.

It looks like success.

A research agent works. So you make three.

A coding agent fixes small bugs. So you give it a queue.

A support agent handles routine questions. So you connect it to account history and let it issue small credits.

A sales agent prepares calls. A finance agent checks pricing. A legal agent scans contracts. A scheduling agent finds time. A reporting agent collects what happened and writes the morning summary.

Nobody announces that the company now has a machine organization inside it.

There is no ribbon cutting.

There is just a week when people begin saying things like, “Have the agent do it,” without specifying which agent they mean.

That sentence is the beginning of the next problem.

At small scale, intelligence hides organizational defects because a capable agent can improvise around them. At larger scale, intelligence multiplies those defects because many capable agents improvise around them differently.

This distinction is easy to miss.

Imagine a company with four agentic systems.

One watches inbound customer requests and opens work when it detects a technical issue.

One watches engineering work and proposes fixes.

One watches customer sentiment and can grant retention credits.

One watches revenue and flags accounts whose economics are deteriorating.

Each agent is sensible in isolation.

A large customer reports a recurring failure. The support agent opens an urgent issue. The engineering agent sees the issue and begins a fix. The retention agent sees frustration and grants a credit. The revenue agent sees the credit and deteriorating margin, classifies the account as financially risky, and recommends reducing discretionary concessions.

Now the support agent sees an economically risky account and escalates more aggressively because losing it would be expensive. The retention agent sees the new escalation and decides the relationship is fragile, so it proposes a larger concession. The revenue agent sees the larger concession and tightens its recommendation.

Nothing has malfunctioned.

Every agent is following a locally reasonable policy.

The system is oscillating because nobody designed the interaction.

Humans do this too. We call it organizational dysfunction.

The difference is speed.

A dysfunctional human organization can spend three weeks passing an issue between departments. A dysfunctional agent organization can produce the same number of contradictory moves before lunch.

The first lesson of the swarm is therefore uncomfortable:

**Competence does not compose automatically.**

You can combine good agents and get a bad institution.

Software engineers already know versions of this problem. Reliable components can form an unreliable distributed system. Two databases can each contain correct records while the system as a whole is temporarily inconsistent. Services can retry sensible requests until retries become an outage. Caches can improve performance until stale state becomes policy. Automation can repair local failures while amplifying global ones.

Agentic systems add judgment to this old machinery.

That makes them more useful.

It also gives coordination failures more personality.

The obvious response is to create a manager agent.

This is often helpful. It is also where the recursion begins.

Who defines the manager’s authority?

Which agent reports to it?

Can it cancel work already in progress?

Can it change another agent’s budget?

Can it override a legal restriction because a customer is strategically important?

If two manager agents disagree, who wins?

If the answer is “the smarter one,” you do not have an institution. You have a contest.

Organizations exist because intelligence alone does not settle authority.

A brilliant lawyer cannot unilaterally spend from the treasury. A brilliant engineer cannot declare revenue. A brilliant salesperson cannot rewrite the terms of a signed contract just because doing so would close the deal. Human institutions separate capability from permission because those are different dimensions.

Agentic systems need the same separation.

This is where identity enters.

Every consequential agent needs to be knowable as an actor.

Not just a model name. Not just a process ID. An institutional identity.

What is this agent for?

Who created it?

What authority does it hold?

What budget can it consume?

What systems can it modify?

Which other agents may delegate to it?

What evidence does it have to produce?

When does its authority expire?

Who can revoke it?

If an agent cannot answer those questions in a form the institution can enforce, then it is not really an actor. It is ambient capability.

Ambient capability is difficult to govern because it has no edges.

The same is true of work.

In a human office, people rely heavily on social context to prevent duplication. You heard in the meeting that Priya is handling the renewal. You saw Marcus working in the spreadsheet. Somebody mentioned that legal already reviewed the clause. The knowledge is informal, but it suppresses redundant action.

Agents do not automatically share that context, and forcing all of them to share all context creates a different problem.

So the swarm needs explicit claims on work.

A task should be able to say: I exist, I have an owner, I am in this state, I depend on these inputs, I have consumed this budget, I am waiting on this decision, and this is the evidence of what has already happened.

That sounds like project management until the tasks begin completing in seconds.

Then it looks more like a transaction system.

This is one of the deepest shifts agentic intelligence introduces into organizational design. Work stops being merely something people discuss and starts becoming a first-class machine object.

The organization needs to know not just what agents can do, but what work exists between them.

Consider a simple customer refund.

At one agent, the workflow is straightforward. Read the request. Check policy. Verify the transaction. Issue the refund if conditions are met.

At many agents, the refund may touch support, fraud, finance, inventory, customer success, and analytics.

The support agent wants the customer satisfied.

The fraud agent wants anomalies investigated.

The finance agent wants the ledger correct.

The inventory agent wants the returned unit accounted for.

The customer-success agent wants churn risk reduced.

The analytics agent wants the event labeled accurately.

These are not six copies of one task. They are six different institutional interests touching one event.

Humans handle this with procedures, queues, authority, and sometimes meetings.

Agents require equivalents that operate at their speed.

The mistake is to imagine that the agents should simply talk to one another until they reach consensus.

Consensus is expensive.

Sometimes impossible.

Often unnecessary.

A healthy institution does not ask every department to agree on every action. It defines decision rights.

Fraud can block the refund under these conditions.

Support can approve up to this amount.

Finance owns settlement state.

Inventory owns whether the returned object has been received.

Customer success may add a retention credit but may not alter the underlying refund classification.

Analytics observes but does not control.

This is not an intelligence problem.

It is jurisdiction.

Once agents become actors, jurisdiction becomes software.

That means it can be made explicit.

It can be tested.

It can be versioned.

It can also be wrong at scale.

A human organization can survive a surprising amount of policy ambiguity because people quietly route around it. They ask someone. They remember an exception. They recognize that the written rule is obsolete. Agent organizations may route around ambiguity too, but they do so by inference. If many agents infer different unwritten policies, the company begins to fork.

One agent lives in the company as described by the handbook.

Another lives in the company as implied by last month’s decisions.

Another lives in the company reconstructed from tool behavior.

Another lives in the company invented by its manager agent five minutes ago.

The technical system is running.

The institution is splitting.

This is why shared memory is not the obvious cure it appears to be.

A giant shared memory can create consistency by giving every agent access to the same past. It can also turn every mistake into common knowledge, every stale assumption into inherited context, every private datum into ambient state, and every accidental interpretation into organizational folklore.

Human companies have the same disease. They call it culture when it is flattering and institutional memory when it is useful. They call it politics when it is not.

The machine version needs provenance.

Who wrote this memory?

What event produced it?

Is it a fact, a decision, a preference, a hypothesis, or a summary?

Does it expire?

What source can overturn it?

Which agents are allowed to see it?

The swarm cannot simply remember more.

It must remember with structure.

The same is true of money.

One agent with a $100 research budget is easy to reason about.

One hundred agents with independent $100 budgets are a $10,000 policy.

This sounds trivial until the agents can create subagents.

Then the budget is recursive.

An agent receives a task and delegates research to three specialists. Each specialist buys data or consumes compute. One specialist delegates again. The parent sees only the final answer and the organization sees a surprisingly large bill attached to a task whose original request sounded small.

The solution is not to tell the agents to spend responsibly.

The solution is accounting.

Budgets need inheritance rules.

Delegated work needs to consume from somewhere visible.

An agent should not be able to manufacture purchasing power by manufacturing children.

This is an example of a general rule:

**Every scalable form of agency eventually needs a conservation law.**

Money cannot appear because work was delegated.

Authority cannot appear because an agent created another agent.

Access cannot expand because a task crossed a handoff.

Claims cannot become facts because many agents repeated them.

Priority cannot become infinite because every agent labeled its own task urgent.

These conservation laws are the hidden physics of the machine organization.

Without them, local optimization becomes institutional inflation.

This is why the first swarm is so revealing.

It teaches you that an agent is not merely a piece of software that can reason.

It is a participant in a system of scarce resources, conflicting objectives, partial information, and bounded authority.

Once you have several, architecture starts to resemble governance.

The word can make technologists uncomfortable because governance sounds slow.

Bad governance is slow.

Good governance is precomputed agreement.

A spending limit is governance that prevents a meeting.

A typed handoff is governance that prevents an argument about what was requested.

A permission boundary is governance that prevents a retrospective investigation.

A priority queue is governance that prevents every task from becoming an emergency.

A circuit breaker is governance that makes stopping cheaper than debating whether to stop.

The best institutional rules disappear into the speed of the system.

This is the opportunity.

Agentic organizations do not have to inherit every human bureaucracy. They can encode decision rights more precisely than most companies ever have. They can attach evidence to actions automatically. They can meter work in real time. They can grant temporary authority that expires. They can simulate a proposed action against policy before execution. They can trace a decision across a chain of delegated agents. They can revoke a capability globally without scheduling a meeting.

But none of that happens because the agents are smart.

It happens because the institution is designed.

The first swarm is the moment you learn the difference.

One agent teaches you how to delegate.

Many agents teach you what a company is made of.

Not people, exactly.

Not software, exactly.

Roles. Rights. State. Memory. Budgets. Protocols. Evidence. Escalation. Consequence.

Humans carried those things for centuries because humans were the only general-purpose agents available.

Now some of them can be carried by machines.

The organizational question is not whether that will happen.

It is whether we will notice that we are building institutions before the institutions start acting on their own logic.
