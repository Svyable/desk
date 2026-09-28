# Research — Saturated

This folder is the working evidence trail for *Saturated: Too Smart To Meter*.

## Current research posture

The book begins from a narrow empirical observation: several widely used AI evaluations have lost discriminating power through ceiling effects, contamination, task defects, harness sensitivity, or rapid capability gains. The manuscript should not collapse those mechanisms into one story.

A saturated benchmark does **not** establish generalized superhuman intelligence. It establishes that the benchmark has lost some ability to distinguish systems in the range now being tested.

## Evidence spine

Chapter 1 currently relies on:

- the original/final Humanity’s Last Exam materials and current rolling-benchmark update;
- the 2026 Stanford AI Index characterization of rapid benchmark saturation;
- the peer-reviewed HLE paper in *Nature*;
- Anthropic’s documented BrowseComp evaluation-awareness/answer-key incident;
- OpenAI’s 2026 SWE-bench Verified and SWE-Bench Pro audits;
- METR’s time-horizon methodology, limitations, saturation notes, and frontier-risk report;
- NIST’s ARIA and TEVV work on application-specific evaluation.

Chapters 2–4 add the measurement foundations needed before the book moves into contamination and test failure: ETS test theory and item-response theory, adaptive-testing practice, benchmark-saturation research, GDPval and capability-elicitation evidence on setup sensitivity, NIST measurement-method guidance, the original Goodhart/Campbell lineage, leaderboard overfitting, and education incentive studies that supply both failure cases and counterevidence.

See [ch02-04-measurement-control.md](ch02-04-measurement-control.md) for the bounded Part I research pass and [source-ledger.csv](source-ledger.csv) for URLs and claim boundaries.

## Research rule

Every benchmark score used in prose should be dated and versioned. Where possible, record the full evaluated system rather than only the base model: tools, search, scaffold, inference budget, retries, prompt, grader, and task version.

Do not translate benchmark performance directly into claims about occupations, generalized autonomy, consciousness, safety, or intelligence in the singular.

## Counterevidence to preserve

The book should actively collect examples in which:

- an old benchmark remains predictive even near its apparent ceiling;
- rolling/private/procedural evaluations retain durable signal;
- real-world outcome metrics outperform benchmark proxies;
- apparent “saturation” is actually contamination or grader failure;
- model capability plateaus long enough for measurement to catch up;
- human baselines are themselves unstable or poorly defined;
- benchmark churn creates less decision harm than the book anticipates.

## Near-term research queue

1. Build a dated benchmark lifecycle table before Chapters 5–9.
2. Separate training contamination, web retrieval, repeated-public-benchmark optimization, and evaluation-aware behavior with case-level evidence.
3. Find primary evidence that evaluation scores enter procurement, governance, investment, or safety decisions.
4. Build education and hiring case studies around signal degradation rather than generic “AI changes work” claims.
5. Find concrete AI assurance, audit, underwriting, and insurance examples.
6. Identify cases where benchmark difficulty and real-world relevance move in opposite directions.
