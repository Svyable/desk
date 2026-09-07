# The Protocols of Trust

Rivals do not need to trust each other to agree that some misunderstandings are stupid.

They may still compete, sanction, threaten, spy, and prepare for conflict.

Yet both can prefer that a military exercise not be mistaken for an attack, that an emergency message be authenticated, or that an incident at sea not escalate because nobody knows which channel is legitimate.

This is the space for protocols of trust.

The phrase is intentionally narrow.

A protocol does not require friendship.

It requires agreement on a procedure.

## Trust in the procedure, not the person

Diplomacy often treats trust as interpersonal.

Do I believe you?

Can I rely on your word?

Will you keep the bargain?

Those questions matter, especially in negotiation.

But crisis stability also depends on a less romantic form of trust.

Does this channel work?

Was this message actually sent by an authorized official?

If we report an incident, will someone on the other side receive it?

If a ship changes course according to an agreed procedure, will the other ship understand the move?

This is procedural trust.

It can survive even when political trust is close to zero.

The Washington–Moscow direct communications link was valuable not because it reconciled the United States and Soviet Union but because it created a more reliable way to transmit urgent leader-level messages after the Cuban Missile Crisis demonstrated the cost of diplomatic latency.

Later agreements governing dangerous military encounters followed the same basic logic.

The achievement was modest and profound.

Two hostile systems agreed that some channels should be less ambiguous than the rest of the relationship.

## Trust should be decomposed

The word trust becomes dangerous when it hides several different claims.

A state may trust that a channel is technically secure without trusting the truth of the message.

It may trust that the message came from the named institution without trusting that the institution controls every unit in the field.

It may trust that an incident notification is accurate while rejecting the sender’s explanation of why the incident occurred.

It may trust that a procedural commitment will be followed while believing the broader political relationship is hostile.

These forms should remain separate.

Channel trust.

Identity trust.

Authority trust.

Freshness trust.

Semantic trust.

Behavioral trust.

Political trust.

The protocol should specify which layer it is designed to support.

A hotline is mainly a channel and authority mechanism.

An incident-notification agreement may add behavioral expectations.

Neither should be advertised as proof of political trust.

Decomposition makes cooperation safer because each side knows what it is and is not relying on.

## The AI authentication problem

Artificial intelligence creates new reasons to build narrow procedures.

Authentication is the clearest.

When convincing synthetic audio, video, text, and personas are cheap, a government cannot rely on realism as evidence of authority.

A message can look presidential without being presidential.

A voice can sound familiar without being authentic.

A document can use the right style and still have no legitimate sender.

The response should not be a global attempt to make synthetic media impossible.

It should be an institutional answer to a narrower question:

How does a state prove authorized intent?

Cryptographic signatures can help.

Prearranged communication channels can help.

Rotating credentials can help.

Out-of-band confirmation can help.

Provenance systems can help establish where media came from and how it was altered.

None proves that the message is true.

None proves that the policy is wise.

None proves that the sender will keep the promise.

They establish something simpler and indispensable.

This message came through an authorized process.

In a crisis, that is already a large reduction in uncertainty.

## Authentication has to survive compromise

A protocol is weak if it works only when nothing is wrong.

Suppose the primary secure channel is unavailable.

Suppose an adversary suspects its credentials have been compromised.

Suppose the sender’s network is under cyberattack.

Suppose two contradictory messages arrive through different routes.

Suppose a synthetic video appears publicly before the authenticated diplomatic message reaches the other capital.

The protocol needs failure behavior.

What is the backup route?

Which official can confirm the message?

How long should the recipient wait before assuming the primary channel is compromised?

What happens if confirmation cannot be obtained?

Can a third state relay a message?

Can a diplomatic mission authenticate it locally?

Which parts of an emergency message can be verified without exposing sensitive systems?

Failure behavior is not an edge case.

The crisis is the edge case.

## A channel-state machine

The system should make failure states explicit before the failure occurs.

A useful model has at least five states.

Healthy.

Degraded.

Suspected compromise.

Confirmed compromise.

Recovery.

Each state should change procedure.

In the healthy state, ordinary authentication and routing rules apply.

In the degraded state, latency may rise and secondary paths become active.

