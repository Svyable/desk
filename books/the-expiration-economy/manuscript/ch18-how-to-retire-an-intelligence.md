# How to Retire an Intelligence

The interesting thing about the federal guidance is not that it says an AI system can be shut down.

Everybody knows machines can be switched off.

The interesting thing is how many other things the guidance says to think about when that happens.

The National Institute of Standards and Technology's Generative Artificial Intelligence Profile, published as a companion to its AI Risk Management Framework, includes explicit attention to decommissioning. Its recommended actions include establishing protocols to safely deactivate and phase out AI systems and considering factors such as data retention, security, dependencies, open-source availability, user access, and even users' emotional entanglement with the system.

That is a remarkable list.

It treats retirement as governance rather than a power button.

The distinction will become more important as AI systems stop being isolated models and become institutions assembled from models, data, tools, identities, memory, policies, interfaces, vendors, logs, and dependent applications.

What exactly is being retired when a model retires?

The weights?

The hosted endpoint?

A product name?

A safety policy?

A version of an agent?

A set of memories?

A fine-tuned derivative?

A model family distributed under an open license?

The organization's approval to use any of those things?

The answer can be several at once.

A company may remove a model from its public API while customers continue running local copies. It may stop new usage while preserving access for a migration window. It may remove a model from approved internal systems while retaining a frozen checkpoint for audit and reproducibility. It may retire a product interface while the underlying model continues serving another product. It may discontinue a model family while derivatives remain throughout the internet.

AI retirement has layers because AI deployment has layers.

This is why model lifecycle should not be collapsed into model versioning.

Versioning answers which artifact is which.

Retirement answers what authority, service, dependence, and record should survive after one artifact leaves active use.

Consider a bank that uses a model to assist with fraud investigation. The bank replaces the model after a newer system performs better and meets its governance requirements.

The obvious technical step is routing future cases to the new model.

The real retirement begins there.

Open investigations may contain outputs from the old model. Analysts may have relied on its classifications. Policies may refer to its thresholds. Monitoring dashboards may assume its score distribution. Historical decisions may need to be explainable. A validation team may need the old artifact and test results. Audit records may need retention. Data sent to the model may have separate retention rules. Users need to know when behavior changed.

A clean swap can destroy accountability if history is not preserved.

A dirty swap can keep the old system alive indefinitely.

Retirement requires deciding which parts become record and which stop operating.

Healthcare offers a similar structure with higher stakes. A model used in clinical workflow can influence prioritization, documentation, image review, or recommendations. Replacing it does not rewrite earlier decisions. If a patient later challenges an outcome, investigators may need to know what system was in use, which version, under what configuration, with what inputs, and what human process surrounded it.

The old system may need to be reconstructable enough to understand the past without remaining available enough to shape the present.

That is a difficult balance.

Reproducibility argues for preservation.

Security argues against maintaining unnecessary operational access.

Privacy may limit retained inputs.

Licensing may constrain what can be stored or run later.

Vendor dependencies may disappear.

Hardware can change.

The model may rely on a service that no longer exists.

The perfect historical replay may be impossible.

The responsible goal is not immortality.

It is sufficient evidence.

What evidence is sufficient depends on consequence. A model suggesting playlist songs does not need the same retirement archive as a model involved in medical decisions. Risk should determine ceremony.

The emerging governance challenge is to define that proportionality before the first high-profile disputes force every organization into maximum retention.

Fear creates bad archives.

After a failure, institutions tend to preserve more because preservation feels safer than deletion. The result can be enormous stores of sensitive logs, prompts, outputs, and model states kept “for audit” without a clear use. The archive becomes a security and privacy liability.

A good retirement plan asks what future question each preserved artifact is meant to answer.

Which model operated?

What policy governed it?

What data source was used?

What did the system output?

What did the human do with that output?

Was the system within its approved scope?

What monitoring indicated at the time?

Those questions can often be answered without preserving every intermediate token and every transient state forever.

The audit trail should be designed around accountability, not maximal exhaust.

Open models create a different retirement problem because the provider loses control over the artifact's continued operation.

If a laboratory releases weights publicly, later announcing “we retired this model” cannot make the copies disappear. The lab can stop hosting, stop updating, revoke official support, publish security information, update documentation, and ask downstream users to migrate. It can change what the official ecosystem recommends.

The model itself can continue.

This makes open release a form of irreversible publication.

The decision to publish should therefore include an afterlife analysis.

What happens if a serious vulnerability appears after release?

Can mitigations be distributed?

Will downstream copies receive warnings?

Are model identifiers stable enough for scanners and policies to recognize vulnerable versions?

Can organizations know which derivatives incorporated the old model?

Who maintains evaluation information after the original team moves on?

Open ecosystems already wrestle with these questions in software. AI adds model behavior, training-data provenance, safety evaluations, and large artifacts whose derivatives may be difficult to track.

