# Easy, Hard, Ambiguous

The first temptation after drawing a data map is to clean it.

Easy examples look redundant.

Hard examples look broken.

Ambiguous examples look expensive.

An efficient engineer can imagine a satisfying afternoon.

Delete the obvious cases. Fix or remove the difficult ones. Keep a clean middle. Train faster.

The map will look better.

The model may get worse.

This is the problem with categories that describe learning dynamics. They can sound like verdicts when they are really clues.

An example that is easy for a model can be doing useful work precisely because it is easy. It can establish the broad regularities of the task, stabilize optimization, and provide repeated evidence that prevents the learner from chasing every difficult exception.

An example that is hard can be wrong.

It can also be rare.

An example that is ambiguous can be poorly written.

It can also live on the boundary where a model must learn the distinction the task actually cares about.

The interesting question is not which bucket an example enters.

It is why.

Dataset cartography made this visible by showing that the regions play different roles. In the experiments reported by Swayamdipta and colleagues, the easy-to-learn region was the most populous and important for optimization. Hard-to-learn examples often contained label problems. Ambiguous examples, whose confidence varied more over training, were especially useful for out-of-distribution generalization in the settings they examined.

This should bother anyone who thinks data cleaning means making a dataset easier to learn.

Sometimes the difficult edge is where the task lives.

Consider a sentiment classifier.

“I loved it” is easy.

“I hated it” is easy.

“I wanted to love it” is not.

The last sentence may be difficult because it contains both a positive verb and a negative implication. A crude system can solve many ordinary cases by counting familiar sentiment words. The ambiguous example forces it to represent something closer to composition, context, or discourse.

Now imagine the same phrase in a different task.

If the task is simply detecting whether the word “love” appears, the example is easy again.

Difficulty belongs to a relationship.

This fact becomes clearer when examples move between categories across models.

A small classifier may find a case hard because it lacks capacity.

A larger model may find the same case easy because pretraining supplied the missing concept.

A model trained on one language variety may struggle with an expression that another model has seen repeatedly.

The example did not improve.

The learner changed.

This makes hard examples diagnostically rich.

Suppose a cluster of records stays hard across architectures, random seeds, and training runs.

There are several possibilities.

The labels may be wrong.

The task definition may be underspecified.

The examples may require information absent from the input.

They may be genuinely rare.

They may expose a capability no current model possesses.

Those are very different problems.

A static error list collapses them.

Training dynamics begin to separate them.

The older work on example forgetting gives us another useful lens.

Toneva and colleagues defined a forgetting event as a transition from an example being classified correctly to being classified incorrectly later in training. This is a beautifully modest measurement. It does not claim to know what a model “remembers” internally. It simply watches whether competence on a case persists.

Some examples were forgotten repeatedly.

Some were essentially never forgotten once learned.

The pattern was stable enough across the benchmark models they studied that unforgettable examples could often be identified even when the architecture changed.

This created an uncomfortable question.

If an example is learned once and never forgotten, how much future value does it have?

The answer depends on what “value” means.

Toneva and colleagues showed that large fractions of unforgettable examples could sometimes be omitted while preserving strong generalization in their experimental settings. This suggests substantial redundancy.

But redundancy is not worthlessness.

A bridge contains many bolts that could be removed without immediate collapse.

That does not make each bolt valueless.

Redundant examples can make training robust to randomness, missing data, distribution change, and different initialization. They can teach the same broad regularity through different surface forms. They can protect against a pruning decision based on one model’s quirks.

The right lesson is not “delete easy data.”

It is “easy data and hard data contribute differently.”

This distinction matters enormously at scale.

The rhetoric of modern machine learning often celebrates dataset size because size is easy to count.

A trillion tokens sounds more serious than a hundred billion.

A hundred million images sound more serious than ten million.

But raw count ignores dependence.

If the additional data are near-duplicates, they do not add the same information as genuinely different examples.

If they come from the same source, they may reinforce the same bias.

If they repeat the same easy pattern, they may improve fluency without strengthening the rare boundary cases that matter for safety or robustness.

The learner’s trajectory can reveal this hidden structure.

One group of examples may settle early.

Another may continue producing gradient disagreement late into training.

