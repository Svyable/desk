# Generalization Has Ancestry

A good generalization destroys its resemblance to the examples that taught it.

That is almost the point.

A child learns what a dog is from particular dogs and eventually recognizes one she has never seen. A mathematician studies specific proofs and later recognizes a strategy in a new theorem. A programmer learns patterns from particular codebases and then writes a function that exists in none of them.

The useful knowledge survives while the surface form changes.

Machine learning works this way too.

The model sees examples.

Later it behaves correctly on something new.

The examples are ancestors in the loose sense that training would have gone differently without them, but the descendant may not look like any one parent.

This is where historical investigation becomes harder.

Memorization gives us resemblance.

Generalization often removes it.

If a model answers a question in Spanish because it saw one nearly identical Spanish answer in training, the lineage can be obvious.

If it answers correctly because training in English and French helped shape a representation that transfers into Spanish, the surface trail is faint.

Which examples mattered?

How much?

Under what definition of mattered?

There may be no single answer.

Influence functions turn this vague historical question into a counterfactual.

The basic idea predates modern neural networks. In robust statistics, influence functions ask how an estimator changes when a data point receives a little more weight. Pang Wei Koh and Percy Liang adapted the method in 2017 to machine-learning predictions. Instead of retraining a model from scratch after removing every training example, estimate how slightly upweighting one example would change the learned parameters and, through them, a target prediction.

The appeal is immediate.

A black-box prediction can be traced backward toward training data without pretending the model stored a direct pointer.

The word traced is doing important work.

Not retrieved.

Not proven.

Estimated.

Influence functions answer a particular counterfactual under a local approximation. If this training point had mattered slightly more, how would this target quantity have changed?

That is a form of ancestry.

It is not a family tree.

The distinction becomes more important in deep networks because the mathematical conveniences of classical influence analysis do not hold cleanly. Neural objectives are nonconvex. Hessians are enormous. Training is stochastic. Models can have many parameter configurations with similar behavior. Exact leave-one-out retraining is prohibitively expensive at modern scale.

So researchers approximate.

The approximations themselves become part of the trace.

This is why the field now contains several methods that appear to ask the same question and can produce different answers.

TracIn, introduced by Garima Pruthi and colleagues in 2020, takes training time seriously. Rather than treating the final optimum as the only relevant state, it estimates influence using gradient relationships evaluated across saved checkpoints. If training on one example tends to move the model in a direction that helps a target example, the pair receives positive influence under the method.

TRAK, introduced by Sung Min Park and colleagues in 2023, attacks the scale problem differently. It uses projected gradient features and a tractable approximation designed to make data attribution practical for large differentiable models. The researchers demonstrated it across ImageNet classifiers, CLIP, BERT, and mT5.

Anthropic researchers pushed influence-function analysis into large language models the same year, using an approximation called EK-FAC to make the required curvature calculations practical for models as large as 52 billion parameters in their experiments.

Three approaches.

Three definitions and approximations.

One historical instinct.

Ask which training experiences appear to matter for the behavior we observe now.

This is where the word ancestry is more useful than provenance.

Provenance sounds like custody.

This output came from that document.

This artifact descended from that parent.

Those statements make sense when lineage is discrete.

A file is copied.

A code branch is forked.

A model checkpoint is fine-tuned.

Generalization is more diffuse.

A behavior can be shaped by hundreds, thousands, or millions of examples that reinforce an abstraction. Remove one and almost nothing changes. Remove the distribution and the capability may disappear.

The ancestor can be a population.

This is why single-example influence rankings are seductive.

They produce names.

Here are the ten training sequences most associated with this answer.

A list feels explanatory.

Sometimes it is useful.

Sometimes the important unit is not one sequence but a cluster, source, domain, language, time period, or task family.

A model learns addition from many examples.

Which one caused arithmetic?

The question may be badly formed.

A better question is how different families of training experience contributed to the representation and when that contribution became visible.

Influence methods can help with this broader view, but their results need discipline.

Anthropic's 2023 large-model study is instructive because it found both exciting patterns and a sharp limitation.

The researchers used influence functions to study examples related to abstraction, mathematics, programming, role-playing, and cross-lingual generalization. In some cases, influential training examples were not superficially similar to the target behavior. Larger models appeared to show more abstract influence patterns in the studied settings.

That is exactly the kind of evidence a historical account of generalization wants.

The model can inherit something that is no longer a copy.

Then came the awkward result.

When the researchers reversed the order of key phrases in a query, influence scores could decay toward zero even though a human would regard the semantic content as closely related.

This is a gift to the argument because it prevents influence from becoming mythology.

The method can reveal ancestry under one formulation and miss it under another.

The trace depends on the probe.

This should feel familiar by now.

A dataset map depends on the learner.

A circuit map depends on the interpretability method.

A memorization test depends on the prompt and access model.

An influence estimate depends on a counterfactual definition, an approximation, and the representation of the target.

There is no shame in this.

Scientific instruments have response functions.

The error comes when the instrument's output is treated as the thing itself.

A thermometer measures temperature through a physical process that can fail outside its calibration range.

An influence score measures a relationship through a mathematical approximation that can fail outside its assumptions.

The practical standard should therefore be convergence.

Does the same data region look important under several attribution methods?

Does removing or downweighting that region change the target behavior in the predicted direction?

Does the influence persist under paraphrase?

Across checkpoints?

Across random seeds?

Across nearby model versions?

Does a grouped intervention produce a larger and more stable effect than one-example analysis?

The stronger the agreement, the narrower the historical story becomes.

