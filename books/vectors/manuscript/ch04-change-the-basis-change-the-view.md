# Change the Basis, Change the View

A map can rotate without the city moving.

That is the simplest way to understand a change of basis.

The points are still where they were relative to one another.

The streets still intersect.

The distances can remain the same.

Only the coordinate system changes.

In the previous chapter, we separated an object from the coordinates used to describe it.

Now we can go one step further.

Sometimes the best way to understand a vector is to change the directions we use to describe it.

This is not cosmetic.

The right basis can turn a difficult problem into an easy one.

It can expose structure that was hidden in the original coordinates.

It can separate mixed signals.

It can compress a system.

It can also fool us into believing that a convenient view is the only view.

That tension — between useful representation and mistaken literalism — is why basis matters far beyond linear algebra.

## The directions underneath the coordinates

Take a two-dimensional plane.

We usually describe a point using two familiar directions: horizontal and vertical.

Call them `x` and `y`.

A vector might be written:

`[3, 4]`

Three units along the first basis direction.

Four along the second.

But nothing forces us to use those directions.

We could rotate the axes by forty-five degrees and describe the same vector using two new basis directions.

The coordinate numbers would change.

The underlying vector would not.

This distinction is essential.

A basis is not the space.

It is a set of directions we use to speak about the space.

Once that idea becomes intuitive, a large amount of machine learning becomes easier to reason about.

Because modern models are full of representations whose raw coordinates are less important than the structures that persist across equivalent descriptions.

## A good basis makes the problem look simple

Suppose you are studying motion along a diagonal track.

Using ordinary horizontal and vertical coordinates, every movement requires two numbers.

Move ten meters along the track and both `x` and `y` change.

Now rotate the basis so one axis lies directly along the track.

Suddenly the motion has one dominant coordinate.

The problem did not become simpler physically.

It became simpler descriptively.

The right basis aligned with the structure already present.

This is one of the recurring strategies of mathematics and engineering:

**Choose coordinates that make the important variation easy to express.**

Fourier analysis changes from time or space coordinates into frequency components.

Principal component analysis rotates data into directions of large variance.

Eigenvector methods identify directions that transform particularly simply under a linear operation.

Signal processing repeatedly moves among representations because different views expose different properties.

The basis is a tool for asking a better question of the same object.

## The danger of named axes

Humans like named dimensions.

Income.

Age.

Temperature.

Risk.

Sentiment.

Political ideology.

They make tables readable.

But learned vector spaces often do not offer such clean labels.

A concept may be distributed across many dimensions.

A single dimension may participate in many concepts.

Rotate the representation and individual coordinates can change radically while the relationships among points remain largely intact.

This creates a problem for interpretation.

Suppose someone discovers that dimension 732 of an embedding appears correlated with formality.

It is tempting to call dimension 732 the formality axis.

Sometimes that label may be useful.

But if an equivalent rotation of the representation spreads the same feature across twenty dimensions without changing the model's behavior, then “dimension 732” was partly an accident of coordinates.

The more robust object may be a direction or subspace rather than one raw coordinate.

This gives us a practical interpretability rule:

**Prefer structures that survive harmless changes of coordinates over stories attached to individual numbers.**

The rule does not make interpretation impossible.

It makes it less naive.

## Principal components and the temptation of importance

One of the clearest examples is principal component analysis.

Imagine a dataset with many correlated measurements.

PCA finds new orthogonal directions that capture decreasing amounts of variance.

The first principal component captures the largest possible variance along one direction.

The second captures the largest remaining variance while staying perpendicular to the first.

And so on.

This can be enormously useful.

A dataset with hundreds of dimensions may have much of its variation concentrated in a smaller number of directions.

Rotate into those directions and the structure can become easier to visualize or compress.

But there is a trap.

Variance is not importance.

The largest source of variation may be irrelevant to the decision you care about.

A small, rare direction may contain the medically critical signal.

A low-variance feature may identify fraud.