In suspected compromise, sensitive commitments should require out-of-band confirmation and the primary channel should lose some authority.

In confirmed compromise, the channel should be quarantined rather than merely distrusted informally.

In recovery, old credentials should not silently regain authority because the network appears normal again.

The recovery state needs its own proof.

New credentials.

Known-good endpoints.

Short test exchanges.

Named political confirmation.

The point is to turn uncertainty about the channel into a known operating mode rather than an improvisation.

A state machine converts panic into procedure.

## The danger of one perfect channel

A single immaculate hotline can itself become a vulnerability.

If everyone believes it is the only legitimate channel, disabling it can create extraordinary ambiguity.

If the system is compromised, operators may continue trusting it precisely because doctrine told them it was trusted.

Resilience therefore requires channel diversity.

Leader-to-leader systems, diplomatic channels, military contacts, intelligence channels, embassies, and selected third parties can overlap without being interchangeable.

The objective is not to create many routes for contradictory policy.

It is to make it difficult for one technical failure to eliminate the possibility of political clarification.

The last human channel should not be a single cable.

It should be a function the system can preserve through more than one path.

## Channel portfolios need hierarchy

Diversity without hierarchy creates another failure mode.

Three channels can carry three slightly different messages.

A military contact can make a tactical reassurance while a leader issues a political warning.

An embassy can repeat yesterday’s guidance after headquarters has changed policy.

A third-party relay can preserve the words but lose the authority context.

The portfolio therefore needs routing rules.

Which channel can make commitments?

Which can acknowledge receipt?

Which can clarify operational facts?

Which can relay without interpretation?

Which can authenticate another channel?

Which becomes authoritative if the primary route fails?

The hierarchy should be known without making the system dependent on a single node.

Redundancy should preserve function, not multiply policy.

## Notification as a narrow bargain

Another useful seam is notification.

A state deploying AI-enabled decision support may never reveal its models, data, or internal doctrine.

It may still agree to notify rivals about selected categories of activity: major military tests, autonomous-system incidents near contested areas, disruptions to strategic communications, or exercises whose observable features could otherwise be mistaken for attack preparation.

This is behavioral cooperation without technological transparency.

That distinction is important because comprehensive AI arms control may be impossible in many domains.

The technology is dual-use, rapidly changing, and embedded across civilian and military systems.

But two governments do not need to agree on what counts as AI to agree that a particular incident should trigger contact.

The protocol can attach to the event.

An unmanned system crosses a boundary unexpectedly.

A strategic communication route experiences unexplained interference.

A military exercise changes in a way that could be misread.

A machine-generated message is detected on an emergency channel.

The notification rule can be specific even when the technology is not.

## Notifications need a taxonomy

A notification regime becomes more useful when the parties know what category a message occupies.

Information.

Warning.

Incident report.

Request for clarification.

Request for restraint.

Emergency operational notification.

Political commitment.

Preliminary report.

Final report.

The category matters because each should carry different expectations.

A preliminary report should not be quoted later as if it were a final factual admission.

A warning should not automatically be interpreted as an ultimatum.

A request for clarification should not be mistaken for evidence that the sender has accepted the recipient’s framing.

Machine translation and summarization make taxonomy even more important because software tends to flatten document types into fluent prose.

The protocol should preserve the sender’s category as part of the message object.

## Incident logic

The strongest protocols are usually designed around incidents rather than grand theories.

What happened?

Who has authority to respond?

What information must be exchanged?

What information may be withheld?

How quickly should contact occur?

What behavior is expected while the incident is investigated?

Those questions are easier to negotiate than broad agreement about strategic intentions.

They are also closer to the point where accidental escalation begins.

Imagine two autonomous maritime systems behaving unexpectedly near one another.

The political question is not initially whether the parties share a philosophy of autonomy.

It is whether either system is armed, whether the behavior was commanded, whether the incident is continuing, and what each side should do while facts are established.

A protocol can create a temporary container around uncertainty.

That is often enough to buy time.

## The protocol must reach the operator

Diplomatic agreement is not operational capability.

A beautifully negotiated mechanism can fail because the person on duty does not know it exists.

This is a recurring problem in crisis management.

