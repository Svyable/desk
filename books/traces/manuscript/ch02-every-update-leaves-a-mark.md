# Every Update Leaves a Mark

A neural network does not learn a fact by opening a drawer and putting the fact inside.

The metaphor is tempting because storage is the computer behavior we know best. Files go into folders. Rows go into databases. A document can be copied, deleted, or moved. If a model has seen a sentence, we imagine some tiny version of that sentence sitting somewhere inside the weights, waiting to be retrieved.

Sometimes memorization makes the metaphor feel almost right.

Most of learning is stranger.

A training example arrives. The model makes a prediction. The loss function measures how wrong the prediction is for the objective being optimized. Backpropagation computes how changes in parameters would change that loss. The optimizer uses that information to update the parameters.

Then the next example arrives.

The update has changed the system that receives it.

This is the first reason learning has a history.

The same example does not meet the same model twice.

An early batch reaches a system near initialization. A later batch reaches a system already shaped by thousands, millions, or billions of earlier updates. The example's effect depends on the state it encounters, just as a conversation lands differently on a person before and after years of experience.

The analogy to human experience should not be pushed too far. A gradient is not a memory, an optimizer is not a personality, and a parameter update is not a thought. The useful point is narrower: learning is sequential interaction between data and a changing learner.

That interaction makes influence path-dependent.

Machine-learning diagrams often hide this because they are drawn from the top.

There is a dataset on the left and a trained model on the right. An arrow labeled training connects them. The arrow is the most important part and usually receives the least space.

Inside that arrow, order matters.

Batch construction matters.

Learning rate matters.

The optimizer matters.

Initialization matters.

Regularization matters.

Data augmentation matters.

The objective matters.

What the model already knows matters.

The cumulative result is not a ledger in which each example owns a fixed slice of the final weights. Examples interfere. They reinforce one another, compete, become redundant, become useful only after other representations exist, or matter differently at different stages.

This is why the apparently simple question “which training example caused this output?” is difficult.

Cause does not arrive in clean rows.

Suppose a language model answers a question about a historical event correctly.

There may be a paragraph in the training data that states the answer directly. There may be thousands of documents containing partial evidence. There may be descriptions in several languages. There may be biographies, tables, encyclopedia entries, news archives, and books that all contribute overlapping structure. The model may have learned the fact in something close to a memorized form, or it may reconstruct the answer from representations learned across many contexts.

There may not be one example behind the answer.

There may be ancestry.

Ancestry is a better word because it allows many influences and does not require a one-to-one copy.

The machinery of gradient descent gives us a way to think about that ancestry without pretending it is simple.

At a given moment in training, each example produces a gradient: a direction in parameter space that would reduce the example's loss locally. If two examples produce gradients pointing in similar directions, an update that helps one may also help the other. If their gradients oppose each other, improving one can worsen the other. The geometry can be vastly more complicated than this picture, but the basic relationship matters.

Learning leaves marks because updates change the future response of the model.

A mark need not look like the example that made it.

This is an important departure from ordinary notions of provenance.

If I copy a sentence from a document, the provenance problem is recognizable. The sentence resembles its source. A plagiarism detector can look for overlap. A reader can compare wording.

A training example can influence a model while leaving no such visible copy.

The influence may appear as a changed decision boundary, a more stable representation, a slightly different probability assigned to thousands of later sequences, or an internal feature that becomes useful across tasks unrelated to the original example's surface form.

The trace can be distributed.

This is the second reason machine-learning history requires new tools.

Traditional archives preserve objects.

Machine-learning archives may need to preserve effects.

One of the clearest attempts to do this is TracIn.

The method begins from an almost childlike observation: if a training example helps a test example, then when the model trains on the first one, the loss on the second should tend to improve. In the exact imagined version, we could watch the target prediction after every training step and attribute the change to the example just used.

Real training is messier. Batches contain multiple examples. Modern models are large. Recording and replaying every microscopic effect would be expensive. So the practical method uses approximations based on gradients and saved checkpoints.

