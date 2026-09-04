# What Unlearning Cannot Erase

Deleting a row from a database is easy to understand.

The row was there.

Now it is not.

Machine unlearning borrowed the verb from that intuition and immediately inherited a problem.

A trained model is not a database table.

The example has already participated in optimization. Its effect may be distributed across parameters shared with thousands of other examples. The model may have generalized from it. Other records may contain the same fact. Fine-tuning may have transformed the representation. A descendant model may have learned from synthetic outputs produced by the first model.

What would it mean to delete the row now?

The clean answer is retraining.

Return to the original training procedure.

Remove the unwanted examples.

Train again from scratch.

Compare the new model with the old one.

The retrained model is the closest conceptual analogue to a world in which the record never participated.

It is also brutally expensive for frontier systems.

This is why machine unlearning exists as a research field.

Can we approximate the retrained-without-it model without paying the full cost?

The question sounds surgical.

Remove this influence.

Preserve everything else.

Surgery is a good metaphor because the target is entangled with healthy tissue.

A model may know Harry Potter because it saw the books.

It may also know Harry Potter because reviews, encyclopedias, fan discussions, news articles, movie transcripts, product pages, and other sources repeat the same facts.

Removing the books is not the same as removing the concept.

Removing the concept is not necessarily the goal.

A copyright request may concern reproduction of protected text, not erasure of public facts about a fictional character.

A privacy request may concern one person's record, not facts independently known from elsewhere.

The technical target depends on the reason for unlearning.

This is the first boundary.

Unlearning is not one task.

It can mean removing the effect of one record.

One user.

One copyrighted work.

One class.

One behavior.

One backdoor.

One domain.

The evaluation has to match the target.

This sounds obvious until a model stops answering a question and the result is described as forgetting.

Silence is not erasure.

A model can be trained to refuse to discuss a subject while retaining internal representations of it.

A system prompt can block answers without changing the weights at all.

A filter can redact outputs.

A fine-tune can make a continuation unlikely under normal prompts while leaving membership leakage or alternate elicitation paths intact.

The visible behavior changes.

The history may remain.

This is why unlearning is such a useful test of the trace thesis.

If learning leaves several kinds of evidence, removing one visible trace should not be treated as removal of all of them.

Masaru Isonuma and Ivan Titov turned this logic around in 2024. Their UnTrac method uses unlearning pressure as an attribution instrument. Apply gradient ascent to make a model worse on a training dataset, then observe how target predictions change. The amount of damage becomes evidence about which data was influential under the method.

Unlearning, in other words, can reveal ancestry precisely because removing pressure disturbs what learning built.

This makes the word erase even more precarious.

If the act of forgetting can be used to map influence, then forgetting itself is an intervention whose side effects carry information.

A successful unlearning procedure should therefore be judged along several dimensions.

Did verbatim reproduction fall?

Did factual knowledge specific to the target fall?

Did membership leakage fall?

Did unrelated utility remain?

Can the method handle a large removal request?

Can it handle repeated requests over time?

The MUSE benchmark made this multi-dimensional view explicit in 2024. Weijia Shi and colleagues proposed six properties for evaluating language-model unlearning: no verbatim memorization, no knowledge memorization, no privacy leakage, preservation of utility on retained data, scalability to larger removal sets, and sustainability across sequential requests.

The results were sobering.

Across the eight unlearning algorithms they evaluated on 7-billion-parameter language models, methods could reduce some forms of memorization to varying degrees. Privacy leakage remained a harder criterion. Utility could degrade. Repeated or large removal requests created additional problems.

The benchmark's value is not that it declares one winner.

It makes failure plural.

A method can pass one forgetting test and fail another.

This is exactly what a historical model predicts.

The target left more than one trace.

The same lesson appears in one of the earliest high-profile LLM unlearning demonstrations.

In 2023, Ronen Eldan and Mark Russinovich proposed a method aimed at reducing a Llama 2 model's ability to generate or recall Harry Potter content without retraining from scratch. The result was striking because the fine-tuning cost was tiny compared with pretraining, and common benchmark performance remained largely intact in their reported evaluation.

The demonstration mattered.

So did the questions it raised.

What counts as Harry Potter knowledge?

Can the model still answer through paraphrase?

Does it fail because the underlying association weakened or because the new behavior overrides the old one?

How does the method behave under stronger extraction tests?

What collateral knowledge disappears because it shares representations with the target?

A good unlearning benchmark should try to answer these rather than accepting one set of prompts as proof of erasure.

This is the same epistemic asymmetry from memorization.

Successful extraction is strong evidence that some recoverable trace exists.

Failed extraction is weaker evidence that no trace exists.

Successful unlearning on one evaluation is strong evidence that one behavior changed.

It is weaker evidence that the training record no longer matters under all relevant measures.

The strongest comparison remains retraining without the data.

That is the counterfactual gold standard because it produces a model whose training history truly excluded the target record.

Approximate unlearning tries to approach that state.

The distance is the scientific question.

This is where model diffing becomes useful again.

Compare the original model with the unlearned model.

Which features changed?

Compare the unlearned model with a retrained-without-data model when feasible at smaller scale.

Do they converge internally or merely behave similarly on the test set?

Compare checkpoints during unlearning.

Does the target representation weaken gradually?

Does another representation take over?

Does unrelated structure move more than expected?

An unlearning procedure is a developmental event.

It deserves its own history.

This can expose collateral damage.

Suppose a company wants to remove one person's medical record from a model. The record includes a rare disease. If that example was one of only a few instances teaching the disease pattern, unlearning may reduce performance for future patients with the same condition.

The privacy request is legitimate.

The performance loss is also real.

The two facts do not cancel each other.

