# Grokking After the Test Is Already Passed

The model has passed the test.

Training accuracy is essentially perfect.

The obvious thing to do is stop.

In some experiments, that is exactly when the interesting learning begins.

Grokking became famous because it made this contradiction visible. A neural network trained on a small algorithmic task can memorize the examples it has been shown, reach near-zero training error, and remain poor at the same underlying rule on held-out examples. Keep training and, after a long delay, test performance can rise dramatically.

The system appears to understand only after it has already learned to perform perfectly on the material it was given.

The word grokking came from science fiction, where it means something closer to deep understanding than ordinary knowledge. Machine-learning researchers adopted it playfully. The danger is taking the name too literally.

A network that generalizes modular arithmetic has not experienced a flash of mathematical enlightenment.

The scientifically useful fact is narrower.

There can be a large temporal gap between fitting the training set and developing an internal solution that generalizes well.

That gap is a trace.

It tells us the final performance score concealed at least two different internal regimes.

The first solved the observed examples.

The later one solved more of the underlying structure.

This is why grokking belongs in a book about history rather than a book about surprising benchmarks.

If we retain only the final model, the distinction disappears.

The final model is good on the training set and good on the test set. We might tell a simple story: the network found the rule.

The checkpoints show a less tidy process.

For a substantial period, the network had found another way to satisfy the training objective.

It memorized enough of the observed cases to perform perfectly without yet behaving as though it had compressed the task into the general solution later visible in testing.

The path reveals competition between solutions.

That phrase needs care.

It is tempting to anthropomorphize the network as choosing between memorization and understanding.

What is actually happening is optimization in a parameterized system under a particular training regime. Several internal configurations can achieve low training loss. Some configurations generalize better than others. Regularization, parameter norms, optimization dynamics, and task structure can change which configuration becomes favored over time.

The remarkable part is that the visible metric can remain flat while the internal competition continues.

A plateau is not always inactivity.

In 2023, Neel Nanda and colleagues used mechanistic interpretability to examine grokking in a small transformer trained on modular addition. They reverse-engineered the learned algorithm and found a way to describe hidden progress during the period when test accuracy still looked unimpressive.

Their analysis separated the development into phases.

The network first memorized.

A generalizing circuit then formed.

Later training suppressed or cleaned up memorizing components until the general solution dominated the output.

The sharp jump in test accuracy looked discontinuous from the outside.

Inside, important parts of the change were already underway.

This is one of the best demonstrations of what a trace can do to the concept of emergence.

An emerging capability can look sudden because the measurement is coarse.

A better internal measure can reveal continuous development underneath.

This does not prove that every apparently emergent capability in large language models is secretly smooth.

Some thresholds are real properties of tasks. A system that must coordinate several subskills can fail until all are present. A benchmark can convert continuous probability changes into a binary success. Scaling can produce genuinely nonlinear interactions. Different runs can behave differently.

The grokking lesson is methodological, not universal.

Before declaring that a capability appeared from nowhere, search for a progress measure.

That search changes the questions researchers ask during training.

A benchmark gives us one coordinate.

Can the model solve the task?

A progress measure tries to identify something inside the learning process that moves before the benchmark does.

For grokking, mechanistic understanding made such measures possible. Once the researchers knew the generalizing algorithm, they could quantify the strength of the relevant circuit and the extent of competing memorization. Those quantities moved while the test score remained flat.

The evaluation was late to the event.

This possibility matters far beyond modular arithmetic.

Imagine a model developing a dangerous capability.

Behavioral tests do not detect it at checkpoint 10.

They do not detect it at checkpoint 20.

At checkpoint 30, the capability suddenly becomes reliable enough to cross the test threshold.

If an internal progress measure had been rising since checkpoint 12, the apparent surprise was partly a measurement failure.

The difficult scientific problem is finding the progress measure before the capability becomes obvious.

Retrospective interpretability is easier.

The final model tells us what mechanism to search for. We can then rewind the checkpoints and find when that mechanism began to form.

Prospective prediction is harder because we do not know which internal changes will matter.

A frontier model may develop thousands of features, circuits, and representational reorganizations. Most will not correspond neatly to a headline capability. Some will be temporary. Some will support several behaviors. Some will matter only in combination.

The historical record creates the dataset from which predictive markers can eventually be learned.

This is another reason to preserve checkpoints even when current interpretability is inadequate.

A future research team may discover that a certain internal change reliably preceded a class of capabilities across many old runs. Without the old states, the hypothesis cannot be tested retrospectively.

The archive becomes training data for the science of training.

There is an irony in that sentence.

We build models by keeping data about the world.

We may understand models by keeping data about models becoming models.

The second dataset is younger.

Grokking also gives us a way to think about stopping rules.

Training systems need to decide when continued optimization is no longer worth the compute. If training loss has flattened and validation performance has stopped improving, early stopping can prevent overfitting and save resources.

Grokking shows that in some regimes a long validation plateau can precede later generalization.

This does not make early stopping foolish.

Most plateaus do not contain hidden miracles waiting for enough electricity. The original grokking experiments were constructed in specific settings where extended training and regularization altered which solution the network preferred. Continuing every run indefinitely would waste staggering resources.

The useful question becomes diagnostic.

What evidence distinguishes a dead plateau from a developmental one?

That is a trace question.

Are internal representations still changing?

Is a generalizing circuit strengthening?

Are parameter norms moving toward a different regime?

Are difficult examples becoming more coherent even though average validation accuracy is flat?

Do other probes improve?

Does the same pattern predict later generalization across repeated runs?

