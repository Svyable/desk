# Power Is Capacity

A rack can have empty slots and no room for another GPU.

The missing space is electrical.

This is one of the least intuitive constraints in modern AI infrastructure because the machine still looks physically available. There may be floor space. There may be network ports. There may even be accelerators already installed and sitting idle.

The limiting resource is the number of watts the system can safely deliver and remove as heat.

Power is capacity.

Not metaphorically.

Operationally.

An accelerator that cannot be powered at the level required by its workload is not fully available compute. A rack whose power envelope is exhausted cannot admit another high-draw job even if scheduler inventory says devices are free. A cluster that repeatedly hits facility or rack limits can own more silicon than it can use simultaneously.

This turns a physical infrastructure constraint into a scheduling problem.

The naive version of capacity planning counts GPUs.

The better version counts the combination of GPUs, memory, network, power, cooling, and workload shape that can operate at once.

A machine room is a set of coupled budgets.

Power is one of the hardest because it is both instantaneous and shared.

A model can fit in memory.

A job can fit on the network.

Every requested accelerator can be available.

The workload still may not fit inside the electrical envelope when all devices draw heavily at the same time.

This is why peak device power and average device power are different planning concepts.

A fleet rarely runs every accelerator at its maximum possible draw every second.

But a power system cannot be designed as if simultaneous peaks are impossible unless the operator has a mechanism to prevent them.

That mechanism can be hardware protection.

It can also be software policy.

Modern datacenter GPU tooling exposes power limits precisely because power draw is controllable within a supported envelope. A device can be told to operate under a lower ceiling. When the workload would otherwise exceed that ceiling, clocks or other operating behavior can be constrained to stay within it.

The important point is not the command used to set the limit.

It is that performance and power are coupled but not identical.

The last watts can be disproportionately expensive.

A GPU driven from a moderate power level toward its maximum may gain less performance than the additional power percentage suggests. The exact curve depends on device, workload, clocks, thermals, and software. There is no universal ratio.

But the existence of a curve creates an economic choice.

Would you rather run fewer devices at the highest possible power or more devices at a slightly lower power?

The answer depends on the workload.

A tightly synchronized training job may prefer higher per-device performance if slowing each worker stretches the critical path and creates more exposure to failures. A throughput-oriented batch workload may prefer more total devices operating in an efficient region. An interactive serving fleet may need enough headroom to absorb bursts even if average power is lower.

Power optimization begins with the product objective, not the wattmeter.

The wrong question is:

How do we minimize power?

The better question is:

How much useful work do we complete per unit of constrained power while satisfying latency, quality, and reliability?

That is the same move this book has made with every other resource.

Memory is not good by itself.

Network bandwidth is not good by itself.

GPU activity is not good by itself.

Low power draw is not good by itself.

A system that saves ten percent of power by taking twenty percent longer may be worse if time-to-result matters.

A system that uses ten percent more power to finish thirty percent sooner may be better, assuming the facility can supply it.

The denominator has to include the actual constraint.

There are three different power problems that teams often confuse.

The first is device efficiency.

How much useful work does one accelerator perform for the watts it consumes?

The second is infrastructure capacity.

How many accelerators can the rack, row, or facility operate at once?

The third is energy economics.

How much does the consumed energy cost, when is it available, and what contractual or grid constraints matter?

These problems overlap but they are not interchangeable.

A device can be energy-efficient while the facility is power-constrained.

A facility can have ample power while electricity prices make certain hours expensive.

A workload can be extremely efficient per token and still fail to run because its synchronized peak exceeds a local electrical limit.

Operational decisions need to know which problem they are solving.

Power caps are one lever.

Scheduling is another.

Suppose a rack contains several large training jobs and several inference services. The training jobs draw heavily and steadily. The inference services are burstier. If the scheduler ignores power, it can place too many high-draw workloads together and leave another rack underused electrically.

The GPUs are balanced.

The watts are not.

A power-aware scheduler can treat electrical headroom as another resource dimension.

Do not place only by device count.

Place by the combination of device availability and expected power behavior.

This sounds obvious once stated, but most resource abstractions begin with countable objects because countable objects are easy.

Eight GPUs.

Four CPUs.

Two terabytes of memory.

Power is less tidy because consumption changes with workload.

The scheduler is asked to allocate a resource whose future demand is uncertain.

That is a forecasting problem.

Forecasting introduces risk.

If the scheduler assumes average draw and every job peaks at once, protection systems may throttle hardware or force more dramatic responses.

If the scheduler assumes every job will draw maximum power continuously, the cluster can strand enormous electrical capacity.

The operator is choosing a confidence level.

This is analogous to network oversubscription and cloud overcommit.

Shared capacity can be allocated statistically when workloads do not peak together, but the system must know what happens when the assumption fails.

Do jobs slow down gracefully?

Are power limits reduced dynamically?

Is new work paused?

Are lower-priority jobs preempted?

Does the facility have enough reserve?

A safe overcommit strategy requires a degradation plan.

Without one, overcommit is simply optimism with a circuit breaker.

Power smoothing introduces another layer.

Large fleets can create rapid changes in demand when synchronized workloads enter or leave high-compute phases together. One GPU changing state is insignificant. Thousands changing together can create a meaningful facility event.

This is one reason power management exists above the device level.

The workload is distributed.

The electrical system sees the aggregate.

Software that coordinates power behavior can therefore create capacity that no single-device tuning exercise can see.

The same idea appears in job starts.

Starting a large distributed run all at once can create a cold-cache storm, a network storm, a storage storm, and a power ramp at the same time.

A staged start may take slightly longer to reach full execution while reducing stress on the supporting systems.

