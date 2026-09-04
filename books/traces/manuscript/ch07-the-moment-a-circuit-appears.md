# The Moment a Circuit Appears

At some point during training, a transformer can begin doing something it could not do before.

That sentence sounds banal.

Learning is the point of training.

The interesting part is the phrase at some point.

When?

A finished model cannot answer that question by itself.

It can show us the capability now. It can show us the mechanism now, if our interpretability tools are good enough. It cannot tell us when that mechanism became functionally important unless some record of earlier states survives.

This is where checkpoints stop being insurance and become developmental evidence.

A useful example comes from induction heads.

The name is technical, but the basic pattern is easy to see.

Imagine a sequence in which one token is followed by another:

A, then B.

Later in the context, A appears again.

A simple induction-like strategy is to notice the earlier pair and predict B after the repeated A.

Transformer researchers identified attention heads that behave in a way consistent with this pattern. They can look backward for a previous occurrence of the current token and then attend to what followed it. The mechanism can support a primitive form of pattern continuation inside the prompt.

In 2022, Catherine Olsson and a large group of collaborators studied these induction heads across training. Their most interesting result for this book was not simply that such heads exist.

It was that they formed.

The researchers trained transformer models and watched both internal attention patterns and a behavioral measure of in-context learning. In the small attention-only models they could study most directly, induction heads appeared around the same stage as a sharp change in the model’s ability to improve predictions by using earlier context. They reported stronger causal evidence in the small models and more correlational evidence in larger models with multilayer perceptrons.

That distinction matters.

The work offered a developmental hypothesis, not a universal law of transformers.

The strongest version of the hypothesis was that induction heads might account for much of in-context learning in transformer models. The authors themselves described important parts of the larger-model case as preliminary and indirect.

A trade book can ruin a good experiment by sanding off that uncertainty.

The responsible version is already interesting enough.

A measurable internal pattern appeared during training near a measurable behavioral transition.

The model had a before and an after.

This turns interpretability into developmental biology.

Static mechanistic interpretability asks what computation supports a capability in a trained model.

Developmental interpretability asks when that computation arose, what preceded it, whether other candidate mechanisms appeared and vanished, and how the internal transition relates to behavior across training.

The difference is the difference between anatomy and embryology.

Anatomy can tell us where a mature structure is.

Embryology can tell us how it came to exist.

This analogy is imperfect because neural networks are not organisms and attention heads are not organs. The point is methodological. A system that changes over time can be studied through sequences of internal states rather than one endpoint.

That sequence can correct hindsight.

Suppose we inspect a trained transformer and identify an attention head with a compelling induction pattern.

We may be tempted to tell a clean origin story.

The model learned to use repeated patterns.

An induction head implements the necessary algorithm.

Therefore the induction head caused the capability.

The final model makes the story look plausible.

The training history can make it testable.

Was the head present before the behavioral improvement?

Did the behavior improve before the head became strong?

Did the same timing recur across training runs?

If the suspected head is ablated, does the capability weaken?

If the training environment changes, does the head appear later, earlier, or not at all?

Do alternative internal structures take over?

The temporal order cannot establish causation by itself.

But it can eliminate bad causal stories.

A mechanism that consistently appears after a capability cannot explain the capability’s first appearance.

A feature that rises before the behavior and predicts its later improvement is more interesting.

A feature that appears in only one random seed deserves less confidence as a general developmental marker.

A mechanism whose intervention changes behavior earns more causal weight than one that merely correlates with it.

This hierarchy of evidence is familiar in science.

First observe association.

Then establish chronology.

Then intervene if possible.

Machine learning is unusually hospitable to the third step because the object of study is executable.

A researcher can alter an activation.

Disable an attention head.

Patch a representation from one input into another.

Train again under modified conditions.

Compare checkpoints.

The machine can be dissected without being destroyed forever because another copy can be loaded.

This should make us ambitious about causal explanation.

It should also make us suspicious of interpretability labels that sound more certain than the intervention supports.

An attention head may display a recognizable pattern without being uniquely responsible for a behavior.

Neural networks are redundant.

Multiple heads can share a function.

A circuit can be distributed.

A model can route around an ablated component.

A feature can be correlated with a computation because it participates downstream rather than originates it.

Even a clean intervention can have side effects.