A rare slice may remain unstable even as the aggregate loss falls smoothly.

The average says the model is learning.

The trace says what kind of learning is being left behind.

This gives new meaning to the phrase “hard example mining.”

The phrase is common in machine learning. Systems often focus training on mistakes, low-confidence cases, rare classes, or examples that generate large loss. The intuition is obvious: do not waste effort on what the model already knows.

Sometimes that works.

Sometimes it creates a distorted education.

A student preparing for an exam could spend all week studying only the questions she gets wrong. That may be efficient if the mistakes reveal a small set of missing concepts.

It may be disastrous if the wrong answers are random, the questions are mislabeled, or the hard cases are obscure exceptions that crowd out the basic structure of the subject.

Models face the same allocation problem.

Training attention is finite even when compute budgets are enormous.

Which examples deserve another encounter?

The map can inform the answer.

It cannot decide it alone.

This is where data valuation becomes relevant.

Ghorbani and Zou’s Data Shapley work asked how much individual data points contribute to a model’s performance. The method borrows the Shapley-value idea from cooperative game theory: a participant’s contribution is assessed by its marginal value across different coalitions.

Applied to data, the question becomes relational.

How much does this example improve the trained predictor when considered against different subsets of the other available examples?

The resulting value depends on the learning algorithm, the performance metric, and the surrounding dataset.

This is exactly what intuition should tell us.

A rare cancer case can be extremely valuable for a classifier evaluated on rare cancers and nearly irrelevant for a task measuring something else.

The ten-thousandth near-identical photograph may add little after the first nine thousand.

A mislabeled record can have negative value for one objective.

A boundary example can become more valuable when the evaluation distribution contains more boundary cases.

There is no universal price tag embedded in the row.

This is a hard message for data markets because markets like units.

One image.

One document.

One medical record.

One hour of audio.

One labeled example.

But machine-learning value is conditional.

The same record can matter differently to two models.

This complicates legal and economic debates about compensating data contributors, but the scientific point comes first.

A training set is not a sack of interchangeable grains.

It is a system of interacting evidence.

Easy, hard, and ambiguous examples are part of that interaction.

The categories also expose annotation as a scientific process rather than clerical preparation.

Suppose an example remains hard across training.

A data-cleaning team reviews it and finds that human annotators disagree.

One response is to force a single label.

Another is to record the disagreement.

The choice changes what the model is being taught.

If the task itself contains genuine uncertainty, collapsing disagreement into a clean label can destroy information.

Medical diagnoses can be uncertain.

Moderation judgments can depend on context.

Legal categories can have contested boundaries.

Natural language is full of sentences that support multiple readings.

A dataset can appear cleaner by hiding this fact.

The model will eventually rediscover it as instability.

Ambiguous examples are therefore interesting because they can expose both flaws in annotation and genuine structure in the world.

The model’s uncertainty is not automatically wise.

It may be confused for a bad reason.

But repeated ambiguity across strong models, careful labels, and different training runs can become evidence that the task boundary itself deserves scrutiny.

This is a powerful inversion.

Instead of asking only whether the data are good enough for the model, ask what the model’s learning dynamics reveal about the data-generating process.

Machine learning becomes an instrument for studying the dataset.

This is one reason the phrase “training trace” deserves to be taken seriously.

The trace is not merely metadata about model development.

It can be a probe of the environment the model learned from.

The easy region tells us where the dataset and model agree quickly.

The hard region tells us where they fail to reconcile.

The ambiguous region tells us where the relationship is unstable.

These are scientific observations.

They require interpretation.

There is a darker version of the same idea.

A spurious correlation can be easy.

Suppose photographs of cows usually contain green grass and photographs of camels usually contain sand. A model may learn landscape cues before learning the animal itself. The examples look easy. Confidence rises. Training accuracy improves.

The data map does not automatically warn us that the learner used the wrong feature.

Ease can be evidence of a shortcut.

This means training dynamics work best when paired with controlled counterfactuals.

Change the background.

Perturb the irrelevant feature.

Evaluate on a shifted distribution.

Ask whether the same easy examples remain easy when the shortcut breaks.

A trace becomes more informative when the environment is manipulated.

This principle will recur throughout the book.

Observation narrows the story.

