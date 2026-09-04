# The Moment a Circuit Appears

A machine can acquire a capability before anybody knows what internal change made it possible.

This is normal.

We notice the behavior first.

The model begins completing a pattern it previously missed. It follows a new kind of instruction. It translates more reliably. It infers a rule from examples in the prompt. It solves a family of problems that had resisted earlier checkpoints.

The benchmark moves.

Then the hunt begins inside the model.

Which parts changed?

Which internal features became active?

Did a new mechanism appear, or did an old mechanism become strong enough to matter?

Was the capability built gradually and revealed suddenly by the evaluation?

Did several components have to cross a threshold together?

A static model can tell us something about the mechanism that exists now.

A developmental record can tell us when the mechanism entered the story.

That second question changes interpretability.

It turns anatomy into embryology.

One of the clearest early examples came from work on induction heads in transformers.

The setting was deliberately small enough to study. Researchers trained transformer language models and watched a form of in-context learning develop. A model that sees a sequence like A B ... A can learn, within the prompt, to predict B after the second A. Certain attention-head patterns appeared capable of implementing a generalized version of this copying behavior: one head helps identify an earlier occurrence, another can use what followed that occurrence to predict what should come next.

The details of the proposed circuits matter to specialists. The developmental observation matters to everyone interested in traces.

During training, the researchers saw a phase change.

In-context learning performance improved sharply around the period when induction-head-like mechanisms appeared.

The result does not prove that every form of in-context learning in every transformer depends on one universal induction circuit. The experiments used particular model families and tasks. Later work has complicated simple stories about where broad language-model capabilities come from.

What the study established more durably was a method of seeing.

Do not inspect only the adult network.

Watch the mechanism form.

This sounds obvious in retrospect because almost every science of complex systems eventually studies development.

An adult heart can be dissected. Embryology explains how the structure arose.

A mature language can be described grammatically. Historical linguistics explains how forms changed.

A city can be mapped today. Urban history explains why a strange street bends around a property line that disappeared two centuries ago.

Present structure often contains accidents of formation.

Neural networks are full of them.

The challenge is deciding when an internal change deserves to be called a circuit.

Interpretability research uses the term for a set of components whose interaction supports a computation. In small models, the components can sometimes be specific attention heads or neurons. In larger systems, the useful units may be distributed features extracted by auxiliary models such as sparse autoencoders.

The word suggests wiring.

That can mislead.

Neural networks do not contain little hand-soldered logic boards labeled “French,” “sarcasm,” or “refusal.” A computational pattern can be distributed, polysemantic, redundant, and dependent on context. Two models can implement similar behavior with different internal decompositions. A feature discovered by an interpretability method is partly a property of the model and partly a property of the lens used to inspect it.

Development does not eliminate those problems.

It gives us another axis on which to test them.

Suppose an interpretability tool identifies a feature in a final model and gives it a plausible human label.

The feature appears strongly when the model discusses legal citations.

A static analysis can correlate the feature with prompts and outputs.

A developmental analysis asks whether the feature exists in earlier checkpoints.

If it appears only after a legal-domain fine-tune, the history supports one story.

If it is already present during pretraining and merely becomes stronger, the history supports another.

If a different feature carried the same behavior earlier and the final feature replaced it, the mechanism has undergone succession.

If the feature appears long before the behavior becomes measurable, then the visible capability may depend on later integration rather than feature birth.

Each possibility changes what the label means.

This is the beginning of developmental interpretability.

The name is less important than the habit.

Track internal mechanisms through time.

The simplest version is a movie of activations.

Take the same set of prompts and run them across checkpoints. Record which internal features respond. Compare their strength, selectivity, and relationship to behavior.

The richer version asks causal questions.

Intervene on a feature at several developmental stages. Does suppressing it hurt the capability before the final model? Does activating it early produce a crude version of later behavior? Does the intervention become more effective as training proceeds?

Now the trace can distinguish correlation from functional importance more sharply.

