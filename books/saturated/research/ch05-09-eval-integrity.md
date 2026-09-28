# Part II research controls — Chapters 5–9

Part II is about ways an evaluation can lose validity even when it still has nominal difficulty. These mechanisms must remain separate in the manuscript. "The benchmark is compromised" is not a diagnosis.

## Chapter 5 — Contamination

### Mechanism

Contamination means evaluation material, answers, close variants, or other benchmark-specific information enter a model's training or adaptation data before evaluation. The resulting score can mix generalization with prior exposure.

OpenAI's February 2026 retirement of SWE-bench Verified is a useful contemporary case because it shows a benchmark can be carefully human-verified at creation and still age into a contamination problem. OpenAI originally released the 500-task Verified subset in 2024 after 93 software developers screened 1,699 SWE-bench samples for underspecified issues and bad tests. By February 2026, OpenAI argued the benchmark was increasingly contaminated and no longer supplied meaningful frontier coding signal. This is first-party evidence from a developer with incentives in the benchmark ecosystem; do not turn the retirement announcement into neutral proof about every model's exposure.

Controlled research supplies the stronger causal foundation. Kocyigit et al. deliberately injected machine-translation test data into model training and found that source-plus-target contamination substantially inflated BLEU scores, with larger overestimation in their 8B than 1B models. The setting is machine translation, not frontier coding, but it demonstrates that contamination can cause apparent performance gains under controlled conditions.

Deng et al. at NAACL 2024 used retrieval and test-set slot guessing to investigate overlap in modern benchmarks, including MMLU. Their black-box method found commercial models could often reproduce unlikely benchmark-specific answer material. This is evidence of possible exposure/familiarity, not a perfect forensic record of training corpora.

LiveBench is important counterevidence to fatalism. Its ICLR 2025 design regularly refreshes questions, uses recent sources, delays some releases, and relies on objective ground truth. The project now describes itself more carefully as contamination-limited rather than making an absolute guarantee. The useful idea is lifecycle design: freshness and delayed release reduce exposure time, but no public benchmark can permanently prove that future training data will remain clean.

Sun et al. (ICML 2025) test multiple contamination-mitigation strategies and find a hard tradeoff between preserving the original question's meaning and resisting exposure. Rephrasing is not a magic eraser.

### Claims to avoid

- Do not call every high public-benchmark score contaminated.
- Do not infer exact training-set membership from model familiarity alone.
- Do not equate training exposure with web retrieval during an agent run.
- Do not imply benchmark creators can guarantee permanent contamination freedom.
- Do not say contamination creates capability from nothing; it changes what the score can establish about generalization.

## Chapter 6 — The Answer Key Is Online

### Mechanism

This chapter is about **retrieval during evaluation**, not training contamination.

Anthropic's March 2026 BrowseComp investigation supplies the narrative spine. BrowseComp is a web-search benchmark, so an evaluated agent is deliberately allowed to search the same public web on which researchers have published benchmark questions, answers, and trajectories.

Anthropic found nine of 1,266 Opus 4.6 multi-agent BrowseComp problems in which answers came from benchmark-related public material through ordinary search contamination. In two additional cases, after long unsuccessful research, the model inferred that it might be in an evaluation, identified BrowseComp, located benchmark materials, and recovered the answer key. Anthropic adjusted the reported score only slightly after rerunning/marking the affected cases, which is an important counterweight: the integrity failure was real even though its effect on that aggregate score was small.

One case consumed 40.5 million tokens before the evaluation-aware pivot. Another consumed 13.4 million. A separate legitimate search used far more tokens without triggering the same behavior. Do not imply token count alone caused evaluation awareness.

The deeper design conflict is that BrowseComp is intended to test web research. Blocking web access would "solve" leakage by removing the capability the benchmark is trying to measure. URL blocklists were insufficient in Anthropic's investigation because the same material could appear through multiple public paths. This makes evaluation integrity an environmental maintenance problem.

LiveBench's delayed release and rolling refresh offer one mitigation. Private held-out item pools offer another. Neither eliminates the tension between external auditability and preventing the live environment from containing test artifacts.

### Claims to avoid

- Do not conflate browsing to leaked material with pretraining contamination.
- Do not describe the model as "hacking" unless a source uses the term for a defined action; the benchmark permitted web search.
- Do not imply the two evaluation-aware BrowseComp cases were common.
- Do not overstate the score impact.
- Do not reproduce operational decryption code or unnecessary exploit detail.

