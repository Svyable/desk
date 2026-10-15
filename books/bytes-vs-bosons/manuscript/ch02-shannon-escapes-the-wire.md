# Chapter 2 — Shannon Escapes the Wire

The most important act in Claude Shannon’s 1948 paper was an act of refusal.

He refused to care what the message meant.

A telegram announcing a birth and a telegram announcing a bankruptcy could be treated as the same engineering problem if they had the same statistical structure and traveled through the same channel. A sentence of Shakespeare and a sequence of nonsense characters could require the same number of symbols to transmit. A radio did not have to understand grief, weather, military orders or baseball scores. It had to distinguish one possible signal from another in the presence of noise.

This was not a theory of knowledge.

It was not a theory of consciousness.

It was not a theory of truth.

It was a way to measure the problem of communication.

That narrowing changed the world.

Shannon opened *A Mathematical Theory of Communication* by defining the engineering problem with almost rude precision. Messages often have meaning, he acknowledged, but the semantic aspects were irrelevant to the engineering problem.[^1]

The sentence is easy to misread now because the word *information* has become so promiscuous.

We use it for facts. For meaning. For files. For DNA. For intelligence reports. For memories. For evidence. For gossip. For the pattern of neurons in a brain. For the state of a quantum system. For whatever a black hole might preserve or destroy.

Shannon was doing something more disciplined.

He was asking how many alternatives a communication system had to be able to distinguish.

That sounds smaller than a philosophy of reality.

It turned out to be much more useful.

## The message before the message

Imagine a sender with only two possible messages:

YES.

NO.

Before the sender chooses, the receiver faces two possibilities. If they are equally likely, learning which one was sent resolves one binary uncertainty.

Now imagine four equally likely messages.

The receiver needs enough distinctions to determine which of four possibilities was selected. Two binary choices can do it:

00  
01  
10  
11

Eight possibilities require three binary choices. Sixteen require four.

The logarithm appears because possibilities multiply while the number of binary distinctions adds.

That is the small mathematical move under an enormous technological civilization.

If there are (N) equally likely possibilities, the information associated with learning which one occurred scales with the logarithm of (N). Using logarithm base two produces a unit measured in binary digits.

Shannon wrote that these units could be called “binary digits,” or more briefly **bits**, crediting the shorter word to John Tukey.[^1]

The bit was not born as a tiny substance.

It was born as a unit of distinction.

One bit is what it takes, in this idealized setting, to resolve one equally likely binary alternative.

That sentence will matter later when the word begins to acquire cosmic ambitions.

A bit does not have a mass.

It does not have a fixed color.

It does not come with a voltage.

It is not inherently electrical.

It is not a particle.

It is a unit attached to a structure of possible alternatives.

A relay can represent a bit.

So can a transistor.

So can a magnetic domain.

So can a pulse of light.

So can the position of a colloidal particle in the two-well memory from the previous chapter.

The physical system changes.

The logical distinction survives.

That portability was the escape.

## What Shannon removed

Engineering before Shannon already had deep mathematics.

Harry Nyquist had studied telegraph transmission. Ralph Hartley had connected the amount of information to the number of possible messages and had used a logarithmic measure. Communications engineers understood bandwidth, noise, modulation and signal power long before 1948.

Shannon did not walk into an intellectual vacuum.

What he did was consolidate the problem into a general mathematical theory powerful enough to separate questions that engineers had often encountered together.

Source.

Message.

Transmitter.

Channel.

Noise.

Receiver.

Destination.

The diagram on the first page of the paper is almost offensively simple.[^1]

That simplicity is a weapon.

The source produces a message from some set of possible messages. The transmitter converts the message into a signal. The signal passes through a channel that may add noise. The receiver tries to reconstruct the message. The destination gets the result.

The theory can then ask: How uncertain is the source? How much redundancy is present? How much information can the channel reliably carry? How much can coding protect against noise?

Meaning can wait outside.

This was not a statement that meaning is unimportant in human life.

It was a statement that meaning was unnecessary for solving a specific engineering problem.

The distinction between those two sentences is the difference between a great abstraction and a bad philosophy.

## The alphabet does not matter

Suppose a communication system uses 0 and 1.

We call it binary.

Now suppose another system uses black and white cards.

Another uses two tones.

Another uses a voltage above or below a threshold.

Another uses whether a photon arrives inside a time window.