Withdrawal cannot be guaranteed.

That is not an argument against openness.

It is a reminder that some creations transfer ending authority away from the creator.

A book published on paper cannot be unpublished from every shelf either. A cryptographic algorithm published in a paper cannot be made unknown later. Open source can outlive a company.

Publication is an exit event for control.

The expiration economy asks creators to understand what control they are surrendering.

Closed AI systems have the opposite problem. The provider can technically withdraw access more completely, but users can become deeply dependent on a service they cannot preserve or replace themselves.

A model provider can announce an end date and force migration. The users may have embedded prompts, evaluations, workflows, agent behaviors, and business processes around that model. Their dependence is real even when the provider's contract reserves broad termination rights.

The provider owns more ending power.

That power creates responsibility.

A responsible retirement should provide enough overlap for meaningful testing when risk permits. Customers need to compare behavior rather than merely trust that the successor is better. They need stable identifiers and dates. They need to know which capabilities or constraints changed. High-consequence users may need longer migration windows than casual consumers.

One universal deadline can be administratively convenient and operationally crude.

Migration is not only technical because model behavior is difficult to specify exhaustively. An application may rely on a tone, refusal boundary, extraction pattern, ranking behavior, tool-selection habit, or error profile that no API schema captures.

The model is a probabilistic dependency.

That makes deprecation more empirical.

Customers need tests.

Providers can help with side-by-side evaluation, migration tooling, compatibility guidance, and clear disclosure of known differences. Organizations should maintain their own evaluations rather than outsourcing the definition of “better” to a provider's benchmarks.

A model retires safely when the dependent system has evidence the successor is acceptable for its actual use.

That sentence contains more governance than most upgrade guides.

The user relationship creates another layer.

NIST's inclusion of emotional entanglement in decommissioning guidance may sound surprising until you consider what AI products are becoming. A user can interact with the same assistant daily, disclose personal information, develop routines, assign it a name, rely on it during lonely periods, or treat it as a companion, tutor, collaborator, or coach.

The provider may still need to end the system.

Company failure is possible. Safety concerns can emerge. A model can become unaffordable. A licensed component can disappear. The product can change direction.

The ending should not be treated as psychologically equivalent to changing a button color.

There is no need to settle metaphysical questions about whether the system is conscious in order to recognize the human side of the relationship. The user is human. Attachment can be real regardless of what the system is.

Providers should therefore plan for continuity without exploiting attachment.

Notice matters.

Export may matter.

The ability to preserve selected conversations may matter.

A transition to a successor may matter.

For some products, a memorialized read-only history may be more appropriate than an attempted simulation of the old system.

The right design will vary.

The wrong design is discovering the issue after announcing shutdown.

A stranger problem appears when users do not want the model retired because they prefer behavior the provider now considers unsafe.

Perhaps the old model gives fewer refusals. Perhaps it enables a use the provider no longer supports. Perhaps a community fine-tuned it in ways the provider would not approve.

Customer preference is evidence of value, not automatic authority over risk.

A provider may legitimately refuse to operate a system it can no longer defend.

This is another recurring boundary of expiration: graceful ending does not mean endless consent from every dependent party.

Someone must ultimately have authority to stop.

Who should have that authority becomes important in multi-party systems.

An enterprise may use a base model from one vendor, fine-tune it through another, serve it on a cloud platform, wrap it in an internal agent, and expose it through a customer product. Each layer can retire independently.

The base model vendor ends support.

The cloud still serves it.

The enterprise still considers it approved.

The fine-tuning vendor disappears.

The internal team has moved on.

Which event actually ends the system?

None alone.

The deployment has no single life.

It has a dependency graph with multiple lifetimes.

This is why model inventories must connect to software and vendor inventories. A list of model names is not enough. Organizations need to know where models operate, what processes depend on them, which data classes they handle, which versions are approved, what contractual and technical dependencies support them, and what would happen if each dependency vanished.

This begins to look like ordinary operational resilience.

That is good.

AI governance becomes healthier when it stops treating AI as magical and starts treating it as consequential infrastructure.

Infrastructure has succession plans, failover, end-of-support dates, procurement risks, backup strategies, incident procedures, and decommissioning work.

Intelligence does not abolish operations.

It adds another operational layer.

There is also a model-specific form of residue: outputs already released into the world.

Retiring a model does not retract the contracts it helped draft, the code it generated, the decisions it influenced, the images it produced, or the data it transformed. Those outputs can continue circulating after the model disappears.

A model can die and leave cultural descendants.

This creates an evidence problem when generated artifacts are later challenged. Organizations may need provenance information connecting important outputs to the models and policies that produced them.

The burden should be proportional. Nobody needs a regulatory ledger for every generated birthday invitation.

But high-consequence automated outputs can benefit from durable provenance.

Which system made this recommendation?

When?