The developmental record helps because redundancy itself has a history.

Perhaps one head appears first and later copies take over part of the work.

Perhaps a diffuse behavior consolidates into a more legible circuit.

Perhaps a strong early mechanism becomes less important as a different route develops.

The final network can hide these transitions behind stable performance.

A mature city hides its construction sequence too.

You can stand on a street and see the road, the water main, the subway, the fiber, the building foundations, the electrical network, and the zoning pattern as one functioning system.

You cannot infer the order of construction perfectly from the current map.

Some infrastructure was added later.

Some replaced older systems.

Some was rerouted around failures.

Some neighborhoods contain layers from different eras.

A model can have layers of history in the same sense without the metaphor becoming mystical.

Fine-tuning adds one era.

Safety training adds another.

Continual updates add another.

Even pretraining itself can contain phases in which different mechanisms become useful.

The moment a circuit appears is therefore not merely a curiosity.

It gives us a marker inside the chronology.

Markers can organize investigation.

Imagine a frontier training run in which a dangerous capability first becomes detectable at checkpoint 420.

The immediate practical question is not philosophical.

What changed between checkpoint 400 and checkpoint 420?

Which internal features strengthened?

Which data mixture was active?

Which optimization regime applied?

Did a known behavioral proxy shift first?

Can the transition be reproduced?

Can training be modified so the dangerous capability does not appear without losing unrelated performance?

This is the safety value of developmental traces.

They narrow the search window.

A final model tells us the capability exists.

A checkpoint series can tell us when it became detectable.

Internal traces can tell us what else changed nearby.

Data attribution can suggest which training examples or distributions mattered under a particular influence definition.

Interventions can test candidate mechanisms.

No single method provides the answer.

Together they turn a broad mystery into a bounded investigation.

The phrase “emergent capability” has made this problem more confusing than it needs to be.

In ordinary language, emergence can suggest that something appeared from nowhere.

In measurement, apparent emergence can be a threshold effect.

A capability may improve gradually under one metric and look sudden under another. A benchmark that counts only exact success can remain flat while the model accumulates partial structure. Scaling a model can move it across a performance threshold even if the underlying competence changed continuously.

Developmental measurements help separate these cases.

What does the internal mechanism do before the benchmark turns on?

Is there a weak precursor?

Does the representation become more structured over time?

Does a continuous progress measure exist beneath the categorical score?

This question becomes central in the next chapter on grokking, but induction-head work already gives us the pattern.

A behavioral transition can coincide with internal change that is easier to inspect when checkpoints are preserved.

The operative word is coincide.

Researchers and journalists both love synchrony because it makes good stories.

The head appears.

The capability appears.

Mystery solved.

Science is less cooperative.

A simultaneous change can arise because both are driven by a third process.

The head can be a marker rather than the engine.

The capability can depend on several components, only one of which is visible to the interpretability tool.

The model can support multiple strategies that arrive at similar outputs.

A developmental account should therefore preserve several levels of claim.

The weakest claim: an internal pattern changed near the time a behavior changed.

A stronger claim: the internal pattern predicts the behavior across runs and contexts.

Stronger still: intervention on the pattern changes the behavior selectively.

Strongest: altering the developmental conditions that create the pattern changes the emergence of the behavior in the predicted way.

Very few mechanistic stories reach the strongest level.

That is fine.

A trace is valuable before it becomes proof.

It can tell us where to look next.

This is the same logic we saw in data attribution.

An influential-example ranking does not certify origin.

It narrows a candidate set.

A circuit trace does not certify the full computation.

It narrows the mechanism.

A developmental timeline does not certify cause.

It narrows the window.

The power comes from intersecting imperfect traces.

Suppose a model suddenly improves at a pattern-completion task.

Checkpoint comparison shows that a family of attention heads has changed sharply.

Ablating those heads weakens the capability.

The same change appears across seeds.

A data intervention that removes repeated-sequence structure delays both head formation and behavioral improvement.

The combined case is far stronger than any one observation.

This is what a historical science of machine learning should look like.

Not one magical microscope.

Converging records.

The induction-head story also teaches another lesson about scale.

Mechanistic clarity is often easiest in small models.

Small systems can be exhaustively inspected. Components are fewer. Training runs can be repeated. Ablations are cheaper. The entire developmental sequence can be saved at high resolution.

