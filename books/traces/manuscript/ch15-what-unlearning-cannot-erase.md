# What Unlearning Cannot Erase

Delete is one of the cleanest verbs in computing.

A file exists.

Then it does not.

The simplicity is partly an interface illusion. Backups, caches, replicas, logs, recovery systems, and storage hardware complicate physical erasure. Still, the logical model is familiar. The system knows where the record is.

Machine learning breaks the verb.

A training record enters a model by changing parameters that also respond to millions of other records. The record can contribute to shared representations, decision boundaries, probabilities, and behaviors. After training, there may be no address at which the record resides.

Then someone asks to remove it.

This is the problem of machine unlearning.

The most conceptually honest solution is retraining from a checkpoint before the record appeared, or from scratch without the record. The resulting model approximates the counterfactual we actually mean: what would this system have become if it had never trained on that data?

For frontier models, the clean solution can be ruinously expensive.

So researchers look for shortcuts.

Can we modify the trained system so that, under useful tests, it behaves like a model that never saw the target data?

The phrase “under useful tests” is where the entire field lives.

What does forgetting mean?

The model no longer reproduces a memorized string.

The target record's loss rises.

Membership inference falls to chance.

A data-attribution method no longer ranks the record as influential.

A downstream behavior changes.

Internal features shift.

The unlearned model becomes close to a retrained reference model.

Neighboring capabilities remain intact.

Each criterion captures something different.

No one of them is deletion.

This is why the word unlearning should be used with care.

A model can be made less able to reveal a record without undoing every consequence of having trained on it.

A trace can be weakened without history being reversed.

This is not a semantic complaint. It changes what technical claims mean for privacy, safety, and law.

Suppose a language model memorized a private sentence. An unlearning procedure makes extraction fail under the same prompt that previously worked.

That is meaningful progress.

But has the private record ceased to influence the model?

Perhaps the model still assigns unusual probabilities around the sentence.

Perhaps a stronger extraction attack succeeds.

Perhaps membership can still be inferred.

Perhaps the record contributed to a broader representation shared with other examples.

Perhaps later fine-tuning restores the memorized behavior.

The visible scar has faded.

The tissue history may remain.

This is the reason unlearning belongs in a book about traces rather than a chapter about deletion rights alone.

Unlearning is an intervention that tests what kind of trace learning left.

If a tiny targeted update can remove a behavior cleanly, the behavior may be localized in a useful sense.

If removing one record damages a broad capability, the influence was entangled.

If a behavior disappears at output while internal probes remain unchanged, the intervention may have altered access rather than representation.

If the unlearned model differs sharply from a retrained reference, the shortcut may not recreate the intended counterfactual.

The failure modes are scientifically revealing.

Masaru Isonuma and Ivan Titov used this logic in reverse with UnTrac. Their method applied gradient ascent to unlearn training datasets and measured how target predictions changed. The purpose was data attribution: a dataset whose unlearning damages a target prediction more strongly is treated as more influential under the method.

This is a striking use of forgetting.

Destroy the trace slightly and watch what breaks.

The intervention tells us about ancestry.

It resembles lesion studies in neuroscience, where damage to a region can reveal what functions depended on it. Again, the analogy is methodological rather than biological. A gradient-ascent unlearning step is not a brain lesion. The shared logic is causal perturbation.

Remove or disrupt suspected history.

Measure the consequence.

This is stronger than correlation because the system has been changed.

It is still not perfect causality because the intervention can have collateral effects.

That last problem dominates unlearning.

A target record rarely occupies a clean isolated mechanism.

Suppose a model has trained on one copyrighted article explaining a scientific discovery. The article contains facts that appear in many other sources. An unlearning request targets the article.

What should the model forget?

The exact wording?

The distinctive examples?

The factual content?

The stylistic influence?

Any measurable contribution to representations?

If the facts remain available from other sources, a retrained model that never saw the article may still know them.

A successful counterfactual unlearning should preserve that knowledge while removing whatever unique influence the article contributed.

That is a much harder target than “make the model stop saying these sentences.”

The difficulty exposes the mismatch between records and learned structure.

A database deletion request names an object.

A model's learned effect is relational.

The same issue appears with a person's data.

A user may ask to remove their training records. Some fields are unique. Others overlap with public information. Some facts can be inferred from other people. Some text may have been duplicated. Some synthetic examples may have been generated from an earlier model after the user's data entered training.

What would the model trained without the user look like?

The counterfactual can be difficult to define, let alone reproduce.

This does not make deletion rights meaningless.

It means technical compliance requires careful definitions.

A policy can require raw records to be removed from future training corpora.

A company can retrain or use unlearning methods for deployed models.

Audits can test extraction and membership leakage.

The important thing is not to claim more than the procedure establishes.

“Unlearned” should not become a ceremonial word meaning “we ran an update and the standard test passed.”

Trace science demands evidence.

This is especially important because machine unlearning benchmarks can be gamed unintentionally.

If the evaluation checks whether the model answers target questions incorrectly, a crude method can simply damage performance on those questions. The target information appears forgotten.

A retrained model might still answer correctly from other sources.

The crude method has not recreated the counterfactual. It has created selective incompetence.

This is the equivalent of proving a library removed one disputed book by burning the whole shelf.

Forgetting requires preservation too.

The system should lose the targeted influence while retaining unrelated capability.

