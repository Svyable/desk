# Capacity Planning Without Fantasy

Capacity planning is the art of being wrong in useful ways.

Nobody knows exactly how much AI compute a product will need six months from now.

The model may change.

Traffic may change.

Context lengths may change.

A cheaper serving technique may arrive.

A larger customer may sign.

A training program may accelerate.

A product may fail.

A new accelerator generation may appear.

A software optimization may halve the required fleet.

The forecast is not a prophecy.

It is a set of assumptions that lets the organization make decisions before reality becomes obvious.

The quality of a capacity plan therefore depends less on whether it predicts one exact number and more on whether it reveals which assumptions matter, which constraints bind, and what the organization will do when demand lands somewhere else.

Fantasy begins when a forecast is presented as certainty.

The simplest fantasy is average demand.

Suppose an inference service receives one thousand requests per second on average.

That number is useful for billing.

It may be useless for capacity.

If traffic arrives evenly, the fleet can be small.

If traffic doubles every weekday at noon, the fleet must absorb the peak or the queue grows.

If request sizes vary by a factor of one hundred, request count is not even the right load unit.

If some users send short prompts and others send enormous context windows, average requests per second hides the resource distribution.

If output lengths vary, the same request rate can produce very different decode occupancy.

Averages erase the shape of demand.

Capacity is about shape.

The first job of a serious plan is to define the workload unit.

For a batch training cluster, the unit might be requested accelerator-hours by hardware class, job size, deadline, and preemption tolerance.

For inference, it might be prompt tokens, generated tokens, request concurrency, latency class, model route, and context distribution.

For agent systems, it may include tool calls, average and tail step counts, model escalations, and workflow duration.

There is no universal unit because there is no universal bottleneck.

The unit should predict pressure on the resource that becomes scarce.

This sounds circular.

It is iterative.

You start with the best model you have.

You observe what actually saturates.

You improve the demand model.

Capacity planning matures through feedback.

The second job is to separate base load from burst load.

Base load is the demand you can rely on seeing.

Burst load is the demand you must survive but do not want to purchase permanently if you can avoid it.

This distinction immediately connects to Chapter 18.

Stable base load may justify owned or committed capacity.

Bursts may justify elastic capacity, queueing, or graceful degradation.

But “burst” is not one thing.

Some bursts are predictable.

Product launches.

Business-hour peaks.

Scheduled evaluations.

Known training windows.

End-of-quarter activity.

Other bursts are stochastic.

A viral event.

A customer migration.

A retry storm.

A failure in a downstream service that causes work to accumulate and then release.

Predictable bursts can often be scheduled around.

Unpredictable bursts require headroom or a degradation strategy.

The third job is to model the tail.

Capacity planning fails in tails because infrastructure is often synchronized.

A few unusually long requests can hold cache blocks and batching slots.

A few slow training workers can determine the step time.

A few giant jobs can block scheduling for many small jobs.

A few failures can trigger restarts that increase load while the system is already impaired.

A few cache misses can turn a normal workload into a storage storm.

The average user is not the user who causes the incident.

The average job is not always the job that determines the fleet.

This does not mean provisioning for the worst imaginable case.

That is another fantasy.

If you provision every system for an arbitrarily bad tail, you can spend infinite money.

The real question is what tail you promise to handle.

This is where service-level objectives become capacity inputs.

If the product promises a certain latency for ninety-nine percent of requests, the fleet must be sized and scheduled to make that plausible under the expected demand distribution.

If a batch platform promises that high-priority jobs start within thirty minutes, the cluster needs enough slack or preemption capability to make that true.

If no promise exists, capacity planning becomes politics.

Every delayed user can claim their wait was unacceptable.

A service level turns frustration into an engineering target.

The fourth job is to model constraints jointly.

A plan that says “we need five hundred more GPUs” is incomplete.

Where will they go?

Is there power?

Cooling?

Network?

Rack space?

Storage bandwidth?

Host CPU?