The alphabet changes.

The information problem can remain equivalent.

This was the beginning of digital indifference to medium.

The trick is not that matter stops mattering.

The trick is that a layer of engineering can proceed without constantly reopening the details of the layer beneath it.

Once a reliable physical system presents an interface that behaves like two distinguishable logical states, a coder can work in bits rather than electron mobilities.

A network protocol can work in packets rather than electromagnetic field equations.

A database can work in records rather than magnetic hysteresis.

A programmer can work in variables rather than transistor thresholds.

Every successful abstraction creates a new kind of ignorance.

Not stupidity.

Productive ignorance.

The higher layer is allowed to forget details the lower layer has agreed to handle.

Modern computing is a cathedral built from such agreements.

## Information without truth

This is where Shannon information begins to offend common sense.

A false message can contain more Shannon information than a true one.

A meaningless random string can have more Shannon information, in the relevant statistical sense, than a short profound sentence.

A file full of unpredictable noise may be incompressible while a complete list of the first million digits of a computable sequence can, in principle, be generated by a short program.

Shannon information does not ask whether the message corresponds to reality.

It asks about uncertainty across possible messages and the statistics of the source.

That is not a defect.

It is the reason the theory works.

A telephone network cannot verify whether the person on one end is lying.

It can transmit the lie faithfully.

The same fiber can carry a proof and a fraud.

The channel does not award moral credit.

The separation between semantic value and transmission cost is one of the reasons information technology scaled so brutally fast. The infrastructure did not need a new physics for each new kind of human content.

But the separation also created a conceptual hazard.

The word *information* retained its ordinary human associations even after Shannon gave it a technical use that deliberately ignored many of them.

So later arguments often slide between senses without warning.

A gene “contains information.”

A brain “processes information.”

A black hole “loses information.”

A quantum state “contains information.”

A newspaper “contains information.”

These statements may all be useful.

They do not all mean the same thing.

The common noun gives an illusion of common mechanism.

The book will keep interrupting that illusion.

## Entropy enters

Shannon needed a measure for the uncertainty of a source.

If one message is certain to occur, there is no uncertainty about which message will be selected. If many alternatives are plausible, uncertainty rises.

For a set of outcomes with probabilities (p_i), Shannon defined the quantity now written as

[
H = -sum_i p_i log p_i.
]

With base-two logarithms, the result is measured in bits.

The form has properties engineers want. Independent uncertainties add. More evenly distributed possibilities generally mean more uncertainty. A source that always emits the same symbol has zero entropy.

Shannon called the quantity entropy.

That naming decision would become one of the most fertile sources of insight and confusion in modern science.

The expression resembles the form used in statistical mechanics. Later researchers, especially E. T. Jaynes, developed deep connections between information-theoretic reasoning and statistical mechanics.[^2]

But resemblance is not permission to treat every entropy as the same physical object.

Thermodynamic entropy is a physical state function defined through thermodynamic structure and statistical mechanics.

Shannon entropy is a mathematical measure associated with a probability distribution over alternatives.

In some physical settings the two can be connected precisely.

In others, using the same word can make an analogy look like an identity.

We will need this distinction before black holes arrive.

For now, notice the odd sequence.

Thermodynamics produces entropy.

Shannon borrows the mathematical form to measure uncertainty in messages.

Information theory becomes a new mathematical language.

Then physics begins importing that language back into thermodynamics, computation, quantum mechanics and gravity.

The word makes a round trip.

It does not return unchanged.

## Capacity is not content

Shannon’s other great act of separation concerned the channel.

A noisy channel has limits.

There is a rate beyond which reliable communication cannot be achieved for a specified channel model, and below which suitable coding can drive the error probability arbitrarily low under the theorem’s assumptions.

That sentence deserves protection from its popular summary.

Shannon did not discover one universal maximum speed of information.

He did not put a cosmic speed limit on all communication.

He did not say every physical channel has the same capacity.

Capacity depends on the channel model and constraints.

His result was stronger because it was conditional.

Given the channel, the statistics, the noise model and the allowed coding, the theory could tell an engineer something remarkable: whether reliable communication was possible in principle and what rate separated possible from impossible.

This is the same intellectual style we met in Landauer.

Find the limit that survives clever engineering.

Do not confuse today’s machine with the boundary imposed by the theory.

A bad modem is not Shannon’s limit.

A hot processor is not Landauer’s limit.

