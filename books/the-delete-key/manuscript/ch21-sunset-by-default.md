# Sunset by Default

Defaults govern more of civilization than arguments do.

A recurring meeting continues because the calendar repeats it. A subscription renews because the billing system remembers. A permission survives because no event revokes it. A rule remains because repeal requires an affirmative act. A temporary cloud environment survives because its creator moved on before anyone assigned an end date.

The default is persistence.

That default is often sensible. Constitutions should not vanish because nobody clicked renew. Property rights, due-process protections, evidentiary records, emergency capacity, and long-lived infrastructure may need durability precisely because their value cannot be re-proved every quarter.

But there is a large class of things for which permanence is not a virtue. Temporary access, experiments, emergency measures, test infrastructure, provisional workflows, project-specific data copies, short-term exceptions, generated reports, disposable automation, and migration bridges are created for bounded purposes.

Giving those things indefinite lifetimes is a design error.

Sunset by default means that temporary things should have to earn permanence rather than accidentally acquire it.

The distinction is important.

A universal expiration regime would replace one bad default with another. The goal is classification.

Permanent until explicitly changed.

Review periodically.

Expire unless renewed.

Archive after active use.

Retain while a legal or evidentiary duty exists.

Destroy after the obligation ends and destruction is justified.

The default should follow the nature of the thing.

This sounds obvious until you inspect real systems. Many resources have no declared lifecycle at all. Their lifetime is simply “until somebody notices.”

That is not a policy.

It is abandonment with electricity.

## Expiration is a query

The biggest advantage of a sunset default is not automatic deletion. It is forced re-encounter.

A temporary privilege reaches its date and asks whether the reason remains.

A pilot reaches its date and asks whether the evidence justifies adoption.

A crisis control reaches its date and asks whether normal conditions have returned.

A generated service reaches its date and asks whether anyone owns it.

A data copy reaches its date and asks whether the purpose that justified retention still exists.

The expiration date is therefore less like a bomb and more like a scheduled query against reality.

Does the original purpose still exist?

Is the owner still accountable?

Are the dependencies still active?

Has the risk class changed?

Is there a legal hold, archival duty, or rare-event reason to retain the object?

If renewed, what evidence justified renewal and when should the next question arrive?

The question arrives while the object is still legible enough to answer.

Timing matters because reasons decay faster than artifacts.

Six months after creation, the project team may still remember why a resource exists. Six years later, review becomes archaeology. The object remains precise while the justification becomes folklore.

Early lifecycle decisions are cheap.

Late ones are expensive.

This suggests a rule for systems that create things automatically: no durable object without a declared persistence class.

If an agent creates a scheduled job, it should know whether the job is permanent, project-bound, date-bound, or review-bound.

If it creates a credential, the credential should have an expiration compatible with the task.

If it creates an experimental database, the owner and expected disposition should be recorded.

If it drafts policy, the draft should not silently become authority because it remained searchable.

If it creates a compatibility layer during migration, the layer should carry the dependency whose disappearance permits retirement.

The system should make temporariness machine-readable.

## A lifecycle contract

The useful unit is not merely an expiration timestamp. It is a lifecycle contract.

For a temporary object, that contract might contain:

- purpose;
- accountable owner;
- persistence class;
- creation date;
- review or expiration date;
- known dependencies;
- retention or preservation obligations;
- renewal authority;
- retirement procedure;
- final disposition;
- evidence required to prove completion.

The fields need not all be entered by a human. A deployment system can infer the creator, repository, environment, and dependency graph. An identity platform can know the grantor, role, and credential expiry. A policy system can link a temporary measure to the authority that created it.

The important thing is that creation leaves behind enough structure for a future system to end the thing safely.

That is a recurring principle of this book: creation should emit its own deletion metadata.

Today we often do the reverse. We create quickly and ask a future maintainer to reconstruct the lifecycle from logs, invoices, Slack archaeology, employee memory, and fear.

Sunset metadata turns that archaeology into an interface.

## Renewal can become theater

There is an obvious objection.

Expiration itself creates work.

Every review is another queue. Every renewal asks for attention. If everything demands reconfirmation, the organization can drown in lifecycle management.

Worse, renewal can become ceremonial. A committee receives two hundred expiring items, cannot investigate them, and renews all two hundred. The sunset mechanism remains formally present while the persistence default quietly returns.

