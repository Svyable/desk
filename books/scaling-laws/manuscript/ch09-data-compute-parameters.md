# Chapter 9 — Data, Compute, Parameters

Three dials sit on the control panel of modern machine learning.

Data.

Compute.

Parameters.

Turn any one of them up and, for a while, the system often improves.

That observation has produced one of the most seductive simplifications in artificial intelligence: bigger is better.

But bigger *what*?

A model can have more parameters and too little data. It can have more data and too little compute to learn from it. It can have abundant compute and spend it badly. It can be trained near a compute-efficient frontier and still be ruinously expensive to serve. It can have trillions of tokens available in principle and far fewer that are legally usable, high quality, relevant, deduplicated or worth another pass through the optimizer.

The three dials are not independent.

They form a coupled system.

**Scaling is allocation under moving constraints.**

That is the deeper lesson behind the modern scaling-law literature. The important question is not whether more resources help. The important question is how much of each resource should be combined, which resource is currently binding, and how the answer changes when the regime changes.

Once this becomes visible, AI scaling stops looking like a race to build a larger object.

It starts looking like the design of an industrial metabolism.

## The three-resource machine

Let us begin with deliberately simple symbols.

Call the number of model parameters `N`.

Call the amount of training data `D`.

Call the training compute budget `C`.

In some standard dense-transformer training settings, compute can be approximated as proportional to the product of model size and the number of tokens processed. A commonly used rough form is:

`C ≈ kND`

where `k` collects assumptions about the architecture and the operations counted.

The precise constant is not the point.

The important part is the multiplication.

If you double model size while holding the number of training tokens constant, you have changed both the capacity of the model and the compute required to train it. If you double the data processed while holding the model fixed, compute rises again. If compute is fixed, spending more on one resource usually means spending less on another.

A compute budget is therefore not merely a pile of arithmetic.

It is an allocation constraint.

And a scaling law that predicts performance as a function of data, parameters and compute can become an allocation rule.

That is why arguments about scaling laws quickly become arguments about strategy.

## A parameter is not a unit of intelligence

Parameter count is easy to print in a press release.

That does not make it a sufficient description of a model.

Parameters are adjustable quantities inside a learned function. More parameters can provide greater representational capacity, more room to store useful statistical structure, and more flexibility in fitting complicated relationships.

But a parameter is not a fact.

It is not a neuron in a brain.

It is not a standardized unit of capability.

And it is certainly not a unit of intelligence.

Two models with the same parameter count can differ in architecture, training data, tokenizer, objective, optimization, context handling, sparsity, routing, precision, post-training and inference strategy.

Even the phrase *parameter count* needs care. In sparsely activated systems, total parameters and active parameters may describe very different computational burdens. In compressed or quantized systems, stored parameters and arithmetic cost may move differently again.

The number is real.

Its interpretation depends on the machine around it.

This is a recurring rule of scaling:

**A quantity becomes useful only after you specify the system that gives the quantity meaning.**

## Data is not fuel

Data is often called the fuel of artificial intelligence.

The metaphor is useful until it becomes misleading.

Fuel is consumed.

Data can be reused.

Fuel is usually interchangeable within a grade.

Data is not.

A trillion tokens of duplicated boilerplate are not equivalent to a trillion tokens of carefully selected technical writing. A million examples drawn from one narrow distribution are not interchangeable with a million examples spanning the environments in which the system will later operate.

Data has composition.

It has provenance.

It has redundancy.

It has timing.

It has legal and contractual boundaries.

It has language, domain, quality and coverage.

It contains both signal and history.

So when a scaling law uses `D`, the symbol hides enormous heterogeneity.

That does not make the law useless.

It means that `D` is an engineering abstraction, not an ontology.

The same token can have different marginal value depending on what the model has already seen.

The same document can be useful in one training objective and nearly irrelevant in another.

The same dataset can become less valuable when repeated too many times.

A data point has no fixed price in learning.

Its value is conditional on the state of the learner.

## Compute is not one thing either

Compute sounds cleaner.

Count operations. Add them up. Compare budgets.

But the physical system underneath the number matters.

Compute arrives through chips, memory, interconnects, storage, networking, power delivery, cooling, software, scheduling and time.

Two training runs with similar nominal arithmetic can differ substantially in utilization, communication overhead, memory pressure, fault tolerance and wall-clock duration.

