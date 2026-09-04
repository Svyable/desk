# Measure the Queue, Not the GPU

A queue is a confession.

It tells you that work wanted to happen and could not.

That makes it one of the most economically honest objects in a compute system.

A GPU utilization graph tells you what a device was doing.

A queue tells you what the organization was unable to do.

The difference matters.

A cluster can show eighty-five percent accelerator utilization and still be badly underprovisioned if important jobs wait for days.

A serving fleet can show forty percent utilization and still be correctly sized if traffic is bursty and users require low latency.

A training platform can show ninety-eight percent utilization and still waste enormous value if small urgent experiments are trapped behind giant low-priority jobs.

The device metric describes occupancy.

The queue describes scarcity.

If you want to know whether compute capacity is serving the product, measure the queue.

This does not mean stop measuring the GPU.

Device metrics are essential for diagnosing why work is slow.

SM activity, memory activity, network traffic, power, cache behavior, and kernel performance can reveal bottlenecks that a queue cannot explain.

But they are downstream measurements.

The queue is where product demand meets infrastructure supply.

That boundary deserves first-class attention.

There are several queues in a modern AI system.

The obvious one is the scheduler queue.

Training jobs ask for accelerators and wait until enough suitable resources become available.

The next is the inference admission queue.

Requests arrive faster than the serving engine can process them and wait before prefill or decode.

There can be a batch-formation queue, where requests wait for compatible work.

A retrieval queue.

A tool-call queue.

A storage queue.

A network queue.

A model-router queue.

A checkpoint-write queue.

An engineering queue, where teams wait for quota, approval, or hardware access.

Every queue says the same thing in a different language:

Demand arrived before capacity.

Queueing is not automatically failure.

Some workloads are designed to wait.

A batch training job that finishes by tomorrow morning may not care whether it starts now or in three hours. A background embedding refresh can sit in a queue. A low-priority evaluation can yield to interactive production traffic.

Queueing is often the mechanism that lets a system run at high utilization without purchasing enough capacity for every peak.

The problem is not waiting.

The problem is waiting without policy.

A queue needs to know whose time matters.

If every job is first-come, first-served, a giant job can block a tiny urgent one.

If every job can declare itself urgent, urgency loses meaning.

If the scheduler optimizes only accelerator occupancy, it can favor jobs that are easy to pack rather than jobs that create the most value.

Scheduling is allocation.

The queue is where allocation becomes visible.

This is why queue metrics should be stratified.

Average queue time is almost as dangerous as average utilization.

Imagine ten thousand small jobs start immediately and ten large jobs wait three days.

The average can look excellent.

The large jobs may contain the company's most important training runs.

Now reverse it.

Large jobs start immediately while thousands of small experiments wait hours.

The total accelerator-hours delayed may be small, but research iteration can collapse because every developer is waiting.

Different queues carry different kinds of value.

Measure by priority class.

Job size.

Hardware class.

Team or product if useful.

Deadline.

Wait-time percentile.

Reason for waiting.

Preemption tolerance.

The distribution tells you what scarcity feels like.

One of the most useful queue metrics is not wait time itself.

It is why the job cannot start.

Insufficient total GPUs is one reason.

Insufficient contiguous GPUs is another.

Wrong accelerator type.

No power headroom.

No memory capacity.

Network topology constraint.

Quota.

Data locality.

Maintenance drain.

A single unavailable node blocking a gang-scheduled job.

A job asking for a resource combination that almost never exists.

Each cause suggests a different fix.

If the queue is long because total capacity is low, buy or rent more.

If the queue is long because fragmentation prevents placement, scheduling improvements may create effective capacity.

If the queue is long because everyone requests the newest hardware by default, hardware-aware routing may move easy work elsewhere.

If the queue is long because jobs request twice the memory they use, right-sizing creates capacity.

If the queue is long because of a power constraint, more GPUs do not help.

The queue is a diagnostic index into the whole system.

Inference queues deserve similar treatment.

A model server can look healthy until arrivals exceed service rate.

Then latency does not degrade gently forever.

The queue grows.

Each new request waits behind more old work.

Waiting increases response time.

Long responses hold resources longer.

The system can enter a feedback loop where overload creates conditions that make overload worse.

This is why admission control matters.

A service should decide what happens when demand exceeds safe capacity before the event occurs.

Queue briefly?

Reject low-priority work?

Route to a smaller model?

Reduce maximum output length?

Disable expensive verification?

Move traffic to another region?

Burst into additional capacity?

The overload policy is part of product design.

Without one, the default policy is usually “let latency grow until something times out.”

That is not graceful degradation.

It is unmanaged collapse.

The queue can also reveal bad batching.

Suppose requests wait a long time even though the GPU is not highly utilized.

The system may be waiting to assemble batches under a policy that was tuned for higher traffic. Or memory fragmentation may prevent new requests from entering. Or a few long-running sequences may occupy cache and batch slots. Or the scheduler may be enforcing fairness in a way that leaves hardware idle.

The queue says demand exists.

The GPU says capacity appears unused.

The contradiction is where the bug lives.

This is why queue depth and device utilization should be viewed together.

There are four useful quadrants.

Low queue, low utilization.

The system may simply have low demand. That is not necessarily a problem.

Low queue, high utilization.

The system is busy and keeping up. This can be a healthy state.

High queue, high utilization.

Demand exceeds current capacity or service rate. Add capacity, improve efficiency, or change policy.

High queue, low utilization.

This is the suspicious state.

Work is waiting while resources appear idle.

Look for fragmentation, scheduler constraints, data dependencies, power limits, network bottlenecks, cache pressure, software locks, topology, or mismatched resource requests.

That quadrant is where many infrastructure teams discover “missing capacity” that was never missing physically.