This is not a theoretical defect in the idea of review. It is a capacity constraint.

A lifecycle system that schedules more judgment than an institution can supply will produce rubber stamps.

So review budgets matter.

Low-risk temporary resources can expire automatically.

Medium-risk objects can require lightweight evidence of continuing purpose.

High-consequence systems may need formal review, dependency analysis, notice, or appeal.

Stable permanent structures should not demand ceremonial renewal merely to prove someone is awake.

The cost of review belongs in the lifecycle design.

A good system spends attention where persistence carries meaningful risk or cost.

One practical technique is renewal by exception. Instead of asking a person to inspect every expiring object, the system assembles the evidence first: recent use, current owner, unresolved dependencies, legal holds, carrying cost, replacement status, and prior renewal history. Humans see the ambiguous cases rather than an undifferentiated queue.

Another is renewal friction that scales with consequence. Extending a disposable preview environment for seven days may take one click. Extending an emergency surveillance authority, privileged administrator role, or sensitive-data exception should require a stronger record.

The point is not friction for its own sake.

The point is to prevent permanence from being the cheapest possible answer to uncertainty.

## Expiration is not destruction

A sunset date also needs a defined consequence.

This is where sloppy lifecycle design becomes dangerous.

An expired permission might be revoked immediately.

An expired service might enter read-only mode.

An expired rule might stop applying to new cases while transition provisions protect existing rights.

An expired dataset might move to restricted archive pending a retention check.

An expired physical asset might be scheduled for inspection rather than demolition.

The date should trigger the next valid state, not an indiscriminate erase command.

That distinction protects evidence and resilience.

Suppose a rarely used emergency system reaches its review date. Ordinary telemetry shows almost no activity. A naive sunset system might call that proof of uselessness. A competent system asks a different question: is low usage evidence of obsolescence, or is low usage exactly what we expect from an emergency capability?

The same applies to records. A record may have no operational use and still have evidentiary value. A legal hold can override a normal destruction schedule. An archive can be inactive by design.

Expiration forces a question. It does not predetermine the answer.

## Defaults can change experimentation

The deeper value of sunset by default is cultural.

It breaks the assumption that creation is the final decision.

A proposal can be approved provisionally without pretending the organization already knows the long-term answer.

That may make institutions less afraid of experimentation.

The choice becomes:

Try this under bounded conditions, observe it, then decide whether it deserves to stay.

That is a more honest treatment of uncertainty.

It also changes the politics. A temporary measure does not need to defeat every imaginable future objection before it begins. Its advocates know they will later have to show what happened. Its opponents know adoption is not necessarily permanent. The institution buys information without automatically buying immortality.

But this only works when sunset dates are credible. If every temporary measure is routinely renewed, actors learn that “temporary” is branding. If expiration is abrupt and careless, actors learn to fight every sunset because transition is dangerous.

A functioning sunset regime therefore depends on competent endings.

The delete key and the expiration date are complements.

## Generated systems need garbage collection

Artificial intelligence makes this especially valuable because generated systems can proliferate too quickly for humans to supervise item by item.

An agent can create a dashboard before lunch, a scheduled report before the meeting, a database for a one-week analysis, three service accounts for a migration, a webhook for a test, and a small internal application because someone asked a question in chat.

Each object can be individually cheap.

The aggregate can be ruinous.

Cheap creation removes the natural friction that once limited the number of artifacts. It does not remove the carrying costs: credentials, attack surface, dependencies, documentation, storage, policy ambiguity, ownership, monitoring, and future migration.

We will need lifecycle defaults the same way programming languages need memory management.

The analogy has limits. Institutions cannot garbage-collect rights, evidence, or human obligations merely because an automated reachability test says they are unused. But the engineering lesson survives: a system that can allocate objects faster than humans can inspect them needs a systematic way to determine when those objects no longer deserve active life.

The creation agent should therefore be able to answer, at creation time:

What makes this object eligible to end?

What evidence would block that ending?

What state should follow expiration?

Who can renew it?

How will we know retirement actually completed?

Not because everything should vanish quickly.

Because forgetting to clean up cannot remain the primary cleanup mechanism.

The age of cheap creation should not produce an age of accidental permanence.

Temporary things should know they are temporary.

Permanent things should know why they are permanent.

And renewal should be a decision, not a reflex.