# Goodhart Gets a GPU

Charles Goodhart was not thinking about artificial intelligence when he gave the observation that later took his name.

He was thinking about money.

In the 1970s, central banks were wrestling with a problem that looked, from a distance, like a measurement problem and became a control problem the moment policy touched it. Economists could observe relationships among monetary aggregates, credit, prices, output, and other variables. Policymakers wanted useful intermediate targets. If some measurable quantity moved reliably with the outcome they cared about, perhaps controlling the measurable quantity could help control the outcome.

Goodhart's warning was that the relationship could change once policy began leaning on it.

The observation is usually repeated today in a polished sentence about a measure becoming a target and ceasing to be a good measure. That wording is later than Goodhart's original formulation. The original problem was narrower and more interesting: a statistical regularity that survives observation may not survive pressure applied for control.

Measurement changes the system when people have reason to respond to the measurement.

That is where this book stops being about broken rulers.

A ceiling can make an instrument uninformative even if nobody tries to game it. Chapter 2 was that problem.

A harness can change a score because the apparatus changes. Chapter 3 was that problem.

Goodhart's problem begins when the score itself changes behavior.

Once a number controls money, status, access, regulation, promotion, publication, or product reputation, people optimize around it. Sometimes that optimization improves the thing the number was meant to represent. Sometimes it improves the number. Those outcomes are not guaranteed to be the same.

Donald Campbell reached a related conclusion from another direction.

Campbell was studying social indicators and program evaluation. In 1976 he warned that quantitative indicators used for consequential social decisions become exposed to pressures that can corrupt the indicator and distort the process it was supposed to monitor. The point was never that numbers are uniquely evil. The problem was incentive pressure.

A statistic can begin as evidence and end as a destination.

Machine learning has built an industrial-scale version of that cycle.

A benchmark begins as a test.

Researchers publish it because an existing task needs a common way to compare methods.

Teams run models against the benchmark.

A leaderboard forms.

State-of-the-art performance becomes a publication result.

Model developers cite the number in technical reports.

Product launches cite the number in marketing.

Investors and customers repeat the number.

Researchers now have a reason to improve it.

That feedback loop can be productive. ImageNet helped organize a field. Standardized benchmarks make it possible to compare methods across laboratories instead of relying on anecdotes. A difficult common test can focus attention on a real technical bottleneck.

The same loop can narrow research toward whatever the test rewards.

This is not a story about dishonest developers.

It is a story about rational behavior under a visible objective.

The cleanest machine-learning example predates modern language models.

In 2015, Avrim Blum and Moritz Hardt published a paper called *The Ladder*. They were interested in machine-learning competitions in which teams could submit predictions repeatedly and see a public leaderboard score based on held-out data.

The leaderboard was supposed to estimate performance on unseen examples.

Repeated feedback changed the game.

A team could alter its model, submit again, observe the score, alter the model again, and gradually adapt to the hidden test set through the information leaked by the leaderboard itself. The team did not need to see the individual hidden labels. The sequence of scores provided a channel.

The holdout set was no longer fully held out.

Blum and Hardt's response was not to declare leaderboards impossible. They designed a method that released less information and updated the leaderboard only when performance improved enough to justify it. The goal was to preserve the usefulness of the shared test under adaptive pressure.

The problem had a mathematical structure.

Every submission was also a query against the evaluation set.

Enough queries could turn evaluation into training.

That observation belongs naturally in the age of frontier AI because benchmark results now carry more economic and reputational weight than a Kaggle ranking ever did.

A major model launch can move a company's narrative. A coding score can become evidence in a sales pitch. An academic benchmark can appear in procurement material. Safety evaluations can affect deployment decisions. A few percentage points can become a headline.

The incentive to optimize is not hidden.

It would be strange if developers ignored the tests by which the world compares them.

This is why the phrase "teaching to the test" needs more care than it usually gets.

Teaching to a test can be exactly what society wants.

If the test accurately represents the underlying objective, preparation improves both the score and the thing the score is supposed to measure.

A pilot who trains for an emergency procedure should perform better on an emergency procedure test.

A surgeon who learns the protocol on a safety checklist should become safer.

