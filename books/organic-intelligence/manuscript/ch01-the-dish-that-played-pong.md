# The Dish That Played Pong

Pong is useful because almost nothing in it can hide.

The game is a ball, a paddle, motion, and timing. A player does not need language, a map, a long-term plan, or a theory of the opponent. The task can be reduced to a stream of information about where the ball is, where it is going, and whether the paddle moved to the right place before contact.

For a biological neural network, that simplicity is not childish. It is experimental leverage.

When Cortical Labs researchers and collaborators published the DishBrain work in 2022, they were not the first people to put neurons on electrodes, and they were not the first to embody cultured neural networks in simulated environments. Multi-electrode arrays had been used for years to record and stimulate neuronal cultures. Researchers had already explored whether dissociated cortical networks could interact with robots or simplified virtual systems. What made DishBrain consequential was the clarity with which several technologies were assembled into a closed loop around human and rodent neurons, then tested against controls.

The physical arrangement mattered. Neurons grew over a high-density multi-electrode array. The electrodes could listen to electrical activity and deliver stimulation. A digital simulation represented the Pong-like world. Selected electrodes provided information about the ball. Activity in different parts of the neuronal culture influenced movement of the paddle. The system then returned consequences to the network.

A miss and a hit did not carry meaning in the way they do for a person. There was no reason to assume that a neuron knew a score had changed. The experiment instead depended on whether different feedback structures changed the probability of useful network organization.

That is a colder description than “cells learned Pong.” It is also more interesting.

The problem of learning in a dish is not to smuggle a tiny mind into a plate. It is to show that a living network can alter activity in a way that becomes better coupled to an external task under defined feedback. The DishBrain paper reported improved performance over time in cultures receiving structured closed-loop feedback, including human neurons derived from induced pluripotent stem cells and primary mouse cortical neurons. Cultures receiving stimulation without the relevant feedback did not show the same improvement.

The headline was learning. The engineering result was controllable adaptation.

Those are not identical.

Learning, in ordinary speech, carries an enormous amount of biography. A person learns French after years of hearing language, associating words with objects and intentions, practicing, forgetting, correcting, and eventually becoming a slightly different person. An animal learns a route through a maze while hungry, embodied, hormonal, sensory, and alive inside an environment that matters to its survival. A cultured neural network has none of that context.

Yet plasticity is not a metaphor. Neurons change. Synapses strengthen and weaken. Network patterns shift. Repeated inputs can alter future responses. If the word *learning* is confined to measurable change in task-relevant performance under experience, a much smaller claim can be tested.

That smaller claim is enough to destabilize the architecture of an assay.

Imagine two cultures exposed to the same compound. A conventional analysis might compare viability, gene expression, calcium activity, receptor binding, morphology, or spontaneous electrical firing. Those endpoints can be valuable. But suppose the compound leaves spontaneous activity nearly intact while reducing the network’s ability to reorganize under repeated feedback. A static or open-loop assay could miss a functional defect that appears only when the network is asked to adapt.

The DishBrain experiment was not a drug assay. It nevertheless revealed the structure of one.

The scientific field quickly moved toward that implication. Researchers working on developmental neurotoxicity proposed that organoid-intelligence methods could add plasticity-sensitive functional endpoints to existing in-vitro testing batteries. The logic is straightforward. A developing nervous system is not merely a collection of cells that must remain alive. It is a system that must form, connect, and change. A toxicant that interferes with those processes may be important even if it does not produce a dramatic acute endpoint in a simple culture.

The closed loop therefore changes what a perturbation means.

In a one-shot assay, the experimenter controls the perturbation and biology supplies the response. In a closed-loop assay, the response becomes part of the next perturbation. Biology is not just the object at the bottom of the protocol. It occupies a state that the protocol can condition on.

Computer engineers would recognize the difference immediately. A stateless function returns an output from an input without needing to know what happened before. A stateful system carries history. Neural tissue is stateful by default.

Biology has always been stateful, of course. A cell’s response depends on differentiation, metabolism, prior exposure, stress, epigenetic history, position, neighbors, and many other variables. What is new is not state itself. What is new is the effort to make state part of a programmable experimental loop.

That requires three things that are easy to list and hard to engineer.

First, input has to be encoded. The system needs a way to translate a digital or physical variable into a stimulus the neurons can receive. In DishBrain, that meant electrical stimulation tied to the simulated game state. In other systems it may involve optogenetics, chemical delivery, tactile sensors translated into electrical pulses, or stimulation patterns generated by software.

Second, output has to be decoded. Neuronal networks produce complicated electrophysiological activity. A useful assay needs to decide which features matter: spike rates, bursts, synchrony, propagation, spatial patterns, latency, spectral measures, inferred connectivity, or some learned representation of the signal.

Third, the protocol needs a rule for what happens next. Feedback can reinforce one pattern, change the environment, alter stimulation, add a compound, or choose a new task. Once software is allowed to select the next action based on the network’s response, the experiment can become adaptive.

These three layers—encoding, decoding, feedback—sound like software. But none of them can be separated cleanly from the biology.

