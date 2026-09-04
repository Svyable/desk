# The Model Has a Past

There is a common trick in museums.

Put the finished object under glass.

A violin. A telescope. A pocket watch. A lunar sample. A dress. A machine tool. A page of handwritten equations. A transistor from an early computer. The object has edges. It can be labeled. A visitor can stand in front of it and understand, at least superficially, what is being shown.

The difficulty begins when the important thing is not the object but the process that produced it.

A violin does not contain the apprenticeship of the person who made it. A telescope does not show the sequence of failed lenses ground before the useful one. A polished theorem does not display the abandoned lemmas, the wrong conjecture that consumed three months, or the moment when a notation change made the proof possible. Finished things are efficient containers for outcomes. They are poor archives of becoming.

Machine-learning models have the same problem at industrial scale.

A model checkpoint is wonderfully concrete. It is a set of numbers. It can be copied, hashed, stored, loaded, evaluated, quantized, fine-tuned, merged, served, and compared on benchmarks. It feels like the thing itself.

In one important sense, it is.

In another, it is the last page of a diary whose earlier pages were thrown away.

The final weights tell us where training ended. They do not, by themselves, tell us how the model arrived there.

This distinction sounds philosophical until something goes wrong.

Suppose a new version of a language model begins refusing a class of ordinary requests that the previous version answered. An output-only investigation can collect examples and characterize the behavior. A static interpretability investigation can look for features or circuits associated with the refusal. Both are useful.

But a developmental investigation asks a different question.

When did the refusal appear?

Was it absent after pretraining and present after supervised fine-tuning?

Did it emerge during preference optimization?

Did it arrive suddenly after a narrow safety dataset was introduced, or did a latent pattern already exist and merely become easier to activate?

Did the intervention alter a broad concept, or only the route from concept to output?

Did neighboring capabilities change at the same time?

Those questions require a past.

Software teams routinely preserve one.

The habit is so ordinary that it is difficult to remember how powerful it is. A programmer changes ten lines and commits them. Later, somebody can inspect the diff. They can ask who changed the lines, what the code looked like before, what issue was being addressed, what tests moved with the change, and whether later commits altered the same area again.

This does not make software easy to understand. Large systems remain complicated. A diff can be misleading. A bug can arise from the interaction of several innocent changes. A commit message can be wrong. Code history can be rewritten. The point is not perfection.

The point is that preserved history changes the cost of inquiry.

Without history, a reviewer faces the entire system.

With history, the reviewer can begin with change.

Machine learning has an equivalent but has not yet made it culturally ordinary.

A training run is a sequence of model states. At every update, the parameters change. An optimizer uses gradient information and its own internal state to decide how. A learning-rate schedule changes the size of updates. Batches arrive in an order. Data augmentation changes what is effectively presented. Regularization adds pressures that are not visible in the raw labels. Distributed training combines work from many devices. Later post-training stages can alter a pretrained model in ways that are small in parameter distance and large in behavior.

The full microscopic history is enormous.

Nobody should mistake the argument of this book for a demand to save every intermediate tensor forever.

The interesting question is what kinds of history are worth preserving because they create explanatory leverage later.

This question has already been answered, piecemeal, by engineering practice.

Teams save checkpoints because a run may fail and restarting from zero is expensive. They record loss because divergence matters. They keep validation curves because overfitting matters. They store optimizer state because resuming training requires it. They track hyperparameters because experiments need comparison. They version code because reproducibility matters. They record datasets because changing the data can change the result.

Each practice begins as operational hygiene.

Together, they form the outline of a developmental record.

The record becomes scientifically interesting when we stop treating the traces as isolated conveniences.

Consider a simple classification model trained for many epochs.

The final accuracy might be 92 percent. That number compresses the run brutally. It does not reveal whether accuracy climbed smoothly, jumped early and then stalled, degraded before recovering, or improved only after the model had already fit most of the training set. It does not reveal whether one class became easy before another. It does not reveal whether a subgroup improved late. It does not reveal whether the same final score could have been reached through a different internal solution.

A learning curve returns time to the story.

Even the humble curve can overturn the intuition created by the final score.

The phenomenon known as grokking is an extreme example. In experiments that helped popularize the term, models trained on algorithmic tasks could first memorize the training data and remain poor at held-out examples. Continued optimization, long after the training set had effectively been fit, could eventually produce a sharp improvement in generalization. The test performance changed much later than a simple story of “fit the examples, then generalize” would suggest.

