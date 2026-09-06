# The Permission That Outlived the World

Imagine a company gives an autonomous purchasing agent a simple job on Monday morning.

Buy replacement cooling equipment for a data-center room. Use the approved supplier list. Keep the total below a fixed amount. Choose expedited shipping because a temperature sensor is showing intermittent faults. The maintenance manager approves the task, the finance system grants the spending scope, and the agent begins comparing inventory.

Nothing about this is especially exotic. The same structure exists whenever one person tells another person to get something done without coming back for approval at every step. The manager does not specify the exact product, the exact sequence of calls, or the precise hour at which the order must be placed. That is the point of delegation. Autonomy exists because the principal wants the delegate to absorb detail.

Now let the world move.

By lunch, a technician discovers that the sensor is faulty and the cooling equipment itself is fine. The maintenance problem changes from “replace equipment quickly” to “replace a sensor during the next routine window.” An hour later, one approved supplier changes its bank details. Another supplier offers a larger system with a discount that would still fit under the original spending cap. The agent’s credentials remain valid. Its budget remains valid. The supplier list still contains both companies. The task record still says that cooling equipment is required.

At 2:17 p.m., is the agent authorized to place the order?

A conventional system may answer yes.

The user approved the task. The agent is authenticated. The spending token has not expired. The amount is within limit. The supplier is allowed. No revocation has arrived.

Yet something important has disappeared. The purpose that justified the purchase is no longer present in the same form. The world in which the authority was granted has become different from the world in which the authority would be exercised.

The interesting failure is not that the agent has broken a rule.

It may be following every rule it was given.

That is the problem.

We are accustomed to thinking about authorization as a gate. Before the gate, the actor may not proceed. After the gate, the actor may proceed until the permission expires or is withdrawn. The gate can be elaborate. Identity can be checked. Scope can be narrowed. Tokens can be signed. Limits can be enforced. Audit records can be kept. High-risk actions can require an additional approval.

All of that matters.

None of it answers the question raised by the cooling order unless the system also knows why the authority existed.

A permission can be cryptographically valid and practically stale.

Humans encounter stale authority all the time, though we rarely give it a name. A manager says, “Take care of it,” before leaving for a flight. A team receives budget for a project whose assumptions later change. An executive approves a negotiation strategy before a competitor announces a merger. A regulator receives emergency powers in response to a crisis that gradually recedes. A board authorizes a financing plan under one interest-rate environment and discovers months later that the market has moved somewhere else.

Competent people often notice the mismatch. They pause. They call. They reinterpret the instruction. They escalate. They decide that the literal permission no longer carries the meaning it had when issued.

Sometimes they do the opposite.

The instruction becomes a shield. “We had approval.” “The board signed off.” “Legal cleared it.” “The policy allows it.” “The credentials were valid.” These sentences are not necessarily evasions. They may be accurate descriptions of the record. Yet each places a historical fact where a present judgment is required.

The authority existed.

Does it still fit?

That second question is the subject of this book.

I use the phrase autonomy half-life to describe the weakening of a mandate as the world moves away from the conditions that justified it. The word half-life is useful because it attacks the instinct that permission should remain fully alive until a single event kills it. In many real systems, the justification does not vanish all at once. It becomes thinner.

A minor change in price may not matter. A change in supplier account details might matter a great deal. A delay of two hours might be irrelevant. A discovery that the underlying problem does not exist anymore may collapse the purpose of the task entirely. A second delegate may be acceptable. A fifth delegate operating across another organization may require a new decision.

The mandate becomes weaker because the relationship between the original instruction and the current action becomes harder to defend.

Notice what this does not require.

It does not require the agent to become less capable. The purchasing agent may have improved during the afternoon. It may have gathered more quotes, learned which model ships fastest, and built a better picture of available inventory. Its competence can rise while its authority falls.

It does not require the principal to distrust the agent. The maintenance manager may trust it completely. Trust answers a different question: how likely is this actor to behave competently or faithfully? Authority asks whether this action remains inside a live mandate.

It does not require the credential to expire. A token is an enforcement mechanism, not a complete theory of legitimacy. A system can correctly validate a credential that was issued under assumptions no longer worth preserving.

And it does not require misconduct. The most revealing cases involve nobody trying to cheat. A stale mandate is dangerous precisely because conscientious actors can continue under it.