At each checkpoint, compare the gradient for a training example with the gradient for the target example. If the gradients align, an update that improves the training example would tend, locally, to improve the target as well. Sum this relationship across checkpoints and you obtain an estimate of influence through the path of training.

The elegance is not that the estimate is perfect.

It is that time is part of the estimate.

The same pair of examples can have different relationships at different checkpoints because the model between them has changed.

That fact seems obvious once stated. It is easy to lose when we inspect only the final model.

Imagine two examples that look similar in language but play different roles across training.

Early in the run, both may be difficult and push the model toward a useful shared representation. Later, one becomes redundant while the other remains informative because it contains an edge case. At the end, both have low loss. A final-state comparison can make them look equally uninteresting.

The trajectory separates them.

This is one of the recurring patterns in learning science: endpoints collapse stories that trajectories preserve.

The idea appears outside influence estimation too.

Dataset cartography watches confidence and variability across epochs. Grokking research watches generalization arrive after memorization. Mechanistic studies can probe features at multiple training stages to ask when they appear. Scaling-law research watches loss decline as compute, data, and model size increase. Continual-learning research studies what is forgotten when new tasks arrive. Fine-tuning studies compare before and after states. Model-diffing methods search for features that differ across versions.

All of these approaches become more informative when learning is treated as a movie rather than a photograph.

The movie has another property that complicates explanation.

Updates can cancel.

An example can push a model one way, and later data can push it back. A feature can begin to form and then disappear. A representation can be useful for one phase of training and become obsolete after a better one develops. A bias can be amplified, corrected, and partially reintroduced through later fine-tuning.

If we inspect only the final weights, an early influence that was later canceled may be invisible.

If we inspect only an early checkpoint, we may mistake a temporary structure for a mature mechanism.

A historical account needs both persistence and disappearance.

This may eventually change how we talk about model behavior.

Today we often use static verbs.

The model knows.

The model memorized.

The model learned.

The model forgot.

Each verb compresses a sequence.

A stronger account would ask when the behavior became measurable, whether it remained stable, how it responded to later training, and what evidence links it to particular data or mechanisms.

That level of detail is not needed for every application. Nobody wants a developmental biography every time a spam classifier marks an email.

But the compressed verbs become dangerous when the stakes rise.

Consider a model that reproduces private information.

Saying the model “memorized” the record may be directionally correct, but the policy questions depend on detail. Was the record repeated many times? Did it appear once in an unusually distinctive format? Did memorization emerge early? Did deduplication reduce it? Did later fine-tuning suppress reproduction without removing the underlying influence? Can an unlearning procedure actually reduce the measurable effect?

Those are trace questions.

Or consider a model that acquires a narrow unsafe behavior during fine-tuning.

The organization may want to know whether the fine-tune created the capability or merely removed an inhibition on a capability already present in the base model. The remediation differs. If the underlying mechanism is old, removing the newest examples may not be enough.

Again, history matters.

There is a seductive idea that sufficient interpretability of the final network will make history unnecessary.

If we could map every circuit and feature perfectly, perhaps the developmental path would be irrelevant. We would simply read the finished mechanism.

Biology gives reasons for doubt.

An anatomist can learn a great deal from an adult organism. Development still matters. Some structures make sense only through the process that formed them. The same adult outcome can sometimes be reached through different developmental paths. Early perturbations can have effects that are difficult to infer from the final anatomy alone.

Machine learning is not biology, but the epistemic lesson transfers.

Mechanism and development answer different questions.

A circuit tells us how a computation occurs now.

A developmental trace can tell us when the circuit became important and what pressures accompanied its emergence.

The combination is more powerful than either alone.

This is especially true because deep learning contains many accidental histories.

A random seed changes initialization and data order. Hardware nondeterminism can alter floating-point operations. Shuffling changes which examples meet which state. Small early differences can push optimization toward different regions of parameter space. Large models often remain functionally robust despite this microscopic contingency, but the internal route can vary.

The existence of contingency means we should distinguish two kinds of trace.

