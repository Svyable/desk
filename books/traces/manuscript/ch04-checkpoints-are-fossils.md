# Checkpoints Are Fossils

A checkpoint is saved because engineers are afraid of losing work.

That is the practical reason.

Training can run for hours, days, or much longer. Machines fail. Jobs are preempted. Networks hiccup. Storage systems misbehave. A run that has consumed enormous compute should not have to begin from zero because one process crashed near the end.

So the model is saved periodically.

The checkpoint is insurance.

Then the scientists arrive later and discover that the insurance policy is a fossil bed.

A sequence of checkpoints preserves intermediate organisms.

The analogy is imperfect in an important way. A fossil is evidence left by something that no longer exists. A model checkpoint is not merely an impression. It can often be loaded and run. The extinct state can speak.

That makes machine-learning history unusually experimental.

A paleontologist cannot ask a juvenile dinosaur to perform the adult animal's task.

A researcher can sometimes load an early model checkpoint and ask it the exact same question posed to the final model.

The past becomes executable.

This fact is so useful that it should change how we think about training records.

Suppose a language model eventually develops reliable in-context learning: it can infer a pattern from examples given in the prompt and apply the pattern to a new case. If we have only the final model, we can study the mechanism that supports the behavior now. We can look for attention heads, features, or circuits associated with it.

If we have checkpoints, another experiment becomes possible.

Test the behavior throughout training.

Find the period when performance begins to improve.

Inspect which internal structures are changing around the same time.

This is roughly the spirit of work on induction heads and in-context learning. Researchers studying small transformers found a phase change during training in which specialized attention patterns associated with copying and completing repeated sequences appeared alongside a sharp improvement in in-context learning behavior. The details are specific to the models and experiments. The broader method matters here.

A capability was given a birth window.

That is different from locating a mechanism in the adult model.

Development gives mechanism a chronology.

Once a capability has a chronology, causal questions multiply.

What happened immediately before it appeared?

Was there a change in loss on a relevant distribution?

Did a particular head or feature become sharply more active?

Did the behavior arrive across several random seeds at roughly the same training stage?

Does disrupting the suspected mechanism prevent the capability in the mature model?

Can altering training conditions delay or accelerate its appearance?

A checkpoint series does not answer these questions by itself.

It makes them askable.

This is the core value of fossils.

They turn a story about origins into evidence that can be dated.

Machine-learning researchers already use developmental language casually.

A capability emerges.

A model acquires a behavior.

A circuit forms.

A representation becomes disentangled.

The network transitions from memorization to generalization.

These verbs imply time. Without intermediate measurements, time is being inferred from endpoints.

That is sometimes enough. If a small model lacks a capability and a large model has it, scale can be used as a proxy for development. If a base model behaves one way and a fine-tuned model behaves another, the tuning boundary gives a before and after.

But proxies can hide the interesting interval.

A developmental transition can be gradual in one measure and sharp in another. A behavior can become detectable long before it becomes reliable. An internal feature can exist weakly before a benchmark notices it. A capability can be present but inaccessible under ordinary prompts until later training changes the interface.

The checkpoint exposes the interval.

Grokking made this lesson famous because the interval was so dramatic.

In the canonical setup, a model learns an algorithmic task from a limited training set. It can reach near-perfect training accuracy while remaining poor on held-out examples. Training continues. For a long time, little seems to improve on the test set. Then generalization rises sharply.

The phenomenon undermines one of the easiest narratives to tell from a final checkpoint.

The final model generalizes.

Therefore, we might imagine that it learned a general rule as soon as it fit the training examples.

The checkpoints say otherwise.

For part of its life, it had a solution that worked on the training set without extending well beyond it.

Later, something changed.

The behavior reorganized.

The example is unusually clean because the tasks are synthetic and the models small enough to study. Frontier language models live in a far noisier world. Their objectives are broad. Their datasets are heterogeneous. Capabilities overlap. Evaluation itself can be unstable.