They reveal why selective forgetting is difficult when examples share representations.

A system that cannot remove one person's contribution without harming a group has an architectural and data-governance problem, not a reason to ignore the request.

This is where pretraining design affects later unlearning cost.

If provenance is poor, the organization may not know which records need removal.

If checkpoints are sparse, it may not be able to retrain from a nearby clean state.

If data is heavily duplicated, removing one source leaves copies.

If synthetic descendants have already been trained, the information may have propagated.

If models are merged or distilled without lineage, the removal target crosses artifact boundaries.

Unlearning is downstream of archival discipline.

A training system that assumes nothing will ever need to be removed creates expensive future surgery.

This suggests a new design question.

Can a model be trained for removability?

Not in the simplistic sense of storing each example in its own compartment. Generalization depends on sharing structure.

But training pipelines can preserve shards, checkpoints, data manifests, example provenance, and model lineage so that deletion requests do not begin from ignorance.

Algorithms can be designed to localize adaptation.

Adapters can isolate some domain-specific learning.

Federated systems can support different deletion strategies.

SISA-style training in earlier machine-unlearning work divided data into shards and slices so affected components could be retrained selectively rather than rebuilding the entire model.

The general principle is architectural reversibility.

Systems are easier to change when change was anticipated.

Software learned this through modularity.

Databases learned it through transaction logs.

Machine learning may learn it through lineage-aware training.

There is a counterargument.

Maybe exact unlearning is the wrong ambition for many cases.

If the practical harm is output leakage, suppressing the output may be enough.

If a copyrighted passage can no longer be reproduced, perhaps internal semantic influence does not matter.

If a medical record's membership cannot be inferred and its private details cannot be extracted, demanding parameter-level equivalence to retraining may buy little real protection at enormous cost.

This is a serious argument.

Unlearning requirements should be threat-model specific.

A legal rule may care about data processing history in ways a product safety rule does not. A privacy threat may focus on recoverability. A fairness concern may focus on influence. A copyright dispute may distinguish facts from expression. A backdoor-removal task may focus on conditional behavior.

The correct evaluation follows the harm.

The mistake is using a cheaper behavioral target while claiming a stronger erasure result.

Words should match evidence.

“We reduced reproduction of the target passages under these tests.”

Good.

“We eliminated measurable membership leakage under this attack family.”

Good.

“We produced a model statistically close to retraining without the target data on these metrics.”

Stronger.

“The model has forgotten the data.”

That sentence demands a definition.

Machine unlearning will mature when product claims become as precise as benchmark tables.

The history can help enforce that precision.

If the original checkpoint is preserved, auditors can compare before and after.

If the target data is versioned, they can reproduce the evaluation.

If a clean retrained reference exists on a smaller analogue, they can calibrate the approximation.

If the unlearning algorithm and parameters are recorded, later methods can revisit the claim.

The record protects against erasure theater.

This matters because deleting evidence of the deletion process would be perversely easy.

A company could announce that a model was updated and provide only the new endpoint.

The old model disappears.

The forget set disappears.

The evaluation disappears.

The claim becomes impossible to test.

A trustworthy unlearning process needs a controlled audit trail even when the goal is removal.

This creates an apparent paradox.

To prove we forgot, we may need to remember evidence about what was forgotten.

Privacy law already encounters versions of this problem. Systems sometimes retain minimal deletion records to demonstrate compliance without retaining the deleted content itself.

Machine learning will need analogous patterns.

Hash the target identifiers.

Preserve aggregate metrics.

Keep model hashes and algorithm versions.

Restrict access to pre-unlearning checkpoints.

Delete sensitive content while retaining enough evidence to verify the transformation.

The trace policy becomes part of the unlearning policy.

There is another problem unlearning cannot erase.

Other sources.

Suppose one newspaper asks a model developer to remove all of its articles. The model may know the events described because thousands of other sources covered them. Retraining without the newspaper does not create ignorance of the events.

This is not unlearning failure.

It is correct counterfactual behavior.

The model without that source can still learn the same fact elsewhere.

This distinction is crucial when evaluating knowledge removal.

A model answering “Who is Harry Potter?” after the books are removed does not prove the books remain influential if the training corpus contains abundant public discussion of Harry Potter.

The correct target may be unique expression, source-specific influence, or private information—not generic topic knowledge.

Historical questions need historically identifiable targets.

This is why the best unlearning research often uses synthetic authors, controlled forget sets, or datasets where contribution can be isolated more cleanly.

Artificial settings are not a weakness when they let us know what the counterfactual should be.

They are calibration tools.

The challenge is transferring methods into the messy world where sources overlap.

MUSE's Harry Potter and news tasks try to bridge this by testing several failure modes rather than one recall question.

The broader lesson is that forgetting requires a model of what should remain.

Selective erasure is defined partly by preservation.

Forget X.

Retain Y.

If Y collapses, the surgery failed even if X disappeared.

This connects unlearning directly to the next chapter.

Catastrophic forgetting is the mirror image.

There, the model learns something new and loses old abilities we wanted to keep.

Unlearning wants targeted forgetting with minimal collateral damage.

Continual learning wants targeted learning with minimal collateral forgetting.

Both problems exist because learned representations overlap.

New gradients move parameters used by old behavior.

Old behavior constrains where new learning can go.

The model carries history in shared structure.

That is why neither editing nor forgetting resembles changing one line in a database.

The model is a palimpsest written with gradients.

Erase one sentence and the ink underneath moves.

Write a new sentence and an older one can fade.

The metaphor is messy.

So is the engineering.

Unlearning cannot promise that history was never there.

At best, it can transform what the history still does.

The responsible question is measurable.

Which traces remain?