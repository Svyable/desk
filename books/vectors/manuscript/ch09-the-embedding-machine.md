# Chapter 9 — The Embedding Machine

An embedding is not found.

It is trained into existence.

That distinction matters.

When a system places two sentences near each other, it can feel as though the machine has discovered a hidden fact about meaning.

Sometimes the neighborhood is remarkably useful.

But the geometry did not descend from language fully formed.

It was produced by a machine.

Examples were selected.

Pairs were constructed.

Negatives were sampled.

Tokens were defined.

Architectures were chosen.

Losses were minimized.

Some errors were punished more than others.

Some distinctions were rewarded.

Others were allowed to disappear.

The resulting space carries the fingerprints of all of those choices.

**An embedding model is a machine for turning judgments into geometry.**

To understand embeddings, then, we have to look upstream of the vectors.

We have to look at the factory that makes them.

## From input to location

At the simplest level, an embedding model takes an input and returns a vector.

Call the input `x`.

Call the encoder `f`.

Then:

`z = f(x)`

where `z` is a point in some learned vector space.

That equation hides the important question.

What makes one `z` better than another?

The training objective.

The model is not usually told, “Place this sentence at coordinate 0.417 in dimension 182.”

Instead, it receives relational pressure.

Make these things more similar.

Make those things less similar.

Predict this context.

Recover this label.

Distinguish the true pair from the false pairs.

Preserve information useful for this downstream task.

The model moves through parameter space until its outputs make those judgments easier to satisfy.

Geometry emerges from optimization.

## Training examples are forces

Imagine a blank sheet containing points that can move.

Now attach springs.

One spring pulls two points together.

Another pushes two points apart.

A third rewards one direction more than another.

Add thousands of springs.

Then millions.

Then billions.

Let them all pull at once.

The final arrangement depends on the network of forces.

This is only an analogy, but it captures something essential about representation learning.

A positive pair is a force toward proximity.

A negative pair is a force toward separation.

A classification loss pressures examples to become separable in ways useful for the labels.

A language-model objective pressures representations to preserve information useful for predicting tokens.

A contrastive image-text objective pressures captions and images to become mutually distinguishable and align when matched.

**Training examples are not merely observations. Inside an objective, they become geometric instructions.**

That is why changing the training task can change the meaning of distance even when the architecture is unchanged.

## Context builds the first map

Consider the early history of word embeddings.

A central idea was that words appearing in similar contexts could acquire similar representations.

The system did not need a dictionary definition of *doctor* or *hospital*.

It could learn from the statistical company those words kept.

In skip-gram-style training, the machine is asked to use one word to predict nearby context words.

That simple choice creates a worldview.

Nearness in text becomes evidence about semantic or syntactic relatedness.

The definition of *context* therefore matters.

How wide is the window?

Does word order matter?

Which words are downsampled?

How are rare words treated?

What corpus is used?

Which languages and genres dominate it?

Before the model learns a vector, someone has already decided what counts as relevant co-occurrence.

**The training task chooses which relationships are allowed to become geometry.**

## Negative sampling creates the background

If a model only pulled observed word-context pairs together, everything could drift toward everything else.

Useful geometry requires contrast.

Mikolov and colleagues popularized negative sampling as an efficient way to train word representations: observed pairs receive one treatment while sampled non-observed pairs provide contrasting pressure.

This sounds like an optimization trick.

It is also a semantic choice.

Which negatives are selected?

How often?

From what distribution?

A word is partly defined by what it is trained *not* to resemble.

That means the negative distribution helps create the topology of the learned space.

The background matters.

A photograph looks different against black, white or red.

An embedding relation can look different against different negative examples.

**Every learned neighborhood has a background population.**

And that population participates in defining the neighborhood.

## Easy negatives teach little

Suppose we are training a search embedding.

The query is:

`how to reset an enterprise router`

A random negative document about medieval poetry is easy to reject.

The model learns little from the comparison.

A document about restarting a consumer Wi-Fi router is harder.

A document about resetting the exact enterprise router family but preserving configuration is harder still.

These hard negatives press on the boundary between related and relevant.

