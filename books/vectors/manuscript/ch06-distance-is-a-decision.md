# Chapter 6 — Distance Is a Decision

Two points sit on a page.

How far apart are they?

It sounds like the sort of question that has one answer.

Measure the straight line between them.

Done.

But put those points on a map and the answer starts to move.

A river lies between them. One road crosses it. A mountain blocks another route. The train follows a tunnel. Walking takes forty minutes. Driving takes twelve. At rush hour it takes fifty.

The points did not move.

The meaning of *distance* did.

This is the first thing to understand about distance in vector spaces:

**Distance is not discovered until a rule for measuring it has been chosen.**

## The ruler comes first

In ordinary Euclidean geometry, the distance between two vectors `x` and `y` is

`||x - y||₂`.

Square the difference in each coordinate, add the squares, take the square root.

This is the familiar straight-line distance inherited from the Pythagorean theorem.

It is so familiar that it can feel like distance itself.

It is not.

It is one metric.

Another common choice is Manhattan distance:

`||x - y||₁`.

Instead of squaring coordinate differences, add their absolute values.

The name comes from a city-grid intuition. If you cannot cut diagonally through buildings, the relevant route may be horizontal plus vertical rather than straight through the block.

The same pair of vectors can therefore have different distances depending on the metric.

The ruler is part of the model.

## Near according to what?

Suppose two customers have feature vectors describing spending across categories.

Under Euclidean distance, a large difference in one category can dominate because squared differences grow quickly.

Under Manhattan distance, differences accumulate linearly.

Under cosine similarity, overall magnitude may matter much less than whether the customers' spending patterns point in similar directions.

Each measure asks a different question.

Euclidean distance asks about straight-line separation.

Manhattan distance asks about accumulated coordinate-wise difference.

Cosine similarity asks about angular alignment.

Dot product mixes alignment with magnitude unless vectors are normalized.

None is automatically the correct notion of similarity for customers.

The correct choice depends on what relationship the system is supposed to preserve.

## Units can secretly choose the answer

Imagine a vector with two coordinates:

`[age in years, annual income in dollars]`.

Now calculate Euclidean distance between people.

Income differences might be measured in tens of thousands. Age differences might be measured in tens.

Without normalization, the income coordinate will dominate the geometry.

This is not because income is philosophically more important.

It is because the units made its numbers larger.

Change dollars to thousands of dollars and the geometry changes.

Nothing about the people changed.

The coordinate convention changed the answer.

This is why scaling and standardization are not cosmetic preprocessing steps. They can determine which dimensions count as close.

A metric inherits every choice made before it.

## Distance is weighted judgment

Sometimes we want dimensions to matter differently.

A medical matching system might care much more about one clinical variable than another. A logistics system might treat a kilometer of road differently depending on terrain. A fraud system might regard certain feature differences as especially consequential.

One way to express this is a weighted distance.

The system effectively says:

this difference counts more;

that difference counts less.

In machine learning, the weights may be hand-designed or learned.

Either way, geometry becomes policy.

A distance function is a compact answer to the question:

**Which differences should matter, and by how much?**

That is not a neutral question.

## Learning the ruler

Modern systems often do something more powerful than choosing a familiar metric.

They learn a representation so that a simple metric becomes useful.

This reverses the way beginners often imagine embeddings.

We do not necessarily begin with a naturally meaningful space and then measure distance inside it.

Instead, training can reshape the space so that items we want treated as similar become close under a chosen comparison rule.

A contrastive model may pull matched examples together and push mismatched examples apart.

A recommender may learn user and item vectors whose scores predict interactions.

A retrieval model may learn query and document representations so relevant documents rank above irrelevant ones.

The metric can remain mathematically simple while the learned geometry becomes extraordinarily complicated.

The intelligence is partly in arranging the space.

## The loss function draws the map

If training rewards a model for placing semantically related sentences near one another, the resulting geometry may support semantic search.

If training rewards co-purchase prediction, closeness may encode shopping compatibility.

If training rewards image-text matching, closeness may encode cross-modal association.

If training rewards click prediction, closeness may encode click propensity.

These are not the same notion of similarity.

The vectors can have the same dimensionality. The system can use the same cosine formula. The database can run the same nearest-neighbor algorithm.

But the meaning of near is different because the training objective was different.

The metric does not act alone.

**The loss function helps decide what distance means.**

## A nearest neighbor is not necessarily a good neighbor

Vector search systems often return nearest neighbors.

The phrase sounds definitive.

But nearest only means nearest under the representation and metric being used.

A query about how to cancel a subscription might retrieve documents with similar language but outdated policy.

A medical embedding might retrieve cases that are statistically similar while missing a rare feature that changes the diagnosis.

A hiring system might find candidates near historically successful employees and thereby reproduce historical selection patterns.

A recommendation system might retrieve content near a user's past behavior even when the user wants something new.

Geometric proximity is evidence produced by a model.

It is not a certificate of relevance.

## The neighborhood has a radius

Suppose a search system always returns the five nearest documents.

It will return five documents even if all five are poor matches.

Nearest-neighbor ranking is relative.

It does not automatically tell us whether the nearest item is actually near in an absolute or useful sense.

This matters in sparse regions of a representation space.

A point can have a nearest neighbor that is still very far away.

Production systems therefore often need more than ranking. They need thresholds, confidence signals, reranking, metadata filters, lexical constraints or abstention behavior.

The geometry answers one question:

which candidates are closest?

The application must still answer another:

are any of them close enough?

## High dimensions are strange country

Human geometric intuition was trained in three dimensions.

