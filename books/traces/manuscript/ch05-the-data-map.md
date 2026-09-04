# The Data Map

A training dataset looks still until a model starts moving through it.

Before training, the rows sit quietly beside one another. A sentence pair with one label. An image with another. A question and its answer. A product review. A radiograph. A line of code. Each example occupies one place in a file or one record in a database. The collection can be counted, shuffled, filtered, deduplicated, licensed, sampled, and described.

This encourages a natural picture of data as inventory.

How many examples do we have?

Which domains do they cover?

What percentage carry each label?

How old are they?

Where did they come from?

Those questions matter. They are the equivalent of a map that marks roads, rivers, towns, and borders before anybody travels through them.

Then training begins.

The examples stop being merely records and become events in the life of a learner.

Some are recognized almost immediately. Some remain difficult for thousands of updates. Some move from wrong to right and stay there. Some oscillate. Some are learned and later forgotten. Some pull the model toward a shortcut that works beautifully inside the training set and fails outside it. Some look like mistakes because the label is wrong. Others look like mistakes because the example sits near a genuine boundary in the task.

The dataset has acquired another geography.

Not where the examples came from.

How the learner experiences them.

This is the central move behind a line of work known as dataset cartography.

In 2020, Swabha Swayamdipta and colleagues proposed building what they called data maps from training dynamics. Instead of judging an example only from its content or label, they watched how a model’s confidence in the assigned label changed across training epochs. Two simple quantities did much of the work: average confidence and variability.

An example the model quickly learns and remains confident about occupies one region of the map.

An example the model remains persistently uncertain or wrong about occupies another.

An example whose confidence swings across training occupies a third.

The paper gave the regions memorable names: easy to learn, hard to learn, and ambiguous.

The names are useful.

They are also dangerous if we forget what is doing the naming.

The model is.

An example is not born easy.

It is easy for a particular learner under a particular training procedure, objective, representation, data mixture, and moment in technological history.

Change the model and the map can change.

Change the task and it can change more dramatically.

A sentence that is trivial for a large language model may be opaque to a bag-of-words classifier. An image that a convolutional network learns instantly may trouble a different architecture. A medical record can be easy for predicting one outcome and nearly useless for another. A data point can be redundant in a large dataset and crucial in a small one.

The map is relational.

That is why it belongs in this book.

A static dataset description tells us what was available to learn from.

A data map tells us something about what happened when learning met the available data.

The distinction sounds subtle until you imagine two datasets with identical rows.

Train two models.

One quickly masters the majority of examples and struggles at a narrow boundary. The other latches onto a spurious shortcut and confidently gets a broad class of examples “right” for the wrong reason. On disk, the datasets are identical. In developmental terms, the training environments are different.

The traces are different.

This is an important correction to the phrase “data quality.”

Quality is often spoken about as though it were an intrinsic score attached to a record.

Clean data good.

Noisy data bad.

Correct labels good.

Ambiguity bad.

The real relationship is more complicated.

A duplicated example may add little new information after the first hundred near-copies, but it can still shape optimization by repeatedly pushing in the same direction. A difficult example may be mislabeled, or it may represent exactly the kind of boundary case the model needs to see. An ambiguous example can make training harder while improving performance on cases that differ from the easiest training distribution.

The 2020 data-cartography experiments found a particularly interesting pattern. Examples in the ambiguous region—those whose assigned-label confidence varied substantially during training—were especially useful for out-of-distribution generalization in the settings the researchers studied. Hard-to-learn examples, by contrast, often included labeling problems.

That does not give us a universal recipe to delete the hard examples and keep the ambiguous ones.

It gives us a diagnostic question.

Why is the learner having this relationship with this example?

A data map is not a grading sheet for the dataset.

It is a triage instrument.

This is how the historical view changes the research workflow.

Suppose a model performs poorly on a subset of customers, dialects, clinical cases, or geographic regions. The usual investigation starts from the final errors. Which examples did the model miss? Are those groups underrepresented? Does the training set contain mislabeled records? Are there obvious distribution shifts?

Training dynamics add another dimension.

