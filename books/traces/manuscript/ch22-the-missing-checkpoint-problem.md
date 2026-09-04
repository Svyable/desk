# The Missing Checkpoint Problem

There is a question that arrives after the deletion.

When did the behavior first appear?

The team opens the storage bucket.

The final model is there.

The checkpoint before the last fine-tune is there.

The intermediate states are gone.

The experiment tracker has a loss curve. The exact model state under the curve no longer exists.

A future interpretability method could have answered the question.

The evidence it needed was deleted two years earlier because nobody knew the question would matter.

This is the missing checkpoint problem.

It is not primarily a storage problem.

It is a problem of irreversible optionality.

Compute can sometimes be purchased again.

A training run can sometimes be repeated.

A paper can be reread.

A dataset can sometimes be reconstructed.

But the exact state of a large stochastic training process can be impossible to recreate later, especially when the data, code, hardware, random order, optimizer state, or external services have changed.

Once an intermediate model is gone, future sophistication cannot analyze it.

A better microscope cannot inspect a specimen that was thrown away.

This gives checkpoints a peculiar economics.

Their value is often lowest at the moment they are created.

During training, checkpoint 73 looks like checkpoint 72 plus another stretch of compute. If the run is healthy and checkpoint 74 arrives soon after, keeping all three feels redundant.

Years later, researchers discover that a capability emerged somewhere between 72 and 74.

Checkpoint 73 becomes priceless retroactively.

This is the logic of archives.

An archive does not preserve only material whose future question is already known. It preserves selected evidence because future questions are partly unknowable.

Selection is the hard part.

No serious argument for model history can end with “save everything.”

Frontier training can produce enormous artifacts. Full model weights may occupy hundreds of gigabytes or more. Optimizer states can be larger. Dense checkpointing multiplies storage. Activations, gradients, per-example traces, and dataset snapshots can expand the archive dramatically.

Some traces contain private or proprietary information.

Some create security risk.

Some are genuinely useless.

The history needs a sampling strategy.

This is where the analogy to a flight recorder is more useful than the fantasy of perfect memory.

An aircraft records selected variables at selected rates because investigators need enough information to reconstruct important events. The recorder does not preserve every molecule in the engine.

A model-development archive should preserve enough resolution to reconstruct classes of developmental questions.

Major stage boundaries are obvious candidates.

Before and after pretraining phases.

Before supervised fine-tuning.

Before and after preference optimization.

Before domain adaptation.

Before an unlearning operation.

Before a safety intervention.

Before a model merge.

These checkpoints are historically valuable because they bracket deliberate changes.

Inside long training phases, sampling can be adaptive.

Save densely when behavior or internal metrics are changing quickly.

Save more sparsely during stable periods.

Preserve a checkpoint when a new capability crosses a threshold.

Preserve one before a major learning-rate change.

Keep states around anomalies, divergence, or unexpected regressions.

The archive follows events rather than a clock alone.

This is ordinary observability thinking applied to learned development.

There is a danger in event-based preservation.

We notice only events our current instruments can see.

A future researcher may care about a transition no benchmark detected at the time.

This is why periodic sampling remains valuable even in apparently boring stretches.

The archive needs both event-triggered and background preservation.

Geologists do not sample only where a dramatic fossil is visible at the surface.

Regular strata matter because they establish sequence.

The same is true for model states.

A checkpoint with no known interesting behavior can become the control against which a later transition is dated.

The storage question becomes how much temporal resolution is enough.

There is no universal answer.

A small model trained in hours can be checkpointed densely and preserved cheaply.

A frontier model trained for months may require deliberate tiers.

Full checkpoints at major boundaries.

Compressed or quantized research checkpoints between them.

Representational sketches or feature snapshots at higher frequency.

Behavioral probe results more frequently still.

Training logs continuously where practical.

The archive becomes multiresolution.

This is more useful than treating “checkpoint” as one binary artifact.

A future question may not require full weights.

If the question is when a capability emerged, repeated behavioral probes can narrow the window even if only two full checkpoints survive.

If the question is how a feature changed, stored activation statistics or sparse-feature snapshots may help.

If the question is exact rerun or branch training, full weights and optimizer state become much more important.

Preservation should be tied to the counterfactuals an organization may need.

Can we resume from this state?

Can we compare representations?

Can we reproduce an old deployed version?

Can we rerun a fine-tune without disputed data?

Can we test a new interpretability method on the old model?

Different objectives require different artifacts.

This is why storage policy belongs in model governance rather than infrastructure cleanup.

The person deleting old checkpoints is making a scientific decision whether they know it or not.

They are deciding which future questions remain answerable.

The decision can be perfectly reasonable.

Retention has costs.

A model trained on sensitive information may create risk if every intermediate state is preserved indefinitely. An early checkpoint can memorize material differently from the final one. Optimizer state and logs can reveal proprietary training details. A compromised archive can expose model weights that were never intended for release.

Deletion can be protective.

The historical argument therefore runs in two directions.

Preserve enough to maintain accountability and scientific option value.

Delete enough to respect privacy, security, contractual duty, and operational reality.

This is records management, not maximalism.

The useful question is not “should checkpoints be kept?”

