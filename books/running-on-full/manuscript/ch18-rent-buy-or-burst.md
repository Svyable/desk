# Rent, Buy, or Burst

The cheapest GPU hour can be the most expensive way to finish a job.

That is because nobody actually buys GPU hours.

They buy completed work.

The hourly price is only one term in the equation.

The rest includes queueing, utilization, interruption, startup time, data movement, engineering labor, reserved capacity that sits idle, jobs that fail, hardware that ages, and demand that arrives at the wrong moment.

Rent, buy, or burst is therefore not a procurement question.

It is a workload-shape question expressed through finance.

The first mistake is comparing owned hardware with rented hardware using list price alone.

Owned hardware has a capital cost.

Rented hardware has a usage price.

That makes the spreadsheet look simple.

Divide purchase price by expected hours.

Compare with cloud rate.

Choose the lower number.

The arithmetic can be correct and the decision still wrong because expected hours are not the same as useful hours.

An owned accelerator can be available twenty-four hours a day and produce useful work for eight.

A rented accelerator can be billed for ten hours while the job produces useful work for nine.

A spot accelerator can be billed cheaply for five hours, get interrupted, restart from an old checkpoint, and require eight more hours later.

The unit that matters is cost per completed useful job under the reliability and timing constraints the workload actually has.

This book has spent seventeen chapters making that sentence unavoidable.

Utilization belongs in procurement.

Checkpointing belongs in procurement.

Scheduling belongs in procurement.

Power belongs in procurement.

Data placement belongs in procurement.

The finance model is downstream of the system design.

Buying capacity makes the most sense when demand is durable, predictable, and high enough that the hardware will be productively occupied over its economic life.

The stronger the utilization confidence, the more attractive ownership can become.

But ownership also purchases risk.

You choose the accelerator generation.

You choose when to refresh.

You absorb underutilization.

You absorb maintenance and failure.

You provision power, cooling, network, space, and people.

You own the mismatch between the hardware you bought and the workload you later discover you have.

That mismatch can be expensive.

A fleet optimized for huge synchronized training jobs may be awkward for fragmented latency-sensitive inference.

A fleet with excellent local interconnect may sit idle because the company's work moved toward smaller models and bursty traffic.

A cluster bought for one research program may become stranded when the program changes architecture.

Ownership converts variable spending into fixed commitment.

That is good when the commitment matches reality.

It is bad when reality moves.

Renting does the opposite.

The price per hour may be higher.

The commitment is lower.

You can acquire capacity for a project, release it afterward, switch hardware generations more easily, operate in multiple regions, or scale with demand rather than with last year's forecast.

You pay for optionality.

Optionality has value when uncertainty is high.

This is why early-stage workloads often rent even when a theoretical long-run cost model favors ownership.

The team does not yet know what to own.

The premium buys time to learn.

This is one of the most important ideas in infrastructure finance: uncertainty changes the value of flexibility.

A decision that is more expensive per unit can be cheaper overall if it prevents a large irreversible mistake.

The same is true of reserved cloud capacity.

Long commitments can reduce unit price.

They also reduce optionality.

A reservation for the wrong instance type is a discounted mistake.

A reservation for a stable production fleet is disciplined purchasing.

The difference is forecast confidence.

How certain are you about the workload shape, hardware fit, region, and duration?

The lower the certainty, the more carefully you should price the value of escape.

Bursting is the hybrid answer.

Own or reserve enough capacity for the predictable base.

Rent extra capacity when demand exceeds it.

This sounds ideal because it combines cheap baseline capacity with elastic peaks.

It also creates integration problems.

The burst environment needs the right software.

The model artifacts need to be available.

The data needs to be reachable.

Security and identity need to work.

Networking needs to scale.

The scheduler needs to know two kinds of capacity exist.

Checkpoints may need to move between environments.

Observability needs to stay coherent.

The fallback cannot be theoretical.

Burst capacity is only capacity if the workload can actually enter it.

Many disaster-recovery plans fail the same way.

A resource exists on paper.

The path to use it has never been exercised.

A cloud account with quota is not a burst strategy.

A tested workload path is.

This is another case where drills create capacity.

A team should periodically prove it can launch meaningful work outside the primary fleet, restore state, access data, and complete the job. Otherwise the supposed flexibility is an option with an unknown strike mechanism.

Interruptible capacity adds a more interesting trade.