Frontier models are where the stakes are highest and the traces hardest to interpret.

This creates a familiar scientific tension.

We learn principles in simplified organisms and hope some transfer to complicated ones.

Biology uses fruit flies, worms, mice, and cell cultures for the same reason.

The analogy should not be stretched too far, but the experimental tradeoff is real.

A small transformer can serve as a model organism for learning dynamics.

The danger is universalization.

An induction head found in a small attention-only transformer is not automatically the mechanism behind every form of in-context learning in a frontier model.

A grokking circuit in modular arithmetic is not automatically the hidden story of language acquisition.

A feature observed in one architecture is not a law of neural computation.

The point of model organisms is to discover mechanisms that can then be tested elsewhere.

Not to declare the elsewhere solved.

This is where longitudinal work can help with transfer.

If a developmental signature repeats across architectures, scales, and data distributions, it becomes more interesting.

If it disappears outside one narrow setting, its scope becomes clearer.

Either result is useful.

A failed replication is also a trace of the theory’s boundary.

The same habit should apply inside organizations.

A team trains Model A and identifies a feature transition before a desired capability appears.

Months later, Model B is trained with a different architecture and dataset.

Does the same feature family emerge?

At a comparable fraction of training?

Under the same data conditions?

Does the behavioral transition have the same precursor?

If not, why not?

Without preserved histories, every new model begins as if the previous training run never happened.

This is scientific amnesia.

Organizations remember final scores and release dates.

They often forget developmental detail.

A serious model lineage should preserve not only parent checkpoints but learned lessons about trajectories.

Which indicators predicted useful capabilities?

Which warnings produced false alarms?

Which internal changes were stable across runs?

Which disappeared with a new architecture?

Which interventions changed the route?

The training history becomes a comparative dataset in its own right.

This is where the “model has a past” thesis begins to compound.

One model’s past is interesting.

A family of model histories can support a science of development.

The unit of analysis shifts from a checkpoint to a trajectory distribution.

Instead of asking when this circuit appeared, ask how variable its appearance time is across runs.

Instead of asking whether this capability emerged, ask which early traces predict it.

Instead of asking which feature differs between two models, ask whether the same difference repeatedly arises from the same tuning stage.

This requires more storage, more instrumentation, and more disciplined metadata.

It also produces more honest uncertainty.

A single beautiful training curve can seduce us.

Twenty runs can show whether the curve was typical.

The field already knows this problem in benchmark evaluation.

Random seeds matter.

Hyperparameters matter.

Sampling matters.

Interpretability needs the same humility.

A developmental mechanism is more convincing when it survives reruns.

This will become especially important as people try to use training traces for forecasting.

The dream is obvious.

If we can recognize the early formation of a mechanism associated with a later capability, perhaps we can anticipate what a model is becoming before the capability is fully visible.

That would be valuable for engineering and safety.

It would also be easy to fool ourselves.

After a capability appears, many earlier signals can be redescribed as precursors.

This is the curse of hindsight.

A genuine developmental predictor should be specified before the outcome when possible and tested across runs where the outcome varies.

Did the signal predict?

Or did we recognize it only because we knew what eventually happened?

Checkpoints make the question answerable.

They do not make us immune to storytelling.

The best use of the induction-head case is therefore methodological rather than mythic.

It does not prove that all intelligence grows visible circuits in neat stages.

It proves that at least some learned mechanisms can be studied as developmental events.

We can ask when.

We can compare before and after.

We can intervene.

We can repeat the experiment.

This changes what “understanding a model” can mean.

Understanding need not be confined to explaining the final computation.

It can include explaining the route by which the computation became available.

The route can reveal alternatives the final state hides.

A model may first memorize a pattern, then replace the memorized strategy with a more general algorithm.

A circuit may appear gradually while behavior looks flat.

A capability may look sudden because our evaluation has a threshold.

The final model gives none of this away.

The next chapter contains one of the cleanest demonstrations.

A network solves the training set.

Then, for a long time, apparently nothing important happens.

The test performance stays terrible.

Training continues anyway.

Eventually the model generalizes.

From the outside, the improvement can look like a jump.

Inside, the history is longer.

The circuit was becoming something before the score admitted it.

That is what traces are for.