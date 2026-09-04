# Generalization Has Ancestry

The hardest output to trace is the one that was never in the training data.

A model writes a new proof sketch.

It explains a legal principle in language no casebook used.

It translates an idiom into a sentence that has never existed before.

It fixes a programming bug whose exact combination of symptoms appears nowhere in the corpus.

It identifies a pattern in a table assembled five minutes ago.

If the output is genuinely novel in form, there is nothing obvious to search for.

No matching paragraph.

No copied sequence.

No single source waiting to be uncovered.

This is where the warehouse metaphor for learning finally collapses.

The model did not retrieve the answer from a shelf.

It became the kind of system for which this answer was reachable.

That becoming still has ancestry.

Generalization is not independence from training history.

It is one of training history's products.

This distinction sounds almost tautological. Of course a learned model's generalization came from learning.

The difficulty is making the ancestry empirical.

Memorization gives us resemblance. A verbatim sequence can be matched to a source. Generalization can erase surface resemblance while preserving influence.

The model may learn a mathematical pattern from many examples that use different notation. It may learn a social convention from thousands of conversations. It may acquire a programming abstraction from codebases that solve unrelated problems with the same structural idea. It may transfer a concept across languages even when the target output contains none of the words that appeared in the influential source.

Ancestry can survive transformation.

This is what makes large-model influence studies so interesting.

In 2023, researchers at Anthropic adapted influence-function methods to language models at sizes reaching tens of billions of parameters. The computation required heavy approximation. Exact second-order analysis of such models would be impractical, so the team used an approximation to curvature and additional filtering and batching strategies.

The result was not a universal origin detector.

It was a way to ask whether training examples related to a target output in more abstract ways than text similarity would reveal.

Some patterns suggested that larger models could connect influential examples across languages or through shared conceptual structure. Programming and mathematical cases could surface training examples whose relationship to the target was not a simple copy. Role-playing behavior could connect to examples that supported the relevant persona or style.

The same work found fragility. Reordering key phrases could sharply change measured influence in some settings.

Both findings matter.

The first says ancestry can be abstract.

The second says our instrument for recovering it is incomplete.

This combination is characteristic of a young science.

We can see a structure before we can measure it robustly in every case.

The temptation is to respond in one of two ways.

One camp sees abstraction in influence results and declares that we can trace generalization back to its sources.

The other sees instability and declares that attribution is meaningless in deep learning.

Neither conclusion follows.

An approximate compass can be useful without being a surveyor's map.

If several methods, checkpoints, and interventions point toward the same region of training data, the evidence becomes stronger. If tiny changes to the target make the ranking collapse, the evidence becomes weaker. The right response is calibration.

Generalization makes calibration difficult because the causal unit is often a group rather than a point.

Suppose a model learns the concept of recursion.

Which example did it come from?

There may be thousands of recursive functions, explanations, textbook chapters, call-stack diagrams, proofs, forum posts, and code reviews in training. Remove one and the model still learns the pattern. Remove a hundred and perhaps nothing visible changes. Remove the entire family and the effect may be large.

Individual influence can be low while group influence is high.

This is a basic problem of redundancy.

If ten bridges cross the same river, closing one does not prove the route is unimportant.

Machine-learning datasets contain enormous redundancy.

Facts are repeated. Concepts are paraphrased. Code patterns recur. News articles quote one another. Encyclopedias are mirrored. Translations duplicate information across languages. Synthetic data reformulates older material.

The model can have ancestry without a unique ancestor.

This is why legal and economic debates about training data will collide with technical attribution in uncomfortable ways.

A creator may ask whether one work contributed to a model.

A point-attribution method may assign small marginal influence because the same information is available elsewhere.

That does not mean the work was unused.

It means the counterfactual “remove this one record” leaves many substitutes.

Another work may receive high measured influence because it is unusually distinctive or rare.

The technical score answers a particular causal question.

It does not automatically answer questions about permission, compensation, originality, or ownership.

Generalization has ancestry, but ancestry is not a royalty formula.

The same subtlety appears in science.

A researcher can learn an idea from a field rather than one paper. Several sources may independently contribute. One paper may crystallize a concept that was already latent. Another may provide the counterexample that changes how the concept is used.

