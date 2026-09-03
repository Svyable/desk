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

## Planned research questions

- Which utilization counters best predict end-to-end useful work for common inference regimes?
- How should an operator separate idle time caused by insufficient demand from idle time caused by upstream bottlenecks?
- At what request rates does batching improve cost enough to justify additional queueing latency?
- How much fleet capacity is consumed by repeated prefixes, long context, and KV-cache fragmentation in representative deployments?
- When does prefix caching materially change time to first token or cost per request?
- How should prefill-heavy and decode-heavy workloads be scheduled together or separated?
- Which parallelism strategies are limited by communication rather than arithmetic at current accelerator and network speeds?
- When does GPU partitioning improve fleet utilization, and when does it create rigid slices that reduce scheduling flexibility?
- How much power headroom should an operator trade for higher clocks, more accelerators, or lower tail latency?
- When do spot, flex-start, reserved, and on-demand capacity produce the lowest completed-job cost after interruption risk is included?
- How should training systems value checkpoint frequency against recomputation after failure?
- Which observability metrics detect straggler, data-loader, network, and memory bottlenecks before operators simply add more GPUs?
- What is the right unit for agentic workloads whose outputs vary greatly in token count and tool use?
- How should quality-adjusted cost be measured when model routing changes the distribution of errors rather than just the average score?
- Which optimization techniques remain robust as accelerator generations, inference kernels, and model architectures change?

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
- Keep cloud instance specifications and availability rules dated; they change.
- Avoid invented production anecdotes. When the manuscript needs a scene, use a documented system, published benchmark, or clearly generic operator situation.
- Preserve the product constraint. A system that uses fewer accelerator cycles but violates latency, quality, or reliability is not automatically more efficient.
