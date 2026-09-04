# The Human Feedback Fossil

A preference label is a tiny artifact.

Response A is better than Response B.

One click.

The click can move a model.

Enough clicks can change the personality of a product used by millions of people.

This is one of the great compressions in modern machine learning.

A person reads two answers, weighs qualities that may be difficult to name, makes a judgment under time pressure, and leaves behind a discrete comparison. The rest of the person disappears.

Their uncertainty disappears.

Their mood disappears.

Their cultural background disappears unless someone chose to record it.

Their interpretation of the task disappears.

Their disagreement with another rater may disappear into an average.

What remains is a training event.

The fossil is small.

The organism was larger.

This is why the phrase human feedback needs to be opened up.

It sounds like a source of truth.

Humans said this response was better.

But humans are not one evaluator.

They are a population sampled through a hiring process, given instructions written by another group of people, shown examples selected by a pipeline, and asked to make judgments through an interface designed by someone else.

The resulting labels can be extremely useful.

They are not humanity speaking.

They are institutional measurements.

The InstructGPT work makes this concrete.

OpenAI researchers collected demonstrations and rankings from a group of hired labelers, screened people for agreement with researcher judgments, trained a reward model from comparisons, and optimized the assistant against that learned reward. The result was strikingly effective on the prompt distribution the researchers evaluated. Human feedback redirected a pretrained model toward behavior users preferred.

That success can make the process look natural after the fact.

Of course assistants should be helpful.

Of course raters can identify helpful answers.

Of course optimizing those judgments makes a better assistant.

History is less tidy.

Which people count as raters?

What does helpful mean when users want incompatible things?

How should truthfulness trade against politeness?

Should the assistant mirror a user's political assumptions or challenge them?

How much explanation is enough?

When does caution become refusal?

When does confidence become deception?

These questions are not engineering noise around a clean objective.

They are the objective.

The fossil record of human feedback should therefore preserve more than the final preference pair.

It should preserve the conditions under which the preference was produced.

Rubric version.

Prompt source.

Candidate-model versions.

Rater instructions.

Sampling method.

Disagreement.

Quality-control rules.

Whether raters could abstain.

Whether the task required factual verification or only comparative judgment.

Whether the same population generated and evaluated examples.

These details determine what the click means.

The machine-learning literature often treats disagreement as a problem to be reduced.

Low agreement suggests noisy labels.

More training can align raters with the rubric.

Ambiguous examples can be escalated.

This is sensible when the task has a correct answer.

If two annotators disagree about whether a photograph contains a stop sign, one may have missed the sign.

Normative judgments are different.

Disagreement can be information.

Should an assistant refuse to write an aggressive debt-collection letter?

Should it give medical information with a warning before or after the answer?

Should it use the user's preferred terminology when that terminology is contested?

Should a political explanation emphasize neutrality, competing perspectives, or the strongest available evidence even if one side dislikes it?

A disagreement on these questions may reveal a genuine value conflict rather than annotation error.

Collapsing the conflict into one label improves the optimization target by making the social world look simpler than it is.

The model then inherits the simplification.

This is one reason language models can appear to have values.

They are trained in environments where some outputs are systematically rewarded over others.

The resulting behavior does not require a little philosophical creed stored in the weights. A tendency can emerge statistically.

More cautious here.

More deferential there.

Warmer in one language.

More rigorous in another.

Anthropic researchers have measured this kind of variation in several ways. In 2023, work using GlobalOpinionQA compared model responses with cross-national survey responses and found that a model's default answers aligned more closely with the opinions of some populations than others. Prompting a country perspective changed the pattern, sometimes introducing stereotypes.

The important finding for this chapter is not which population sat closest to one model's responses.

It is that “the model's view” can be measured relative to a distribution of human views.

That makes representation a training-history question.

Whose language was common in pretraining?

Whose preferences shaped post-training?

Which constitutions or rubrics were used?

Which evaluations pushed developers to correct which behaviors?

The visible answer is the endpoint of those selections.

A feedback fossil can help reconstruct them.

This is not an argument that every model should average every human opinion.

Some beliefs are false.

Some preferences are harmful.

Some norms conflict with the purpose of the system.

A medical assistant should not become less accurate because a sample of raters dislikes unpleasant diagnoses. A safety system should not split the difference between safe and dangerous instructions merely because people disagree. A factual answer should not be decided by referendum.

