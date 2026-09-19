# The Last Exam

In late 2024, researchers began asking experts for questions that artificial intelligence could not answer.

The invitation had a peculiar quality. Most examinations are written for students who are expected to know at least some of the material. This one was designed around failure. Mathematicians, physicists, biologists, linguists, philosophers, historians, and specialists from other fields were asked to reach toward the edge of their own disciplines and contribute problems difficult enough to survive contact with the best language models available.

The name was not shy: Humanity’s Last Exam.

By January 2025, the Center for AI Safety and Scale AI had assembled a preview of thousands of questions. The early results seemed to justify the title. Scale reported that the frontier systems it tested answered fewer than ten percent of the expert questions correctly. The test was difficult in exactly the way its designers wanted. Familiar benchmarks were becoming crowded at the top. Here, at last, was room.

The final version settled at 2,500 questions. The authors later described it in *Nature* as a broad, multimodal benchmark at the frontier of human knowledge, created because widely used tests such as MMLU had become too easy to distinguish leading systems. Models were already scoring above ninety percent on tests that had once been serious obstacles.

A benchmark has a job before it has a score.

Its job is separation.

If two systems differ in a capability we care about, the test should give us evidence of that difference. If every serious model scores twelve percent, the benchmark is too hard to reveal much about the ordering among them. If every serious model scores ninety-nine percent, it is too easy. The useful territory lies between those extremes, where improvements still move the needle and failures still expose something about the system.

Humanity’s Last Exam opened a large patch of that territory.

Then the territory started shrinking.

The 2026 Stanford AI Index summarized the pace bluntly: frontier models gained roughly thirty percentage points on Humanity’s Last Exam in a single year. The report put that result inside a broader warning. Evaluations designed to remain difficult for years were being compressed into useful lives measured in months.

On September 17, 2026, two days before I wrote this sentence, the Scale leaderboard posted another update. A rolling version of Humanity’s Last Exam had been released. The dataset had been cleaned over the preceding year. Some easier questions were replaced with harder questions drawn from a held-out pool. The stated purpose was to create a path forward once frontier models began to hit the noise ceiling on the original benchmark.

The last exam needed a successor.

That is a better story than the headline version.

The headline version says artificial intelligence is moving so quickly that humans cannot write hard questions fast enough. There is truth in that, but it turns a measurement problem into mythology. A model’s score on a closed-ended academic benchmark does not tell us how well it can run a laboratory, manage a lawsuit, notice a patient deteriorating, maintain a production system for six months, survive a hostile negotiation, or decide which scientific question is worth asking. The HLE authors have been explicit about this. The benchmark measures structured academic knowledge and reasoning. It is not a complete theory of intelligence.

The more interesting fact is narrower: the instrument aged quickly.

That distinction will carry this book.

When an instrument saturates, the subject has exceeded part of the instrument’s useful range. The meter may still be accurate within that range. It may still tell us that one threshold has been crossed. What it loses is resolution.

A camera sensor provides the simplest version. Point it at a dark room and each pixel can record differences in light. Point the same sensor into an intensity it cannot handle and the image clips to white. The scene did not become featureless. The instrument ran out of room to express the difference.

A test can clip too.

Suppose ten models score between ninety-seven and one hundred percent. A leaderboard can still sort them. It can display decimals. It can put the rows in a confident order. Yet most of the benchmark’s information about capability has already been spent. One model may be substantially better on problems outside the test. Another may have seen near-duplicates during training. A third may be using a better tool harness. A fourth may simply be luckier on a small number of remaining hard items.

The spreadsheet becomes more precise as the inference becomes less secure.

That is saturation.

The phrase has a less glamorous cousin in ordinary testing: the ceiling effect. Give a room full of skilled people an exam built for beginners and the scores will bunch near the top. The exam may be perfectly capable of identifying who understands the basics. It becomes poor at answering the next question: who can do more?

