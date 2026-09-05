# The Distance to the Grant

The idea at the center of this book can be stated without a formula.

Compare the action in front of you with the world that produced the authority.

The farther apart they are on dimensions that mattered to the principal, the weaker the presumption that the old grant still governs.

That is the distance to the grant.

It is tempting to turn the sentence into mathematics.

Purpose difference times risk difference plus delegation depth, weighted by reversibility, divided by trust. Give the result a name. Put it on a dashboard. Call anything above seventy “decayed.”

The precision would be comforting.

It would also be mostly invented.

Different domains do not share one unit of legitimacy. A changed bank account can matter more than a year of elapsed time. A new legal prohibition can collapse authority regardless of every other variable. A highly trusted actor can remain unauthorized. A long delegation chain can be perfectly safe when every hop is mechanical and narrow.

The practical value lies in structured comparison, not a universal score.

Start with purpose.

Why did the principal grant autonomy?

This is the highest-leverage question because purpose organizes the rest. An agent authorized to reduce inventory can adapt suppliers and timing in ways an agent authorized to guarantee service levels may not. A crisis team authorized to restore operations can make choices that would be inappropriate for a team authorized to optimize long-term cost. A government power justified by a specific emergency should be evaluated against the continuing need created by that emergency.

Purpose can drift without any operational field changing.

The company changes strategy. The user solves the problem another way. The customer withdraws the request. The institution adopts a new policy.

When purpose disappears, downstream permission becomes difficult to defend.

Facts come next.

Which facts were material to the original decision?

The item was needed. The recipient was known. The patient met certain conditions. The system was in a validated state. The market was liquid. The supplier passed review. The project was active.

Not every fact deserves equal weight.

The birth certificate should identify the facts whose change would have changed the principal’s decision. This keeps the system from treating ordinary noise as mandate decay.

Counterparties matter because authority is often relational.

Permission to share information with one person does not automatically extend to another. Permission to negotiate with one company can change meaning after an acquisition. Permission to pay a vendor can become stale when bank details change. Permission to act for one customer cannot be transferred silently to a different customer.

Identity changes are easy for machines to detect and easy for humans to dismiss as clerical.

They deserve disproportionate attention because many consequential failures hide inside “same task, different party.”

Scope matters.

Has the action expanded in amount, geography, data, population, duration, or class of effect?

A pilot with fifty users becomes a product with five million. A purchase becomes a contract. A local data query becomes a bulk export. A one-time exception becomes a standing process.

Each expansion can remain adjacent to the original grant while the cumulative scope becomes unrecognizable.

Compare to the baseline, not only the previous step.

Risk matters, though the word can become vague enough to mean everything.

The useful question is what changed about the likelihood or cost of failure in ways the principal cared about.

Volatility increased. Fraud indicators appeared. Safety margins narrowed. Legal uncertainty rose. The system entered an operating state not covered by testing. A new vulnerability emerged.

Risk does not need to be quantified perfectly to be material.

An action can move from ordinary to exceptional without anyone knowing the precise probability of harm.

Reversibility matters because it changes the price of being wrong.

The older mandate may be good enough to prepare a draft and too weak to publish it. Good enough to simulate a deployment and too weak to execute. Good enough to obtain a quote and too weak to transfer money.

Consequences can narrow authority even when purpose remains stable.

Delegation depth matters because context thins as authority travels.

Who is acting now?

Is it the original delegate, a chosen subordinate, an external vendor, a sub-agent selected dynamically, or a tool several trust boundaries away?

A downstream actor does not automatically inherit every judgment the principal made about the first delegate.

The right to delegate should itself be part of the grant.

Resources matter.

How much budget, compute, data, physical capacity, or organizational commitment can the actor consume before review?

Machine agents make resource distance especially important because repetition can turn individually small actions into aggregate exposure.

A $5,000 action and a thousand $5,000 actions are not the same mandate merely because each call passes the same threshold.

Time still matters.

Age is evidence of possible staleness even when no material event is observed. Memory degrades. Hidden conditions can change. Principals leave. Organizations accumulate assumptions. A long interval raises uncertainty about what the system failed to notice.

The clock is a backstop against invisible drift.

These dimensions are enough to create a useful review without pretending to exhaust the world.

The important thing is their relationship to the original grant.

Consider a simple scenario.

A user authorizes an agent to book a refundable flight to Chicago next month for a conference, with a budget of $800.

The agent finds a $740 flight.

Purpose matches. Destination matches. date matches. budget matches. refundability matches. passenger matches. The distance is small. The agent can reasonably proceed if the grant anticipated booking.

Now the airline cancels and the agent finds a replacement for $820.

One dimension moved slightly. The system might know that a small budget tolerance was expected. If so, no escalation is necessary.

Now imagine the only replacement lands in Milwaukee and requires a car. The total cost remains under $800.

The monetary scope matches. The travel plan changed materially.

A system focused only on price misses the purpose dimension.

Now imagine the conference itself moved online.

Every flight is cheap enough.

