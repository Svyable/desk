# Broken Questions, Precise Scores

In 2024, OpenAI hired software developers to inspect a benchmark because the benchmark had a software problem of its own.

SWE-bench had become one of the most important tests of coding agents. It took real GitHub issues from real repositories and asked AI systems to produce patches. The design was compelling because software gives evaluators something language benchmarks often lack: executable tests.

Either the patch fixes the issue or it does not.

At least that is the promise.

The original dataset contained cases where the issue description was incomplete or where the test suite could reject a perfectly reasonable solution. OpenAI and the SWE-bench authors responded by asking ninety-three professional developers to review 1,699 samples. They removed problematic tasks and released a 500-item subset under a reassuring name: SWE-bench Verified.

The field had discovered that executable grading did not make the test self-validating.

Two years later, the lesson repeated at a larger scale.

After deciding that SWE-bench Verified had become too contaminated to provide good frontier signal, OpenAI recommended SWE-Bench Pro, a newer and harder coding evaluation.

Then OpenAI audited that benchmark too.

In July 2026, the company reported that its automated audit pipeline flagged 200 of 729 evaluated tasks as broken, 27.4 percent. A separate human annotation effort identified 249, or 34.1 percent. OpenAI summarized the result as roughly thirty percent of the benchmark containing serious task problems.

The categories are more interesting than the percentage.

Some tests were overly strict. They enforced a particular implementation detail that the prompt never required, so a functionally valid solution could fail.

Some prompts were underspecified. Hidden tests expected behavior that a reasonable solver could not infer from the issue description.

Some tests had weak coverage. A patch could satisfy the grader while leaving the actual feature incomplete.

Some prompts were misleading. They pointed the solver toward behavior that conflicted with what the tests rewarded.

In each case, the benchmark still produced a number.

That is the dangerous part.

A broken evaluation item rarely announces itself by returning "measurement invalid."

It returns zero or one.

The aggregation layer then does exactly what it was designed to do.

Add the zeros.

Add the ones.

Divide by the number of tasks.

Print the percentage.

The final score can have perfect arithmetic and defective semantics.

This is a different problem from contamination.

A clean model can fail a broken task.

A contaminated model can pass a valid task for the wrong reason.

A good harness can be punished by a bad grader.

No amount of decontamination repairs an underspecified prompt.

The defect lives inside the instrument.

Software benchmarks make this unusually visible because the tests feel objective.

Code runs.

Assertions pass or fail.

The computer does not have an opinion.

That objectivity belongs to the execution of the test.

It does not automatically belong to the test's relationship with the requirement.

A unit test can deterministically enforce the wrong thing.

The mistake can be beautifully reproducible.

This is familiar to software engineers.

A passing test suite has never meant a program is correct in every relevant sense. Tests sample expected behavior. They encode assumptions. They can omit edge cases. They can preserve bugs. They can lock in implementation details that later make change harder.

When a benchmark turns a test suite into ground truth, those ordinary engineering limitations become measurement limitations.

The evaluator has to ask two questions.

Did the patch pass the tests?

Did the tests validly represent the task?

The second question is expensive.

It requires human judgment.

That is why SWE-bench Verified existed in the first place.

Professional developers had to read issue descriptions, inspect tests, imagine alternative valid solutions, and decide whether the benchmark item was fair.

The work resembled editorial quality control more than machine learning.

This is a recurring pattern in mature evaluation.

Automation makes scoring cheap.

Validity keeps demanding humans.

The problem grows when benchmarks chase the frontier.

Easy tasks can be clean and uninformative.

Hard tasks can be discriminating and fragile.

To make an evaluation harder, designers often reach for larger repositories, longer workflows, more hidden requirements, more complex environments, or tasks that resist obvious solutions.

Each addition creates another place the benchmark can be wrong.

The ideal frontier task is difficult for the system and unambiguous to a competent human.

Those two properties do not naturally rise together.

