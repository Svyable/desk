# Coordinates Are a Choice

Stand in the middle of a room.

Where are you?

You might say three feet from the north wall and six feet from the west wall.

Someone else might measure from the southeast corner.

An architect might use coordinates from the building plan.

A surveyor might locate the entire building using latitude, longitude and elevation.

A robot might describe your position relative to its own camera.

You have not moved.

The numbers have.

This is the quiet fact underneath every coordinate system:

**Coordinates belong to a description, not to the thing being described.**

That sounds obvious when we are talking about a room.

It becomes much harder to remember when the coordinates have hundreds or thousands of dimensions and were learned by a machine.

A vector such as

`[0.17, -0.42, 1.06, ...]`

looks authoritative.

It has decimals.

It has structure.

It can be stored, compared and multiplied.

But the numbers do not carry meaning by themselves.

They only make sense inside the coordinate system that produced them.

Take the simple vector `[3, 4]` from the previous chapter.

We said the first coordinate represented east-west movement and the second represented north-south movement.

That convention made the vector understandable.

Now rotate the map forty-five degrees.

The same physical displacement will be represented by different numbers.

Nothing about the movement changed.

Only the axes did.

This separation between an object and its coordinates is one of the deepest ideas in mathematics because it lets us choose descriptions that make a problem easier.

A difficult shape in one coordinate system can become simple in another.

A complicated transformation can become nearly diagonal.

A dataset that looks entangled in the original features can become separated after the right projection.

The freedom to choose coordinates is not a nuisance.

It is a tool.

But every tool creates temptation.

Once a coordinate system is useful, we begin treating it as natural.

A map grid becomes the landscape.

A credit score becomes creditworthiness.

An engagement score becomes interest.

A risk vector becomes risk.

A learned embedding becomes meaning.

The coordinate system disappears from view because the numbers are convenient.

This chapter is about keeping it visible.

Start with a familiar example: location.

Latitude and longitude are useful because they let us identify positions on Earth with two numbers.

But those numbers are not ideal for every task.

If you are navigating an airplane across a continent, geographic coordinates are useful.

If you are planning a walk through a neighborhood, travel time may matter more than straight-line distance.

Two places can be physically close but separated by a river, highway or locked gate.

A subway map deliberately distorts geography because transfer structure matters more than exact physical spacing.

The best coordinate system depends on what you want to preserve.

This is exactly the problem machine learning faces.

Suppose we want a computer to organize books.

One coordinate system could use human-labeled features:

- publication year,
- page count,
- price,
- genre,
- language.

Another could represent each book by word frequencies.

Another could learn a dense vector from descriptions and reviews.

Another could learn from which readers buy which books.

Each coordinate system creates a different neighborhood.

In the publication-year space, two books from 2024 may be close.

In a semantic embedding, a book from 1859 and one from 2024 may be close because they discuss similar ideas.

In a recommendation space, two books on entirely different topics may be close because the same readers tend to buy them.

Which neighborhood is correct?

The question is incomplete.

Correct for what?

This is the first practical rule of coordinate choice:

**A representation should be judged by the relationships it preserves for the task, not by whether its coordinates feel intuitively natural.**

That rule has a liberating consequence.

A machine does not need to organize concepts according to categories a human would invent.

It can learn useful axes indirectly.

But the rule also has a dangerous consequence.

If the task is poorly chosen, the learned coordinates can be highly effective at preserving the wrong relationships.

Imagine a platform whose objective is to predict what a user will click next.

The learned user vector may become excellent at encoding patterns of attention.

That does not make it a complete representation of the user.

It may ignore long-term satisfaction, regret, privacy preferences, political values or goals that do not generate clicks.

The coordinate system is optimized for the objective.

Its omissions are part of its design.

The same problem appears in hiring.

Suppose a model represents applicants in a vector space learned from historical hiring and performance data.

If the objective rewards resemblance to past employees who were promoted, the space may preserve exactly the pathways that the institution historically rewarded.

The model can become highly accurate relative to that history.

The coordinates can still be wrong for a future in which the organization wants different people, different skills or a different culture.

A vector space can be internally coherent and strategically obsolete.

This is why choosing coordinates is partly choosing a future.

The issue becomes more subtle in machine-learned spaces because nobody necessarily chooses the individual axes directly.

A neural network learns parameters through optimization.

Its internal representation emerges from the task, architecture, data and training process.

The resulting dimensions may not correspond to named human concepts.

Yet the system still has a coordinate system.

It still encodes some distinctions more readily than others.

It still places some examples near one another and others far apart.

It still has regions where many training examples live and sparse regions where few do.

The coordinates are learned.

The choice has merely moved upstream.

Instead of choosing axis 1 and axis 2 by hand, we choose the data and objective that allow the system to invent its own axes.

This is one of the most important ways to think about modern AI governance.

People often ask whether a model is biased after training.

