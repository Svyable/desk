# Chapter 7 — The Geometry of Similarity

Similarity sounds like a property two things possess.

Two songs are similar.

Two faces are similar.

Two documents are similar.

Two customers are similar.

But a machine cannot act on *similar* until similarity has been made computational.

The usual move is geometric.

Represent each thing as a vector.

Choose a comparison rule.

Then let closeness stand in for resemblance.

This is enormously useful.

It is also the moment where a philosophical judgment becomes an engineering primitive.

## Similarity is not one relation

Consider two books.

They can be similar in subject, style, audience, length, ideology, vocabulary, historical period, commercial performance or reading difficulty.

A human can switch among these notions without announcing the metric.

A machine cannot.

A vector system has to preserve some relationships more strongly than others.

If the representation was trained to predict co-purchases, books bought by the same people may become neighbors.

If it was trained on text semantics, books discussing the same ideas may become neighbors.

If it was trained to predict engagement, books that trigger similar behavior may become neighbors.

The word *similarity* hides the training objective that made the neighborhood.

The geometry remembers what the system was taught to care about.

## A neighborhood is a theory

Take one vector and ask for its nearest neighbors.

The result looks like a list.

But conceptually it is a small theory of the object.

These are the things the representation considers most alike.

That neighborhood can reveal what the model has compressed together and what it has kept apart.

For a word, the neighbors may reflect topic, grammar, usage or cultural association.

For a product, they may reflect function, price, aesthetics or co-purchase behavior.

For a person, the neighbors may reflect activity patterns, preferences or institutional categories.

A neighborhood is therefore not merely a search result.

It is a local statement about the structure of the learned world.

## Local geometry, global consequences

Similarity systems often feel local.

One query.

One item.

A handful of neighbors.

But billions of local comparisons can produce global structure.

If certain items repeatedly appear near many queries, they become hubs.

If whole populations occupy sparse regions, they may be systematically harder to retrieve.

If a model compresses many concepts into a narrow directional cone, cosine scores may bunch together.

If one modality forms a different shell from another, cross-modal comparison can inherit that geometry.

The global shape of the space can bias millions of local decisions in the same direction.

This is where similarity becomes infrastructure.

A geometric regularity inside an embedding can become a statistical regularity in what people see.

## Hubs: the popular points of vector space

Some points become nearest neighbors unusually often.

This phenomenon is called *hubness*.

Imagine a person at a party who somehow appears in everyone else's list of “people I vaguely know.”

In a retrieval system, a hub can surface for many unrelated queries.

That may happen because the item is genuinely broad and useful.

Or because the geometry gives it an accidental centrality.

The distinction matters.

A hub can accumulate visibility simply because of where it sits in the representation space.

Then visibility creates clicks.

Clicks create training data.

Training data can reinforce the representation.

A geometric artifact can become a behavioral fact.

This is one way machine learning can convert representation into reality.

## Geometry can manufacture popularity

Suppose two items are equally valuable to users.

One lies in a dense, well-connected region of embedding space.

The other lies in a sparse region.

The dense-region item will often have more paths by which it can be retrieved, recommended or associated.

That can create more exposure.

More exposure can create more interaction data.

More interaction data can make future models represent the item even more confidently.

Now similarity geometry is part of a feedback loop:

representation → exposure → behavior → data → representation.

The vector space is no longer merely describing preferences.

It is participating in their production.

This is one of the central transitions of the book.

Vectors begin as representations.

At scale, they become forces.

## The center is not neutral

Many embedding spaces have a meaningful global structure.

Vectors may cluster around dominant directions rather than spread evenly through all possible orientations.

This is often described as anisotropy.

The technical details vary by model and training method, but the practical lesson is simple:

not all directions in a learned space are equally occupied.

If most vectors point somewhat the same way, cosine similarity can become less discriminating.

If a few directions capture large amounts of variance, those directions can dominate comparison.

If the global mean is nonzero, the origin may not be the natural center of the representation.

A metric can be mathematically valid while interacting badly with the geometry it is applied to.

The ruler and the landscape must fit each other.

## Contrastive learning sculpts the sphere

Many modern representation systems are trained contrastively.

Matched examples are encouraged to become similar.

Mismatched examples are pushed apart.

The recipe sounds simple: pull positives together, push negatives away.

But the resulting geometry depends on details.

Which examples count as positives?

Which examples become negatives?

How many negatives are visible at once?

Are vectors normalized?

What temperature scales the similarity logits?

Are examples from the same underlying concept accidentally treated as negatives?

How balanced is the dataset?

These decisions shape the distribution of angles and neighborhoods throughout the space.

The training objective does not merely label pairs as similar or dissimilar.

It sculpts a geometry in which future similarity will be measured.

## False negatives create geometric politics

Contrastive systems often assume that examples not paired together should be pushed apart.