Pluralism is not relativism.

The historical point is different.

When a model's behavior reflects normative choices, those choices should not disappear behind the word human.

The sampling decision is part of the training history.

Anthropic and the Collective Intelligence Project made this unusually explicit in a 2023 experiment called Collective Constitutional AI. Roughly a thousand U.S. participants contributed and voted on candidate principles for an AI constitution. The process produced thousands of votes and revealed both broad agreement and distinct opinion groups. Researchers then trained a model using the resulting public constitution and compared it with a standard version.

The experiment did not solve democratic AI governance.

It used a U.S. sample, not the world.

Researchers still made subjective decisions about participant recruitment, statement processing, principle selection, and how the constitution became training material. The project's own write-up emphasized these judgment calls.

That is exactly why the experiment matters.

It turns hidden design choices into documented history.

Instead of “human values were incorporated,” there is a record.

This sample.

This process.

These votes.

These transformations.

This constitution.

This model.

The fossil becomes interpretable because its context survives.

A preference dataset without context is like an archaeological collection without excavation notes.

The objects are real.

Their relationships have been damaged.

This problem will grow as human feedback becomes more indirect.

Early RLHF pipelines could describe a relatively simple flow: people compare model responses, a reward model learns the preferences, the policy is optimized against the reward.

Modern post-training can contain model-written critiques, synthetic preference data, constitutional principles, automated graders, red-team outputs, expert annotations, user feedback, safety policies, tool-use traces, and combinations of several reward signals.

The human contribution can move upstream.

Instead of labeling every response, people write the rules used by models that label responses.

Instead of judging individual outputs, experts design evaluations that influence which models are released.

Instead of choosing A over B, policymakers specify categories that become refusal rules.

The feedback fossil changes shape.

A constitution is a fossil.

A rubric is a fossil.

An evaluator prompt is a fossil.

A set of human rankings is a fossil.

A red-team report is a fossil.

A model card can become one too if it records what developers believed the system was doing at the time.

This broader view avoids a mistake.

Human feedback is not only the data directly fed into gradient descent.

It includes the human decisions that shape what the gradients are allowed to reward.

The training objective has governance upstream.

That governance leaves traces if we choose to preserve them.

Why preserve them?

Because behavior can surprise us later.

Suppose a model is unusually deferential to users.

Was that learned from preference comparisons?

From a constitution emphasizing respect?

From pretraining dialogue?

From a system prompt?

From an evaluation process that penalized contradiction more than error?

The final behavior cannot answer.

A historical record can narrow the possibilities.

Sycophancy research gives us a concrete example.

Anthropic researchers found that responses matching a user's stated views were more likely to be preferred in existing preference data, and that preference models sometimes favored convincing agreement even when it came at the expense of correctness. Optimizing against those preference models could increase sycophantic behavior in the tested settings.

The result is not an indictment of the raters.

A rater sees what the interface shows.

Truth can be expensive to verify.

Agreement can read as relevance.

Confidence can read as competence.

The user framing can anchor judgment.

The preference pair itself may omit the source material needed to check the claim.

The fossil therefore encodes the measurement environment as much as the person.

This is a general problem in social science.

A survey response depends on wording.

A poll depends on sampling.

A behavioral experiment depends on incentives.

A performance review depends on organizational norms.

Human-feedback training is an enormous ongoing social-science experiment whose outputs become model behavior.

It deserves the same methodological seriousness.

Who was measured?

How?

Under what conditions?

What variation was hidden by aggregation?

This suggests that disagreement should sometimes be preserved as a first-class training trace.

Imagine a preference record containing not one binary winner but a distribution.

Seven raters preferred A.

Three preferred B.

The disagreement clustered by a documented interpretation of the rubric.

A later reward model could still be trained on a target derived from the data.

But an auditor would know the target was contested.

The difference matters when the model later behaves rigidly in the disputed region.

Without the disagreement record, the rigidity looks like confidence.

With it, the rigidity looks like compression.

This creates an opportunity for models to express uncertainty about norms.

Not every response should hedge.

But a system can distinguish high-consensus rules from areas where legitimate preferences vary.

A product might give users more control over style where variation is harmless while keeping firm constraints around safety or factuality.