The first seconds of a job are part of capacity planning too.

Thermal behavior complicates the story further.

Power becomes heat.

Cooling systems must move that heat away.

If cooling cannot keep up, hardware may reduce performance or the operator may need to lower power density. Two rooms with the same electrical supply can therefore have different usable compute capacity because one can remove more heat.

This is why “megawatts available” is still not the full capacity number.

The number that matters is sustainable power at acceptable operating conditions.

Sustainable is the key word.

A benchmark can run for minutes.

A training program can run for months.

A serving fleet can run indefinitely.

Short bursts can exploit thermal and electrical headroom that steady-state operations cannot.

Publication claims about performance should therefore distinguish burst behavior from sustained behavior.

The device that reaches a spectacular rate for sixty seconds may not maintain it inside a dense rack for six hours.

The fleet is the real test bench.

Power also changes how we think about hardware generations.

A new accelerator may offer more performance per device.

If it also draws more power, the operator may not be able to replace old devices one-for-one inside the same rack or facility envelope.

A generation upgrade can increase per-GPU capability while reducing the number of GPUs the building can support at full power.

That does not mean the upgrade is bad.

It means device-count comparisons are incomplete.

The relevant question is useful work per rack, per megawatt, per dollar, or per constrained unit that actually limits deployment.

A faster chip in a power-limited datacenter competes with a different number of slower chips than a simple one-for-one benchmark implies.

This is one reason infrastructure refreshes can become construction projects.

The accelerator changed.

The power distribution changed.

The cooling density changed.

The network requirements changed.

The physical plant suddenly belongs in the model roadmap.

Software teams often discover this late because software treats hardware as an API.

Datacenters do not.

They treat hardware as heat, current, mass, airflow, cabling, failure modes, and maintenance access.

A complete compute strategy eventually collides with physics.

There is a software escape hatch: use less compute for the same task.

Everything from earlier chapters returns here.

A smaller model can reduce power.

Quantization can reduce work and memory traffic.

Better batching can increase useful output from the same electrical envelope.

Prefix caching can avoid repeated prefill.

Speculative decoding can reduce latency in the right workload.

Better scheduling can avoid idle devices that still consume baseline power.

Model architecture can reduce active parameters or communication.

The cheapest watt is often the one attached to work you no longer need to perform.

This is why power efficiency is not only a hardware problem.

A software optimization that cuts the required accelerator fleet by twenty percent is a power optimization even if the power draw of each remaining GPU does not change.

The facility sees total load.

Useful work is the bridge between software and electricity.

There is also a subtle danger in power capping.

Lowering a device power limit can improve energy efficiency while harming cluster efficiency.

Suppose each training step becomes slightly slower.

The job now occupies the network for longer.

It holds scheduler reservations longer.

It increases the window for a failure.

It delays the next experiment.

It may require more wall-clock time during an expensive energy period.

The local watt saving creates system-level costs.

Optimization boundaries matter.

The same caution applies to dynamic power policies.

If different workers in a synchronized job are capped differently, the slowest worker can determine the step time. Saving power on one device may create idle time on every other device waiting at a barrier.

In synchronized systems, power policy needs performance symmetry unless the framework can compensate.

Otherwise the cheapest GPU can become the most expensive one in the cluster.

A straggler consumes everyone else's time.

This is the same lesson as pipeline balance.

Distributed systems convert individual variance into collective waiting.

The best power policy may therefore be job-aware rather than device-aware.

What does this training job need?

What does this inference pool need?

Which workload has slack?

Which deadline is hard?

Which job is power-efficient at lower clocks?

Which one falls off a performance cliff?

Which service can temporarily shed capacity?

Which batch job can move to another hour?

Power becomes a scheduling language.

The cluster can trade watts across workloads just as it trades GPUs.

This matters even more when electricity availability or price changes over time.

A flexible batch workload can be delayed.

A training job can sometimes be shaped around a capacity window.

An interactive service cannot disappear at 6 p.m. because power is expensive.

Different products have different temporal flexibility.

That flexibility has economic value.

A scheduler that understands deadlines can transform time into power capacity.

If a job only needs to finish by morning, it may be able to use lower-power settings for longer, run when other demand falls, or wait for capacity that would otherwise sit idle.

The deadline is part of the resource request.

This is a larger principle.

AI workloads have more dimensions of flexibility than infrastructure interfaces usually expose.

A job may be flexible in start time.

It may be flexible in model size.

It may be flexible in precision.

It may be flexible in latency.

It may be flexible in region.

It may be flexible in power.

Each kind of flexibility can be converted into lower cost or higher utilization.

Rigid workloads are expensive because the infrastructure must satisfy all constraints at once.

This is why a powerful scheduler asks not only what a job needs, but what it can tolerate.

Can it wait?

Can it restart?

Can it run more slowly?

Can it use different hardware?

Can it use fewer devices for longer?

Can it use more devices briefly?

Capacity is created by optionality.

Power makes that visible because the physical limit is so unforgiving.

You cannot negotiate with a rack beyond its safe envelope.

You can only decide which work gets the watts.

That is the final operational point.

Power is not a utility bill that arrives after compute happens.

Power is an admission constraint that determines which compute can happen at all.

Treat it as a first-class resource.

Measure useful work per watt when power is scarce.

Measure useful work per second when time is scarce.

Measure useful work per dollar when money is scarce.

And remember that the scarce resource can change from hour to hour.

Running on full is not driving every component to its maximum.

It is using the limiting resource so well that adding more of some non-limiting resource would not help.

In a power-constrained datacenter, the limiting resource is electricity.

The GPU count is just how the electricity learned to do matrix multiplication.