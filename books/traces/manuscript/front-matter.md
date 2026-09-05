# Traces

*Tracking How Machines Learn*

**Sven Hardy Benson**

---

A model arrives on a Tuesday.

There is a name for it, a version number, a row of benchmark scores, a context window, a price, perhaps a technical report. People ask what it can do. They ask whether it is better than the model released last month. They ask whether it can code, reason, translate, plan, use tools, refuse harmful requests, follow instructions, remember preferences, or pass an exam that was difficult enough to be interesting six months earlier.

The questions are sensible. They are also strangely ahistorical.

A trained machine is presented to us as though it woke up complete.

The weights exist now. The behavior exists now. The score exists now. The API exists now. The model is an object.

But learning is not an object.

Learning is a sequence of changes.

Before the model could predict the next token this way, it predicted it another way. Before a feature became useful, the feature was weak or absent. Before a safety behavior became reliable, it was unreliable. Before an example became easy, it was difficult. Before a circuit participated in a computation, its component parts were doing something else. Before a fine-tuned model became different from its base model, there was a moment when the two were the same.

The finished system hides those transitions.

We have spent decades getting very good at making learning happen and considerably less time preserving a legible history of what happened while it did.

That imbalance made sense when models were small, training was cheap, and the important artifact was obviously the final one. If a system could be retrained in an afternoon, there was little reason to treat intermediate checkpoints as precious evidence. If a researcher already understood the model class well enough to write down most of its logic, the developmental history was useful but not existential.

The scale changed.

Modern machine-learning systems can contain billions of parameters. Their training data can be vast and heterogeneous. Their behavior can be shaped in several stages: pretraining, supervised fine-tuning, preference optimization, safety tuning, domain adaptation, reinforcement learning, tool-use training, synthetic-data loops, model merges, post-training interventions. The final behavior can be the residue of many objectives applied at different times by different teams using different datasets.

A single model name can conceal a long biography.

The obvious way to understand such a system is to look inside it.

Mechanistic interpretability does exactly that. Researchers study activations, features, attention heads, circuits, and flows of information. In 2025, Anthropic researchers described a circuit-tracing method intended to reconstruct parts of the computational graph supporting a language model's answer. They were careful about its limits: the method captured only a fraction of the computation even on relatively short prompts, and the mechanisms revealed by an interpretability tool can contain artifacts of the tool itself. Still, the work made something vivid that had previously been easy to discuss only in abstractions. A model's answer could be investigated as a path through internal machinery rather than accepted as a sentence that had simply appeared.

That is one kind of trace.

There is another.

In 2017, Pang Wei Koh and Percy Liang revived influence functions from robust statistics and adapted them to modern machine learning. Their question was not merely which feature inside a network was active. It was which training examples were most responsible for a particular prediction. The method treated a prediction as something with ancestry. Change the weight of a training point, even hypothetically, and ask how the final parameters and output would change.

The approximation was imperfect. Deep neural networks are not the tidy convex systems for which the classical theory feels most comfortable. But the direction was important. The explanation of a model could run backward through the learning algorithm toward the data that shaped it.

In 2020, researchers at Google proposed TracIn, short for tracing influence through gradient descent. The name is almost too literal for the argument of this book. Rather than reconstructing everything from the final state, TracIn uses saved checkpoints and gradient information to estimate how individual training examples affected a target prediction over the course of training.

The checkpoints matter.

A final model tells you where the optimization ended.

A series of checkpoints gives you a rough film.

Not a complete film. More like frames saved from a security camera that only records every few minutes. Much can happen in the gaps. But the existence of the earlier frames changes what can be asked.

Which example repeatedly pushed in a direction that later became behavior?

When did the target example become easy?

Did one capability appear gradually or arrive after a long flat period?

Did fine-tuning create a genuinely new mechanism or turn up a mechanism that was already present?

Did an unwanted behavior disappear, or did it become harder to elicit?

Was a memorized sequence learned early and retained, or learned late after repeated exposure?

Did two models that reach similar benchmark scores travel through similar internal states?

These are historical questions.

Machine learning has had historical evidence all along. We called it logs.

Loss curves. Evaluation curves. Checkpoints. Gradient norms. Optimizer states. Data-order records. Learning-rate schedules. Run metadata. Ablations. Seeds. Versioned datasets. Fine-tuning diffs. Saved activations. Training examples. Model cards. Experiment trackers. Error reports. Red-team transcripts.

