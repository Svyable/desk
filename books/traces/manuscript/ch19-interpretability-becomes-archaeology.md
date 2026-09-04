# Interpretability Becomes Archaeology

The archaeologist arrives after the builders are gone.

There is a wall.

A foundation.

A layer of ash.

A broken tool.

A road that stops at a river no longer there.

The task is not to admire the objects individually. It is to reconstruct a sequence from partial evidence.

What came first?

What was rebuilt?

Which structures were reused?

Which layer belongs to which period?

What did later construction hide?

Mechanistic interpretability has usually been described as anatomy.

Open the model.

Find the features.

Map the circuit.

Trace the computation that produced an answer.

That work is essential.

But once model history becomes available, interpretability gains a second discipline.

Archaeology.

The difference is time.

Anatomy asks how the system works now.

Archaeology asks how the present structure records earlier stages.

The distinction is not poetic decoration. It changes method.

A static interpretability study takes one checkpoint and investigates internal activations, features, attention patterns, or computational paths.

An archaeological study compares checkpoints, descendants, tuning stages, and interventions.

It looks for conserved features.

New features.

Abandoned mechanisms.

Structures that weaken but do not disappear.

Capabilities whose internal route changes while behavior stays stable.

Residue of old policies beneath new output behavior.

The model becomes a site with strata.

This metaphor is safer than the black-box metaphor because it does not promise a moment when everything is finally open.

Archaeology expects gaps.

The record is incomplete.

Tools disturb the site.

Interpretation is provisional.

Several histories can fit the same evidence.

New instruments can change old conclusions.

These are not excuses.

They are normal conditions of inference from traces.

The newest mechanistic tools make this perspective increasingly concrete.

Sparse autoencoders and related approaches attempt to decompose dense neural activations into a larger set of sparse features that are easier to associate with recognizable concepts or computational roles. Circuit-tracing methods connect such features into partial attribution graphs supporting model outputs. Crosscoders compare features across models.

Each tool produces something like an artifact catalog.

This feature responds to legal citations.

This one to a particular entity.

This one participates in planning.

This one appears more strongly in a fine-tuned model.

The archaeological question is what happens when the catalog is laid across time.

Take a feature from the final model.

Search for an ancestor in earlier checkpoints.

Does it exist weakly from early training?

Does it appear suddenly?

Does it split from a broader feature?

Does it merge with another?

Does the same function move to a different representation?

Does later tuning suppress its effect without removing the feature?

The answer can change what we think the feature is.

A feature labeled “refusal” in the final model may turn out to have an earlier ancestor related to broad risk categorization. Safety tuning may not create the concept; it may connect an existing representation to a new output policy.

A feature labeled “French” may descend from a broader multilingual representation that becomes specialized.

A planning feature may exist before the model succeeds on planning benchmarks, implying later training integrates rather than creates it.

Development gives labels a history.

This is important because interpretability tools have a naming problem.

A researcher inspects examples that activate a feature and assigns a human-readable description. The label is an interpretation of a statistical pattern. It can be useful without being exhaustive. A feature can be polysemantic. The examples can bias the description. Automated labeling models can add another layer of interpretation.

History can falsify bad labels.

If the supposedly “medical” feature appears before the model has seen medical data, the label is suspect.

If the feature strengthens during an unrelated tuning stage, perhaps the interpretation is too narrow.

If a feature's developmental trajectory tracks a different behavior than its top activating examples suggest, the history provides counterevidence.

This is archaeology as quality control.

The same applies to circuit graphs.

A final-model attribution graph can show a path from prompt features through intermediate features to an output. The graph is compelling because it resembles causality.

A historical graph asks whether the same path existed earlier.

If the model could not perform the behavior at checkpoint A, which edge or feature is missing?

At checkpoint B, the behavior emerges. What changed?

At checkpoint C, performance improves further. Did the original circuit strengthen or get replaced?

Now the mechanism has developmental predictions.

A good explanation should survive them.

This is one reason small-model research has been so valuable. Tiny transformers can be trained many times, checkpointed densely, and reverse-engineered far more completely than frontier systems. Researchers can watch induction-like mechanisms form or grokking circuits reorganize.

The small model becomes an archaeological training ground.

The field learns which kinds of traces are worth preserving before attempting them at frontier scale.

This resembles archaeology's own history. Techniques developed on manageable sites before being applied to complex civilizations. Stratigraphy, dating, material analysis, remote sensing, and reconstruction improved because investigators learned what context mattered.

Machine learning needs its equivalent of stratigraphic discipline.

Do not separate an internal artifact from the layer in which it was found.

For a neural model, context includes checkpoint, training stage, parent model, objective, dataset mixture, and interpretability-tool version.

A feature extracted from Model X using Sparse Autoencoder Y is not a timeless fact.

It is an observation under an instrument at a state.

Record the instrument.

This sounds pedantic until tools improve.

A 2025 feature dictionary and a 2028 feature dictionary can carve the same activation space differently. If the original method is not recorded, comparisons become unreliable. An apparent feature disappearance may be tool drift rather than model change.

Archaeologists document excavation methods because later researchers need to know what the instrument did to the evidence.

Interpretability should too.

This becomes especially important for automated interpretability pipelines.

A model explains another model.

The explanation is summarized.

A label is assigned.

