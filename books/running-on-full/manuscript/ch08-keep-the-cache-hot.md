# Keep the Cache Hot

The cheapest computation is the one the system remembers it already performed.

That is the economic case for caching in one sentence.

The engineering case is messier.

A cache is a bet that something recently useful will be useful again before the space it occupies becomes more valuable for something else. If the bet is right, the system converts memory into saved computation, saved latency, or both. If the bet is wrong, the cache becomes a museum of expensive things nobody intends to revisit.

AI systems make unusually large bets.

A long system prompt can be processed once and reused across many requests. A document can remain stable while a user asks several questions about it. An agent can revisit the same repository, policy file, database schema, or tool description repeatedly. During inference, the serving engine already keeps a KV cache so each generated token does not require recomputing the full sequence that came before it.

Caching is therefore not one optimization.

It is a family of decisions about which intermediate states deserve to survive.

The first kind is compulsory.

Autoregressive generation would be absurdly expensive if the model discarded all useful attention state after every token and recomputed the entire history from scratch. The KV cache exists because a sequence has memory. Once earlier tokens have been processed, the system stores key and value state that later tokens can use.

This is caching as a condition of practical serving.

Then comes the more interesting question: can the system share or reuse that state across requests?

Suppose a product begins every request with a long block of identical instructions.

The naive path processes that prefix again for every user.

The arithmetic is valid.

The result is redundant.

Automatic prefix caching, as implemented in serving systems such as vLLM, tries to recognize when a request begins with token blocks the system has already processed. Rather than paying the full prompt-processing cost again, the server reuses the cached state for the shared prefix and continues from the point where the requests diverge.

This is one of those optimizations that seems magical until you describe the workload.

Nothing new was calculated.

The system simply stopped pretending that repetition was novelty.

The gain can show up in time to first token because less prefill work is needed. It can show up in throughput because the accelerator spends less time reprocessing the same material. It can show up in total cost because identical work is amortized across more requests.

But prefix caching has an unforgiving requirement.

The prefix has to match.

Not semantically.

Operationally.

If two prompts say roughly the same thing in different words, an exact prefix cache cannot assume they produce interchangeable internal state. If a request contains a personalized user ID near the beginning, the prefix may diverge before the large shared instruction block ends. If timestamps, random values, request-specific metadata, or reordered fields appear early, they can destroy reuse even when most of the prompt is common.

Prompt architecture becomes cache architecture.

Stable things should be stable.

Shared things should be placed where they can remain shared.

Volatile things should not be sprinkled through the portion of the prompt the system hopes to reuse.

This is an oddly architectural consequence of language-model serving: the order in which instructions are assembled can change compute cost without changing their meaning to a human reader.

The same principle appears in ordinary software caches.

A database cache performs poorly when keys are unstable. A content-delivery cache performs poorly when every page is made unique by an irrelevant query parameter. A CPU cache performs poorly when access patterns defeat locality.

AI does not exempt itself from locality because the object being cached is cognitive state.

It merely makes the object larger and more expensive.

A second category is application caching.

Not every request needs to reach the model at all.

If a user asks for the exact same deterministic transformation twice, the application may be able to return the previous result. If a classification result is valid for a stable record, the system can store it. If an embedding has already been computed for an unchanged document, recomputing it is waste. If an expensive preprocessing stage has converted a document into a structured representation, downstream requests may be able to reuse the structure.

This kind of caching sits above the inference engine.

It is often easier to reason about because the application knows the semantic contract.

The serving engine sees tokens.

The application may know that a customer profile has not changed in six hours, that a file content hash is identical, that a product description was already translated, or that a request is idempotent.

The higher layer can therefore reuse work the lower layer cannot safely identify as equivalent.

This suggests a useful rule.

Cache at the highest layer that can prove reuse is valid, and at the lowest layer that can capture additional mechanical repetition.

The application can decide whether two business requests mean the same thing.

The serving engine can decide whether two token prefixes are identical.

The model runtime can reuse sequence state.

The hardware cache can exploit locality inside kernels.

Different layers know different truths.

The danger is duplicated caching.

A system can store the same effective state in several places, each with its own eviction policy, observability, and failure behavior. One layer believes an object is hot. Another has already evicted the corresponding lower-level state. Memory usage grows while the expected hit path becomes unpredictable.

Caching therefore needs a budget.

What is the scarce memory pool?

What can evict what?

Which entries are cheap to recreate?

Which are expensive?

Which have a high probability of reuse?

Which contain sensitive data that should not remain resident longer than necessary?

How quickly does the workload change?

A cache is not just a performance feature. It is a memory-allocation policy with consequences for privacy, consistency, and capacity.

The tension becomes sharp in KV caching because active requests already need memory.

Every cached prefix occupies space that could otherwise admit another live sequence.