Governments create hotlines, notification channels, and memoranda, then treat the existence of the document as the existence of the capability.

The real test is organizational.

Can the watch officer find the procedure at three in the morning?

Are the contact numbers current?

Do the systems connect?

Do interpreters understand the terminology?

Do military units know what actions are expected after the notification?

Can the political leadership use the channel without improvising legal authority?

A protocol nobody practices is a document.

Trust in crisis comes partly from rehearsal.

## Protocol availability is a readiness measure

The institution should be able to measure whether a protocol is actually available.

Time to locate the procedure.

Time to identify the authorized sender.

Time to establish a working route.

Time to authenticate the first message.

Time to obtain translation.

Time to route the message to the correct decision authority.

Time to acknowledge receipt.

Time to produce a substantive response.

Those clocks should be exercised.

A protocol that is formally active but takes ninety minutes to reach the correct official may not be meaningful in a ten-minute crisis.

The gap between nominal existence and usable availability is the same gap that appears throughout machine-speed statecraft.

The paperwork can say the capability exists while the clock says it does not.

## Practice under bad conditions

Exercises should therefore make the channel fail.

Do not test the hotline only by sending a clean message through a healthy network.

Simulate cyber disruption.

Send conflicting reports.

Remove a key official.

Create a translation ambiguity.

Introduce an unverified synthetic recording.

Make the primary credential unavailable.

Delay one side’s response.

Force the participants to decide when to switch routes and what can still be trusted.

AI can be useful here because it can generate large numbers of plausible edge cases and adversarial variations.

This is an area where synthetic complexity is a feature.

The machine can make the drill harder without being given authority over the real-world decision.

## Exercise the political seam too

Technical exercises are not enough.

The hard failure may be political.

The system works, but the only official authorized to send the message is unavailable.

The military wants to notify immediately, but the foreign ministry fears the wording concedes a legal point.

An embassy receives reliable information but cannot determine whether headquarters wants it passed directly.

The leader wants to reassure, but operational commanders cannot yet verify the relevant fact.

A rival sends a message that is authentic, urgent, and strategically manipulative.

The exercise should force institutions to decide who owns those seams.

Trust protocols fail when technical routing is rehearsed but authority routing is not.

## Provenance is not authority

The rise of content-provenance standards creates another useful distinction.

Provenance can help show where a piece of media originated, which tools handled it, and whether the chain has been altered.

That is valuable.

But provenance is not political authority.

A perfectly authenticated video from a government media office may not be an emergency instruction from the head of government.

A digitally signed document may be genuine but outdated.

A credential may prove which system transmitted a message without proving that the sender had authority to make the commitment inside it.

Crisis protocols therefore need layers.

Identity.

Authority.

Freshness.

Integrity.

Channel.

Context.

The system should not collapse these into one green checkmark.

A government can know who sent a message and still need a human judgment about what the message means.

## Semantic provenance

Machine assistance adds another layer.

A received message can acquire several descendants.

Original text.

Human translation.

Machine translation.

Summary.

Analytic annotation.

Leader briefing.

Public talking point.

Each transformation can remove ambiguity, change emphasis, or convert a conditional statement into something that sounds categorical.

The system should preserve semantic provenance.

What words came from the sender?

Which came from a translator?

Which were machine generated?

Which interpretation was added by an analyst?

Which caveat disappeared in the executive summary?

Semantic provenance is not pedantry.

In a crisis, a single modal verb can carry strategic meaning.

May.

Will.

Intend.

Expect.

Authorize.

Consider.

A fluent system should not be allowed to make those distinctions invisible.

## Ambiguity can be strategic

The hardest limit is adversarial ambiguity.

A state may want uncertainty.

It may benefit from leaving unclear whether an incident was deliberate, whether a cyber operation was authorized, or whether a proxy acted with official support.

Ambiguity can create bargaining leverage and reduce accountability.

Protocols are most vulnerable precisely when uncertainty is useful to one side.

That does not make them pointless.

It changes the design goal.

The protocol should make *specific* forms of ambiguity more costly.

If an emergency message cannot be authenticated, the recipient knows not to treat realistic media as authoritative.

If a notification is required after a certain incident and none arrives, that absence becomes information.

