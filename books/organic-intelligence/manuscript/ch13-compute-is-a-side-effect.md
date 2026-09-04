# Compute Is a Side Effect

The easiest way to misunderstand biological computing is to begin with the computer.

That sounds backwards because the field presents itself through computing language. Brainoware. Wetware. Biological intelligence. Organoid intelligence. Neural compute on demand. The names invite a familiar contest: how many operations can the biological system perform, how little energy does it use, how quickly can it learn, and when will it compete with silicon?

Those questions are not meaningless.

They are early.

A neural organoid does not become scientifically important because it can approximate a nonlinear function. A digital computer can already do that more reliably, cheaply, repeatably, and at enormous scale. The interesting part of the biological system is the same part that makes it inconvenient: the substrate has its own dynamics.

That is why compute may be a side effect of building better biotech interfaces.

The 2023 Brainoware paper is a useful place to see the distinction. Researchers coupled a brain organoid to a high-density multi-electrode array and used the organoid within a reservoir-computing framework. Inputs were encoded as spatiotemporal electrical stimulation. Outputs were read from the resulting neural activity and interpreted through conventional computing. The system was used for speech-recognition and nonlinear-prediction tasks. The paper reported nonlinear dynamics, fading-memory properties, and changes associated with training.

The organoid was not a laptop running a speech model.

It was a physical dynamical reservoir whose biological response transformed incoming signals in a way that downstream algorithms could exploit.

Reservoir computing is a particularly revealing architecture for wetware because it does not require complete control over the internal network. A complex dynamical system receives inputs. Its internal state changes. A comparatively simple readout layer learns how to map the resulting states to useful outputs.

That is attractive when the internal system is difficult to program directly.

A brain organoid is difficult to program directly.

The precise synaptic network is not designed transistor by transistor. The internal connectivity develops biologically. Even if researchers know the cell types and stimulation geometry, they do not possess a full wiring diagram or a clean way to set each connection weight. Reservoir computing turns some of that uncontrollability into a feature. The richness of the internal dynamics can provide nonlinear transformations without requiring the experimenter to specify every internal operation.

This is one reason biological computing research can be intellectually serious without yet being commercially competitive.

The field is searching for architectures that fit the substrate rather than forcing the substrate to imitate a digital computer.

The same principle appeared in a different form in the 2026 Braille-classification work from researchers at the University of Bristol. Human forebrain organoids on a low-density microelectrode array were stimulated using encoded tactile information derived from a sensor. The researchers reported an average classification accuracy of 61 percent with a single organoid and 83 percent when responses from three organoids were combined.

The experiment is interesting precisely because of what it did not show.

It was open-loop.

The organoids were not trained through an interactive tactile task in which their responses altered future inputs. The researchers systematically encoded tactile events into electrical stimulation and then used the organoid responses for classification. The multi-organoid ensemble improved robustness and accuracy in the reported setup.

That is a demonstration of biological signal transformation, not evidence that three organoids learned Braille the way a person does.

The distinction strengthens the result rather than diminishing it.

It shows that even before closed-loop learning is solved, biological neural tissue can act as a nonlinear experimental component inside a hybrid information-processing system.

Why does that matter to biotechnology?

Because nonlinear transformation is already what many assays need.

A drug does not enter a cell and produce a single isolated output. It perturbs a network of pathways. A developmental disorder is not the sum of independent molecular defects. A neural network integrates thousands of signals into electrical behavior. Biology is a physical computer in the broadest possible sense because its state reflects interactions among many variables.

Drug developers have always exploited this indirectly.

A phenotypic assay lets the cell perform its own internal integration. The scientist perturbs the system and reads the outcome. The exact internal computation may be unknown. The value lies in whether the outcome predicts something useful.

Wetware computing makes that integration more explicit by treating the neural response itself as an information-processing resource.

The boundary between assay and computer becomes blurry.

Suppose a neural organoid receives a set of electrical inputs representing a chemical perturbation, environmental condition, or sensory signal. Its network dynamics transform those inputs. A digital readout interprets the resulting state. Is the organoid computing?

In one sense, yes. Physical systems transform information all the time.

The more useful question is whether calling it computation helps design a better experiment.

Sometimes it does.

Reservoir-computing concepts encourage researchers to think about memory, separability of input patterns, nonlinear response, and dimensionality. Reinforcement-learning concepts encourage thinking about closed-loop adaptation. Control theory encourages thinking about stability, feedback, and state transitions. Information theory encourages asking how much signal the network preserves or transforms.

These frameworks can make neural assays more quantitative.

They become dangerous when they tempt researchers to benchmark the wrong thing.

A brain organoid that classifies a small speech dataset less accurately than a laptop is not a failed biotech model. A biological network that needs a complicated incubator is not disproven because a microcontroller runs the same toy task with less operational complexity. The benchmark only matters if the task represents a use case where the biological substrate provides something digital hardware cannot cheaply supply.

For general-purpose computation, that advantage remains unproven.

For human biology, it is obvious.

A GPU can simulate a disease model. An organoid can express one.

A digital neural network can predict whether a compound is likely to change excitability. A living network can be exposed to the compound and produce the resulting electrophysiology.