This distinction becomes harder to ignore as software agents gain the ability to continue work without a human sitting in front of them. A chatbot that drafts an answer and waits for a user to press Send is one thing. An agent that schedules a payment for tomorrow, monitors a procurement queue overnight, retries a failed transaction, negotiates with another agent, or delegates a subtask may cross hours, days, systems, and organizational boundaries between instruction and effect.

Each interval creates room for drift.

The human who authorized the work experiences the task as one intention. The world experiences a sequence of actions separated by time and events.

That gap already exists in human organizations. Software makes it visible because software forces us to decide what counts as valid permission at the moment of execution.

The simplest answer is time.

Security systems have used expiring credentials for years. OAuth access tokens can carry a lifetime. Distributed systems have long used leases to bound how long a claim remains valid without renewal. Laws can contain sunset clauses. Employment contracts have terms. Corporate authorities can be limited by period. A time limit is one of the oldest tools for preventing yesterday’s permission from becoming tomorrow’s permanent entitlement.

Time bounds are powerful because they are simple.

A clock is difficult to argue with. At 2:59 the credential works; at 3:00 it does not. A legislature knows when a law will lapse. A system knows when to refresh a token. A cache knows when a lease ends. Auditors can read the date.

But age and staleness are not identical.

Return to the cooling order. Suppose the technician never discovers the faulty sensor. The equipment really is failing, the approved supplier keeps the same bank account, the price remains inside the expected range, and the maintenance need becomes more urgent as the afternoon progresses. A two-hour token might expire even though the justification has strengthened.

Now reverse it. Suppose the sensor is disproved ten seconds after the grant. A twenty-four-hour token remains technically fresh while the mandate has become substantively stale almost immediately.

The clock is measuring something real. It is not measuring the thing we actually care about.

The useful question is how far the present action has traveled from the grant.

That distance is not geographic and it is not necessarily mathematical. It can be described through ordinary questions. Is the purpose the same? Are the important facts still inside the range the principal understood? Are the counterparties the same? Has the risk changed? Has the action become more consequential or less reversible? Has the authority been delegated again? Has the amount or scope expanded? Does the principal still hold the underlying right to authorize the act? Have the people affected by the action changed?

Some domains can turn parts of that review into policy. A payment system can notice a changed recipient. An agent framework can notice that a task moved from drafting to executing. A procurement system can detect that an amount crossed a threshold. A safety system can distinguish read-only access from a physical action. A delegation protocol can track how many times authority moved through a chain.

Other domains require judgment.

A legislature cannot reduce constitutional legitimacy to a risk score without losing something essential. A manager cannot describe every meaningful change in advance. A commander cannot expect a rule engine to understand the whole situation on the ground. An institution cannot measure the consent of the governed as though it were battery charge.

The absence of a universal formula is not a reason to ignore the structure.

We already make these judgments. We just make them inconsistently, often after something goes wrong.

Consider the language of postmortems. “The circumstances had changed.” “The approval was based on information we later learned was wrong.” “The exception was intended to be temporary.” “The authority was never meant to extend that far.” “The system did exactly what it was allowed to do.”

Those sentences describe the debris of a missing decay mechanism.

The original approval is still visible. The disappearing justification is not.

This creates a peculiar asymmetry in organizations. Grants leave records. Drift often does not.

An approval appears in a ticketing system. A signed delegation sits in a folder. An access role remains in a directory. A policy exception has an owner. A board resolution has minutes. The conditions surrounding those decisions may be scattered across emails, conversations, market assumptions, incident reports, or the memory of people who later leave.

Months afterward, the organization remembers the yes and forgets the because.

Permission debt accumulates this way. The stock of authority is explicit. The reasons that once supported it slowly become invisible.

That is why autonomy half-life begins with memory.

If we want a grant to weaken when its justification changes, we have to know enough about the justification to recognize the change. The system does not need an essay attached to every permission. It does need some account of purpose, scope, material assumptions, boundaries, and the conditions that should trigger another look.

This is familiar in safety engineering. A safety case is meaningful because it links a claim to evidence and assumptions. If the assumptions fail, the claim deserves reconsideration. Authorization should often work the same way. “Allowed” is a claim about fit between an actor, an action, a purpose, and a world.

The trouble is that organizations prefer portable permissions.

A role is easier to manage than a reason. “Can approve invoices up to $50,000” is administratively clean. “Can approve invoices up to $50,000 for ordinary inventory purchases under the supplier-risk conditions and operating assumptions that justified this delegation” is harder to encode.

The clean version scales.

It also sheds context.

That tradeoff cannot be eliminated. An authorization system that captures every circumstance becomes unusable. The question is which context is important enough to preserve because a change would alter the legitimacy of continued action.

