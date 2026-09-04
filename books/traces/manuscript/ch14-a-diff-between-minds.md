# A Diff Between Minds

A software diff begins with an act of mercy.

Do not make me read the whole program again.

Show me what changed.

A developer reviewing a patch does not reopen every file and reconsider every line. The version-control system narrows the field. Twenty lines were added here. Six were removed there. This function changed. That test moved.

The diff is not the review.

It is the thing that makes review possible.

Machine learning has wanted an equivalent for years.

The need is obvious.

A base model becomes a chat model.

A chat model receives a safety fine-tune.

A new release uses a different architecture.

A capability improves.

A refusal behavior appears.

A bias weakens.

Another bias appears.

The benchmark table reports the outcomes.

What changed inside?

Looking directly at parameter differences is rarely helpful. Two models can contain billions of weights. Fine-tuning can move many of them by tiny amounts. A small numerical change can alter an important behavior. A large parameter change can cancel out functionally. Models with different architectures do not even offer corresponding coordinates.

A useful model diff has to compare meaning rather than bytes.

That is what crosscoder work tries to do.

The rough idea is to learn a shared dictionary of internal features across two models. If both models represent a concept in different neural directions, the crosscoder attempts to align the representations into one latent feature. Other latents capture activity more specific to one model.

The result begins to resemble a semantic diff.

Shared feature.

Stronger here.

Weaker there.

Present in one model and apparently absent in the other.

This is much closer to what an auditor wants than a list of changed floating-point numbers.

It is also much easier to overinterpret.

A feature labeled refusal appears only in the chat model.

Did fine-tuning create refusal?

Maybe.

Or the base model already contained a related representation that the method failed to align.

Or the feature split across several latents.

Or the models encode the same concept differently enough that the comparison mistakes difference of representation for difference of content.

Or the interpretability label is too broad.

The diff is an instrument.

It has artifacts.

A 2025 study by Julian Minder and colleagues made this problem unusually clear. The researchers examined crosscoders used to compare base and chat-tuned models and found that a standard training setup could incorrectly make features look unique to the fine-tuned model when those concepts actually existed in both. The issue came partly from how the crosscoder's sparsity objective represented features.

They developed checks and an alternative training approach that reduced the problem in their experiments. With the improved method, they identified chat-specific features related to concepts such as false information, personal questions, and different refusal triggers, and used interventions to show that several features were causally connected to behavior.

This is exactly how an interpretability field should mature.

First build the microscope.

Then discover the microscope makes ghosts.

Then learn which ghosts are optical artifacts.

The model diff becomes more trustworthy by documenting how it can lie.

This matters because diffing changes the psychological structure of auditing.

Without a diff, an evaluator starts with known questions.

Does the new model still refuse dangerous requests?

Did math improve?

Did political bias change?

Does it hallucinate more?

Benchmarks are written around risks someone already imagined.

A diff can be exploratory.

What internal features differ most?

Which differences correspond to behavior we did not think to test?

What changed unexpectedly?

This is the promise behind Anthropic's 2026 work on cross-architecture diffing.

Researchers introduced a Dedicated Feature Crosscoder designed to isolate features shared by both models and features more specific to each one. They applied it across open-weight models from different families and surfaced model-specific features associated with behaviors such as political alignment and copyright refusal. They then steered some features—amplifying or suppressing them during inference—and observed corresponding changes in model behavior.

The intervention matters.

A feature label is a hypothesis.

Steering is a test.

If turning a feature up and down predictably changes the behavior, the evidence becomes more causal.

Still, the researchers emphasized the boundary the book has been building toward for fourteen chapters.

The diff does not identify origin.

A model-specific feature can come from training data, fine-tuning, architecture, deliberate design, or interactions among them.

The tool answers what seems different.

History answers how the difference arose.

This is why model diffing belongs in Traces rather than in a book about static interpretability.

A diff becomes much more powerful when the lineage is known.

Compare two strangers and a difference has many possible causes.

Compare a parent and child separated by one documented fine-tune and the causal window narrows.

Compare checkpoints inside that fine-tune and it narrows again.

Add the preference dataset, reward model, and training objective and we have a historical experiment.

The semantic diff points to where to look.

The lineage tells us when to look.

The data trace tells us what may have pushed.

The intervention tests what the feature does now.

No one trace is sufficient.

Together they become investigation.

This is the central architecture of model forensics.

Imagine a new assistant release develops a tendency to refuse requests about a harmless topic.

The regression suite catches some cases but not the cause.

A model diff identifies a feature much stronger in the new model than the parent, active around copyright or ownership language. Steering the feature changes the refusal behavior.

Now inspect the tuning history.

The feature strengthens during a safety fine-tune.

Influential examples under one attribution method include several prompts where the desired response was refusal around protected material.

The feature is also weakly present in the base model.

The story is no longer “safety tuning created a copyright concept.”

A more precise story appears.

An existing representation was strengthened or reorganized during a known training stage and now controls a broader refusal boundary than intended.

That is actionable.

Change the training data.

Change the objective.

Add counterexamples.

Test the feature across checkpoints.

The diff has turned a product complaint into a developmental hypothesis.

This is a better use of interpretability than collecting interesting neuron labels.

The feature matters because it connects change to intervention.

A diff also gives us a way to audit unknown unknowns.

The phrase is overused, but the problem is real.

Evaluations are finite lists of questions.

A model can change in ways nobody anticipated when the list was written.

The software diff solves this problem partially because every code change is visible even if the reviewer did not know what bug to expect.

A semantic model diff aspires to the same coverage.

It will not achieve it perfectly.