Spot or preemptible resources can be materially cheaper because the provider retains the right to reclaim them.

The discount is payment for accepting reliability risk.

Whether that discount is valuable depends on the workload's recovery architecture.

A batch job with frequent checkpoints and cheap restart can tolerate interruption.

A tightly synchronized job that loses the entire gang when one worker disappears may experience a small interruption probability as a large effective tax.

An interactive inference service can use interruptible replicas if it has enough stable baseline capacity and can drain or replace instances gracefully.

A single critical service with no redundancy probably should not treat reclaimed hardware as a surprise.

The same market product can be cheap for one workload and expensive for another.

The sticker price is identical.

The software changes the effective price.

This is why Chapter 14 called checkpointing procurement leverage.

If a job can resume from five minutes ago, an interruption costs about five minutes of lost progress plus restart time, not the entire run.

If the checkpoint takes forty minutes to reload, that forty minutes belongs in the spot discount calculation.

If interruptions repeatedly occur before the job reaches its next checkpoint, the workload can thrash.

If capacity disappears for hours, restartability is not enough; the deadline may still be missed.

Reliability tolerance has at least three parts:

How much work can you lose?

How quickly can you restart?

How long can you wait for replacement capacity?

Those are economic variables.

They belong in the purchasing model.

Queueing is another hidden cost.

A low-priced capacity product that makes a job wait six hours can be ideal for overnight batch work and useless for an urgent experiment.

Cloud providers increasingly expose products that make this trade explicit: workloads can request flexible or scheduled capacity rather than immediate on-demand resources.

The product is selling time flexibility.

If your job has a deadline but not an immediate start requirement, waiting can be worth money.

This creates a simple principle:

A flexible start time is a financial asset.

Teams often throw it away by marking every job urgent.

If everything needs to start now, the infrastructure must maintain expensive idle headroom or buy expensive immediate capacity.

If some jobs can start tonight, tomorrow morning, or whenever a suitable block becomes available, the scheduler can match them to cheaper supply.

The workload's patience becomes bargaining power.

This is exactly like power scheduling in the previous chapter.

Time is a resource dimension.

Flexibility in time can substitute for flexibility in price.

The reverse is also true.

A hard deadline can justify expensive capacity.

If a training run must finish before a product launch, the cost of missing the deadline may dwarf the difference between reserved and on-demand hardware.

Infrastructure finance should include the value of time.

A one-week delay is not free merely because the GPUs cost less.

Research velocity has economic value.

Product latency has economic value.

Engineer waiting has economic value.

The cheapest compute is not cheap if it makes the organization slow.

This is difficult to model because the cost is indirect.

A team waiting for an experiment may start other work, so not every delay becomes lost productivity. But repeated capacity scarcity can elongate research loops, reduce the number of ideas tested, and create incentives to run larger speculative jobs “while we have the GPUs.” Scarcity changes behavior.

Abundance changes behavior too.

Cheap elastic capacity can encourage waste.

When a developer can launch hundreds of accelerators with one command, the cloud bill can become a delayed observability system.

The machine was easy to rent.

Useful work was not automatically easy to produce.

This is why cloud elasticity needs admission control just as owned clusters do.

A limitless-looking API still has a budget.

The scheduler should know which jobs deserve immediate expensive capacity and which should wait.

Without that policy, elasticity simply converts queueing into spending.

There is a mirror-image failure with owned clusters.

Because the hardware is “already paid for,” teams can treat incremental usage as free.

It is not.

An idle owned GPU has a sunk capital cost, but a busy owned GPU also has an opportunity cost if another job could use it. It consumes power. It creates wear. It occupies network and scheduler capacity. It can block higher-value work.

Zero marginal cloud bill does not mean zero economic cost.

A scheduler needs priorities even when finance has already written the check.

This is why internal transfer pricing can be useful.

Not because every team needs a fake invoice.

Because a price signal can make scarcity visible.

If accelerators are allocated with no cost or priority signal, demand tends to exceed supply and users have little incentive to release reservations, right-size jobs, or improve efficiency.

If the internal price is too literal, teams may underuse valuable shared infrastructure or optimize accounting instead of research.

The purpose is behavioral information.

This resource is scarce.

Your job has a cost.

Someone else is waiting.

Price is one way to encode that.

Queue time is another, less honest one.