Trying to assign one intellectual ancestor can be historically misleading.

Machine-learning ancestry is even more distributed because optimization integrates examples numerically rather than through an explicit citation graph.

The influence is real.

The bibliography is implicit.

This suggests a different way to think about model explanation.

Instead of asking which document produced the answer, ask what **training neighborhood** made the answer possible.

The neighborhood can be semantic, functional, linguistic, or behavioral.

A target code completion may owe its reliability to examples of error handling that share no identifier with the current code. A translation may depend on bilingual structure learned from other language pairs. A safety refusal may reflect preference data containing many distinct surface forms that reward the same behavioral boundary.

The trace becomes a region of pressure.

Attribution systems such as TRAK approach part of this problem by estimating how training points affect predictions at scale. Their approximations make large candidate sets more tractable. Later theoretical work has tried to explain why noisy numerical influence estimates can still preserve useful rankings under some conditions.

That is an important distinction.

An instrument can be bad at measuring exact distance and still be good at telling which direction to walk.

For investigation, ranking can be enough.

Which training clusters should a researcher inspect first?

Which examples repeatedly appear across related targets?

Which groups are unusually influential on a safety evaluation?

Which data sources have negative influence on a capability?

Which examples matter only at one checkpoint and disappear later?

The questions become exploratory rather than juridical.

This is where trace science is strongest today.

It can narrow the search.

Generalization also has temporal ancestry.

A capability may depend on prerequisites learned earlier.

Suppose a model eventually learns to solve a class of word problems. The direct training examples near the final capability may not tell the whole story. Earlier training could have built numerical representations, syntax, entity tracking, and instruction-following habits that made the later examples useful.

The apparent cause arrives late.

The enabling causes are older.

This is familiar from education.

A student learns calculus in one semester, but the ability to use calculus depends on years of arithmetic and algebra. If we ask which lesson “caused” the student to solve a derivative problem, the most recent lesson is salient but incomplete.

Machine learning creates the same layered dependence at scale.

Fine-tuning makes this particularly visible.

A few thousand instruction examples can transform the usefulness of a base language model. The fine-tune does not supply all the language, world knowledge, syntax, and reasoning patterns the resulting assistant uses. It changes how an enormous prior capability is accessed and organized around a new objective.

The final behavior has shallow and deep ancestors.

This is why small post-training datasets can have outsized behavioral effect without containing the substance of every answer the model later gives.

They are not libraries.

They are steering pressure applied to a system that already contains a vast learned substrate.

The distinction becomes important when people say a model was “trained on human feedback.”

A frontier assistant may have undergone a human-feedback stage, but that phrase does not mean human raters taught it every fact or skill. The feedback shaped behavior on top of pretraining.

The model's history contains strata with different roles.

Pretraining creates broad statistical structure.

Supervised tuning can teach response formats and task-following patterns.

Preference optimization can shift which outputs are favored.

Domain adaptation can strengthen specialized behavior.

Safety interventions can suppress or redirect classes of output.

Tool training can alter how the model interacts with external systems.

Generalization in the final model can draw on all of them at once.

This layered ancestry is one reason model lineage should record stage boundaries.

If a behavior appears in the final system, investigators need to know which parent states exist for comparison.

Was the capability already present in the base model?

Did supervised tuning make it accessible?

Did preference optimization strengthen it?

Did a later patch change only the system prompt or the weights?

Without the lineage, each stage becomes a suspect with no alibi.

With the lineage, the search narrows.

This is the historical value of a controlled fork.

Take the same base checkpoint.

Fine-tune one copy with Dataset A and another with Dataset B.

A behavior diverges.

Now the causal question is much cleaner than comparing unrelated finished models.

The shared ancestry controls for everything before the branch.

The same logic can be used for data groups.

Remove a category of examples and repeat the tuning.

Downweight a source.

Change one preference dimension.

Compare descendants.

The family tree becomes the experiment.

This technique is expensive during frontier pretraining but more practical in post-training, where updates are smaller. It may become one of the strongest ways to test data-attribution claims.

