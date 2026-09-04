# Running On Full — research brief

## Working thesis

*Running On Full* is about the conversion efficiency between purchased AI compute and useful product work.

The book's central claim is that headline accelerator capacity is only an upper bound. Real systems lose capacity in many different ways: they wait for requests, data, memory, network peers, synchronization, storage, or power headroom; they perform redundant work; they run models that are larger than the task requires; they carry more context than the answer needs; they strand memory in fragmentation; and they optimize hardware utilization even when the product's real objective is latency, quality, reliability, or cost.

The practical unit is therefore not FLOPs in isolation and not even GPU utilization in isolation. The useful unit is completed work that satisfies the product constraint. A system is "running full" when its scarce resources are assigned to the highest-value feasible work without violating the service level the user actually cares about.

That definition intentionally allows a well-run system to show less than 100% activity. Headroom can be useful when it protects tail latency, absorbs bursts, preserves reliability, or lets a smaller fleet satisfy a harder service-level objective. The book should never equate full utilization with good economics by definition.

## Boundary with adjacent Desk books

This manuscript needs a narrow operating lane because several existing Sven Hardy Benson books cover neighboring territory.

- **Allocating Intelligence** is about allocating cognitive capability through institutions: authority, verification, memory, triage, and governance. *Running On Full* is about allocating physical and software compute resources inside AI systems.
- **Subsidized Intelligence** is about the capital, infrastructure, and pricing system that makes end-user intelligence artificially cheap. This book may discuss rental economics and accelerator-hour cost, but should not become a history of AI subsidies or hyperscaler capex.
- **Scaling Laws** is about how systems change qualitatively when they grow. This book may use scaling behavior to explain bottlenecks, but its question is operational efficiency at a given workload and fleet.
- **Energy, Value & Intelligence** treats energy and intelligence as large civilizational ledgers. Here power is one capacity constraint among several inside an AI infrastructure stack.
- **The Intelligence Bubble** asks whether large AI capital expenditures can earn adequate returns. *Running On Full* asks what operators can do after compute has already been bought or rented.
- **Source Code** is about scarce comprehension of codebases in an AI-heavy economy. This manuscript can discuss compilation, kernels, and serving software, but only as causes of compute efficiency.

The chapter test is: **Does this material help convert available AI compute into more useful work under a real constraint?** If not, it probably belongs elsewhere.

## Core distinctions

### Provisioned capacity versus useful capacity

A fleet can own or rent a large quantity of accelerators and still deliver little useful work. Nominal capacity describes the hardware. Useful capacity describes what survives scheduling, software, data movement, memory, communication, model choice, queueing, and product constraints.

### Utilization versus goodput

Device activity is diagnostic, not the final objective. NVIDIA DCGM explicitly distinguishes broad engine activity, SM activity, memory activity, tensor-pipe activity, PCIe traffic, NVLink traffic, and other counters. Some activity can represent useful computation; some can represent waiting or work the product did not need. The manuscript should use "goodput" in the ordinary systems sense: work that counts toward the user's objective.

### Throughput versus latency

The same serving system can be tuned for offline throughput or for interactive latency. MLPerf Inference separates scenarios for exactly this reason. A configuration that wins by batching heavily may be unacceptable for a user waiting on the first token. A low-latency configuration may leave hardware less saturated and still be the correct product choice.

### Compute versus data movement

Modern accelerators can execute enormous quantities of arithmetic, but transformer workloads also move weights, activations, and KV-cache state through a hierarchy of memory and interconnects. FlashAttention and PagedAttention are useful evidence because both improve performance by changing data movement and memory management rather than merely adding arithmetic capability.

### Quality versus size

The largest available model is not automatically the cheapest way to satisfy a task. Routing, cascades, quantization, distillation, and smaller task-specific models can move work onto cheaper paths, but every optimization must preserve a defined quality threshold. The book should not imply that smaller models are always better or that benchmark quality transfers cleanly into production.

## Current structure and falsification notes

### 1. The Empty Accelerator

Open with the gap between a GPU being present, a GPU being "active," and the system producing valuable output. Explain why one utilization percentage cannot diagnose the machine. Build a waste taxonomy: waiting for work, waiting for data, waiting for memory, waiting for peers, repeating work, and doing unnecessary work.

