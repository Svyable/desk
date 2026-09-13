# Chapter 5 — The State That Crosses the Line

A chat interface draws a bright line through a computation.

Above the line is the prompt. Below it is the answer.

Humans care about that distinction because it marks a change in responsibility. I supplied this. The machine produced that. Product interfaces reinforce it with bubbles, roles, colors, avatars, and labels. Training pipelines care too. Supervised fine-tuning may assign loss only to assistant tokens. Reinforcement learning evaluates actions taken by the policy after a prompt. Conversation datasets are built from turns with named speakers.

The neural network does not have to care in the same way.

Recurrent Looped Transformer's most consequential design choice may be the one least likely to fit in a headline: its recurrent decoder state does not reset at the prompt–response boundary.

If the decoder has been doing useful work while reading the prompt, Zhang's argument is straightforward. Throwing away that state when the assistant begins speaking would discard the very computation the recurrence was introduced to preserve. The first generated token should inherit a state that has already traveled through the prompt.

This sounds obvious once stated. Implementing it makes the architecture much less ordinary.

In many familiar decoder-only Transformers, prompt processing and generation are two phases of the same attention computation but are executed differently for performance. During prefill, the known prompt can be processed in a large parallel operation. The model builds the key-value cache needed for future autoregressive decoding. During generation, one new token arrives at a time and the cache is extended incrementally.

The distinction is mostly an execution optimization. The model's mathematical attention pattern remains causal.

RLT adds a dependency that cannot be fabricated at the end of prefill. If the recurrent state at prompt token 500 depends on the recurrent state at token 499, which depends on 498, then the decoder's recurrent path has to move through the prompt in order. A causal encoder may process known prompt tokens in parallel, but the recurrent decoder still needs to consume those encoder representations sequentially to construct the state that should exist at the boundary.

The prompt is no longer merely material placed into memory before the “real” generation begins. It is part of the computation's life history.

Zhang defines that history carefully. The complete decoder state is written as `H_t = (s_t, C_t^D)`. The first component, `s_t`, is the recurrent final decoder output. The second, `C_t^D`, is the layerwise sliding-window attention key-value state. Both matter to the next update.

This is an important correction to a simplistic picture in which RLT carries one magic vector forward and forgets everything else.

It does not.

The architecture separates several kinds of memory because they serve different jobs.

The causal encoder builds global key-value memory from the tokens seen so far. The decoder can cross-attend to that memory. This gives the decoder direct access to representations of distant context without requiring the recurrent state to compress every fact worth remembering.

The decoder's sliding-window self-attention provides local history. Recent decoder representations remain addressable as keys and values. The report is explicit about the window convention: a window of width `W` includes the current token, so up to `W - 1` historical entries are retained for the next update.

Then there is the recurrent output `s_t`. It is merged into the next token's decoder input, providing a direct computational continuation from the previous final state.

Global addressable memory. Local addressable memory. Recurrent computational state.

Those categories overlap in what they can represent, but their mechanics create different pressures.

Attention memory can preserve multiple distinct items and let a later query choose among them. Recurrence must decide what to carry now. A sliding window makes recent detail cheap to revisit. Encoder cross-attention lets distant prompt information remain available even if the recurrent state did not preserve it perfectly. The recurrent channel can therefore spend some of its capacity on things that are difficult to retrieve as a discrete fact: an unresolved plan, a running transformation, the phase of an algorithm, a compressed hypothesis about what matters next.

That is the optimistic story.

The less flattering possibility is redundancy. The recurrent state may learn little that could not already be reconstructed from attention. If so, every sequential decoder update becomes an expensive duplicate path. Modern Transformers are extremely good at using attention to assemble context-dependent state on demand. A new recurrent channel has to earn its serialization cost.

The cleanest way to test that is not to ask whether the full model scores well. It is to break the state on purpose.

