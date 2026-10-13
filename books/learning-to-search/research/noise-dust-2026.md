# Noise / Dust — Forward-Only Credit Assignment as a Research Lead

**Recorded:** October 12, 2026  
**Status:** external experimental work; not a validated agent-search improvement  
**Primary code:** https://github.com/qlabs-eng/noise  
**Underlying research:** https://qlabs.sh/research/dust  
**Reproduction and baseline challenge:** https://sotaaz.com/post/dust-backprop-free-rerun-en

## Why it belongs in *Learning To Search*

The book's main distinction is between an intelligent model and an agent that chooses what evidence to acquire. Q Labs' **Dust** and its **Noise** benchmark study a different, neighboring question: whether a model can assign useful learning credit by sampling changes, running forward computations, and observing which changes improve a measurable objective, without a backward pass.

This is valuable as a concrete boundary case, **not** an instance of the book's learned evidence-acquisition policy. Searching hidden activation states to estimate parameter updates is not the same as searching for evidence under partial observability. The productive comparison is about the structure of the loop: perturb a candidate, observe a consequence, assign credit, use the information to change the next search.

## Mechanism and what the code actually demonstrates

Dust injects Gaussian perturbations into hidden activations, independently across tokens; compares perturbed and unperturbed token losses; aggregates reward-weighted noise into estimates of layer-output errors; and uses layer inputs to construct weight updates. For attention internals, the method uses changes in attention outputs and credit over subsequent tokens. It still estimates **gradients** and uses optimizers such as SGD or Adam; it avoids automatic differentiation/backpropagation rather than abolishing weight optimization.

Noise fixes a 37.7-million-parameter transformer, approximately 10 million FineWeb training tokens, a one-epoch budget, and evaluation on held-out next-token cross-entropy. Its no-backprop records as published in the repository on October 12 are:

| Method | Validation loss | Interpretation |
|---|---:|---|
| Dust + Adam | 4.167 | Best listed forward-only Noise baseline |
| Dust + SGD | 5.058 | Older forward-only baseline |
| EGGROLL + Adam | 5.954 | Weight-space evolutionary-strategy baseline |
| Backprop + SGD | 5.007 | Conventional comparison |
| Backprop + Adam | **3.769** | Strongest reported conventional comparison |

Lower loss is better. Noise reports 1.76 hours for its Dust + Adam record on a single **8×H100** node; the score is not an equal-compute victory over Adam backprop. The benchmark is deliberately restricted: fixed architecture/data, exactly one pass, seed 0, and strict state-dict compatibility. The authors of Dust explicitly say that orders of magnitude more compute efficiency would be needed before it could replace backprop in contemporary training.

On October 8, SOTAAZ reported a narrower independent rerun of the *Dust* repository at **1M tokens**, not a replication of Noise's 10M-token Adam leaderboard. They obtained similar SGD-era small-scale loss figures but found Dust at 1,024 draws costs roughly 347× the compute of their backprop step. Their 20-seed SGD comparison did not resolve a meaningful win, and tuned Adam or repeated backprop epochs performed much better under their altered comparisons. Attribute these as that team's findings, not universal conclusions.

## Implication for our agent research

**Question worth testing:** can a search controller learn to allocate limited exploration to candidate tool/evidence actions using inexpensive, noisy *outcome feedback*, rather than relying only on a hand-designed ranking rule?

This is an **analogy and a proposed new experiment**, not a claim that Dust can optimize a hosted LLM agent. Dust's code needs internal model activations and trainable weights. Standard black-box model APIs do not provide those, and tool calls are discrete interventions rather than tokenwise activation perturbations.

### Experiment A — Agent search-policy perturbation (low-cost, separate algorithm)

Use a fixed set of document/repository research tasks with independently verifiable answers, known evidence locations, realistic decoys, and capped search budgets.

