# 16. The Electromagnetic Argument

Every digital military imagines a network.

War imagines its absence.

The gap between those two assumptions is where a large part of military inference becomes real.

A headquarters can possess excellent models, exquisite sensors, enormous compute, and elegant software while depending on something brutally physical: signals have to move. Radios have range. Antennas have geometry. Satellites have orbits. Spectrum is crowded. Power is finite. Terrain matters. Weather matters. Hardware fails. Links fade. Interference appears. Networks partition. Latency changes. A system designed around perfect connectivity encounters the electromagnetic world and discovers that intelligence has geography.

This is not new. Communications have always shaped command. What changes is how much reasoning architecture now sits on top of connectivity.

If a force increasingly relies on distributed sensors, data fusion, model access, software updates, remote compute, machine staffs, digital identity, and automated coordination, then the network is not merely carrying messages. It is carrying pieces of the force's cognitive state.

A degraded link can therefore do more than slow communication.

It can split reality.

One node sees evidence another does not. One region has a newer model. Another has stale data. One command post believes a task was completed. Another never received the acknowledgment. A local agent acts on the last known plan while headquarters has already revised it. Two systems both believe they possess authority because the revocation message did not arrive.

The electromagnetic environment creates **epistemic partition**.

Distributed-systems engineers recognize the pattern. Networks do not fail cleanly. They fail partially. Messages are delayed, duplicated, dropped, or delivered out of order. Systems continue operating under incomplete knowledge because stopping everything is often unacceptable.

Military organizations have lived with versions of this forever. Machine inference increases the number of state transitions that can be affected.

That means the force needs to design not only for network degradation but for **knowledge degradation**.

What does a local system know with certainty?

Which information is stale but still useful?

Which recommendation becomes invalid if it cannot be refreshed?

Which authority expires automatically when disconnected?

Which actions remain safe under local autonomy?

Which decisions should pause because the evidence chain is broken?

Which claims can be reconciled after connectivity returns?

These are architectural questions before they are tactical questions.

The mature inference force needs explicit semantics for disconnection.

A system should know whether it is operating from fresh shared state, locally observed state, cached state, inferred state, or state whose age exceeds some confidence boundary. The user should not have to discover this by accident.

A stale map that looks current is worse than a stale map labeled stale.

The same is true for machine recommendations.

Connectivity also determines where inference happens.

The cloud model is attractive because centralized compute can be powerful, frequently updated, and easier to manage. The edge model is attractive because it can remain available when networks disappear and can operate closer to sensors.

The future force will likely need both.

This creates an **inference hierarchy**.

Small local systems perform bounded tasks and preserve local understanding. Larger regional systems combine evidence across units. Central systems perform expensive synthesis, simulation, and broad historical analysis. Human authorities sit at several levels, each with different access and responsibility.

The challenge is making the hierarchy degrade gracefully.

If the central layer disappears, local systems should not become useless. But they also should not pretend to possess the global context they lost.

This suggests a principle: **capability should degrade faster than confidence? No. Confidence should degrade at least as fast as capability.**

When the system loses evidence, it should lose certainty visibly.

That sounds obvious. In practice, software often continues producing outputs even when upstream conditions deteriorate. The model still returns a fluent answer. The dashboard still displays a number. The interface hides the missing pieces.

The electromagnetic argument is therefore partly an interface argument.

Systems should expose disconnection as an epistemic condition, not merely a network icon.

What is no longer known?

What has not synchronized?

Which assumptions are being carried forward from before the partition?

What cannot currently be independently verified?

This is how network state becomes command-relevant meaning.

The electromagnetic environment also creates incentives for local autonomy. If waiting for central instruction becomes unreliable, subordinate systems need authority to continue bounded functions.

That authority should be designed in advance.

A disconnected agent should not improvise its legal or doctrinal mandate merely because the network failed.

The durable question is: **what authority survives disconnection?**