Intervention narrows it further.

The same applies to hard examples.

If a difficult case becomes easy after correcting a label, the explanation was probably annotation.

If it becomes easy after adding one missing feature, the problem was information.

If it remains hard after both, the model may lack the necessary representation.

If a larger architecture solves it, capacity matters.

If every model struggles and humans disagree, the task may be intrinsically ambiguous.

Difficulty is not an answer.

It is a fork in the investigation.

This is why a good data practice should preserve the history of curation decisions.

A cleaned dataset can be less scientifically valuable than a messy one if the cleaning process erases the evidence of disagreement.

Which examples were relabeled?

Which were dropped?

Why?

Which models found them difficult?

Did difficulty persist after the label changed?

Did removing them improve in-distribution accuracy while hurting transfer?

Without the history, the final dataset looks inevitable.

It is not.

It is the product of decisions.

Those decisions become part of model ancestry.

This connects the data map back to the checkpoint.

A checkpoint series tells us how the model changed.

A data revision history tells us how the environment changed.

Put the two together and training becomes a coupled timeline.

At step one hundred thousand, a mislabeled cluster is removed.

At step one hundred twenty thousand, a benchmark improves.

At step one hundred fifty thousand, a feature becomes detectable.

The sequence does not prove causation.

It gives us a candidate story that can be tested.

This is much stronger than looking at the final model and saying, “The data cleaning must have helped.”

History gives claims dates.

Dates create opportunities for comparison.

The larger lesson is uncomfortable for anyone hoping machine learning can be made legible by one score.

There is no single number for data quality.

There is no universal ranking of examples from useful to useless.

There is no final map independent of the learner.

The system is dynamic.

That does not make measurement pointless.

It makes measurement plural.

Confidence trajectories.

Forgetting counts.

Marginal value estimates.

Influence scores.

Human disagreement.

Out-of-distribution performance.

Gradient alignment.

Memorization risk.

Different measurements answer different questions.

A sophisticated data program will eventually treat these as layers.

One layer asks whether the record is legally usable.

One asks whether it is correctly labeled.

One asks whether it is redundant.

One asks whether it is influential.

One asks whether it is associated with a safety failure.

One asks whether it is memorized.

One asks whether it improves a target population.

One asks how its role changes as the model changes.

This is far richer than a spreadsheet column labeled quality.

It is also harder to govern.

The difficulty is worth it because models are becoming too consequential for data curation by intuition alone.

If a safety-critical behavior depends disproportionately on a small ambiguous region, that matters.

If a performance gain comes mostly from easy examples that encode a shortcut, that matters.

If hard examples are mostly annotation errors, that matters.

If they are rare but real failure modes, deleting them would be a mistake.

The map is valuable precisely because it makes these cases look different.

The word ambiguous deserves one last defense.

In ordinary conversation, ambiguity is a defect to remove.

A contract should be unambiguous.

A safety instruction should be unambiguous.

A database schema should be unambiguous.

Learning is different.

The ambiguous example can mark the place where simple rules stop working.

A student who never encounters ambiguity can perform well on rehearsed exercises and collapse in practice.

A model trained only on easy cases can do the same.

This is why the most uncomfortable examples can carry disproportionate educational value.

They force the learner to resolve conflicts among features.

They reveal whether the representation is deep enough to support distinctions that surface statistics cannot.

They test whether the model has learned the task or merely the easiest route through the training set.

But ambiguity is not automatically noble.

Some ambiguous examples are just bad examples.

Some are missing context.

Some are mislabeled.

Some are artifacts of annotator disagreement that should have been represented explicitly.

The map does not absolve us from judgment.

It tells us where judgment should be concentrated.

That is a more realistic role for machine-learning traces than automatic truth.

The trace points.

The researcher follows.

The next chapters move from examples to mechanisms.

So far, we have watched individual cases become easy, hard, or unstable.

Now imagine watching an internal computational structure do the same thing.

At one checkpoint, it is absent.

At another, a weak pattern appears.

Later, the pattern sharpens.

At roughly the same time, a capability improves.

The dataset has a map.

The model can have a developmental anatomy too.

The question is no longer only which examples the system learned.

It is when the machinery for using them came into existence.