They can make the geometry more useful for ranking.

But hard negatives create danger too.

What if the apparently negative example is actually relevant?

Then the objective instructs the model to separate things that should perhaps be close.

This is the false-negative problem.

The more sophisticated the training system becomes, the more its data construction begins to resemble adjudication.

Someone—or some heuristic—must decide which similarity counts and which similarity should be suppressed.

## The model learns the test you give it

An embedding model can look intelligent because it becomes extremely good at the distinctions embedded in its training task.

That does not mean it has learned every distinction users care about.

Train on paraphrase pairs and the space may become good at paraphrase similarity.

Train on search clicks and the space may become good at predicting what historically attracted clicks.

Train on product co-purchases and the space may represent commercial complementarity rather than semantic sameness.

Train on image-caption pairs and the space may prioritize the visual concepts most consistently expressed in captions.

None of these geometries is automatically wrong.

They answer different questions.

The mistake is to call all of them *meaning* without qualification.

**The embedding learns the test you give it, then hides the test inside distance.**

Once the vectors are shipped downstream, users may see only a similarity score.

The training objective disappears from view.

But it is still there.

## Contrastive learning makes the forces explicit

Contrastive learning turns the relational structure of embedding training into a clear recipe.

Bring matched examples closer.

Push unmatched examples farther apart.

The details vary enormously, but the pattern is powerful.

In vision, augmentations can create two views of the same image and train their representations to agree.

In sentence embedding, two versions of a sentence—or known semantically related sentences—can be used as positives.

In multimodal learning, an image and its caption can be treated as a matching pair.

In retrieval, a question and its relevant passage can be pulled together.

The model learns a space in which the training relationships become easy to recover with a simple operation such as a dot product or cosine similarity.

This is one of the great engineering tricks of modern machine learning.

Push complexity into training.

Make retrieval simple later.

The expensive work creates a geometry that cheap operations can exploit.

## The loss function is a field

The spring analogy can be improved.

A loss function does not merely connect pairs.

It creates a field over possible model states.

Some configurations have high loss.

Others have low loss.

Optimization follows gradients through that field.

That means the final embedding space is not directly specified.

It is the residue of a path through an optimization landscape.

The objective says which errors matter.

The optimizer decides how to reduce them.

The architecture decides which solutions are available.

The data decides which pressures are repeatedly applied.

The initialization and stochastic training process affect which solution is reached.

**The loss defines pressure. The model architecture defines motion. Training history chooses the path.**

The vector is the trace left behind.

## Temperature changes the strength of disagreement

Many contrastive objectives contain a temperature-like scaling factor that changes how sharply similarity differences are treated.

At a conceptual level, temperature determines how much the training process cares about the distinction between moderately similar and very similar candidates.

Sharpen the competition and hard distinctions can dominate.

Soften it and the pressure can spread more broadly across candidates.

The exact behavior depends on the objective.

The important lesson is that even after the metric is chosen, the geometry is still being shaped by how strongly the loss responds to score differences.

A similarity function does not operate alone.

Calibration changes what similarity *does* during learning.

## The batch is part of the world

In many contrastive systems, other examples in the same batch become negatives.

That makes batch construction more than a throughput decision.

It changes the world each example is trained against.

If the batch contains many easy negatives, the model receives one kind of pressure.

If it contains semantically close candidates, it receives another.

If related examples accidentally appear as negatives, the model may be pushed to create distinctions that are artifacts of sampling.

Recent theoretical and empirical work on contrastive learning makes this point increasingly explicit: positive and negative sampling structure can change the resulting similarity geometry.

So a mundane systems parameter can become a representational parameter.

**The batch is a temporary society of examples, and each example learns who it is partly by being compared with the others.**

## Augmentation decides what should remain the same

In self-supervised learning, augmentations are often used to create multiple versions of the same underlying example.

Crop an image.

Change color.

Mask part of an input.

Apply dropout twice to the same sentence representation.

Then tell the system that the resulting views should remain close.

This teaches invariance.

But invariance is a judgment.

If two images remain “the same” after color changes, the representation is encouraged to ignore some color information.

