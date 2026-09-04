# The Network Is Part of the GPU

One accelerator can be fast by itself.

A thousand accelerators have to agree to be fast together.

That agreement travels over a network.

This is why distributed AI systems eventually discover that the network is not plumbing around the compute. It is part of the compute.

A model that fits comfortably on one device can often ignore this fact. The weights live locally. The activations live locally. The request enters, computation happens, the answer leaves.

Make the model larger than one device and the story changes.

Split a tensor across accelerators and intermediate results have to be exchanged. Split a training batch across replicas and gradients have to be combined. Split layers into pipeline stages and activations have to move from one stage to the next. Distribute experts in a mixture-of-experts model and tokens have to find the devices hosting the selected experts. Spread long context across devices and state has to move. Disaggregate prompt processing and generation and the two phases have to hand off enough state that the separation remains worthwhile.

The accelerator cannot calculate with data it has not received.

At small scale, communication is overhead.

At large scale, communication can become the architecture.

NVIDIA's NCCL exists because collective communication is so central to multi-GPU work. Operations such as all-reduce, all-gather, reduce-scatter, and broadcast sound like systems vocabulary because they are systems vocabulary. They are the motions by which a collection of accelerators turns separate local states into one distributed computation.

The name of the collective matters less to a product manager than the consequence.

Every time the model crosses a device boundary, the system pays something.

Bandwidth.

Latency.

Synchronization.

Power.

Memory for communication buffers.

And, often, idle accelerator time while the data is in flight.

A distributed system can therefore add GPUs and lose efficiency at the same time.

This is not a paradox.

It is the ordinary result of parallel work having coordination costs.

Suppose one accelerator completes a job in one hour.

Two accelerators do not automatically finish in thirty minutes because the work may not divide perfectly. Some operations remain serial. Some data must be exchanged. One accelerator may wait for the other. The model may not expose enough parallel work at that scale.

Add more devices and the arithmetic available increases.

So does the number of boundaries across which state can move.

At some point the marginal accelerator contributes less useful progress because communication and synchronization consume a larger share of the step.

This is why scaling efficiency matters more than raw scale.

A training job that uses twice as many GPUs to finish only twenty percent faster may still be rational if time-to-result is extremely valuable. It may be economically foolish if the job is flexible and accelerator-hours are scarce.

The objective decides whether poor scaling is acceptable.

Again, there is no efficiency without a product constraint.

Network topology determines how bad the communication tax becomes.

Not all links are equal.

Accelerators inside one server may communicate over high-bandwidth local interconnects. Servers within a rack or fabric domain may have fast paths between them. Cross-rack or cross-cluster communication can be slower, more contended, or higher latency. The physical arrangement of devices therefore matters to software that otherwise sees a list of identical GPUs.

The scheduler that places a communication-heavy job without understanding topology can turn excellent hardware into an accidental distributed-systems experiment.

This is why topology-aware collectives and placement matter.

If a tensor-parallel group communicates constantly, keeping those devices on the fastest available fabric can matter more than giving the job nominally newer accelerators scattered across a slower topology. If data-parallel replicas communicate less frequently, they may tolerate a broader placement. If pipeline stages exchange large activations at predictable boundaries, the topology between adjacent stages matters disproportionately.

The job's communication pattern should fit the network's shape.

This is one of the quiet reasons AI cluster design is not simply buying as many accelerators as possible.

The accelerators create demand for a network capable of making them one machine when the software needs one machine.

A weak network can strand strong compute.

The same is true inside inference systems.

A large model may require tensor or pipeline parallelism merely to fit or meet latency. The first accelerator performs work and then waits for state from another. A high-throughput serving system may distribute requests across hosts, fetch remote cache state, or coordinate model shards. A routing layer may move work between pools. Storage and retrieval systems may feed long documents over the network before inference even begins.

The user experiences the sum.

No one tells the user, "The GPU was fast; the network was slow."

The answer was slow.

The important distinction is between communication volume and communication frequency.

A workload can send a great deal of data in large efficient transfers and perform well if the network has enough bandwidth. Another can send small pieces frequently and become sensitive to latency. Collective operations can create synchronized phases where every worker needs enough peers to complete before progress continues.

This is why bandwidth numbers alone can mislead.

A network can advertise enormous aggregate throughput and still perform poorly for a workload whose critical path depends on many small synchronization steps.

The accelerator does not care how impressive the link looks in a brochure.

It cares whether the next data arrives before the compute pipeline empties.

Communication can sometimes be hidden.

If data transfer can overlap with useful computation, the system may pay less wall-clock cost than the raw transfer time suggests. Distributed training frameworks try to overlap gradient communication with backward computation. Data loaders try to prepare the next batch while the current one runs. Serving systems can overlap request handling, transfers, and computation where dependencies permit.