If a standing channel exists and one side refuses to use it, the refusal itself can shape assessment.

A protocol cannot force honesty.

It can structure the evidentiary consequences of silence.

## Silence needs its own semantics

Silence is easy to overinterpret.

A missing reply can mean refusal.

It can mean communications failure.

It can mean the recipient is verifying facts.

It can mean the message did not reach the correct authority.

It can mean the government is divided.

It can mean deliberate ambiguity.

A strong protocol therefore defines some silence behavior.

Acknowledgement expected within a certain window.

Substantive response may follow later.

If the primary channel fails, a secondary path should carry a short status message.

If no response can be provided, the recipient should know whether that absence itself violates the procedure.

The objective is not to eliminate ambiguity.

It is to prevent technical silence from being automatically interpreted as political hostility.

## Trust recovery after violation

Protocols matter most when they are violated.

A notification arrives late.

A channel is used deceptively.

An agreed incident procedure is ignored.

A credential is compromised.

A state with no recovery model faces two bad choices.

Pretend the violation did not matter.

Or abandon the protocol entirely.

The better approach is graduated trust recovery.

Identify the failed layer.

Was the problem technical, procedural, semantic, or political?

Quarantine that layer where possible.

Use alternate channels.

Exchange a minimal factual account.

Correct credentials or procedures.

Run a limited test.

Restore only the authority that has been revalidated.

This makes trust reversible and repairable rather than binary.

A narrow protocol can survive a narrow failure if the system knows how to contain it.

## Trust has a half-life

Even without violation, procedural trust decays.

Officials rotate.

Contacts go stale.

Hardware changes.

Credentials expire.

Languages and terminology evolve.

A hotline tested five years ago is not the same capability today.

A useful trust-health ledger should therefore track time since last successful contact, time since last credential rotation, time since last degraded-mode exercise, time since contact-list validation, time since semantic review, and time since political authorities rehearsed the process.

These are boring metrics.

That is precisely why they matter.

Neglect accumulates invisibly until the crisis exposes it all at once.

## Minimum viable trust

The useful target is not maximal transparency.

It is minimum viable trust.

Enough trust in the process to delay the worst interpretation.

Enough authentication to know who is speaking.

Enough notification to distinguish accident from deliberate silence.

Enough redundancy to keep contact possible after technical failure.

Enough rehearsal that humans can use the system under pressure.

Enough specificity that compliance can be observed.

Enough recovery logic that one failure does not destroy the entire channel portfolio.

This is strategically attractive because it does not require the parties to solve their political relationship first.

They can remain adversaries.

They can still build a small island of predictability around a dangerous seam.

## The trust ledger

A mature protocol should be auditable through a small set of operational questions.

Which layer of trust does it provide?

Who has authority to invoke it?

How quickly can the first authenticated message move?

What is the backup route?

What state does the channel enter after suspected compromise?

What message taxonomy is used?

How is semantic provenance preserved?

How long before silence becomes procedurally meaningful?

How often is the degraded path exercised?

How quickly can trust be restored after failure?

Which protocol depends on one person, one endpoint, one credential system, or one translation team?

What evidence would show that the protocol exists only on paper?

Those questions convert diplomatic reassurance into readiness.

## The politics of boring systems

There is little prestige in maintaining a contact directory.

No leader gets a parade for rotating emergency credentials correctly.

Redundant links, authentication drills, backup interpreters, and incident procedures look small next to weapons, summits, and treaties.

That is why they are easy to neglect.

But the first minutes of a crisis are governed by exactly these boring systems.

Who can reach whom?

Which message is real?

Which channel is still functioning?

What action means “we are investigating” rather than “we are escalating”?

Technology makes those questions more urgent because fabrication can now be fast, scalable, and convincing.

The solution is surprisingly old-fashioned.

Build procedures.

Practice them.

Give them backups.

Define their failure states.

Preserve the original message.

Make silence legible without making it deterministic.

Repair trust one layer at a time.

Do not confuse friendship with reliability.

The technology can change quickly.

The need to know who is speaking does not.

And when everything else becomes uncertain, a small procedure both rivals understand can carry more strategic weight than a very intelligent machine.