A cluster that cannot keep accelerators fed with data has theoretical compute and lower realized throughput.

A larger model that spends more time communicating between devices can encounter a scaling regime in which interconnect matters more than arithmetic.

A training run that lasts long enough for hardware failures to become routine needs operational machinery that a small experiment does not.

At low scale, compute is a number.

At high scale, compute becomes an infrastructure stack.

This is another transfer of importance.

The variable that looked fundamental at one scale becomes dependent on hidden variables at another.

## Kaplan's frontier

In 2020, Jared Kaplan and colleagues documented empirical power-law relationships between language-model loss and several resources, including model size, dataset size and training compute.

One striking conclusion from that experimental regime was that larger models could be more sample-efficient and that compute-efficient training favored allocating a great deal of capacity to model size while stopping training before full convergence.

The broader lesson was more important than any one prescription.

Performance could be treated as a surface over resource choices.

For a fixed compute budget, some combinations of model size and data were better than others.

That means the scaling problem has a frontier.

On one side of the frontier, resources are being allocated inefficiently.

Near the frontier, a given budget buys more performance.

This transforms scale from a descriptive question into an optimization problem.

Not:

How big should the model be?

But:

**Given the resources we possess, where should the next unit go?**

That is a much more powerful question.

It is also a much more dangerous one if the fitted frontier is mistaken for a permanent law.

## The Chinchilla correction

Two years later, the Chinchilla work led by Jordan Hoffmann revisited compute-optimal allocation.

Their experiments supported a substantially different balance: within their studied regime, compute-optimal training called for scaling model size and training tokens together much more aggressively than many frontier models had been doing.

A smaller model trained on more data could outperform a much larger model trained on too little data for the same broad compute budget.

This was not a repudiation of scaling.

It was scaling becoming more precise.

The lesson was not that parameters had stopped mattering.

The lesson was that **a resource can be abundant in absolute terms and scarce relative to another resource.**

A 280-billion-parameter model can be data-starved.

A vast dataset can be compute-starved.

A compute cluster can be model-starved if the architecture cannot use its arithmetic efficiently.

Scale has proportions.

The ratio matters.

## When the optimum moves

There is a temptation to turn every new scaling result into a commandment.

Do this many tokens per parameter.

Use this allocation rule.

Train for this long.

That temptation should be resisted.

Compute-optimal prescriptions are fitted inside experimental regimes. They depend on definitions of parameters and compute, model families, tokenization, optimization, data distributions, learning-rate schedules and the range of scales studied.

Later work has shown that disagreements between influential scaling-law fits can narrow when differences in experimental conventions and optimization are accounted for.

That is not a minor technical footnote.

It reveals the central theme of this book.

**The frontier itself has a regime.**

A resource-allocation law can be highly useful without being universal.

The correct response is not cynicism.

It is instrumentation.

Measure the frontier you are actually on.

## The binding constraint decides the strategy

Suppose compute is scarce but clean data is abundant.

The problem is compute allocation.

Suppose accelerators are abundant but high-quality domain data is scarce.

The problem becomes data efficiency.

Suppose both are abundant but the model is too expensive to serve at useful latency.

The constraint has moved to inference.

Suppose training data exists but cannot legally be used.

The bottleneck is no longer statistical.

It is institutional.

This is one of the deepest consequences of scaling.

**The scarce resource does not merely limit the system. It shapes the organization built around the system.**

Compute scarcity creates scheduling, cluster management, hardware procurement and capital allocation problems.

Data scarcity creates acquisition, licensing, collection, filtering, provenance and synthetic-data problems.

Serving scarcity creates distillation, quantization, caching, routing and hardware-efficiency problems.

Evaluation scarcity creates benchmark, measurement and feedback problems.

Power scarcity creates siting and infrastructure problems.

The bottleneck recruits an institution.

At sufficient scale, engineering architecture and organizational architecture begin to mirror each other.

## When data becomes the wall

What happens if compute continues to grow faster than the supply of useful unique training data?

Then a new regime appears.

Research on data-constrained language-model training has examined exactly this problem. One finding is that modest repetition of training data can sometimes preserve much of the value of fresh data within a studied regime, while repeated passes eventually suffer diminishing returns.

The exact threshold should not be universalized.

The structural lesson is enough.

A token seen for the first time and the same token seen for the twentieth time are not generally equivalent learning resources.

This means that *tokens processed* and *unique information available* are different quantities.

