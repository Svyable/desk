# Chapter 3 Evidence — The Pull Request at Machine Speed

## Chapter claim

Software makes the production-inspection imbalance unusually legible. Code can be generated in seconds, but a review still has to establish behavioral fit, tests, maintainability, and ownership. Automated review can find real defects; it does not decide whether a change is worth merging or sustain the feedback loop after a reviewer objects. The useful unit of production is a small, reviewable change carrying independent evidence and backed by an author who can respond.

## Central case trail

On May 26, 2026, a JetBrains research team opened two proposed fixes for issue 545 in PyCQA's `flake8-bugbear` repository. Pull requests 555 and 556 arrived sixteen seconds apart. Both were labeled as AI-generated alternatives and neither included tests.

GitHub's automated reviewer found issues worth human attention. In the first alternative it noted formatting and self-lint trouble, false positives involving assignment targets and scope, reuse of a retired diagnostic code, and missing evaluation-file tests. In the second it identified the absence of tests and a behavioral risk: a discarded iterable passed to `zip` can still determine when a loop stops, so removing it is not necessarily semantics-preserving.

A maintainer considered the alternatives, preferred the second if tests were added, and described using automated review followed by a sanity check. The researchers then clarified that the submissions were for a study, were not intended to be merged, and could not be revised. The maintainer objected that this had consumed limited project time without yielding an improvement the project could accept. The record is valuable precisely because the machine review was useful. The remaining scarcity was not typo detection. It was judgment, test design, and reciprocal revision.

## Countercase

PyCQA's `isort` pull request 2499 shows a better-shaped machine contribution. A Copilot coding agent proposed a one-line behavioral fix plus a regression test. Coverage tooling reported that all modified coverable lines were exercised. A human maintainer approved the change, and it was merged. The case does not prove that agents are generally reliable. It shows how narrow scope, executable evidence, and human authority can make fast production absorbable.

## Review evidence

Sadowski and colleagues studied modern code review at Google using interviews, a survey, and roughly nine million reviewed changes. The typical change was small: a median of twenty-four modified lines, with about ninety percent touching fewer than ten files. The reported purposes of review included understandability and knowledge sharing as well as defect detection. Large changes took longer to receive feedback.

Bacchelli and Bird's Microsoft study likewise found that understanding the change, knowledge transfer, team awareness, and discovering alternative solutions were important review outcomes. Review is therefore part inspection and part organizational memory.

GitHub's own guidance says pull requests produced by its coding agent deserve the same thorough review as human-authored changes. Its workflow preserves a separate human decision around approval and, by default, around running workflows triggered by agent pushes.

Productivity estimates are task-dependent. Peng and colleagues found a large speed increase in a controlled programming task. METR's early-2025 randomized study of experienced open-source developers working in familiar repositories found that the allowed tools made them slower even though they expected and later perceived a speedup. METR subsequently said its later experiment could not yield a reliable speed estimate because of selection, task choice, measurement, and parallel-agent complications. The chapter should not extract a universal multiplier from incompatible settings.

## Strongest counterclaim

Automated production and automated review can jointly reduce drudgery. Linters, tests, coverage, type checks, and model-based reviewers can reject obvious errors before a maintainer sees them. In well-scoped work, this may increase the amount of useful change a team can absorb. The independence and evidentiary quality of those checks, not whether a human typed every line, is the relevant issue.

## Falsification and kill tests

- If generated changes arrive small, tested, traceable, reversible, and responsive to reviewer feedback, the chapter should predict gains rather than a review collapse.
- Do not treat a pull request's closure as proof that its code was wrong; the research design itself made these proposals unmergeable.
- Do not treat automated review findings as equivalent to confirmed defects unless the record resolves them.
- Do not cite a single productivity study as the general effect of coding agents.
- Separate throughput at authorship from throughput at accepted, maintained change.

## Draft guardrails

- Reconstruct the public artifact trail without inventing maintainer emotion or private intent.
- Give the automated reviewer credit for the issues it surfaced.
- Use the two PyCQA cases as a comparison of work shape, not a morality play about humans and machines.
- End by carrying the problem into scholarship, where executable tests are rare and citation can impersonate confirmation.

## Sources

- PyCQA `flake8-bugbear` issue 545: https://github.com/PyCQA/flake8-bugbear/issues/545
- PyCQA `flake8-bugbear` pull request 555: https://github.com/PyCQA/flake8-bugbear/pull/555
- PyCQA `flake8-bugbear` pull request 556: https://github.com/PyCQA/flake8-bugbear/pull/556
- PyCQA `isort` pull request 2499: https://github.com/PyCQA/isort/pull/2499
- Sadowski et al., “Modern Code Review” (2018): https://research.google/pubs/modern-code-review-a-case-study-at-google/
- Bacchelli and Bird, “Expectations, Outcomes, and Challenges of Modern Code Review” (2013): https://www.microsoft.com/en-us/research/publication/expectations-outcomes-and-challenges-of-modern-code-review/
- GitHub, “Review pull requests created by GitHub Copilot”: https://docs.github.com/en/copilot/how-tos/copilot-on-github/use-copilot-agents/review-copilot-output
- Peng et al., “The Impact of AI on Developer Productivity” (2023): https://arxiv.org/abs/2302.06590
- Becker et al., “Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity” (2025): https://arxiv.org/abs/2507.09089
- METR, “Uplift Update” (2026): https://metr.org/blog/2026-02-24-uplift-update/