If two text representations should match despite different dropout masks, the representation is encouraged to remain stable under that internal noise.

The model is learning not only what differences matter.

It is learning what differences are permitted not to matter.

**Augmentation is a theory of irrelevance.**

A poorly chosen augmentation can erase information the downstream task needs.

A well-chosen one can strip away nuisance variation and expose more useful structure.

## Architecture decides what can be expressed

The objective provides pressure, but the architecture determines the machinery available to respond.

A bag-of-words representation cannot preserve the same information as a contextual transformer.

A static word embedding assigns one vector to a word type.

A contextual model can assign different representations to the same token depending on surrounding text.

A sentence embedding system may pool token representations into one vector.

How it pools matters.

Use a special classification token.

Average token vectors.

Learn an additional projection.

Take one layer or combine several.

Normalize or do not normalize.

Each design choice changes what information can survive into the final vector.

The embedding is not simply the output of “the model.”

It is the output of a particular interface cut through the model.

## Pooling is compression with consequences

A sentence may contain dozens or hundreds of token-level representations.

A sentence embedding compresses them into one vector.

Something must disappear.

Word order may be partly preserved or partly blurred.

Rare details may be sacrificed for broad topic.

Negation may remain clear or become fragile.

Entity identity may dominate style, or style may dominate entity identity.

The answer depends on training and architecture.

This is why a sentence embedding should never be treated as a neutral summary of a sentence.

It is a task-shaped compression.

And compression always creates a hierarchy of what survives.

**To embed is to decide what can be forgotten while still passing the test.**

## Dimension is capacity, not meaning

Why 128 dimensions?

Why 768?

Why 1,024?

The dimensionality of an embedding determines the size of the representational channel, but an individual dimension usually does not correspond cleanly to an interpretable human concept.

More dimensions can allow more relationships to be represented.

They also increase storage, bandwidth and indexing cost.

Too little capacity can force unrelated distinctions to interfere.

More capacity does not guarantee better geometry.

Training still has to use the space well.

The number of dimensions is therefore another allocation choice.

Representation quality trades against system cost.

The vector database will eventually have to store and search whatever the embedding model emits.

A representational decision becomes an infrastructure decision.

## Normalization changes the world the loss can build

If embeddings are normalized to unit length, magnitude is removed and direction becomes central.

If they are not normalized, norms can participate in scores.

That changes training incentives.

A model allowed to increase vector magnitude may use norm as part of its solution.

A normalized model must express distinctions differently.

So normalization is not just a post-processing choice.

When included during training, it changes the geometry the objective can create.

The same is true of the metric.

Train for dot-product retrieval and the model learns one scoring environment.

Train explicitly around cosine similarity and it learns another.

Train with a learned cross-encoder and the simple vector geometry may cease to be the whole decision rule.

**The ruler and the map are often trained together.**

## Collapse is the geometry of giving up

A trivial way to make positive examples similar is to map everything to the same point.

Then every pair agrees perfectly.

The representation has collapsed.

It is useless because the system can no longer distinguish anything.

Representation learning therefore needs a counterforce.

Negatives, variance constraints, architectural asymmetry, prediction tasks or other mechanisms prevent the space from degenerating into sameness.

This reveals a deep tension.

A useful embedding must do two things at once.

Compress.

And discriminate.

It must make some differences disappear while preserving others.

Too much separation and generalization fails.

Too much compression and everything becomes identical.

**Representation learning is controlled forgetting.**

The quality of the geometry depends on what it forgets and what it refuses to forget.

## Alignment and uniformity are competing intuitions

Contrastive representation research often describes two useful tendencies.

Related examples should align.

The representation space should not collapse into a tiny region where everything looks alike.

The exact mathematical formulations differ across methods, but the intuition is valuable.

Pulling positives together alone is insufficient.

Spreading representations indiscriminately is insufficient.

A useful space balances local attraction with global discrimination.

This is why the geometry from Chapter 7 cannot be separated from the training machine in this chapter.

Neighborhoods, hubs, empty regions and dense regions are not only properties to inspect after training.

