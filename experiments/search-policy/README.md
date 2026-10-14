# Outcome-guided evidence search — synthetic pilot

An executable, **stdlib-only** test bed for an idea noted in [Learning To Search's Noise/Dust research](../../books/learning-to-search/research/noise-dust-2026.md): can outcome-based search-policy tuning outperform simple ways of choosing which evidence to request?

This code is **not Dust**. It uses discrete mutation and evaluation of *search-action preferences*, not Gaussian perturbation of neural activations or gradient estimation. It does not connect to live LLMs, read user files, query external services, or spend API tokens. The experiment is intentionally isolated from Desk's authoring and publication tools.

## Run

From this directory, using Python 3.10+:

```sh
python3 -m unittest discover -v
python3 controller.py --seeds 5 --train 96 --dev 48 --test 128 --rounds 4 --population 12 --output results.json
python3 controller.py --seeds 5 --train 96 --dev 48 --test 128 --rounds 4 --population 12 --test-domain research --output transfer.json
```

No installation, GPU, network, or GitHub Actions is required. Report files are generated locally; do not commit them as reference performance claims without reviewing the settings.

## Controlled setup

The simulator creates split-separated investigations. A task publicly indicates its **topic** and implicitly contains a hidden correct answer among four hypotheses. The agent can inspect four channels — logs (cost 1), documents (1), tests (2), and tickets (2) — or verify its current candidate (cost 2). Every task has a hard evidence budget of **4**. Each channel may return no evidence, correct evidence, or a conflicting claim; simulated channel reliabilities differ by topic and by domain. Evidence and verification responses are sampled *once per task*, prior to agent execution: competing policies face identical potential observations, with no repeated queries. The answer, channel reliability table, and unqueried observations are hidden from each policy.

All methods use the same basic probabilistic evidence interpreter; the tested component is **which action to select next** and when to stop. All policies operate on the same held-out tasks with identical costs:

- **Fixed:** hard-coded logs → documents → tests → tickets, with a simple verification/stop heuristic.
- **Random:** random legal channel/verification/stop decisions.
- **Bandit:** learns per-topic channel values from one probed channel per labeled *training* case; does not inspect unqueried channels.
- **Perturb-and-select:** starting from the bandit, randomly mutates 18 action/stopping preferences, scores candidates on training episodes, and selects using a disjoint development split. It never uses test answers for tuning. This is a basic gradient-free random search, not a neural credit-assignment algorithm.

Metrics include held-out answer accuracy, per-task action count and simulated cost, apparent answer support, false-supported answer rate, top-label Brier score, and `utility = accuracy - 0.03 × average_cost`. Apparent support means that a retrieved claim or positive verifier supports the final answer; it is **not** a genuine citation-validity audit. The split and generation seeds, budgets, and every baseline are emitted with the report. Multi-seed runs report per-seed results, mean, sample standard deviation and paired accuracy difference versus fixed.

## Pilot observation (5 seeds, 96 training / 48 development / 128 held-out tasks per seed)

| Method | Incident test accuracy | Research-domain transfer accuracy |
| --- | ---: | ---: |
| Fixed | 83.9% | 86.1% |
| Random | 76.9% | 80.6% |
| Contextual bandit | 83.4% | 85.3% |
| Perturb-and-select | 83.8% | 84.4% |

The outcome-guided prototype **did not beat the fixed heuristic** in either setting. Seed-level variance and the small sample make slight gaps between the strong methods inconclusive. Do not infer performance on real retrieval tasks, open-ended research, or hosted language-model agents. The underlying profiles and synthetic observations were created for this pilot, not learned from real retrieval traces. This is a negative baseline result worth preserving.

**Important cost distinction:** test-time budgets are equal; *training* costs are not. The bandit sees one probed training action per case, whereas perturb-and-select performs many full training rollouts and separate development evaluations. The generated `training_effort` field reports those simulated tool calls and candidate evaluations. There are no language-model tokens or monetary API costs to measure in this version. Better outcomes at test time would need to outweigh the extra training burden before deployment.

## Next gates before a real agent trial

1. Replace synthetic channels with permissioned, replayable repository/document retrieval traces from disjoint research tasks. Do not introduce private or copyrighted third-party corpora into the public repository.
2. Keep answer keys inaccessible to the action selector, and score with independent evidence/citation checks. Log query, returned observation, latency, tokens, and resource cost, including training probes.
3. Pre-register train/development/test splits, fixed retrieval corpus, model/scaffold versions, stopping policy, and the number of search candidates. Add strong heuristic and contextual bandit baselines at matched total cost.
4. Run many seeds and cross-domain transfers; publish failure categories and uncertainty intervals, and accept the null result if a fixed heuristic remains competitive.

Sources: [Noise challenge](https://github.com/qlabs-eng/noise), [Dust research](https://qlabs.sh/research/dust). Both are external inspirations and **no Q Labs code has been copied**.