This can be encoded as leases, expiration, scope, and escalation rules. The concept is familiar from distributed computing: temporary authority can be granted for a bounded interval or task, after which the system must renew or stop.

Military command already uses delegated authority. Machine systems make the delegation machine-readable.

That can improve discipline if done well.

It can create ambiguity if done poorly.

Suppose a local system has authority to perform routine defensive coordination while connected. The network disappears. Does the authority continue? For how long? Does the system know whether headquarters tried to revoke it? Which conditions narrow its scope automatically?

These are not edge cases in a contested electromagnetic environment. They are the normal conditions for which the system should be designed.

There is also a coalition dimension.

Allies may share information through networks with different trust assumptions, encryption regimes, classification boundaries, bandwidth constraints, and data formats. The most sophisticated shared model may be useless if the evidence it requires cannot legally or technically cross the boundary.

Inference therefore becomes shaped by information policy as much as compute.

A coalition can possess abundant intelligence collectively while each participant operates from an incomplete subset.

This makes provenance and releasability part of reasoning.

A useful assessment should know which parts can be shared and which cannot. A machine staff may need to produce a coalition-safe explanation built from evidence authorized for that audience rather than simply redacting a richer internal answer after the fact.

That is a deeper form of interoperability.

The electromagnetic argument also complicates the common idea of the fastest decision cycle winning.

Speed depends on a network topology the adversary may influence indirectly through the environment. A force optimized for centralized rapid coordination may become slower than a force designed for decentralized coherence when connectivity deteriorates.

Tempo, again, is not latency.

A robust force can continue producing coherent action at a lower information rate because its local components know their intent, boundaries, and reconciliation procedures.

A brittle force may possess superior peak bandwidth and collapse into confusion when that bandwidth disappears.

This creates a strategic premium on **epistemic compression**.

What is the minimum information a subordinate system needs to act consistently with higher intent?

What context can be summarized into durable local policy?

What dependencies can be removed before conflict rather than discovered during it?

What data should be cached because reacquiring it may be impossible?

What models can be locally evaluated and updated without central infrastructure?

These questions resemble logistics because communications capacity is a resource.

The force must budget cognition against bandwidth.

A model that requires transferring enormous context may be less useful than a weaker model with better local state. A sensor that generates huge volumes may need local inference to convert raw data into compact evidence. The edge does not merely collect. It increasingly interprets because interpretation reduces what must travel.

That creates another danger: compression can destroy evidence.

If a local model converts rich sensor data into a label and discards the raw observation, headquarters may inherit the conclusion without the ability to challenge it. Bandwidth pressure encourages summarization. Epistemic resilience requires preserving enough provenance that later review remains possible.

The correct balance will vary.

Some raw data is too expensive to move continuously but worth retaining locally. Some can be summarized with confidence bounds. Some should trigger transfer only when unusual. Some may be irrecoverable once discarded.

The system needs explicit policy about what gets compressed, what gets preserved, and what gets forgotten.

A useful way to think about the electromagnetic environment is as a test of whether the force has mistaken coordination for connectivity.

Connectivity is the ability to exchange information now.

Coordination is the ability to continue acting coherently even when information exchange becomes imperfect.

Human militaries have long developed mission-oriented approaches for exactly this reason: subordinate elements need enough understanding of intent to continue when detailed control is impossible. Machine systems inherit the same requirement but make it more explicit because their local state can be inspected and bounded.

This creates the possibility of **machine-readable commander's intent**.

Not a magical translation of strategy into one formal objective function. Strategy is too rich for that. Rather, a structured set of boundaries, priorities, prohibitions, assumptions, and escalation rules that local systems can use when disconnected.

What must be preserved?

What can be traded away?

Which conditions invalidate the current plan?

Which authorities remain local?

Which consequences require renewed human contact?

The value of this structure is not automation for its own sake. It reduces the amount of state that must traverse the network continuously.

The force does not need to micromanage every local inference if the local system understands the purpose and the limits.