Terminal-Bench provides an independent example of the maintenance burden.

In May 2026, the project released Terminal-Bench 2.1 specifically to fix problems in 28 of the 89 tasks from version 2.0.

Twenty-eight.

Nearly a third of the task set needed correction.

The changes were not cosmetic.

Reported performance moved differently for different model-agent pairs.

One Opus 4.6 configuration using Claude Code rose from 58.0 percent on Terminal-Bench 2.0 to 70.1 percent on version 2.1, a gain of more than twelve percentage points without changing the model.

Other pairings moved far less.

A benchmark repair changed the measured ranking surface.

That is exactly what should happen if the old tasks contained differential defects. Fixing a task can restore credit to systems that were previously punished for behavior the benchmark should have accepted.

It can also remove accidental advantages.

The important fact is that a score belongs to a benchmark version.

"Seventy percent on Terminal-Bench" is incomplete.

Which Terminal-Bench?

The version number is part of the measurement.

This should be obvious to anyone who has worked with software.

Benchmarks are increasingly software.

They have environments.

Dependencies.

Task definitions.

Grading scripts.

Containers.

Version histories.

Bug reports.

Regression tests.

Release notes.

Terminal-Bench's own team has embraced the analogy, describing continuous benchmark maintenance with semantic versioning and result migration.

That is not administrative overhead around the science.

It is the science.

A benchmark can contain bugs.

The field should want those bugs reported and fixed.

The uncomfortable consequence is that old leaderboard numbers may need reinterpretation after the fix.

Scientific culture is not always built for that.

A paper reports a result.

A press release repeats it.

A model card records it.

A benchmark version later changes.

The original number keeps circulating after the instrument that produced it has been revised.

The citation outlives the calibration.

This creates measurement debt.

The faster AI moves, the harder it becomes to repay.

There is another way a precise coding score can mislead even when the task is not technically broken.

The grader can measure a narrower standard than the world does.

METR explored this by taking AI-generated patches that had been run on SWE-bench Verified and asking active maintainers from the actual open-source repositories whether they would merge them.

The study involved four maintainers across three repositories and 296 AI-generated pull requests.

The result was a large gap.

METR reported that automated-grader pass rates were, on average, about 24.2 percentage points higher than maintainer merge decisions after the study's normalization against human "golden" patches.

Among raw results, maintainer acceptance was often roughly one-third to one-half of automated-grader pass rates.

Why did maintainers reject test-passing code?

Sometimes the core functionality was still wrong.

Sometimes the patch broke other code.

Sometimes code quality was not acceptable.

The automated tests had answered one question.

Maintainers were answering a broader one.

This does not prove the benchmark was broken.

It proves that "passes SWE-bench" and "would be merged by a maintainer" are different constructs.

That distinction is easy to lose because the benchmark uses real GitHub issues.

The source material looks like work.

The grader remains a simulation of one part of the work.

A real pull request is reviewed in context.

Maintainers care about style, maintainability, backward compatibility, architectural fit, unnecessary complexity, tests, documentation, and whether the patch creates future cost.

An automated benchmark usually needs a narrower criterion because those judgments are hard to score consistently.

The simplification is understandable.

The error occurs when users forget it happened.

METR was careful about the limitations.

The study covered only three of the twelve repositories in SWE-bench Verified.

The review environment lacked normal continuous integration.

Issues were historical.

Maintainers did not interact with the agent in an iterative review cycle.

Only one agent harness was represented in the analysis.

A human developer whose first patch receives requested changes can revise it.

The AI patches were largely judged statically.

The study therefore does not establish that agents are incapable of producing mergeable software at the rate implied by future interactive workflows.

It establishes that a naive reading of the automated score overstates one specific real-world standard in the studied setting.

That is enough.

Measurement validity is usually lost by inches, not miles.

A benchmark does not have to be nonsense to support an inference that is too broad.

This is why broken tasks and narrow graders need separate names.

An invalid task should be repaired or removed.