That makes checkpoints more valuable, not less.

A large model's final state contains too many plausible causal stories.

The intermediate states eliminate some of them.

Consider a behavior that appears after a model has been fine-tuned for helpfulness.

Without the base checkpoint, we may attribute the behavior to the fine-tuning stage because that is when we first observed it.

With the base checkpoint, we can test whether the behavior already existed under different elicitation conditions.

If it did, the tuning may have changed accessibility rather than created the underlying capability.

This distinction matters for safety research.

A dangerous capability that has been suppressed is different from a capability that has been removed. A deceptive tendency that disappears under ordinary evaluation may still be represented internally. A refusal behavior may be layered on top of earlier knowledge rather than replacing it.

The past model can act as a control group.

This is one reason model diffing has become interesting.

The ordinary software diff compares explicit source changes. A model diff has to compare learned representations that may not line up cleanly. Two models can encode similar concepts in different directions. Fine-tuning can alter many parameters while leaving most behavior stable. Models with different architectures do not even share the same internal coordinate system.

Researchers have developed tools such as crosscoders to learn shared and model-specific features across representations. In 2026, Anthropic researchers described a dedicated-feature crosscoder intended to identify features unique to one model even when the models had different architectures. Their framing borrowed directly from software engineering: instead of auditing an entire new model, surface the differences first.

The method found behavior-linked features that distinguished several open-weight models. The researchers emphasized a crucial limit: identifying a feature unique to one model does not establish why it is there. The origin could be deliberate tuning, training data, architecture, or another factor.

This is where checkpoints restore leverage.

A cross-model diff is strongest when paired with developmental lineage.

If a feature appears only in Model B, and Model B descends directly from Model A through a known fine-tuning stage, the causal search is narrower than if the two models were trained independently by different organizations.

Add intermediate checkpoints from the fine-tune and the window narrows further.

Add data attribution and behavioral probes, and the story may become experimentally tractable.

Fossils work best when their strata are labeled.

Geology without stratigraphy would be a collection of interesting rocks.

Machine-learning history without metadata risks the same fate.

A checkpoint should not merely be “step-120000.pt.”

Its value rises if the surrounding record tells us what data mixture was active, what objective was optimized, what learning rate was used, what code version produced it, what evaluations were run, and whether any significant intervention occurred near that point.

The model state is one layer.

The context makes it history.

This is a mundane observation with expensive consequences.

Storage systems are full of orphaned checkpoints.

Teams accumulate artifacts during experiments. A directory survives longer than the README that explained it. A run identifier points to an experiment tracker that is later deleted. A dataset URI changes. A fine-tuning script is refactored. The people who knew what happened move to another project.

The bytes remain.

The meaning decays.

Archaeologists know this problem as provenance.

An object found in a documented layer of a site can answer questions about age, association, and sequence. The same object removed from context and placed in a drawer may still be beautiful, but much of its scientific value is gone.

Machine-learning checkpoints have provenance too.

Which run?

Which data?

Which stage?

Which parent model?

Which optimizer state?

Which code?

Which evaluations?

Which intervention?

The answers turn storage into evidence.

This will matter increasingly as models become composite products.

A commercially deployed system may not descend from one clean training run. It can begin with a base model, receive instruction tuning, preference optimization, safety fine-tuning, domain adapters, retrieval components, tool policies, and periodic patches. Some layers may be produced by vendors. Others by the deploying organization. Some may be swapped without changing the product name.

The visible system has a genealogy.

If the genealogy is not recorded, later auditing becomes guesswork.

This is familiar in other technical domains.

A food manufacturer tracks lots because contamination investigations depend on knowing which ingredients entered which products.

A pharmaceutical manufacturer keeps batch records because quality cannot be established solely by inspecting a pill after the fact.

An aircraft has maintenance logs because the current machine embodies a sequence of repairs and replacements.

A public company keeps transaction records because the balance sheet is not a sufficient audit trail.

