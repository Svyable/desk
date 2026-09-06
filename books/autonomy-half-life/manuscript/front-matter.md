# Autonomy Half-Life

*Why Authority Should Decay as the World Changes*

Sven Hardy Benson

There is an old habit hidden inside modern autonomy.

We treat permission as an object.

Somebody grants it. A manager approves a spending limit. A legislature delegates a power. A user authorizes an application. A commander gives a subordinate room to act. A company connects an autonomous system to tools, money, messages, customer records, or production infrastructure. The grant may have limits. It may even have an expiration date. But once the grant exists, our default mental model is surprisingly static: permission remains permission until time runs out or somebody takes it back.

The world does not honor that model.

The conditions that made an action sensible can disappear before the credential does. A maintenance window can close. A customer can change the instruction. A market can move. A threat can recede. A new fact can turn a routine action into a dangerous one. A subordinate can delegate to another subordinate. A reversible decision can become irreversible when money moves, a message is sent, a drug is administered, a machine crosses a boundary, or a public institution converts a temporary exception into ordinary practice.

The authority may still be technically valid.

Its justification may not be.

This book is about that gap.

I call it **autonomy half-life**: the tendency of a grant of autonomy to become less legitimate as the environment moves away from the conditions under which the grant was made. The phrase borrows from physical decay, but the important variable here is not simply time. Time matters because the world changes during it. What matters more is distance from the grant.

If nothing important has changed, a mandate may remain strong long after a short-lived token would have expired. If several important things change at once, the mandate may weaken almost immediately. A payment agent told to pay a known supplier up to a known amount for a known invoice is not necessarily still authorized when the bank account changes, the amount doubles, and the invoice is replaced, even if five minutes remain on the access token. A disaster power justified by a specific emergency is not made legitimate forever by the fact that the law once passed. A team empowered to negotiate within one commercial landscape may need a new mandate after an acquisition, a regulatory change, or a collapse in the assumptions behind the original strategy.

This is not an argument against autonomy. It is an argument for autonomy that can survive contact with change.

The distinction matters because the next generation of autonomous systems will not merely answer questions. They will wait, schedule, transact, delegate, retry, recover, and continue work after the human who began the task has turned to something else. The longer the chain between intention and effect, the more opportunities there are for the world to become different from the one the authorizer had in mind.

But the problem is older than AI.

Law has wrestled with sunset clauses because extraordinary authority has a habit of becoming ordinary. Distributed systems use leases because indefinite claims are hard to reconcile with partial failure. Security systems issue time-bounded credentials because a permanent bearer token is an invitation to stale privilege. Military doctrine has long had to solve a harder paradox: subordinates need initiative precisely because orders cannot anticipate the world, yet initiative must remain connected to purpose. Corporate governance is built around delegation because owners and leaders cannot make every decision themselves, while agency theory begins from the uncomfortable fact that the delegate and the delegator do not possess identical information or incentives.

These traditions are not the same. The book does not pretend that a constitutional power is a software token or that a human subordinate is an API client. Their differences are useful. They let us see a common structural question from several angles:

When should a person or system retain the right to continue acting without asking again?

The easiest answer is a clock. Give the authority a time-to-live. Expire it after an hour, a day, a year, or an election cycle.

Sometimes that is exactly right. Often it is only a proxy.

A clock cannot see that the recipient changed. It cannot see that the purpose changed. It cannot see that a low-risk action became irreversible, that the principal withdrew the underlying objective, that a delegation chain acquired three new hops, or that the evidence supporting the original decision has been overturned. A clock can tell us how old the permission is. It cannot tell us how stale it is.

The book therefore develops a different intuition. Every meaningful grant of autonomy has a birth certificate, even when nobody writes one down. It is born from a purpose, facts, assumptions, scope, risk, counterparties, resources, accountability, and an expected range of change. The further an action travels from those conditions, the more evidence should be required to preserve the mandate.

That does not imply a mathematical decay curve. I resist the temptation to give qualitative judgment a decorative equation. In some domains we can measure useful signals; in others we cannot. The value of the half-life metaphor is not that it produces a universal constant. It is that it reverses the burden of proof. Instead of treating authority as fully alive until a revocation event occurs, we ask what keeps it alive.

Renewal is one answer.

Not ceremonial renewal. Not clicking “approve” every thirty days because the system generated a ticket. Renewal means new evidence: the purpose still stands; the material facts remain inside the expected range; the risk is acceptable; the principal still has authority to confer; the delegate is still the right actor; the action remains proportionate; the consequences remain recoverable enough for the mandate being used.

That makes renewal sound expensive, because sometimes it is.

A bad design can drown an organization in permission requests. It can push every decision upward, teach people to stop thinking, and turn cautious governance into a denial-of-service attack against the work itself. If every deviation forces a meeting, autonomy has been revoked in everything but name.

That objection is not a footnote. It occupies a large part of the book because any serious theory of decaying authority must explain when *not* to decay it, when local initiative deserves more room, and how to distinguish meaningful environmental drift from ordinary variation.

The target is not maximum control. It is an authority system with memory.

A system that remembers why permission existed can notice when the reason disappears. A system that remembers only that permission exists cannot.

There is adjacent work. Security researchers and standards authors have proposed time-bounded agent authorization, dynamic authorization, delegation chains, trust decay, and forms of authority decay. Legal scholars have long examined sunset clauses and reauthorization. In 2026, as autonomous-agent governance accelerated, several proposals converged on the idea that authority should not be treated as static. Those ideas are part of the research trail for this manuscript and deserve explicit credit.

The contribution here is narrower and, I think, more consequential: **the half-life of autonomy should be driven by environmental drift from the conditions of grant.** Time is one input. It is not the governing principle.

That principle changes how we think about safe AI agents, but it also reaches into organizations and institutions that contain no AI at all.

Every durable permission is a bet that tomorrow will resemble the world in which the permission was issued.

Some bets deserve to remain open.

Some should have expired already.