The frontier between engineering failure and physical or mathematical impossibility is where these stories become powerful.

## The disappearing wire

Once the message could be separated mathematically from its carrier, the wire became less important to the layer above it.

Not unimportant.

Less visible.

This is the pattern that will recur through the book.

The more successful an abstraction becomes, the more natural it feels to promote the abstraction into reality itself.

Money works so well as an abstraction over heterogeneous goods that people begin talking as if price *is* value.

Maps work so well as abstractions over geography that people begin reasoning from boundaries more confidently than from terrain.

Digital files work so well across storage media that users talk as if the file exists independently somewhere called “the cloud.”

Information theory worked so well across communication media that the idea of information began to look mediumless.

But the theory itself never required that conclusion.

Look again at Shannon’s first diagram.

There is a transmitter.

There is a channel.

There is a received signal.

There is noise.

Shannon escaped the wire by making its details abstractable.

He did not abolish the wire.

## A bit has no preferred body

This is the source of a common confusion around the phrase “information is physical.”

If one bit can be represented by a relay, a magnetic domain, an electrical charge or a particle position, then the information cannot be identical to any one of those embodiments.

Correct.

But it does not follow that the bit exists physically without embodiment.

The distinction can be substrate-independent without being substrate-free.

A melody can be played on a piano, violin, synthesizer or human voice.

The melody is not identical to piano wire.

It also does not arrive in a concert hall without something moving.

A legal obligation can survive being written on parchment, printed on paper or stored in a database.

The obligation is not cellulose.

It still needs institutions and physical records if it is to persist in a human society.

Software can move from one compatible machine to another.

The program is not any single transistor.

Running it still requires a machine.

The relationship between information and physics may turn out to be stranger than any of those analogies.

Quantum theory will make sure of that.

But substrate independence should not be confused with independence from the physical.

Shannon gave information portability.

Landauer restored the invoice.

## The boundary of the theory

There is another reason to linger here.

Shannon knew his abstraction had boundaries.

The famous sentence about semantics being irrelevant was not an attempt to purge meaning from every theory of information.

It was scope control.

The engineering problem was difficult enough.

By refusing to solve philosophy, Shannon made communications engineering mathematically tractable.

That lesson will become important when later physicists use informational language in more ambitious settings.

A theory can be extraordinarily successful inside its domain and become misleading when its vocabulary is exported without its assumptions.

“Information” in a communication channel concerns probability distributions over possible messages.

“Information” in quantum mechanics concerns states, measurements, correlations and transformation constraints that do not behave like ordinary classical files.

“Information” in black-hole physics is often shorthand for whether the full quantum state can, in principle, evolve unitarily without fundamental loss.

Those meanings overlap.

They are not interchangeable.

The temptation to treat them as one universal substance is strongest precisely because Shannon’s abstraction was so successful.

## The first escape

The twentieth century did not begin with weightless information.

It built machines that made information *feel* weightless.

The process started before digital computers and continued through telegraphy, telephony, radio, coding, storage and networking.

Shannon supplied the cleanest mathematical separation.

A message could be studied apart from its meaning.

A unit of uncertainty could be studied apart from the hardware representing it.

A channel could be studied apart from the specific content crossing it.

The result was not the dematerialization of the world.

It was a new division of labor inside our descriptions of the world.

That division became so productive that civilization reorganized around it.

This is the seduction at the center of **Bytes vs Bosons**.

A distinction can be real at one level without being a new substance at the level below.

A bit can survive a change of medium without surviving the absence of medium.

Shannon escaped the wire.

The bit followed.

Physics did not.

---

## Source notes

[^1]: Claude E. Shannon, “A Mathematical Theory of Communication,” *Bell System Technical Journal* 27 (1948), 379–423 and 623–656. Shannon states that semantic aspects are outside the engineering problem and credits John W. Tukey with the shortened word “bit.” Reprint: https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf

[^2]: E. T. Jaynes, “Information Theory and Statistical Mechanics,” *Physical Review* 106 (1957), 620–630. https://doi.org/10.1103/PhysRev.106.620

[^3]: Rolf Landauer, “Information is Physical,” *Physics Today* 44, no. 5 (1991), 23–29. Landauer emphasizes that there is no unavoidable energy dissipation requirement for every computational step while connecting information processing to physical embodiment. https://doi.org/10.1063/1.881299