They are consequences of the forces applied during training.

## Data curation becomes geometry curation

Suppose an embedding model is trained mostly on English technical documentation.

Its space will receive far more pressure to distinguish concepts common in that corpus than concepts absent from it.

Suppose another model is trained heavily on multilingual conversational text.

Its neighborhoods will reflect a different distribution of distinctions.

Suppose one product corpus contains historical purchasing behavior shaped by old availability constraints.

A recommender embedding may encode those constraints as if they were preferences.

Suppose an image-text corpus contains captions that systematically omit certain visual details.

The model receives less pressure to preserve those details in cross-modal similarity.

This is the geometric version of a familiar rule:

Garbage in, garbage out.

But the embedding case is subtler.

The output may not look like garbage.

It may look like a beautifully organized vector space.

The problem is that the organization reproduces the priorities and absences of the training distribution.

**Data curation is geometry curation.**

## Labels become directions without being named

A supervised model may learn explicit categories.

But embedding models can also create categories that nobody names in advance.

If many examples receive similar training pressure, they can occupy a shared region.

A latent distinction can become operationally real before anyone gives it a label.

This matters because downstream systems can act on clusters and neighborhoods without understanding what produced them.

A fraud system may identify a cluster.

A hiring system may retrieve “similar” candidates.

A moderation system may group content.

A recommendation system may build audiences.

The categories can emerge geometrically rather than administratively.

That makes them harder to inspect.

The database does not say, “This axis represents socioeconomic status.”

It simply produces neighborhoods.

Yet those neighborhoods can still correlate with consequential human categories.

**A category does not need a name to acquire power.**

## Objectives can conflict inside one space

Modern embedding systems are often asked to serve multiple purposes.

Semantic similarity.

Retrieval relevance.

Domain classification.

Multilingual alignment.

Safety filtering.

Personalization.

The desired geometry for one task may conflict with another.

Two sentences can be semantically similar but operationally different.

Two products can be substitutes for search and complements for recommendation.

Two medical documents can discuss the same disease but belong far apart under a workflow metric because one is diagnostic and the other administrative.

A single vector space can become a compromise among objectives.

That compromise may be useful.

It may also make the meaning of similarity harder to state.

When one embedding is reused across many systems, convenience can turn a task-specific representation into a de facto universal coordinate system.

That should trigger suspicion.

**One space serving many decisions eventually imports one objective's geometry into another objective's world.**

## Hard-negative mining creates a feedback loop

A deployed retriever can help generate the next training set.

Search for a query.

Find documents the current embedding incorrectly ranks highly.

Treat those examples as hard negatives.

Retrain.

The system learns from its own mistakes.

This can be extremely effective.

It also creates reflexivity.

The current geometry determines which examples are surfaced for correction.

Those examples shape the next geometry.

The model is no longer learning only from an external dataset.

It is learning from the errors its previous representation made visible.

That creates a loop:

**geometry → retrieval → training examples → new geometry**

The embedding machine can begin to steer its own curriculum.

This is one reason deployed systems should be analyzed dynamically rather than as fixed models.

## Evaluation becomes a second objective

Training optimizes the loss.

Development optimizes the benchmark.

Product teams optimize downstream metrics.

These layers can disagree.

A lower contrastive loss may not improve retrieval quality.

Better semantic-similarity correlation may not improve user satisfaction.

A benchmark can reward average performance while hiding failures in rare domains.

A search metric can reward top-k recall while ignoring whether retrieved evidence is diverse enough for robust downstream reasoning.

So the embedding machine has at least two steering systems.

The formal training objective.

And the evaluation regime used to decide which trained model survives.

**What gets measured after training also shapes what gets trained next.**

Benchmarks are evolutionary pressure on model families.

## Optimization leaves history in the map

Train two models on the same data with the same broad objective and they need not learn identical coordinates.

Random initialization, minibatch order, optimizer settings and training dynamics can produce different internal arrangements.

Some spaces may be approximately alignable by simple transformations while preserving similar relationships.

Others may differ in more meaningful ways.

This is why exact coordinate values are often less important than invariant relationships.

