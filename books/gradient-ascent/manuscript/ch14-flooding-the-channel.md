# Flooding the Channel

Every information system has a capacity.

A person can read so many messages.

A reviewer can inspect so many submissions.

A newsroom can verify so many claims.

A customer can compare so many products.

A regulator can investigate so many complaints.

A teacher can grade so many assignments.

A security team can inspect so many alerts.

A court can process so many filings.

A search engine can crawl and rank enormous volumes, but even its compute, index, and attention budgets are finite.

A model can ingest a huge context, but not an infinite one.

Capacity is the hidden scarcity underneath information abundance.

Once generation becomes cheap, the ratio between sender cost and receiver cost can change dramatically.

The sender spends almost nothing to create another plausible item.

The receiver still spends attention to decide what the item means.

This asymmetry is old.

Spam exploited it long before large language models. A sender could distribute millions of messages because sending cost less than reading. The economics worked even if almost everyone ignored the message.

Generative systems change the quality of what can be sent cheaply.

The message can be contextual.

Well written.

Relevant-looking.

Personalized.

Varied.

Complete enough to deserve a first glance.

That raises the receiver's inspection cost.

A crude message can be rejected in a second.

A plausible message may require a minute.

A minute multiplied by a million is not a messaging problem.

It is a capacity attack on attention.

The phrase flooding the channel should be understood defensively here.

This is not a manual for overwhelming moderation systems, public processes, or people.

The useful question is institutional: what happens when production capacity scales faster than inspection capacity?

The first failure mode is backlog.

More material arrives than the institution can process.

A backlog seems mundane, but it changes behavior.

People rush.

They rely more heavily on shortcuts.

They sample.

They automate.

They raise thresholds.

They stop reading marginal cases.

They become less responsive to nuance.

The filter becomes harsher because volume forces triage.

That means artificial noise can damage real signal indirectly.

The institution does not need to confuse the noise with truth.

It only needs to spend enough capacity on the noise that less capacity remains for truth.

This is a denial-of-attention problem.

A useful message can be ignored because the inbox is full.

A legitimate appeal can be delayed because the queue is saturated.

A real bug report can disappear inside auto-generated duplicates.

A meaningful public comment can receive less scrutiny in a flood of formulaic submissions.

A genuine applicant can be lost among thousands of tailored applications.

A rare safety alert can be missed among routine machine-generated warnings.

The signal loses not because it looks false.

It loses because it arrives in a crowded channel.

This distinction matters because many defenses focus only on classification.

Is this message spam?

Is this image synthetic?

Is this review fake?

Is this application authentic?

Those are useful questions.

They do not solve capacity.

Even perfectly labeled low-value material can consume resources if the system must parse, store, route, display, or respond to it.

The receiver has to manage volume as well as truth.

This is why rate limits, prioritization, reputation systems, queues, deposits, identity checks, and other forms of friction exist across very different institutions.

They are not merely annoyances.

They are channel-management mechanisms.

A phone network cannot let one device occupy every connection.

A ticketing system cannot let one actor reserve every seat.

A public-benefits office cannot process infinite duplicate applications.

A journal cannot send every manuscript to ten expert reviewers.

A marketplace cannot give every product equal front-page exposure.

Scarce receiving capacity has to be allocated somehow.

The allocation rule becomes a target.

Goodhart returns.

If the institution prioritizes messages with certain features, senders adapt to those features.

If a platform prioritizes completeness, submissions become complete-looking.

If a hiring system rewards keyword alignment, applications become keyword-aligned.

If a review queue prioritizes urgency, more things are labeled urgent.

If a customer-support system prioritizes angry language, people learn to sound angry.

The filter creates the next optimization surface.

This is why static defenses decay.

The institution cannot choose one visible feature and expect it to remain discriminating forever.

Generative systems speed up adaptation.

They can produce compliant-looking variation around whatever the current rule rewards.

Again, the response is not to make the rule secret and hope nobody learns it.

Secret rules create their own fairness and accountability problems.

The stronger response is to build layered defenses around properties that are costly to manufacture at scale.

History.

Reputation.

Verified transactions.

Consequences for false claims.

Random audits.

External corroboration.

Demonstrated work.

Time.

Independent identity where identity is appropriate.

These do not eliminate abuse.

They change the cost curve.

The goal is to keep the cost of manufacturing review burden from falling infinitely below the cost of verification.

This economic framing is more durable than an arms-race framing.

A perfect detector is unlikely.

A sustainable institution needs abuse to be expensive enough that useful participation remains possible.

Email succeeded not because spam disappeared, but because filtering, reputation, authentication, user controls, and economics made the channel usable enough.

Search succeeded despite decades of manipulation because ranking systems evolved continuously and because users had alternatives, brands, links, and other trust cues.