The importance of grokking for this book is not that every modern model secretly waits for a dramatic phase transition. Many do not. The experimental setups are specific, and the dynamics depend on choices such as regularization and task structure.

The importance is conceptual.

A final checkpoint can make two histories look identical.

One model may have generalized early. Another may have spent a long period memorizing before reorganizing into a more general solution. If both finish with the same score, the endpoint hides the difference.

The path is evidence about the mechanism.

There is an older machine-learning instinct that works against this idea.

Optimization often encourages us to think of many parameter settings as interchangeable if they produce similar performance. Neural networks have symmetries. Units can sometimes be permuted. Different random seeds can lead to different coordinates while preserving function. Vast parameter spaces contain many solutions that are equivalent enough for the task we care about.

This is good engineering news.

It also makes naïve history difficult.

If two training runs produce functionally similar models through different parameter arrangements, a literal subtraction of their weight tensors may tell us less than we hoped. The number that moved is not necessarily the concept that moved. Parameter distance is not behavioral distance. A small update can create a visible behavioral change, while a large update can leave familiar outputs intact.

The historical view therefore cannot simply mean “save the weights and subtract them later.”

It needs richer traces.

Behavioral evaluations across checkpoints.

Representational snapshots.

Influence estimates.

Activation statistics.

Data-order metadata where appropriate.

Known intervention boundaries.

A record of which objective was being optimized.

Probes that follow a capability through training rather than testing it only at the end.

This is already happening in research, although the pieces live under different names.

Some researchers study training dynamics by repeatedly probing capabilities during pretraining. Others study when in-context learning emerges. Others compare base and fine-tuned models. Others train sparse autoencoders on multiple models and look for shared or exclusive features. Others measure which examples influence a prediction. Others inspect memorization over time. Others preserve ensembles of checkpoints because a trajectory improves attribution.

The techniques differ because the object being reconstructed is not one thing.

There are at least four histories inside a trained model.

The first is the history of **performance**: what the model could do at different points.

The second is the history of **representation**: how internal features and computations changed.

The third is the history of **influence**: which data and objectives pushed the system toward particular behaviors.

The fourth is the history of **intervention**: what humans deliberately changed through fine-tuning, filtering, preference data, safety training, editing, or unlearning.

These histories overlap without being identical.

A model can improve performance while changing representation very little. It can change representation while a benchmark remains flat. A training example can influence a model without being recoverable as memorized text. A fine-tuning stage can change behavior in one region while leaving most capabilities intact. An unlearning procedure can make a target sequence hard to elicit while leaving related representations useful for other tasks.

The temptation is to seek one master trace that resolves everything.

There probably is not one.

That is why the analogy to a medical chart is more useful than the analogy to a flight recorder.

A flight recorder suggests a near-complete time series of designated signals. A medical chart is messier. It contains labs, images, notes, medications, diagnoses, vital signs, procedures, and gaps. No single entry is the patient's history. The history emerges from several records that were created for different purposes and have different error modes.

Model histories may look like that.

A checkpoint can tell one part of the story. A behavioral probe tells another. Data lineage tells another. A circuit map tells another. A red-team transcript catches a behavior that aggregate metrics missed. A training-loss anomaly points to a corrupted batch. A model diff reveals an internal feature that appears only after fine-tuning. A memorization test shows that a string survived training more literally than the generalization narrative implied.

The traces become compelling when they converge.

Imagine that a model begins producing a distinctive false association after a fine-tuning run.

A static analysis finds a feature associated with the topic. That is interesting.

A model diff shows that the feature became much stronger after the fine-tune. More interesting.

Data attribution points repeatedly to a small cluster of fine-tuning examples containing the same association. Stronger.

Removing or correcting those examples and repeating the fine-tune weakens the feature and the behavior. Stronger still.

An intervention on the feature changes the output in the predicted direction. Now the causal story has several independent supports.

None of the methods alone had to be perfect.

The history made triangulation possible.

This is what an experimental science of model development could look like.

It is easy to underestimate how new this is because machine learning already feels deeply empirical. Researchers run enormous numbers of experiments. They graph losses. They publish ablations. They benchmark architectures. They compare datasets. The field is not short on measurement.

What is less mature is the idea of treating one model's development as an object worthy of longitudinal study in its own right.