Falsification note: if broad utilization metrics consistently predict product goodput across real workloads, the chapter's warning about measurement would be overstated. Preserve cases where a simple utilization metric is good enough for a narrow fleet.

### 2. Useful Work per Second

Define the operating objective from the product backward. Offline inference, interactive serving, batch jobs, training runs, and agent workloads have different constraints. Explain why tokens per second, FLOPs utilization, and request throughput all require a quality and latency denominator before they become business metrics.

Falsification note: avoid inventing one universal efficiency metric. Different products legitimately optimize different combinations of cost, quality, latency, freshness, and reliability.

### 3. The Memory Wall

Explain why high peak arithmetic throughput does not eliminate memory limits. Use H100 memory bandwidth and capacity only as hardware context, then move quickly to the architectural point: weights and KV state must be available where computation needs them. PagedAttention and FlashAttention demonstrate how memory layout and I/O can unlock throughput without changing the model's basic task.

Falsification note: do not imply every workload is memory-bound. Prefill, large matrix multiplications, training, and some batch regimes can be compute-bound. The useful question is which resource is limiting this workload now.

### 4. Batch or Die

Show batching as the central trick for turning many small inference requests into efficient accelerator work, then show its cost. Static batches waste capacity when requests finish at different times. Continuous batching, chunked prefill, and modern serving engines try to refill the machine as sequences come and go.

Falsification note: batching is not always the answer. At low request rates or under hard latency constraints, waiting to form a batch can cost more than the utilization it gains. Speculative decoding and smaller models can be better low-batch tools.

### 5. The Long Context Tax

Treat context as an infrastructure choice rather than a magical model feature. More input can improve answers, but it also increases prefill work and consumes KV-cache memory during generation. Repeated system prompts and stable prefixes are opportunities for cache reuse; indiscriminately stuffing documents into every prompt is often a capacity decision disguised as a product decision.

Falsification note: do not claim all attention costs scale identically. Architectures, kernels, grouped-query attention, sliding windows, sparsity, cache quantization, and disaggregated serving change the curve. Keep the chapter at the level of practical resource consequences.

### 6. Stop Using the Biggest Model

Make model choice part of infrastructure. A stronger model can be economically worse when a cheaper model already clears the task's quality bar. Routing and cascades provide evidence that selective escalation can reduce cost while preserving performance in evaluated settings. Quantization provides a second lever by reducing memory footprint and computational cost without necessarily changing the task or model family.

Falsification note: model routing can fail on distribution shift, uncertainty calibration, or tasks where cheap mistakes are expensive. Do not present published benchmark savings as guaranteed production savings.

### 7. Precision Is a Product Decision

Treat numerical precision as a capacity choice rather than a universally technical preference. Lower-precision weights or activations can reduce memory footprint, memory traffic, and in supported regimes improve throughput. The chapter widens the idea into product precision: compute only as much exactness as the user or downstream system actually needs.

Falsification note: do not imply that fewer bits are always better or lossless. Quantization effects are model-, task-, format-, and hardware-dependent. A lower-precision deployment is only a gain when product-level evaluation shows the quality loss is acceptable and the target hardware actually realizes the expected memory or throughput benefit.

### 8. Keep the Cache Hot

Frame caching as preserving expensive intermediate work. KV caching is essential to practical autoregressive serving; prefix caching can additionally reuse repeated request prefixes. Application caches can reuse higher-level semantic work such as embeddings or deterministic transformations. Stress that cache value depends on reuse probability, avoided cost, memory footprint, placement, and eviction policy.

Falsification note: do not benchmark caching only on synthetic workloads engineered for high hit rates. Prefix reuse can be low in personalized or highly variable traffic. A large cache can reduce active concurrency, and a perfectly even load balancer can destroy locality. Measure avoided work per unit of scarce cache memory, not hit rate alone.

### 9. The Scheduler Is the Factory

Treat cluster and serving schedulers as allocation policy. They decide which work waits, which state remains resident, which priorities are honored, and whether flexible work can fill valleys without harming interactive service. The scheduler's objective should be connected to queue time, deadlines, tail latency, preemption cost, topology, and business priority rather than only device occupancy.

Falsification note: sophisticated scheduling is not automatically superior. Additional policy and state can increase operational complexity and make behavior difficult to predict. In small homogeneous fleets, simple first-come or fixed-pool scheduling can be economically adequate. Preserve the distinction between a real need for guaranteed capacity and wasteful permanent exclusivity.