Payment networks tolerate fraud because they combine identity, risk scoring, limits, monitoring, liability, and human investigation.

Institutional resilience usually comes from stacks, not single classifiers.

Artificial noise will be the same.

This matters for democratic processes because openness is itself a capacity problem.

Public institutions should be accessible.

Citizens should be able to petition, comment, complain, appeal, organize, and contact representatives.

Low participation costs are democratic goods.

Generation can lower participation costs further by helping people understand procedures and articulate views.

That is a benefit.

The same tools can also multiply submissions without multiplying independent citizens or independent thought.

The institutional challenge is to preserve access without equating message count with public support.

This is synthetic consensus in a civic channel.

One thousand distinct letters may represent one thousand people.

Or one organization helping one thousand people express a shared view.

Or a small number of actors producing volume.

Those are politically different facts.

The content alone may not reveal which is which.

A robust process separates participation from measurement.

Every legitimate person can have a voice without every additional generated paragraph being counted as an additional unit of public opinion.

Polling, verified constituencies, hearings, representative institutions, and transparent comment analysis exist partly because raw message volume is a poor measurement of population preference.

Generative abundance makes that distinction more important.

Science has a similar capacity constraint.

Peer review depends on scarce expertise.

If manuscript production becomes much cheaper, review capacity does not automatically multiply at the same rate.

AI can help reviewers with formatting checks, citation tracing, statistical review, or summarization. It may expand capacity significantly.

But expert judgment remains scarce in many domains.

A flood of plausible papers can increase the amount of time spent distinguishing incremental, flawed, duplicated, or synthetic work from genuine contribution.

Again, the problem is not that machine-assisted papers are inherently weak.

The problem is submission economics.

If one side of the market becomes cheap and the other stays expensive, the queue changes.

This can produce defensive overcorrection.

Journals raise desk-rejection rates.

Employers automate screening more aggressively.

Platforms restrict posting.

Schools return to surveillance-heavy assessment.

Governments add procedural barriers.

Consumers trust fewer unknown sellers.

The channel becomes less open for everyone.

This is a crucial externality of artificial noise.

Abusive volume can cause institutions to impose friction on legitimate users.

The sender who adds one more low-value submission does not bear the full cost.

Everyone downstream pays through stricter filters.

This is why anti-spam systems are public infrastructure for the channel, not merely private preferences.

The same logic will apply to AI-mediated information environments.

The social cost of low-value generation is not the compute used to generate it.

It is the verification and filtering capacity consumed afterward.

This gives us a useful metric.

Instead of asking how much content a system produces, ask how much review burden it creates per unit of useful information.

A generator that produces ten drafts and helps a person choose one strong result may reduce burden.

A system that publishes all ten variants may increase it.

A coding agent that generates tests and runs them before presenting a patch may reduce reviewer burden.

A system that opens dozens of low-quality changes may increase it.

A research assistant that traces claims to primary sources may reduce burden.

A generator that fabricates a bibliography-shaped surface increases it.

The important product is not output.

It is net information after verification cost.

This is the missing unit in many debates about AI productivity.

A person can become locally more productive by generating more material while making the organization globally less productive because other people must inspect it.

The sender sees throughput.

The receiver sees backlog.

Both measurements are correct.

The system-level result depends on the relationship between them.

This is why some teams already discover that AI-assisted work requires new norms.

Do not send every generated option to the next person.

Do not turn brainstorming abundance into review abundance.

Do not externalize uncertainty by asking someone else to rank twenty drafts you could have filtered yourself.

Do not treat machine generation as permission to consume unlimited human attention.

These are etiquette rules, but they are also economic rules.

Attention is scarce capital.

A healthy institution requires producers to absorb some selection cost before they spend someone else's review capacity.

The same principle can be embedded in software.

Agents can self-check.

Systems can deduplicate.

Submissions can be summarized.

Evidence can be structured.

Claims can carry provenance.

Confidence can be separated from uncertainty.

Automated checks can reject obvious failures before human review.

Queues can prioritize based on consequences rather than rhetorical urgency.

The point is not to automate humans out of the system.

It is to protect human attention for cases where judgment adds value.

That becomes increasingly important because artificial noise will often be plausible enough to pass the first glance.

Plausibility is expensive to verify precisely because it deserves a second glance.

The old spam message was easy to delete because it looked like spam.

The future burden is content wearing the costume of competence.

This creates a psychological vulnerability.

Humans use confidence as a triage signal.

A well-structured, specific, fluent claim feels more worth engaging than a hesitant fragment.

Generative systems can produce confidence cheaply.

The channel therefore fills not only with volume, but with objects that look as though they deserve priority.

That is the next signal to lose its old meaning.

The problem is not that confidence becomes false.

It is that confidence becomes abundant.

When confidence is easy to manufacture, it stops being evidence of knowledge.

It becomes a costume.