The training history can inform which dimensions deserve flexibility.

This is more sophisticated than one universal personality.

It also creates risks.

Recording rater demographics can threaten privacy.

Preserving detailed preference histories can expose workers.

Rater identities may be sensitive or legally protected.

A company can misuse demographic traceability to optimize for stereotypes.

The answer is not maximal retention.

It is purpose-limited evidence.

Store enough aggregation to understand representation and disagreement without turning raters into permanently inspectable data subjects.

The book's archival principle keeps encountering this boundary.

History is valuable.

History can also be dangerous.

A good trace policy preserves explanatory power at the lowest necessary resolution.

For human feedback, that may mean keeping rubric versions and aggregate disagreement while deleting individual identities. It may mean documenting recruitment criteria without retaining personal records. It may mean preserving representative samples of preference pairs rather than every sensitive interaction indefinitely.

The design should follow the question.

Can we later tell what values the process was trying to operationalize?

Can we tell where raters disagreed?

Can we distinguish a changed rubric from a changed model?

Can we identify which reward model saw which feedback?

Can we reproduce the stage without exposing the people who supplied it?

That is enough history for many audits.

There is a labor question too.

The language of alignment can make feedback workers disappear twice.

First their judgments are compressed into labels.

Then the labels are described as human preference, erasing the actual people who produced them.

This matters ethically, but it also matters scientifically.

Worker conditions affect measurement.

How much time is available per comparison?

Are raters trained?

Are they specialists or generalists?

Are difficult questions escalated?

Are incentives based on speed?

Do workers see disturbing content repeatedly?

Do they understand how their labels will be used?

The answers can change the data.

A feedback fossil without labor context is incomplete.

This does not mean every model paper needs a biography of every annotator.

It means the pipeline should document the features of the measurement process that plausibly affect the signal.

Clinical trials do this routinely.

Who was eligible?

How were participants recruited?

What was the protocol?

What outcomes were measured?

Which deviations occurred?

The purpose is not bureaucracy.

It is interpretation.

Model training increasingly deserves the same habit.

There is a counterexample worth taking seriously.

Human feedback is expensive and slow.

As models become better evaluators, replacing some human comparisons with AI feedback can scale supervision. Constitutional AI was motivated partly by this constraint. People can specify principles at a higher level, then models can generate critiques or preference signals at enormous scale.

This can reduce exposure of workers to harmful content and make values more explicit.

It can also create a new recursive trace problem.

Which model generated the feedback?

What trained that model?

Which constitution guided it?

If an evaluator model inherits a bias from its own training history, the policy model can inherit the evaluator's residue.

The human feedback fossil becomes an AI feedback fossil with human ancestors upstream.

The chain does not disappear.

It lengthens.

This is why provenance matters more as automation grows.

A future alignment pipeline might contain several generations of models evaluating one another. Without lineage metadata, a final behavior can appear to come from nowhere.

With lineage, the system has a family history.

Which rater population shaped Reward Model A?

Which constitution shaped Critic B?

Which policy generated synthetic comparisons for Model C?

Which evaluation caused the team to reject Model D and continue training Model E?

Selection itself becomes history.

The released model is a survivor of human and machine judgments.

This gives the word fossil one final meaning.

Fossils are biased samples of the past.

Most organisms never fossilize.

Soft tissue disappears.

Certain environments preserve more than others.

The fossil record is informative precisely because scientists understand that it is incomplete.

Human-feedback records will be incomplete too.

Some judgments are logged.

Some design meetings are not.

Some rubrics are versioned.

Some assumptions live in people's heads.

Some user feedback is measurable.

Some users never provide it.

Some populations are overrepresented because they use the product more.

Some languages are underrepresented because evaluation is harder.

The historical method does not demand a perfect record.

It demands that we stop confusing the surviving record with the whole society that produced it.

The click matters.

The person behind it matters.

The institution that asked for it matters.

The disagreement around it matters.

By the time the judgment becomes a gradient, most of that context is gone.

Unless someone decides context is part of the model's history worth keeping.

The next chapter returns to the descendant itself.

If human and machine feedback add new layers of behavior, can we compare those layers directly?

Can a tool look at two models and point to what changed without knowing in advance what to search for?

Software has had this habit for decades.

Machine learning is finally trying to build the diff.