Overlap is one of the great tricks of high-performance systems because it converts waiting into parallel work.

It is not magic.

Dependencies limit what can overlap. The network and memory system still consume resources. Poorly scheduled transfers can contend with computation for bandwidth. A phase with nothing independent left to do must wait.

The goal is not to make communication disappear.

It is to move as much of it as possible off the critical path.

This suggests a useful way to read a distributed timeline.

Do not ask only how much time was spent computing and how much communicating.

Ask which communication made computation wait.

A transfer that occurs entirely behind useful arithmetic may be nearly free in wall-clock terms. A shorter transfer that blocks the next step can be the real bottleneck.

Critical-path thinking matters more than accounting categories.

The same principle applies to CPU-GPU transfers.

CUDA best-practice guidance has long emphasized minimizing unnecessary host-device transfers and overlapping data movement with computation where possible. AI workloads can still defeat themselves by repeatedly moving tensors between host and device, serializing preprocessing, or using a data path that forces the accelerator to wait for the CPU.

The host bus is a network too, just a short one.

The hierarchy continues outward.

On-chip memory to HBM.

GPU to GPU inside a server.

Server to server across a fabric.

Cluster to storage.

Region to region.

Every layer has a different bandwidth, latency, cost, and failure mode.

Efficient AI systems keep the most frequently needed state as close as economically possible to the computation that needs it.

This is locality again.

The previous chapter on caching framed locality through reuse.

The network frames locality through movement.

The same question appears from opposite directions: what data should remain near this compute because moving it again would be expensive?

Model placement is one answer.

Cache placement is another.

Data sharding is another.

Topology-aware scheduling is another.

All are attempts to make physical distance match computational relationships.

The price of getting this wrong grows with scale.

A single inefficient transfer may cost microseconds or milliseconds.

Repeat it across every layer, every token, every training step, every accelerator, for weeks, and it becomes a material share of the cluster.

Small communication inefficiencies scale beautifully in the wrong direction.

This is why adding devices can expose problems that did not matter at smaller scale.

A model trained on eight GPUs may show excellent utilization. Move it to sixty-four and the collective operations become more visible. Move to hundreds and network topology begins to determine step time. Move to thousands and small imbalances, stragglers, congestion, and retry behavior can dominate enough of the run that the cluster spends expensive periods synchronized around the slow path.

Distributed scaling is where the system reveals its least scalable dependency.

Sometimes that dependency is the network.

Sometimes the network is blamed for a software problem.

A poor parallelism strategy can create unnecessary communication. An imbalanced partition can send more data than needed. A model architecture can require frequent all-to-all exchanges. A scheduler can place peers badly. A framework can choose collectives that do not fit the topology. A tiny computation between synchronized communications can fail to amortize latency.

Buying a faster network helps.

Reducing communication helps more when the communication should not have existed.

This is the same hierarchy of optimization we have used throughout the book.

First remove unnecessary work.

Then make necessary work efficient.

Do not optimize the delivery of waste before asking why the waste is being delivered.

The network also changes failure behavior.

A local device failure is one event.

A distributed job introduces link failures, transient congestion, unreachable peers, timeouts, collective hangs, and the possibility that one unhealthy worker stalls many healthy ones. The larger the job, the more components must remain sufficiently healthy at the same time.

Reliability and performance converge.

A flaky network does not merely create occasional errors. It creates retries, stalls, restarts, and conservative timeouts that reduce useful throughput.

The fastest cluster on a perfect day can lose to a slightly slower cluster that completes more work without interruption.

This matters for capacity planning because nominal network bandwidth is not enough.

How much is available under contention?

How predictable is latency?

What happens during failure?

Can traffic be rerouted?

Do collectives recover or does the job restart?

Does one workload's communication interfere with another's?

How much headroom is needed to keep tail behavior acceptable?

The network needs an SLO because the product already has one.

There is a tendency in AI discussions to describe compute as if the GPU were the indivisible economic unit.

At single-device scale, that is often close enough.

At distributed scale, it is wrong.

The useful unit is a package of accelerator, memory, communication, host support, power, and software that can make progress together.

A thousand GPUs behind an inadequate fabric are not a thousand fully usable GPUs.

They are a thousand reasons to discover the fabric's limit.

This is why the phrase network is part of the GPU is more than metaphor.

The moment a model crosses devices, the boundary becomes part of every operation that depends on the other side.

The accelerator's effective performance now includes the time required to reach its peers.

The machine grew.

So did the definition of the machine.

Running on full means optimizing the system that actually computes, not the component whose logo is easiest to see.