Neighborhoods.

Angles.

Relative distances.

Task performance.

But even those can move across versions.

A new embedding model is not merely a better numerical encoder.

It may be a new map.

That creates a practical migration problem.

## The version number is part of the vector

Imagine a database containing a billion document embeddings.

Now replace the embedding model.

The old vectors and new query vectors may no longer inhabit a compatible geometry.

Even if dimensionality is unchanged, the coordinate system has moved.

The index may need to be rebuilt.

Documents may need to be re-embedded.

Thresholds may need recalibration.

Nearest-neighbor behavior may change.

Downstream caches and evaluations may become stale.

This is the operational consequence of a principle from Chapter 4:

Coordinates need provenance.

A production vector should travel with metadata about the model version, normalization, dimensionality and intended metric.

Otherwise the number looks portable while the meaning is not.

**An embedding without provenance is a coordinate without a map legend.**

## The embedding machine builds infrastructure

Once embeddings become reliable enough, entire systems are built around them.

Indexes assume their metric.

Caches store their results.

Retrieval pipelines calibrate thresholds around their score distribution.

Recommendation systems learn from their candidates.

Agents use them to recall memories.

Moderation systems use them to find related content.

Other models consume what they retrieve.

The embedding therefore becomes more than a representation.

It becomes infrastructure.

Changing the geometry can move decisions throughout the stack.

A subtle shift in the encoder can alter nearest neighbors.

Nearest neighbors alter retrieved context.

Retrieved context alters model outputs.

Model outputs alter user behavior.

User behavior becomes new data.

The geometry propagates.

## A hidden constitution of similarity

Every embedding system eventually answers questions like these:

What should count as similar?

Which differences should be ignored?

Which examples define the background?

Which rare distinctions deserve capacity?

How much should one hard negative matter?

What should remain invariant under transformation?

Which errors are expensive?

Who gets to define relevance?

These are technical questions.

They can also become institutional questions when the system mediates access to information, products, jobs, credit, attention or memory.

The embedding model does not write a visible policy document.

It writes policy into geometry.

That does not make every embedding a political instrument.

It means that consequential embeddings deserve the same question we would ask of any hidden decision rule:

**What judgments were compressed into this score?**

## The machine does not learn meaning in the abstract

It is tempting to say the model “learns meaning.”

That phrase is sometimes convenient.

It should not end the analysis.

The model learns a representation that helps it succeed under a training and evaluation regime.

Sometimes that representation aligns strikingly well with human judgments of meaning.

Sometimes it captures syntax, topic, style, identity, popularity, frequency or other regularities that happen to help the objective.

Often it captures several at once.

Meaning is not poured into the model.

A geometry is negotiated among data, architecture, objective and optimization.

That geometry becomes useful enough that we begin treating its neighborhoods as semantic facts.

This is the point at which engineering success can become conceptual overreach.

**The map can work extremely well without becoming the territory.**

## Build the map, then forget the cartographer

The strange power of embeddings is that the training history can disappear after training.

A downstream engineer receives vectors.

A database receives vectors.

A recommender receives vectors.

The origin story is compressed away.

The geometry feels given.

But every score still contains the consequences of the choices that built the space.

This is why responsible use of embeddings requires more than knowing how to compute cosine similarity.

You need to know what produced the vectors.

What counted as a positive.

What counted as a negative.

What data dominated the training set.

What objective was optimized.

What metric was assumed.

What normalization was used.

What evaluation selected this model over alternatives.

And where the geometry is known to fail.

The machine that builds the map remains part of the map's meaning.

## The next machine

Words became places.

Now we have seen how the places are manufactured.

The next question is what happens when we use the resulting geometry to find things.

Traditional search begins with symbols.

Keywords.

Exact terms.

Boolean conditions.

An embedding system can begin somewhere else.

It can retrieve by neighborhood.

A user can ask for an idea using words that never appear in the relevant document and still find it because the query and document land near one another.

That move changes what it means to search.

It also changes what it means for information to be visible.

**The embedding machine builds the map. Search decides which parts of the map get visited.**

That is where we go next.