If an attribution method says a cluster of examples is responsible for a behavior, branch from the same parent and remove the cluster.

If the behavior changes in the predicted direction while neighboring capabilities remain stable, the ancestry story strengthens.

If nothing happens, perhaps redundancy protected the capability.

Remove the broader group.

If the effect still fails, the attribution may have been misleading.

The trace generates a counterfactual experiment.

Generalization also forces us to confront synthetic ancestry.

A model can train on text generated by another model. The synthetic example may contain a pattern that the teacher learned from human-authored material. The student learns the pattern without direct access to the original source.

The ancestry now passes through an intermediate model.

This breaks simple dataset provenance.

A manifest can honestly say the student's training file was generated synthetically.

That statement does not reveal the deeper origin of the information encoded in the synthetic data.

The teacher carried history into the generation.

This is not automatically a problem.

Synthetic data can be useful. It can generate targeted exercises, rebalance rare cases, provide labels, or make expensive supervision scale. The point is not to condemn it.

The point is that synthetic data is not historically blank.

It is output from another learned system.

A model-generated example can be a compressed citation to a training history we no longer possess.

As more models teach later models, the provenance graph becomes recursive.

This is where the title *Traces* reaches beyond one training run.

A trace can survive transformation.

The original text disappears.

A teacher model internalizes a pattern.

The teacher generates a new example.

The student learns from that example.

The student later produces an answer in another form.

No surface match links the final output to the original data.

The ancestry can still be real.

Recovering it may be impossible with today's methods.

That limitation should not be confused with nonexistence.

History can be lost even when influence persists.

Human culture is full of this problem. Words outlive etymologies. Recipes outlive the cooks who altered them. Institutions preserve procedures whose original rationale has been forgotten. A custom can descend from an event nobody remembers.

The artifact retains form after provenance disappears.

Machine-learning systems may become enormous engines of this kind of inheritance.

That creates a preservation challenge.

If a model is used to generate a major synthetic dataset, perhaps the lineage record should preserve the teacher model's identity, checkpoint, decoding policy, prompt templates, and source-data classes where known. Not because this reconstructs every influence, but because it keeps the ancestry from collapsing into “synthetic.”

Synthetic is an origin category too broad to be explanatory.

Generated by what?

From which parent?

At which version?

Under which instructions?

With which filtering?

Those details can become future traces.

Generalization also changes how we should interpret model similarity.

Two models can produce nearly identical answers for different historical reasons.

One may have memorized a common pattern.

Another may reconstruct it from abstractions.

A third may have been distilled from the first.

A fourth may have encountered a translated version.

Output similarity does not establish shared ancestry.

Conversely, two models with shared ancestry can produce different outputs after a small fine-tuning branch.

History and behavior are related but not interchangeable.

This is why a true model genealogy will need more than benchmark trees.

Today model families are often represented by names.

Base.

Instruct.

Chat.

Mini.

Turbo.

Reasoning.

Version two.

The labels imply relationships but rarely tell a scientifically complete story.

A genealogical record would make parentage explicit where possible.

Which checkpoint descended from which?

Which stages introduced new data?

Which stages changed objectives?

Which descendants were distilled rather than directly fine-tuned?

Which models were merged?

Which synthetic datasets came from which ancestors?

The purpose is not bureaucratic completeness.

It is causal leverage.

When a behavior appears, genealogy tells us where to compare.

This will become increasingly important as models are updated continuously.

A system that changes monthly does not have one history.

It has a lineage of deployed states.

An enterprise may rely on a behavior that disappears in a new version. A safety team may discover a failure that was absent two releases earlier. A regulator may need to know whether a high-stakes model changed materially after certification. A scientist may want to reproduce an old experiment but find the exact API model retired.

Without preserved lineage, generalization becomes unmoored from ancestry.

The system works.

We no longer know how this version came to work this way.

That is a preventable loss.

Memorization gives us scars.

Generalization gives us something harder: inherited structure whose source has been transformed.

The absence of a visible scar should not tempt us to say the past is gone.

The past can disappear from the surface while remaining in the capability.

That is what generalization is for.

It is also why generalization has ancestry.
