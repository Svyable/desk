# Fragmentation

A fleet can have enough free compute to run a job and still be unable to run the job.

This is one of the most expensive sentences in infrastructure.

The capacity exists.

It is simply in the wrong pieces.

Fragmentation is what happens when a resource is available in aggregate but unusable in the shape the next workload requires. It appears in memory, in accelerator fleets, in network topology, in model placement, in reservations, and in time. It is the difference between owning enough and being able to assemble enough at the moment the work arrives.

Computer science has been fighting versions of this problem for as long as computers have allocated memory.

A process asks for a contiguous block. The system has plenty of free bytes, but the free bytes are scattered between occupied regions. The total is sufficient. The layout is not.

AI infrastructure turns that old problem into a data-center problem.

Suppose a cluster has sixteen idle accelerators.

A training job needs eight.

At first glance the job should start immediately.

Then the scheduler discovers that the idle devices are distributed one per host across sixteen hosts while the job needs eight devices with high-bandwidth local connectivity. Or the eight suitable devices exist but four have smaller memory. Or the right devices are free but divided across organizational reservations the scheduler is not allowed to cross. Or each accelerator has some spare capacity, but no single one has enough memory for another model replica.

Sixteen idle devices can behave like zero.

That is fragmentation.

The important thing about fragmentation is that it often looks like underutilization from the outside and full utilization from the inside.

Each allocation decision can be locally reasonable.

One team reserves four accelerators because its service cannot tolerate waiting.

Another model occupies forty percent of a device's memory but cannot share because the runtime assumes exclusive ownership.

A third workload uses six of eight devices in a server because its parallelism configuration happens to require six.

A fourth job needs eight contiguous devices and cannot start.

Nobody made an obviously irrational choice.

The fleet still strands capacity.

This is why packing matters.

Packing is the attempt to arrange workloads so the leftover space remains useful.

The analogy to loading a truck is almost too literal. If every box is placed without regard to the next box, the truck can become impossible to fill even though empty volume remains. An experienced loader thinks about shapes, not merely total cubic feet.

AI schedulers have to think about shapes too.

A workload shape can include device count, memory footprint, topology, model residency, expected duration, priority, host requirements, network demand, and preemption tolerance.

The more dimensions, the easier it is to create unusable leftovers.

GPU memory is one of the first places operators encounter this.

A model may consume most of a device but leave several gigabytes unused. That remainder can be too small for another replica. KV-cache allocations can fill the residual space in serving systems, but only if the serving engine can make use of it dynamically. Framework buffers, temporary allocations, memory pools, and fragmentation inside the allocator can leave capacity that exists numerically but cannot be safely committed to new work.

PagedAttention addressed one version of this problem in language-model serving by managing KV cache in blocks rather than requiring large contiguous allocations tied rigidly to maximum sequence sizes. The result was not merely tidier memory management. More of the device's memory became usable for active requests.

That distinction is central.

Efficiency is not only reducing how much resource a task requires.

It is increasing how much of the resource pool remains allocatable.

The same idea motivates hardware partitioning.

NVIDIA's Multi-Instance GPU can divide certain physical GPUs into isolated instances. For workloads too small to justify an entire accelerator, partitioning can turn one oversized device into several appropriately sized resources. Separate services receive dedicated slices instead of each monopolizing a whole machine.

This can reduce fragmentation.

It can also create a new kind.

A rigid partition cannot instantly lend unused capacity to its neighbor. Two lightly loaded slices can coexist while a workload needing a larger slice waits. Reconfiguration has operational cost. A partition sized for yesterday's traffic may be awkward for today's.

Partitioning changes the shape of the box.

It does not abolish packing.

This is why fixed reservations deserve suspicion.

Reservations are often created for good reasons. A production service needs guaranteed capacity. A research team needs predictable access. A customer contract promises a service level. A safety-critical path needs headroom that should not disappear because another team launched an experiment.

The problem arrives when guarantees become walls.

A reserved pool can sit idle while another pool queues. The company has spare hardware but no permitted path for borrowing it. Capacity accounting says the fleet is underused. Organizational accounting says every accelerator is spoken for.

The machine does not care which spreadsheet owns it.

This is organizational fragmentation.

Mature systems try to distinguish a guarantee from exclusive permanent occupancy.

A team may need the right to reclaim capacity quickly rather than the right to keep it idle forever. Background jobs may be allowed to borrow reserved headroom if they can yield. Internal markets or quota systems can make opportunity cost visible. Shared pools can absorb variation better than many tiny pools, provided isolation and priority are strong enough that teams trust the arrangement.

Trust is part of utilization.

If engineers do not believe borrowed capacity will be returned when needed, they will resist sharing. If teams do not believe the scheduler honors priority, they will over-reserve. If a production incident once occurred because a batch job refused to yield, the organization may respond by creating permanent walls that waste far more capacity over the following year.

One reliability failure can harden into structural fragmentation.

This is why preemption quality matters so much.

The easier a low-priority workload is to pause, migrate, or terminate safely, the more aggressively spare capacity can be shared. The harder it is, the more headroom must remain untouched.