Machine-learning systems are beginning to deserve the same seriousness.

A final checkpoint is not the entire chain of custody.

This phrase—chain of custody—sounds legal, and eventually it may be.

For now, it is scientific.

Can we establish that Model C came from Model B, which came from Model A?

Can we identify which tuning stage introduced a change?

Can we reproduce the stage if necessary?

Can we compare the intermediate states?

Can we distinguish a behavior inherited from the base model from one introduced later?

Can we verify that an unlearning procedure was applied to the intended parent checkpoint rather than a different variant?

Can we tell whether a claimed safety update changed the model or merely the serving layer around it?

These questions will become ordinary once learned systems become infrastructure.

The surprising part is how much evidence we already know how to preserve.

Hashes can establish artifact identity.

Versioned manifests can record data mixtures.

Run metadata can record objectives and hyperparameters.

Representative checkpoints can preserve developmental states.

Evaluation suites can be replayed across them.

Feature extractors can snapshot internal representations.

Model-diffing tools can compare versions.

Influence systems can preserve approximate data ancestry.

None of these requires a solution to machine consciousness or a perfect theory of deep learning.

They require an archival habit.

The objection is cost.

A large model checkpoint can be enormous. Saving many checkpoints multiplies storage. Preserving optimizer states can be even more expensive. Internal telemetry may create security liabilities. Rich lineage can expose proprietary data. Retention rules can conflict with privacy obligations.

These are real constraints.

The wrong response is to save everything.

The equally wrong response is to treat the final checkpoint as the only artifact worth keeping.

The useful response is to ask what resolution of history supports the questions that matter.

A geologist does not need a sample from every cubic millimeter of rock.

A film does not need every photon that entered the camera.

A medical chart does not need every heartbeat across a lifetime.

Useful histories are sampled.

Machine-learning histories will be too.

A team might preserve dense checkpoints during volatile training phases and sparse ones during stable periods. It might keep full weights at major stage boundaries and cheaper representational sketches between them. It might preserve behavioral probes continuously while deleting most intermediate weights. It might retain detailed traces for safety-critical fine-tuning stages and lighter records for routine optimization.

The policy can be adaptive.

What matters is that deletion becomes a considered decision rather than the default consequence of a storage bill.

There is another use for checkpoints that is easier to miss.

They can protect science against hindsight.

Once a final model is capable, earlier training can look as though it was inevitably moving toward that capability. We tell the story backward. A curve that now seems like a precursor becomes important because we know what happened later. A weak feature becomes “the beginning” of a mechanism because the mature mechanism eventually exists.

Checkpoints let us test the narrative honestly.

Could researchers at the time have detected the capability?

Did the supposed precursor actually predict emergence across runs?

Were there false starts that looked equally promising but vanished?

Did the model pass through several candidate mechanisms?

History is full of abandoned futures.

Machine-learning histories will be too.

A final model erases them aesthetically. It makes the successful route look clean.

Intermediate states restore the mess.

That mess matters because the next training run will not necessarily follow the same route.

If we want to forecast capabilities, identify dangerous transitions, or design interventions, we need to know which developmental signals were reliable and which were retrospective decoration.

This may be one of the deepest uses of traces.

Not explaining what the model is.

Learning which signs, during training, actually predict what the model is becoming.

That is a harder scientific problem than benchmarking the finished system.

It is also closer to the question everyone cares about when a frontier run is underway.

What is happening in there?

The answer cannot come from the final checkpoint because the final checkpoint does not exist yet.

It must come from traces.

Loss curves.

Capability probes.

Representation changes.

Influence shifts.

Feature emergence.

Behavioral diffs.

The developmental record becomes a live instrument, not merely an archive.

This is where the fossil metaphor breaks down in a useful way.

A fossil tells us about a past that is finished.

A checkpoint can tell us about a past while the future is still being trained.

It can become an early-warning system.

The model is not only leaving fossils.

It is leaving tracks.

The tracks point forward.
