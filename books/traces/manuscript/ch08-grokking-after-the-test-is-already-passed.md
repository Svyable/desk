# Grokking After the Test Is Already Passed

The model had already won.

That was the strange part.

On the training set, there was nothing left to prove.

Accuracy was effectively perfect. The examples it had been asked to memorize or solve were solved. If training had stopped there and the only question had been whether the model could fit the data, the experiment would have looked complete.

But on held-out examples, the model was still bad.

So training continued.

For a long time, the test performance barely moved.

Then it did.

Generalization climbed sharply, long after the training set had already been mastered.

The researchers called the phenomenon grokking.

The name came from science fiction, but the scientific value was almost embarrassingly concrete.

A final model can hide the order in which competence arrived.

In the experiments reported by Alethea Power and colleagues, small neural networks were trained on algorithmic tasks such as modular arithmetic using limited training data drawn from a larger finite problem space. The models could overfit the training examples first. Only after much more optimization did some runs generalize well to held-out cases.

The endpoint looked intelligent in the narrow sense the task required.

The history looked wasteful, delayed, and revealing.

This is a perfect example of why a model’s developmental record can matter more than a benchmark score.

Suppose you receive only the final checkpoint.

It performs almost perfectly on training and test data.

You might infer that the model discovered a general algorithm during the same period in which it learned the training cases.

You would be wrong about the chronology.

Earlier checkpoints show a system that had solved one problem but not the other.

It could fit the examples without yet applying the underlying structure broadly.

The gap between those states is the experiment.

Grokking became famous partly because it produced such photogenic curves.

Training performance saturates.

Test performance remains poor.

Then test performance rises.

A flat region followed by a sharp change invites dramatic language.

The model suddenly understands.

A rule snaps into place.

Memorization becomes reasoning.

The machine has an epiphany.

That language is tempting and mostly unhelpful.

The more interesting work began after the curve was noticed.

Researchers asked what had been changing internally during the apparently uneventful interval.

One line of work showed that the jump in behavior can sit on top of much smoother internal progress.

In 2023, Neel Nanda and colleagues reverse-engineered small transformers trained on modular addition. They found a structured algorithm involving Fourier-like representations. More importantly for this book, they identified progress measures that changed continuously through training even when the held-out accuracy looked stalled.

Their analysis separated training into phases they described as memorization, circuit formation, and cleanup.

The public score made the middle period look empty.

The internal trace did not.

This is the central lesson.

A capability can look discontinuous because our measurement is coarse.

The mechanism can be developing before the benchmark crosses the line that makes us notice it.

This problem is much larger than grokking.

Machine-learning discourse is full of thresholded outcomes.

Pass or fail.

Exact match or not.

Solved benchmark or unsolved benchmark.

Safety violation or no violation.

Tool call succeeds or fails.

A model can move substantially underneath one of these thresholds while the published score stays flat.

Then the last increment looks magical.

History converts magic into accumulation.

Not always smooth accumulation.

Learning can genuinely reorganize.

Optimization can move between basins. Features can become useful only once complementary features exist. A capability can require several components whose individual improvements do little until the combination works. Training can contain phase transitions in meaningful senses.

The point is not that everything is secretly gradual.

The point is that the claim “this emerged suddenly” depends on what was measured.

Grokking made that dependence impossible to ignore.

This is why progress measures matter.

A progress measure is an attempt to find a quantity that tracks the development of a capability before the capability itself becomes fully visible.

The measure might be mechanistic.

Strength of a circuit.

Alignment of a representation with a known structure.

A Fourier component.

An attention pattern.

A linear probe.

It might be behavioral but more sensitive than the final benchmark.

Partial credit.

Calibration.

Error type.

Performance on easier subcases.

Robustness under perturbation.

The right progress measure turns an apparent jump into a trajectory.

This is not merely explanatory elegance.

It has operational value.

If a dangerous capability is likely to appear late in training, a useful progress measure might warn that the necessary internal machinery is strengthening before the capability becomes reliable enough to trigger a standard evaluation.

If a desired capability is developing slowly beneath a flat benchmark, the measure can prevent an engineer from terminating a promising run too early.

If a safety intervention suppresses the visible behavior while the internal capability continues to strengthen, a developmental measure can reveal the mismatch.