The 2026 cross-architecture work surfaced thousands of candidate unique features. Only a small fraction received human interpretation and validation. The method was described as a high-recall screening tool rather than a silver bullet.

This creates a new bottleneck.

The model diff can produce more differences than humans can inspect.

We are back to attention allocation.

Which changed features deserve review?

Frequency?

Magnitude?

Association with safety-critical prompts?

Unexpected novelty?

Causal steering strength?

Activation on production traffic?

Connection to changed evaluations?

The diff does not remove prioritization.

It moves prioritization closer to the change itself.

This is still progress.

A security team does not inspect every code diff line equally either. Changes to authentication receive different scrutiny from changes to punctuation. Mature model auditing will need similar risk-sensitive triage.

The historical record can help.

A feature that appears suddenly during a narrow fine-tune deserves more attention than one that fluctuates harmlessly across random seeds.

A feature repeatedly associated with incidents across model generations deserves more attention than a one-off latent nobody can connect to behavior.

A feature that survives later safety tuning deserves a different kind of attention from one easily removed.

The diff gains meaning through persistence.

This suggests a new object: the feature changelog.

Not every interpretable feature.

Only those whose trajectory matters.

First observed in base checkpoint.

Strengthened after instruction tuning.

Split into two latents after architecture change.

Associated with refusal regression in version 3.2.

Steering confirmed causal role.

Reduced after corrective fine-tune.

Absent under revised representation method.

This would be a strange document today.

It may look ordinary in a decade.

Software projects have changelogs because systems have history users care about.

Models are acquiring histories rich enough to deserve one.

There is an obstacle more fundamental than scale.

Representations are not identifiable in the way source code is.

A concept can rotate in representation space without changing behavior. Two models can implement equivalent functions with different internal bases. Features can split or merge. A sparse autoencoder may find one decomposition while another method finds a different one. A crosscoder can align some shared structure and miss other structure.

This is the research brief's fourth falsification condition.

If representations prove too unstable across time and model versions for meaningful alignment, longitudinal mechanistic interpretation has a lower ceiling than this book hopes.

The right response is not to hide the risk.

It is to test stability.

Does the same feature reappear across random seeds?

Across dictionaries?

Across layer choices?

Across nearby checkpoints?

Does steering reproduce the behavioral effect?

Does the latent remain meaningful after the model is fine-tuned again?

Can a functionally equivalent representation be aligned despite a changed basis?

Model diffing needs measurement reliability as much as it needs clever features.

This is why the 2025 crosscoder failure analysis is so important. It shows that “model-specific” can be a property of the tool rather than the models.

Every scientific instrument needs controls.

Compare a model with itself under different random dictionary training.

How many false differences appear?

Compare two checkpoints known to differ only trivially.

Does the method remain quiet?

Inject a known fine-tuning behavior.

Can the method find it?

Remove the behavior.

Does the feature disappear?

The field can build calibration datasets for diffs just as software testing builds known bugs for analyzers.

A diff also raises a philosophical question about sameness.

When are two models the same model?

If one has identical weights but a different system prompt, their behavior can differ.

If one has a tiny fine-tune that changes refusal behavior, the numerical models remain nearly identical but the products feel different.

If two independently trained models have different architectures but encode similar features and perform similarly, they may be functionally closer than a base model and its fine-tuned descendant on the behavior we care about.

Identity in machine learning has several layers.

Artifact identity.

Lineage identity.

Functional identity.

Representational similarity.

Product identity.

A good diff specifies which layer it compares.

Cross-architecture diffing is powerful precisely because it abandons the assumption that shared coordinates define sameness.

It asks whether shared concepts can be found across internal languages.

This can become scientifically valuable beyond safety auditing.

Compare models trained on different languages.

Do similar conceptual features appear?

Compare a vision model and a multimodal model.

Which representations survive the addition of language?

Compare a model before and after domain tuning.

Which medical concepts become sharper?

Compare a small model and a distilled descendant.

Which features survive compression?

Compare models trained under different curricula.

Do they reach the same mechanisms by different routes?

The diff becomes comparative anatomy.

History turns it into evolution.

This is where the book's geological metaphor begins to give way to another one.

A fossil is one organism in time.

A diff compares species.

A lineage compares ancestors and descendants.

A family of diffs can show which structures are conserved.

Conserved features may point to robust solutions.

Model-specific features may point to contingent training history.

Again, the analogy should not be romanticized. Neural networks do not reproduce biologically. Engineers choose architectures and objectives. But comparative methods can still distinguish recurring structure from historical accident.

This is one way to test whether interpretability has discovered something real.

If a supposed mechanism appears only under one decomposition of one model, confidence should be low.

If related mechanisms appear across independently trained systems and survive alignment methods, confidence rises.

If the mechanism appears at similar developmental stages across training histories, the result becomes more interesting still.

Static interpretation becomes comparative developmental science.

The software diff started with mercy.

Do not make me read everything again.

The model diff may end with a scientific benefit software engineers did not need.

Show me which internal solutions are stable across learning histories.

Show me which ones appeared only after this intervention.

Show me which differences correspond to behavior.

Show me which apparent differences are artifacts of the microscope.

Show me what changed without pretending the change explains itself.

That last condition matters most.

A diff is evidence of difference.

History is the argument about cause.

The next two chapters test the distinction under pressure.

A model developer does not merely want to see what changed.

Sometimes the goal is to make a trace disappear.

A record should be forgotten.

A behavior should be removed.

A fine-tune should teach the new task without destroying the old one.

These sound like opposite problems.

Unlearning asks how to erase selected history.

Continual learning asks how to preserve useful history while adding more.

Both expose the same fact.

A learned model is a history you cannot edit cleanly like text.