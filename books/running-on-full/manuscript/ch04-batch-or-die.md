# Batch or Die

A single request is selfish.

It arrives when it wants. It has its own prompt length, its own output length, its own sampling settings, its own urgency, and no interest in whether the accelerator would prefer to do several similar things at once.

The accelerator would.

Modern accelerators earn much of their advantage by doing large amounts of structured arithmetic in parallel. Give them enough compatible work and they can turn that parallelism into remarkable throughput. Give them one small request at a time and a large machine can spend too much of its life operating below the scale it was built for.

This is why batching is so important to AI inference.

It is also why batching can make a product feel terrible.

The basic idea is simple. Instead of sending one request through the model, combine several requests so the model processes them together. The model's weights are already present. Larger matrix operations can use the hardware more effectively. Overhead can be shared. The machine does more useful work during a given interval.

If all requests were identical, batching would be almost boring.

They are not.

One user asks a two-line question and wants a two-line answer. Another pastes ten pages of code. A third has a short prompt but asks for a long report. One generation stops after fifty tokens. Another runs for two thousand. Some requests arrive together. Others arrive just after the batch has launched.

Static batching turns this variation into waste.

Imagine forming a batch of several requests and treating them as a group until the entire batch finishes. The short sequences complete first. Their slots remain tied to a batch containing longer work. Part of the accelerator's potential is now attached to requests that are already done.

The machine is waiting for the stragglers inside its own batch.

Padding creates a related problem during prompt processing. If several prompts of different lengths are forced into a uniform rectangular shape, the system may spend work on placeholder positions added only to make the tensor dimensions line up. Packing techniques reduce this waste by storing useful tokens more densely.

Both problems come from pretending variable work is uniform because uniform work is convenient for the machine.

Modern serving systems try to reconcile the two.

Continuous batching—also called in-flight batching in some frameworks—lets the membership of the batch change as requests progress. When one sequence finishes, another can take its place. New work can enter while older work is still generating. The scheduler keeps trying to present enough compatible work to the accelerator without waiting for the entire original group to end.

This sounds like a small implementation detail.

It changes the economics of serving.

The unit being scheduled is no longer a fixed batch.

It is a moving population of sequences competing for compute time and memory.

vLLM lists continuous batching among its core serving features. NVIDIA's TensorRT-LLM describes in-flight batching and packed request handling for the same reason: real language-model traffic is dynamic. The server needs to refill the machine as requests arrive and finish.

The word refill is useful.

Think of the accelerator as a restaurant kitchen with an enormous stove.

Cooking one egg in the center of the stove is possible. It is also an odd use of the equipment. The kitchen becomes efficient when enough orders can be arranged so several things cook at once. But the kitchen cannot simply hold the first customer's breakfast for twenty minutes while waiting to assemble the mathematically perfect batch of omelets.

The customer is part of the system.

Batching therefore creates one of the defining tradeoffs in AI serving: waiting a little can let the machine work much more efficiently; waiting too long destroys the latency benefit the machine exists to provide.

The right amount of waiting depends on traffic.

At high request volume, a server may have plenty of compatible work available without deliberate delay. Requests are already queued. The scheduler can keep the accelerator filled while maintaining a reasonable service level.

At low volume, there may be nothing to batch.

An application receiving one request every few seconds cannot conjure a large batch without making each user wait for future users to arrive. In that regime, techniques designed for large-batch throughput may offer little value, and a smaller model, a smaller accelerator, speculative decoding, or a different deployment architecture may be more sensible.

This is why "increase the batch size" is not a strategy.

It is a response to a workload.

The batch-size knob hides several other knobs.

How many sequences can be active?

How many total tokens can be processed in a scheduling step?

How much memory is available for their cache state?

How should prompt processing compete with token generation?

Should a giant prompt be allowed to occupy the device for a long interval while existing users wait for their next tokens?

Should long prompts be broken into chunks so prompt work can be interleaved with generation?

Serving frameworks expose controls such as maximum batch size and maximum token counts because the correct answer cannot be determined from model size alone. It depends on the prompt-length distribution, output-length distribution, latency target, hardware, memory, arrival pattern, and serving engine.

A configuration that works beautifully in a load test can behave badly in production if the traffic distribution changes.

This is especially true when prefill and decode compete on the same device.

A large prompt offers substantial work. Give it the machine and it can make good use of parallel arithmetic while processing the input. But a user whose response is already streaming may need the device to produce the next token. If a giant prefill blocks generation for too long, existing users experience a pause.

Chunked prefill is one response: divide a long prompt into smaller pieces so the scheduler can interleave prefill work with decode work. The exact implementation differs by engine, but the principle is straightforward.

Do not let one large piece of efficient work monopolize a latency-sensitive system merely because the accelerator likes it.

This is a recurring theme in compute optimization.

The device and the product have different preferences.

The device likes large, regular, predictable work.

The product receives small, irregular, unpredictable demands from people.

The serving system is the translator between them.

A poor translator sends every request straight through and accepts low device efficiency.

A different poor translator maximizes device efficiency while making people wait.

A good translator rearranges work enough to keep the machine productive without violating the promise made to the user.

That requires measurement under realistic load.

