# The Example Behind the Answer

When a machine gives a wrong answer, the natural question is where it got the idea.

The wording is revealing.

We do not ask only what calculation produced the output. We ask about origin. Somewhere behind the answer, we suspect, there was data.

This suspicion is sometimes correct in the most literal way. A language model can reproduce a sequence that appeared in training. A classifier can inherit a mislabeled example. A recommendation system can learn a pattern from biased historical behavior. A vision model can associate a class with a background artifact because the training images made the shortcut useful.

Other times, the answer has no single source.

The model has learned a pattern distributed across many examples. It combines evidence. It abstracts. It transfers. It forms a representation that no training row states explicitly.

The difference matters because modern arguments about artificial intelligence routinely jump between these two modes without noticing.

When a model produces something impressive, people say it generalized.

When it produces something suspiciously familiar, people say it memorized.

When it produces something harmful, people ask which dataset caused it.

When a copyright dispute arises, the public language often assumes that a particular output can be traced back through the model to particular works as though the weights were a searchable archive.

Sometimes they can be related. Sometimes the relation is weak. Sometimes many examples jointly matter. Sometimes the relevant influence is not semantic resemblance at all.

Data attribution is the attempt to make these distinctions empirical.

The oldest version of the question is simpler than deep learning.

If a statistical estimate depends strongly on one observation, a researcher wants to know. Remove the point and the regression line moves. Upweight the point and the estimate changes. Robust statistics developed tools for reasoning about these sensitivities long before neural networks became the dominant machine-learning paradigm.

Influence functions come from that tradition.

The modern adaptation begins with a counterfactual.

Take one training example and imagine giving it slightly more weight. How would the learned parameters change? How would a particular test prediction change as a result?

In 2017, Pang Wei Koh and Percy Liang showed that this classical idea could be adapted, approximately, to modern machine-learning models. Their work gave researchers a way to trace a prediction backward through the learning process toward training examples that most affected it.

The phrase “trace a prediction” deserves attention.

It does not mean locate the sentence the model copied.

It means estimate sensitivity.

A training point can be influential because it changes a decision boundary, supports a representation, introduces an exception, or pushes against other examples. It may look nothing like the test point to a human observer.

This was one of the surprises of early influence work. The most influential examples could reveal problems that ordinary nearest-neighbor inspection missed. An input could be visually or semantically similar without being especially influential. Another example could look less similar while exerting a stronger training effect.

Similarity asks: what resembles this?

Influence asks: what changed the learner in a way that matters for this?

Those are different questions.

The distinction becomes even more important for language models.

A modern model is trained on overlapping patterns at enormous scale. A question about a city may be supported by travel pages, encyclopedias, government records, sports articles, weather reports, and documents in other languages. A programming answer may reflect millions of code examples, documentation pages, bug reports, tutorials, and synthetic instruction data.

Finding one text that resembles the output can be almost meaningless.

The training corpus is full of resemblance.

Influence is an attempt to recover a stronger relationship.

The difficulty is computational.

Classical influence functions involve second-order information about the loss landscape. Scaling the required calculations to deep networks is hard. The mathematics that behaves politely for convex models can become unruly in non-convex systems. Approximate curvature methods can be expensive. Candidate training sets are enormous.

The history of data attribution since 2017 is largely the history of trying to keep the question while reducing the cost.

TracIn uses gradients and checkpoints.

TRAK, introduced in 2023, uses random projections and ideas related to kernel methods to make attribution more tractable at scale. Its authors demonstrated the approach across image classifiers, vision-language models, and language models. Later theoretical work has examined why the method can preserve useful rankings of influential points even when its approximations are imperfect.

Anthropic researchers approached the problem from another direction in 2023, scaling influence-function analysis to language models with as many as 52 billion parameters using an approximation to curvature called EK-FAC. The experiments were revealing not because they produced a magical provenance engine, but because influence patterns exposed something about generalization itself.

As models grew, influential examples could become more abstractly related to the output. Cross-lingual influences appeared. Programming and mathematical behavior could be connected to examples that were not simple copies of the target. At the same time, the method revealed fragility: changing the order of key phrases could sharply reduce measured influence.

The result was not “we solved training-data provenance.”

It was more interesting.

The ancestry of a behavior could be probed, but the probe had its own geometry.

This is a recurring lesson in traces.

A trace is evidence shaped by an instrument.

The instrument must be studied too.

Imagine a courtroom in which a witness says that a particular training example caused an output because an attribution method ranked it first.

A scientifically literate judge would have several questions.

What definition of influence does the method use?

What counterfactual is being approximated?

How stable is the ranking across checkpoints, seeds, and candidate pools?

Could a semantically similar but omitted training example have taken the top position?

Does high individual influence imply that removing the example would materially change the final behavior after retraining?

What happens if a group of related examples is removed?

How much of the relevant training corpus was searched?

Does the method work equally well for this architecture and training regime?

These are not technical evasions.

They are the difference between a trace and a verdict.

The public appetite for clean provenance will put pressure on the science to overpromise.

There are obvious reasons.

Creators want to know whether their works influenced a generative model.

Developers want to identify corrupted or poisoned data.

Privacy researchers want to understand whether sensitive records left measurable residue.

Safety teams want to trace toxic, deceptive, or biased behavior to training sources.

Dataset curators want to know which examples are useful and which are redundant.

Model builders want to allocate expensive human data toward the examples that produce the most improvement.

Regulators may eventually want evidence about training origins and interventions.

A tool that could answer “which data caused this?” reliably would be immensely valuable.

That value creates danger.

Every approximation will be tempted to become a certificate.

The mature way to think about attribution is narrower and more powerful.

Attribution narrows the hypothesis space.

It tells an investigator where to look.

