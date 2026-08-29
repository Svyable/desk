# More Than a Number

A number can be large.

A number can be small.

A number can be positive, negative, precise, approximate, measured, estimated, borrowed, invented or wrong.

But a number cannot point.

That is the first thing a vector adds.

Direction.

It sounds modest until you notice how many decisions are really about direction disguised as quantity.

A company can grow revenue while moving toward dependence on one customer.

A person can earn more money while moving away from work they value.

A model can improve average accuracy while becoming worse on a class of cases that matters most.

A city can add housing while moving farther from affordability if demand rises faster.

A system can accumulate progress on one axis while deteriorating on another.

A scalar compresses all of that into one line.

A vector refuses.

It says: one number is not enough to tell me where you are going.

This is why vectors are such a powerful primitive. They allow several quantities to travel together without pretending they are the same quantity.

Start with the simplest case.

Suppose you walk three blocks east and four blocks north.

You could describe the trip with two numbers:

`[3, 4]`

The first coordinate tells you how far east you moved.

The second tells you how far north.

Together they form a vector.

If somebody asks how far you are from where you started, geometry gives the answer: five blocks in straight-line distance.

But notice what would be lost if we kept only the five.

Five blocks northeast is not five blocks southwest.

The magnitude is the same.

The consequence is different.

This distinction between magnitude and direction is the seed from which the rest of vector mathematics grows.

A vector is not merely a bag of numbers.

It is a structured statement about position or change inside a space.

That space can be physical.

It can also be conceptual.

Suppose a product is described by two coordinates: price and reliability.

One product may sit at `[low price, medium reliability]`.

Another may sit at `[high price, high reliability]`.

A buyer does not need to collapse those qualities into one score immediately. The two dimensions can coexist. Different buyers can care about different directions through the same space.

Add a third dimension for ease of use.

A fourth for repairability.

A fifth for privacy.

Soon we have a space that is hard to draw but easy for a computer to store.

This is what high-dimensional representation buys us.

It postpones compression.

Instead of forcing a complicated thing into one number too early, we keep multiple distinctions alive at once.

That is enormously useful.

It is also where trouble begins.

Because the coordinates are never self-explanatory.

In our product example, we chose price, reliability, ease of use, repairability and privacy. Somebody else might choose prestige, resale value, battery life, ecological impact and compatibility.

Both spaces can describe the same product.

Neither is the product itself.

This leads to the first principle of vector thinking:

**A vector is always a vector in a space, and the space determines what the vector can say.**

People often talk about embeddings as though objects naturally possess vectors waiting to be discovered.

They do not.

The vector comes from a representation system.

The system has an objective.

The objective decides which relationships are useful enough to preserve.

A map of London designed for driving emphasizes roads.

A map designed for the Underground emphasizes stations and transfers.

A map designed for flood risk emphasizes elevation and water.

All three describe London.

They do not preserve the same London.

A learned vector space works the same way.

A word embedding trained to predict neighboring words preserves statistical relationships useful for that prediction task.

An image-text model trained to align captions with pictures preserves relationships useful for matching language to visual content.

A recommendation model trained to predict clicks preserves relationships useful for predicting clicks.

Those spaces may overlap with what humans call meaning.

They are not identical to meaning.

This matters because the most seductive feature of vectors is that they make relationships look objective.

Once two items are represented as coordinates, we can calculate the distance between them.

The answer may have twelve decimal places.

That precision can be mistaken for neutrality.

But the number inherits every choice that produced the space.

Imagine two people standing in a city.

Their physical distance can be measured in meters.

Now ask how socially distant they are.

You need a definition.

Shared friends?

Income?

Language?

Politics?

Occupation?

Daily routine?

There is no single natural coordinate system waiting underneath the question.

Any answer depends on what differences the system is designed to preserve.

The same is true of machine representations.

When a system says two documents are similar, it is not revealing a metaphysical property called similarity.

It is applying a geometry.

That geometry can be excellent.

It can also be excellent for the wrong objective.

A customer-support system may learn that two complaints are semantically similar even though one is legally urgent and the other is routine.

A hiring system may identify candidates who resemble past high performers while reproducing the narrow pathways through which those past employees were selected.

A content system may discover that outrage and curiosity occupy nearby behavioral neighborhoods because both predict continued attention.

Vectors can preserve patterns we did not intend to endorse.

This is not a reason to distrust all representation.

Humans cannot think without representation either.

The point is to notice the layer.

Before a machine compares things, somebody or something has already decided how those things will become comparable.

That is one reason dimensions matter.

In a two-dimensional vector such as `[3, 4]`, each coordinate has a name we understand: east and north.

In a modern embedding with 1,536 or 4,096 dimensions, individual coordinates may not have any clean human interpretation.

Dimension 728 is not necessarily “friendliness.”

Dimension 1,104 is not necessarily “financial risk.”

The representation is distributed.

A concept may be encoded across many coordinates.

A coordinate may participate in many concepts.

This feels alien because human-made tables usually give every column a name.