The difficulty is finding measures before hindsight makes them obvious.

Grokking research illustrates both sides of this problem.

After the behavior is known, researchers can search the training history for internal quantities that track it.

That is scientifically useful.

Forecasting is harder.

A progress measure that is discovered after the test score jumps is not automatically a predictor for future models.

It may be specific to the task, architecture, optimizer, data regime, or even the interpretability lens used to find it.

The next test is transfer.

Does the measure predict grokking time across random seeds?

Across dataset sizes?

Across regularization settings?

Across related tasks?

Across architectures?

Does an intervention that changes the measure shift the eventual generalization transition?

The historical frame insists on these questions because a good story after the fact is cheap.

A reliable developmental law is expensive.

The original grokking experiments also came with an important boundary.

They used small algorithmically generated datasets.

This was a strength, not a weakness, because it made the distinction between memorizing a finite subset and discovering a rule unusually clear.

It also means we should resist turning grokking into a universal description of deep learning.

Large language models train on messy mixtures, not modular arithmetic tables.

Their training distributions are vast and overlapping with many evaluations. Their objectives are broad. There may be no clean moment when the training set is “solved.” Generalization is not one scalar phenomenon.

A language model can generalize compositionally in one domain, memorize in another, interpolate in a third, and rely on retrieval or prompting in a fourth.

The grokking story travels best as a methodological warning.

Do not infer developmental history from the endpoint.

Do not assume a flat external metric means nothing important is changing.

Do not call a capability sudden until you have looked for lower-level progress measures.

Do not assume training-set mastery and generalization are the same event.

Those lessons survive the toy setting.

The toy setting gives us another gift.

It can be fully dissected.

In modular addition, the correct algorithm has mathematical structure that researchers can recognize. Nanda and colleagues could inspect the learned representations and identify a Fourier-based computation. They could intervene in the relevant space. They could watch memorizing components and generalizing components change over training.

This is rare in large models.

We usually do not know the complete target algorithm a language model should learn.

We do not know whether there is one algorithm.

The system may combine heuristics, memorized fragments, abstract features, and context-sensitive strategies.

Small grokking experiments therefore function like a wind tunnel.

The airplane is not the wind tunnel.

But the controlled setting can reveal principles of lift that would be difficult to isolate in a storm.

One of those principles is competition among solutions.

A model can fit training data in more than one way.

One solution memorizes the observed cases.

Another captures a rule that extends.

If both lower training loss, optimization can move through a period where the memorizing solution dominates before the generalizing structure becomes strong enough to take over.

This gives a more useful mental picture than “the model suddenly understood.”

There can be multiple internal economies competing for the same behavior.

One is locally expedient.

One compresses the task more generally.

Training changes their relative strength.

Regularization matters because it changes the price of those solutions.

Weight decay, data size, initialization, optimizer choice, and task structure can affect whether and when grokking occurs. Later research showed that grokking-like behavior could be induced outside the original modular-arithmetic setting and could also be eliminated in settings where one changed the geometry of the problem.

This is useful counterevidence to any mystical reading.

Grokking is not an awakening encoded in the essence of neural networks.

It is a phenomenon produced by particular training conditions.

Change the conditions and the phenomenon changes.

That makes it more scientific.

A phenomenon that depends on identifiable conditions can be manipulated.

A miracle cannot.

Andrey Gromov’s analysis of modular-arithmetic grokking pushed in this direction by constructing settings where simple networks learn interpretable feature maps for the task. Other work such as Omnigrok explored grokking beyond purely algorithmic datasets and emphasized the relationship between training and test loss landscapes.

These accounts do not reduce to one universally accepted theory of grokking.

That disagreement is healthy.

The curve is an observation.

The mechanism is a research program.

This distinction is exactly what a historical science needs.

A trace can be stable even while its interpretation changes.

The checkpoints remain.

The training and test curves remain.

The internal activations remain if they were recorded.

Different theories can return to the same developmental evidence.

This is another reason preserving traces matters.

Today’s explanation may not be tomorrow’s.

If only the final model survives, later researchers cannot revisit the process with better tools.

Imagine if the original grokking researchers had released only their final checkpoint.

The model would solve modular arithmetic.

Interesting, perhaps.

