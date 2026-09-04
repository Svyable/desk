# Running On Full — Operator’s Field Manual

The point of this book is not to make every accelerator graph look busy.

It is to make the system produce more useful work from the compute already available.

That sounds obvious. In practice, it is easy to lose the objective inside layers of dashboards, model settings, capacity requests, kernel benchmarks, queueing policies, cloud contracts, and local optimizations. A fleet can look impressive while users wait. A model can benchmark well while requests miss latency targets. A cluster can be fully allocated while half its useful capacity disappears into retries, bad placement, oversized models, unnecessary context, cold state, or jobs that should not have run in the first place.

This field manual is the compact version of the operating discipline developed across the book. Use it before buying more compute, before declaring a utilization problem solved, and before accepting an optimization because one local metric improved.

## The operating objective

Start with one sentence:

**Useful work completed under the constraints that matter.**

The constraints may be quality, latency, reliability, cost, power, deadline, privacy, geography, or some combination of them. The exact mix changes by workload. The discipline does not.

For an interactive service, useful work might mean a correct-enough answer delivered inside a first-token and tail-latency target.

For a training run, it might mean reaching a valid model checkpoint by a deadline at acceptable total cost.

For a batch workload, it might mean finishing a fixed body of work cheaply enough that time is secondary.

For an agent system, it might mean completing a task successfully rather than merely generating tokens quickly.

If the objective cannot be stated, the infrastructure team is being asked to optimize a machine without knowing what counts as success.

## The measurement ladder

When a system looks slow, expensive, or underused, measure from the product backward.

### 1. Outcome

What actually counts?

- completed requests
- accepted model outputs
- successful agent tasks
- valid training checkpoints
- jobs completed before deadline
- quality-adjusted results

Do not begin with device utilization. Begin with the thing the user or business receives.

### 2. Service constraint

What makes the outcome acceptable?

- quality threshold
- time to first token
- inter-token latency
- end-to-end latency
- tail latency
- reliability or error budget
- freshness
- deadline
- cost ceiling

A throughput gain that breaks the service constraint is not automatically an efficiency gain.

### 3. Queue

What is waiting, and why?

A queue is often the clearest sign of scarcity because it records unsatisfied demand. Measure queue depth, wait time, age, priority, and the resource each waiting job requires.

A low-utilization GPU with a long queue usually means the bottleneck is somewhere upstream, downstream, or in placement. A highly utilized fleet with an exploding queue is simply overloaded.

### 4. Critical path

Where does elapsed time accumulate?

Trace the path through request admission, preprocessing, retrieval, data loading, scheduling, model execution, memory movement, communication, decoding, validation, checkpointing, and response delivery.

Do not optimize a stage merely because it has an accessible dashboard. Optimize what is actually on the critical path.

### 5. Scarce resource

What resource is limiting the next unit of useful work?

It may be:

- accelerator arithmetic
- HBM capacity
- memory bandwidth
- KV-cache space
- network bandwidth or topology
- storage throughput
- host CPU
- power headroom
- scheduler flexibility
- contiguous capacity
- model residency
- human review

The answer can change after every successful optimization. Expect the bottleneck to move.

### 6. Waste

How much work can be avoided rather than accelerated?

Look for:

- repeated prefixes
- unnecessary context
- oversized models
- duplicate retries
- low-value verification
- failed work that must restart
- experiments nobody will inspect
- cache misses caused by poor placement
- redundant transfers
- excessive output length
- speculative branches that are not paying for themselves

Avoided work has unusually good economics because it saves every downstream resource at once.

## Before buying another accelerator

Ask these questions in order.

### Is demand real?

Separate lack of capacity from lack of demand. Idle hardware is not automatically a performance problem. It may be reserve capacity protecting latency or simply a sign that the workload does not need the fleet you provisioned.

### Is the work using the right model?

Find the cheapest model or route that clears the task’s quality bar. Escalate selectively when the product allows it. Do not make the strongest model the default simply because it exists.

### Is the request carrying too much context?

More context is not free. Remove irrelevant material, reuse stable prefixes, summarize where appropriate, and externalize memory that does not need to remain inside every prompt.