A training curve alone cannot answer.

A richer history might.

This is where optimization becomes less like watching a score and more like monitoring a process.

The distinction resembles medicine.

A patient's headline outcome may not change for weeks while biomarkers move. The biomarker matters only if it has been validated as meaningfully related to the future outcome. A number that changes without predictive value is noise.

Machine-learning progress measures need the same discipline.

An internal feature that grows before one grokking event is interesting.

A measure that repeatedly forecasts the transition across seeds, model sizes, tasks, and interventions is more useful.

A measure that can be manipulated to alter the transition is stronger still.

The path from correlation to mechanism is the same one that runs through the rest of this book.

Observe.

Compare.

Intervene.

Repeat.

The historical record makes the sequence possible.

Grokking also complicates the meaning of memorization.

Memorization is often spoken of as a failure mode opposed to genuine learning.

In the grokking trajectory, memorization can be a stage.

The model first constructs a solution that fits the examples directly. A more general mechanism later becomes competitive. Training eventually favors the latter strongly enough that held-out performance improves.

This does not mean memorization is always a harmless prelude to abstraction.

A large model can memorize sensitive text and retain it indefinitely. A classifier can memorize noise. A system can fit shortcuts that never yield to better structure. The transition depends on the objective, regularization, data, capacity, and optimization.

The point is that the words “memorized” and “generalized” can describe different times in the same model's life.

The final checkpoint may contain residues of both.

This raises a question that becomes central later in the book.

When the general solution wins, what happens to the memorized one?

Does it disappear?

Does it weaken?

Does it remain encoded but cease to control the output?

Can a prompt or intervention recover it?

Does later fine-tuning revive it?

The answer matters for privacy and unlearning as much as for theory.

A behavior can stop being visible without its developmental trace being erased.

Grokking gives us a clean laboratory in which to study this distinction because the competition between memorizing and generalizing components can sometimes be reverse-engineered.

Larger models will be harder.

Their “solutions” are not one algorithm for modular addition. They contain overlapping representations learned from enormous mixtures of text, code, images, preferences, tools, and synthetic data. A capability such as legal reasoning or multilingual translation is not one circuit waiting to be named.

The difficulty should not make the small experiments irrelevant.

Model organisms have always taught science by making mechanisms tractable.

Fruit flies are not humans. Bacteria are not ecosystems. A one-layer transformer doing modular arithmetic is not a frontier language model.

The purpose of the small system is not resemblance in every detail.

It is experimental visibility.

Grokking shows that a visible jump can sit on top of a hidden developmental sequence.

That principle is worth carrying upward cautiously.

The most interesting implication concerns scaling laws and emergence.

Large-model capability debates often focus on whether performance changes smoothly with scale or whether qualitatively new abilities appear at thresholds. The answer depends partly on how tasks are measured. A probability can improve smoothly while pass/fail accuracy jumps. A multi-step task can remain at zero until enough component probabilities improve together. Benchmark saturation can hide progress at the top end.

Training time introduces another hidden axis.

A model of fixed size can move through capability regimes as optimization continues.

Scale is not only parameters and data.

It is also developmental depth.

Two checkpoints with identical architecture and dataset can be functionally different organisms because one has undergone more optimization.

Again, organism is metaphor.

The precise point is that “the model” is underspecified without time.

A 7-billion-parameter architecture at step 20,000 is not the same scientific object as the same architecture at step 200,000.

We know this operationally.

Grokking makes us feel it conceptually.

The model can pass through distinct modes of solving the same task.

This has consequences for distillation.

Suppose a teacher model is captured at the end of training and used to train a smaller student. The student sees the outputs of the mature solution, not the historical competition that produced it. Distillation may transfer capability without transferring developmental path.

A model lineage can therefore contain discontinuities.

The child can inherit behavior without inheriting the parent's history.

This matters when we later try to trace origin.

A distilled model may owe a behavior to training data it never saw directly because its teacher had already compressed the influence into outputs. Synthetic data can create the same effect. A model generates examples shaped by its own learned history; a later model trains on those examples; influence becomes second-order.

The trace now crosses generations.

Grokking begins as one model reorganizing itself.

The larger story of artificial intelligence will include models teaching models, distilling models, merging models, fine-tuning models, and generating the data that later systems learn from.

Development becomes genealogy.

That is why the apparently narrow question “when did test accuracy jump?” opens onto a much broader science.

If we can identify hidden progress before visible performance changes, perhaps we can identify inherited progress before provenance disappears.

If we can detect generalizing circuits forming during one run, perhaps we can ask whether a student model acquires analogous structure immediately from distilled data.

If memorization is cleaned up rather than erased, perhaps later descendants carry residue without carrying the original examples.

These are not questions the final benchmark can answer.

The benchmark sees only success.

History distinguishes the routes to success.

There is a cultural lesson here too.

Machine learning rewards release moments.

The model that crosses a benchmark threshold gets a name. The capability that becomes visible gets a headline. The before-and-after graph shows the jump.

Development is less photogenic.

A feature slowly strengthens. A competing mechanism decays. A representation becomes cleaner. An ambiguous set of examples moves toward confidence. The work looks uneventful until the outcome arrives.

Grokking teaches suspicion of the dramatic moment.

The dramatic moment may be real.

It may also be the point at which our crude instrument finally notices a process that has been underway for a long time.

The way to tell is to preserve the trace and build a better instrument.

The model had already passed the training test.

That was not the end of learning.

It was the point at which the visible score stopped telling the most interesting part of the story.