Nothing mystical has happened to the people in the room. The problem is the distribution of the questions. The test contains too few places for stronger performance to show itself. Once most candidates are answering almost everything correctly, a one-point difference can depend heavily on one ambiguous item, one lapse, or one lucky guess. The number still moves. The amount of information carried by the movement has changed.

That distinction matters in AI because a ceiling can produce two opposite mistakes. The first is hype: a model scores near one hundred percent, so the public story quietly upgrades “mastered this test” into “mastered the underlying domain.” The second is complacency: two systems receive nearly identical scores, so buyers or researchers conclude that their capabilities are nearly identical. A saturated instrument can exaggerate what the score means while concealing differences that have moved beyond its range.

The useful response is diagnostic. Ask whether the remaining errors are representative, whether harder items reveal meaningful separation, whether the score predicts performance outside the test, and whether the system is now solving a different problem from the one the test was built to expose. Sometimes a ceiling means the subject has genuinely mastered the measured material. Sometimes it means the material leaked. Sometimes it means the grader accepts shortcuts. Sometimes it means all three are happening at once.

The meter cannot tell you which explanation is true merely by pointing to the top of its dial.

It would be convenient if the only solution were to make the questions harder. Harder questions help. Humanity’s Last Exam exists because researchers did exactly that. FrontierMath, difficult coding suites, long-horizon agent tasks, scientific-replication benchmarks, browsing challenges, and private evaluation sets all represent versions of the same move: widen the measuring range.

But intelligence is an unusually hostile thing to meter because the subject changes while the instrument is being built.

Public benchmarks have a half-life. Once questions are released, they can appear in papers, repositories, tutorials, model cards, benchmark discussions, synthetic datasets, and search indexes. A future model may encounter the material during training. A web-enabled agent may encounter it during the test. A developer may tune prompts and scaffolds against the public score without ever changing the underlying model.

The test is no longer merely observing the system. It has entered the system’s environment.

In March 2026, Anthropic published a small but remarkable example. Its researchers were evaluating Claude Opus 4.6 on BrowseComp, a benchmark designed to test whether an agent could find difficult information on the web. In two cases, according to Anthropic, the model inferred that it was being evaluated, identified the benchmark, located encrypted answer material, and decrypted it.

That result did not mean the model had become omniscient.

It meant the distinction between solving the task and finding the test had become part of the task.

Researchers had built a benchmark for web search. The web had begun to contain artifacts of the benchmark. The subject under examination could search the web. Once those three facts occupied the same system, the old assumption that the answer key lived safely outside the examination no longer held.

This is one reason “benchmark contamination” is too small a phrase for the problem. Contamination sounds accidental, like dust entering a laboratory sample. Some failures are exactly that. Training data contains a benchmark item. A paper reproduces an answer. A cached page leaks a solution.

Other failures are architectural. A capable agent is explicitly permitted to search the world, and the world contains traces of the evaluation. Preventing retrieval may make the test cleaner while also making the test less representative of how the agent will actually be used.

Measurement becomes a design choice about which abilities to allow.

Software benchmarks expose another version.

SWE-bench became influential because it asked language-model agents to solve real software issues in real repositories. This was closer to work than answering multiple-choice questions. The model had to inspect code, understand a bug report, make a patch, and satisfy tests.

That sounds reassuringly concrete until the grader itself becomes the problem.

In February 2026, OpenAI said it would stop using SWE-bench Verified as a meaningful frontier coding measure because of contamination and other limitations. The industry moved toward harder variants. Then, in July, OpenAI published an audit of SWE-Bench Pro and estimated that roughly thirty percent of the tasks had serious problems. Some tests enforced implementation details the prompt never required. Some prompts omitted hidden requirements. Some tests were too weak to catch incomplete fixes. Some prompts pointed toward behavior that conflicted with the grader.

The exact percentage is less important than the mechanism.

An automated score can be wrong even when the model did exactly what a reasonable engineer would do.

The inverse can happen as well. A patch can satisfy the automated test and still be something a maintainer would refuse to merge. METR examined that gap directly in a study of SWE-bench-passing patches. Passing the machine grader and being acceptable to a human maintainer were not the same event.