The distinction becomes invisible when data is abundant.

It becomes decisive when data is scarce.

Scaling exposes variables that small-scale abundance allowed us to ignore.

## Repetition is a different axis

Imagine two training runs that each process one trillion tokens.

One sees one trillion unique tokens once.

The other sees one hundred billion tokens ten times.

The arithmetic count may be identical.

The learning opportunity is not necessarily identical.

This is why resource accounting becomes more sophisticated as systems scale.

We begin with raw tokens.

Then unique tokens matter.

Then quality matters.

Then diversity matters.

Then ordering, curriculum and domain mixture matter.

Then legal availability and freshness matter.

The simple scalar fractures into a vector of constraints.

That fracture is not failure.

It is understanding.

## Quality changes the effective scale

Suppose one dataset contains enormous duplication, spam and irrelevant text.

Suppose another is smaller but cleaner and better aligned with the intended task distribution.

Calling the first dataset “larger” is numerically correct and strategically incomplete.

The relevant question is how much useful learning signal each unit of training produces.

This suggests a broader principle:

**Effective scale is not always physical scale.**

Better data selection can make a fixed token budget behave like a larger useful budget.

Better optimization can make a fixed compute budget travel farther.

Better architecture can make a fixed parameter budget express more useful computation.

Compression can reduce the deployment cost of a trained capability.

Retrieval can move some memory outside the parameters.

Tools can move some capability outside the model entirely.

Every efficiency improvement changes the exchange rates among resources.

And when the exchange rates change, the compute-optimal frontier can move again.

## Parameters are also a deployment choice

Training discussions often treat parameter count as if its only role were during optimization.

But the model survives training.

It must be loaded, moved, stored and executed.

A parameter therefore participates in at least two economic systems.

First, training.

Second, inference.

A model size that is attractive under a training-compute objective may be unattractive under a serving-cost objective.

A smaller model trained on more data may not only train efficiently; it may also be cheaper to deploy repeatedly.

Conversely, an architecture with more total parameters but sparse activation may produce a different relationship between stored capacity and per-token computation.

This creates an important distinction:

**Training-optimal is not deployment-optimal.**

The cheapest way to create a capability may not be the cheapest way to use it a billion times.

At scale, the second cost can dominate the first.

## The hidden fourth variable: time

Data, compute and parameters are the obvious three.

Time lurks behind all of them.

A training run that takes six months may be strategically worse than a slightly less efficient run that takes six weeks.

A model that arrives after the market, scientific opportunity or deployment window has moved may have excellent loss and poor value.

Hardware generations change.

Data changes.

Competitors change.

Algorithms improve while the run is still underway.

The frontier is moving while you approach it.

This means wall-clock time has option value.

Fast experiments reveal information sooner.

Faster iteration can outperform theoretically efficient allocation because each completed run improves the next decision.

The scaling system is not static optimization.

It is sequential decision-making under technological change.

## Scaling turns into a supply chain

At small scale, an AI experiment can feel like software.

At large scale, it starts to resemble heavy industry.

Compute requires accelerators.

Accelerators require fabs, packaging, memory and networking.

Clusters require buildings, power and cooling.

Training requires data pipelines, storage and high-bandwidth movement.

Deployment requires inference capacity in the places demand appears.

The software stack sits on top of a physical stack.

This is where the political economy of scaling enters.

The three resources are backed by institutions.

Data is backed by people, publishers, platforms, sensors, licenses and legal regimes.

Compute is backed by capital, semiconductors, electricity, land and infrastructure.

Parameters are backed by architectures, researchers, software and the ability to train and serve them.

Scaling laws can therefore redirect investment far beyond machine-learning teams.

A curve on a graph can become a procurement plan.

A procurement plan can become a data-center buildout.

A data-center buildout can become an energy decision.

A resource-allocation equation can propagate into physical geography.

The exponent has a supply chain.

## The bottleneck migrates

The history of scaling is full of bottleneck migration.

When arithmetic is scarce, optimize arithmetic.

When memory bandwidth becomes limiting, optimize memory movement.

When data quality becomes limiting, curate data.

When model size makes serving expensive, compress or route.

When training runs become operationally fragile, invest in reliability.

When evaluation lags capability, build better measurement.

The solution to one bottleneck reveals the next.

That is why the phrase “the limit” is usually misleading.

There is rarely one limit.

There is a sequence of constraints whose order changes with scale.