A silicon reservoir can transform a tactile signal. A human neural organoid can transform the signal while simultaneously being a piece of human neural biology.

That second property is where biotech value enters.

The most plausible hybrid systems will therefore use each substrate for what it is good at.

Digital computers will schedule experiments, optimize parameters, store data, train decoders, analyze images, control pumps, and run simulation. Living neural systems will provide adaptive human biological dynamics. The interface will move information between them.

The winning architecture is unlikely to be purely biological.

It may not even be mostly biological.

A single organoid inside a large digital system can still be the irreplaceable layer if the organoid is the only part that reproduces the relevant human phenotype.

This is why compute can emerge as a side effect of building a better assay stack.

Once researchers have learned how to produce standardized neural tissue, keep it alive, stimulate it precisely, record it at scale, and connect it to software, the same infrastructure can be used for computing experiments. The biological-computing demonstration rides on the biotech infrastructure.

The reverse is harder.

A platform optimized only to complete an abstract benchmark may not have the cell provenance, disease relevance, fluidics, chemical delivery, quality controls, or regulatory traceability needed for drug development.

The direction of investment therefore matters.

A company pursuing biological computing can choose to build toward computer-science benchmarks and hope that superior energy efficiency or learning characteristics eventually justify the platform. Or it can treat computation as a forcing function for better interfaces and monetize nearer-term scientific use.

Cortical Labs has publicly pointed toward both directions. Its CL1 and Cortical Cloud are presented as biological computing platforms, but the company also highlights life science, disease modeling, personalized medicine, and drug discovery as applications. That dual positioning is rational because the same device needs the hard parts of both fields: stable living neurons and programmable digital interaction.

FinalSpark’s Neuroplatform shows a similar duality. The published system was designed for wetware-computing research, yet its most important engineering achievements are exactly those needed for remote biological experimentation: long-lived culture, automated microfluidics, continuous electrophysiology, stimulation, cameras, and a software interface. The 2024 paper reported more than eighteen terabytes of data generated over years of operation.

That is not a computational benchmark.

It is an operational dataset about keeping experimental neural tissue connected to software.

The platform becomes more valuable if those lessons transfer to pharmacology.

There is also a conceptual reason computing may remain secondary.

Biological neural networks are optimized by evolution for organisms, not for cloud economics.

They are embedded in metabolism. They require water, ions, proteins, lipids, oxygen, nutrients, waste removal, temperature control, and continuous repair. They are noisy. Their components die and regenerate imperfectly. Their learning rules are distributed across mechanisms that are not fully understood. They vary from preparation to preparation.

The brain’s extraordinary efficiency emerges in a complete biological system with vascular support, homeostasis, glia, sensory inputs, endocrine regulation, development, and evolutionary specialization.

A dish inherits only part of that advantage and adds artificial support overhead.

This makes simple energy comparisons suspect.

It is common to compare the human brain’s power consumption with the electricity used by artificial-intelligence systems. The contrast is provocative. But an in-vitro wetware platform is not a disembodied brain. Its total energy includes environmental control, pumps, electronics, data acquisition, networking, sterilization, and sometimes human labor.

The right denominator is useful system output per total system cost.

No mature comparison yet exists for general-purpose workloads.

There is a second benchmarking trap: the denominator of *training*.

A biological network can appear data-efficient because it is not beginning from nothing. Its cells arrive with molecular machinery, developmental priors, spontaneous activity, homeostatic regulation, and connectivity shaped by weeks or months of growth. Evolution supplied the rules that make those cells capable of changing at all. Development supplied a large amount of structure before the first laboratory trial begins.

A digital model’s training bill is usually counted explicitly. A wetware system’s biological pretraining is hidden inside cell manufacture and maturation.

This does not erase a genuine advantage if the living network adapts quickly once online. It changes the accounting. A fair comparison has to include the time, material, failed batches, culture infrastructure, and developmental process required to create a usable substrate. Otherwise the benchmark compares a finished biological system with an untrained digital one and calls the difference learning efficiency.

The same issue applies to reproducibility. A machine-learning benchmark is meaningful partly because another team can run the same model, dataset, and evaluation protocol. A wetware benchmark needs additional layers: comparable biological provenance, maturation, electrode access, stimulation calibration, and analysis. If the reported advantage disappears when a second batch is used, it was not yet an architectural advantage.

A useful wetware benchmark therefore needs three scoreboards.

One records **task performance**: accuracy, prediction error, adaptation, retention, or another outcome. One records **biological cost**: culture time, yield, attrition, substrate age, interventions, and usable experiment hours. The third records **system cost**: total energy, equipment, labor, data processing, and failure recovery.

Only the combined scoreboard can support an economic claim.

That standard may appear unfairly demanding compared with early computing experiments. It is the opposite. It protects the field from being judged by a headline it was never ready to support.

A wetware system could lose every general-purpose computing comparison and still become valuable science infrastructure. Conversely, it could win an elegant toy benchmark and remain commercially unusable if the substrate cannot be manufactured, maintained, or reproduced.

The discipline is to know which victory matters.

This uncertainty is not a reason to dismiss the field.