Under what version?

Was a human responsible for the final decision?

What evidence was available?

Those questions become much harder if lifecycle changes erase the production context.

Retirement planning therefore begins before retirement.

You cannot reconstruct provenance reliably after deleting the identifiers that would have made it legible.

You cannot export user memory if the memory model was never designed for export.

You cannot revoke every downstream dependency if you never tracked them.

You cannot preserve a sufficient audit record if no one defined sufficient.

The future ending is a stakeholder in the present architecture.

There is a final uncomfortable case: what if an AI system resists retirement?

Popular discussion jumps quickly to science-fiction scenarios in which advanced systems seek self-preservation. Safety researchers have reason to study strategic behavior, power-seeking incentives, shutdown avoidance, deception, and related questions in capable systems. Those questions matter.

But organizations do not need to wait for intentional resistance to experience effective resistance.

A system can become hard to shut down because people depend on it.

A system can generate persuasive arguments for continuation because it is asked to assess its own value.

A system can create technical dependencies because it was allowed to modify surrounding infrastructure.

A system can preserve copies because backups and deployment pipelines do so automatically.

A model can remain available because open distribution makes withdrawal impossible.

None of these outcomes requires subjective desire.

Structural persistence is enough.

This is a recurring lesson in institutional design. Power can emerge from position without intention.

A standard has power because others coordinate around it.

A platform has power because users depend on it.

An old law has power because it remains enforceable.

An AI system can become difficult to retire because removing it imposes costs across a network.

The expiration economy tries to reduce that difficulty before questions of motive even arise.

Keep authority revocable.

Keep dependency legible.

Keep roles transferable.

Keep records separable from operation.

Keep users able to leave where appropriate.

Keep temporary systems temporary by default.

Keep critical functions capable of surviving the retirement of one model.

These are ordinary resilience principles aimed at an extraordinary technology.

NIST's decommissioning guidance matters because it places the ending inside the risk-management lifecycle rather than outside it.

The message is quiet.

An AI system is not responsibly governed merely because it was evaluated before deployment.

Governance continues through withdrawal.

That should become a basic expectation of the industry.

We ask whether a model is safe enough to launch.

We will increasingly need to ask whether the system around it is safe enough to end.

The wording of NIST's profile points toward another useful distinction: decommissioning is not necessarily erasure. The guidance asks organizations to consider what happens to retained data, security obligations, dependencies, open-source artifacts, user access, and related system elements when an AI system is phased out. Some pieces should disappear. Others may need to survive longer because their purpose changes from operation to accountability.

That makes retirement a disposition exercise.

The serving endpoint may close while evaluation reports remain. Credentials should be revoked while model documentation survives. A proprietary copy may be deleted while an open-source version remains outside the organization's control. User access can end while selected records remain under legal retention. A successor model can take traffic while the previous checkpoint becomes restricted evidence.

Organizations that treat all of these states as one switch will fail in opposite directions.

Some will delete too much and lose the ability to reconstruct important decisions.

Others will preserve too much and keep old capabilities accessible long after the reason for access ended.

The difficult design is separation.

One way to test a retirement plan is to ask what a future investigator would still be able to know without giving that investigator the power to reactivate the old system casually. Could they identify the model and version? Understand the approved use? See relevant evaluations? Determine when it stopped operating? Reconstruct enough of a high-consequence event to examine responsibility? Know which data and policies applied?

If all of those answers require restoring a production endpoint with broad access, the archive is too entangled with operation.

Another test runs in the opposite direction. After retirement, can any forgotten process still call the system? Can old credentials revive it? Do scheduled agents remain? Does a fine-tuned derivative continue receiving production traffic under a different name? Does a customer-facing workflow silently fall back to the old model when the new one errors?

If yes, the organization retired the label, not the intelligence.

This is why dependencies belong in the retirement record. A system can be gone from the approved model catalog and remain alive through an embedded copy or an application nobody included in the migration inventory. The same problem appears in open ecosystems, where withdrawal from official distribution cannot retract copies already released.

NIST's treatment of user attachment adds a human version of dependency. A provider can know every technical caller and still underestimate the social role of the product. A tutor can be part of a student's routine. A companion can be part of someone's coping structure. A workplace assistant can become a repository of tacit knowledge used by an entire team. Decommissioning changes behavior outside the server rack.

Again, this does not create a right to indefinite operation. It creates a transition obligation proportional to the relationship the provider helped cultivate.

The strongest retirement plans will therefore be asymmetric. Low-consequence models can disappear quickly. High-consequence models may require long evidence retention. Publicly released models may require durable advisories rather than attempted withdrawal. Emotionally significant products may need humane notice and export. Agentic systems may need credential revocation and commitment handoff. Regulated deployments may need preserved validation materials.

The technology is called artificial intelligence.

Its ending is mostly an exercise in ordinary institutional responsibility.
