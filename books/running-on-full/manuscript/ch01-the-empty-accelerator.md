# The Empty Accelerator

The easiest way to waste an accelerator is to leave it turned off.

The second-easiest way is harder to see.

Turn it on. Allocate the memory. Launch the process. Put a respectable utilization percentage on the dashboard. Then let the expensive part of the system spend its time waiting on everything around it.

This is the empty accelerator: not a machine with nothing loaded on it, but a machine whose apparent activity is not turning into enough useful work.

The distinction matters because modern monitoring can tell several true stories about the same device.

NVIDIA's data-center tooling, for example, exposes separate measures for broad GPU activity, streaming-multiprocessor activity, tensor-pipe activity, memory activity, occupancy, PCIe traffic, NVLink traffic, clocks, temperature, power, and errors. These are not redundant ways of asking whether the GPU is "busy." They describe different parts of the machine and different reasons a workload may be moving slowly.

An SM can have work assigned while that work is waiting on memory. Device memory can be busy while arithmetic units have room to do more. A network link can be the reason several GPUs cannot move faster. A process can have a large memory footprint while barely advancing. A machine can even execute a tremendous amount of arithmetic on work that should never have been requested.

All of those can look like utilization from far enough away.

This is why the first graph in an AI infrastructure meeting can be the most dangerous one.

A single percentage invites a single diagnosis.

Forty percent? We need more traffic.

Ninety-five percent? Great, we need more GPUs.

Neither conclusion follows by itself.

If an interactive service has spare capacity at three in the morning and enough capacity to absorb the morning peak, low average activity may simply be the price of the service level. If the same service has a growing queue at noon while its tensor units are lightly used, buying more accelerators may reproduce the bottleneck at larger scale. If a batch system stays saturated by reprocessing duplicated data or running a model far larger than the task requires, higher utilization can make the economics worse.

The useful question is not whether the accelerator is working.

It is what the accelerator is waiting for, and whether the work in front of it deserves to be there.

There are several common ways for capacity to disappear.

The first is the obvious one: there is no work.

This happens more often than people like to admit because demand and capacity arrive in different shapes. Capacity is often purchased in lumps. Demand arrives as a curve. An inference service may have a sharp daily peak and a long quiet tail. A research team may reserve a cluster large enough for an important training run, then spend hours between runs changing data, code, or hyperparameters. An organization can buy a fleet based on optimistic adoption and discover that the product has not yet created enough demand to feed it.

There is nothing technically wrong with the machines in this case. The utilization problem is commercial or organizational.

That is useful to know because no kernel optimization fixes absent demand.

The second disappearance is waiting for the host.

An accelerator can only consume what the rest of the system can deliver. Data may have to be read from storage, decompressed, tokenized, transformed, copied, assembled into batches, or coordinated by a CPU before the device can work on it. A training pipeline with an excellent model implementation can still stall if the input pipeline cannot keep up. An inference server can spend accelerator capacity inefficiently if request preparation or output handling becomes serialized on the host.

The classic response is to make the accelerator faster.

This can make the problem more obvious rather than solve it.

A faster consumer starves sooner when the producer does not speed up with it.

The third disappearance is memory.

An accelerator is not a bucket of arithmetic. The numbers being multiplied have to arrive where the arithmetic happens. Weights must be read. Activations must be available. During autoregressive generation, key and value state from earlier tokens must remain accessible so the model can continue producing later tokens. The faster the arithmetic becomes, the more important the path feeding it becomes.

This is one reason headline peak performance can diverge dramatically from application performance. Peak arithmetic tells you what a device might do under the right instructions with the right data already available. A real model spends its life moving through a hierarchy of memory and communication.

The fourth disappearance is waiting for peers.

One accelerator is relatively easy to reason about. A hundred turn synchronization into an operating condition.

Training and serving large models often require work to be divided across devices. Tensor pieces may be split. Pipeline stages may live on different devices. Data replicas may periodically exchange gradients. Experts in a mixture-of-experts model may sit on different accelerators. Long contexts may be distributed. At each boundary, one device can become ready before another.

The faster worker does not receive a medal.

It waits.

A slow data shard, a congested link, a topology mismatch, an imbalanced expert assignment, or one straggling worker can reduce the useful output of devices that are functioning perfectly. Distributed computing makes capacity collective. A fleet runs, in part, at the speed with which its members can agree that it is time to continue.

The fifth disappearance is repetition.

AI systems repeat astonishing amounts of work because repetition is often easier to implement than reuse.

A system prompt may be identical across thousands of requests. A long document may be sent again with each follow-up question. A retrieval system may repeatedly assemble the same prefix. A failed training segment may be recomputed from the last checkpoint. Two users may request outputs that share substantial prompt structure while the server treats each request as if it has never seen the material before.

Some repetition is unavoidable. Some is a design choice.

Caching, checkpointing, shared prefixes, better data pipelines, and smarter scheduling are all different forms of the same idea: once the system has paid to produce a useful intermediate state, do not casually throw it away.

The sixth disappearance is more uncomfortable because the computer may be behaving exactly as asked.

The work is unnecessary.