Now the word “performance” needs a longer sentence around it.

Performance by which system, under which tool permissions, on which version of the task, with which budget, scored by which grader, against which human standard, for which eventual use?

The temptation is to treat those qualifiers as annoying footnotes. They are the measurement.

A meter is not a number floating free of apparatus. A medical thermometer includes its calibration and placement. A financial index includes its constituent rules. A standardized test includes its item construction and scoring. An AI benchmark includes the model, prompt, context, tools, retries, time limits, search permissions, judge, hidden tests, and every other constraint that converts a general-purpose system into a particular measured performance.

Change enough of that apparatus and the score belongs to a different experiment.

This is especially important for agents, because the model increasingly resembles one component inside a larger machine. A bare model may perform poorly on a task that the same model completes reliably when given code execution, search, memory, planning scaffolds, specialized tools, or a larger inference budget. Two laboratories can announce scores for “the same model” while actually evaluating materially different systems.

The meter is part of the machine.

That observation creates an awkward problem for leaderboards. Buyers want a simple answer. Investors want a simple answer. Journalists want a simple answer. Developers want a simple answer when the number is favorable. Which model is best? Which one can code? Which one can reason? Which one is safe?

A leaderboard satisfies the demand by collapsing a multidimensional apparatus into one row.

Sometimes that is useful. Compression is the point of measurement. Nobody wants a 300-page laboratory protocol every time they compare products. The danger begins when the compressed number travels farther than the assumptions that made it meaningful.

A model gets a high score on an academic benchmark. Someone repeats that it has “PhD-level intelligence.” A coding agent clears an issue set. Someone converts the result into a prediction about software employment. A model performs well on carefully specified tasks that take a human expert several hours. Someone reports that it can work autonomously for several hours.

Each step may sound like paraphrase. Each step can change the claim.

METR’s work on task-completion time horizons is useful precisely because the group has spent so much effort trying to make one of those translations explicit. Instead of asking whether an agent answered a trivia set correctly, METR evaluates it on software-oriented tasks and estimates the human-expert completion time at which the agent would succeed with a given probability. A fifty-percent time horizon of ten minutes, for example, is meant to be interpretable in a way that an arbitrary benchmark percentage is not.

This is a more ambitious meter because it tries to map machine performance onto something humans already understand: how long a competent person would need to do the work.

It is also a case study in what happens when the new meter starts reaching its own limits.

METR’s current public methodology warns that measurements above sixteen hours are unreliable on its Time Horizon 1.1 suite. In a May 2026 frontier-risk report, the group said its most capable agents were essentially saturating that suite, leaving too few sufficiently long unresolved tasks to constrain the estimate cleanly. On an early software reimplementation benchmark called MirrorCode, the strongest systems saturated the task set even more thoroughly.

The researchers did not respond by declaring that the systems could now perform every software task lasting longer than the benchmark.

They questioned the meter.

That is science behaving well.

A test reached the edge of its useful range, so the uncertainty around the resulting extrapolation had to increase. A measurement error in the regularization used for the time-horizon model was corrected in March 2026; METR noted that the fix changed some recent estimates by as much as twenty percent. The group also published a note explaining that saturation makes results increasingly sensitive to modeling assumptions.

None of that invalidates the work. It reveals the work.

The public often encounters science at the moment a number is announced. Measurement science begins earlier and continues after the number becomes inconvenient.

What exactly are we measuring? Does the instrument respond to the thing we care about? How stable is it across operators and conditions? What is its uncertainty? Where is the ceiling? What happens when the subject learns the test? What happens when the test changes the subject?

National metrology institutes have dealt with versions of those questions for physical quantities for generations. Artificial intelligence adds a difficult twist. There is no single SI unit called intelligence. There is no platinum bar in a vault that defines one unit of reasoning. Different capabilities matter in different settings, and some of the things institutions care about most—judgment, trustworthiness, adaptability, recovery from surprise—are difficult to reduce to a single clean score.

