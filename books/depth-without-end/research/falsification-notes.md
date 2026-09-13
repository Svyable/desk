# Falsification notes — Depth Without End

This file records what would weaken the book's main arguments. It is not a ritual list of caveats. If one of these conditions is supported by evidence, the manuscript should change.

## Claim 1 — Temporal recurrent depth can become a useful scaling axis

**Current status:** plausible, supported by related recurrent-depth work and narrow tasks, not established for RLT at large language-model scale.

**Would weaken materially:**

- FLOP-matched large-scale experiments show no advantage over untied or ordinary Transformer baselines across reasoning, language modeling, and long-horizon state tasks.
- Gains disappear when baselines receive equivalent test-time compute through ordinary decoding, search, or extra feed-forward depth.
- Performance saturates after only a few recurrent steps and additional temporal depth becomes redundant or harmful.
- Models cannot be trained to exploit long recurrent paths without severe stability or optimization penalties.

**Would strengthen:**

- Smooth capability improvement as usable recurrent depth grows at inference while weights stay fixed.
- Length generalization beyond the training regime on tasks requiring genuine state updates, with matched compute and parameter budgets.
- Ablations showing that persistent recurrent state, not simply extra FLOPs, causes the gain.

## Claim 2 — RLT's no-reset prompt/response state could remove a structural mismatch

**Current status:** architectural argument from the initiating report.

**Would weaken materially:**

- Careful comparisons show no meaningful capability or training difference between continuous prompt recurrence and a cheaper reset/boundary approximation.
- State carried through prompt tokens becomes stale noise by generation time.
- Equivalent information can be reconstructed from attention/cache state without recurrently processing the prompt.

**Would strengthen:**

- Boundary-reset ablations produce consistent losses or reasoning failures while continuous recurrence does not.
- Mechanistic analysis shows prompt computation stored in recurrent state remains causally useful during response generation.

## Claim 3 — Latent recurrence can be more efficient than verbalized chain-of-thought

**Current status:** supported in related work under specific tasks and systems, not demonstrated by RLT.

**Would weaken materially:**

- End-to-end latency and energy measurements show recurrent latent computation is slower or more expensive than compact explicit reasoning at matched accuracy.
- Hidden recurrence requires so many steps, synchronization points, or memory movements that token savings do not matter.
- Explicit reasoning provides superior search, correction, supervision, interpretability, or verifiability at similar cost.

**Would strengthen:**

- Wall-clock and energy measurements show lower cost at matched accuracy on realistic hardware and batch sizes.
- The same recurrent model can vary compute without requiring extra language tokens or external search infrastructure.

## Claim 4 — Iterative structure is a useful inductive bias for algorithmic reasoning

**Current status:** supported by Universal Transformer, looped-transformer, recurrent-depth, and fixed-point results on selected tasks.

**Would weaken materially:**

- Strong untied Transformers with modern training match length generalization once parameter and compute budgets are controlled.
- Apparent advantages are explained by curriculum, data distribution, or easier optimization rather than iteration itself.
- Algorithmic-task gains fail to transfer to natural-language reasoning or useful real-world computation.

## Claim 5 — Parameter count becomes a less complete capability descriptor when computation is recurrent

**Current status:** conceptually strong even if one architecture fails.

**Would weaken materially:**

- In practical recurrent systems, useful depth is fixed during training and cannot be varied at deployment.
- Additional passes offer negligible marginal capability, making the execution trajectory effectively constant.
- Serving constraints force a single narrow compute schedule, so stored weights once again dominate the practical description.

**Would strengthen:**

- Same weights demonstrate materially different capability/quality at different recurrent budgets.
- Adaptive halting reliably allocates more compute to harder instances.
- Pricing, deployment, or benchmark practice begins reporting compute trajectories alongside model size.

## Claim 6 — Stateful recurrence complicates exact reinforcement-learning replay

**Current status:** strong architectural point from the RLT report; practical significance uncertain.

**Would weaken materially:**

- Modern RL objectives do not require reconstruction of the parameter-dependent state in the way the report assumes.
- Approximate/detached replay performs equivalently in practice and introduces no important bias for the relevant training regime.
- Systems can persist or recompute state cheaply enough that the issue is operationally minor.

**Would strengthen:**

- Measured divergence between stale-state replay and exact current-policy reconstruction.
- Failures attributable to prompt-state or cache mismatch after weight updates.

## Claim 7 — Recurrence changes the hardware optimization problem

**Current status:** almost certainly true at the systems level; whether the trade is favorable is unknown.

**Would weaken the book's implied opportunity:**

- Sequential dependence dominates so strongly that no realistic batching, kernel fusion, encoder parallelism, speculative method, or hardware specialization can recover competitive throughput.
- Memory movement and cache reconstruction erase parameter-efficiency gains.

**Would strengthen:**

- Demonstrated kernels or accelerators exploit shared weights, recurrent-state locality, and batching to produce favorable latency/throughput at matched quality.

## Claim 8 — Recurrence creates distinct interpretability and safety questions

**Current status:** supported indirectly by mechanistic work and by the fact that state is repeatedly transformed by reused weights.

**Would weaken:**

- Recurrent trajectories are no harder to inspect, steer, or attribute than comparable untied-depth models.
- Simple probes recover stable, causally useful representations across recurrent steps.

**Would strengthen:**

- Small state perturbations persist/amplify over long recurrent horizons.
- Models enter harmful or incorrect attractors that ordinary feed-forward baselines do not.
- Interpretability interventions must be repeated across loops to remain effective.

## The book-level kill condition

The book's central argument is not that RLT will win. It is that temporal computation is a serious architectural scaling axis worth separating from parameter count, context length, and explicit reasoning tokens.

That broader argument should be substantially rewritten if well-controlled research shows that useful reasoning performance is determined almost entirely by total FLOPs and training quality, with no durable advantage from recurrent state or repeated shared computation once alternative uses of compute are matched.

If that result arrives, the historical story remains interesting but the future-facing thesis changes: recurrence would become a revealing experiment about where *not* to spend compute.