A minority group may occupy a sparse direction that contributes little to global variance but matters enormously for fairness.

A basis optimized for compression is not automatically a basis optimized for judgment.

Again, the representation inherits the objective.

## Eigenvectors: directions that keep their character

There is another class of directions that appears constantly across science: eigenvectors.

Suppose a linear transformation acts on a vector.

Usually the transformation changes both its magnitude and direction.

But certain special directions keep their direction after the transformation. They may stretch, shrink or reverse, but they remain aligned with themselves.

Those are eigenvectors.

They matter because they reveal natural modes of a system.

A complicated transformation can become simple when described in an eigenbasis.

Instead of many variables interacting chaotically, the system can sometimes be decomposed into independent modes that each scale by their own eigenvalue.

This is why eigenvectors appear in vibration analysis, quantum mechanics, dynamical systems, graph algorithms, statistics and machine learning.

The broad lesson is more important than the formalism:

**Some coordinate systems reveal the operations a system naturally performs.**

That is a powerful idea for understanding intelligence.

A model's internal basis may be obscure to us, but behavior may become interpretable when we identify directions along which the system responds consistently.

## Meaning may live in subspaces

The phrase “semantic direction” can be misleading if it encourages us to imagine one perfect arrow for every human concept.

Representations are often messier.

A concept may occupy a subspace rather than a single direction.

Context may rotate which features matter.

Different layers may encode related information differently.

Several nearby directions may support similar behavioral effects.

This is one reason simplistic vector arithmetic can be both impressive and fragile.

Classic word embeddings became famous for analogies where vector differences appeared to encode relationships.

Those examples helped reveal that distributed representations contain geometric regularities.

But they also encouraged a mythology in which every concept had one clean algebraic direction.

Modern representations are richer.

The useful geometry is real.

The clean story is often local.

This distinction will matter later when we discuss steering.

If researchers identify a direction associated with some behavior and perturb activations along it, a causal effect can be much stronger evidence than mere correlation.

But even then, the intervention should be tested across prompts, contexts, layers and models.

A direction can work in one local region without being a universal axis of the concept.

## Rotations and invariants

A good way to defend against overinterpretation is to ask what remains unchanged when the basis changes.

Suppose we rotate a set of vectors without stretching them.

The individual coordinates change.

But pairwise distances can remain the same.

Angles can remain the same.

Nearest-neighbor relationships can remain the same.

Dot products can remain the same under an orthogonal rotation.

These preserved quantities are invariants under that transformation.

Invariants are valuable because they tell us what belongs to the geometry rather than the notation.

If a semantic relationship survives a rotation, it is more plausibly a property of the relational structure.

If it disappears merely because we renamed the axes, it was probably never intrinsic to the space.

This becomes practical when comparing models.

Two independently trained models may learn representational spaces that are rotated or otherwise transformed versions of one another.

Raw coordinates cannot be compared directly.

Yet after alignment, meaningful similarities may emerge.

The problem is not that one model used the wrong coordinates.

The problem is that coordinates are local conventions.

## Basis choice is a form of compression

Changing basis can also reveal that a system is lower-dimensional than it appears.

Imagine a cloud of points in three-dimensional space lying almost entirely on a tilted plane.

In the original coordinates, all three dimensions vary.

Rotate the basis so two axes lie along the plane and one points perpendicular to it.

Now most of the information lives in two coordinates.

The third is nearly zero.

The right basis discovered a simpler structure.

Machine learning lives on this hope.

Images contain millions of pixels, yet useful variation may occupy a much smaller manifold.

Language admits enormous combinatorial possibility, yet human text concentrates in structured regions.

User behavior can be high-dimensional at the surface while being driven by fewer latent factors.

Embeddings are useful partly because they seek coordinate systems in which relevant structure becomes compact.

But compression always asks the same question:

Relevant to what?

A representation that compresses brilliantly for one task can erase exactly what another task needs.

## When the basis becomes policy

