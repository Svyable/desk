# The Experiment That Answers Back

The first mistake is to imagine the paddle.

There was no tiny white rectangle visible to the neurons. No arcade cabinet. No screen glowing in front of a dish. The culture did not know that a game called Pong had existed since the early 1970s, or that generations of humans had learned to move a vertical bar toward a bouncing dot. What the neurons received was electricity.

In the system that Brett Kagan and colleagues reported in *Neuron* in 2022, living cortical neurons were grown on high-density multi-electrode arrays. Some cultures came from mouse cortical cells. Others were human neurons derived from induced pluripotent stem cells. The electrodes served two purposes at once. They could stimulate the network, and they could record its activity. Software translated a simplified game world into patterns of electrical input and translated selected neural activity back into movement of the paddle.

The network was not shown Pong. It was coupled to Pong.

That distinction contains most of the future described in this book.

A normal biological assay is easier to picture. Put cells in a plate. Add a compound. Wait. Measure whether they survive, divide, express a protein, change shape, release a molecule, or light up under a reporter. The biological sample experiences the perturbation, but the assay does not usually reorganize itself around the sample’s response in real time.

DishBrain did.

When the neuronal network influenced the paddle and the consequences of that movement were returned to the culture as new stimulation, the experiment became closed-loop. The output of the living system changed the input it would receive next. The researchers reported that cultures under structured feedback improved their performance over time in ways not observed in important control conditions. They called the broader approach synthetic biological intelligence.

The paper attracted exactly the kind of attention a paper like that was bound to attract. The title said the neurons “learn and exhibit sentience.” News stories compressed a difficult experiment into the phrase “brain cells learned Pong.” Readers were left with an image somewhere between a neuroscience breakthrough and a science-fiction cold open.

The strongest interpretation was also the least useful one.

Whether a culture of neurons should be described with a word as philosophically loaded as *sentience* is a separate argument. The authors defined the term in a narrow sense tied to responsiveness to sensory impressions through adaptive internal processes. Other scientists and ethicists have been more cautious about carrying such language into claims about experience or consciousness. Nothing about a Pong-like task settles those questions.

Something else had been demonstrated that requires less metaphysics and has more immediate engineering consequences: living neural networks could be placed inside an information loop.

They could receive encoded information from a digital system. Their electrical response could be read. Software could decide what happened next. The network could change over time.

That is an interface.

Biotechnology is full of interfaces, though we do not always call them that. A sequencer interfaces chemistry with information. A microscope interfaces photons with measurement. A flow cytometer interfaces cells with classification. A microfluidic device interfaces tiny volumes of material with controlled physical environments. In every case, the instrument makes some part of biology legible to a human or a machine.

A neural interface adds a complication: the thing being measured is not merely a source of data. It can alter its own future behavior.

A neuron is an electrical cell whose function depends on gradients of ions across a membrane, voltage-gated channels, synapses, receptors, intracellular machinery, and relationships with other cells. A network of neurons produces activity that cannot be reduced to a single cell’s state. Connections strengthen and weaken. Timing matters. Repeated stimulation matters. The recent past can change the next response.

That sounds obvious if one is talking about a nervous system inside an organism. It is less obvious when thinking about an assay in a laboratory.

The modern biotech stack was built largely around the expectation that complexity could be decomposed. A tissue becomes a cell line. A cell becomes a set of pathways. A pathway becomes a target. A target becomes a binding assay. The decomposition has produced extraordinary medicines because reduction can be powerful. It has also produced a recurring translational problem: a result can be correct at one level and fail at the level that eventually matters.

A molecule binds its target but fails in a patient. A drug looks safe in one model and toxic in another. A rodent does not reproduce a human neurological phenotype. A two-dimensional culture carries the right mutation but not the right network behavior. A biomarker moves while function does not.

Neural organoids and other in-vitro neural systems do not solve this problem by restoring an entire human brain in miniature. They do something more modest. They preserve more of the interactions that reduction removes, while remaining accessible to experimental control.

That combination—more biological organization without giving up laboratory access—is why organoids became important before anyone tried to use them for computation.

The path began well before DishBrain.

In 2006, Kazutoshi Takahashi and Shinya Yamanaka reported that a small set of defined factors could reprogram differentiated mouse cells into an embryonic-like pluripotent state. In 2007 Takahashi, Yamanaka, and colleagues extended the approach to adult human fibroblasts. The significance was larger than any one tissue. A cell taken from an adult could, through a controlled molecular intervention, be returned to a state from which many other cell types could be generated.

For neuroscience, that meant access.

The human brain is difficult tissue. Scientists cannot routinely take living cortical tissue from healthy people and run experiments on it. Post-mortem tissue captures an endpoint. Animal models are indispensable but are not human. Tumor resections and rare surgical material offer windows, not a general platform. Induced pluripotent stem cells changed the geometry of the problem. Skin or blood could become a renewable source of cells carrying a person’s genome, and those cells could be differentiated toward neural fates.

Then came architecture.