A feature that appears alongside a capability but can be removed without consequence may be a passenger.

A feature whose intervention reliably changes the behavior is more likely to be part of the mechanism.

A feature that matters only late may be part of a refinement rather than the original route.

The ability to make these distinctions is why current circuit-tracing work is more interesting than a colorful map of activations.

In 2025, Anthropic researchers described methods for building partial attribution graphs inside a language model. The graphs attempted to connect interpretable internal features into pathways associated with a model's output. They used interventions to test whether suspected intermediate features actually affected downstream behavior.

The researchers were explicit that the method captured only part of the computation. Even for short prompts, much remained unexplained. The auxiliary interpretability machinery could also introduce artifacts.

Those limitations matter.

A partial circuit can still be useful if it predicts what happens when the system is manipulated.

The danger is aesthetic confidence.

A graph looks like an explanation.

Nodes have labels. Arrows connect them. The picture resembles a causal diagram. A reader can forget how much computation is absent from the drawing.

Developmental comparison offers one defense against this seduction.

If the same supposed circuit can be traced through checkpoints and its emergence predicts a capability across runs, the explanation earns more weight.

If the circuit appears only under one interpretability lens or only in the final model after the fact, we should be more cautious.

History can become a falsification tool for interpretability.

This is a useful reversal.

Interpretability is usually imagined as a tool for understanding training.

Training history can also be a tool for testing interpretability.

The relationship is reciprocal.

Consider two models trained from different random seeds on the same task.

Both eventually achieve similar performance.

An interpretability method identifies a circuit in the first model.

Does the second model develop an analogous circuit?

If yes, perhaps the mechanism is a robust solution favored by the task and architecture.

If no, the behavior may admit several internal implementations.

Train ten models and the developmental regularity becomes a scientific object.

Which mechanisms recur?

Which are contingent?

Which appear at similar stages?

Which are sensitive to data order?

Which predict later capability?

This moves the field away from case studies of one interesting network toward comparative biology of learned systems.

Again, the biology analogy should not be confused with biological equivalence.

The value lies in comparing forms and development, not in claiming neural networks are organisms.

A powerful model may contain convergent solutions.

Different runs can discover similar computational motifs because the task rewards them. Other solutions can be historically contingent.

This distinction has practical consequences for safety.

Suppose a dangerous capability repeatedly appears only after a particular internal pattern develops.

If the pattern is consistent across runs, it may become an early warning signal.

Researchers could monitor it before the capability is fully visible in behavioral tests.

That would be a remarkable inversion of ordinary evaluation.

Today, capabilities are usually detected from what the model can already do.

A developmental trace could someday indicate what the model is becoming before the endpoint behavior is obvious.

This prospect should be approached carefully.

The history of science is full of biomarkers that looked predictive in one dataset and failed outside it. A feature that correlates with a capability in small models may not scale. A circuit that appears before one behavior can merely share a common cause with it. Monitoring internal structure at frontier scale is technically expensive and method-dependent.

Early warning requires repeated prospective validation.

The phrase “prospective” is important.

It is easy to tell a beautiful developmental story after the model succeeds.

Find a feature in the final network. Search backward through checkpoints. Point to the moment it begins to strengthen. Declare the origin discovered.

That is archaeology with hindsight.

A stronger test is to define the signal before the final capability is known, then see whether it predicts later emergence across new training runs.

Could an investigator at checkpoint 20 have forecast the change at checkpoint 30?

Could the signal distinguish runs that later develop the capability from runs that do not?

Would intervening on the signal alter the future trajectory?

These questions separate a trace that merely narrates the past from a trace that contains information about the future.

The distinction will matter enormously as training runs become expensive.

A frontier model may consume so much compute that waiting until the end to discover an unwanted capability is wasteful. If internal developmental markers can identify problematic trajectories earlier, training could be paused, data changed, objectives revised, or additional evaluations introduced.

The trace becomes control infrastructure.

This possibility also complicates the role of checkpoints.

A checkpoint is not just a state to compare later. It can be a branching point.