This is one place where the comparison with genealogy breaks down usefully.

Human ancestry is factual even if nobody measures it.

A parent is a parent.

Training ancestry is often defined by an intervention we could have made.

If removing an example changes the model, that example had influence under the chosen outcome.

If removing it does not, another definition may still call it important because it affected the path while later examples compensated.

Path dependence complicates everything.

Imagine two training examples that teach the same rare fact.

With both present, removing either one changes nothing because the other supplies the information.

Remove both and the model forgets the fact.

Neither point is individually necessary.

The pair is collectively important.

Now imagine an early example helps the model form a representation that later data reinforce. If the early example were removed, training might find the same representation by another route. The final behavior remains.

Did the example matter?

Historically, yes.

Counterfactually, perhaps not much.

This is why a complete training history can never be reduced to one influence matrix.

Different questions require different traces.

What actually happened along this run?

What was necessary for the endpoint?

What was sufficient?

What would change under small reweighting?

What would change if a source were removed entirely?

What data region most resembles the target?

What data region moved the target's loss during training?

These are neighboring questions, not synonyms.

A serious audit should write the question down before presenting the number.

This sounds obvious.

It is rare enough to be worth saying.

The economic language of data makes the same mistake.

Companies ask which data is valuable.

Data Shapley offers one principled answer: value a point by its marginal contribution to model performance across possible subsets of the dataset.

Influence functions offer another: estimate how reweighting the point affects a target.

Training dynamics offer another: observe whether the model repeatedly struggles with it.

Memorization offers another: measure whether it survives with unusual specificity.

No single one is data value.

Each is a projection of value onto an objective.

This matters when institutions eventually try to turn model history into accountability.

Suppose an applicant claims a hiring model treated her unfairly because of biased historical records.

An auditor produces a list of influential training examples.

The list may be relevant evidence.

It is not a legal verdict.

The method may be unstable.

The training examples may be proxies for a broader distributional pattern.

The production system may include post-processing rules unrelated to the weights.

The model may have been fine-tuned after the base training run.

The decision may have depended on features introduced at inference time.

The trace narrows the inquiry.

It does not replace the inquiry.

This is the recurring ethic of the book.

Use traces to become less ignorant.

Do not use them to manufacture certainty.

Generalization makes this ethic especially important because there may be no visually satisfying source.

A language model can learn a concept from examples in multiple languages and express it in another.

A coding model can learn an algorithmic pattern distributed across repositories.

A medical model can learn a representation from thousands of patients rather than one canonical case.

The history is population-level.

This is closer to epidemiology than forensics.

No single cigarette causes a population's lung-cancer rate.

No single storm defines a climate trend.

Some machine-learning behaviors may need the same statistical imagination.

The ancestry is in the distribution.

Attribution methods are beginning to scale toward that perspective.

TRAK's importance is partly engineering. Earlier high-quality attribution methods could require retraining huge numbers of models to estimate how subsets of data change behavior. TRAK showed that useful attribution could be approximated with far fewer trained models across several large-scale settings.

That does not solve data attribution.

It changes its economics.

Once a trace becomes cheaper, it can become routine.

This is how scientific methods become operational practices.

Sequencing a genome was once a research project.

Logging every software change was once impractical on large teams.

Storage and compute change what can be remembered.

Machine-learning ancestry may follow the same path.

A future training pipeline could generate influence summaries automatically at major checkpoints.

Which data sources most affect safety probes?

Which domains most affect multilingual performance?

Which subsets influence refusal behavior?

Which clusters matter for a new capability?

How do those patterns change after tuning?

The report would not be a provenance certificate.

It would be a historical index.

This phrase captures the right level of ambition.

An index does not contain the whole book.

It points to where an investigation should begin.

There are privacy and proprietary risks in building such indices.

An attribution system that can identify influential training records can itself expose sensitive information about the training corpus. A company may not want to reveal which datasets shaped a competitive capability. A data subject may not want an audit trail that preserves a sensitive record more durably than the model would have.

Traceability creates data.

That data needs governance too.

This will become a central tension near the end of the book.

The more history we preserve, the more we can explain.

The more history we preserve, the more there is to steal, subpoena, leak, misunderstand, or misuse.

A chain of custody can become a map of secrets.

The answer cannot be universal public disclosure.

It will require selective retention, access controls, aggregation, and purpose limits.

But those governance problems do not erase the scientific value.

They make the history consequential.

There is another reason generalization ancestry matters now.

Model developers increasingly build descendants rather than train every system from zero.

A base model is pretrained.

Then instruction tuning changes it.

Preference optimization changes it again.

Safety tuning adds another layer.

A domain adapter adds another.

Tool policies and system prompts alter behavior around the weights.

The final product has two kinds of ancestry.

Training-data ancestry inside each stage.

Model-lineage ancestry across stages.

These histories interact.

A behavior visible after fine-tuning may have been created during pretraining and merely exposed later.

It may be newly introduced by a narrow tuning dataset.

It may result from a reward objective selecting among capabilities the base model already possessed.

It may be suppressed by the weights and reintroduced by a serving prompt.

This is why the next act of the book moves from examples to strata.

The base model has a past.

Fine-tuning adds a more recent past on top of it.

The before-and-after comparison is stronger than attribution across independently trained models because the lineage is known.

We have a parent.

We have a descendant.

We know something about the intervention between them.

Now the historical question becomes sharper.

What changed?

Not which training example produced this sentence.

Which layer of development made this behavior more likely?

The software engineer reaches for a diff.

Machine learning is beginning to build one.