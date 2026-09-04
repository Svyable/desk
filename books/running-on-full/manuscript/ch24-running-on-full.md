# Running On Full

The easiest way to waste AI compute is to believe the GPU is the product.

It is not.

The GPU is one expensive participant in a larger system whose job is to produce a useful result.

That result may be a model checkpoint.

A response to a user.

A prediction.

A generated image.

A completed agent workflow.

A research decision.

A business process that used to require a person and now requires a machine.

Whatever the result is, the hardware matters because it helps produce it.

Not because it is busy.

This book began with an empty accelerator.

Not physically empty.

Operationally empty.

A device can report activity while the system wastes capacity on memory stalls, redundant work, oversized models, unnecessary context, bad batching, idle gaps, network waits, cache misses, fragmentation, poor placement, retries, failures, and work the product did not need.

That is the central mistake to avoid.

Do not confuse motion with progress.

AI infrastructure is becoming too expensive and too consequential for that confusion to survive.

The right objective is useful work completed under the constraints that matter.

Quality.

Latency.

Reliability.

Cost.

Sometimes power.

Sometimes deadlines.

Sometimes scarce human attention.

Sometimes a physical facility limit.

The constraint changes.

The principle does not.

A system is running on full when its scarce resources are assigned to the highest-value feasible work with little avoidable loss and enough headroom to preserve the service objective.

That definition intentionally does not say one hundred percent utilization.

One hundred percent can be terrible.

A serving fleet at one hundred percent with a growing queue is overloaded.

A rack at one hundred percent electrical capacity has no room for a burst.

A cache at one hundred percent occupancy must evict something before admitting anything else.

A scheduler at one hundred percent packing may have no flexibility to place an urgent job.

A team at one hundred percent planned utilization has no ability to respond to an incident.

Full is not the absence of slack.

Full is the absence of unjustified waste.

Those are different conditions.

Slack can be productive.

A spare replica can protect availability.

A checkpoint can protect days of training.

A prefetch buffer can protect a GPU from storage jitter.

Extra memory can protect cache hit rate.

Power headroom can protect against synchronized peaks.

An idle accelerator can protect latency if it is the reserve that absorbs the next burst.

The question is whether the slack earns its place.

That is the operating discipline.

Every resource should have a reason.

Every bottleneck should have a name.

Every optimization should have a product objective.

Every layer of complexity should pay rent.

Every claim of savings should explain what happens to the freed capacity.

Every claim of speed should explain what it costs.

Every claim of utilization should explain what useful work survived.

This sounds like management language.

It is systems language.

A system is only comprehensible when the boundary is correct.

The wrong boundary makes local metrics look good while the whole performs badly.

Chapter 1 made that point with the accelerator.

Chapter 13 made it with data.

Chapter 11 made it with the network.

Chapter 15 made it with power.

Chapter 21 made it with reliability.

The same error kept returning in different clothes.

One team optimized its box.

The waiting moved to the arrow.

The cure is to measure the path.

Where does useful work begin?

Where does it finish?

What happens in between?

Where does time accumulate?

Where does memory accumulate?

Where does uncertainty accumulate?

Where does work get repeated?

Where does capacity become stranded?

Where does a product requirement force an expensive operating point?

Those questions lead to the real bottleneck.

The first practical habit is therefore end-to-end tracing.

Not necessarily one giant observability platform.

A mental model first.

A request arrives.

A job is submitted.

A dataset is read.

A batch is formed.

A model is loaded.

A prefix is processed.

A token is decoded.

A network collective runs.

A checkpoint is written.

A result is evaluated.

A user sees the answer.

What did each stage wait for?

Once that is visible, the optimization order becomes much clearer.

Fix the largest avoidable wait on the critical path.

Then measure again.

Do not start from whatever optimization is fashionable.

Start from the system's current constraint.

This is why no chapter in this book is a universal prescription.

Batching helps until waiting for the batch hurts more than the batch helps.

Long context helps until irrelevant context costs more than it contributes.

Caching helps until memory pressure and invalidation overwhelm reuse.

Smaller models help until quality falls below the requirement.

Quantization helps until the quality or kernel trade no longer works.

Parallelism helps until communication and bubbles consume the gain.

Speculation helps until wrong guesses or saturation make the extra work expensive.

Power caps help until slower jobs consume more of another scarce resource.

Spot capacity helps until interruption costs exceed the discount.

Replication helps until spare capacity is more expensive than the failures it prevents.

Every optimization has a regime.

Professional infrastructure work is the practice of identifying the regime.

This is a useful correction to the culture of AI performance, which often speaks in multipliers.

Two times faster.

Four times more throughput.

Half the memory.

Thirty percent cheaper.

Those numbers can be real.

The missing sentence is always:

Under what conditions?

The conditions are not footnotes.

They are the result.

A benchmark is a description of a particular system under a particular workload.

Production is a distribution.

The distribution contains long requests, short requests, cold caches, warm caches, retries, failures, peaks, idle periods, new model versions, old hardware, new hardware, slow storage, overloaded networks, unexpected users, and nights when nothing behaves like the benchmark.