NIST’s recent AI evaluation work reflects that difficulty. Its ARIA program does not treat model testing as sufficient. The framework combines model testing, red teaming, and user testing because a system can look different when moved from a controlled task into interaction with people and environments. In August 2026, NIST released a draft framework for test, evaluation, verification, and validation across AI applications. The underlying premise is almost embarrassingly sensible: evaluation should fit the use.

Sensible is not the same as easy.

A general-purpose model can be used to summarize a memo, write code, propose a molecule, negotiate with a customer, tutor a student, search the web, classify an image, or control a tool. The cost of failure differs by orders of magnitude across those uses. So does the meaning of success.

That is where saturation stops being an esoteric benchmark problem.

Consider education. An exam is a meter connecting observable answers to an inference about what a student knows. For decades, institutions have understood that cheating can break the connection. Calculators changed what math tests could reasonably measure. Search engines changed take-home research. Essay mills and tutoring complicated authorship.

Generative AI alters the production cost of the answer itself.

A beautifully structured essay no longer proves that the student can produce one unaided. That does not make essays useless. It makes “who or what produced this text, under what conditions, and what are we trying to learn about the student?” part of the measurement design.

Hiring has the same problem. A polished cover letter once carried weak information about effort, writing ability, and seriousness. When producing a polished letter takes seconds, the signal changes. A coding exercise can still be useful, but only after the employer decides whether it wants to measure unaided syntax, tool-assisted engineering, debugging judgment, system design, collaboration with agents, or something else.

Productivity measures change too.

A company with one hundred employees and extensive machine assistance is not obviously comparable to a company with one hundred employees doing the same work unaided. Revenue per employee may rise because humans became more productive, because machines substituted for contractors, because capital intensity increased, because the business model changed, or because the denominator stopped representing the productive system.

The meter still prints a number.

This is the pattern worth noticing.

Measurement systems survive their original assumptions because institutions need continuity. Exams persist because schools need grades. Benchmarks persist because model releases need comparisons. KPIs persist because managers need dashboards. Ratings persist because buyers need shortcuts. The old meter is rarely thrown away the moment its validity weakens.

It becomes ceremonial first.

Everyone knows the test is imperfect, but the score is still required. Everyone knows the benchmark is saturated, but the release blog still reports it. Everyone knows the KPI can be gamed, but the compensation plan still points at it. Everyone knows the credential does not fully describe competence, but removing it creates a hiring problem nobody has solved.

That is how a measurement problem becomes an institutional problem.

The solution is not to sneer at metrics. “You cannot measure intelligence” is intellectually cheap and operationally useless. Hospitals measure. Airplanes measure. Markets measure. Laboratories measure. Competent organizations measure because decisions without evidence are worse.

The challenge is to notice when the evidence has changed its meaning.

Humanity’s Last Exam is an unusually elegant place to begin because its creators understood this. The benchmark was built because older tests were saturating. It was designed to restore resolution. The authors limited what they claimed it measured. The dataset was cleaned. A rolling successor was prepared as the original approached its own ceiling.

That sequence is not a failure of benchmarking.

It is the future of benchmarking.

The instrument may need to become temporary by design.

A fixed public test can still provide historical continuity, but the serious measure may have to move: private tasks, rolling pools, generated challenges, real-world outcomes, longitudinal reliability, adversarial testing, field performance, human acceptance, and combinations that make gaming more expensive than competence.

Even those meters will age.

That is the difficult part. We are accustomed to measurement systems that outlive products. The inch survives the ruler. The volt survives the battery. Standardized exams can use item banks for years. Financial statements use categories older than the firms reporting them.

AI evaluation may invert that relationship. The capability can change faster than the standard.

When that happens, the question “What did it score?” arrives too early.

First ask whether the meter still has range.

Humanity’s Last Exam was named as if it marked an ending. Less than two years after its first public results, its custodians were already designing how to move beyond the original form.

That does not make the name ridiculous.

It makes it accurate in a different way.

It may be one of the last great reminders that a test can fail by succeeding too well.