# Research brief — Depth Without End

## Central question

Can useful reasoning depth become a property of an AI system's temporal computation path rather than only a property of the number of distinct layers, parameters, or explicit reasoning tokens it contains?

The initiating case is Yifan Zhang's September 12, 2026 *Recurrent Looped Transformer* (RLT), which proposes a causal encoder plus recurrent decoder whose complete state includes both the previous final decoder output and layerwise sliding-window attention KV. The recurrent state does not reset at the prompt–response boundary. The report describes the resulting path as having unbounded or “infinite” temporal depth because after `t` consumed tokens a signal can, in principle, have passed through `t × L_D` decoder blocks while the work executed per token remains fixed.

The phrase must be handled literally enough to be useful and cautiously enough to be true. RLT does not provide infinite computation inside a token. Real sequences, memory, budgets, and machines are finite. The report explicitly characterizes reasoning improvements, hardware speedups, and RL scaling as research goals rather than measured results.

## Reader promise

By the end, a non-specialist reader should be able to distinguish:

- architectural depth from temporal or recurrent depth;
- recurrence across sequence time from recurrence across network depth;
- recurrent hidden state from an attention KV cache, a long context window, and external memory;
- explicit chain-of-thought from latent recurrent computation;
- weight sharing from adaptive computation;
- proposal-level architectural claims from empirical capability claims;
- parameter efficiency from FLOP efficiency and wall-clock efficiency;
- a model that can continue transforming state from one that is merely allowed to emit more reasoning tokens.

The book should leave the reader with a changed scaling picture: model size, data, training compute, context, and output-token compute are not the only plausible axes. A learned transition repeatedly applied to a persistent state can create a computation whose effective path length is partly determined by time.

## Strongest competing explanation

The strongest alternative is not that recurrence is old-fashioned. It is that recurrence may be unnecessary.

Modern language models can already spend more computation through larger feed-forward stacks, mixture-of-experts routing, longer explicit chain-of-thought, search, sampling, verifiers, tools, external memory, retrieval, and agent loops. Better objectives and data may teach fixed-depth models to use those mechanisms more effectively. A recurrent state threaded through every token introduces sequential dependence, long-gradient problems, replay complexity, state opacity, numerical instability, and hardware utilization costs. The empirical advantage observed on algorithmic or synthetic tasks may fail to survive broad language modeling at useful scale.

The manuscript therefore treats the following as live possibilities:

1. recurrent temporal depth becomes a major scaling axis;
2. it proves useful only for narrow algorithmic or state-tracking problems;
3. the useful ideas migrate into hybrid architectures without RLT's exact design;
4. explicit reasoning and search remain better uses of test-time compute;
5. the architecture's costs outweigh its gains on modern accelerators;
6. recurrence helps only after new training, normalization, halting, or hardware methods make it stable.

## Distinct contribution versus nearby Desk books

This book is not about persistent agents, durable identity, repositories as external memory, or systems that wake, sleep, and continue work across sessions. Those questions are handled by *The Never Ending Intelligence* and *The Long-Running Mind*.

This book stays primarily inside a model execution. Its subject is the computational trajectory by which one token's internal state can influence the next token's computation and thereby create increasing effective depth through time. External persistence appears only to sharpen the distinction between state inside an inference and memory outside it.

It also differs from *Scaling Laws*. That book treats scale across systems and resources. *Depth Without End* asks whether repeated application of learned computation changes what “model size” itself predicts about capability.

## Architecture facts from the initiating report

Source: https://github.com/yifanzhang-pro/recurrent-looped-tranformer

- Author: Yifan Zhang.
- Report date: September 12, 2026.
- A causal encoder constructs encoder-derived global key–value memory.
- A recurrent decoder merges the current encoder representation with the previous final decoder hidden state.
- The decoder also carries layerwise sliding-window attention KV.
- Recurrent output and decoder SWA state continue across the prompt–response boundary.
- The report's concrete configuration uses 48 encoder layers and 48 decoder layers, with compatible attention and FFN weights shared across stages; decoder blocks also perform encoder-memory cross-attention.
- Prompt prefill must recur through prompt tokens to build decoder state rather than treating the prompt as a state-free prefix.
- Exact current-policy RL replay requires rebuilding parameter-dependent state and caches under current weights.
- Preliminary independent experiments used a roughly 79K-parameter implementation, three seeds, training programs of 32 operations, and evaluation to 128 operations.
- On the parity task, the reported RLT final-state accuracy is about 100% at 32 operations, about 82% at 64, and 60.8% at 128; chance is 50%.
- On five-state transitions, RLT is about 100% at 32, about 49% at 64, and 20.7% at 128; chance is 20%.
- Transformer and token-only-merge baselines are around chance at long lengths on the five-state task; parameter and data budgets were matched, FLOPs were not.
- These experiments do not validate large-scale language reasoning or RL scaling.