**A scaling frontier is a moving border between the resource you have and the resource you have not yet learned to supply.**

## Substitution changes the game

The three resources can partially substitute for one another.

More data can reduce the need for excess parameters in some regimes.

More parameters can increase sample efficiency in others.

More compute can search a larger optimization space.

Better algorithms can reduce the compute required for a target performance.

Retrieval can substitute external memory for some parameterized memory.

Longer inference can sometimes substitute test-time computation for training-time capability.

Synthetic data may substitute for some forms of scarce collected data, while introducing its own questions about quality, diversity and error reinforcement.

Sparsity can separate total capacity from active computation.

The important point is not that every substitution works equally well.

It is that the resource system has exchange rates.

Research changes those exchange rates.

A major algorithmic advance is economically powerful because it can make one scarce input less scarce in effective terms.

## Efficiency is a scaling event

Efficiency is sometimes framed as the opposite of scaling.

Use less.

Build smaller.

Reduce waste.

But efficiency and scaling often reinforce each other.

If a training algorithm halves the compute needed to reach a target loss, the same budget can train more experiments, a larger model, more tokens, or a more diverse portfolio of models.

If inference becomes cheaper, demand can expand.

If hardware becomes more efficient, total deployment can grow.

Efficiency changes where the frontier lies.

It does not necessarily reduce aggregate resource use.

This tension will return later in the book when we examine rebound effects.

For now the key is simpler:

**Efficiency changes the exchange rate between scale and cost.**

That makes efficiency itself a scaling variable.

## The portfolio beats the monument

The heroic image of AI scaling is one enormous training run.

But a functioning research program is a portfolio.

Small experiments estimate slopes.

Medium experiments test architectural changes.

Ablations identify which ingredients matter.

Evaluation runs measure generalization.

Data experiments estimate marginal token value.

Systems work improves utilization.

Only then does the largest run consume the accumulated knowledge.

This is another reason the raw training compute of the final model can be a poor description of the true project.

The frontier run rests on a research stack.

A civilization that can afford one giant computation but cannot iterate, measure, debug or learn from smaller ones may possess resources without possessing an effective scaling process.

Scaling capability is organizational.

## The strategy is to know what is scarce next

The most sophisticated scaling strategy is not “make everything bigger.”

It is to anticipate the next binding constraint.

If data will become scarce, improve data efficiency before scarcity becomes acute.

If inference will dominate economics, design for serving before the model is frozen.

If power delivery will delay clusters, treat energy infrastructure as part of the compute roadmap.

If evaluation will become the weak link, invest in measurement before benchmark saturation turns progress opaque.

If model size grows faster than interpretability, build observability before failure modes become too distributed to understand.

This is the difference between scaling reactively and scaling deliberately.

Growth notices a bottleneck after hitting it.

Scaling tries to predict which bottleneck will inherit control.

## Three dials, many institutions

Data, compute and parameters look like technical variables.

At sufficient scale, each becomes a social system.

Data becomes a question of ownership, permission, collection and representation.

Compute becomes a question of capital, supply chains, energy and geography.

Parameters become a question of architecture, intellectual labor, deployment and control.

The machine-learning frontier therefore does not sit outside society.

It is assembled from society.

This is why scaling laws can have consequences far beyond predictive accuracy.

A recommendation about resource allocation can influence what gets built, what gets licensed, where electricity is consumed, which firms can compete, which datasets become strategic and which research questions receive attention.

The curve does not make those decisions by itself.

People do.

But once a curve becomes trusted, it can organize people around a particular future.

Moore's Law taught us that a forecast can become coordination infrastructure.

AI scaling adds a second lesson:

**A scaling law can become a budget.**

And budgets create worlds.

## The next curve

So far we have treated performance abstractly.

Better.

Worse.

More capable.

Less capable.

But the scaling-law literature usually needs a measurable quantity to put on the vertical axis.

For language models, one of the most important is loss.

Loss is where the messy behavior of a learning system becomes a number that can be plotted against data, parameters and compute.

And when that number falls smoothly on a log-log plot, it can create the impression that progress itself has become predictable.

That impression is powerful.

It is also incomplete.

Because a smooth curve in loss can coexist with messy, discontinuous and highly uneven changes in what a model can actually do.

The next chapter goes directly into that tension.

**Data, compute and parameters tell us what we spend. Loss tells us what the training process appears to buy.**

The question is what that number really means.