The capacity was inaccessible.

Queue age is another powerful signal.

A queue of one thousand jobs can be harmless if jobs are short and turning over rapidly.

A queue of fifty jobs can be disastrous if the oldest has waited two days.

Depth measures volume.

Age measures pain.

The oldest waiting item often deserves a dashboard of its own.

Why is it still there?

Is it impossible to schedule?

Does it request a dead hardware type?

Is a quota misconfigured?

Is the user waiting on a resource combination that no machine can satisfy?

A queue can contain zombies.

Zombie work inflates demand forecasts and destroys trust in scheduler metrics.

Clean queues are a form of data quality.

Users should cancel jobs they no longer need.

Schedulers should detect impossible requests.

Expired deadlines should remove or downgrade work.

Duplicate jobs should be visible.

A queue full of abandoned intent is not demand.

It is archaeology.

This becomes especially important in research environments where users submit speculative sweeps.

A researcher may enqueue one hundred experiments and care about only the first twenty after the results arrive. If the remaining eighty keep running because nobody cancels them, the queue was used as a planning language rather than a commitment.

The infrastructure needs a way to express conditional demand.

Run these until we know enough.

Stop the rest.

Run the next stage only if the metric improves.

Cancel siblings after one candidate wins.

Compute workflows should be able to encode decision points so the scheduler does not execute stale branches of thought.

This is speculative execution with a budget.

The same idea appears in evaluation.

A model sweep can stop early when poor candidates are statistically unlikely to recover. Hyperparameter search systems already exploit this concept. The broader principle is that the queue should contain work that is still valuable.

Work can expire.

Value is time-dependent.

A debugging run that was urgent this morning can be irrelevant after the bug is found another way.

A model evaluation can become obsolete after a new checkpoint supersedes it.

A data-processing job can become unnecessary after the product launch is canceled.

Schedulers usually understand resource priority better than value decay.

Publication-ready infrastructure thinking should include both.

The age of a job should sometimes increase priority because someone has waited too long.

In other cases, age should decrease priority because the result is becoming stale.

Fairness is not one formula.

The queue also changes user behavior.

When queue times are unpredictable, users request larger blocks less often and hoard them once acquired. They run extra work “while they have the GPUs.” They pad reservations because releasing capacity feels risky. They avoid interactive experimentation and batch more decisions together.

Scarcity creates hoarding.

Hoarding makes scarcity worse.

A predictable queue can improve utilization even if the mean wait is not dramatically lower because users trust that released capacity can be reacquired.

This is a subtle but important point.

Infrastructure reliability includes allocation reliability.

If a user knows a four-GPU job usually starts within ten minutes, they do not need to reserve eight GPUs all afternoon just in case.

Predictability reduces defensive overreservation.

That creates usable capacity without changing hardware.

This is one reason scheduling service levels can be more valuable than raw utilization targets.

A platform can promise:

Small interactive jobs start within five minutes.

Large flexible jobs usually start within six hours.

Urgent production restores preempt lower-priority work.

Long research runs receive a predictable capacity window.

These promises let users shape workflows around reality.

The queue becomes a contract rather than a mystery.

Cloud capacity products make this explicit by selling different start guarantees and commitment levels. Internal clusters can do the same conceptually even without a price tag.

Immediate capacity is a premium service.

Flexible capacity is cheaper to provide.

The scheduler should know which one the user actually needs.

This connects directly to capacity planning.

A growing queue is an early warning.

Utilization can remain high for weeks before the organization realizes demand is outrunning supply. The queue shows the gap immediately.

Track the trend.

Are wait times rising?

Is the tail getting worse?

Are more jobs spilling into expensive on-demand capacity?

Are users requesting smaller jobs because large jobs never start?

Are deadlines being missed?

Is the same hardware class repeatedly scarce?

Those signals can trigger procurement or optimization before the platform becomes unusable.

The queue is demand pressure made observable.

There is an equivalent queue inside the human organization.

How many experiments are waiting for results?

How many product features are blocked on inference cost?

How many launches are waiting for capacity?

How many engineers are spending time finding GPUs instead of using them?

These are hard to measure automatically, but they are part of the economic queue.

A compute platform exists to reduce the delay between intention and useful result.

If the GPUs are busy but the organization is waiting, utilization is not victory.

This is the strongest reason to measure time-to-start and time-to-result.

Time-to-start captures allocation.

Time-to-result captures the whole path.

Both are closer to user value than device activity.

For training, the full journey might be:

Job submitted.

Job admitted.

Resources allocated.

Environment starts.

Data becomes available.

Training begins.

Training progresses.

Checkpoint survives.

Evaluation completes.

Result reaches the researcher.

Every gap is a queue or a pipeline stage.

For inference:

Request arrives.

Request is admitted.

Retrieval completes.

Prefill begins.

First token arrives.

Generation finishes.

Verification completes.

Response reaches the user.

Again, every gap belongs to the product.

The accelerator is only one station.

A mature observability system should therefore let an operator move from the user-visible queue down to the device.

Latency is high.

Why?

Queueing before model execution.

Why?

KV cache full.

Why?

Long-context requests are retaining blocks.

Why?

A new product flow doubled context length.

Now the system has an actionable chain.

Starting from GPU utilization would have been harder.

The device is not the symptom.

The queue is.

This is why queues are so honest.

They record unsatisfied intent.

They tell you where the organization is waiting.

They expose whether your scarce resources are scarce for good reasons or bad ones.

They show when high utilization is success and when it is merely congestion.

Measure the GPU to understand the machine.

Measure the queue to understand the business.

Running on full is not the absence of idle time.

It is the absence of valuable work waiting unnecessarily while capacity exists somewhere in the system.