Most experiments still treat training as a function call.

Specify architecture, data, objective, seed, hyperparameters. Run. Receive model.

The paper cares about the mapping from input conditions to endpoint result.

The intermediate states are usually useful only insofar as they help diagnose the run.

That habit begins to break down when the run itself is expensive enough, complex enough, and consequential enough that it cannot be casually repeated.

A frontier training run is not a lab mouse that can be reproduced on demand by any interested team.

The cost changes the epistemology.

When an experiment is expensive, preserving traces becomes more valuable because future investigators may not be able to recreate the conditions. When the dataset is proprietary or legally constrained, even a well-funded outsider may be unable to reproduce the run. When post-training involves private human feedback or internal red-team data, the developmental path becomes partly unique.

The model is then closer to an astronomical event than a classroom demonstration.

You get the observation once.

If you did not preserve the relevant signal, you may not get another chance.

Astronomers learned this long ago. A telescope survey does not know every future question that will be asked of its images. That is why archives matter. Years later, a researcher can return with a new method and discover something in observations that were collected for another purpose.

The same logic applies to training traces.

Today's uninteresting checkpoint may be tomorrow's only evidence of when a capability appeared.

Today's routine experiment log may be the only surviving record that a learning-rate change preceded a behavioral shift.

Today's discarded base model may be needed to determine whether a later safety feature was truly introduced during fine-tuning or merely amplified.

Today's “temporary” dataset version may be the only way to test whether a copyrighted, private, poisoned, or mislabeled record had influence.

Preservation is not free.

Large checkpoints consume storage. Internal telemetry can reveal proprietary information. Detailed traces can increase privacy risk. Data lineage can expose sources that organizations are contractually or competitively unable to publish. Training logs can leak architecture choices or security-sensitive details. Keeping everything forever is neither practical nor desirable.

The response to these costs should be selection, not amnesia.

Archives have always made choices.

The mature question is not whether to preserve all history. It is which traces have enough future explanatory value to justify their cost and risk.

At minimum, a developmental record for a consequential model might preserve clear stage boundaries, representative checkpoints, major dataset versions, objective changes, evaluation trajectories, and enough metadata to reconstruct what happened when.

More ambitious systems could preserve sampled gradients or influence sketches, feature snapshots, known memorization probes, fine-tune diffs, and records of significant safety interventions.

The exact list will change with the science.

The principle is simpler.

Do not throw away the only evidence merely because you do not yet know which question will make it valuable.

This principle has another consequence.

Model versioning should eventually mean more than assigning a new name.

When a consumer sees Model 4.2 after Model 4.1, the version number implies lineage. But the visible lineage is usually shallow. We may know that the new model is faster or cheaper, or that it scores higher on a benchmark. We often do not know whether it shares the same base training, whether a safety stage changed, whether the architecture changed, whether the data mixture shifted, or which capabilities were relearned.

Commercial secrecy explains part of this opacity. Scientific immaturity explains another part.

We do not yet have a widely accepted vocabulary for describing the developmental difference between two large learned systems.

Software has patches, minor releases, major releases, backports, forks, merges, and dependency updates.

Machine learning has base models, fine-tunes, adapters, checkpoints, merges, quantizations, distillations, preference-tuned variants, and continual-learning updates, but the language does not yet carry a shared forensic standard.

A “new model” can mean almost anything.

The absence of history makes marketing easy.

It also makes auditing expensive.

A regulator, enterprise buyer, researcher, or safety team facing a new release has to decide where to look. Did the system change in a way that requires a full re-evaluation, or is most of the relevant structure inherited? Which prior safety evidence still applies? Which new risks could have appeared? Which behaviors were supposed to change and which changed accidentally?

A developmental trace does not answer those questions automatically.

It changes the starting point.

Start with the diff.

Follow the residue.

Ask what moved.

Then decide how much of the whole system must be reopened.

This is not merely a technique for safety.

It is a way of doing science on learned systems.

The deepest question in machine learning has always been hiding behind the benchmark.

What did the machine learn?

The usual answer is a list of capabilities.

The historical answer is harder.

When did it learn them?

From what pressures?

In what order?

Through which intermediate representations?

What had to be present first?

What disappeared when something new arrived?

What did the model carry forward from an earlier stage?

What survived every attempt to remove it?

A finished model can answer none of those questions by existing.

For that, we need its past.