This is where an abstract mathematical idea becomes institutional.

Organizations constantly choose bases.

A company describes performance through revenue, growth, margin and retention.

A school describes students through grades, attendance and test scores.

A hospital describes patients through diagnostic codes, lab values and risk categories.

A government describes an economy through employment, inflation, output and productivity.

These are not vector bases in the strictest mathematical sense.

But the analogy is useful.

A measurement framework defines directions along which change becomes visible.

Anything orthogonal to those directions can disappear from decision-making.

Change the basis and the same reality tells a different story.

A company optimized in the revenue-growth basis may look excellent while degrading trust.

A hospital optimized in the throughput basis may look efficient while making continuity of care harder to see.

A recommendation system optimized in engagement coordinates may miss satisfaction, regret or social cost.

A basis is a view.

A view is a filter.

At scale, a filter becomes policy.

## The coordinate system can move too

There is an additional complication in learned systems.

The representation itself changes during training.

The basis is not fixed while the model learns.

Internal features emerge, rotate, split, merge and reorganize.

A concept that is represented one way early in training may later be encoded differently.

Fine-tuning can alter neighborhoods.

New data can shift directions.

A model update can change the geometry even when the interface looks identical.

This matters for systems that build external infrastructure around embeddings.

Suppose millions of documents are embedded using one model and stored in a vector database.

Replace the embedding model and the old vectors may no longer inhabit the same geometry as new query vectors.

The coordinates are incompatible.

The database did not become corrupted.

The basis changed.

Operationally, that can require re-embedding the corpus, versioning vector spaces or maintaining translation layers.

The abstract lesson becomes a migration problem.

## Basis mismatch is a hidden interface bug

This is worth generalizing.

Many AI systems fail not because one component is individually bad, but because two components represent the world in incompatible spaces.

A retriever uses one embedding model.

A reranker assumes another notion of relevance.

A recommendation model updates while downstream thresholds remain fixed.

An agent's memory store contains vectors generated by an older model.

A multimodal system aligns text and images imperfectly across domains.

These are basis and metric mismatches disguised as product bugs.

The components speak numbers.

That does not mean they speak the same geometry.

This is why mature vector infrastructure needs versioning, evaluation and migration discipline.

A vector without its model, normalization convention, dimensionality and metric is incomplete metadata.

Coordinates need provenance.

## Change the view on purpose

There is a larger intellectual lesson here.

When a problem looks impossible, changing the basis can be more powerful than adding more computation.

A tangled relationship may become simple in the right coordinates.

A noisy dataset may reveal a low-dimensional structure.

A transformation may become diagonal.

A conflict may look different when the axes change from positions to incentives.

A business may look different when the axes change from revenue to dependency and resilience.

A model may look different when we analyze directions and subspaces rather than individual neurons.

The point is not that every problem secretly has one perfect basis.

It is that the first coordinate system you encounter is rarely sacred.

That habit is useful far beyond vectors.

Ask:

What would this look like in a different basis?

Which variation becomes simple?

Which distinction disappears?

What remains invariant?

What does this view make easy to optimize?

What does it make hard to see?

Those questions protect us from one of the most common errors in quantitative systems: mistaking the chosen representation for the underlying reality.

## The view changes the available move

Vectors are powerful because they let machines act geometrically.

But action depends on representation.

A system cannot optimize a direction it cannot express.

It cannot preserve a distinction its basis has erased.

It cannot retrieve a neighbor that its geometry places far away.

It cannot notice a dimension that training never made useful.

Representation determines available movement.

That is why basis choice is not merely descriptive.

It is operational.

The coordinate system helps decide which actions are easy.

And once machines begin acting at scale, the easiest directions can become the directions institutions move.

So change the basis when the current one hides the structure.

But remember what the operation means.

You are not changing reality.

You are changing the language in which reality becomes computable.

Sometimes that is enough to reveal the answer.

Sometimes it is enough to hide the question.