One is **necessary history**: evidence of pressures without which the behavior would probably not exist.

The other is **contingent history**: evidence of the particular route this run happened to take.

Influence methods often struggle with exactly this distinction.

If many examples are interchangeable, removing one may have little effect even though the broader dataset category was essential. The model could learn the same pattern from a neighbor. A point can have low individual influence and high group importance.

Conversely, an unusual example may have high measured influence because the run happened to use it at a sensitive moment, even though another run would reach a similar function without it.

The historical view therefore should not romanticize every trace.

Some marks are causal fingerprints.

Some are footprints made by a route that could easily have been different.

The science is learning to tell them apart.

This distinction leads naturally to counterfactuals.

What would have happened if the example were absent?

If the dataset were reweighted?

If the batch order changed?

If training stopped at an earlier checkpoint?

If the learning rate decayed later?

If the fine-tuning stage were repeated from the same base model with corrected data?

If a feature were intervened on?

A trace becomes scientifically strong when it supports a counterfactual that can be tested.

This is why simple correlations across checkpoints are useful but limited. A feature appearing at the same time as a capability does not prove the feature causes the capability. A training example with similar wording to an output does not prove the output was copied from that example. A parameter region that changes after fine-tuning does not prove the changed behavior originates there.

Intervention matters.

Retraining matters.

Ablation matters.

Unlearning matters.

Steering matters.

The historical record tells us where to intervene.

The intervention tells us whether the historical story survives contact with causality.

This relationship between trace and intervention may become one of the central methods of AI science.

First, observe a developmental difference.

Then propose a causal story.

Then manipulate the suspected part of the system.

Then watch whether the behavior changes in the predicted direction.

The process looks less like reading a mind and more like experimental physiology.

This is a healthier metaphor than “opening the black box.”

A box is either open or closed. The metaphor invites a fantasy of total access: once we can see inside, the mystery ends.

A living experimental science works differently.

More visibility creates more questions.

A circuit map reveals dependencies that need testing. An influence estimate points to examples that need retraining experiments. A diff identifies features that need behavioral validation. A checkpoint trajectory reveals a transition that needs a mechanism.

The trace is not the explanation.

It is the place to dig.

That is why preserving intermediate evidence matters even when current tools cannot fully interpret it.

Methods improve.

A checkpoint saved in 2026 may be analyzed in 2030 using a technique that did not exist when the model was trained. The checkpoint does not become obsolete merely because the original team lacked the lens.

The same is true for metadata.

A record of which dataset version was active, which objective changed, or which fine-tuning stage began can turn an otherwise mysterious behavioral shift into a tractable comparison years later.

Without the trace, future sophistication cannot recover the missing past.

There is a practical boundary here.

Not every update deserves permanent storage.

Training can involve trillions of token presentations and enormous numbers of optimizer steps. The raw microscopic history would be unmanageable, and detailed per-example traces can create severe privacy and proprietary-data risks.

The solution will be compression.

Representative checkpoints.

Sketches of gradient behavior.

Aggregated influence structures.

Stage boundaries.

Capability probes.

Feature dictionaries sampled through training.

Data-lineage hashes.

Selective replay buffers.

The exact mechanisms will vary.

The principle is that history can be summarized without being erased.

Human institutions already know how to do this in other domains.

A financial system does not preserve every electrical transition in a server, but it preserves transactions and audit trails. A hospital does not record every molecular event in a patient, but it keeps measurements that support later reconstruction. An aircraft does not save every physical detail of a flight, but it records selected variables because investigators may need them after an event nobody predicted.

Machine learning will develop its own equivalent.

The need will become obvious the first time an organization faces a consequential question that the final model cannot answer.

When did this behavior appear?

Which stage introduced it?

Which data mattered?

What else changed at the same time?

Could the earlier state be recovered?

Was the problem truly removed?

Those questions are already being asked.

The infrastructure for answering them is younger than the systems producing the problems.

That gap will close.

Every update leaves a mark.

The challenge is deciding which marks we learn to keep.