Reset `s_t` at the prompt boundary while leaving encoder memory and sliding-window cache intact. If performance barely moves, the famous no-reset choice is theatrics. Reset it halfway through a long algorithmic sequence. Shuffle recurrent states among examples in a batch while preserving all token histories. Replace the state with a learned constant. Detach its gradient during training. Measure which tasks fail, at which lengths, and whether the model learns to route essential information through other channels when recurrence becomes unreliable.

A strong architecture should survive hostile questions.

The prompt boundary offers an unusually good one because it exposes a mismatch between user-facing semantics and model-facing dynamics.

Consider a simple instruction: “Read the following transaction ledger and tell me whether the final balance violates the covenant.” The prompt may contain thousands of entries. A conventional Transformer can attend over all relevant entries if context permits, perhaps with help from a long-context mechanism or external calculation. A recurrent model might instead maintain a running balance or a more abstract state as it reads.

If that state is reset precisely when the words “assistant” begin, the first generated token has to reconstruct the computation from stored context. The architecture has performed the bookkeeping and then erased the total at the cash register.

That would be absurd if the recurrent state actually held the answer.

But the example also reveals why no-reset is not obviously superior in every setting. Perhaps the model should not maintain a balance in a hidden state at all. An exact arithmetic tool may be safer. Perhaps the prompt contains instructions that should not influence generation after a security boundary. Perhaps multi-party conversations require certain hidden state to be scoped by role or trust domain. A state that crosses every boundary indiscriminately can preserve contamination as efficiently as it preserves insight.

Continuity is not automatically virtue.

This becomes particularly important in systems exposed to untrusted text. Prompt injection attacks already exploit the fact that models treat instructions embedded in context as part of the same computational substrate as trusted instructions. A recurrent hidden state could, in principle, internalize malicious or misleading content in a form that is harder to inspect than the original tokens. Clearing state may sometimes be a security control rather than a cognitive defect.

RLT's report is about execution consistency, not prompt-injection defense, and it would be unfair to assign it a security architecture it did not claim. The broader point remains: once hidden state persists across semantically meaningful boundaries, the system has to decide which boundaries deserve continuity.

This is familiar from ordinary computing. A process may carry state across function calls but not across users. A database transaction preserves some updates and rolls back others. A browser isolates origins because continuity across every website would be dangerous. An operating system does not treat “state should persist” as a universal principle; it defines compartments.

Language models are still immature in their state semantics. We have context windows, system prompts, tool outputs, caches, memories, scratchpads, conversation histories, and agent stores, each with different persistence rules. Recurrent hidden state adds another category: state that may matter causally but is not itself a human-readable artifact.

The prompt–response boundary is therefore only the first line to interrogate.

What happens between user turns? Does the recurrent state persist across an entire conversation or reset when a new request begins? The RLT report's core equations describe continuous processing across the prompt and response within an execution, not a product-level policy for carrying opaque hidden state across days or users. Persisting tensors outside a live inference raises versioning, privacy, storage, reproducibility, and security problems that are quite different from keeping state during one sequence.

What happens at tool calls? If the model emits a request to run code and receives a result, should the recurrent state survive unchanged while the world performs an external action? The result may invalidate the plan encoded in the state. A robust system might need a way to revise or checkpoint hidden computation around externally verified facts.

What happens when the context is truncated? Attention memory may lose old tokens while recurrent state still contains compressed consequences of them. That could be useful: state becomes a bridge across forgotten surface context. It could also be dangerous because the system now acts on information the user can no longer inspect in the visible history.

What happens when model weights change?

That question is where the architecture stops being a product-interface curiosity and becomes a training problem.

The state `s_t` was produced by particular parameters. So were the decoder key-value caches and encoder memory. If the parameters change, the state that the new model *would have produced* from the same history may also change. A saved hidden state is not just a summary of data. It is a summary produced by a specific version of the network.

This makes parameter-dependent state fundamentally different from a text transcript.

A transcript remains the same after a model update. The new model can reread it. A hidden state is already an interpretation. Carrying it from an old policy into a new one is like asking a new accountant to continue from a ledger total calculated under a different accounting rule without showing the ledger.

