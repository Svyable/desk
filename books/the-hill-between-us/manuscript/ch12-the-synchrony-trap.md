# Chapter 12 — The Synchrony Trap

Put two people in scanners, ask them to interact, and eventually someone will want to say their brains became one.

The picture encourages it.

Two traces rise together. Two colored brains light up at similar moments. A network diagram draws a line between heads. The language quickly follows: neural coupling, inter-brain synchrony, shared neural dynamics, alignment.

All of those terms can describe legitimate measurements.

None of them, by themselves, means one brain sent a thought to the other.

This distinction is now one of the central methodological problems in hyperscanning, the family of techniques that record brain activity from two or more people at the same time. Researchers use EEG, functional near-infrared spectroscopy, fMRI, and other methods to study conversation, cooperation, joint attention, imitation, teaching, music, competition, and other social interactions.

The field exists because traditional neuroscience usually isolates one participant while the social world happens outside the scanner. Hyperscanning tries to bring interaction back into the measurement.

That is a good idea.

It creates a difficult causal problem.

If two participants watch the same movie, their brains may respond similarly because both receive the same audiovisual stream.

If they clap together, motor activity may align because they perform the same movement.

If one speaks and the other listens, neural timing may relate because speech produced by one becomes sound processed by the other.

If both attend to the same object, joint attention creates parallel processing.

These are real forms of inter-brain relationship.

They do not require a direct brain-to-brain channel.

A recent systematic review of fMRI hyperscanning work describes this challenge explicitly: researchers have to distinguish reciprocal inter-brain coupling from apparent synchrony driven by shared sensory input, joint attention, or motor mirroring.

That caution should sit on the wall of every telepathy laboratory.

Because if an experiment begins with people already convinced that synchronized brains demonstrate telepathy, almost any social task can produce an impressive figure.

The trap is correlation plus metaphor.

We can escape it with controls.

Suppose two people have EEG recorded while conversing face to face. Researchers find increased coherence in a frequency band during periods of successful communication.

First compare the true pair with pseudo-pairs: combine one person’s EEG with recordings from another session where no interaction occurred. If coherence remains equally strong, shared task structure or signal-processing artifacts may explain it.

Next time-shift one participant’s data. If synchrony depends on actual real-time interaction, large shifts should reduce it.

Then replay a recording of one participant to another. This preserves sensory input but removes reciprocity. If the effect is identical, reciprocal coupling may not be necessary.

Then manipulate who can see or hear whom.

Each condition removes a causal ingredient.

Only after ordinary interpersonal pathways are mapped should a hidden channel be considered.

Telepathy research needs an even stricter version because the claim is not merely that brains coordinate during interaction. It is that target information reaches a receiver without known sensory mediation.

That means the primary analysis should be target-specific.

Do not ask only whether sender and receiver EEG look synchronized.

Ask whether the receiver’s neural data contain information about which hidden target the sender received.

Those are different analyses.

Imagine a sender sees one of four images while the receiver sits in another isolated room. Both wear EEG. The receiver has no task except to remain attentive.

If sender and receiver alpha power rise and fall together across the session, that could reflect shared rest cycles, protocol timing, electrical noise, or slow drift.

If a classifier trained only on receiver EEG can identify which image the sender saw above chance on held-out trials, the result is more directly relevant.

Still not enough.

Could target order correlate with time? Could an experimenter near the receiver know the target? Could electrical equipment in the building respond differently to the sender’s stimulus? Could data preprocessing leak labels? Could the classifier exploit participant movement?

Extraordinary machine learning requires adversarial validation.

The easiest error to make is temporal leakage.

EEG and other biological time series are autocorrelated. Adjacent samples resemble each other. If train and test data contain neighboring segments from the same trial, a model can “predict” labels by recognizing trial-specific drift. Entire trials must be held out. Better yet, entire sessions.

If the claim generalizes across people, hold out people.

If the effect is pair-specific, preregister the pair-specific prediction and validate on future sessions.

The statistical split should match the scientific claim.

Another trap is reference contamination.

EEG measures voltage differences. The choice of reference, filtering, artifact rejection, and frequency decomposition can create or alter apparent connectivity. fNIRS signals can share systemic physiological components such as blood pressure and respiration. fMRI has global and motion-related signals. Two participants may be exposed to the same electrical noise from equipment.

A line between two brains can therefore emerge from the room.

Environmental sensors are essential.

Record mains electricity, acoustic noise, light changes, temperature, timing pulses, and equipment state where relevant. If an apparent inter-brain signal matches a common external source, the mystery has an address.

This is not paranoia. It is what precision measurement looks like when signals are weak.

There is a deeper conceptual issue too.

Synchrony can be an *effect* of successful communication rather than a carrier of it.

Suppose I tell you a story and you understand it. Our neural responses may align in ways related to shared linguistic structure and attention. The synchrony reflects that my words already carried information through sound.

Removing the words removes the channel and likely changes the synchrony.

It would be backwards to point to the remaining neural correlation as evidence that the words were unnecessary.

This matters for studies of spellers and familiar partners.

During letterboard communication, both people attend to the same letters. They share motor timing. The partner may anticipate the word. The participant watches the board. Correct selections create joint events. If EEG hyperscanning finds coupling, the result may simply reveal the neural consequences of a tightly coordinated sensorimotor task.

Interesting, yes.

Telepathy, no.

The experiment can become more informative by separating phases.

Record a baseline interaction where both know the content.