Memory?

Cloud quota?

The right accelerator SKU?

A scheduler capable of placing the jobs?

A dataset close enough to the machines?

A procurement date that matches the need?

Capacity arrives as a bundle.

Buying one dimension does not guarantee the others.

This is why large clusters can have stranded resources.

The GPUs are present.

The network is the bottleneck.

Or the power envelope is full.

Or the scheduler cannot find a contiguous block for the job.

Or the data is on the wrong side of the topology.

Nominal capacity is not schedulable capacity.

Schedulable capacity is not useful capacity.

A good plan distinguishes all three.

The fifth job is to preserve headroom intentionally.

Headroom often looks like waste.

It is easy to attack because idle capacity is visible.

But a system with no headroom is a system that cannot absorb variation.

Interactive services need headroom for bursts.

Distributed training platforms may need free blocks for urgent jobs or to replace failed nodes.

Power systems need reserve.

Caches need eviction room.

Schedulers need flexibility.

Every resource run at one hundred percent all the time becomes brittle.

The correct amount of headroom depends on the cost of scarcity.

If a service can queue for hours, headroom can be small.

If latency must stay low, headroom is part of the product.

This is why “utilization target” should never be chosen independently of service level.

A ninety-five-percent utilization target may be excellent for offline batch work and catastrophic for a bursty interactive service.

The objective is not maximum occupancy.

It is minimum economically justified slack.

There is a difference.

The sixth job is to plan for substitutions.

Capacity becomes easier when workloads have alternatives.

Can a request use a smaller model?

Can a training job use a different accelerator generation?

Can a batch job move to another region?

Can long context be summarized?

Can low-priority work wait?

Can precision be reduced?

Can a job shrink to fewer devices and run longer?

Can inference spill into rented capacity?

Each substitute reduces the amount of dedicated capacity needed for one exact scenario.

Optionality makes forecasts less fragile.

This is why heterogeneous fleets can be valuable when the software can exploit them.

A planner does not need to predict the exact demand for each hardware class if the scheduler can move compatible work among classes.

Portability converts hardware uncertainty into software complexity.

Sometimes that is a good trade.

The seventh job is to distinguish demand from appetite.

Users request more compute when compute is available.

Teams change behavior around constraints.

A research group given access to a large cluster may increase batch size, sweep more hyperparameters, run more ablations, or simply stop optimizing small experiments.

A product team with abundant inference capacity may send more context, invoke larger models, and add verification stages.

Demand is partially endogenous.

The infrastructure changes the workload.

This is why historical utilization cannot simply be extrapolated as if user behavior were fixed.

Add capacity and demand can expand.

Restrict capacity and users may optimize.

Neither response is necessarily bad.

The planner needs to understand the elasticity.

Which work creates value when capacity becomes cheaper?

Which work is merely waste that users tolerate because nobody sees the bill?

The answer determines whether adding capacity improves outcomes or just raises the baseline.

The eighth job is to plan around lead time.

Cloud capacity can feel immediate until quota, scarcity, or large cluster requirements appear.

Owned hardware can take months to purchase, deliver, install, power, network, and qualify.

Facility capacity can take far longer.

Capacity planning exists because some decisions must be made before demand arrives.

The longer the lead time, the more uncertainty enters the forecast.

This is where staged commitments help.

Instead of one massive irreversible decision, preserve options where possible.

Reserve part of the expected need.

Build infrastructure that can expand.

Use cloud capacity as a bridge.

Delay hardware-specific commitments until workload requirements stabilize.

A plan should buy information as well as hardware.

The ninth job is to include efficiency improvements as supply.

If a software optimization increases useful throughput per GPU by twenty percent, it has created capacity.

If model routing moves half of traffic to a cheaper path, it has created high-end capacity.

If prefix caching removes repeated prefill, it has created capacity.

If checkpointing reduces failure waste, it has created capacity.

If better scheduling reduces fragmentation, it has created capacity.