If a system fills memory with reusable prefixes that rarely hit, it can reduce concurrency and lose more throughput than the saved prefill would have created.

This is why cache hit rate alone is not enough.

A hit on a tiny prefix is not equal to a hit on a massive one.

A hit that saves a millisecond is not equal to one that saves a second.

A cache entry consuming little memory is not equal to one that prevents several active sequences from being admitted.

The useful metric is closer to avoided cost per unit of cache space.

That cost may be accelerator time, latency, memory bandwidth, or all three.

A high-value prefix cache entry is one that is expensive to recompute, likely to recur, and cheap enough to retain relative to the capacity it displaces.

The same idea explains why recency is such a common eviction heuristic.

Recently used things are often more likely to be used again than things untouched for a long time. Not always. A legal template used every Monday can be more valuable than a one-time viral prompt used a thousand times on Sunday. Domain knowledge can outperform generic eviction rules.

The ideal cache understands the future.

Real caches estimate it.

This makes traffic shape important again.

A consumer chatbot with highly personalized prompts may have less cross-user prefix reuse than an internal coding assistant with a large common system prompt. A support agent grounded in the same policy manual may produce strong reuse. A batch evaluation harness repeating identical instructions across millions of examples is an obvious caching candidate. An agent working on one codebase for hours may repeatedly reuse repository summaries and tool schemas even if no other user shares them.

The opportunity is workload-specific.

One of the easiest mistakes is benchmarking caching on a synthetic test built to produce cache hits.

If every request shares a giant prefix, prefix caching looks extraordinary.

If production traffic rarely repeats exact prefixes, the same feature can provide modest benefit while consuming engineering attention and memory.

Benchmarks should therefore report the reuse pattern, not merely the speedup.

What fraction of requests hit?

How much of the prompt was reused?

How large were the cached blocks?

What happened to concurrency?

How did performance change when the cache filled?

What was the miss penalty?

Without those details, "caching improved throughput" tells you very little about whether caching will improve your throughput.

The word hot also deserves care.

A hot cache is not simply a full cache.

It is a cache whose contents align with imminent work.

This creates a warmup problem.

A newly started replica has no history. A model can be loaded and ready while its application-level and prefix caches are cold. The first requests after a deployment, scale-out event, or failover may therefore be slower or more expensive than steady state.

Autoscaling can create a paradox.

Traffic rises, so the fleet adds replicas. The new replicas are cold. Load balancing spreads requests to them. Cache hit rates fall. The system adds capacity and temporarily loses some of the efficiency that made the previous capacity productive.

This does not mean autoscaling is bad.

It means warm state is part of capacity.

A mature system may prewarm common prefixes, bias traffic so caches gain locality, or preserve state across certain deployment events where practical. The correct method depends on operational risk and the sensitivity of the cached data.

Load balancing and caching are often in tension.

A perfectly even load balancer may send related requests to different replicas and destroy locality. Sticky routing can preserve cache reuse but create imbalance. Hash-based placement can group similar requests but complicate failover. Shared remote caches can improve reuse across workers but add network latency and another dependency.

Again, there is no free cache.

Every design chooses which resource pays for reuse.

Local caches pay with fragmentation and unevenness.

Shared caches pay with communication and coordination.

Large caches pay with memory.

Small caches pay with misses.

Long retention pays with stale or unnecessary state.

Short retention pays with recomputation.

The right system chooses the cheapest failure mode for the workload.

Caching also changes how we should think about repeated context.

The previous chapter argued that bloated prompts are an infrastructure cost. Caching does not make that argument disappear.

A huge repeated prefix can become cheaper after the first request, but it still occupies cache state. A miss still pays the full cost. A prompt that changes often may defeat reuse. The model may still perform worse because relevant information is buried inside irrelevant context.

Caching is not permission to stop editing prompts.

It is a way to avoid repaying for information that genuinely belongs there.

There is a more general lesson underneath all of these examples.

AI systems are often built as if every invocation begins from zero.

The model receives a request. It computes. The result is returned. The next request arrives and the ritual begins again.

That architecture is easy to reason about because each request is independent.

It can be wasteful because real work is not independent.

Users continue conversations.

Agents continue tasks.

Documents remain unchanged.

Tools remain the same.

Policies repeat.

Codebases persist.

Templates recur.

The world has locality.

An AI system that remembers none of it pays a tax for pretending otherwise.

This is why the best caching question is not "Can we add a cache?"

It is "What expensive state are we throwing away even though the next request is likely to need it?"

Sometimes the answer is a token prefix.

Sometimes it is an embedding.

Sometimes it is a retrieved document set.

Sometimes it is a compiled kernel, a model weight placement, an agent summary, a tool result, or a verified intermediate artifact.

The object changes.

The principle does not.

Compute becomes more valuable when useful work survives long enough to be reused.

Running on full means knowing what to remember.