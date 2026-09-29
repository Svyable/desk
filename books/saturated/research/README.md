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

Chapters 5–9 separate five evaluation-integrity mechanisms that are easy to collapse into a single story: training-data contamination, live retrieval of leaked benchmark material, model-harness interactions, invalid or narrow tasks/graders, and evaluation awareness. The evidence spine includes controlled contamination studies, LiveBench’s rolling design, Anthropic’s BrowseComp incident analysis, Terminal-Bench/Harness-Bench, SWE-bench task audits, METR maintainer review, and bounded evaluation-awareness/alignment-faking research.

See [ch02-04-measurement-control.md](ch02-04-measurement-control.md) for Part I, [ch05-09-eval-integrity.md](ch05-09-eval-integrity.md) for Part II, and [source-ledger.csv](source-ledger.csv) for URLs and claim boundaries.

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

1. Build the Part III evidence spine around long-horizon tasks, compounded reliability, recovery and human intervention.
2. Audit METR time-horizon methodology and current limitations before Chapter 10; do not paraphrase time horizon as continuous unattended work duration.
3. Add reliability-engineering sources for sequential failure, redundancy and recovery before Chapters 11–12.
4. Identify real-work studies where benchmark success and deployment productivity diverge.
5. Build a bounded account of tacit context and underspecification for Chapter 13 without romanticizing human messiness.
6. Audit human-baseline construction across AI benchmarks before Chapter 14.