But the world contains many legitimate relationships that the dataset does not annotate.

Two captions can describe the same image differently.

Two images can depict the same concept without being a designated pair.

Two documents can answer the same question without appearing together in training.

When a training system treats related examples as negatives, it can push meaningful neighbors apart.

This is called the false-negative problem.

The phrase sounds technical.

Its consequence is conceptual.

The geometry inherits not only what the dataset knows, but what the dataset fails to know.

Absence of annotation can become engineered separation.

## Similarity can be asymmetric in practice

Mathematical cosine similarity is symmetric:

`cos(x, y) = cos(y, x)`.

But retrieval systems built on embeddings can behave asymmetrically.

A query in one language may retrieve its counterpart in another language more reliably than the reverse.

A text query may find an image more reliably than the image finds the text.

A broad concept may retrieve a specific item while the specific item retrieves a different neighborhood.

The score function may be symmetric while the *system* is not.

Why?

Candidate distributions differ.

Neighborhood density differs.

Hubs differ.

Indexing and filtering differ.

Modalities or languages may occupy differently shaped regions.

This is an important distinction:

**symmetric arithmetic does not guarantee symmetric experience.**

## Similarity is contextual even when vectors are fixed

Suppose a document has a fixed embedding.

Its nearest neighbors may still change when the database changes.

Add millions of new documents and a previously close neighbor may fall far down the ranking.

Filter to a specific language and the neighborhood changes.

Restrict by date and the neighborhood changes.

Change the comparison metric and the neighborhood changes.

Re-embed the corpus with a new model and the neighborhood changes again.

Similarity therefore has at least two layers.

There is the pairwise score.

And there is the competitive context in which that score is interpreted.

Rank is relational.

A score of `0.78` means little without knowing what other candidates scored.

## The nearest thing can still be far away

Chapter 6 introduced the sparse-neighborhood problem.

Here it becomes a more general design principle.

A system that must always return a neighbor will create similarity even when the space contains no genuinely good match.

The ranking interface can manufacture confidence.

Five results appear.

The top result looks authoritative because it is first.

But perhaps its score barely exceeds the rest.

Perhaps every candidate is outside the range where the model was validated.

Perhaps the query occupies a region poorly represented in training.

Similarity systems need a concept of *none of the above*.

Otherwise ranking converts relative advantage into false adequacy.

## Similarity creates equivalence classes

When a system repeatedly treats two objects as near, it begins to erase distinctions between them operationally.

They may be shown to similar users.

Retrieved for similar queries.

Placed in the same cluster.

Used as substitutes in downstream models.

Assigned similar risk.

Offered similar prices.

The geometry creates an implicit equivalence relation:

for this system, these things are similar enough to be treated alike.

This is powerful because institutions run on categories.

Vectors can create categories without naming them.

A cluster may never receive a human-readable label, yet its members can still be treated similarly by ranking, routing or policy systems.

The category exists operationally before it exists linguistically.

## The unnamed category

Traditional institutions often classify before acting.

This person is a student.

This loan is high risk.

This product is luxury.

This document is medical.

Vector systems can reverse the order.

They can act on resemblance without first naming the category.

Find people near these people.

Find documents near this query.

Find transactions near known fraud.

Find customers near likely churners.

This is a profound computational shift.

The system no longer needs a crisp symbolic definition for every class.

It can navigate a continuous space of resemblance.

That flexibility is one reason embeddings are so powerful.

It is also why auditing them can be difficult.

A rule written in code can be inspected.

A neighborhood induced by millions of learned parameters may be harder to explain.

## Similarity is a soft law

A formal rule says:

if condition A, then action B.

A similarity system says:

things like A tend to receive actions like B.

The boundary is softer.

But at sufficient scale, soft rules can become extremely consequential.

If job candidates similar to previous hires are ranked higher, historical hiring patterns become a geometric prior.

If videos similar to previously engaging videos are promoted, existing tastes become vectors of future exposure.

If cases similar to known fraud receive scrutiny, the system creates a geometric definition of suspicion.

If documents similar to authoritative sources are preferentially retrieved, the representation influences what the system remembers.

Similarity becomes a distributed policy language.

It does not say *must*.

It says *more likely*.

Applied billions of times, “more likely” can shape a world.

## The space can have borders without walls

A vector space has no visible fences.

Yet neighborhoods can be sharply separated.

Communities can cluster.

Languages can occupy partially distinct regions.

Modalities can form different distributions.

Rare concepts can become isolated.

This creates borders that are statistical rather than legal.

An item on one side of a geometric boundary may be surfaced constantly for one population and almost never for another.

No engineer needs to write an explicit exclusion rule.

The exclusion can emerge from learned representation and ranking.

This is why representational audits cannot stop at checking whether a forbidden feature was included explicitly.

The question is what the geometry reconstructs indirectly.

## A metric can change the map without retraining the model