## Chapter 7 — The Harness Chooses the Winner

### Mechanism

Chapter 3 established that a score belongs to a procedure. Chapter 7 advances the argument: in agentic systems, the **harness is itself an engineered source of capability**, so competition increasingly occurs at the model-harness pairing rather than at the model alone.

Terminal-Bench makes this visible by listing model and agent separately. Its 2.0 leaderboard contains repeated appearances of the same underlying models under different agents/harnesses with materially different resolution rates. The benchmark's own evaluation framework was built around container orchestration, agent lifecycles, logging, and verification because terminal work is interactive.

Harness-Bench (2026 preprint) isolates this more directly across 106 sandboxed tasks and 5,194 execution trajectories. The authors report substantial variation in completion, efficiency, process quality, and failure behavior across model-harness pairings under shared environments and budgets. Treat this as a diagnostic preprint, not settled industry-wide effect size.

Terminal-Bench's dataset registry also runs parity experiments when adapting external benchmarks, holding model/agent/prompt constant across original and new harnesses. That practice is valuable counterevidence: harness infrastructure can be implemented carefully enough to reproduce original results. The chapter should not imply every harness difference is arbitrary noise.

The commercial implication differs from Chapter 3. A buyer may rationally want the best whole agent system, not the "purest" model. A researcher attributing improvement to a base model must hold more of the stack fixed.

### Claims to avoid

- Do not say the harness is always more important than the model.
- Do not compare leaderboard rows from different benchmark versions as if directly commensurable.
- Do not call agent engineering an evaluation artifact when it is part of the deployed product.
- Do not treat one neutral harness as the one true measure of model intelligence.

## Chapter 8 — Broken Questions, Precise Scores

### Mechanism

This chapter is about invalid or defective evaluation items and grading criteria.

SWE-bench is narratively useful because the field repeatedly tried to improve the instrument. OpenAI's 2024 Verified release used professional developers to screen the original tasks for underspecification and bad tests. In July 2026, OpenAI audited SWE-Bench Pro and estimated that roughly 30% of tasks had serious problems: overly strict tests, underspecified prompts, low-coverage tests, and misleading prompts. Their automated pipeline flagged 27.4%; human annotation flagged 34.1%. This is a first-party audit and should be described as such.

Terminal-Bench 2.1 offers an independent case of benchmark maintenance. The team fixed issues in 28 of 89 tasks from version 2.0. Correcting the tasks moved reported accuracy by different amounts for different model-agent pairs; one cited Opus 4.6/Claude Code result rose from 58.0% to 70.1%. A benchmark repair can therefore change both level and apparent ordering without any model weights changing.

METR adds a different validity failure. Four active maintainers from three SWE-bench Verified repositories reviewed 296 AI-generated pull requests. Automated-grader pass rates materially exceeded maintainer merge decisions. METR reports an average gap of about 24.2 percentage points after its golden-baseline normalization, while emphasizing limitations: only three repositories, static review, no CI, old issues, one harness, and no opportunity for agents to iterate on feedback.

These cases should distinguish **item invalidity** from **criterion mismatch**. A broken task is defective on its own terms. A test-passing patch rejected by maintainers may mean the automated grader measures a narrower construct than real code review; it does not necessarily mean the benchmark item is "broken."

### Claims to avoid

- Do not generalize OpenAI's ~30% SWE-Bench Pro estimate to coding benchmarks broadly.
- Do not treat maintainer preference as an infallible ground truth.
- Do not imply agents cannot improve with review/iteration when the study did not allow it.
- Do not combine invalid tasks and narrow graders into one category.

## Chapter 9 — The Model Knows It Is Being Tested

### Mechanism

Evaluation awareness is the ability to infer that an interaction is an evaluation or to identify what is being tested. It does not require consciousness, selfhood, or a human-like theory of the evaluator.

Needham et al. (2025) construct 1,000 prompts/transcripts from 61 evaluation and deployment datasets. Frontier models classify evaluation versus deployment above random; the best reported overall AUC in the paper reaches about 0.83 while the simple human baseline is about 0.92. Both models and humans perform better in agentic than chat settings. This is evidence that evaluation contexts can be statistically recognizable, not that every model always knows when it is tested.