### 10. Fragmentation

Define fragmentation as capacity that exists in aggregate but not in the shape required by the next workload. Cover KV-cache and allocator fragmentation, rigid hardware partitions, team reservations, model residency, topology, and power as different ways useful capacity can become stranded. Use PagedAttention and MIG as examples of techniques that can reduce one kind of fragmentation while potentially creating another.

Falsification note: do not imply perfect packing is attainable or even desirable. Headroom and contiguous free capacity can have option value. Partitioning and reservations can be correct when isolation or service guarantees matter. The useful question is whether stranded capacity has become large enough that the organization is buying hardware to preserve avoidable holes.

### 11. The Network Is Part of the GPU

Make communication part of the compute path once work spans devices. Introduce collective communication, topology, overlap, host-device transfers, and critical-path reasoning. The central claim is not that networking always dominates but that distributed accelerator performance cannot be understood from accelerator arithmetic in isolation.

Falsification note: avoid treating every multi-GPU workload as network-bound. Communication intensity varies with parallelism strategy, batch size, model architecture, device count, and topology. Measure communication on the critical path, not merely bytes transferred, and distinguish software-generated communication from limits inherent to the physical fabric.

### 12. Pipeline Bubbles

Use pipeline parallelism to show how nominally occupied stages can still lose useful time at startup, shutdown, imbalance, synchronization, and communication boundaries. Then generalize pipeline thinking to data loading, retrieval, prefill/decode handoffs, agents, and other staged AI systems. Emphasize that overlap hides unavoidable waits only when independent work exists.

Falsification note: more microbatches and more complicated schedules can reduce bubbles while increasing communication, memory pressure, kernel inefficiency, or operational complexity. Pipeline parallelism is not automatically good for low-batch or latency-sensitive inference. The cost of the remaining bubble has to justify the complexity required to shrink it.

### 13. Data Is a Stage of Compute

Extend the pipeline boundary upstream. Data loading, parsing, decoding, tokenization, retrieval, cache preparation, and storage layout all determine whether expensive accelerators receive work on time. Use Megatron's large-scale data-loading guidance as a concrete reminder that synchronization and index preparation can idle entire jobs even when raw storage bandwidth is not the obvious problem.

Falsification note: do not imply that all AI workloads are data-starved or that local caching always helps. Some workloads are compute-bound and some datasets are too large, too dynamic, or too infrequently reused for aggressive staging to pay. The chapter should preserve the distinction between moving work off the critical path and merely moving cost into another resource.

### 14. Checkpointing the Clock

Treat checkpoints as insurance on elapsed compute. The trade is between checkpoint overhead, durability, restart time, recomputation after failure, and operational flexibility. Distributed and asynchronous checkpoint systems demonstrate that saving state is itself a parallel I/O workload with choices around resharding and background writes.

Falsification note: more frequent checkpointing is not automatically better. A highly reliable short job can lose more time checkpointing than it saves in expected recovery. Asynchronous saves can reduce critical-path pauses while increasing memory, I/O concurrency, and ambiguity about which checkpoint is actually durable. Recovery must be tested, not assumed.

### 15. Power Is Capacity

Move power from the utility bill into the scheduler. GPU and module power limits, enforced caps, performance states, and topology-level power policies make explicit that a fleet can have nominally free accelerators while lacking safe electrical or thermal headroom. The chapter's objective is useful work per constrained watt when power is the limiting resource, not minimum energy in isolation.

Falsification note: do not claim lower power caps always improve fleet economics. A synchronized training job can slow enough that accelerator-hours or failure exposure increase. The optimal operating point is device-, workload-, rack-, and facility-dependent. Distinguish sustainable fleet power from short benchmark peaks.

### 16. Model Architecture Is Infrastructure

Show that architecture determines memory movement, communication, cache behavior, parallelism choices, failure domains, and runtime variance. Dense, MoE, long-context, multimodal, and agentic systems impose different infrastructure contracts. Expert parallelism is useful evidence that reducing active arithmetic can increase the importance of routing and communication.

Falsification note: do not equate theoretical FLOP reductions with wall-clock savings. Kernel maturity, topology, batching, model balance, and scheduler support can dominate. Also preserve the possibility that an architecture with worse current systems support may become operationally superior as compilers and runtimes mature.

