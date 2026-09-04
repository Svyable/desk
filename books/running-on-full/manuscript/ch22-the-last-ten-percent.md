# The Last Ten Percent

The first ten percent of an optimization project is usually easy to explain.

The last ten percent is where the explanation gets expensive.

A system begins badly enough that obvious improvements work.

Batch requests.

Fix a pathological memory copy.

Stop using the largest model for every task.

Cache repeated prefixes.

Move data closer.

Repair a bad scheduler rule.

The gains are visible.

Then the system gets better.

The easy waste disappears.

What remains is smaller, more distributed, more workload-dependent, and more likely to fight another objective.

This is the last ten percent.

It is where teams can create enormous value.

It is also where teams can spend enormous effort making a benchmark beautiful while the product barely changes.

The distinction matters because optimization has a cost curve.

Early gains are often broad.

One change helps many workloads.

Later gains become specific.

A custom kernel helps one shape.

A scheduler heuristic helps one traffic regime.

A hand-tuned power setting helps one model on one hardware generation.

A complex pipeline schedule improves one training configuration.

The engineering work increases while the addressable waste shrinks.

At some point the next percent costs more than it returns.

That point is not failure.

It is the economic optimum.

Engineers are trained to see inefficiency and want to remove it.

That instinct is valuable.

Infrastructure operators need a second instinct:

Ask whether the inefficiency is worth removing now.

A five-percent throughput gain can be enormous on a fleet that spends hundreds of millions of dollars each year.

The same five-percent gain can be irrelevant on a small internal service whose entire annual compute bill is less than one engineer's salary.

Percentages need a base.

The value of an optimization is roughly the resource it saves or the result it accelerates, multiplied by how often the workload occurs, minus the engineering and operational costs it creates.

That formula is not precise.

It is enough to stop magical thinking.

The last ten percent often has three hidden costs.

The first is complexity.

A system can become faster and harder to operate.

A custom allocator reduces fragmentation but introduces a rare corruption bug.

A specialized kernel improves throughput but complicates upgrades.

A new speculative decoding path helps low-QPS traffic but creates another mode the on-call engineer must understand.

A topology-aware scheduler packs jobs better but becomes less predictable to users.

Performance code has a maintenance tail.

The original engineer remembers why every condition exists.

Two years later the code remains and the context is gone.

Complexity is a recurring payment.

The gain has to keep paying it.

The second hidden cost is flexibility.

An aggressively optimized system often assumes a narrow workload.

Fixed batch shapes.

Specific model sizes.

One accelerator generation.

One network topology.

One context range.

One traffic distribution.

Those assumptions allow deep optimization because uncertainty disappears.

Then the product changes.

The model gets larger.

The requests become longer.

The company moves regions.

A new hardware generation arrives.

The old optimization becomes a constraint.

Flexibility has value precisely because the future is uncertain.

An optimization that saves three percent today and makes migration twenty percent harder tomorrow can be negative value.

This is difficult to see in a benchmark because benchmarks have no future.

Products do.

The third hidden cost is reliability.

The final performance gains often reduce slack.

Run buffers smaller.

Pack memory tighter.

Increase batch size.

Reduce redundancy.

Drive power higher.

Raise concurrency.

Use more aggressive timeouts.

Operate closer to every limit.

The system becomes efficient in the nominal case and fragile in the tail.

This is why a benchmark record can coexist with a terrible production experience.

The benchmark measures the happy path.

The product pays for the distribution.

The last ten percent should therefore be evaluated against a broader objective than speed.

What happens to failure rate?

Tail latency?

Recovery time?

Upgrade difficulty?

Portability?

Debuggability?

Capacity headroom?

Engineer time?

If the answer is “all of those get worse,” the performance gain needs to be substantial.

There is a fourth cost that deserves special attention: measurement error.

As gains get smaller, measurement becomes harder.

A fifty-percent improvement is difficult to mistake.

A two-percent improvement can be noise.

Traffic mix changes.

Thermal conditions change.

Cache state changes.

The cloud places the VM differently.

Background work appears.

A compiler version changes.

A random seed changes sequence lengths.

The benchmark warms up differently.

The supposed optimization may be smaller than the variance of the test.

This is why the last ten percent requires better experimental discipline than the first.

Measure enough repetitions.

Control the workload.

Report distributions.

Test on production-like traffic.

Separate cold and warm behavior.

Include failure cases.

Include end-to-end latency, not only the kernel.

Make sure the metric can actually detect the claimed improvement.

Otherwise the team can spend weeks optimizing a statistical ghost.

This is one reason profiling should become more precise as the system improves.

When twenty percent of time is clearly spent waiting for data, fix data.

When the top bottleneck is two percent and shifts between runs, the system may be near the point where broad optimization has stopped paying.

The remaining work can still be valuable at scale.

But it needs stronger evidence.

The last ten percent is also where Amdahl's law becomes emotionally relevant.

If one part of a workload is already a small fraction of total time, making that part much faster barely changes the whole system.

You can optimize a kernel by fifty percent and improve end-to-end latency by one percent because the kernel only consumed two percent of the original request.

The local achievement can be real.

The product impact can be tiny.

This is why optimization claims should always name the boundary.

Kernel speedup.

Model-step speedup.

Request latency improvement.

Fleet cost reduction.

Completed-job time reduction.

These are not interchangeable.

A local percentage becomes misleading when it is allowed to imply a system percentage.

The same issue appears in hardware marketing.

A new accelerator can provide a dramatic improvement for one numerical format or operation.