Then conceal the target from the partner while preserving the mechanics.

Then remove visual contact.

Then isolate the sender and receiver.

Track how inter-brain measures change as ordinary coupling is stripped away.

If synchrony follows shared movement, we have a sensorimotor marker.

If it follows conversational understanding, we have a communication marker.

If a target-specific relationship remains during complete sensory isolation, we have something harder to explain.

This graded design is better than putting participants directly into separate rooms and fishing through thousands of neural features for any correlation.

A baseline tells us what the system looks like when known coupling is present.

Then we can ask whether the same signature survives when the known channel is gone.

There is also a danger in overvaluing spatially or spectrally specific findings.

A result can sound impressive because it names a brain region: temporoparietal junction, inferior frontal gyrus, prefrontal cortex, insula. Or a frequency: theta, alpha, beta, gamma.

Specific labels are not mechanisms by themselves.

Many brain regions participate in many tasks. Frequency bands are broad analytical conventions, not dedicated mental-message channels. If researchers examine enough regions and bands, some will correlate.

A telepathy-oriented prediction has to come before the result.

For example: sender encoding of a visual target will produce a target-specific pattern in sender occipital activity; if a receiver obtains target information through a hypothesized coupling mechanism, receiver activity should contain corresponding target information within a prespecified latency, even when sensory isolation is complete. The analysis should distinguish shared target coding from general arousal and compare real pairs against shuffled pairings.

That is a hypothesis.

“Something synchronized somewhere” is an observation looking for a story.

The distinction becomes even more important when participants report a state like the Hill.

Suppose two people in separate rooms press a button when they believe they are together on the Hill, and EEG shows increased similarity around those moments.

Several explanations remain.

They may follow the same learned timing routine.

They may both enter a stereotyped internal state associated with the Hill, producing similar neural patterns independently.

Button presses may align the analysis windows around similar motor preparation.

The state may truly be interpersonally coupled.

Or the finding may be statistical chance.

To distinguish them, break the pairing.

Compare real partners with pseudo-partners whose Hill periods occurred at different times.

Hide whether the partner is participating.

Randomly delay one participant’s start.

Ask whether the receiver’s state follows the partner’s actual timing or expected timing.

If a target is transmitted, test target identity rather than state similarity.

A shared state and shared information are different dimensions.

This point is worth repeating until it becomes annoying because so much public discussion skips it.

Two brains can become similar because two people are doing the same thing.

Two brains can become related because they are communicating through normal senses.

Two brains can be influenced by the same external event.

Two brains can have similar slow rhythms because human physiology shares common constraints.

None of this demonstrates a hidden channel.

And yet hyperscanning could become one of the most valuable tools if a hidden channel were first established behaviorally.

The order matters.

First show reproducible concealed-target transfer with clean blinding and independent authorship.

Then use hyperscanning to locate candidate physiological correlates.

Behavior tells you the phenomenon exists.

Neural measurement tells you when and where to look.

Reversing the order invites noise to impersonate discovery.

This principle is common in neuroscience. A brain scan should not be used to establish the existence of a psychological phenomenon that behavior cannot reliably demonstrate. Imaging is more informative when anchored to a robust effect.

Telepathy research has often suffered from the opposite appetite: find an unusual EEG pattern and let the mystery expand around it.

A stronger program would begin with a binary task so clean it almost feels beneath neuroscience.

Sender sees left or right.

Receiver chooses left or right.

No one near the receiver knows the answer.

Hundreds of trials.

Preregistered accuracy criterion.

Independent replication.

If accuracy is chance, stop calling neural correlations evidence of semantic transfer.

If accuracy is reproducibly above chance, now put on the electrodes.

Then ask whether successful trials differ from failures.

Does sender neural activity predict receiver choice?

Does receiver activity show target information before conscious report?

Does coupling appear at a consistent lag?

Does it scale with behavioral accuracy?

Does it disappear when a causal manipulation blocks performance?

Now neural data become mechanistically tethered.

This is how a field avoids the synchrony trap.

There is another reason to be strict. Synchrony is emotionally flattering.

People like evidence that connection is visible in the body. Couples enjoy hearing their hearts align. Parents want confirmation of attunement. Teams want to be “in sync.” A brain-to-brain graph provides a scientific-looking picture of belonging.

Researchers are human enough to feel that appeal.

A methodologically ambiguous synchrony result can therefore travel farther in public than a careful null finding. The image is too good.

The solution is not to stop studying connection.

It is to make the words narrower than the picture.

“Inter-brain synchrony” should mean a measured statistical relation under specified conditions.

“Reciprocal coupling” should require evidence beyond shared input.

“Information transfer” should require target-specific decodability.

“Telepathy” should be reserved for transfer that survives known-channel controls.

Language becomes experimental hygiene.

The Hill, if it ever enters a hyperscanning laboratory, should be treated with the same care.

Perhaps two people who report meeting there will show remarkably coordinated neural states.

That would tell us something about the state.

Perhaps those states will occur when each person believes the other is present even during sham trials.

That would tell us something about expectation.

Perhaps actual partner timing will matter despite isolation.

That would tell us something stranger.

Perhaps hidden landmark identity will be decodable from the receiver’s brain before the receiver spells it.

That would be stranger still.

The ladder is there to prevent us from climbing to the top on the first colored graph.

Brains synchronize for reasons we already understand imperfectly.

If there is another reason, it will deserve attention only after we have stopped mistaking the familiar ones for proof.