But the central phenomenon would disappear.

The scientific artifact was not the model alone.

It was the trajectory.

This should change how machine-learning results are archived.

A paper about a capability often publishes final benchmark numbers and enough methodological detail to describe training. Sometimes checkpoints are released. Sometimes curves are shown. Rarely is the developmental record treated as a first-class object with the expectation that future researchers will query it for new questions.

Storage cost explains part of this.

So does habit.

The culture of machine learning rewards the finished model.

Best score.

Released weights.

Leaderboard result.

Deployment.

The intermediate states are scaffolding.

Grokking is a case where throwing away the scaffolding would throw away the discovery.

This suggests a practical archival rule.

When behavior changes nonlinearly, preserve the neighborhood.

If an evaluation jumps between checkpoints, increase checkpoint density around the transition if the run is still active.

Preserve relevant optimizer and data-state metadata.

Record the evaluation suite at adjacent checkpoints.

Capture internal probes if available.

Do not save everything forever.

Save enough to reconstruct the transition.

This is analogous to increasing measurement frequency during an earthquake or a medical crisis.

Stable periods can be sampled sparsely.

Interesting transitions deserve resolution.

The challenge is that you do not always know which transitions will be interesting until later.

This argues for layered retention.

Cheap traces can be dense.

Losses, evaluation results, gradient summaries, feature statistics, and hashes may be retained frequently.

Full checkpoints can be sparse.

When cheap traces show unusual change, richer artifacts can be preserved.

A future training system could do this automatically.

Developmental observability would become part of the training infrastructure.

The system would not merely optimize the model.

It would monitor the learning process as an object of science.

This resembles what mature engineering disciplines do with complex machines.

An aircraft engine is not monitored only by whether the plane lands.

Sensors track temperatures, pressures, vibration, fuel flow, and other variables throughout operation. A deviation can matter before failure.

A chemical plant is not judged only by final product output. Process variables matter because they reveal whether the system is moving toward danger.

Machine learning still leans heavily on end-state quality.

Training loss is monitored, of course. Evaluations run during training. But the internal developmental state is often much less observable than the operational state of other high-consequence systems.

Grokking is a warning that loss alone may not tell the story we care about.

The model can fit the training set while its generalization mechanism is still changing underneath.

The same pattern may occur in other forms.

A model can maintain stable average loss while rare capabilities emerge.

A safety metric can look unchanged while a harmful behavior becomes easier to elicit.

A feature can become more linearly accessible without affecting the main benchmark.

A fine-tuning run can preserve overall performance while reorganizing a narrow behavior.

The historical view asks us to instrument these possibilities rather than discover them by surprise after release.

There is a philosophical temptation here too.

Grokking sounds like understanding.

The word itself encourages anthropomorphism.

A human studies a subject mechanically, then one day it clicks.

The equations become intuitive.

The learner sees the pattern.

The neural-network curve feels familiar.

That resemblance can be suggestive.

It is not evidence that the subjective process is similar.

A model changing from memorization-heavy behavior to rule-like generalization does not imply an inner moment of comprehension.

We have enough measurable phenomena without inventing one.

The safer language is developmental.

The representation changed.

The circuit strengthened.

Generalization improved.

Memorizing components weakened.

The capability crossed a behavioral threshold.

Those claims can be tested.

The machine does not need a revelation for the history to be interesting.

In fact, the history is more interesting without the metaphor.

The lesson of grokking is not that machines can have epiphanies.

It is that an endpoint can conceal a long disagreement between what the model can do on familiar cases and what structure it has learned that survives beyond them.

That disagreement leaves traces.

The traces can show us competing strategies.

They can reveal hidden progress.

They can show when a seemingly sudden behavior was actually prepared by gradual internal change.

They can show when training conditions determine whether the phenomenon appears at all.

Most importantly, they can warn us against reading the final model backward.

The final checkpoint is a survivor.

It contains the solution that won.

It does not display all the solutions that competed along the way.

The next act of the book turns from developmental timing to a different kind of residue.

Some training examples do not merely shape a general rule.

They survive with unusual specificity.

A sequence can be extracted.

A membership can be inferred.

A phrase can remain stubbornly recoverable.

Generalization leaves ancestry.

Memorization can leave a scar.