Running on full means performing well across the distribution that actually matters.

This is why tail behavior deserves so much attention.

Average efficiency is easy to improve while the user experience gets worse.

Pack the fleet harder.

Increase batch size.

Reduce headroom.

Run closer to power limits.

The mean gets prettier.

The tail becomes fragile.

A mature system chooses the tail it wants to protect.

That choice is a service-level objective.

Without one, infrastructure teams are asked to optimize contradictory goals forever.

Maximum throughput.

Minimum latency.

Minimum cost.

Maximum reliability.

Maximum flexibility.

Maximum utilization.

All at once.

Physics does not negotiate that way.

A product needs to state which trade matters.

The second practical habit is therefore product-defined constraints.

Do not ask the serving team for the cheapest system in the abstract.

Ask for the cheapest system that produces the required quality at the required latency and reliability.

Do not ask the training team for maximum utilization.

Ask for the shortest or cheapest path to a valid model result, depending on which matters.

Do not ask the scheduler to maximize packing.

Ask it to meet queueing objectives while keeping scarce resources productively occupied.

Objectives create sensible engineering.

Metrics without objectives create games.

The third habit is to treat memory as a scheduling resource, not merely a capacity specification.

Memory determines which requests coexist.

Which models fit.

How long context can remain resident.

Whether prefixes can be cached.

Whether a job can be partitioned.

Whether a new request can be admitted without evicting useful state.

Many AI workloads move through a cycle where arithmetic becomes faster and memory becomes more important.

That is not an accident.

As compute improves, data movement becomes relatively more visible.

A better chip can expose a worse memory system.

The same happens with data pipelines.

A faster accelerator exposes a slower loader.

Optimization moves the bottleneck.

Expect that.

Do not be disappointed when solving one problem reveals the next.

That is what progress looks like in a coupled system.

The fourth habit is to ask whether work can be avoided before asking whether it can be accelerated.

This may be the highest-leverage question in the book.

Do we need the largest model?

Do we need all of this context?

Do we need to compute this prefix again?

Do we need to decode this many tokens?

Do we need to retrieve twenty documents?

Do we need to run this failed experiment to completion?

Do we need to verify every low-risk request?

Do we need to process this asset at full fidelity?

Do we need to keep this speculative branch after another branch has already won?

Avoided work is unusually powerful because it saves every downstream resource.

No GPU arithmetic.

No memory traffic.

No network traffic.

No power.

No queue occupancy.

No failure exposure.

The best kernel is sometimes no kernel.

The best batch is sometimes no request.

The best model call is sometimes a cache hit.

The best context is sometimes a summary.

The best accelerator purchase is sometimes an optimization project that makes the purchase unnecessary.

This is not austerity.

It is selectivity.

Spend compute where compute changes the result.

The fifth habit is to separate fit from efficiency.

A model fitting onto a device does not mean it runs well there.

A job fitting onto a cluster does not mean it scales well.

A workload fitting under a power envelope does not mean it uses the watts productively.

A serving configuration fitting into memory does not mean it meets latency.

Fit is a binary constraint.

Efficiency is what happens after the fit.

Teams often celebrate fit because it is visible and hard-won.

Then they stop.

The next question is whether the fitted system should exist in that form.

A model spread across eight devices may fit and be slower than a quantized version on four.

A large context may fit and still create unacceptable queueing.

A giant job may fit only when the cluster is empty, making it practically unschedulable.

The machine is not useful because the configuration is technically possible.

Useful capacity is schedulable, repeatable, and economically defensible.

The sixth habit is to treat the scheduler as part of the product.

Schedulers decide who waits.

That is a product decision whether anyone acknowledges it or not.

A scheduler can make a fleet feel abundant or scarce.

It can strand capacity through fragmentation.

It can destroy cache locality.

It can place communication-heavy jobs across bad topology.

It can ignore power and overload a rack.

It can let giant jobs starve small experiments.

It can let every user label work urgent and thereby make urgency meaningless.

Or it can convert flexibility into efficiency.

This job can wait.

That job can restart.

This request can use a smaller model.

That workload can move regions.

This batch can run overnight.

That service needs immediate headroom.

The scheduler is where optionality becomes capacity.

Optionality is one of the most valuable themes in this book.

A workload that can wait is cheaper to serve.

A workload that can restart can use less reliable capacity.

A request that can route across models can use scarce intelligence selectively.

A job that can run on multiple hardware types has purchasing leverage.

A checkpoint that can restore on a different cluster has portability.

A product that can degrade gracefully needs less reserve.

Rigid workloads force the infrastructure to satisfy every condition simultaneously.

Flexible workloads let the scheduler trade one resource against another.

The result is higher utilization without pretending scarcity disappeared.

The seventh habit is to count failure as consumed compute.

This changes reliability conversations.

A failed training job is not only an incident.

It is recomputation.

A retry storm is not only a networking problem.

It is duplicated inference.

A degraded GPU is not only a hardware warning.

It is synchronized waiting across peers.

A bad checkpoint is not only a storage problem.

It is lost elapsed work.

A fragile optimization is not only an on-call burden.