It suggests a better research question: where does biological computation have a unique economic advantage rather than a merely interesting physical one?

One candidate is rapid adaptation from limited examples.

Living neural networks can change with experience, and researchers hope to exploit that data efficiency. But current demonstrations are small, variable, and difficult to compare with modern machine learning. Claims that neurons “learn from fewer examples” need task-matched benchmarks, reproducibility, and system-level accounting.

Another candidate is low-power edge sensing.

A biological reservoir could transform noisy sensory inputs while using little electrical power at the neural layer. Yet maintaining viable tissue outside a laboratory may erase the power advantage unless life support becomes extremely efficient.

Another candidate is continuous adaptive control in environments where the biological substrate can exploit dynamics that are expensive to model digitally.

Again, the support stack matters.

The nearer candidate is scientific modeling.

Here the biological substrate is already valuable before it performs any abstract computation. If the same tissue can process structured inputs while preserving disease-relevant biology, computation and assay function reinforce each other.

This leads to an inversion.

In conventional computing, the benchmark is the product and the biology is the novelty.

In biotech, the biology is the product and the benchmark is a tool for interrogating it.

That inversion clarifies the status of Brainoware.

Its speech-recognition and nonlinear-prediction tasks showed that an organoid could serve as a reservoir with useful dynamics. The lasting importance may not be that a future organoid will handle speech recognition commercially. It may be that reservoir-computing methods provide a formal way to characterize how different organoids transform inputs.

A disease organoid could have a different reservoir profile from a control.

A drug could alter memory properties.

A toxicant could reduce separability between input patterns.

A developmental mutation could change the dimensionality or stability of network responses.

Computational concepts become assays for biology.

The same possibility appears in the Braille work. The classification task forced researchers to build an encoding strategy that mapped a real sensor stream into stimulation parameters and to measure how organoids transformed the resulting patterns. The downstream classifier gave a quantitative test of information preserved in the response.

The task becomes a probe.

This is a productive way to interpret biological-computing benchmarks. A benchmark creates a standardized challenge that can expose differences among substrates, protocols, donors, drugs, and disease states.

The goal need not be to replace a CPU.

The goal can be to make biological function legible.

A good benchmark should therefore be adversarial to the story being told about it.

If the claim is that the biological substrate contributes useful nonlinear transformation, the digital baseline should be strong enough to show what the organoid adds. If the claim is rapid adaptation, the comparison should hold the task, data, and readout conditions as constant as possible. If the claim is energy advantage, the measurement should include the support system. If the claim is robustness, new biological batches should be part of the evaluation rather than treated as a separate future problem.

The benchmark should be designed to make the advantage disappear if it is not real.

This is especially important because hybrid systems can hide contribution. A sophisticated decoder can extract useful signal from a weak substrate. Better input encoding can improve performance without any biological change. Ensemble averaging can raise accuracy by reducing variance rather than increasing the capability of one organoid.

All of those can be legitimate engineering improvements.

They should not be credited automatically to the wetware.

The cleanest reports will decompose performance: substrate-only characteristics, decoder contribution, encoder contribution, ensemble effects, and system-level outcome. This is similar to an ablation study in machine learning, except one component cannot be cloned perfectly between runs.

That difficulty is exactly why the decomposition matters.

The field also needs longitudinal benchmarks. A digital model can be tested today and tomorrow without aging. A neural substrate may improve, drift, or decline. A useful system should report not only peak performance but usable performance over biological time.

How many experiment hours remain inside specification?

How often must the decoder recalibrate?

Does a learned effect persist after rest?

Does performance degrade gradually or fail abruptly?

Does replacing the tissue restore the same operating range?

These questions turn “compute” from a momentary demonstration into a service property.

They also bring the argument back to biotechnology. Longitudinal function, drift, replacement, and calibration are exactly the problems an assay platform has to solve.

This framing also changes the ethical temperature.

If wetware is sold as a new computer, people naturally ask when it becomes a mind. If it is understood as adaptive neural tissue used inside a scientific instrument, the ethical questions become more precise: what level of organization exists, what evidence of sentience or pain is present, what interventions are being performed, what donors consented to, and what oversight should apply as capability increases?

The ethics remain serious.

The metaphysics becomes less mandatory.

The computing story will continue because it is irresistible. There will be larger organoids, denser interfaces, richer sensory encoding, better closed-loop training, more sophisticated tasks, and increasingly ambitious claims about energy and intelligence.

Some will be real advances.

Some will be press-release arithmetic.

The discipline is to ask what layer improved.

Was the biological substrate more reproducible?

Did the interface record more of the network?

Did the system remain viable longer?

Did the training protocol produce a replicated adaptive effect?

Did the task measure a capability relevant to biology or merely create an entertaining demonstration?

Did total system economics improve?

These questions make the field harder to hype and easier to build.

The paradox is that the best path toward a genuine biological computer may be to stop demanding one too soon.

Build better human neural models.

Build better interfaces.

Build better closed loops.

Build better foundries.

Build better data systems.

Then see what else the substrate can do.

Computation may turn out to be the most spectacular application.

Or it may be the by-product that taught biotechnology how to listen to living neural systems properly.