A student who studies algebra because algebra will be on the exam may actually learn algebra.

Optimization becomes a problem when effort flows toward features of the measure that are easier to improve than the underlying goal.

Education has spent decades living inside this distinction.

Paul Glewwe, Nauman Ilias, and Michael Kremer studied a randomized teacher-incentive program in Kenya. Teachers could earn rewards based on student test performance.

Scores improved on the exams connected to the incentive.

The surrounding evidence made the result less simple.

Teacher attendance did not improve.

Homework assignment did not increase.

Students did not show the same gains on unrelated exams.

Test-preparation sessions increased.

The teachers had responded to the incentive. The measurement system had changed behavior. Some of that behavior plausibly helped students perform better on the rewarded test. The evidence gave less reason to believe the program had produced equally broad gains in learning.

No villain is required.

The objective function did its job.

A different study prevents the lesson from becoming a slogan.

Victor Lavy examined a teacher performance-pay program in Israel. Teachers received financial rewards tied to students' matriculation outcomes. The study found improvements in test participation, conditional pass rates, and scores. Lavy traced the gains to changes that included teaching methods, after-school instruction, and increased responsiveness to students. He found no evidence that teachers manipulated the grades.

The metric came under pressure.

The underlying process improved.

That case matters because Goodhart's law is often used lazily, as if every target automatically self-destructs. It does not.

A target works better when the measured variable is tightly connected to the real objective, when the agents cannot cheaply improve the measure without improving the objective, when the task distribution is broad enough to resist narrow rehearsal, and when independent evidence can detect divergence.

The difficulty is that frontier AI benchmarks rarely control all of those conditions.

Consider a benchmark made of fixed public questions.

The questions define the target.

The metric defines success.

The field studies the benchmark.

Developers observe failures.

Prompts improve.

Training mixtures change.

Fine-tuning targets weak areas.

Scaffolds adapt.

The next generation performs better.

Some of that is exactly the progress the benchmark was meant to produce.

A benchmark about reasoning should reward research that improves reasoning.

A benchmark about coding should reward systems that fix code.

A benchmark about factual knowledge should reward systems that know more.

The trouble is observational.

From the outside, the score alone cannot tell which part of the improvement generalized.

The same number could rise because the model learned a broadly useful capability.

It could rise because the training process included examples unusually close to the test.

It could rise because the prompt was tailored to the benchmark format.

It could rise because the tool environment exploited a quirk.

It could rise because a grader accepted behavior a human would reject.

It could rise because the system learned to recognize the test.

Later chapters will separate those mechanisms. Goodhart's contribution comes earlier: once a benchmark becomes consequential, assuming the measurement process remains passive is no longer credible.

The benchmark has entered the causal system.

Simon Ott and colleagues made this point in their 2022 study of thousands of AI benchmarks. Benchmarks do more than record progress. They steer it. State-of-the-art results bring recognition. Near saturation can leave the final increments increasingly vulnerable to optimization around benchmark-specific properties that do not generalize.

The steering effect can be healthy.

A benchmark can function like a research grant written in code. It says: this task matters; here is the test; improve it.

The field coordinates.

People build better systems.

The public learns what changed.

This is one reason benchmark criticism can become unserious. It is easy to point out that every benchmark is incomplete. Completeness is not the standard. A useful benchmark needs to create enough common structure to let researchers learn from one another without becoming the only thing that counts.

The pathology appears when the proxy acquires more authority than the phenomenon.

The benchmark score becomes the capability.

The school test becomes the education.

The quarterly target becomes the strategy.

The hospital metric becomes the patient.

Once language collapses the two, optimization can drift for a long time before anyone notices.

Artificial intelligence accelerates that drift because optimization cycles are fast.

A company can run automated evaluations continuously.

A training change can be tested across thousands of items.

Prompt variants can be searched.

Agent scaffolds can be tuned.

A model can generate candidate prompts for itself.

A judge model can grade the candidates.

The loop between target and optimizer becomes partially automated.

Goodhart got a GPU.

That line sounds more dramatic than the mechanism. The mechanism is simply faster feedback.