Embedding spaces may have hundreds or thousands.

Some familiar intuitions become unreliable there.

Distances can concentrate. Random points can behave in ways that feel surprising. The volume of a high-dimensional region is distributed very differently from the volume of a circle or sphere we can draw.

This does not make high-dimensional distance useless.

It means visual intuition is not sufficient evidence.

A metric that works well in one dimensionality, data distribution or task may behave poorly in another.

Benchmark the retrieval behavior that matters.

Do not trust the picture in your head merely because the formula looks familiar.

## Cosine changes the question

Recall the dot product:

`x · y = ||x|| ||y|| cos(θ)`.

If we divide by the vector norms, we obtain cosine similarity:

`cos(θ) = (x · y) / (||x|| ||y||)`.

Normalization removes magnitude from the comparison and focuses on direction.

This can be useful when vector length is nuisance rather than signal.

But normalization is itself a decision.

If magnitude carries useful information, normalization discards it.

If magnitude mostly reflects frequency, confidence or exposure that should not dominate, normalization may improve the comparison.

The important question is not whether cosine similarity is popular.

It is whether direction alone is the relationship the task needs.

## Equivalent formulas, different systems

For unit-normalized vectors, cosine similarity, dot product and Euclidean distance are closely related.

If `||x|| = ||y|| = 1`, then

`||x - y||² = 2 - 2(x · y)`.

So ranking unit vectors by larger dot product is equivalent to ranking them by smaller Euclidean distance.

This mathematical equivalence is useful.

It is also easy to overgeneralize.

Remove normalization and the rankings can diverge.

Change preprocessing and they can diverge.

Change the representation model and they can diverge.

A system's metric cannot be understood separately from the vectors it receives.

## Approximation adds another decision

At small scale, a system can compare a query with every stored vector and find the exact nearest neighbors.

At enormous scale, that may be too slow or expensive.

Approximate nearest-neighbor systems trade some exactness for speed and memory efficiency.

They may use graph indexes, inverted structures, quantization or other techniques to avoid exhaustive comparison.

Now the word *nearest* has another qualifier.

The system is looking for neighbors that are probably close enough under an approximation strategy tuned for operational constraints.

Latency, memory, recall and cost become part of the geometry's practical meaning.

Two systems using the same embeddings and metric can return different results because their indexes make different tradeoffs.

Distance is mathematical.

Retrieval is engineered.

## Filters redraw the neighborhood

Suppose a user searches for a restaurant recommendation using an embedding.

The nearest item in the entire vector database might be on another continent.

So the application filters by geography.

Or availability.

Or language.

Or permissions.

Or product inventory.

Or publication date.

After filtering, the nearest neighbor changes.

This is obvious once stated, but important.

Real systems rarely rank the entire universe of possibilities.

They rank a candidate set.

Candidate generation is therefore part of what *near* means operationally.

The metric chooses among the candidates it is allowed to see.

Policy chooses the candidate set.

## Distance can encode exclusion

When a system defines a center, it also defines a periphery.

When it defines normal neighborhoods, it creates outliers.

When it clusters people, products or behaviors, it establishes which differences are small enough to ignore and which are large enough to separate.

These operations can be useful.

They can also turn representational assumptions into consequential categories.

A fraud detector may flag behavior far from a learned norm.

A recommender may neglect users in sparse regions.

A moderation system may misread dialects poorly represented in training data.

A medical model may perform worst for populations far from its training distribution.

The danger is not that distance exists.

The danger is treating distance as self-justifying.

## The metric is a constitution

A constitution establishes rules for what differences matter to a political system.

A metric does something analogous for a vector space.

It defines how differences become measurable separation.

Some differences are amplified.

Some disappear.

Some combinations count as equivalent.

Some directions become expensive.

Some neighborhoods become natural only because the rule says they are.

This analogy should not be pushed too far. A mathematical metric is not a political document.

But the design lesson survives:

rules that look procedural can shape substantive outcomes.

The ruler influences the world the system can see.

## Measure the metric

How should we choose a distance function?

Not by elegance alone.

Evaluate it against the task.

For retrieval, measure whether relevant items appear near the top.

For recommendation, measure not only clicks but satisfaction, diversity and longer-term outcomes where appropriate.

For clustering, test stability and whether clusters correspond to anything useful outside the algorithm.

For anomaly detection, examine false positives across important populations and contexts.

For semantic systems, compare dense similarity with lexical and structured baselines.

And test failure cases deliberately.

A metric earns trust by producing useful behavior under scrutiny.

## There is no view from nowhere

The dream of a perfect representation is often a dream of escaping choices.

Put the data into the right vector space, compute the true distance, and let geometry decide.

But geometry cannot remove the design history that produced the space.

Someone chose the data.

Someone chose the objective.

Someone chose the features or architecture.

Someone chose whether to normalize.

Someone chose the metric.

Someone chose the candidate set.

Someone chose the threshold.

Someone chose what success would mean.

The final number may be precise to eight decimal places.

Precision does not erase provenance.

## The useful question

When a machine tells you that two things are similar, ask a slightly more demanding question:

**Similar under what geometry?**

Then ask:

What was preserved?

What was normalized away?

What objective shaped the space?

Which metric measured it?

Which candidates were excluded before comparison?

How far away is the nearest neighbor really?

What failure would make this notion of closeness misleading?

These questions do not weaken vector systems.

They make them legible.

Distance is one of the great compression devices of modern computing. It can turn a complicated relationship among thousands of coordinates into one sortable number.

That is exactly why it deserves scrutiny.

A distance is not merely a measurement between two points.

It is a decision about which differences count.