Most of these artifacts were built for engineering rather than historiography. They exist because people need to debug a run, reproduce a result, compare an experiment, stop a divergence, or recover from a machine failure.

But engineering debris can become scientific evidence.

That has happened before.

Ships kept logs because sailors needed to know where they were. Those logs later became evidence about weather and climate. Merchants recorded transactions because money had to be accounted for. Historians later used the ledgers to reconstruct trade, prices, migration, and ordinary life. Hospitals created records to treat patients, not to build future epidemiological datasets, yet the accumulated records became a way of studying disease.

A record made for one reason can become valuable for another once somebody learns what question to ask of it.

Machine learning is approaching that point with its traces.

One of the most revealing examples does not begin with interpretability at all. It begins with bad labels.

In 2020, Swabha Swayamdipta and colleagues introduced what they called dataset cartography. Instead of treating a dataset as a static pile of examples, they watched the model's behavior on individual examples during training. Some items became easy early and stayed easy. Some remained difficult. Others sat in an ambiguous region, with the model's confidence changing substantially over time. Those trajectories contained information that the raw dataset did not advertise. Hard-to-learn items were more likely to contain labeling problems. Ambiguous items could be especially useful for generalization.

The important thing is not the particular taxonomy of easy, hard, and ambiguous. The important thing is the move.

The dataset was mapped through the learner's changing relationship to it.

An example acquired a history.

In ordinary data analysis, the row is the row. Its features are fixed. Its label is fixed. It sits in a file.

In training dynamics, the same row becomes a trajectory: what the model believed about it at epoch one, epoch two, epoch three, and onward.

The model becomes an instrument for reading the dataset, while the dataset becomes an instrument for reading the model.

That reciprocity runs through this book.

A model's traces are not all inside the model. Some are in the changed relationship between model and data.

Some are in outputs that should not have been possible without memorization.

In 2021, Nicholas Carlini and colleagues demonstrated that large language models could memorize and expose individual sequences from their training data. Their work on GPT-2 showed that aggregate training-versus-test loss could look unremarkable while particular examples were retained strongly enough to be extracted. The average said one thing. The tail said another.

A memorized record is a trace with consequences.

It can be a clue about learning. It can also be a privacy leak.

That double use will recur. The better we become at tracking what shaped a model, the harder it becomes to pretend that provenance, privacy, ownership, and accountability are separate topics. A technique that helps a developer find a poisoned example may also help an outsider infer whether a sensitive record was in training. A model diff that reveals a new safety mechanism may also reveal something about the policy choices of the organization that tuned it. An unlearning audit can provide evidence that a record no longer has meaningful influence, but only if we agree on what counts as forgetting.

The word trace sounds passive.

It is not.

A trace becomes useful only through a comparison.

This state against an earlier state.

This prediction with and without a training influence.

This activation with and without an intervention.

This model before and after fine-tuning.

This behavior before and after unlearning.

This example when it was hard and after it became easy.

This circuit before it emerged and after it began to support a capability.

Difference is the microscope.

Software engineers understand this instinctively. A codebase with a million lines can be impossible to review from scratch. A diff of fifty changed lines is manageable. The diff does not prove that the change is safe. It narrows the search.

In March 2026, Anthropic researchers described a model-diffing system built around a similar idea. Instead of asking an auditor to understand an entire new model, the system attempted to identify features that differed between models, including models with different architectures. The work did not claim to determine where those differences came from. A behavior that appears in one model and not another may reflect data, fine-tuning, architecture, chance, or deliberate policy. But the comparison points toward the changed region.

This is a profound shift in the economics of explanation.

Understanding a frontier model from scratch may be hopelessly expensive.

Understanding what changed between yesterday's model and today's may be less hopeless.

Less hopeless is not a slogan. It is a research program.

The same idea can be pushed backward in time.

Imagine that a model's training history were preserved with the seriousness of source-code history.

Not every gradient. That would be absurdly expensive at scale.

But enough structure to ask developmental questions.

Periodic checkpoints. Dataset versions. Objective changes. Learning-rate transitions. Fine-tuning boundaries. Evaluation trajectories. Sampled influence estimates. Internal feature snapshots. Records of significant interventions. Known memorization tests. Behavioral diffs. Unlearning attestations. Provenance for synthetic data that re-entered training.