### Is batching appropriate?

Batch aggressively where latency allows it. Do not force low-volume or latency-sensitive traffic to wait for a batch whose efficiency gain is smaller than its queueing penalty.

### Is useful state being reused?

Keep expensive reusable state hot when the workload has real locality. Measure avoided work, not just cache hit rate. A cache that steals too much active memory can cost more than it saves.

### Is memory the true bottleneck?

Check capacity, bandwidth, allocation behavior, fragmentation, KV growth, and model residency separately. “Out of memory” and “memory-bound” are not the same problem.

### Is communication on the critical path?

For distributed work, inspect topology, collective time, synchronization, host-device transfers, and stragglers. Once a job spans accelerators, the network is part of the machine.

### Is the scheduler creating scarcity?

Look for rigid reservations, incompatible resource shapes, topology-blind placement, poor locality, giant jobs blocking small ones, and priorities that do not reflect business value.

### Is failure consuming capacity?

Count retries, recomputation, bad checkpoints, degraded devices, job restarts, and incident reserve as compute economics. Reliability work can create capacity without adding hardware.

### Is power the limiting resource?

A free accelerator is not usable if the rack, row, or facility cannot power and cool the workload. Optimize useful work per constrained watt when power becomes the binding limit.

Only after those questions should the procurement discussion become the default answer.

## The optimization test

Before accepting an optimization, write down five things.

**Objective:** What user or business metric is supposed to improve?

**Regime:** Under what workload, hardware, model, traffic shape, and service constraint does the optimization work?

**Trade:** What gets worse—memory, latency, quality, complexity, reliability, portability, power, or something else?

**Freed capacity:** What useful work will actually occupy the resource that was saved?

**Reversal condition:** What observation would make you undo the optimization?

This prevents a benchmark result from becoming policy without a product reason.

## The capacity review

A useful weekly or monthly review can fit on one page.

### Demand

- requests or jobs by class
- arrival-rate distribution
- peak and tail periods
- queue time by class
- deadline misses

### Useful output

- successful completions
- accepted outputs
- quality-adjusted throughput
- completed-job cost
- failure and retry rate

### Resource shape

- accelerator occupancy by workload
- memory pressure and fragmentation
- cache effectiveness
- topology-sensitive placement
- network critical-path time
- power headroom

### Waste

- repeated work
- failed work
- unnecessary model escalation
- unnecessary context
- cold-start or load overhead
- idle gaps caused by upstream stages

### Options

- work that can wait
- work that can restart
- work that can use a smaller model
- work that can move region or hardware class
- work that can run on interruptible capacity
- work that can be cached or skipped

The purpose of the review is not to admire utilization. It is to decide which constraint deserves engineering attention next.

## The purchase decision

If more capacity is still justified, compare options using completed-work economics rather than sticker price.

For owned capacity, include utilization risk, power, cooling, networking, facilities, maintenance, deployment delay, and the possibility that the hardware becomes mismatched to the next workload.

For reserved capacity, include commitment risk and the value of guaranteed access.

For on-demand capacity, include the premium paid for flexibility.

For interruptible capacity, include restart cost, checkpoint quality, interruption handling, and the value of work that can tolerate delay.

For burst capacity, include transfer overhead, data locality, security constraints, and the operational cost of switching environments.

The cheapest accelerator-hour is not always the cheapest completed job. The fastest completed job is not always the most valuable use of the fleet.

## The ten rules

If the rest of the book disappears from memory, keep these.

1. **Measure the outcome before the device.**
2. **Protect the product constraint.**
3. **Name the current bottleneck.**
4. **Avoid work before accelerating it.**
5. **Treat memory as a scheduling resource.**
6. **Treat the network, storage, and power system as part of compute.**
7. **Use flexibility as capacity.**
8. **Count failure and retries as consumed compute.**
9. **Price time explicitly.**
10. **Stop optimizing when complexity costs more than the remaining waste.**

Running on full does not mean every graph is pinned at one hundred percent.

It means the system has very little unjustified waste left, the remaining slack has a reason, and scarce resources are going to the highest-value feasible work.

That is a harder standard than utilization.

It is also a much more useful one.
