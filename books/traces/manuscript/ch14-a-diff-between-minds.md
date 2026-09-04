# A Diff Between Minds

Two models answer the same question differently.

One explains.

One refuses.

One gives a concise result.

One takes a long route through the problem.

One notices the trap.

One walks straight into it.

The usual comparison ends with a score.

Model B is better by three points.

The historical question begins where the score ends.

What changed?

A software engineer confronted with two versions of a program has an obvious instrument: the diff.

The diff does not explain the program. It shows changed lines. Those lines become the first place to inspect.

Machine learning lacks such a natural representation because neural networks do not preserve semantic changes as localized edits. Fine-tuning can modify millions of weights. Internal features can rotate or split. Two independently trained models can solve the same task using representations that do not align coordinate by coordinate.

Yet the need for a diff is becoming stronger as models multiply.

We will not be able to understand every new model from zero.

There will be too many.

The useful scientific question will increasingly be comparative.

How is this one different from the one we already know?

This is the motivation behind model-diffing research.

A strong diff should operate at the level people care about: learned features, behaviors, mechanisms, capabilities, and failure modes. Raw parameter subtraction is only a beginning.

The challenge resembles comparing two maps drawn in different coordinate systems.

One map places north at the top. Another is rotated. The streets are the same, but pixel subtraction would make every line look different.

Representations inside neural networks can have similar alignment problems. Two models may encode related concepts in different directions. Even a fine-tuned descendant can reorganize enough that direct neuron-to-neuron comparison is misleading.

Crosscoders offer one approach.

Train an auxiliary system across activations from multiple models. Ask it to learn a shared feature dictionary and identify which features are present in both models and which are more specific to one.

In March 2026, Anthropic researchers described a dedicated-feature crosscoder designed specifically for model diffing, including across different model architectures. The goal was not to explain every computation in either network. It was to surface meaningful differences.

The software analogy returned.

Review the diff first.

This is an important change in ambition.

Interpretability often begins with the dream of understanding the whole model. Model diffing begins with an engineering concession.

We already know enough about the parent to care mainly about the delta.

This assumption is strongest when lineage is known.

A base model has been studied.

A fine-tuned descendant appears.

The descendant is mostly inherited structure plus a narrower intervention.

If a diff method can identify features that changed, investigators can concentrate effort there.

Which new features correspond to intended behavior?

Which unexpected features appeared?

Which old features weakened?

Which changes correlate with regressions?

The diff becomes triage.

This may be the first economically scalable form of mechanistic auditing.

The reason is simple.

Model evaluation is becoming a versioning problem.

A laboratory releases one model.

Then a faster version.

A safer version.

A reasoning version.

A smaller version.

A domain-specific version.

A customer fine-tune.

A patch.

A new base model.

If every update requires a full interpretability campaign, the campaign will lose.

Change-based inspection matches the pace of development better.

This does not mean small diffs are safe.

Software engineers know that one changed line can create a catastrophic vulnerability.

The same is true for learned systems. A narrow fine-tune can create a strong behavioral difference. An external system prompt can change product behavior without touching weights at all. A model-diffing tool can fail to detect a relevant change because its feature dictionary is incomplete.

The diff narrows attention.

It does not confer innocence.

That boundary is important because tools acquire institutional authority quickly.

A company builds an automated model-diff report.

The report says no material difference found.

People stop testing.

The instrument has become a gatekeeper before its failure modes are understood.

A young trace science should resist this pattern.

The correct role for a diff is evidence allocation.

Where should we spend scarce audit effort?

What changed enough to deserve deeper analysis?

Which behavioral evaluations should be rerun?

Which old safety evidence is likely to transfer and which should be considered stale?

The final judgment still requires multiple traces.

A useful diff has at least three layers.

Behavioral diff.

Representational diff.

Lineage diff.

The behavioral diff asks what users can observe.

The representational diff asks what internal features or mechanisms changed.

The lineage diff asks what training interventions separate the two models.

When all three align, explanation becomes much stronger.

Suppose a fine-tuned model begins refusing a new category of requests.

Behavioral probes show the change.

A crosscoder identifies a feature that is stronger in the tuned model and activates on the new category.

The fine-tuning dataset contains examples explicitly rewarding those refusals.

Intervening on the feature changes refusal probability.

Now the diff has history and mechanism.

Contrast that with a changed feature whose behavior is unknown and whose origin cannot be linked to the tuning data.

Interesting.

Not yet explanatory.

This distinction should guide how interpretability findings are written.

A feature is not a reason merely because it has a label.

A difference is not an origin merely because it appears only in one model.

A model can contain a “legal language” feature more strongly than another because of domain data, architecture, tokenization, or a downstream fine-tune. The diff tells us the feature differs. The lineage and intervention tell us why that may matter.

This is scientific humility disguised as bookkeeping.

The same comparative logic can reveal conservation.

Two models may look dramatically different in product behavior and still share most internal features.

If this becomes a common pattern in post-training, it would support the idea that many assistant behaviors are relatively thin transformations on top of a conserved pretrained substrate.

Other tuning regimes may produce broader reorganization.

The point is not to choose the answer in advance.

The diff lets us measure how much changed at which level.

This can become a language for model families.