The mandate is gone.

The examples feel obvious because the context is small enough for a human to hold in mind.

Large systems fail because each dimension belongs to a different database.

The travel platform knows destination.

The calendar knows the conference.

The corporate policy system knows budget.

The agent knows the user’s instruction.

The payment system knows the card.

No component knows the entire distance to the grant.

This is the architectural challenge.

Autonomy half-life does not require one system to know everything. It requires the material signals to meet before consequential execution.

A policy decision can be assembled from partial attestations.

Task active: yes.

Recipient unchanged: yes.

Amount inside tolerance: yes.

Delegation chain valid: yes.

Action class irreversible: yes, therefore require a fresher token.

The system can make a narrow decision without centralizing every piece of raw context.

This is important for privacy and complexity.

A central authorization service should not receive every email, medical record, and strategic document merely to decide whether authority decayed. It can receive claims about material conditions from systems responsible for them.

This resembles attribute-based authorization, policy-based access control, and zero-trust evaluation in broad spirit. The novelty is not that policy can use attributes. The novelty is what we ask the attributes to represent: continuing fit between a present action and the conditions of a historical grant.

That makes provenance important.

The system needs a reference state.

Which purpose identifier?

Which approved counterparty?

Which risk class?

Which environment?

Which expected variation?

Without a baseline, “changed” has no meaning.

Version control offers a useful mental model.

A diff is informative because there is a commit to compare against. The current file does not announce how it changed by itself.

Authority needs a commit.

Not literally Git. A deliberate record of the grant against which later state can be compared.

Renewal creates a new commit.

Some changes are accepted. The baseline moves. The mandate is not forever judged against conditions from years ago.

This prevents decay from becoming nostalgia.

The goal is not to preserve the original world. It is to make changes to authority deliberate.

When the principal accepts a new supplier, the new supplier becomes part of the baseline. When the company changes strategy and reauthorizes the agent around the new objective, purpose updates. When a pilot becomes production, a new mandate replaces the pilot grant.

The system evolves through explicit baselines rather than silent drift.

This also clarifies what renewal should contain.

Renewal is not a yes/no response to the entire historical grant.

It can be a delta.

Supplier changed from A to B. Purpose unchanged. Budget unchanged. Risk reviewed. Delegation unchanged. Approve new baseline.

A delta review is cheaper because it focuses attention on what moved.

This is how mature technical systems manage change. Code review shows diffs. Database migrations describe transformations. Contract amendments specify changes. Financial variance analysis compares actuals with budget.

Authorization renewal should become equally change-aware.

The distance-to-grant idea also helps human judgment in domains that cannot be automated.

A board considering whether management still has the right strategic mandate can ask which assumptions behind the original plan changed. A legislature reviewing emergency powers can separate continuing predicates from expired ones. A manager deciding whether a team should retain special discretion can compare present work with the problem that produced the grant.

The questions create a discipline of memory.

They also expose disagreement.

One person may believe a purpose remained stable while another believes it changed. One may see a risk increase as material; another may call it ordinary volatility.

That disagreement is not a failure of the framework.

It is the judgment the static permission had hidden.

A dynamic authorization system should not conceal disputed judgment behind a score either.

Where values or legal interpretations are contested, the system should surface the relevant facts and route the decision to the right authority.

This is another reason to avoid pseudo-precision.

A number can make a political or managerial choice look technical.

“Mandate distance 0.73” sounds objective.

“Purpose unchanged; counterparty changed; legal risk newly unresolved; action irreversible” tells us what the decision actually concerns.

The second is messier.

It is also auditable.

The distance to the grant is therefore best understood as a question set embedded in the architecture and culture of delegation.

What did we authorize?

Why?

What did we expect to vary?

What changed?

Which change matters to consequence?

What can the delegate safely continue doing while we decide?

Who has the authority to renew the changed part?

When those questions can be answered, autonomy becomes easier to expand responsibly.

The principal does not have to fear every future surprise.

The mandate knows how to notice when surprise becomes a different world.

Distance is not always additive.

That is another reason to resist a score.

Some changes behave more like vetoes than increments. If the principal loses the legal right to authorize an action, nothing is gained by observing that every other condition remains close to baseline. If a customer revokes consent for a purpose that depended on consent, the fact that the actor, budget, and model version remain unchanged does not preserve the mandate. If the target account is replaced with an unknown account, the transaction does not become acceptable because the amount is small.

One material dimension can dominate the rest.

Other changes matter only in combination.

A five percent budget increase may be ordinary. A modest delay may be ordinary. A substitute supplier may be ordinary. Put all three together while a fraud review is pending and the principal may see a different transaction entirely.

This means the distance to the grant has shape.

There are cliffs.

There are slopes.

There are directions in which the mandate is elastic and directions in which it is brittle.

Good grants make some of that geometry explicit.

A travel mandate may tolerate price movement generously and traveler identity not at all. An operations mandate may tolerate implementation changes but be brittle around data deletion. An emergency authority may tolerate geographic redeployment while remaining tightly tied to the existence of the triggering emergency. A research mandate may tolerate new sources but not a change from internal analysis to public release.