This also changes how network resilience should be measured. A network test that asks only how many packets arrive misses the operational question. The more useful test is: **what decisions remain coherent at each level of connectivity?**

At full connectivity, the force may share rich multimodal state and use centralized synthesis.

At partial connectivity, regional nodes may maintain a common picture but lose some high-bandwidth evidence.

At severe degradation, local systems may operate from cached context and bounded authority.

At isolation, some functions should continue and others should stop.

The architecture should know the transition points in advance.

This produces a **cognitive degradation curve**.

Not one binary label—AI available or unavailable—but a map from network condition to remaining epistemic capability.

Such a curve becomes a logistics object, a training object, and a doctrine object. Units can rehearse what happens when they descend it. Developers can test software against it. Commanders can decide which capabilities deserve local compute because they remain important at lower connectivity.

The exercise also reveals hidden cloud assumptions.

A model may technically run locally but depend on a remote retrieval service for important context. A planning tool may operate offline but rely on centralized identity to authorize writes. A sensor-fusion agent may preserve its model weights but lose the time synchronization needed to compare observations correctly.

The system appears edge-capable until the exercise becomes realistic.

This is why **offline-first** is more than a deployment preference in military inference. It is an epistemic design discipline. The local system should know which parts of its understanding are native, which are cached, which require refresh, and which cannot be trusted after some interval.

A healthy disconnected system becomes more modest with time.

Its map ages.

Its knowledge of higher intent ages.

Its confidence in other units' state ages.

Some local observations become more important because they are fresh. Some global assumptions become less authoritative because they are stale.

The reasoning system should reflect that temporal asymmetry.

The same principle matters after reconnection. Reconciliation is not simply syncing files.

Two disconnected systems may have taken actions that changed the world. They may have formed different beliefs from different evidence. One may have committed resources the other assumed were available. One may have updated software or policy locally. Reconnection creates a **history merge**.

A robust system should not simply declare the newest timestamp authoritative.

It needs to reconstruct causality.

What happened while we were apart?

Which actions were acknowledged externally?

Which duplicated intentions exist?

Which local observations invalidate global assumptions?

Which authority changes occurred but failed to propagate?

This is another reason event history matters. The force needs enough durable trace to merge two partial realities without inventing a third.

Coalitions make this harder because the reconciliation boundary is also political. One ally may not be permitted to disclose the evidence behind a conclusion. Another may have taken action under national authority that cannot be represented as a shared coalition commitment. Machine systems should preserve these distinctions rather than smoothing them into one synthetic picture.

Sometimes the correct shared state is explicitly incomplete.

That is a mark of maturity.

The temptation in networked command is to equate one picture with one truth. The electromagnetic world punishes that assumption. There may be several locally valid pictures at once, each incomplete.

Military inference must therefore be capable of **plural state**.

Headquarters can say: this is what the central system believes; this is what the isolated region last reported; this is what the local node currently observes; these differences are unresolved.

The interface becomes more complicated.

Reality already was.

That complexity is preferable to false convergence.

There is a final strategic consequence. A force designed around resilient inference can choose when *not* to communicate.

If local systems can maintain coherent bounded behavior, the institution is less dependent on constant chatter. This can reduce bandwidth demand, simplify operations under congestion, and lower the organizational panic that accompanies intermittent links.

The advantage is not secrecy in any tactical sense. It is reduced cognitive dependence on continuous synchronization.

A force that needs every node to ask headquarters what reality is has built a networked bureaucracy, not distributed intelligence.

A force that can preserve intent, uncertainty, and bounded authority locally has built something more resilient.

This is why the electromagnetic argument reaches beyond radios.

It asks whether the force's intelligence architecture remains intellectually honest when the network stops behaving like the diagram.

Can it distinguish silence from absence?

Can it distinguish stale agreement from fresh consensus?

Can it continue bounded action without pretending to possess a shared world-picture?

Can it reconcile histories when disconnected systems meet again?

Can it explain what was known locally when a consequential decision occurred?

The network will fail.

The question is whether understanding fails with it.