Suppose a model gives a medical answer containing an unusual but incorrect claim. Keyword search across the training corpus might find thousands of documents discussing the topic. Nearest-neighbor methods might return examples with similar wording. An influence method might identify a smaller cluster of training items that appear to have unusually strong effect on the target prediction.

The investigator can now test.

Remove or correct the cluster and retrain a smaller model or repeat the relevant fine-tuning stage.

Measure whether the answer changes.

Inspect whether the attribution remains stable across related prompts.

Look for shared provenance among the influential documents.

Compare influence at several checkpoints.

Ask whether the behavior is localized or distributed.

The trace becomes the beginning of an experiment.

This is much more useful than asking a model to cite where it learned something.

A language model's self-generated citation can be correct because the model knows the relevant source. It can also be a plausible bibliographic completion. The model's verbal explanation is downstream of the same system we are trying to explain.

Data attribution is different because the evidence is external to the generated story.

The distinction resembles the one between a person's memory and a receipt.

A person can tell you where they think they bought an object. The receipt may contradict them. Neither source is infallible. Together they are better.

The most interesting future systems will combine traces.

A model says that it learned an association from a certain domain.

An influence analysis identifies several training records from that domain.

A checkpoint study shows the behavior strengthening during the stage in which those records were introduced.

A model diff identifies a related internal feature that appears after the stage.

An intervention on that feature changes the behavior.

A retraining experiment without the records weakens the feature and the output.

Now we have a chain.

The chain is still probabilistic. But it is much closer to explanation than a single post hoc narrative.

There is another reason data attribution matters.

It changes the unit of value in datasets.

Machine-learning culture has often measured data in bulk.

Number of examples.

Number of tokens.

Number of images.

Hours of audio.

Coverage across languages or domains.

Scale matters. But a dataset is not a sack of interchangeable observations.

Some examples are redundant. Some are mislabeled. Some represent rare cases. Some teach a boundary. Some are memorized without improving generalization. Some become valuable only in combination. Some actively harm a target behavior.

Influence turns the question from “how much data?” toward “which data changed what?”

That is a different economics.

Suppose two organizations each possess one million examples.

The first dataset contains massive duplication around already-common cases. The second contains difficult, diverse, carefully labeled edge cases that consistently improve performance on important failures. Counting rows treats the datasets as equal.

A trace-based view does not.

The second dataset may leave more useful marks.

This is why data attribution connects to dataset cartography.

One method asks how examples influence outputs.

The other asks how the model's relationship to examples changes through training.

Together they make data dynamic.

An example can be easy, hard, ambiguous, influential, redundant, harmful, memorized, or forgotten depending on what model is learning, when we measure, and which target we care about.

There is no permanent Platonic importance score attached to the row.

Importance is relational.

This idea will complicate claims about ownership.

If one document has tiny individual influence because thousands of near-duplicates carry the same information, does that mean the document contributed nothing?

If a rare work has unusually high influence on a narrow capability, does that make its role more economically significant?

If the model would have learned the same representation from other sources, how should counterfactual value be measured?

If a dataset was used but an unlearning procedure later reduces its measurable influence, what history should remain attached to the model?

The law may answer these questions differently from machine-learning science.

That is normal.

Causation in law has never been identical to causation in physics. Ownership does not depend only on measurable gradient contribution. Consent can matter even when influence is small. Contractual restrictions can apply to use regardless of whether a particular output can be traced.

The science should not pretend to settle normative questions.

It can make the factual substrate richer.

Was the work present?

Was it duplicated?

Was it memorized?

Can its influence be measured?

Does removing it change a target behavior?

Did a larger dataset containing it matter as a group?

Does the influence persist after post-training?

These are better questions than “is the work inside the model?”

Inside is the wrong geometry.

A model is not a warehouse.

The stronger metaphor is a landscape altered by traffic.

A single walker leaves little. Thousands of walkers can make a path. One heavy vehicle can cut a rut. Later construction can erase the surface while the route remains encoded in where the road goes. A storm can expose old layers. Several routes can lead to the same destination.

The metaphor is imperfect, but it captures distributed influence better than storage.

Training data changes what becomes easy for the model.

That change is the trace.

Memorization is the special case in which part of the original traffic pattern remains recognizable enough to reconstruct.

Generalization is the more common and more difficult case in which the model has changed without preserving a readable copy of what caused the change.

Attribution tries to recover ancestry from the altered landscape.

Its future will probably depend less on finding one universal score and more on assembling compatible evidence.

Point influence.

Group influence.

Token-level attribution.

Checkpoint trajectories.

Representational change.

Ablation.

Retraining.

Model diffs.

Unlearning tests.

Privacy probes.

The tools will disagree sometimes.

That disagreement is information.

If a training example looks highly influential under one approximation and irrelevant under another, the investigator should not average the scores and move on. The disagreement may expose an assumption about curvature, checkpoint selection, gradient projection, candidate filtering, or the kind of influence each method measures.

Scientific instruments become trustworthy partly by revealing where they fail.

This book will return often to that idea because the hunger for AI transparency creates a market for certainty that the science cannot yet supply.

A colorful attribution graph can look definitive.

A ranked list can look like provenance.

A top training example can look like a culprit.

The responsible interpretation is more modest.

Here is a trace.

Here is how it was measured.

Here is the counterfactual it approximates.

Here are the alternatives it does not exclude.

Here is the experiment that would make the causal story stronger.

That may sound less satisfying than “the answer came from this document.”

It is also much closer to how learning actually works.

The example behind the answer is sometimes an example.

Often it is a family.

Sometimes it is a sequence of training pressures.

Sometimes the ancestry is so distributed that any attempt to name one source is a category error.

The task is not to force a lineage where none exists.

It is to recover as much of the lineage as the evidence permits.