Today we call descendants instruct, chat, reasoning, mini, pro, safe, domain, or version two.

These names are marketing and taxonomy.

A diff-based family description could be scientific.

Shared feature fraction under this method.

New behavior classes.

Capability regressions.

Internal features unique to the descendant.

Changes in memorization risk.

Changes in calibration.

Changes in refusal boundaries.

The family tree gains quantitative branch lengths.

That would be useful for open-weight ecosystems where thousands of fine-tunes descend from common bases.

A user may download a derivative whose README says it was trained for medical question answering.

How different is it from the parent?

Did safety behavior change?

Did the domain tune introduce memorization of the private corpus?

Did general language capability degrade?

Was the model merged with another descendant?

A semantic diff can begin to answer what names cannot.

This is supply-chain inspection for models.

The analogy becomes even stronger with model merging.

Open-weight communities can combine weights from several fine-tuned descendants. The resulting model may not have one simple parent. It inherits from multiple branches.

The history becomes a graph.

What should a diff compare against?

Each source model.

The original base.

Previous merged versions.

Different comparisons answer different questions.

Which features came from which branch?

Which emerged only after the merge interaction?

Which safety behaviors were diluted?

Which capabilities reinforced each other?

The model has multiple ancestors and one present state.

A simple version number cannot tell the story.

This is where the title of the chapter becomes deliberately provocative.

A diff between minds.

The models are not human minds, and the phrase should not be read as a claim about consciousness. It points to a practical shift in how we treat learned systems.

The object we care about is no longer just code.

It is a learned disposition encoded in parameters.

When that disposition changes, we need instruments that can compare one learned state to another.

The diff becomes a microscope for difference.

This comparison can also be used across scale.

Train a small model and a larger model on similar data.

Which features appear in both?

Which appear only after scale increases?

Do larger models develop more abstract features?

Do certain mechanisms become more distributed?

Which safety-relevant behaviors emerge with scale and which are inherited from smaller systems?

The models are not parent and child in the strict fine-tuning sense, but the comparative approach still works if the researcher is careful about causal claims.

Shared data and architecture create partial controls.

Independent training introduces more uncertainty.

The diff becomes descriptive rather than genealogical.

This is an important boundary.

Model diffing can tell us that two systems differ.

History tells us whether one change caused the other.

Comparative anatomy does not automatically establish evolution.

The same warning applies when organizations compare competitor models.

A feature unique to Model X does not prove Company X deliberately trained it.

A refusal difference does not prove one safety philosophy is embedded in weights; the difference could arise from serving policies.

A model's public behavior is the sum of several layers.

Weights.

System prompt.

Retrieval.

Tools.

Safety filters.

Routing.

Sampling.

Product interface.

A true product diff has to include them.

This broadens the historical project beyond neural networks.

The user experiences a system.

The system's model may not have changed at all between two dates while a retrieval source changed and answers shifted dramatically.

If the question is “why did the assistant start doing this?”, weight-only history is insufficient.

The trace must follow the product stack.

This is why chain-of-custody thinking will eventually connect MLOps with observability.

Which exact model checkpoint answered this request?

Which system prompt version?

Which retrieval index?

Which tool outputs?

Which safety policy?

Which router decision?

Which decoding configuration?

The answer becomes a runtime diff as well as a training diff.

The current chapter stays focused on learned states because that is where the scientific challenge is most novel. But the practical audit cannot stop there.

One of the most interesting uses of model diffs will be regression debugging.

A new version performs worse on a narrow domain.

Behavioral tests identify the regression.

A diff method surfaces several internal features that changed around the domain.

Lineage records show a fine-tuning stage that downweighted related data.

A checkpoint series identifies when the regression began.

A branch restoring the older data mixture recovers performance.

This is model debugging with history.

Compare it with the current alternative.

Run more prompts.

Guess which training stage caused the issue.

Retrain expensive variants.

Search logs.

Ask people what they remember.

The difference between the two workflows is not magic interpretability.

It is preserved evidence.

This is why model diffing may become less glamorous as it becomes more important.

The future version could look like a standard engineering report.

Changed behavior: moderate.

New domain feature cluster: yes.

Safety feature changes: low confidence.

Memorization probe increase: detected on one dataset.

Calibration regression: 2.1 points on held-out domain.

Parent checkpoint: verified.

Post-training dataset manifest: available.

Recommended re-evaluations: five.

The report is boring.

That would be progress.

A technology becomes infrastructure when its extraordinary parts become routine maintenance.

A model diff should eventually feel like reviewing a patch.

The science required to make that possible is not routine yet.

Representations are slippery.

Feature dictionaries are incomplete.

Cross-model alignment is difficult.

Causal interpretation remains hard.

The current tools can miss changes and invent clean labels for messy features.

These limitations should be written into the product, not buried in papers.

Confidence estimates.

Coverage estimates.

Known blind spots.

Multiple feature lenses.

Behavioral cross-checks.

The diff should show uncertainty about the diff.

This is a recurring rule in trace science.

An instrument that cannot display its own uncertainty will be overtrusted.

The deeper idea survives current limitations.

The whole model is too large to be the default unit of inquiry.

Change is smaller.

History gives us pairs.

Pairs give us differences.

Differences give us places to look.

The final model is a continent.

The diff is the fresh fault line.