A narrow grader may be perfectly valid for the construct it measures.

If the benchmark says "passes these tests," the grader can be excellent.

If the reader hears "does professional software engineering," the problem may sit in the reader's interpretation.

This distinction matters beyond code.

A medical benchmark can correctly measure diagnostic multiple-choice accuracy and still fail to measure bedside practice.

A legal benchmark can correctly score answers to doctrine questions and still say little about negotiating a settlement.

A financial benchmark can grade a forecast and ignore whether the position size would bankrupt the trader.

Every evaluation narrows reality.

The evaluator's obligation is to keep the narrowing visible.

AI makes that harder because benchmarks increasingly borrow artifacts from real work.

Real repositories.

Real documents.

Real spreadsheets.

Real websites.

The realism of the input can create an illusion that the output metric is equally real.

It is not.

A GitHub issue plus a test suite is a carefully chosen slice of software engineering.

A professional document plus a rubric is a slice of office work.

A browser task with a known answer is a slice of research.

The slice can be valuable.

The name should not expand it.

There is a practical reason developers tolerate imperfect benchmarks.

Perfect validity is expensive.

If every coding patch had to be reviewed by multiple senior maintainers, a benchmark with thousands of runs would become slow and costly. Automated grading allows rapid iteration.

That speed is one reason benchmarks are useful for development.

The same instrument may be less appropriate for final claims.

This suggests a two-stage measurement strategy.

Use fast, imperfect automated tests during development.

Use slower human or field validation when the result becomes consequential.

Software teams already work this way.

Unit tests run constantly.

Code review happens before merge.

Staging catches integration problems.

Production telemetry catches what both missed.

No single gate is expected to represent the whole system.

AI evaluation often asks one benchmark to do all four jobs.

The result should be predictable.

When the number becomes important, people discover the missing layer.

This is also why benchmark audits deserve more prestige than they receive.

Finding that thirty percent of a celebrated evaluation is broken is not housekeeping.

It can change model comparisons, research priorities, safety arguments, and forecasts.

The people who inspect tasks are doing measurement science.

They are calibrating the instrument after it entered service.

The work requires uncomfortable habits.

Publish defects.

Version the benchmark.

Correct historical results when possible.

Keep task-level traces.

Separate changes caused by model updates from changes caused by benchmark repairs.

Record uncertainty about the items themselves, not only statistical uncertainty over model runs.

The last point is often missing.

A confidence interval around a score assumes the sampled tasks are valid measurements from the intended population.

If thirty percent of the tasks are defective, a narrow confidence interval can be a highly precise estimate of the wrong quantity.

Statistical uncertainty is not task validity.

A thousand clean repetitions do not repair a broken question.

The public likes confidence intervals because they look like humility expressed mathematically.

Sometimes the larger uncertainty is editorial.

Did the task say what it meant?

Did the hidden test enforce what the task said?

Did the grader accept the thing the benchmark claims to value?

Did the environment reproduce the intended state?

Those questions cannot always be answered by resampling.

Someone has to inspect the instrument.

That brings the story back to SWE-bench Verified.

The 2024 project was an attempt to do exactly that. Human developers screened the test. The field received a cleaner benchmark. The benchmark became important. The systems improved. Contamination accumulated. New benchmarks appeared. New audits found new defects.

This does not mean evaluation is hopeless.

It means evaluation is a maintenance discipline.

A benchmark is not finished when the dataset is published.

Publication begins the period in which users discover what the designers missed.

The best benchmark teams now behave more like software maintainers because that is what the instrument requires.

They issue versions.

They fix tasks.

They migrate results.

They retire saturated items.

They document integrity incidents.

They build new evaluation sets before the old ones fail completely.

The score remains useful only because somebody keeps repairing the machine that produces it.

A precise number deserves less trust, not more, when nobody can explain how the questions were maintained.

Before asking whether a model passed the test, somebody has to ask whether the test passed review.