### 17. Speculate

Present speculative decoding as a general systems trade: spend cheap extra work to reduce expensive serial waiting, then verify before commitment. Current vLLM documentation explicitly scopes speculative methods by traffic and workload regime, which supports the chapter's core claim that speculation is conditional rather than a universal speed multiplier.

Falsification note: acceptance rate alone is not sufficient. Draft cost, verification cost, batch interaction, memory, target-model workload, and QPS can reverse the economics. Speculation must degrade cleanly to the authoritative path and should not cross irreversible side-effect boundaries without a transaction model.

### 18. Rent, Buy, or Burst

Evaluate acquisition through completed-job cost, not sticker price. Ownership buys long-run unit economics at the price of commitment and underutilization risk. Renting buys flexibility. Bursting mixes a stable base with elastic peaks. Interruptible capacity is only cheap when checkpointing, restart, and deadline tolerance make interruption cheap.

Falsification note: avoid declaring cloud or owned infrastructure universally cheaper. Utilization, financing, staff, power, data gravity, hardware life, region, interruption, quota, and workload portability all matter. Use scenario analysis rather than one break-even line with false precision.

### 19. Capacity Planning Without Fantasy

Make uncertainty explicit. Plan from workload distributions, service levels, headroom, lead times, joint constraints, substitutions, and scenario triggers rather than one average-demand number. Include software efficiency improvements as potential supply without counting them as guaranteed capacity before they exist.

Falsification note: do not provision for arbitrary worst cases or treat headroom as automatically virtuous. Excess reserve can be expensive. A good plan specifies which tail it intends to serve, what degradation is acceptable, and how forecast error changes the next decision.

### 20. Measure the Queue, Not the GPU

Use queues as the most direct record of unsatisfied demand. Combine queue depth, age, priority, resource shape, and reason-for-waiting with device metrics. The most diagnostic state is often high queue plus low apparent utilization because it points toward fragmentation, topology, power, scheduling, or dependency constraints rather than simple hardware shortage.

Falsification note: queues are not inherently bad. Flexible batch work may rationally wait so expensive hardware can remain highly utilized. Do not reduce queue time by buying idle capacity unless the service objective values the saved time. Clean abandoned or impossible jobs from demand measurements.

### 21. Reliability Is Utilization

Count failed, retried, recomputed, and degraded work as consumed capacity that did not advance the durable result. Tail effects in distributed systems support the broader claim that one slow participant can amplify system-level waiting. Reliability improvements can create effective capacity by reducing recomputation and the reserve needed to survive uncertainty.

Falsification note: redundancy is not automatically efficient. Spares, replicas, health checks, and remediation systems all consume resources and can create failure modes of their own. Measure end-to-end successful work and recovery cost rather than assuming more reliability machinery always improves goodput.

### 22. The Last Ten Percent

Treat late-stage optimization as an investment decision. Broad early wins usually become narrower, more complex, less portable, and harder to measure as the system improves. Local speedups must be translated into end-to-end impact and weighed against maintenance, reliability, flexibility, and engineering opportunity cost.

Falsification note: do not use diminishing returns as an excuse to ignore small gains at massive scale. A one-percent improvement can be economically large on a huge fleet. The point is stronger evidence and a larger base, not a universal stop rule.

### 23. When Faster Is More Expensive

Force every performance claim to carry a cost and every cost claim to carry a time value. More devices can shorten a job while increasing total accelerator-hours. Warm replicas, hedged requests, speculative work, larger caches, and redundancy can deliberately spend capacity to reduce latency or variance. Tail-at-scale evidence supports the idea that extra work can be rational when latency variability is the real constraint.

Falsification note: do not imply that faster should be avoided because it can cost more. Time-to-result can dominate direct compute cost in research, launches, and interactive products. The chapter should make the trade explicit rather than prescribe one side.

### 24. Running On Full

Close with the operating loop: define useful work, name constraints, trace the end-to-end path, find the current bottleneck, remove unnecessary work, schedule and overlap what remains, protect progress with reliability, and remeasure after the bottleneck moves. "Full" means little avoidable waste under the product constraint, not universal 100% hardware activity.