When did the model begin to struggle with those examples?

Were they never learned?

Were they learned early and later displaced?

Did confidence become unstable only after some other class of examples entered training?

Do the same examples behave differently across random seeds?

Does a stronger model move them from hard to ambiguous?

Does a different data curriculum change their trajectories?

The endpoint tells us where the model ended.

The map tells us something about the route.

This route can matter even when the final accuracy is the same.

Imagine two classifiers that each reach ninety percent accuracy.

The first is boring during training. Most examples become correct and stay correct. The remaining ten percent are a stable mixture of genuinely difficult cases and annotation mistakes.

The second reaches the same final score through churn. Some examples are learned, forgotten, relearned, and forgotten again. The identity of the errors changes throughout training.

The dashboard shows ninety percent for both.

The developmental diagnosis is different.

One system looks limited.

The other looks unstable.

This distinction is familiar in medicine.

Two patients can arrive at the same blood pressure reading through different histories. One has been stable for years. Another has swung wildly through the week. The snapshot is identical. The risk may not be.

Machine learning has spent years getting better at snapshots.

Training dynamics make the time series available.

One of the earliest and clearest examples came from work on what researchers called forgetting events. Mariya Toneva and colleagues tracked whether individual examples moved from correctly classified to incorrectly classified during training. Some examples were learned and essentially never forgotten. Others crossed the boundary repeatedly.

That is a small idea with a large implication.

The learner has a memory history for each example.

Not human memory.

Not a little file in the weights marked with an example identifier.

A measurable history of whether the current model state can handle the case.

Toneva and colleagues found that many examples were consistently unforgettable across different architectures in the benchmarks they examined. They also showed that substantial sets of these examples could sometimes be removed without destroying strong generalization performance.

Again, the lesson is not that unforgettable examples are worthless.

They may be doing exactly what easy examples often do: establishing the broad surface of the task so efficiently that their individual importance becomes hard to see once enough similar examples exist.

The lesson is that a dataset has structure revealed by training behavior.

Some records keep demanding attention.

Others become settled territory.

This gives us a new way to think about data curation.

Traditional curation asks what should go into the dataset before training.

Historical curation can ask what the learner’s own trajectory says after contact with the data.

The first pass may be human.

Remove obvious duplicates.

Correct labels.

Document sources.

Balance known categories.

The second pass can be developmental.

Which examples were never learned?

Which were repeatedly forgotten?

Which remained unstable?

Which became trivially easy?

Which changed character when the model architecture changed?

Which groups of examples moved together?

A third pass can be causal.

If we remove, upweight, or replace a region of the map, what happens to behavior elsewhere?

This is where the map stops being a picture and becomes an experiment.

The idea can be pushed too far.

A model is not an oracle about data quality.

If a model finds an example difficult, the example may be difficult because the model is weak.

If the model confidently learns a spurious correlation, an “easy” region can be dangerous rather than reassuring.

If a benchmark rewards a shortcut, the map can faithfully report the learner’s success while the task itself remains poorly specified.

A data map therefore inherits the blind spots of the model and objective used to draw it.

This is not a defect peculiar to dataset cartography.

It is a general rule for traces.

Every trace is produced by a measurement system.

A loss curve depends on the loss.

An influence score depends on a definition of influence.

A feature map depends on the representation and analysis method.

A behavioral evaluation depends on the prompts and metric.

The discipline is not to find a view from nowhere.

It is to know what kind of view you have.

The data map makes this discipline unusually visible because its categories sound so much like judgments.

Easy.

Hard.

Ambiguous.

They sound like properties of the world.

They are properties of an encounter.

This becomes more important as datasets grow less cleanly bounded.

A frontier language model may train on enormous mixtures of text, code, images, audio, synthetic data, licensed collections, public web material, curated demonstrations, preference comparisons, and generated exercises. The neat supervised example with one gold label is only one species in the ecosystem.

The original data-map method does not simply scale unchanged into that world.

There may be no single “true class” whose confidence can be plotted across epochs. Training may use next-token prediction, preference objectives, reinforcement signals, masked reconstruction, contrastive losses, or mixtures of objectives. Individual records may be sampled rarely. The same document can produce many training sequences. Data can be streamed rather than revisited in tidy epochs.