Checkpointing is therefore not merely a reliability technique.

It is a defragmentation tool across time.

A job that can resume cheaply can be moved into whatever windows of capacity become available. A job that loses hours of progress when interrupted behaves like a rigid block in the schedule. It must be protected until completion or the organization must accept repeated waste.

We will return to checkpointing later. For now, notice the pattern.

Flexibility makes capacity composable.

Rigid work fragments it.

Model residency creates another form of fragmentation.

A device with enough free arithmetic and memory may still be effectively unavailable because the model required by the next request is not loaded. Loading a large model costs time and memory bandwidth. Swapping models constantly can erase the advantage of having nominal spare capacity.

A multi-model serving fleet can therefore fragment by model.

One pool is full of requests for Model A.

Another pool has idle devices holding Model B.

The devices are physically interchangeable but operationally sticky because state has mass.

The obvious response is to load both models everywhere.

Memory says no.

Or to move requests to the devices already holding the correct model.

Network and queueing may say no.

Or to swap models dynamically.

Latency may say no.

There is no universal answer because the correct amount of specialization depends on traffic concentration.

A high-volume model deserves dedicated replicas because its traffic can keep them busy.

A long tail of rarely used models may benefit from shared infrastructure that loads on demand.

Between those extremes lies a scheduling problem whose main enemy is stranded state.

This is one reason right-sizing model portfolios can improve fleet utilization even before token cost is considered.

Every additional model family creates another possible island of resident state.

Specialization saves compute when traffic is concentrated enough.

Excessive specialization fragments capacity when it is not.

Network topology can create even stranger fragments.

Imagine a cluster where the total number of free accelerators is large, but the only free devices sit behind slow links relative to one another. A distributed job requiring heavy collective communication may technically fit and perform terribly. From a scheduler's point of view, topology-aware placement can make those scattered free devices unusable for that job even though they remain perfectly useful for independent inference replicas.

Capacity is workload-relative.

The same eight devices can be a coherent machine for one workload and eight separate islands for another.

This is why counting accelerators is such a crude capacity metric.

You need to know how they can be assembled.

Power adds another dimension.

A data center can have empty rack slots and available accelerators but insufficient electrical headroom to run them all at maximum power simultaneously. Now the fragment is not a device. It is a watt budget. Some machines can run. Others must be capped, delayed, or moved.

Cooling can impose similar constraints.

The fleet becomes a set of devices whose usable capacity depends on where power and thermal headroom remain.

As AI infrastructure grows, the resource vector grows with it.

Accelerators.

Memory.

Network.

CPU.

Storage.

Power.

Cooling.

Model state.

Time.

Priority.

A scheduler trying to optimize one dimension can fragment another.

This sounds like a reason to seek a global optimizer that computes the perfect placement.

Be careful.

The perfect placement for current work can be terrible for the next arrival.

A scheduler that packs the cluster to one hundred percent with today's small jobs can leave no contiguous block for an urgent large job arriving five minutes later. A scheduler that preserves large empty islands for possible future work can lower current utilization.

Defragmentation requires a view of the future that no scheduler fully possesses.

This is why headroom can again be rational.

Empty capacity in the right shape has option value.

A contiguous eight-device block can be more valuable than eight isolated free devices. Free memory on a device already serving a popular model can be more valuable than the same free memory on a cold device. One unused megawatt near the correct racks can be more valuable than a megawatt stranded elsewhere.

Not all idle capacity is equally idle.

A good capacity dashboard should make this visible.

Instead of reporting only total free devices, report allocatable shapes.

How many one-device jobs can start?

How many eight-device jobs?

How many high-memory jobs?

How many within one high-bandwidth domain?

How much free memory exists in chunks large enough to admit another sequence?

How much of the fleet is reserved but idle?

How much can be reclaimed within one minute, ten minutes, one hour?

These questions turn fragmentation from a vague feeling into an operational measure.

The same approach works at smaller scale.

A startup with four GPUs can fragment itself by assigning one permanently to each service even though traffic varies independently. A single workstation can fragment memory by loading too many models simultaneously. A developer can fragment cloud spend by leaving several underused instances alive because each runs one small job that feels inconvenient to consolidate.

Fragmentation is not a hyperscaler disease.

It begins whenever capacity is divided into pieces that cannot be recombined cheaply.

There are only a few ways out.

Make workloads smaller.

Make resources more shareable.

Make work more movable.

Make state cheaper to move.

Make reservations borrowable.

Make scheduling topology-aware.

Standardize workload shapes where doing so does not harm the product.

Or buy enough excess capacity that fragmentation stops mattering.

The last option works.

It is also how inefficiency becomes capex.

The goal is not to eliminate every fragment. Perfect packing is impossible in a live system with uncertain arrivals, variable durations, failures, and service guarantees. Some unusable remainder is the price of flexibility.

The goal is to recognize when the remainder has become large enough that the company is buying hardware to hold empty space.

A fleet can be full of holes.

Running on full means keeping those holes useful enough that the next important job can still fit.