1. Freeze the base model, tool inventory, retrieval corpus, evaluation prompts, and per-task resource budget. Split tasks into training and blinded held-out sets.
2. Encode a small set of **discrete** search-policy choices: first source/channel, breadth versus depth, when to branch, when to call a verifier, and when to stop.
3. Compare a fixed heuristic, uniform random perturbation, a simple adaptive bandit/beam method, and an outcome-guided perturb-and-select policy. Keep total model calls, tokens, time, and evaluator access explicit and comparable.
4. Judge held-out task correctness with source evidence; track successful discoveries per dollar or call, citation validity, calibration, false positives, and failures due to missing evidence versus incorrect inference.
5. Repeat seeds and report uncertainty. Check that any gain survives a change of base model, a different set of document domains, and blind verification. Preserve negative results.

Do **not** call this a Dust implementation. It tests whether the broader exploration/credit-assignment intuition transfers to a discrete, partially observable agent workflow. If a plain heuristic or bandit matches the perturb-and-select policy at equal cost, that is a useful falsification.

### Experiment B — Faithful forward-only neural learning (hardware-dependent)

If there is a funded GPU allocation, independently reproduce the Noise benchmark with the pinned tokenizer, dataset hashes, optimizer settings, hardware disclosure, and baseline evaluation. Start with Dust's smaller supported single-GPU setting for a smoke test; do not label that run a Noise leaderboard result. The benchmark's official comparisons use an 8×H100 node and prescribed training/evaluation rules.

A compelling result would show **loss, total FLOPs, GPU-hours, peak memory, variance across seeds, and evaluation leakage controls**, not just a final rank. Keep conventional SGD/Adam backprop and a simple random-search baseline visible. Do not claim competitiveness on larger models or new architectures from this benchmark.

## Editorial use across Desk

- **Learning To Search:** example of credit assignment through costly experiments, with an explicit warning that hidden-state training search and external evidence search are different tasks.
- **Scaling Laws:** case study in data budget, perturbation population, model size, and how apparently encouraging loss curves can mask poor compute economics.
- **Synthetic Intelligence:** supporting example of feedback-guided synthetic variation; no evidence here that a model can invent or reliably verify its own ground-truth curriculum.
- **Search Frontier:** the distinction between generating many trials and obtaining informative evaluations.
- **Useful Noise:** *only* as a labeled cross-domain analogy. Gaussian activation perturbation is not evidence for noise-assisted quantum transport or energy improvements.
- **The Formula / consciousness:** no inference about self-awareness, phenomenal consciousness, or biological learning from a result in optimization.

## Claims we must not import

- That backprop has been beaten at equal compute on large production models.
- That hidden-activation perturbations can be inserted into hosted model APIs.
- That noise is generically beneficial; both amplitude and credit signal have to be tested.
- That a more effective training procedure demonstrates consciousness, sentience, or a general theory of intelligence.
- That estimated gradient alignment is identical to superior downstream learning.

## Primary and independent sources

1. Q Labs, **Noise: Speedrun for pretraining without backpropagation** (GitHub, launched October 12, 2026): https://github.com/qlabs-eng/noise ; specific leaderboard and rules: https://github.com/qlabs-eng/noise/blob/main/README.md
2. Samip Dahal, Bishwas Mandal, Serdar Gülbahar, Akshay Vegesna, **Dust: Pretraining Transformers Without Backpropagation** (Q Labs, October 2026): https://qlabs.sh/research/dust
3. Q Labs, **Dust** implementation and smaller single-GPU instructions: https://github.com/qlabs-eng/dust
4. SOTAAZ Lab, **Pretraining Without Backprop, Rerun: What Happens to Dust When Backprop Gets Adam or More Epochs?** (October 8, 2026): https://sotaaz.com/post/dust-backprop-free-rerun-en

The Q Labs repositories state an **MIT license**. This note links the work without copying code; any eventual integration should retain the required notices and check all relevant dependencies and dataset terms.