It reduces how close the fleet can safely operate to its limits.

Reliability creates capacity by reducing the reserve needed to survive uncertainty.

That is why reliability work often has better economics than its direct throughput impact suggests.

Fewer failures.

Fewer retries.

Less recomputation.

Smaller buffers.

Smaller reserves.

More predictable queues.

More confidence in interruptible capacity.

Reliability is a multiplier on everything else.

The eighth habit is to treat power as a resource request.

The age when AI clusters could ignore the electrical envelope is ending anywhere accelerator density becomes high enough.

A rack can have free GPUs and no usable power headroom.

A facility can have purchased accelerators waiting for electrical infrastructure.

A workload can perform better per GPU and worse per megawatt.

A power cap can reduce performance and increase fleet-level throughput if it lets more devices operate within the same envelope.

Or it can make a synchronized job slower and waste everyone else's time.

Again: regime.

Power-aware scheduling will become more important because the physical world is not a cloud API.

Electricity arrives through cables.

Heat leaves through cooling systems.

The model is ultimately a thermodynamic event.

The ninth habit is to price time.

This is where purely technical optimization ends.

A training job that finishes four hours earlier may cost more accelerator-hours and still be the right decision because it creates another research iteration.

An inference service may keep expensive headroom because users value low tail latency.

A batch workload may wait overnight because nobody values immediate completion.

A company may pay on-demand cloud prices during a launch and switch to cheaper capacity later.

There is no universal cheapest compute because time has different value in different contexts.

The same accelerator-hour can be worth more on Thursday night before a deadline than on Monday morning.

Infrastructure policy should reflect that.

This is why priority is an economic variable.

The tenth habit is to stop.

Optimization has diminishing returns.

There will always be another percent.

Another kernel.

Another scheduler heuristic.

Another cache layer.

Another parallelism trick.

Another way to squeeze memory.

Another benchmark to win.

Eventually the next improvement is less valuable than the engineering complexity it creates or the other work it displaces.

Stopping is not giving up.

It is allocating engineering attention.

The same people who optimize infrastructure are scarce resources too.

A month spent extracting two percent from a small service is a month not spent fixing twenty percent waste elsewhere.

Running on full applies to the team.

Use expert attention where it changes the bottleneck.

This brings us to the operating loop.

It is simple enough to remember.

Define useful work.

Name the product constraints.

Trace the end-to-end path.

Find the current bottleneck.

Measure the queue.

Measure the scarce resource.

Remove unnecessary work.

Improve scheduling and overlap.

Protect progress with reliability.

Recalculate the economics.

Then measure again.

The bottleneck will move.

Repeat until the next gain is not worth the cost.

That loop is more durable than any specific optimization in this book.

Hardware generations will change.

Model architectures will change.

Serving engines will change.

Speculative techniques will change.

Context windows will change.

Cloud products will change.

Power density will change.

The names of the tools will age.

The loop will survive because it is built around constraints.

Constraints are the stable part of systems engineering.

Something is always scarce.

The job is to find it.

There is one final cultural lesson.

Compute scarcity can create a mythology of hardware.

The most expensive accelerator becomes the symbol of seriousness.

Teams ask for the newest GPU before asking what workload they have.

Companies announce clusters as if device count were business output.

Researchers use hardware scale as a proxy for ambition.

Product teams treat model size as a proxy for quality.

This is understandable.

Hardware is visible.

Useful work is harder to count.

But mature infrastructure culture reverses the prestige.

The best system is not the one with the most impressive machine.

It is the one that produces the required result with the least unjustified constrained cost.

Sometimes that system uses the biggest accelerators available.

Sometimes it uses a smaller model on older GPUs.

Sometimes it uses a cache.

Sometimes it waits for cheaper capacity.

Sometimes it spends more to finish now.

Sometimes it leaves hardware idle to protect latency.

Sometimes it runs every device flat out because the deadline is worth it.

The answer changes.

The discipline is stable.

This is why the title is *Running On Full* rather than *Running at 100%*.

Full is a systems state.

It means the machine is doing what it is for.

The useful work is flowing.

The expensive stages are not waiting unnecessarily.

The scheduler understands scarcity.

The model is no larger than the task requires.

The context is no longer than the answer needs.

The cache remembers what should not be recomputed.

The network is treated as part of the accelerator.

The data arrives before the device needs it.

The checkpoint protects the clock.

The power envelope is allocated deliberately.

The architecture fits the machine and the machine fits the architecture.

Speculation is used where cheap guesses remove expensive serial work.

Capacity is bought with honest assumptions.

Queues tell you where scarcity remains.

Reliability protects what has already been paid for.

Optimization stops when the next percent is no longer the best use of attention.

And faster is purchased only when faster is worth its price.

That is a full system.

It will never be perfect.

It does not need to be.

The practical goal is more modest and more demanding:

Know where the compute goes.

Know which work counts.

Know what the user requires.

Know what the bottleneck is now.

Then make the expensive machine spend less time doing anything else.

You can always buy more compute.

Sometimes you should.

But before buying another machine, make sure the machines you already own are actually full.