A dashboard marks the feature as safe or concerning.

Each step can introduce error.

The final audit report looks clean.

The underlying evidence is several transformations away.

A trace-aware pipeline should preserve links back to raw activations, intervention results, exemplar prompts, and tool versions where feasible.

Interpretability has provenance.

Otherwise the explanation becomes another opaque model output.

This is one of the stranger recursive problems in AI.

We build models to interpret models.

The interpreter model has its own training history and biases.

It can mislabel a feature.

It can hallucinate a neat explanation.

The solution is not to ban automated interpretation. It is to ground the interpretation in measurements that can be replayed.

Which prompts activated the feature?

What happened under intervention?

Which checkpoint showed the change?

Does another labeling method agree?

The explanation should have a chain of evidence.

Archaeology is the right metaphor again because an artifact catalog is not the excavation itself.

The diagram in the museum is a compressed argument about evidence collected elsewhere.

A good interpretability dashboard should be treated the same way.

This chapter also marks a shift from tracing data to tracing computation.

Earlier chapters asked which examples shaped the model.

Mechanistic archaeology asks how those pressures became machinery.

The two directions can meet.

A training cluster is attributed to a behavior.

A feature associated with the behavior appears during the same training period.

The feature is stronger in the descendant trained with the cluster than in a control descendant trained without it.

Intervening on the feature changes the behavior.

Now data ancestry and mechanism form one chain.

This is the most ambitious version of trace science.

From training event to internal change to output.

The full chain will often be impossible.

Even partial chains are valuable.

A toxic behavior may be linked to a tuning stage but not one feature.

A feature may be causally implicated but its training ancestry remains diffuse.

A memorized sequence may have known source data but unclear internal representation.

A mature field will tolerate partial reconstruction rather than filling gaps with narrative.

This is another advantage of archaeological thinking.

Missing layers are expected.

The correct label is unknown, not “probably this.”

The same restraint is needed with the newest internal-state research.

In 2026, Anthropic researchers described a small set of internal patterns in Claude with properties they compared to a global workspace from cognitive neuroscience. Using a Jacobian-based method, they identified a shared internal space in which information appeared to be written and read across different parts of computation.

The work is scientifically interesting because internal states could be measured and manipulated in relation to behavior.

It does not establish machine consciousness.

That leap would outrun the trace.

The archaeological lesson is simple.

An unusual structure has been found.

Study its function.

Study its development.

Compare it across models.

Intervene on it.

Do not turn the artifact into a civilization before the excavation is complete.

This restraint will be difficult because interpretability results attract philosophical attention.

A feature responds to deception.

A model appears to plan several tokens ahead.

An internal representation carries information not stated in the output.

The public story becomes “the model secretly thinks.”

The trace supports a narrower claim.

Under this experiment, an internal state predicted or causally affected this behavior.

The narrower sentence is more powerful scientifically because it can be repeated.

The purpose of archaeology is not to make the past mystical.

It is to make inference disciplined.

There is another archaeological problem inside models: reuse.

Old structures can acquire new functions.

A pretrained feature learned for one statistical purpose may later be recruited by fine-tuning for another behavior. A risk-related representation can become part of refusal. A language feature can support code. A planning mechanism can be reused across tool tasks.

Biology calls analogous reuse exaptation in evolutionary contexts; cities reuse old buildings; software repurposes libraries.

Machine learning can reuse learned features because later optimization works with the substrate already available.

This makes origin different from current function.

A feature can be ancient and its role recent.

Static interpretability sees the current role.

History reveals the reuse.

This may be one of the most important facts for understanding post-training.

Later stages are cheap partly because they do not build every behavior from scratch. They recruit existing structure.

The same fact complicates unlearning.

Remove a recent behavior and the ancient feature it uses may need to remain for many other tasks.

Selective intervention requires knowing the lineage of use.

Archaeology becomes surgery planning.

The book's metaphors are accumulating: fossils, scars, maps, strata, diffs, ancestry. They all point to the same epistemic move.

Stop treating the final model as self-explanatory.

The object is a compressed history.

Different traces preserve different resolutions of that history.

Interpretability becomes archaeology when it asks not merely what structure exists, but how the structure got there and what earlier layers remain underneath.

This future could change research practice in concrete ways.

Interpretability papers could include developmental plots by default.

Feature dictionaries could be aligned across checkpoints.

Circuit findings could be tested prospectively on later training stages.

Model releases could preserve a small number of research checkpoints specifically for longitudinal analysis.

Fine-tuning studies could publish semantic diffs rather than only benchmark deltas.

Unlearning studies could compare feature trajectories as well as outputs.

The field could accumulate a library of recurring developmental motifs.

Feature splitting.

Mechanism replacement.

Suppression without erasure.

Late recruitment of old features.

Early precursors of later capabilities.

Temporary scaffolds.

These motifs would be to learned systems what common patterns are to software architecture or pathology.

Not universal laws.

Recognizable forms that guide investigation.

The idea is plausible because history creates comparative data.

One model is anecdote.

A hundred checkpointed model families can become a science of development.

The obstacle is preservation.

If laboratories release only final checkpoints and delete intermediate states, future archaeologists will have monuments without strata.

They can still learn much.

They will learn less than we could have left them.

The builders are still here.

For once, archaeology does not have to begin after the record is lost.

We can choose what survives.