This is where risk and reversibility enter.

The more an action can be undone, the more tolerance we can have for stale authority. An agent drafting a purchase order without sending it can operate under a weaker mandate than an agent transmitting funds. A researcher preparing a model can continue under uncertainty that would be unacceptable for deployment. A communications system can let software propose a public statement under broader conditions than those required to publish it.

Autonomy does not have to disappear when the mandate weakens.

It can change form.

The actor can move from execute to prepare, from write to read, from commit to simulate, from transact to recommend. This is one of the central practical ideas in the chapters ahead. Decay should often reduce consequence before it reduces perception. A stale agent may still be extremely useful if it can observe the new world and assemble the evidence required for renewal.

That is better than the usual binary design.

Binary permission produces two bad extremes. Permanent authority encourages stale action. Hard expiration can stop useful work at arbitrary moments. Graduated authority gives the system somewhere to go when confidence in the mandate declines.

The design problem is not to eliminate autonomy. It is to preserve as much autonomy as the current justification can carry.

This sounds technical when applied to software. It becomes political when applied to institutions.

A temporary power is often granted because ordinary procedure seems too slow for extraordinary circumstances. The grant makes sense precisely because the environment has departed from normal. But if the emergency fades while the power remains, the relationship reverses. The extraordinary authority begins operating in ordinary conditions.

That is a form of drift.

Sunset clauses attempt to solve it with time. They can work. They can also become rituals in which temporary powers are renewed repeatedly without serious reconsideration. The calendar creates a hearing; it does not guarantee thought.

An autonomy-half-life approach asks a harder question at renewal: which conditions justified the exception, which remain true, which have changed, and what scope is still proportionate now?

The same logic applies inside a company. A crisis team receives unusual purchasing freedom during an outage. The outage ends. The team keeps the freedom because removing it is work and nobody has an incentive to volunteer for less authority. Months later the temporary arrangement has become part of the operating system of the organization.

No coup occurred.

Convenience won.

That pattern is common enough that we should be suspicious of any design in which retention is automatic and reconsideration requires effort. People are busy. Systems are complex. Removing access creates support tickets. Rewriting a policy creates meetings. Asking whether a permission still makes sense rarely outranks the next customer problem.

The default therefore matters.

If authority persists by default, organizations accumulate it.

If authority decays by default, organizations must spend attention to keep it.

Neither default is free.

The second can become intolerable bureaucracy. A hospital cannot stop functioning because every clinician must renew authority after every new lab result. A battlefield commander cannot demand that a subordinate ask again each time the terrain differs from the map. A company cannot require its chief financial officer to reconfirm every purchase after a small exchange-rate move. Autonomous systems are useful because they can absorb ordinary variation.

A serious theory therefore needs a concept of expected drift.

When authority is granted, the principal is not authorizing a photograph. The principal is authorizing action across a range of possible worlds. Prices can move a little. Delivery dates can change. A customer may ask a follow-up. A server may retry. A subordinate may choose a different route. Autonomy would be meaningless if every variation destroyed it.

The grant should contain, explicitly or implicitly, a tolerance for change.

Decay begins when the action moves beyond that tolerance.

This is why a good mandate is less like a point and more like a region. Inside the region, the delegate uses judgment. Near the boundary, consequence narrows or evidence requirements rise. Beyond the boundary, the actor asks again.

The idea may sound conservative because it places limits on permission. In practice it can support greater autonomy.

A principal who knows authority will contract when material conditions change can afford to delegate more at the start. A user may be comfortable giving an agent broad purchasing discretion if a changed recipient, changed objective, unusual amount, or irreversible step automatically narrows the mandate. A board can grant management room to operate if specified changes force renewed review. A legislature can confer emergency capacity if the continuation of exceptional power is tied to the continuing existence of the circumstances that made it necessary.

Good brakes can make speed safer.

The opposite is also true. When stopping depends entirely on somebody noticing and revoking permission, principals become reluctant. They either over-control the delegate from the beginning or accept the risk that authority will outlive its purpose.

Autonomy half-life offers a third choice.

Delegate generously within a world. Admit that the world will not stay still. Design the grant so that continued authority requires continuing fit.

The cooling agent does not need to ask its manager about every catalog update. It should not be able to ignore the discovery that the purchase is no longer needed.

That boundary sounds obvious when written in a book.

The work begins when we try to build it into systems, organizations, and institutions before the stale permission is used.

The rest of this book is an attempt to do exactly that.
