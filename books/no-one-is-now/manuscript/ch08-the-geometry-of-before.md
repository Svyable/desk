# Chapter 8 — The Geometry of Before

A broken cup contains a theory of time.

Not a very sophisticated one. You release the cup. It falls. It strikes the floor. Ceramic separates into pieces. Later you sweep them into a bin. Nobody watching the sequence asks whether the fragments caused your hand to open.

The order is not merely familiar. The events are causally related.

Relativity is often introduced through disagreements: clocks disagree, lengths contract, simultaneity changes, twins age differently. The emphasis can leave the impression that the theory makes temporal order slippery everywhere. It does not. Relativity is strict about the order that can matter physically.

If one event can influence another through a signal traveling no faster than light, their order is preserved for all inertial observers. The coordinates may differ. The elapsed coordinate times may differ. But cause does not become effect under a change of inertial frame.

The invariant structure is causal.

This is easiest to see on a spacetime diagram. Draw one dimension of space horizontally and time vertically. A flash of light from an event traces diagonal lines. Those lines form the edges of a light cone. Events inside the future cone can, in principle, be reached by slower-than-light influences originating at the event. Events inside the past cone could have influenced it. Events outside both cones are spacelike separated: no ordinary causal signal can connect them fast enough.

The diagram looks like school geometry. It is a map of possibility.

Your future light cone is the set of directions in spacetime into which consequences can travel. Your past light cone is the set from which evidence could have arrived.

Everything you know physically entered through the second one.

This sounds grand until you inventory a desk. The scratch on a phone screen is evidence of an earlier impact. The document on a monitor is encoded state produced by processors responding to earlier electrical signals. A coffee cup is warm because heat has not yet fully dispersed. A postal envelope contains marks made by a printer elsewhere, carried through vehicles and sorting centers. A bruise is tissue altered by an earlier collision. Memory itself is a physical state changed by previous interactions.

The present is full of causal residue.

That is how a local observer acquires a past.

We do not experience yesterday directly. We experience records, bodies, environments and neural states that were changed by events and persisted long enough to reach this one.

This may be obvious, but it becomes powerful when placed beside the loss of universal simultaneity. The universe does not need one shared now to possess an objective causal structure.

This is the structure some approaches to quantum gravity take so seriously that they consider causal order more fundamental than spacetime geometry itself.

In 1987, Luca Bombelli, Joohan Lee, David Meyer and Rafael Sorkin proposed that at the smallest scales spacetime might be a *causal set*: a locally finite collection of elements with a partial order corresponding to causal precedence. The smooth spacetime of general relativity would then emerge as an approximation at large scales.

The proposal remains a research program, not an established description of nature. No experiment has shown that spacetime is fundamentally a causal set. Its value here is conceptual. If one is looking for structures sturdy enough to survive when smooth spacetime may fail, causal order is a candidate.

That should make us less sentimental about simultaneity.

A partial order is less satisfying than a universal clock because it refuses to rank everything.

In a total order, every pair of items can be placed before or after. A line at a grocery store has a total order if nobody is cheating: person A is before B, B before C, and so on. A partial order permits pairs that are not comparable. One task must happen before another, while two other tasks can occur independently.

Causality in relativity has this character.

For causally connected events, the order is constrained. For spacelike-separated events, nature does not demand one invariant before-and-after relation.

Humans dislike partial orders.

We sort.

We rank schools, athletes, companies, songs, crimes, priorities, historical eras, scientific discoveries. Databases sort records by timestamps. News feeds sort updates. Legal systems establish sequences. A story has a beginning, middle and end because narrative is a machine for turning a world of overlapping events into a line.

The line is useful enough that we forget what it discarded.

On the morning of a large public event, millions of unrelated things happen. Someone gets married in Lagos. A valve fails in Alberta. A child learns a word in Osaka. A star flares hundreds of light-years away. A bacteria culture divides in a laboratory. A server is rebooted. A person dies alone in a room nobody will enter until evening.

A history book later puts five events on the date.

The date is not false. It is a compression.

Relativity gives us a physical reason to be suspicious of the idea that all events possess a natural position on one universal timeline. Historians have social reasons too. Different communities inhabit overlapping causal networks. News travels unevenly. Decisions made in one place become conditions elsewhere after delays. The same calendar date can contain different informational worlds.

Consider the first hours of a war.

A command is issued. Some units receive it. Others do not. Civilians hear rumors. Diplomats operate on incomplete reports. Markets react to broadcasts. A ship at sea may continue under yesterday’s assumptions. Later, a historian can timestamp the declaration and describe the day as if the war began everywhere at one moment.

For legal and narrative purposes, a date may be necessary. For causal explanation, we need transmission paths.

Who knew what when?

Which order reached which unit?

What could the decision-maker have known before acting?

The same questions appear after industrial accidents. Investigators reconstruct sensor readings, alarms, operator actions, maintenance records and communications. A central timeline is built from local traces. The timeline is valuable precisely because nobody possessed it during the event.

An accident report is a manufactured global view.

This is close to what physics does with observations, though scientific reconstruction has stronger formal models. We gather local records and infer a spacetime history consistent with their causal relations.