It is “which checkpoints should be kept, for how long, under what access, and for which future obligations?”

A public research lab and a hospital will answer differently.

A company may retain a frontier pretraining checkpoint for scientific audit in a tightly controlled vault while deleting per-user fine-tuning traces on a shorter schedule.

A regulated high-stakes model may require reproducible deployed versions for the duration of a statutory record period.

An open-weight project may publish milestone checkpoints deliberately to support longitudinal research.

The architecture follows the risk.

One principle should be universal: deletion should be intentional.

Accidental history loss is different from policy-based minimization.

The institution should know what question becomes impossible when an artifact disappears.

This can be recorded in the retention policy itself.

Delete intermediate optimizer states after ninety days: exact continuation from those steps becomes unavailable.

Preserve full stage-boundary checkpoints for seven years: post-training counterfactuals remain possible.

Preserve public research checkpoints permanently: longitudinal replication remains possible.

Delete raw annotator text after quality review while keeping aggregate disagreement and policy versions: individual content is minimized while institutional context survives.

The policy states the trade.

This is better than discovering the trade during an incident.

The missing checkpoint problem appears most painfully when a model has been served through an API under a stable name.

A researcher studies the model.

The provider updates it.

The old state is retired.

A year later nobody outside the provider can reproduce the original behavior. If the provider also discarded the state internally, the model has vanished from scientific history.

We would consider this bizarre for important experimental equipment.

Imagine a particle detector changing configuration without preserving a record, or a clinical assay being modified while old results remain labeled under the same test name.

AI products have normalized this because software updates are common and model states feel disposable.

The disposal becomes less acceptable as models become scientific and social infrastructure.

Not every commercial version must remain publicly callable forever. That can be costly and unsafe.

A durable research artifact can be more modest.

A version identifier.

A preserved internal checkpoint.

A documented behavioral snapshot.

A reproducibility program for qualified researchers.

A changelog stating that the underlying model materially changed.

The essential thing is that the past state not become fictional.

This has consequences for benchmark history too.

A record score belongs to a checkpoint.

If that checkpoint disappears, the score becomes a claim about an unavailable object. The community can still trust the report, but it cannot revisit the system with new tests.

As evaluation science improves, old models become valuable controls.

A benchmark introduced in 2030 may reveal that models from 2026 already contained a capability no one thought to test. We can learn this only if the old models survive.

Historical baselines are scientifically powerful.

They tell us whether a new phenomenon is genuinely new or merely newly measured.

This is the same lesson grokking taught inside one training run, stretched across years of model development.

A capability can seem to appear when the instrument finally notices it.

Old checkpoints let us look backward with new instruments.

Without them, every new measurement begins in the present.

The field loses its ability to revise history empirically.

This is particularly important for safety.

Suppose researchers discover a new indicator of deceptive behavior, a new mechanistic feature associated with dangerous planning, or a new privacy attack. They will want to test earlier models.

Did the risk exist before the model family grew larger?

Did a particular post-training method reduce it?

Did one safety intervention make it worse?

When did the internal signature first appear?

Historical checkpoints turn a new safety method into retrospective science.

A missing archive forces speculation.

The same applies to rights.

A creator challenges a model's use of a dataset.

The developer has updated the model several times.

Which deployed versions were influenced by the disputed data?

Was a later descendant retrained without it?

Did synthetic data generated from the older model enter the new model?

The chain becomes impossible to answer if parent states and lineage records were discarded.

The institution may comply prospectively and remain unable to explain the past.

Again, technical unlearning cannot erase historical need.

The missing checkpoint problem also creates concentration of knowledge.

A few organizations can afford to retain vast internal model histories. Independent researchers cannot. The public science of model development can then depend on what companies choose to preserve and disclose.

Open checkpoint archives can counter this where feasible.

Small and medium open models are particularly valuable as developmental specimens because researchers can study them longitudinally without privileged access. Dense checkpoint releases from selected training runs can become shared model organisms.

The field does not need every frontier run opened completely to benefit.

It needs enough preserved histories to develop the science of change.

This is the role model organisms play in other sciences.

They are tractable enough to study deeply and representative enough to teach mechanisms that can later be tested elsewhere.

A deliberately checkpointed transformer family could become a public geological core sample of machine learning.

Researchers could test new attribution methods.

Feature alignment.

Grokking-like transitions.

Forgetting.

Unlearning.

Model diffing.

Privacy attacks.

The archive would grow more valuable as tools improve.

This is an unusual investment because its return increases with future ignorance.

We preserve the state precisely because we do not know which future method will make it informative.

Storage teams are trained to delete redundancy.

Archives are trained to preserve option value.

Model development needs both instincts.

The solution is not infinite retention.

It is a distinction between disposable artifacts and historical specimens.

Some checkpoints are restart files.

Some are release artifacts.

Some are scientific controls.

Some are legal records.

Some are privacy liabilities.

The classification should be made deliberately at creation.

The future question will still surprise us.

That is unavoidable.

The avoidable failure is having no evidence left when it does.

A checkpoint is cheap only before anyone needs it.

After deletion, it can become the most expensive file in the world because no amount of storage money can buy it back.