Return to an earlier state.

Change the data mixture.

Change the learning rate.

Add or remove an objective.

Continue along two paths.

The shared parent makes the comparison unusually informative.

This is a developmental experiment in the strongest sense.

Two models begin from the same history and diverge after one intervention.

If a circuit appears on one branch and not the other, and the associated capability diverges too, causal confidence increases.

Software engineers would recognize the structure as a fork.

Biologists would recognize it as a controlled perturbation.

Machine learning can do both because its developmental states are executable.

The science has barely exploited this property at scale.

Most large-model training is too expensive to branch casually. But post-training stages are cheaper, and smaller proxy models can test hypotheses. As interpretability becomes more efficient, targeted branching may become one of the best ways to understand how capabilities form.

The model's history can be experimentally rewound.

Not perfectly.

Hardware nondeterminism, data pipelines, optimizer states, and distributed systems can make exact reproduction difficult. A checkpoint without the corresponding optimizer state is not a complete return to the old training condition. External data sources can change. Code can drift.

This is why provenance accompanies the fossil.

A state is most valuable when the conditions needed to resume from it are also preserved.

The same principle applies to internal features.

If a model-diffing system says a new feature appears after fine-tuning, the strongest next experiment is not to admire the difference.

Branch from the parent.

Repeat the tuning without suspected data.

Change the reward signal.

Ablate the feature.

Watch whether the developmental event moves.

The moment a circuit appears becomes a manipulable variable.

This style of inquiry has implications for how we explain machine learning to the public.

The usual language suggests capabilities live inside models as possessions.

The model has arithmetic.

The model has theory of mind.

The model has coding skill.

The model has a refusal mechanism.

Possession language hides formation.

A developmental account can be more precise.

A behavior became detectable after this stage.

An internal mechanism strengthened across these checkpoints.

A feature was present earlier but became causally important later.

A later fine-tune changed access to an older capability.

These sentences are clumsier.

They are also more scientific.

They remind us that capabilities can have histories even when the final behavior looks instantaneous.

The distinction becomes especially important when a behavior is suppressed.

If a model stops producing a certain output after safety training, did the mechanism disappear?

Did an inhibitory mechanism appear on top of it?

Did representations shift so the old route no longer works?

Can the behavior return under unusual prompting or later fine-tuning?

A static refusal rate cannot answer these questions.

A developmental circuit trace might.

This is why the story of learning cannot end with capability acquisition.

Mechanisms can be layered, redirected, and overwritten.

A circuit can be a fossil under later behavior.

The model can contain older paths that are no longer the default.

This makes the internal history stratified.

The language of layers is dangerous because neural-network “layers” already mean something technical. The historical layer is not necessarily one architectural layer. It is a stage of development whose residue can be distributed throughout the network.

A pretraining mechanism can survive post-training everywhere and nowhere in particular.

A fine-tuning update can make small numerical changes across many parameters yet reshape a narrow behavior strongly.

The trace is temporal, not anatomical.

This distinction may be the most important contribution development makes to interpretability.

Where is the behavior?

That is an anatomical question.

When did the behavior become possible, and how did the machinery change as it did?

That is a historical question.

The two should meet.

A mature science of learned systems will not be satisfied with a map of circuits in one final checkpoint. It will want family trees of mechanisms.

Which features are ancient?

Which are recent?

Which are conserved across models?

Which arise independently under similar pressures?

Which disappear after tuning?

Which survive every intervention?

Which are replaced by more efficient routes?

Which appear before the capability they later support?

These questions sound extravagant because the field is still learning how to identify features reliably in a single model.

That is exactly why the traces should be preserved now.

The future instrument may be better than the present one.

If the intermediate models are gone, a better instrument cannot reconstruct their development.

There is a moment when every learned mechanism is new.

The final model hides that moment by making the mechanism look inevitable.

The checkpoint gives it a date.

The intervention gives it a test.

The comparison gives it meaning.

That is how a circuit stops being a picture and becomes a history.