In older institutions, metrics might shape behavior over a school year, a budget cycle, or a central-bank policy regime.

AI development can compress the same cycle into hours.

Measure.

Change.

Measure again.

Select.

Repeat.

Optimization pressure that once required a bureaucracy can become a script.

The consequences depend heavily on what the script is optimizing.

This is where the distinction between benchmark development and benchmark exploitation matters.

Researchers often test against a development set while preserving a hidden final test set. Competitions limit submissions. Private evals rotate questions. Some benchmarks use held-out pools. Security evaluations generate fresh challenges. These are attempts to maintain a gap between improvement work and final measurement.

Blum and Hardt's Ladder belongs to the same family of ideas.

Do not let the score leak enough information to become a training signal.

The principle becomes harder to enforce when the benchmark itself is public and prestigious. A developer cannot unsee MMLU. A research team cannot forget SWE-bench exists. The existence of the benchmark changes what people build even if nobody commits a single act that deserves the word cheating.

That is why replacing a saturated benchmark with a harder fixed benchmark solves only part of the problem.

The new benchmark begins a new clock.

Publication creates visibility.

Visibility creates incentives.

Incentives create optimization.

Optimization produces genuine improvement and benchmark-specific adaptation in some mixture.

The evaluator then has to determine whether the score still tracks the underlying construct.

Measurement becomes maintenance.

This is ordinary in other high-stakes domains.

Auditors rotate procedures.

Regulators compare multiple indicators.

Medical diagnosis rarely rests on one lab value when the consequences are serious.

Financial risk systems use stress tests partly because historical averages can become least informative when conditions change.

The pattern is not an argument for complexity as virtue. Adding ten metrics can create ten targets. A dashboard can be gamed as easily as a single number.

The real defense is harder.

Keep enough distance between what is observed and what is optimized.

Use independent evidence.

Refresh tests when the target learns the test.

Measure outcomes that are expensive to fake.

Look for transfer.

Inspect failures rather than only averages.

Do not reward the proxy so aggressively that the organization forgets why the proxy exists.

These sound like management lessons because they are.

AI benchmarks now sit inside organizations, markets, and public arguments. Their statistical properties matter. Their incentive properties matter too.

The two can fail independently.

A benchmark can be statistically well designed and become corrupted by control pressure.

A benchmark can remain clean and become saturated.

A benchmark can resist both and still measure the wrong thing.

There is no single law that collapses those problems into one.

Goodhart's warning earns its place because it changes the direction of attention.

Before the measure matters, ask whether the instrument is valid.

After the measure matters, ask what the instrument is causing.

That second question becomes more urgent as benchmark performance acquires commercial value.

A developer deciding how to allocate a limited research budget sees a portfolio of possible improvements. Some improve product reliability. Some improve long-horizon planning. Some reduce hallucinations. Some improve a famous score in time for launch.

If the famous score is the one customers, journalists, and investors repeat, the incentive gradient is visible.

Again, the result may be good.

The famous score may represent exactly the capability customers need.

The discipline is to check.

This is why independent and rotating evaluations are so attractive. They weaken the link between a known target and the final judgment. A model can still improve on the underlying capability, but the developer has fewer opportunities to optimize against the exact shape of the test.

The cost is comparability and transparency.

A secret exam is harder to game and harder to audit.

A rolling benchmark remains fresh and makes year-to-year comparisons less clean.

A real-world outcome is meaningful and can be slow, noisy, confounded, or ethically impossible to collect at scale.

Every defense against Goodhart creates another measurement problem.

That is not a reason to give up.

It is a reason to stop treating measurement as clerical work performed after the real engineering is finished.

The meter participates in the system it measures.

Once the number becomes consequential, it participates even more.

Goodhart saw that in monetary policy because policymakers were trying to control an economy through measurable aggregates. Campbell saw it in social programs because institutions were making decisions through indicators. Educators saw it when accountability changed classroom behavior. Machine-learning researchers saw it when leaderboards became adaptive channels into holdout sets.

AI has not invented the problem.

It has connected the optimizer directly to the scoreboard.

That changes the tempo.

The test can still be useful.

It just cannot be innocent.