An electrical stimulus that works for one culture may be too weak or too strong for another. The same network can change over hours or days. Electrode contact matters. Cell density matters. maturation matters. Temperature matters. Medium composition matters. Glial support matters. A pattern that can be decoded today may drift tomorrow. The more a platform tries to expose neurons as if they were a stable computational service, the more biology pushes back.

That friction is precisely why the field belongs inside biotechnology.

The popular imagination sees a biological computer and asks how many calculations it can do per second. A biotechnologist asks whether the cells are healthy, whether the batch is comparable to the previous batch, whether the phenotype is human-relevant, whether the readout is reproducible, whether the perturbation is interpretable, and whether the system can survive long enough to answer the experimental question.

The second set of questions will decide the first.

DishBrain also exposed another recurring problem: a strong result can carry a stronger story than the data need.

The paper’s title used the word *sentience*. The authors tied that word to a specific formal framing of responsiveness and adaptive internal processing. Public discussion often heard the ordinary meaning instead: subjective experience. Those are not interchangeable. A system can produce adaptive behavior without settling whether anything is experienced from the inside.

The distinction is not pedantry. It changes how the technology should be governed.

If every adaptive neural culture is described as sentient, ordinary laboratory work risks becoming morally inflated before evidence supports the claim. If researchers refuse to consider the possibility that increasingly complex neural systems could someday acquire ethically relevant properties, governance may arrive too late. The responsible position is uncomfortable because it has two parts: current evidence does not establish consciousness in these systems, and increasing capability should trigger better measurement and better oversight rather than rhetorical certainty.

The International Society for Stem Cell Research takes a version of this position. Its current guidelines state that there is no biological evidence suggesting consciousness or pain perception in CNS organoids that would warrant specialized oversight, while warning that ethical issues may arise as models become more complex through maturation or assembly.

A useful technology often creates its own ethical measurement problem.

DishBrain did something similar for scientific language. Once a culture can adapt under feedback, researchers need words that distinguish network plasticity, task performance, learning, agency, and sentience without collapsing them. Computer science brings vocabulary about agents and environments. Neuroscience brings vocabulary about plasticity and dynamics. Philosophy brings vocabulary about experience and mind. Biotechnology brings vocabulary about assays, validation, and platforms. The new field sits where these languages overlap badly.

The safest place to stand is the experiment.

The cells received inputs. Their electrical activity affected a simulated environment. Feedback depended on performance. Under the reported conditions, the cultures improved task-relevant behavior relative to controls. That result does not need anthropomorphism.

It also does not need to beat silicon.

A laptop can run Pong perfectly. A microcontroller can run Pong with less trouble, less biological variability, no incubator, no nutrient medium, and no ethical debate. If the task is playing Pong, neurons are a terrible product.

But Pong was not the product.

Pong was a calibration object for a new kind of experimental relationship. It showed that a living neural network could be assigned a structured environment, coupled to digital consequences, and measured as its behavior changed. The task was deliberately arbitrary. The point was that the network had no evolutionary reason to care about Pong and no prewired paddle circuit. Whatever useful organization emerged had to arise inside the closed loop.

That is why the obvious comparison to artificial intelligence misses part of the value.

Artificial neural networks are engineered mathematical systems inspired loosely by biological neurons. They are trained by changing numerical parameters according to an optimization procedure. The weights can be copied exactly. The model can be restarted from the same checkpoint. Millions of identical inference runs can be performed without the substrate becoming tired, inflamed, contaminated, developmentally older, or biologically different.

Living neural networks are almost the opposite. They are difficult to copy exactly. Their wiring develops through biology. Their state changes with time. The substrate is also the process.

From a computing perspective, those properties are liabilities.

From a biotech perspective, some of them are the reason to care.

Disease is not a clean checkpoint. Development is not deterministic software. A drug response is not merely an arithmetic function of a target affinity. Biological variability is a problem when trying to build infrastructure, but it is also part of the phenomenon medicine is trying to understand.

The trick is to separate useful biological variation from useless manufacturing noise.

That challenge runs through the rest of this book. If one patient’s neurons respond differently from another patient’s neurons because their disease biology differs, the variation may be information. If two supposedly identical control organoids respond differently because one batch matured poorly, the variation is noise. The commercial future depends on learning which is which.

Closed-loop neural systems make that separation harder because the output is no longer a single measurement. It is a trajectory.

A network can begin in one state, receive a stimulus, reorganize, respond differently, and then enter another state. The object being tested changes during the test. A compound can alter not just the endpoint but the path. The result may depend on the order of stimuli. Rest periods may matter. Exposure history may matter. Training history may matter.

This makes experimental design more demanding. It also makes new questions possible.

Does a compound reduce the ability of a network to adapt without suppressing baseline firing? Does a disease-associated mutation change the speed at which network responses stabilize? Does a patient-derived culture recover differently after perturbation? Does chronic exposure shift the range of inputs to which a network can respond? Does a treatment restore a dynamic phenotype even when a molecular marker remains abnormal?

These are questions about behavior at the level of a living network.