Machine-learned spaces often do not.

Yet unnamed dimensions can still be useful.

Consider sound.

A recording can be represented by thousands of measurements from which a machine learns distinctions no engineer explicitly labeled. The internal space may separate instruments, voices, environments, moods and acoustic textures without containing one tidy axis for each word in our vocabulary.

The machine is not required to organize the world according to the names we would have chosen.

That is one source of its power.

It is also one source of opacity.

A system can navigate a space we cannot narrate dimension by dimension.

This is the second principle:

**Interpretability and usefulness are different properties.**

A vector can be useful even when its coordinates are not individually meaningful to us.

But usefulness alone does not make the representation safe.

If a high-dimensional space affects consequential decisions, we still need ways to test what relationships it preserves, what neighborhoods it creates and where its geometry fails.

One way to understand this is to think about projection.

A shadow is a projection.

A three-dimensional object casts a two-dimensional image.

The shadow can reveal shape while losing depth.

A different light source creates a different shadow.

Neither shadow is fake.

Neither is complete.

Machine representations are projections too.

A model takes an object too complicated to handle directly — a paragraph, an image, a user history — and converts it into a smaller structure that preserves distinctions useful for some task.

Compression makes computation possible.

Compression also destroys information.

The important question is what survives.

Suppose a document embedding reduces a thousand-word contract to a vector with a few thousand floating-point values.

That vector may be excellent for retrieving the contract when somebody asks about termination clauses.

It may be terrible for reconstructing the exact wording of Section 7.3.

That is fine if retrieval is the task.

It is disastrous if somebody treats the vector as a lossless copy.

This is why representation should always be judged relative to use.

There is no universally best vector of a thing.

There is only a representation that preserves some relationships better than others.

This becomes clearer when we add vectors together.

Return to the city grid.

Walk three blocks east and four north.

Then walk two blocks west and one north.

Your second movement can be represented as `[-2, 1]`.

Add the vectors:

`[3, 4] + [-2, 1] = [1, 5]`

You end one block east and five north of where you started.

Vector addition combines changes.

This is why vectors fit so naturally into systems that model movement, forces and optimization.

They let many influences accumulate into one resulting direction.

Modern machine learning repeatedly uses this basic idea in more sophisticated forms.

A model state is changed by layers of computation.

A recommendation score can combine several latent preferences.

An optimization algorithm moves parameters in directions that reduce error.

A retrieval system converts a question into a vector and searches for nearby stored vectors.

An agent can combine signals about goals, constraints and context before selecting an action.

Different mathematics appears in each case, but the conceptual pattern is the same.

Represent the state.

Represent the change.

Move.

This is one reason the language of direction has become so pervasive in AI.

We talk about gradients pointing toward lower loss.

We talk about embeddings placing concepts near one another.

We talk about steering model behavior.

We talk about alignment.

We talk about optimization trajectories.

These are not accidental metaphors.

They are consequences of building systems out of spaces and movement through spaces.

But there is an important difference between physical and representational spaces.

North does not care what you believe.

A learned direction does.

If a model is retrained on different data, its internal geometry can rotate, stretch, split or collapse while the external words we use remain unchanged.

The direction associated with a concept is not necessarily stable across models.

Even inside one model, an internal representation may depend on context.

“Bank” in a sentence about rivers and “bank” in a sentence about loans should not occupy identical semantic neighborhoods.

Meaning moves with context.

This is why static word vectors, while historically transformative, were only one stage in the story.

Early systems often assigned one learned vector to each word type.

Modern language models generate contextual representations that depend on the surrounding sequence.

The same visible token can occupy different positions in representation space depending on how it is being used.

The arrow learned not just meaning.

It learned circumstance.

That transition will matter later when we reach attention and large language models.

For now, it reveals something fundamental about vectors.

They are not labels attached to objects.

They are coordinates inside a model of relationships.

Change the model and the coordinates can change.

This also explains why comparing vectors across unrelated models is often meaningless without alignment.

Two maps can both represent the same city while using different coordinate origins and orientations.

One could measure from a city center.

Another from a survey marker.

One could rotate the axes.

The locations would be represented by different numbers even though the underlying geography had not changed.

This is not an error.

Coordinates depend on basis.

That phrase — basis — will be the subject of the next chapter.

It is one of the most liberating ideas in linear algebra because it separates the object from the coordinate system used to describe it.

For now, remember the practical version.

**The numbers are not the thing.**

A vector can change coordinates while preserving the relationship that matters.

A representation can be rotated and still encode the same geometry.

A model can have dimensions no human can name and still support useful comparisons.

A similarity score can be numerically precise while resting on choices that deserve scrutiny.

A direction can describe where a system is going without telling us whether that destination is good.

This is what makes a vector more than a number.

It carries possibility.

It can tell us not only how much there is, but how things differ, how they combine, what lies nearby and which way the system is moving.

And once machines can represent more of the world this way, an old mathematical question becomes a modern political one.

Who chooses the coordinates?