A deeper question is what geometry the training process had an incentive to create.

If data contains a repeated association, optimization may find a convenient direction that captures it.

If the objective rewards one distinction and ignores another, the representation may become exquisitely sensitive to the first and nearly blind to the second.

The model's geometry is not written line by line by a programmer.

It is still downstream of choices.

Data collection is a coordinate choice.

Labeling is a coordinate choice.

Objective design is a coordinate choice.

Negative sampling is a coordinate choice.

What counts as a pair, a match, a success or an error helps determine the eventual space.

This does not mean every internal feature can be predicted from those decisions.

Machine learning is not that simple.

It means the geometry has a history.

That history matters when we interpret it.

Consider principal component analysis, one of the classic tools for changing coordinates in data.

Suppose a dataset contains height, weight, arm span and several related physical measurements.

The original coordinates were chosen by humans.

But because the measurements are correlated, much of the variation may lie along a smaller number of directions.

Principal component analysis finds directions that capture large amounts of variance.

Those directions are combinations of the original measurements.

The new coordinates may be mathematically useful even if they do not have simple names.

This is a helpful analogy for learned representations.

The machine can discover directions that compress recurring patterns.

But variance is not value.

A direction can explain a lot of statistical variation and still be irrelevant to the decision we care about.

A rare feature may be critical precisely because it is rare.

This gives us a second rule:

**The easiest direction to represent is not necessarily the most important direction to preserve.**

Optimization likes frequent signal.

Institutions often care about unusual cases.

A medical system may perform beautifully on common presentations and poorly on a rare but dangerous condition.

A fraud system may model ordinary purchases perfectly while missing a new attack.

A language model may represent mainstream usage richly and minority dialects sparsely.

Geometry reflects density.

Density reflects history.

This is why sparse regions deserve attention.

A point inside a dense region has many nearby examples.

A point in a sparse region may be forced into comparisons with examples that are only weakly similar.

The system still returns a nearest neighbor.

“Nearest” does not mean “near.”

That distinction is easy to miss because search interfaces rarely say, “Nothing here is actually close, but this is the least distant option.”

They simply return a result.

Coordinate systems create confidence through completeness.

Every query has coordinates.

Every vector has neighbors.

Every point can be ranked.

The existence of an answer can hide the weakness of the representation.

This becomes especially important in high dimensions.

Human geometric intuition was trained in three dimensions.

High-dimensional spaces behave differently.

Distances can concentrate.

Neighborhood relationships depend strongly on the metric and normalization.

There are many more possible directions than we can visualize.

A two-dimensional picture of an embedding can be useful, but it is a projection of a projection: a complex representation compressed again so a human can see it.

Clusters may look cleaner or farther apart than they are in the original space.

The visualization is another coordinate choice.

This is why plots of embeddings are best treated as exploratory maps rather than proof.

A beautiful cluster is a question generator.

Not a verdict.

We can now return to a surprising fact about modern neural representations.

Two models can learn spaces that support similar behavior while assigning entirely different coordinates to individual dimensions.

Imagine one model's useful geometry is rotated relative to another's.

A concept represented by a combination of dimensions 3, 17 and 204 in one model might be spread across a completely different combination in the other.

The coordinate values cannot be compared directly.

Yet the relational structure may be similar.

This tells us something profound.

The meaning we care about often lives in relationships among vectors, not in the raw coordinate labels.

Distances.

Angles.

Neighborhoods.

Subspaces.

Directions.

Transformations.

This is why the next chapter matters.

If coordinates are a choice, we need to understand what remains the same when the coordinate system changes.

That is the question of basis.

A basis is, roughly, a set of directions we use to describe every other direction in the space.

Change the basis and the coordinates change.

The underlying vector can remain the same.

This is more than a mathematical trick.

It is a defense against literalism.

It reminds us that the numbers inside a representation are not sacred.

What matters is the structure they collectively preserve.

This perspective is especially valuable when people hunt for meaning in individual neurons or embedding dimensions.

Sometimes individual components are interpretable.

Often the representation is distributed.

A feature can live across many coordinates.

Rotate the representation and the same geometry can be expressed with very different individual values.

If our interpretation disappears under a harmless change of coordinates, we should ask whether we were interpreting the model or merely the notation.

This does not make interpretation impossible.

It makes interpretation more demanding.

We should look for relationships that survive reasonable transformations and interventions.

We should distinguish convenient coordinates from invariant structure.

We should ask whether an observed direction causally affects behavior or merely correlates with it.

We should test whether the geometry persists across data, prompts and models.

Most of all, we should stop treating coordinates as discovered facts about the world.

Coordinates are selected, engineered or learned ways of making relationships computable.

That is their power.

A good coordinate system makes an important problem easier to solve.

A bad one makes the wrong problem easy.

And a dangerous one becomes so useful that everyone forgets it was ever a choice.