The result would not be a Git history for a neural network. Neural learning is too distributed and stochastic for the analogy to survive literally.

It would be something more like stratigraphy.

Layers of evidence.

The oldest layer might be pretraining. Above it sit later tuning stages. Some later layers transform what came before. Some preserve ancient structure almost untouched. Some expose earlier material when the right prompt or task cuts through the surface. A behavior seen in the final model can sometimes be associated with a late intervention; another can only be explained by a pattern distributed across the deeper history.

Geology is a useful analogy because it does not promise perfect reconstruction.

A geologist rarely has a continuous recording of a landscape. The record has gaps. Sediment is eroded. Layers are folded. Later events disturb earlier evidence. Dating methods have uncertainty. Multiple causal stories can fit the same observations.

The discipline advances anyway because incomplete evidence is not the same as useless evidence.

Machine learning needs the same maturity.

A trace is not proof merely because it is technical.

An influential training example is not necessarily the sole cause of an output.

An activation feature is not necessarily a human concept living neatly in a neuron.

A checkpoint difference is not necessarily a stable developmental milestone.

A behavior that disappears after unlearning is not necessarily erased from every internal representation.

A mechanistic circuit discovered by one tool may be partial.

A model that cannot reproduce a sequence on command may still have been influenced by it.

The opposite errors are equally dangerous. We can demand so much certainty that we discard every imperfect method, or we can treat a suggestive attribution graph as a court transcript from inside the machine.

Neither position is scientific.

The useful stance is forensic.

Collect multiple traces. Ask whether they agree. Preserve alternative explanations. Intervene where possible. Compare before and after. Prefer methods that can fail visibly. Record what was not observed. Separate a trace of correlation from evidence of causation.

This sounds slower than simply asking the model why it answered.

It is.

That is part of its value.

A model can generate an explanation in seconds. The explanation may be accurate, useful, incomplete, or a plausible story assembled after the behavior has already been produced. Self-report is evidence, but it is an unusually convenient kind of evidence, and convenience deserves suspicion when the system being studied is optimized to produce convincing language.

Traces make explanation harder in a productive way.

They force the question outside the narrative the model can tell about itself.

What changed in the weights?

What changed in the activations?

What changed between versions?

Which training examples align with the behavior?

When did the capability first become detectable?

What survives an intervention?

What disappears?

What returns?

In July 2026, Anthropic researchers reported evidence of a small set of internal patterns in Claude with properties they compared, carefully, to a global workspace. They called the space J-space, after the Jacobian-based method used to find it. The philosophical questions are obvious and probably irresistible. Is a machine conscious? Is an internal representation a thought? Does a model know what it is doing?

This book is interested in a more modest fact.

The research became possible because there was something to measure between input and output.

A trace.

Once internal states can be compared, manipulated, and related to behavior, arguments that were previously metaphysical can acquire experimental handles. The experiments may be crude. The interpretation may be contested. But the question has moved.

That movement is the story.

Artificial intelligence is entering an era in which the systems are too capable for outputs alone to explain them, too distributed for source-code inspection to explain them, and too consequential for “the model learned it somewhere” to remain an adequate account.

We will need histories.

Not biographies written as marketing copy.

Histories made of evidence.

There is a practical reason to build them now.

The past disappears cheaply.

Training runs are expensive, but storage policies are mundane. Intermediate checkpoints get deleted. Dataset versions are overwritten. Experiment dashboards decay. Fine-tuning records are split across vendors. Synthetic data loses its provenance. A base model is updated and the old one becomes unavailable. A safety intervention is merged into a later release and nobody outside the organization can cleanly compare before and after.

Once the traces are gone, some questions cannot be reconstructed later at any price.

You cannot diff a model against a checkpoint that was never saved.

You cannot reliably trace an example to a dataset version that no longer exists.

You cannot determine when a behavior first emerged if every intermediate model was discarded.

You cannot audit the effect of an objective change if the objective history was not recorded.

This gives machine-learning traces an unusual property.

Their future value is unknown at the moment when preserving them is easiest.

That is exactly why archives exist.

We do not preserve every scrap because we already know which question a future investigator will ask. We preserve selectively because future questions are partly unknowable.

The AI industry has spent years asking what models can become.

A second question is arriving behind it.

What can we know about how they became it?

This book follows the evidence.