## Research lineage

The relevant lineage is not one straight family tree. Several mechanisms repeatedly rediscover the value of iteration:

- classic recurrent neural networks update a hidden state through sequence time;
- Adaptive Computation Time lets a recurrent model learn how many internal steps to spend;
- the 2017 Transformer removes recurrence to gain parallelism;
- Universal Transformers reintroduce recurrent computation across depth with adaptive halting;
- Transformer-XL uses segment-level recurrence for longer-term dependency;
- ALBERT demonstrates aggressive cross-layer weight sharing without implying temporal recurrence;
- looped Transformers reuse blocks to represent iterative algorithms with fewer parameters;
- Coconut feeds continuous hidden state back as a subsequent input during latent reasoning;
- recurrent-depth language models unroll a shared block for additional latent test-time compute;
- LOTUS combines looped latent reasoning with parallel supervision and reports 3B-scale results;
- Fixed-Point Reasoners use convergence as an adaptive halting signal;
- DeepLoop studies normalization/residual scaling for repeated parameter visits;
- current mechanistic work asks how interpretable “workspace” representations behave when depth is recurrent rather than untied.

The manuscript must not imply that these mechanisms are equivalent.

## Chapter progression

1. **Yesterday's Paper** — the September 12 report arrives with a large phrase and small evidence; establishes the live bet.
2. **The Machine That Escaped Time** — why the 2017 Transformer discarded recurrence and why parallelism mattered.
3. **Recurrence Returns** — traces recurrence's return through Universal Transformers, Transformer-XL, sharing, and looped depth.
4. **Time Becomes Depth** — explains RLT's central path-length argument without calling it infinite computation.
5. **The State That Crosses the Line** — explains complete state, prompt prefill, SWA, encoder memory, and the no-reset boundary.
6. **Chain of Thought Is a User Interface** — separates visible reasoning text from internal computation.
7. **Continuous Thought** — Coconut, recurrent depth, LOTUS, and the case for latent reasoning.
8. **The Algorithm Learns to Iterate** — why iteration may be an inductive bias for algorithmic tasks and length generalization.
9. **The Four-Times Test** — reads the RLT synthetic evidence carefully, including degradation and unmatched FLOPs.
10. **What a Token Knows** — asks whether fixed compute per token is the right unit of cognitive work.
11. **Memory Is Not Context** — distinguishes recurrent state, caches, attention context, weights, and external memory.
12. **Training the Long Path** — BPTT, recurrent gradients, residual scaling, checkpointing, stability.
13. **The Replay Problem** — why RL training becomes sensitive to exact reconstruction of parameter-dependent state.
14. **Hardware Hates Serial Things** — the systems problem: sequential recurrence versus GPU parallelism, batching, memory movement.
15. **The Right Amount of Thought** — adaptive compute, halting, fixed points, and the economics of variable depth.
16. **When the Loop Lies** — attractors, drift, compounding error, stale state, and confidence reinforced by recurrence.
17. **Looking Inside a Recurrence** — interpretability when the same weights are revisited and representations move through virtual depth.
18. **More Depth Is Not More Intelligence** — develops the strongest architectural countercase.
19. **The Brain Comparison We Should Resist** — uses neuroscience only to discipline analogy, not to validate an architecture.
20. **From Parameters to Trajectories** — explores a scaling economy in which capability depends on path and compute allocation.
21. **The Benchmark That Could Kill the Idea** — specifies decisive experiments and reporting standards.
22. **Depth Without End** — returns to the initial phrase after separating what is established, plausible, and unknown.

## Craft problem

The main craft risk is turning the book into 22 variations on “iteration matters.” Each chapter therefore has a different argumentative job and a different pressure: historical reversal, architecture, cognition, algorithmic generalization, evidence, memory semantics, optimization, RL correctness, hardware economics, safety failure, interpretability, falsification, and consequence.

The second risk is hype. The initiating report is one day old as this first draft is written. The narrative should preserve that immediacy while refusing to treat novelty, GitHub attention, or press coverage as validation.

## Date sensitivity

This first draft is anchored to evidence available through September 13, 2026. Claims about the state of recurrent-depth research should be revisited before release because this area is moving quickly.