The application may not spend all of its time in that operation.

Memory, network, data, and host overhead remain.

The system speedup is bounded by the part that changed.

This does not make the hardware improvement unimportant.

It makes end-to-end measurement necessary.

The last ten percent also tempts teams into benchmark-specific behavior.

If the goal becomes “raise this utilization number,” the system will find ways to raise the number.

Increase batch size.

Add dummy work.

Reduce headroom.

Change sampling windows.

Exclude startup.

Ignore failed jobs.

The metric improves.

Useful work does not.

This is Goodhart's law in a machine room: when the measurement becomes the target, it stops describing the objective.

That is why Chapter 2 defined useful work before choosing metrics.

The metric should follow the product constraint.

The product constraint should not be rewritten to flatter the metric.

There are cases where chasing the last ten percent is exactly correct.

A hyperscale serving fleet may turn one percent into enormous annual savings.

A frontier training run may save days by improving distributed efficiency slightly.

A latency-critical product may gain market value from reducing tail latency even when average cost barely changes.

A power-limited facility may be able to admit another large workload if software frees a few percent of the envelope.

Scale multiplies small improvements.

The last ten percent can be a billion-dollar neighborhood.

But scale also multiplies risk.

A one-percent regression deployed across the same fleet is expensive.

A rare bug affecting one in a million requests becomes common at enormous volume.

A slight reliability degradation can create frequent incidents.

Large systems deserve deeper optimization and deeper caution at the same time.

The right process is staged.

First, establish the bottleneck with production-relevant measurements.

Second, estimate the maximum possible gain if the bottleneck disappeared.

Third, estimate the economic value of that gain at actual scale.

Fourth, compare it with engineering cost and complexity.

Fifth, build the simplest intervention that can test the hypothesis.

Sixth, measure end to end.

Seventh, canary it.

Eighth, keep it only if the real system improves.

This process sounds slower than heroic optimization.

It is faster than maintaining optimizations that never mattered.

There is a useful category of work called removal.

After years of performance engineering, systems accumulate special cases.

Flags.

Caches.

Heuristics.

Fallbacks.

Hand-tuned thresholds.

Compatibility paths.

Some were essential when introduced.

The workload changes.

The hardware changes.

The serving engine improves.

The old optimization becomes dead weight.

Deleting it can improve reliability, reduce memory, simplify scheduling, and make future optimization easier.

The last ten percent of one era can become the first ten percent of waste in the next.

This is why performance features need expiration thinking.

What assumption makes this optimization valuable?

Can we measure whether the assumption still holds?

When would we remove it?

A feature without an exit condition tends to become infrastructure sediment.

The best operators periodically excavate.

The last ten percent can also be recovered through product changes rather than system changes.

Reducing maximum context can save more than a low-level kernel optimization.

Changing a default model can save more than power tuning.

Making a user operation asynchronous can eliminate a hard latency requirement.

Allowing a batch job to wait can unlock cheaper capacity.

Reducing unnecessary output length can free decode capacity.

Removing a verification stage from low-risk requests can reduce cost.

The product is part of the optimization surface.

This matters because infrastructure teams often inherit constraints as fixed.

“Must respond in one second.”

“Must use this model.”

“Must support this context.”

“Must run in this region.”

Sometimes those constraints are real.

Sometimes they are historical defaults.

Before spending a month extracting three percent from the implementation, ask whether the requirement can move.

A small product change can be a large infrastructure optimization.

This is not cheating.

The purpose of infrastructure is to serve the product, and the purpose of the product is to serve the user.

If the user does not value the expensive constraint, removing it is efficiency.

The most dangerous phrase in late-stage optimization is “free performance.”

There is almost never free performance.

The cost may be engineering time.

Memory.

Power.

Reliability.

Complexity.

Portability.

Quality risk.

Opportunity cost.

A more complicated mental model.

A harder incident.

The cost can be worth paying.

Name it.

The same skepticism should apply to “just use more GPUs.”

Additional hardware can be the cheapest engineering solution when labor is expensive and time matters.

It can also hide a bottleneck that scales badly, making the eventual problem larger.

The decision depends on the horizon.

If a product launch is tomorrow, rent capacity.

If the service will run for five years, fix the pathological waste.

Short-term and long-term optima can differ.

A publication-quality operating doctrine needs both.

Do not let infrastructure purity block the business.

Do not let emergency scaling become permanent architecture by accident.

Temporary capacity should have a review date.

Emergency flags should have an owner.

Performance debt is real debt.

It can be rational to borrow.

It should not be forgotten.

There is an aesthetic temptation in optimization.

A perfectly saturated machine is satisfying.

A beautifully balanced pipeline is satisfying.

A cache with an extraordinary hit rate is satisfying.

A scheduler that packs every device is satisfying.

Engineering contains craft, and craft values elegance.

But the business does not owe elegance a budget.

The system can be good enough before it is perfect.

Good enough means the next improvement is less valuable than the next problem elsewhere.

That is a portfolio decision.

An infrastructure leader should compare optimization opportunities across the stack.

One percent from kernels.

Ten percent from model routing.

Five percent from fewer failures.

Twenty percent from eliminating repeated context.

Three percent from better packing.

A month saved from a capacity purchase.

The highest-value work may not be the most technically glamorous.

Running on full requires resisting local fascination.

The machine is a whole.

The organization is a whole.

The budget is a whole.

Optimize where the constraint is expensive.

Stop where the next percent costs more than it returns.

Then move on.

The last ten percent is not a moral obligation.

It is an investment opportunity.

Treat it like one.