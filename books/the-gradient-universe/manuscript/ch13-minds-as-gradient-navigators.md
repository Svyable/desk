# Minds as Predictive Gradient Navigators

A neuron keeps a battery across its membrane.

The comparison is imperfect but physically useful. Sodium, potassium, chloride, calcium, and other ions are distributed unequally inside and outside the cell. Selective permeability and active pumps maintain electrochemical differences. When ion channels open, currents flow. During an action potential, rapid changes in membrane conductance produce a traveling electrical signal. Afterward, ATP-dependent transport helps restore the ionic conditions that make future signaling possible.

Before a brain predicts anything, it pays for these gradients.

That is the secure thermodynamic foundation of this chapter.

The human brain is only a small fraction of body mass but accounts for roughly a fifth of resting energy expenditure in a typical adult. Reviews of [brain energy use](https://pmc.ncbi.nlm.nih.gov/articles/PMC4560575/) attribute much of this cost to neuronal signaling and to the ion pumps that maintain and restore electrochemical gradients, alongside substantial housekeeping costs such as protein turnover, intracellular transport, membrane maintenance, and glial activity.

The important point is not the famous 20 percent number by itself. The point is continuous dependence. Interrupt cerebral blood flow and the brain cannot simply coast indefinitely on stored electrical charge. Oxygen and metabolic substrates stop arriving, ATP production fails, ion gradients deteriorate, membrane potentials collapse, neurotransmitter handling fails, and injury follows.

Thought is physically expensive because the tissue that supports thought is actively maintained.

That does not tell us what thought *is*.

This is where the earlier version of the chapter moved too quickly. It took the true claim that neural activity depends on metabolic and electrochemical gradients and slid into a much stronger claim: that prediction, attention, memory, emotion, language, and culture are all forms of thermodynamic gradient navigation.

Some are literally responses to measurable gradients. Others are not.

A bacterium can move in response to a chemical concentration field. A moth can orient toward a plume of odor. A fish can move across a temperature gradient. A plant can respond to light direction and gravity. In these cases, the environmental variable has a physical definition and the behavior can be measured against it.

A human deciding whether to trust a colleague is not moving up a thermodynamic gradient in any useful scientific sense.

The word *gradient* must not become a synonym for “anything with more and less.”

The most defensible bridge from thermodynamics to cognition is therefore indirect. Nervous systems evolved because flexible sensing and action can improve an organism’s performance in environments where resources, hazards, opportunities, and other organisms vary across space and time. The nervous system uses metabolic free energy to acquire information, update internal states, control movement, and learn from consequences.

That is compatible with a gradient framework without reducing cognition to entropy production.

Bacterial chemotaxis provides a useful lower boundary because it shows sophisticated control without a nervous system. *Escherichia coli* does not generally compare concentrations simultaneously at two ends of its body; the cell is too small for that to be a robust strategy under many conditions. Instead, its receptor and signaling network can compare recent conditions over time and alter the probability of continuing a run or initiating a tumble. The classic experiments by Howard Berg and Douglas Brown revealed a biased random walk rather than a tiny organism steering like a submarine toward a known destination.

Calling this prediction can be helpful if the word is kept modest. The bacterium uses recent sensory history to bias future motion. It does not need to represent glucose as an object or imagine a future meal.

A nervous system expands the temporal and spatial range over which such control can operate. Sensory receptors transform light, pressure, vibration, chemicals, temperature, tissue damage, and internal physiological states into neural signals. Neural circuits integrate those signals with memory and current goals. Motor systems act before the consequences are fully known. Learning changes future responses.

The result is anticipatory behavior.

A bird can leave before winter becomes lethal. A predator can intercept rather than chase the prey’s current location. A person can carry water into a desert before becoming thirsty. An engineer can reinforce a bridge before the storm arrives.

Prediction matters because action has delays and consequences.

Yet prediction is not one mechanism. Some responses are reflexive. Some are learned associations. Some involve model-based planning. Some rely on statistical regularities encoded in sensory circuits. Some behavior can be described well by reinforcement learning. Some by control theory. Some by Bayesian inference. Neuroscience contains multiple partly overlapping computational frameworks because brains perform many kinds of tasks.

Predictive processing is one influential framework among them.

In predictive-coding models, higher or contextual signals provide expectations about lower-level sensory activity, while mismatches between prediction and input generate error signals that update the model or influence further processing. The idea has produced experimentally useful hypotheses about sensory cortex, perception, and psychiatric disorders. A 2024 *Annual Review of Neuroscience* article on [predictive processing and cortical circuits](https://doi.org/10.1146/annurev-neuro-100223-121214) reviews evidence that prediction and prediction-error-like signals can be linked to identifiable circuit mechanisms in some contexts.

That is a much stronger basis than the claim that the whole brain is simply “a prediction-error minimizer.”

Predictive coding is not a settled universal description of every neural computation. Even where top-down expectations and bottom-up errors are observed, researchers still debate how broadly the architecture generalizes, which cell types carry which signals, how precision or uncertainty is represented, and how predictive accounts relate to attention, reinforcement learning, recurrent processing, and other circuit functions.

A good framework in neuroscience should be forced down toward mechanisms.

If a proposed prediction-error signal has no identifiable neural implementation, the theory remains more abstract. If a circuit manipulation selectively changes a predicted error computation, the theory gains weight. If another model predicts the same data with fewer assumptions, predictive language may add little.

The standard is the same one this book set for thermodynamics: do not let a broad explanatory vocabulary evade comparison.

The free-energy principle raises the stakes because its terminology sounds as though it should connect directly to this book.

It does not, at least not in the simple way the old draft claimed.

Karl Friston’s free-energy principle uses a quantity called *variational free energy*. This is an information-theoretic and statistical quantity used in approximate Bayesian inference. Under a generative model, minimizing variational free energy can make an approximate posterior distribution better match the posterior implied by observed data. It also provides a bound on surprise or negative log model evidence in the relevant formalism.

Variational free energy is **not the same quantity as thermodynamic free energy** such as Gibbs or Helmholtz free energy used to calculate available work in a physical system.

Friston and colleagues have been explicit about this distinction. An early paper on [free energy and the brain](https://pmc.ncbi.nlm.nih.gov/articles/PMC2660582/) states directly that variational free energy is not thermodynamic free energy and that the proposed principle is not simply a consequence of thermodynamics. Later work explores formal relationships among variational descriptions, stochastic dynamics, nonequilibrium steady states, and thermodynamic quantities, but those relationships require assumptions and should not be collapsed into wordplay.

The shared term *free energy* is historically and mathematically motivated.

It is also a trap for this book.

The old chapter fell into it when it said that the free-energy principle was “a reformulation” of organisms maintaining themselves far from equilibrium. That turns an information-theoretic variational framework into a thermodynamic law by association. It also makes it sound as though prediction error is a form of physical waste heat.

It is not.

A computer running a Bayesian inference algorithm consumes electrical energy and produces heat. The variational objective optimized by the algorithm is not the joules dissipated by the processor. Lowering the loss function can require *more* physical energy if the computer performs more computation. The same conceptual separation is needed in brains.

A neural system can be modeled as minimizing an informational objective while its metabolism dissipates thermodynamic free energy. Those two statements may be related through the physical implementation, but they are not identical measurements.

This is the single most important category distinction in the cognitive half of the book.

Active inference extends the free-energy framework from perception toward action and policy selection. In these models, an agent can alter sensory input through action as well as update beliefs. Expected free-energy formulations include terms related to preferred outcomes and information gain, allowing exploration and exploitation to be represented within one formalism.

Again, that is not the same as an animal physically moving toward regions of maximum chemical exergy.

An active-inference agent can seek information, avoid danger, or pursue a learned or innate preference even when the immediate action consumes energy and moves away from a resource. A mouse may leave a food-rich location because it detects a predator. A scientist may spend years on a problem with no immediate metabolic payoff. A parent may transfer resources to offspring at personal energetic cost.

Behavior is organized around biological and learned value, not one thermodynamic slope.

Homeostasis does provide a more literal bridge. Organisms regulate body temperature, osmolarity, blood gases, glucose concentration, pH, blood pressure, and many other physiological variables within viable ranges. These are not all held at fixed set points, and predictive or anticipatory regulation can matter. The modern term *allostasis* is often used for regulation that changes in anticipation of expected demand.

A nervous system can therefore help maintain internal physical gradients by predicting external events.

That claim is concrete.

If a runner’s cardiovascular and respiratory systems adjust before and during exertion, neural and hormonal control helps match oxygen delivery and fuel mobilization to expected demand. If an animal remembers a water source, spatial memory can reduce the risk of dehydration. If a mammal seeks shade before core temperature becomes dangerous, behavior protects a physiological range.

Cognition can serve thermodynamic viability without being reducible to thermodynamic optimization.

Attention offers another case where restraint improves the story. Brains have finite processing capacity and energetic constraints, but attention is not merely “sending energy toward the most informative stimulus.” Attention changes neural gain, competition, routing, and selection according to task, salience, expectations, learned relevance, and goals. Unexpected stimuli can capture attention, but highly expected stimuli can also dominate when they are behaviorally important.

There is no universal law that attention follows maximum surprise.

Memory is similarly more than stored gradient information. Episodic, semantic, procedural, and working-memory phenomena depend on overlapping but distinct brain systems. The hippocampus is central to forming and retrieving many episodic and relational memories; cortical networks support long-term knowledge; basal-ganglia and cerebellar circuits contribute to skills and habits; prefrontal and parietal systems participate in working-memory control.

The old chapter assigned each memory type too neatly to one region. Real brains are networks.

Long-term potentiation and depression provide mechanisms of synaptic plasticity, but no single plasticity rule is “the” memory mechanism. Structural changes, gene expression, neuromodulation, replay, systems consolidation, and reconsolidation all contribute. Sleep affects many forms of learning and memory, but the claim that it simply “transfers memories from short-term to long-term storage” is a filing-cabinet metaphor, not current neuroscience.

A gradient framework adds little here unless it stays at the physical level: plasticity requires biochemical reactions, ion signaling, protein synthesis, and energy. The cognitive explanation still belongs to neuroscience.

Emotion is another place where an attractive reduction can become false. Fear does not simply “predict danger.” Anger does not simply “predict conflict.” Emotions involve distributed appraisals, bodily regulation, learned associations, social context, action tendencies, and conscious experience. Researchers disagree about how many basic emotions exist, whether some emotional categories are biologically universal, and how language and culture shape emotional experience.

The old text claimed universality too confidently and invented a tidy spider-culture example.

The revised argument needs no such certainty. Emotional systems can prepare organisms for classes of action under uncertainty, alter learning, reprioritize attention, and change physiological state. Those functions have energetic consequences because bodies act through metabolism. They are not thereby thermodynamic gradients.

Language pushes the boundary farther still.

Language allows one nervous system to alter another nervous system’s expectations without direct exposure to the event being described. “The bridge is closed” can prevent a wasted journey. “The berries are poisonous” can transfer information that the listener never learned through poisoning. A weather forecast can cause a million people to move vehicles, buy supplies, or evacuate before the storm arrives.

Information changes action.

But a sentence is not a free-energy gradient in the thermodynamic sense. Its effect depends on semantics, trust, shared conventions, institutions, and context. The same acoustic energy in an unknown language may produce almost none of the same behavior.

Meaning changes causal efficacy without changing the elementary laws of physics.

This is exactly why higher-level explanation is necessary.

Culture extends prediction across generations. Techniques, maps, taboos, recipes, legal systems, scientific models, and myths can all encode claims about how the world behaves. Cultural transmission is often much faster than genetic change because information can spread among unrelated individuals and can be revised within a lifetime. But culture is not merely a shared “gradient map.” It transmits values, identities, institutions, aesthetic forms, errors, power relations, and arbitrary conventions as well as resource-relevant knowledge.

A theory that describes all of culture as better resource acquisition would be poorer than the phenomenon.

What minds add to the gradient universe is therefore not one more universal dissipation engine. They add *model-mediated control*.

A thermostatic control loop reacts to temperature. A bacterium biases movement from chemical history. A nervous system can combine multiple sensory channels, remember previous outcomes, simulate possibilities, infer hidden causes, and choose actions based on goals that need not correspond to any one immediate physical gradient.

The brain’s models do not suspend thermodynamics. They change which thermodynamically permitted trajectory the organism takes.

That distinction may be the cleanest connection between cognition and the rest of the book.

Physics supplies a possibility space. A hungry animal can spend stored chemical free energy to move north or south. Neither direction violates the second law. Sensory information, memory, and learned value can make one direction more likely because the animal expects food there.

Information does not add energy to the muscles.

It changes control.

That is why Landauer’s principle, although important, should not be used as a shortcut from information theory to psychology. Landauer showed that logically irreversible operations such as bit erasure have minimum thermodynamic costs under specified physical implementations. It does not follow that every bit of useful information in a brain has a fixed metabolic price or that semantic meaning can be measured directly in joules.

Information is physical when instantiated.

Meaning is not identical to its energy cost.

The energetic constraints on brains are nevertheless real enough to shape design. Neural signaling is expensive. Axons occupy space. Long-range connections have conduction delays and material costs. Synapses require maintenance. Spikes and postsynaptic currents require restoration of ion gradients. Evolution therefore operates under energetic, volumetric, developmental, and timing constraints.

But an energy-efficient brain is not automatically a more intelligent brain.

Reducing firing to zero would save energy and destroy function.

The relevant trade-off is performance under cost, not cost alone.

This returns us to the chapter title. *Minds as predictive gradient navigators* is defensible if it is read at two levels and no further.

At the literal level, nervous systems are built from cells that maintain and manipulate electrochemical gradients using metabolic free energy. Many organisms use sensory systems to navigate measurable environmental differences in light, chemicals, temperature, pressure, and other physical variables.

At the functional level, minds predict consequences and control action in environments where biologically and socially relevant opportunities are unevenly distributed. Calling those opportunities “gradients” can sometimes be a helpful analogy, but the analogy should not be mistaken for a new thermodynamic variable.

The free-energy principle belongs to the second level as a mathematical framework for inference and control, not as evidence that the brain minimizes Gibbs free energy or exists to maximize entropy production.

Consciousness remains outside what this framework can presently explain.

A conscious experience occurs in a metabolically active brain. That places consciousness inside physics in the ordinary material sense. It does not tell us why particular neural processes are accompanied by experience, which computational properties are necessary or sufficient, or whether consciousness can exist in non-biological substrates. Predictive-processing theories, global-workspace theories, recurrent-processing theories, higher-order theories, integrated-information approaches, and other programs make different proposals.

Thermodynamics does not adjudicate them by itself.

This is an important refusal.

The book becomes more credible by leaving some questions open.

Brains are among the clearest examples of matter using energy to build control over future energy use. They spend metabolic resources to sense distant conditions, learn regularities, coordinate muscles, communicate with other brains, and build tools that redirect flows far beyond the body.

That last capacity changes the scale of the story.

A beaver changes a stream. A human builds a dam, a turbine, a transmission line, a market, and software that schedules electricity across a continent. The thermodynamic dependence remains straightforward: every tool is embodied and every computation consumes physical resources.

The new question is not whether technology dissipates gradients.

Of course it does.

The question is how technology changes *access, control, timing, and choice* over gradients that unaided organisms could not use.