Synthetic benchmarking is useful, but the traffic generator needs to resemble the product. If every test prompt is exactly the same length and every output is capped at the same number of tokens, the benchmark has removed much of the scheduling problem. If requests arrive at a smooth fixed rate but real traffic comes in bursts, the test will miss queue buildup. If the test reports average latency without the tail, it can hide the requests most harmed by saturation.

A serving benchmark should therefore be treated as a model of demand, not merely a way to exercise a machine.

MLPerf's separate Server and Offline scenarios embody this distinction at a broad level. Offline inference asks how quickly a collection can be processed. Server inference imposes arrival and latency behavior. The same hardware can produce different apparent performance depending on which problem it is asked to solve.

Production systems have even more specific problems.

An internal batch pipeline can often use aggressive batching and tolerate queueing. A consumer chatbot cannot. A coding agent may tolerate a slow first step if the overall task runs for hours, but a developer watching it interactively may care about visible responsiveness. A recommendation system has very different latency requirements from a document-generation service. An image-generation queue may allow users to wait tens of seconds while a search box cannot.

There is no moral virtue in low latency where nobody needs it.

There is no moral virtue in high utilization where everybody is waiting.

This becomes economically important when teams compare hardware.

A more expensive accelerator may achieve higher peak throughput, but a lower-cost accelerator can be the better choice if the workload cannot produce enough batch to use the larger device efficiently. Conversely, a high-volume service may extract enough batching efficiency from the larger device that its cost per useful request is lower.

The fleet should fit the traffic.

This is easy to say and difficult to maintain because traffic grows.

A startup begins with one request at a time. The simplest deployment is correct. Demand increases and the machine becomes busy. Batching begins to pay. Demand grows again and cache memory becomes the concurrency limit. More accelerators are added. Now load balancing matters. Several models are introduced. Now the scheduler has to decide not only which request goes next but which model state should occupy which device.

The architecture that was beautifully simple at low traffic can become wasteful at scale.

The architecture designed for huge traffic can be absurdly complicated before scale arrives.

Efficiency has a lifecycle.

This is why teams should resist copying serving configurations from organizations with different demand shapes. A recommendation to maximize the number of active sequences may come from a throughput-heavy environment. A recommendation to keep batches tiny may come from an ultra-low-latency product. Both can be correct and useless to you.

The more informative question is what happens when you increase offered load.

At first, request throughput should rise without much queueing.

Then batching opportunities improve and the accelerator may become more efficient.

Eventually some resource saturates: compute, memory bandwidth, cache capacity, scheduler overhead, network, or another part of the system.

After that point, additional demand mostly becomes waiting.

Finding this curve is more valuable than finding one impressive configuration.

The curve tells you where the system is comfortable, where it is efficient, and where it falls apart.

It also reveals whether your bottleneck is truly the accelerator.

If adding concurrency stops improving throughput while device arithmetic remains lightly used, something else is limiting progress. If memory fills first, the next chapter of optimization is memory. If host CPU rises to saturation, the accelerator is waiting on request preparation. If network traffic becomes dominant in a distributed deployment, more local batch may not help.

Batching is a diagnostic because it changes the relationship between work and hardware.

If larger batches improve throughput dramatically, the workload was underfilling the device.

If they do not, look for the resource that refuses to scale with the batch.

There is another subtle cost of batching: fairness.

A throughput-maximizing scheduler can favor work that is easy to pack. Long requests can block short ones. Large prompts can consume disproportionate resources. A customer producing a long generation can occupy memory much longer than a customer asking a simple question. If pricing or rate limits ignore these differences, one user's cheap-looking request can consume many times the capacity of another's.

Compute allocation becomes a product-policy question again.

Should long contexts cost more?

Should very long outputs be deprioritized during a peak?

Should enterprise traffic receive reserved capacity?

Should free users wait longer so paid users can preserve latency?

Should batch jobs yield to interactive requests?

The scheduler can implement these decisions, but the scheduler cannot decide what is fair.

The title of this chapter is deliberately too aggressive.

Batch or die sounds like a universal command.

It is not.

Sometimes the correct batch size is one.

A low-volume, high-value, latency-sensitive request may deserve the entire machine immediately. An application may be so lightly used that waiting to assemble a batch creates pure delay. A model may be small enough that a modest device handles requests economically without elaborate scheduling. Speculative decoding may extract speed in a low-batch regime. Hardware partitioning may allow several independent low-volume workloads to share one physical device without requiring them to become one batch.

The reason to understand batching is not so every system can maximize it.

It is so the operator understands what is being traded.

Batching trades some individual immediacy for collective efficiency.

Continuous batching reduces the rigidity of that trade.

Chunked prefill reduces one source of unfair monopolization.

Packing reduces work performed on padding.

Better cache management increases the number of sequences memory can sustain.

All of them are ways of turning irregular human demand into regular machine work.

That translation is where a surprising amount of accelerator capacity is won or lost.

The final mistake is to think the best batch setting can be discovered once.

Traffic changes by hour. Models change. Context lengths grow. A new feature changes output length. Quantization creates more memory headroom. A kernel update shifts the compute balance. A marketing campaign produces a different class of users. An agentic product moves from short answers to long-running sessions.

The operating point moves with them.

A serving system that is truly running on full is not frozen at the largest batch it survived in a benchmark.

It is continuously matching the shape of incoming work to the shape of the machine.