Cloud versus owned infrastructure also changes how utilization is measured.

In the cloud, unused rented time is visible on a bill.

On owned hardware, unused time can disappear into depreciation.

The economic loss is still real.

This creates a temptation to prefer cloud because its waste is more measurable or prefer ownership because its waste is less visible.

Visibility is not economics.

Normalize both to completed useful work.

For owned hardware, include capital amortization, facility and operational costs, and realistic utilization.

For rented hardware, include runtime, attached services, data movement, storage, reserved commitments, and interruption or queueing costs.

For both, include engineering complexity when it meaningfully differs.

The model will never be perfect.

It only needs to be honest enough to prevent a false precision comparison.

Hardware obsolescence is another ownership variable.

AI accelerators improve quickly, but “old” hardware does not become useless on a calendar date. Its value depends on the workload.

A previous-generation GPU can be unattractive for frontier training and excellent for smaller inference models, embeddings, fine-tuning, evaluation, or batch work.

The useful life of hardware can be extended by workload routing.

Do not ask whether the GPU is old.

Ask whether it is the cheapest resource that satisfies the job.

This is model routing applied to hardware.

Easy work should not automatically land on the newest accelerator.

A heterogeneous fleet can be more efficient if the scheduler understands capability.

It can also become an operational mess if every hardware generation requires a different software stack and jobs cannot move easily.

Heterogeneity saves money by matching work to machines.

Standardization saves money by reducing complexity.

Again, there is no free optimization.

The right answer depends on scale and software maturity.

Burst economics also changes with data gravity.

Moving a job is easy if the model and data are already available in the burst environment.

It is harder if petabytes of training data live elsewhere, regulatory rules restrict movement, or checkpoints take hours to copy.

Compute is elastic only to the degree the rest of the workload is portable.

This is why data architecture is part of procurement.

A dataset trapped beside one cluster reduces the value of outside capacity.

A portable artifact format increases it.

An image that can run on multiple clouds increases it.

A checkpoint that can resume on a different parallelism layout increases it.

Portability is optionality encoded in software.

Optionality has a price.

The same principle applies to model serving.

A service that can run efficiently on several accelerator types has negotiating leverage.

A service tuned to one scarce SKU may have great performance and weak purchasing flexibility.

Specialization creates efficiency and dependency at the same time.

The cost model should acknowledge both.

A mature compute portfolio therefore looks less like one procurement decision and more like an asset allocation.

Stable inference base load may belong on committed capacity.

Unpredictable product growth may need elasticity.

Research experiments may use on-demand capacity because their hardware needs change.

Fault-tolerant batch jobs may chase interruptible discounts.

Urgent launches may pay for guaranteed blocks.

Old owned hardware may absorb background work.

Specialized accelerators may serve workloads where they have a decisive fit.

The portfolio is built around workload classes.

That is more robust than declaring cloud or on-prem universally cheaper.

Universal answers are usually marketing positions disguised as infrastructure strategy.

The publication version of this chapter needs one final warning about forecasts.

Every buy-versus-rent spreadsheet is most sensitive to the assumptions the author feels least certain about.

Utilization.

Growth.

Hardware life.

Cloud price.

Power cost.

Staffing.

Interruption rate.

Resale value.

Model architecture.

Demand distribution.

The neatest spreadsheet cell is often an uncertain future.

Treat it accordingly.

Use scenarios.

What happens if demand is half the forecast?

What happens if it doubles?

What happens if the model becomes four times cheaper to serve?

What happens if the next hardware generation arrives earlier than expected?

What happens if the cloud discount changes?

What happens if a facility expansion is delayed?

What happens if a product needs a new region?

A strategy that wins only under one narrow forecast is fragile.

The most valuable option may be the ability to change your mind.

This is the heart of rent, buy, or burst.

Do not optimize the purchase price of compute.

Optimize the system's ability to turn uncertain future demand into completed useful work at acceptable cost.

Own when conviction and utilization are high.

Rent when flexibility is valuable.

Burst when the base is predictable and the peaks are not.

Use interruptible capacity when recovery makes interruption cheap.

Pay for immediacy when time is genuinely valuable.

Wait when patience is cheaper than hardware.

And keep measuring, because the answer can change as the workload changes.

Running on full is not a property of who owns the GPU.

It is a property of whether the GPU, however acquired, finishes enough valuable work to justify the way you acquired it.