That creates a two-sided evaluation.

Forget quality.

Retain quality.

The tension is fundamental.

The more aggressively we change the model, the easier it can be to suppress target behavior and the greater the risk of collateral damage.

The more conservative the update, the more residual trace can remain.

A good unlearning method navigates the boundary.

A historical perspective adds a third requirement.

Stability over future training.

If the target behavior disappears immediately after unlearning and reappears after routine fine-tuning, the trace was not removed robustly.

This is not hypothetical in the abstract. Learned behaviors can be suppressed and later recovered because representations remain. Safety research has shown constructed behaviors persisting through later training stages. Model editing research has found changes that can be brittle under paraphrase or subsequent updates.

An unlearning audit should therefore include resurrection tests.

Continue training.

Fine-tune on neighboring material.

Use alternative prompts.

Probe related representations.

See what returns.

The past can be latent.

This is one of the hardest ideas for systems built around database intuitions.

We expect deletion to be monotonic. Once a row is gone, normal operations do not regenerate the same row unless some other source contains it.

A model can regain a behavior because the ingredients for the behavior were never fully removed.

The output was suppressed.

The mechanism remained nearby.

This distinction between information and accessibility runs through memory science in humans, but again we need not rely on the analogy. Neural systems demonstrate it directly when behavior changes under prompting, steering, or later training.

The important technical question is whether the target trace is absent, inaccessible, or merely weakened.

Those are different states.

A future unlearning standard may need tiers.

Output suppression established.

Membership leakage reduced.

Influence reduced under specified attribution methods.

Mechanistic residue not detected under specified probes.

Close match to retrained reference on target and retain sets.

Resurrection resistance tested under later updates.

The terminology will evolve. The principle should not.

State what evidence supports the claim.

This is how unlearning can avoid becoming the next vague word in AI governance.

The cost of the retrained reference model is a practical obstacle.

To know whether an unlearning shortcut reproduces “never trained on the data,” we ideally compare against a model actually retrained without the data.

For small models and benchmark datasets, researchers can do this.

For frontier pretraining, repeatedly retraining a trillion-token model to evaluate one deletion method is absurdly expensive.

The field must use approximations, smaller experiments, local post-training reruns, and statistical tests.

This makes the preservation of checkpoints unexpectedly useful again.

If the target data entered only during a later fine-tuning stage and the pre-fine-tune parent is saved, the clean counterfactual may be affordable.

Return to the parent.

Repeat the fine-tune without the target records.

Compare the real retrained descendant to the unlearned descendant.

The checkpoint turns an impossible full retraining problem into a manageable local one.

History lowers the cost of forgetting.

This is one of the strongest practical arguments for stage boundaries and parent preservation.

A company that discards every pre-tuning checkpoint may later discover that a deletion request requires reconstructing an entire stage from scratch.

The storage saved earlier becomes compute spent later.

Trace retention has option value.

This also suggests a design principle for future models.

Train in auditable stages where possible.

Preserve parent checkpoints before sensitive domain adaptations.

Keep data manifests for each stage.

Separate proprietary fine-tunes from the base lineage.

The purpose is not only reproducibility.

It is reversibility.

A model with clean historical branch points is easier to revise.

This resembles database migration design and software release engineering. Reversible changes are safer because rollback paths exist.

Neural learning is not fully reversible, but lineage can create practical rollback points.

The same idea matters for safety interventions.

Suppose a post-training stage produces a severe regression. If the parent is preserved, the team can branch again with corrected data. If only the final model exists, repair becomes surgery on an unknown organism.

Unlearning is one form of repair.

Rollback is another.

History provides both.

There is a deeper philosophical temptation around forgetting that should be resisted.

People sometimes ask whether a model has truly forgotten in the way a human forgets.

The question is interesting and mostly unhelpful for engineering.

We need operational criteria.

Can the targeted information be recovered?

Does the data still measurably influence behavior?

How close is the model to the relevant counterfactual?

What capabilities were damaged?

Does the change survive future updates?

These are experiments.

The word “truly” does not add a test.

This is a recurring virtue of the trace frame. It turns metaphysical arguments into comparisons.

Before and after.

With and without.

Parent and descendant.

Observed and counterfactual.

The evidence will remain imperfect.

That is normal.

The strongest unlearning claim possible today may be conditional.

Under these extraction attacks, the target is no longer recoverable.

Under these membership tests, leakage is reduced to baseline.

Under these behavioral probes, target knowledge declines while retain performance remains stable.

Under these mechanistic probes, we do not detect the previous feature.

Against this retrained reference, the models are close on the evaluated distribution.

That paragraph is less satisfying than “the model forgot.”

It is also far harder to misuse.

What unlearning cannot erase is the fact that the model had a history.

Even a perfect counterfactual update would not make it historically true that the data was never used. The original training run happened. Copies may exist. Descendants may have been produced before removal. Synthetic data may have inherited the influence. Decisions may already have been made using the old model.

Technical forgetting is not historical erasure.

This matters for accountability.

An institution cannot remove responsibility for a past model decision by updating the model later. An audit trail should preserve which version operated when.

The system can change.

The record should not.

This is the paradox at the center of unlearning.

We may want the model to behave as though an experience never happened.

We need the institution to remember that it did.

The model should forget where appropriate.

The history must not.