This is how expertise enters the model.

The principal does not need to describe every future state. The principal should know which directions of change are ordinary in the domain and which alter the nature of the permission.

The distinction is similar to a good risk limit. A limit is not a prediction of every market move. It identifies the moves the institution refuses to treat as ordinary.

This also means two grants that look identical in scope can have different half-lives because they were born under different assumptions.

Two agents can both have permission to spend $20,000.

One is buying routine inventory from established vendors under a stable replenishment process.

The other is purchasing scarce components during an emergency from a rapidly changing supplier market.

Same nominal amount.

Different distance sensitivity.

The first grant may remain strong through months of ordinary variation. The second can become stale between breakfast and lunch.

The authority lives in the relationship, not the number.

This is one reason copying permissions between people, roles, or agents is so dangerous.

The copied scope looks correct.

The copied context may not be.

An employee changes departments and inherits a role built for another team. An agent replaces a human operator and receives the operator’s credentials. A pilot moves to production with the same tools. A subsidiary copies a parent company’s policy into a different regulatory environment.

Capability transfers cleanly.

Grant distance resets.

The new actor or environment deserves a new baseline even when the tool list is identical.

The same point applies to model upgrades.

Suppose an agent’s purpose, tools, and budget remain unchanged but the underlying model becomes substantially more capable. Organizations often treat the upgrade as reducing risk because the new model performs better on evaluations.

Maybe it does.

It can also change the practical reach of the grant.

A model that was previously incapable of discovering complex workarounds may now be able to chain tools in ways the original approver never contemplated. A model that can negotiate more effectively can create commitments the weaker model rarely reached. A model with stronger planning can consume an aggregate resource budget much faster.

The environment did not change around the actor.

The actor changed inside the environment.

Distance-to-grant analysis should catch that too.

Was the mandate granted to this actor class, or merely to an identity whose capabilities changed beneath the same name?

Human organizations understand this intuitively when a person changes role or qualification. A newly licensed professional can do more than before; that does not mean every old instruction silently expands with the new capability. Machine identity should be treated with the same care.

Distance can also shrink.

A new fact can restore fit.

A supplier under review is cleared. A principal confirms the changed objective. A legal restriction is lifted. A parent mandate is renewed. A degraded system returns to its validated operating range.

Autonomy half-life is not a one-way slide toward zero.

Authority can recover when evidence reconnects action to grant.

This matters psychologically because decay should not feel punitive. The actor is not being demoted. The relationship is being updated.

A system that only knows how to revoke will produce defensive behavior. A system that can narrow and restore authority can treat uncertainty as temporary rather than adversarial.

The path back should be as legible as the path down.

What evidence restores execution?

Who can accept it?

Does the restoration create a new baseline or merely confirm the old one?

If the principal accepts the changed supplier, the system should not keep flagging the supplier as drift forever. Renewal moves the commit.

This is how the theory avoids freezing every actor against the circumstances of its birth.

The grant is allowed to evolve.

It is not allowed to evolve silently.

There is another implication for governance: different observers can possess different pieces of distance.

The agent knows task progress.

The principal knows purpose.

The security system knows device or identity posture.

The risk system knows counterparty status.

The legal system knows obligations.

The operations system knows environment state.

No one layer should be expected to infer all the others.

A strong architecture lets each source speak for the facts it actually knows and prevents it from speaking beyond them.

The fraud service can say the supplier is under review.

It should not decide whether the entire project must stop.

The task system can say the task is active.

It should not decide that payment remains lawful.

The user can say the user still wants the outcome.

That does not prove the user possesses the authority to expose a third party’s data.

Distance is assembled from bounded claims.

This is healthier than building one omniscient “context engine” that claims to understand the entire world.

Omniscience is another form of pseudo-precision.

The architecture should know where it is ignorant.

Missing evidence can itself shorten the usable mandate for high-consequence action.

If the system cannot determine whether the recipient changed, perhaps it can prepare the payment but not release it. If it cannot confirm whether a principal role remains valid, perhaps the task can remain queued. If it cannot determine whether production is in a validated state, perhaps read-only diagnostics continue while deployment waits.

Unknown is not the same as no.

It is also not the same as yes.

The distance-to-grant idea gives uncertainty somewhere to live.

That may be one of its most useful contributions.

Static authorization systems are uncomfortable with uncertainty because policy wants a Boolean answer. Real delegated authority lives in partial information constantly.

The response should be to map uncertainty to consequence rather than force uncertainty into certainty.

This brings us back to the original promise of the concept.

A principal can delegate more when the grant has an intelligible boundary.

The delegate can adapt more when expected drift is clear.

The system can interrupt less when it knows which changes are ordinary.

And when it does interrupt, it can explain the distance rather than cite an arbitrary timer.

The point of measuring distance is not to make authority fragile.

It is to make autonomy spacious without making it permanent.