Falsification note: the closing doctrine must remain conditional. There is no permanent best operating point and no technique in the book should be presented as universally correct. The durable claim is methodological: optimize the currently limiting resource against an explicit product objective and stop when the next gain is not worth its cost.

## Publication gates

The manuscript now has a complete 24-chapter structural pass, but it should remain **Drafting** until the publication gates below are satisfied.

1. **Depth audit:** verify that the manuscript clears Desk's full-book length expectations and identify chapters that are structurally complete but too compressed.
2. **Evidence audit:** check every concrete technical multiplier, hardware number, cloud behavior, and dated product capability against the source ledger; remove or narrow claims that lack stable support.
3. **Repetition audit:** reduce repeated formulations of the central goodput thesis when a later chapter can advance the argument instead of restating it.
4. **Continuity audit:** strengthen handoffs between the six-chapter arcs so the book reads as one escalating operating argument rather than a collection of infrastructure essays.
5. **Operator pass:** add only documented examples or clearly generic scenarios where a concrete operational sequence materially improves comprehension; do not invent production anecdotes.
6. **Economics pass:** make cost claims distinguish direct accelerator cost, completed-job cost, time-to-result, capacity option value, and product value.
7. **Terminology pass:** use latency, TTFT, inter-token latency, throughput, utilization, memory bandwidth, capacity, power, and goodput consistently.
8. **Desk validation:** run `python3 scripts/check-desk.py` in a real checkout before promoting the book to Complete; the GitHub connector used during drafting cannot execute the local repository checker.
9. **Discovery reconciliation:** merge the book against the latest `main` without overwriting concurrently updated Desk catalog, Reader, sitemap, or feedback surfaces.
10. **Release review:** only after the above gates pass should the Desk status move from Drafting to Complete draft and enter any Shelf/public-release workflow.

## Remaining research questions for revision

- Which utilization counters best predict end-to-end useful work for representative inference regimes, and where do they fail?
- At what request rates does batching improve completed-request cost enough to justify additional queueing latency?
- How much fleet capacity is consumed by repeated prefixes, long context, and KV-cache fragmentation in real deployments?
- When does prefix caching materially change TTFT or completed-request cost rather than only kernel time?
- Which parallelism strategies become communication-limited on current accelerator and network generations for representative model shapes?
- When does GPU partitioning improve usable capacity, and when does it create rigid slices that reduce scheduling flexibility?
- How should power-aware scheduling trade lower per-device performance against higher rack-level concurrency?
- What checkpoint interval minimizes completed-job cost under measured failure and restore behavior rather than assumed reliability?
- Which queue metrics best predict user or researcher pain before fleet-level utilization shows a shortage?
- What is the right goodput unit for agentic workloads whose token count, tool use, and duration vary dramatically?
- How should quality-adjusted cost be measured when model routing changes the distribution of errors rather than only the average score?
- Which optimization techniques remain robust across accelerator generations, inference kernels, model architectures, and traffic shifts?

## Evidence discipline

- Do not use peak FLOPs as a claim about sustained application performance.
- Do not treat "GPU utilization" as a single physically complete measure; name the counter when a distinction matters.
- Do not generalize vendor benchmark results into universal fleet savings.
- Distinguish server latency, time to first token, inter-token latency, request throughput, token throughput, and offline throughput.
- Distinguish memory capacity from memory bandwidth.
- Treat KV-cache size and attention cost as architecture-dependent; avoid universal bytes-per-token claims unless the model is specified.
- Do not assume a larger context window is useful context.
- Treat model routing and cascades as probabilistic quality/cost systems, not deterministic free savings.
- Treat quantization as a quality-sensitive engineering choice, not a lossless compression law.
- Treat speculative decoding as workload-sensitive and distinguish lower latency from lower total work.
- Treat checkpoint duration, restart duration, and recomputation as separate costs.
- Treat power limits as workload- and topology-dependent; never infer fleet savings from a device cap alone.
- Keep cloud instance specifications, availability rules, and product behavior dated; they change.
- Use historical distributed-systems evidence such as *The Tail at Scale* for mechanisms, not as a claim that its quantitative examples transfer unchanged to current AI fleets.
- Avoid invented production anecdotes. When the manuscript needs a scene, use a documented system, published benchmark, or clearly generic operator situation.
- Preserve the product constraint. A system that uses fewer accelerator cycles but violates latency, quality, or reliability is not automatically more efficient.