A product sends a trivial classification to the largest model in the fleet because the integration is simple. A team stuffs an entire document collection into context because the context window permits it. An agent is allowed to produce ten candidate plans where one draft and one revision would have been enough. A service generates text that nobody reads. A training team runs another experiment because capacity is reserved and available, not because the experiment has a clear question behind it.

This is the waste no profiler can identify for you.

The device sees valid instructions.

Only the product can know they were pointless.

The practical consequence is that an AI compute audit has to move outward from the GPU rather than stare harder at it.

Start with the completed work.

How many requests arrived? How many finished successfully? How many met the latency objective? How many outputs passed the quality check? How much work had to be retried? How much was rejected? How much was generated and never consumed? How much queue time existed before the accelerator saw the request? How much time did the request spend on the accelerator? How much time passed afterward before the result became useful to the user?

Then move inward.

When the accelerator had work, what resource limited progress? Arithmetic? Memory bandwidth? Memory capacity? Communication? Host processing? Storage? Scheduler policy? Was the device underfilled because the batch was too small, or was the batch small because the product promised a latency that made waiting for more requests unacceptable?

These questions create a very different conversation from "Why is GPU utilization only sixty percent?"

They also reveal that some kinds of idle time are healthy.

Suppose an interactive system is provisioned to keep response latency low during unpredictable bursts. There will be moments when capacity sits unused. You can eliminate that unused capacity by loading the same machines with background work. That is often sensible. But if the background work cannot yield quickly when interactive traffic arrives, the result can be a beautifully utilized system that misses the service level that justified the fleet in the first place.

Slack is not always waste.

Sometimes slack is an option.

It is the ability to accept a sudden request without first evicting somebody else. It is the ability to survive a device failure. It is the ability to keep tail latency from exploding near saturation. It is the reason a road at ninety-nine percent of physical capacity is not a triumph of road utilization.

This is where AI infrastructure begins to resemble every other queueing system.

When demand approaches the maximum service rate, waiting can rise much faster than utilization. The last available slice of capacity may be the slice protecting the experience of everyone already in the system. A manager who sees idle headroom and fills it indiscriminately can turn an apparently efficient service into a slow one.

This is also why partitioning can help and hurt.

Technologies such as NVIDIA's Multi-Instance GPU can divide a physical accelerator into isolated slices so separate workloads receive dedicated resources. That can be useful when several smaller jobs would otherwise strand a large device or interfere with one another. It can also create rigid boundaries. A workload that suddenly needs more capacity cannot borrow what sits on the other side of a partition without reconfiguration.

The lesson is not that partitioning is good or bad.

The lesson is that utilization depends on the shape of the workload.

A hotel can report high occupancy by filling every room with one guest. It can also report high occupancy by putting a family of five into every room. The percentage alone does not tell you whether the building was used well.

Accelerators are less forgiving because the workloads differ not merely in size but in resource mix.

One request may need a great deal of memory and relatively little arithmetic. Another may be compute-heavy. One may have a huge prompt and a short answer. Another may have a short prompt and a long generation. One job may communicate constantly across devices. Another may fit neatly on one. A fleet can have spare arithmetic but no memory for another sequence, or spare memory but no network capacity to scale the current job.

The word full becomes slippery.

A glass is full when no more liquid fits.

A GPU can be full of memory and empty of useful arithmetic. It can be full of arithmetic and still fail to meet demand. It can be full of low-value batch work while a high-value request waits outside. It can be electrically limited before it is computationally limited. It can be physically occupied by a model whose capabilities exceed what the task needs.

This book uses "running on full" in a different sense.

The system is full when its scarce resources are doing the most valuable feasible work under the constraints the product has chosen.

That definition is harder to graph.

It is also the one that matters.

The difference shows up most clearly in the decision to add capacity.

More accelerators are a legitimate solution to a capacity shortage. AI has real demand, many workloads scale, and there is no virtue in forcing a team to squeeze a saturated fleet forever. But additional hardware should answer a diagnosed shortage, not a vague feeling that performance could be better.

If the bottleneck is memory allocation, more devices may help by adding memory, but better cache management may help more.

If the bottleneck is request arrival, more devices add idle capacity.

If the bottleneck is host preprocessing, more accelerators become more mouths for the same kitchen.

If the bottleneck is a congested network, distributing the workload over even more devices can increase communication pressure.

If the bottleneck is a model choice, moving eighty percent of requests to a smaller model can create more effective capacity than adding eighty percent more expensive hardware.

If the bottleneck is a long repeated prefix, caching can make the same fleet feel larger without changing a single chip.

These are not edge cases around the real work of buying compute.

They are the real work.

The accelerator shortage and the accelerator waste problem can coexist. An industry can need millions more high-end devices while individual systems still throw away meaningful fractions of the capacity they already have. In fact, scarcity makes the waste more expensive because every stranded accelerator-hour has a higher opportunity cost.

The correct response to scarce compute is therefore not austerity for its own sake.

It is discrimination.

Know which work deserves the fast path. Know which phase is actually constrained. Know which resource is saturated. Know what can wait. Know what can be reused. Know what can run smaller. Know when slack is buying reliability rather than laziness.

And know when the graph that says "95%" is giving you excellent news about the wrong thing.

The accelerator is never the whole system.

That is why the first step toward filling it is to stop looking only at the accelerator.