Sometimes that approximation may be harmless. Sometimes it may be disastrous. Exactness requires recomputation.

Zhang's report insists on this point for current-policy reinforcement-learning replay. If trajectories were generated under an earlier set of weights and the current policy has changed, exact evaluation under the current policy means rebuilding the complete history under the new weights. The recurrent state has to be reconstructed. Decoder sliding-window caches have to be reconstructed. Encoder-derived memory has to be current. The action should be evaluated at the state that the current policy would actually occupy *before* consuming that action.

This is expensive precisely because the state crossed the line.

If prompt processing were independent of the evolving recurrent decoder, one could precompute or reuse more of it. Once the prompt has been incorporated into parameter-dependent recurrence, the model's current hidden history becomes part of the policy definition.

There is something intellectually satisfying about this strictness. It refuses to pretend that the prompt is a static piece of context and only the response belongs to the policy. If the model has an internal state while reading, then the policy begins transforming itself through the prompt before it takes its first visible action.

The policy's state at action one is an outcome of prompt computation.

That sounds obvious in reinforcement-learning notation. In many practical language-model pipelines, it is easy to obscure because prompt tokens may be masked from the loss and prefill is treated as a preparatory phase.

RLT turns the preparation into part of the trajectory.

This has consequences for supervised fine-tuning too. The report proposes updating state on all context tokens even when loss is applied only to assistant targets. The model has to learn how reading user text changes the internal state that will later support response generation. You cannot simply train the answer segment in isolation and expect the same recurrent trajectory to appear.

The same principle applies to pretraining. Full backpropagation through time allows gradients from later next-token losses to influence earlier recurrent states and the transformations that produced them. That creates a long credit-assignment path. It also creates a memory problem: training may need to retain or recompute activations across a large recurrent history.

Activation checkpointing can reduce memory by recomputing intermediate activations during backward passes. Weight sharing may reduce parameter storage. Neither abolishes the sequential dependency.

The architecture is making a deliberate exchange: less reliance on ever more distinct physical depth in return for more responsibility placed on temporal state.

This exchange changes the meaning of forgetting.

In an ordinary Transformer, forgetting often means information falls outside the context window, is compressed poorly by an external memory system, or fails to attract enough attention. In a recurrent state, forgetting can happen even when the original information remains addressable elsewhere. The update itself may overwrite the computational residue that mattered.

That can be healthy. A good state machine does not preserve every previous state. It preserves what is sufficient for the future. If I am balancing a checkbook, I do not need to remember the running total after every line once I have the current total and an audit trail. If I am parsing a program, I may need the current scope and stack, not an undifferentiated memory of every parser configuration.

The challenge is that language does not come with an agreed sufficient statistic.

What should a general-purpose reasoning system carry from one token to the next? The best current plan? Confidence? unresolved alternatives? a representation of the user's goal? a summary of causal structure? an error signal? latent scratch work? All of these, compressed into one state? Different subspaces for each? No one knows.

Attention gave models a way to postpone that decision. Store many representations and retrieve what seems relevant later.

Recurrence forces some decision now.

This is why the hybrid architecture is more plausible than a pure return to old recurrent sequence models. Global encoder memory protects against the brittleness of compressing all history into one state. Sliding-window attention protects recent detail. Recurrence can specialize in continuity without being asked to become an encyclopedia.

Whether it actually learns that division of labor will require mechanistic evidence. We would want to know if recurrent state becomes more abstract than encoder memory, whether it carries task variables across long spans, whether attention compensates when the state is damaged, and whether the roles change across layers or time.

The architecture gives us a new object to inspect: not merely what the model remembers, but what the model believes is worth *continuing*.

That object crosses the line between question and answer.

If RLT's wager is right, the line was computationally arbitrary all along.

If it is wrong, the cost of proving it wrong will still teach us something useful: which parts of reasoning can survive as latent state, which are better reconstructed from memory, and where a language model should be allowed to begin again.