The image of an omniscient observer is added afterward.

There is no such observer inside the event.

This makes the causal structure of knowledge more than a philosophical curiosity. It tells us why hindsight is dangerous.

After outcomes are known, we place earlier events on a line leading toward them. Signal delays disappear. Uncertainty disappears. Branches that did not become causal ancestors of the outcome disappear. A warning that arrived too late looks like a warning that was available. A fact known in one office looks like a fact known by the institution.

The phrase “they knew” is often a hidden synchronization claim.

Institutions do not know all at once.

People know. Databases contain. Messages propagate. Procedures define when one person’s knowledge counts as notice to an organization. Legal systems build doctrines around these differences because a distributed entity cannot literally possess one mind at one moment.

Physics offers no direct legal rule here. It offers a useful suspicion of global state.

Computer science made the suspicion explicit.

In a distributed system, machines exchange messages over networks with nonzero delay. Clocks can drift. Messages can arrive out of order. Machines can fail. A statement such as “server A and server B had these values at the same time” requires a definition and, often, a protocol. The more useful question may be whether one event could have influenced another through a chain of messages.

Leslie Lamport formalized this with a “happened-before” relation. If two events occur in sequence within one process, or if one is the sending of a message and another its receipt, causal order can be established; transitive chains extend the relation. Events not connected by happened-before are concurrent in the logical sense.

Lamport clocks assign numbers consistent with that partial order without pretending the numbers are physical time.

This is intellectual hygiene.

The system needs ordering, so build the minimum ordering the problem requires.

Humans tend to do the opposite: invent a universal timeline first, then spend enormous effort repairing it when distributed reality refuses to fit.

This is visible in databases. Suppose two people edit a shared document while temporarily offline. Each copy develops its own local history. When connectivity returns, software must merge the histories. A naive “latest timestamp wins” policy can discard meaningful work if clocks are wrong or edits are concurrent. More sophisticated systems preserve causal metadata or use conflict-free data structures designed to merge concurrent changes.

The interesting part is not the product feature. It is the ontology the software adopts.

There may be no single latest state during the partition.

There are branches that later reconcile.

That language sounds almost cosmological only because software engineers are forced to be explicit about conditions ordinary intuition hides.

A person’s own history is also a partial order before it becomes a story.

Breakfast happened before lunch. The call from a friend caused you to leave home. A stranger in another city wrote an email while you were sleeping; whether that writing happened before or after some unrelated thought of yours may have no significance until the email arrives. Once it arrives, the causal networks meet.

Human memory later arranges events around themes and consequences. We create narrative simultaneity: “while I was doing this, she was doing that.” The statement may be reconstructed from clocks, calendars and messages. It gives the story a shared present the participants did not have.

This is one reason memoir can feel omniscient even when it is accurate.

The writer stands after convergence.

All the letters have arrived.

The phone records exist.

The other person has told their side.

The timeline can be assembled.

Life as lived had no such dashboard.

The loss of universal now therefore does not make history impossible. It makes history recognizable as reconstruction.

Science, law, computing and memory all perform versions of this reconstruction with different standards of evidence.

The strongest reconstructions respect causal order.

A claim cannot be the cause of an event if the information could not have arrived in time. An experimental result cannot influence a notebook entry written before the measurement. A message cannot be acknowledged before it is received unless clocks or records are wrong. These constraints are mundane at human scale and foundational at relativistic scale.

They also expose fraud.

A financial transaction timestamped before the supposed authorization invites scrutiny. A photograph containing an object not manufactured until later can falsify a date. A scientific dataset whose file history predates the experiment by an impossible interval demands explanation. Causality leaves forensic edges.

A universal timestamp would be convenient, but causal consistency is often enough to catch a lie.

Nature uses the same austerity.

Particle detectors reconstruct decay chains from tracks and energy deposits. Astronomers infer sequences from signals that have traveled for years or billions of years. Gravitational-wave observatories compare arrival times at separated detectors. No instrument sees an entire event from outside spacetime. Local records are made and combined.

Objectivity emerges from compatible local evidence.

This may be one of the most important ignored realities in science.

Objectivity does not require a view from nowhere.

It requires relationships among views strong enough to survive comparison.

That is a different ideal.

A view from nowhere would possess the state of everything at once. Relativity gives us no physically privileged observer with that access. Real science operates through views from somewhere: telescopes on Earth, probes in space, clocks in laboratories, detectors under mountains, instruments on satellites. The locations and motions matter. Data are transformed into shared frames with explicit models.

We do not become objective by leaving locality.

We become objective by accounting for it.

The same might be true socially more often than we admit.

A good institution does not need every participant to see the same thing at the same instant. It needs records, communication paths, conflict procedures and enough shared standards that incompatible local accounts can be tested.

This is not an argument that truth is relative. It is an argument that access is local.

Truth can be sturdier than simultaneity.

The cup fell before it broke. Everybody who can consistently reconstruct the events agrees about that causal order.

Somewhere else, beyond any possible influence on the cup, another event occurred. Asking whether it happened at the exact same moment as the impact may require a frame and convention. Nothing about the cup depends on the answer.

The universe saves its strongest ordering for the places where order can matter.

We might learn from the economy.