The historical instinct still survives.

Track the learner’s relationship to the data over time.

For language models, that relationship may be measured through per-example loss, token-level loss, gradient alignment, memorization probes, influence approximations, capability slices, or changes in representation. The coordinates change. The map does not disappear.

In fact, the less interpretable the dataset becomes by inspection, the more useful training traces may be.

No human can read billions of training examples and form a meaningful picture of how they matter to a model.

The learner has already interacted with them.

Its trajectory is a compressed record of that interaction.

Compressed is the key word.

The trace does not preserve everything.

If we record confidence once per epoch, we miss what happened between measurements. If the model sees an example only once, traditional forgetting counts may be impossible. If the optimizer’s response to one example is immediately altered by thousands of others, attribution becomes distributed. If the dataset changes during training, the map combines changing terrain with a changing traveler.

This is why the metaphor of cartography should not be taken literally.

A geographic map describes land that exists whether or not a traveler walks through it.

A training map is partly created by the traveler.

The model’s path changes the model, which changes how later examples are experienced.

The next encounter begins from a different state.

The terrain and the traveler are entangled.

This is gradient descent’s historical character in miniature.

An example at step ten is not the same event as the identical example at step ten million.

The input bytes may match.

The learner does not.

That is why order can matter.

Curriculum learning exploits this intentionally by arranging examples so that some abilities are acquired before others. Data loaders introduce randomness that changes encounter order even without a designed curriculum. Batch composition changes which gradients are averaged together. Learning-rate schedules change how strongly the model can move in response. The same example can leave a larger or smaller mark depending on when it arrives.

Static data governance rarely captures this temporal dimension.

A dataset manifest can tell us that a record was present.

It cannot tell us whether the model encountered it during a volatile phase, after the relevant capability was already stable, or at a point where the optimizer barely moved.

Presence is not influence.

The map helps separate them.

This has consequences for debates about data value.

People often speak of data as if each record contributes a small interchangeable unit of fuel.

More records, more learning.

But the marginal value of an example depends on what else is present and what the learner already knows.

Ghorbani and Zou’s Data Shapley work formalized one version of this idea. Instead of assigning a universal value to a datum, their framework values it relative to a learning algorithm, a performance metric, and the other data in the training set.

That is the same relational lesson from another direction.

A datum has no single machine-learning value independent of the question being asked.

A rare example can be priceless for one behavior and irrelevant for another.

A common example can be redundant after the model has seen enough similar cases.

A mislabeled example can be harmful under one objective and accidentally useful as regularization under another.

A hard example can signal an error in annotation or an error in the model’s worldview.

The historical model of data therefore resists a tempting simplification.

Do not ask which data is good.

Ask good for what learner, at what stage, for what behavior, under what objective, compared with what alternative data.

The question is messier.

It is also closer to engineering reality.

The practical future of data maps may not be one elegant two-dimensional scatterplot.

It may be a set of dashboards that show data strata through time.

One view for examples repeatedly forgotten.

One for examples with high gradient influence on a safety behavior.

One for records associated with a sudden representation change.

One for memorized sequences.

One for examples whose loss remains high across model generations.

One for regions that change character after fine-tuning.

The result would look less like a static atlas and more like weather.

Fronts moving.

Pressure changing.

Stable regions becoming unstable.

Rare events suddenly mattering because the surrounding system changed.

This is a better metaphor for learning anyway.

The training set is not a warehouse.

It is an environment.

The model passes through it and becomes different.

The environment leaves evidence in the path.

Once that evidence is recorded, the dataset can be studied in a way its original creators could not.

Not only by what the examples say.

By what the learner did when it met them.

The next question is unavoidable.

If the map has regions, what do those regions mean?

The easy examples look safe.

The hard examples look suspicious.

The ambiguous examples look inconvenient.

That first impression is often wrong.

The categories are not a ranking from good to bad.

They are different roles in the learning process.

And some of the most valuable data lives where the model cannot make up its mind.