One of the strangest features of vector systems is that downstream behavior can sometimes change substantially without changing the embeddings themselves.

Change cosine similarity to another metric.

Center the vectors.

Remove dominant directions.

Apply a hubness correction.

Normalize differently.

Rerank with a second model.

Suddenly neighborhoods shift.

The representation stayed fixed.

The interpretation of the representation changed.

This is a useful governance lever.

It means the geometry of deployment is not fully determined at training time.

Systems can sometimes correct pathologies in the retrieval layer rather than retraining an expensive encoder.

But it also creates provenance demands.

An embedding model name alone does not specify system behavior.

The metric and post-processing are part of the model that users actually experience.

## Geometry is destiny only if we stop measuring it

It is easy to become fatalistic about learned spaces.

The model encoded the world this way.

Nothing to do.

That is wrong.

Geometry can be measured.

Neighborhoods can be inspected.

Hubness can be quantified.

Retrieval symmetry can be tested.

Sparse regions can be identified.

Alternative metrics can be compared.

Per-group recall can be measured.

Counterfactual queries can be constructed.

Representation drift can be monitored over model versions.

The space is learned, but it is not mystical.

A good vector system treats geometry as an observable engineering surface.

## Similarity needs an adversary

Every similarity claim should be asked what would make it misleading.

Two documents are near because they share vocabulary—but do they disagree on the answer?

Two users are near because they clicked similar things—but are their reasons different?

Two images are near because they share style—but is the object different?

Two transactions are near because they match a fraud pattern—but is the pattern correlated with an innocent population?

A similarity system improves when it is forced to distinguish resemblance from relevance.

This is the role of hard negatives: examples that look deceptively similar but should not be treated as equivalent.

The concept extends beyond training.

Every deployment needs adversarial near-neighbors.

Find the examples that geometry wants to collapse together but the application must keep apart.

Those examples define the limits of the space.

## The geometry of memory

Retrieval-augmented systems make similarity even more consequential.

When an AI system needs external information, vector similarity may decide which documents enter its context.

Those documents influence the answer.

Now embedding geometry is upstream of machine reasoning.

A document that is difficult to retrieve can become practically forgotten even if it remains stored perfectly.

A document that is a hub can become disproportionately remembered.

A query representation that drifts can change which evidence the model sees.

Storage is not memory.

Retrievability is memory.

And retrievability is geometric.

This is a major theme we will return to later in the book.

## The geometry of institutions

The same pattern extends beyond AI assistants.

Search engines decide which information is near a query.

Recommendation systems decide which content is near a user state.

Fraud systems decide which transactions are near known attacks.

Hiring systems may decide which candidates are near historical success profiles.

Scientific tools decide which papers, molecules or experiments are near known examples.

As institutions adopt vector representations, they acquire a hidden geometric layer.

Policies that once operated through named categories may increasingly operate through neighborhoods.

The institution begins to ask not only:

What are you?

But:

What are you near?

That is a different kind of power.

## Similarity becomes steering

Recommendation begins with resemblance.

Show me more things like this.

But repeated recommendation can change the user.

The music listener discovers a genre.

The shopper develops a preference.

The reader enters a political subculture.

The researcher follows a conceptual cluster.

The user vector moves because the system repeatedly selects nearby content.

Now similarity is not merely descriptive.

It creates a trajectory.

The system says:

because you were here, we will show you what is near here.

What is shown changes where you go next.

A neighborhood becomes a direction.

That is the bridge from similarity to steering.

## The ambitious claim

The vector revolution is often described as a breakthrough in representation.

That is true but incomplete.

Its deeper consequence may be that computers can now operate on **continuous resemblance at planetary scale**.

Before, many systems needed explicit categories, keywords or rules.

Now they can retrieve, rank and act through neighborhoods that were never manually named.

This makes computation more flexible.

It also creates a new layer of institutional infrastructure whose assumptions are geometric rather than symbolic.

The geometry decides what counts as adjacent.

Adjacency influences what gets seen.

What gets seen influences what gets chosen.

What gets chosen becomes new data.

New data reshapes future geometry.

Representation, behavior and power begin to form a loop.

## Ask what the neighborhood does

When two vectors are declared similar, do not stop at the score.

Ask what operational consequence follows.

Will one item be retrieved because of the other?

Will one person be treated like another?

Will one document stand in for another?

Will one behavior be interpreted as evidence about another?

Will the neighborhood create exposure, suspicion, opportunity or memory?

Similarity is not consequential because points happen to be close.

It becomes consequential when systems act on closeness.

And once systems act on closeness at enormous scale, geometry stops being an internal representation detail.

It becomes part of the architecture of society.

A vector space is a map.

Similarity is the rule for deciding what is nearby.

The future may depend increasingly on who draws the map, who chooses the ruler, and what happens to the things the geometry puts next door.