Capacity planning that looks only at procurement will systematically overbuy.

The fleet has two sources of supply:

New resources.

And better use of existing resources.

The second source can be faster to deploy and cheaper, but it is less certain. An optimization project can miss its target. A new serving engine can regress quality or reliability. A compiler improvement can help one model and not another.

Do not count hypothetical software wins as if they were purchased hardware.

Do include them as scenarios.

If optimization A succeeds, we need this many GPUs.

If it does not, we need this many.

That framing gives engineering work an explicit capacity value.

It also prevents a dangerous form of double counting where the budget assumes a performance improvement and the infrastructure team separately assumes new hardware will cover demand.

The tenth job is to measure forecast error without shame.

Every plan will be wrong.

The question is how.

Did demand grow faster than expected?

Did request size change?

Did model efficiency improve?

Did launch timing slip?

Did a customer concentrate load in one region?

Did the scheduler strand more capacity than expected?

Did a new model require a different hardware class?

Did spot availability collapse?

Forecast error is information about the system.

If the organization hides it because forecasts are treated as promises, planning gets worse.

The next forecast repeats the same assumptions because nobody wants to document how the last one failed.

A mature planning process treats misses as model updates.

This is exactly how good machine learning should work.

Observe.

Update.

Do not pretend uncertainty disappeared because the spreadsheet has two decimal places.

Scenario planning is the practical antidote.

Build at least a low, base, and high demand case.

But do not stop there.

Vary the assumptions that matter most.

Traffic growth.

Average context.

Generated tokens.

Model routing rate.

Hardware efficiency.

Cloud price.

Power availability.

Launch date.

Utilization.

Failure rate.

Then ask what decisions remain good across scenarios.

Those are robust decisions.

A decision that only works in the base case is a forecast bet.

Sometimes a forecast bet is necessary.

At least name it.

Capacity planning also needs a trigger system.

When do we buy more?

When do we reserve more?

When do we move workloads?

When do we pause lower-priority jobs?

When do we start an efficiency project?

Waiting until the fleet is full is too late if new capacity has a six-month lead time.

Buying everything the first time utilization rises is too early.

Triggers connect current measurements to future actions.

For example:

If the four-week peak queue exceeds the service objective and no scheduled optimization closes the gap, begin the next capacity tranche.

If inference headroom falls below the burst threshold for three consecutive weeks, add committed capacity.

If forecasted rack power exceeds the expansion envelope before new electrical capacity arrives, shift the hardware mix or delay deployments.

The exact trigger is less important than making the decision rule explicit.

Explicit rules reduce panic purchasing.

They also make assumptions reviewable.

The most dangerous capacity plan is the one that has only one output number.

“We need 12,000 GPUs.”

Why?

For what workload?

At what service level?

At what utilization?

With what model?

At what context distribution?

On what topology?

By what date?

With what burst strategy?

Assuming which efficiency improvements?

What happens if demand is thirty percent lower?

What happens if it is fifty percent higher?

The number without the model is not a plan.

It is a purchase request.

There is one final fantasy to avoid: the belief that enough capacity can eliminate prioritization.

Demand can always expand beyond supply.

If compute becomes abundant, users find more things to compute.

That is often good. It is how cheaper intelligence creates new products and research.

But it means allocation never fully disappears.

At some point there will still be a scarce resource.

The newest accelerators.

The fastest network.

The lowest-latency region.

The largest power block.

The shortest deadline.

The most experienced engineering team.

Capacity planning does not abolish scarcity.

It decides which scarcity the organization is willing to live with.

That is the mature framing.

Do not ask how many GPUs the company needs.

Ask what useful work the company expects, what constraints that work has, which resources will limit it, how uncertain the forecast is, and what options exist when reality differs.

Then buy, rent, optimize, and schedule accordingly.

A good capacity plan is not one that predicts the future perfectly.

It is one that lets the organization be surprised without becoming helpless.

Running on full requires a plan for the moment full arrives.