The biotech industry has spent decades learning to turn increasingly complex biological systems into reproducible assays. Enzymes became screening platforms. Cell lines became screening platforms. Primary cells became screening platforms. organoids are becoming screening platforms. Each transition required new instrumentation, manufacturing, analytics, quality controls, and regulatory confidence.

Neural wetware adds one more demand: the assay may need a curriculum.

That word should be used carefully, but the concept is useful. If a network’s response depends on a sequence of inputs and feedback, then the experimental protocol begins to resemble training. The protocol defines what the system encounters, how performance is measured, and what consequences follow. Two labs could use the same cells and electrodes but produce different outcomes because the stimulus history differs.

In software, that would be part of the program.

In biology, it becomes part of the assay.

The result is a strange convergence. The lab protocol starts to look like code, while the biological sample starts to look like a stateful process. The computer does not disappear. It moves outward, surrounding the tissue with timing, measurement, control, and interpretation.

This is the architecture that later systems would make more explicit.

Brainoware used a brain organoid as a biological reservoir while digital systems handled input encoding and output processing. FinalSpark exposed stimulation and recording through a remote software interface. Cortical Labs built a product around the idea that code could be deployed into an environment where living neurons interacted with a simulated world. Developmental neurotoxicity researchers proposed assays where functional plasticity became a measurable endpoint.

The common feature is not the word intelligence.

It is the loop.

A biotech stack built around that loop has different bottlenecks from one built around static readouts. Cell manufacturing becomes more important because network behavior depends on the quality and developmental state of the substrate. Electrode design becomes more important because stimulation and recording define what the experiment can see. Microfluidics becomes more important because long-lived experiments require stable environments. Software becomes more important because timing and feedback become experimental variables. Machine learning becomes more important because neural signals are high-dimensional. Standards become more important because stateful assays can drift.

And ethics becomes more important because the experiment is designed to elicit increasingly organized behavior from human-derived neural tissue.

All of that was latent in a game that a cheap microprocessor could play better.

The significance of DishBrain was therefore not that the neurons won at Pong.

It was that the dish stopped being merely a dish.

That conclusion still leaves a harder experimental question: when a culture performs better, what exactly improved?

A closed-loop result can change for several reasons. The biological network can change. The decoder interpreting its activity can change. The physical relationship between cells and electrodes can drift. A culture can simply become more mature during the experiment. Noise can happen to align with the task. If the system contains an adaptive digital layer, that layer may learn to extract more useful signal without the tissue changing in a task-relevant way at all.

This is why future claims about neural learning will need a hierarchy of evidence.

The first level is behavioral performance. Does the coupled system become more successful at the defined task? That is necessary and relatively easy to measure.

The second is biological attribution. Does the living network itself show a durable change that explains the improvement? Can the same decoder applied before and after training reveal a changed response? Does disrupting the feedback relationship eliminate the effect? Does the change persist after a rest period? Can electrophysiology or other measurements locate a shift in network dynamics rather than merely in downstream software?

The third is generalization. Does an adapted culture improve only on the exact pattern it experienced, or can it transfer some aspect of that adaptation to a related input? Generalization is not required for every useful assay, but it separates a narrow conditioning effect from broader claims about learning.

The fourth is reproducibility. Does the effect appear across cultures, cell sources, days, and laboratories? A single unusually responsive network can produce a fascinating paper and a poor platform. Biotechnology needs distributions.

The fifth is biological relevance. Does the adaptive effect tell us something worth knowing about development, disease, toxicity, or treatment? A neural culture could become better at a contrived benchmark while remaining useless for medicine. Conversely, a modest task whose performance is predictably disrupted by known neurotoxicants could become a valuable assay.

These levels matter because the same word—learning—can hide very different achievements.

A commercial system can legitimately improve as a whole even when the living layer changes little. Better encoders, denser electrodes, and smarter decoders are real engineering advances. But a paper or product claiming that biology learned should show where the biological contribution entered.

This is not an anti-hype demand. It is a path to stronger products.

If a developer knows that most performance gain comes from the decoder, software can be improved aggressively. If the biological substrate contributes a distinctive form of adaptation, the company can design protocols that preserve and exploit it. If electrode drift accounts for apparent improvement, the platform can fix the hardware instead of building a theory around an artifact.

The more precisely a system can allocate credit, the faster it can improve.

That precision also gives pharmacology a way to use adaptive tasks without pretending the task itself is clinically important. A compound can be evaluated against a functional challenge with known control behavior. The task becomes a standardized stressor. Researchers can ask whether the compound changes learning rate, stability, recovery, or generalization relative to reference conditions.

The useful variable is not whether the organoid has become a game player.

It is whether a defined biological capacity survives perturbation.

That reframing is the bridge from spectacle to assay.

A decade from now, the most consequential descendant of DishBrain may not look like Pong at all. It may be a bland protocol name inside a safety-pharmacology package: a sequence of electrical challenges, feedback contingencies, and predefined response metrics that laboratories run because the result predicts a liability better than spontaneous activity alone.

If that happens, the original demonstration will have succeeded in the least cinematic way possible.

The dish will still be a dish.

But the experiment around it will know that the dish has a history.