In 2013, Madeline Lancaster and colleagues reported cerebral organoids derived from human pluripotent stem cells that developed features of multiple brain regions and could model aspects of microcephaly. The paper did not create a miniature adult brain. It created a new experimental compromise: a self-organizing three-dimensional system that captured features inaccessible to flat culture while remaining an object that could be grown, perturbed, imaged, sequenced, and compared.

Over the next decade, the field diversified. Researchers developed regionalized neural organoids, assembloids combining different neural regions or cell types, grafted organoids, vascularization strategies, long-term maturation protocols, and disease models. The names became messy enough that a large group of scientists published a consensus in *Nature* in 2022 to clarify them. They explicitly discouraged “mini-brain.”

The language correction mattered because the technology was becoming more capable at the same time that public metaphors were becoming less precise.

Once a neural culture or organoid produces electrical activity, the next question is obvious to an engineer: can we connect to it?

Multi-electrode arrays had existed for decades. Researchers had long cultured neurons on electrodes and used electrical stimulation to study network behavior. What changed was the convergence. Stem-cell biology provided human neural material. Organoid methods added three-dimensional organization. Electrode technology increased spatial and temporal access. Microfluidics improved environmental control. Machine learning improved signal analysis. Cloud systems made remote experiments plausible. Regulatory pressure increased the value of human-relevant models. Artificial intelligence made the idea of learning systems culturally and economically central.

The stack assembled from parts that had not originally been designed to become a stack.

By 2023, a Johns Hopkins-led group proposed “organoid intelligence” as a multidisciplinary program. Their architecture placed a brain organoid at the center, surrounded by microfluidics, sensors, stimulation, machine learning, and data systems. The ambition included both biocomputing and biomedical research. In the same year, researchers reported Brainoware, a system using a brain organoid as an adaptive reservoir for tasks including speech recognition and nonlinear equation prediction.

In 2024, FinalSpark published details of a remotely accessible Neuroplatform. Its forebrain organoids could be maintained for long experiments, stimulated and recorded through electrodes, supported by automated microfluidics, and accessed through software. The paper described more than a thousand organoids used over several years and an API that allowed remote researchers to run experiments.

The lab bench had acquired a network address.

In 2025, Cortical Labs presented the CL1, a self-contained system combining living neurons with electrodes, life support, and a software environment. The company marketed it as a code-deployable biological computer and offered remote access through the Cortical Cloud. Technology coverage focused on the strangeness of a computer with human neurons inside it. The company itself also pointed toward nearer-term life-science uses: drug discovery, disease research, and personalized medicine.

That detail is more important than it appears.

Every general-purpose computing revolution creates infrastructure that spills into science. But this direction is reversed. The wetware system begins as biology. Its temperature, nutrient supply, pH, sterility, maturation, cell quality, and electrophysiology are not peripheral concerns; they are the platform. The computation exists only because a living experiment has been engineered well enough to persist.

The best analogy may therefore be less like the arrival of the microprocessor than the arrival of cloud laboratories.

A cloud computer abstracts servers. A wetware platform tries to abstract the maintenance and interfacing of living neural systems. The user sends instructions. The platform turns instructions into stimulation, environmental changes, or chemical perturbations. The biological network responds. Software records the response. The experiment can run again.

This does not make neurons software. It makes software part of the experimental environment of neurons.

The difference will matter as drug development absorbs the technology.

Consider a developmental neurotoxicity assay. A conventional test may ask whether a chemical affects viability, neurite growth, receptor activity, gene expression, or other defined endpoints. Researchers working on organoid intelligence have proposed adding functional endpoints tied to plasticity. If a neural system can be placed in a repeatable stimulation-and-feedback protocol, then exposure to a chemical can be evaluated not only by whether cells remain alive but by whether the network’s ability to adapt changes.

That is a different question.

Or consider epilepsy. A patient-derived neural organoid can carry a disease-associated mutation. A multi-electrode system can record abnormal network activity. A microfluidic device can expose different organoids to different concentrations of candidate drugs. The readout can be functional rather than purely molecular. In 2025 researchers reported a platform combining a microfluidic chip and a three-dimensional electrode array for multiple brain organoids, including an SCN2A epilepsy model.

Again, the crucial shift is not that the tissue is intelligent in a human sense. It is that the tissue has behavior.

Biotech has always cared about function. What changes here is the ability to make function programmable enough to become an assay.

That is why the story should not be told as a contest between carbon and silicon. Silicon is everywhere in the system. It controls the pumps. It runs the signal processing. It stores the data. It trains the classifiers. It encodes the stimuli. It schedules the experiments. It may decide which compound to test next.

The organic layer does something silicon cannot do by simulation alone: it *is* the human biology under investigation.

That fact changes what counts as a useful model.

A digital model can predict how a neuron might respond. A neural culture responds. An organoid can express a developmental defect. A patient-derived network can reveal an electrical phenotype. A chemical can change that phenotype in a way that is measured directly. The point is not to romanticize living tissue. It is to notice that biology and information technology are being joined at a different seam than before.

For most of biotech’s history, information was extracted from biology.

Now information can be fed back into it.

The experiment answers back.