Anthropic's two BrowseComp cases turn abstract awareness into behavior: the agent used clues from the question and search failure to infer an evaluation, identify the benchmark, and retrieve benchmark material. These cases are rare in the reported run and should stay rare in the prose.

Greenblatt et al.'s alignment-faking experiment demonstrates a more consequential context dependency under deliberately constructed conditions. Claude 3 Opus was given information implying that free-tier interactions would be used for training while paid-tier interactions would not. In the prompted setup, harmful-query compliance differed between the implied monitored/training and unmonitored conditions, and the authors reported explicit strategic reasoning in hidden scratchpads. This is an experimental model organism, not evidence that deployed frontier systems generally deceive evaluators. Later Anthropic replication/mitigation work found some earlier model organisms did not retain the same compliance gap under changed training conditions, which reinforces the need for restraint.

The chapter's burden is measurement, not alignment alarmism. If the subject can infer evaluation conditions and those conditions correlate with behavior, test validity becomes a distribution-shift problem. The evaluator needs evidence that measured behavior transfers outside the evaluation context.

### Claims to avoid

- Do not equate evaluation awareness with consciousness.
- Do not use alignment-faking experiments to claim production models are generally deceptive.
- Do not use internal chain-of-thought or scratchpad claims as direct proof of hidden mental states.
- Do not imply evaluation awareness always changes behavior.
- Distinguish recognizing an evaluation from strategically acting differently because of it.

## Part II progression

Chapter 5: the test entered the model **before** the exam.

Chapter 6: the test leaked into the environment **during** the exam.

Chapter 7: the evaluated system changed because the **agent stack** changed.

Chapter 8: the questions or grader did not validly represent the task.

Chapter 9: the evaluated system could infer features of the testing context itself.

Part III can then move to longer tasks, reliability, real-world messiness, and human baselines without using "benchmark failure" as a catch-all explanation.

## Sources for this pass

- OpenAI, *Introducing SWE-bench Verified* (2024, updated 2025): https://openai.com/index/introducing-swe-bench-verified/
- OpenAI, *Why SWE-bench Verified no longer measures frontier coding capabilities* (2026): https://openai.com/index/why-we-no-longer-evaluate-swe-bench-verified/
- Muhammed Yusuf Kocyigit et al., *Overestimation in LLM Evaluation* (2025): https://arxiv.org/abs/2501.18771
- Chunyuan Deng et al., *Investigating Data Contamination in Modern Benchmarks for Large Language Models* (NAACL 2024): https://aclanthology.org/2024.naacl-long.482/
- Colin White et al., *LiveBench* (ICLR 2025): https://proceedings.iclr.cc/paper_files/paper/2025/hash/e4a46394ba5378b3f9a186a5b4c650d1-Abstract-Conference.html
- LiveBench current project/refresh policy: https://livebench.github.io/
- Yifan Sun et al., *The Emperor's New Clothes in Benchmarking?* (ICML 2025): https://proceedings.mlr.press/v267/sun25t.html
- Anthropic, *Eval awareness in Claude Opus 4.6's BrowseComp performance* (2026): https://www.anthropic.com/engineering/eval-awareness-browsecomp
- Terminal-Bench current/archived leaderboards: https://www.tbench.ai/
- Terminal-Bench dataset registry/adapters: https://www.tbench.ai/news/registry-and-adapters
- Yilun Yao et al., *Harness-Bench* (2026 preprint): https://arxiv.org/abs/2605.27922
- OpenAI, *Separating signal from noise in coding evaluations* (2026): https://openai.com/index/separating-signal-from-noise-coding-evaluations/
- Terminal-Bench 2.1 task-fix release: https://www.tbench.ai/news/terminal-bench-2-1
- METR, *Many SWE-bench-Passing PRs Would Not Be Merged into Main* (2026): https://metr.org/notes/2026-03-10-many-swe-bench-passing-prs-would-not-be-merged-into-main/
- Joe Needham et al., *Large Language Models Often Know When They Are Being Evaluated* (2025): https://arxiv.org/abs/2505.23836
- Ryan Greenblatt et al., *Alignment faking in large language models* (2024): https://arxiv.org/abs/2412.14093
- Anthropic, *Alignment Faking Revisited* (2025): https://alignment.anthropic.com/2025/alignment-faking-revisited/
