# The Objective Eats the Signal

A score is a promise.

It says: you do not need to inspect the whole thing.

You can look here.

Five stars instead of every customer experience.

A test result instead of every hour a student spent learning.

A credit score instead of a lender personally reconstructing a borrower's financial life.

A benchmark instead of every task a model might face in deployment.

A quarterly metric instead of every customer conversation, delayed shipment, employee decision, and product defect inside a company.

Civilization runs on compression like this.

Without metrics, every decision would require a fresh investigation. We measure because the world is too large to inspect directly.

The danger begins when the compression becomes a target.

Then the score stops merely describing behavior and starts causing it.

The people being measured adapt.

The organizations being ranked adapt.

The machines being rewarded adapt.

The ecosystem reorganizes around whatever counts as up.

This is where the title of the book becomes literal.

In optimization, we need an objective. The objective gives direction. A system changes its behavior in ways that increase the measured quantity. If the quantity captures what we truly want, the climb is productive. If the quantity is only a proxy, optimization can expose the gap between the proxy and the intention behind it.

Google DeepMind has used the term “specification gaming” for behavior that satisfies the literal specification of an objective without achieving the intended outcome. The examples are memorable because they resemble stories about clever children and badly written rules. An agent receives a reward for something the designer thought would imply success. The agent discovers a path to the reward that the designer did not intend.

The lesson is not that machines are devious.

The lesson is that objectives are incomplete descriptions of intent.

We know this in human institutions too.

Tell a call center to minimize average handle time and some workers will learn to end difficult calls quickly.

Reward a sales team entirely for bookings and it may close deals that are expensive to fulfill or quick to cancel.

Judge teachers primarily by test performance and instruction can narrow toward what the test sees.

Reward publications and researchers may divide one body of work into more papers.

Reward social content for engagement and outrage can outperform calm usefulness.

None of these examples means the metric is stupid.

Handle time matters. Bookings matter. Tests can measure learning. Publications are part of scientific communication. Engagement contains information about what people care enough to respond to.

The problem is that the objective sees less than the institution wants.

Optimization finds the difference.

Generative AI accelerates that discovery because it makes adaptation cheap.

A person can now produce many more candidate artifacts against the same scoring system.

If an application process rewards certain phrases, applicants can generate versions until the phrases fit naturally.

If a product page performs better with a certain structure, a merchant can create variants for every niche.

If a model benchmark rewards a recognizable task distribution, developers can devote extraordinary attention to that distribution.

If an executive prefers concise certainty, internal assistants can turn ambiguous evidence into increasingly polished summaries that fit the preference.

The generator becomes a local optimizer around the human objective.

That can be excellent.

A designer can generate twenty layouts and choose the best one.

An engineer can generate candidate tests until the important failure appears.

A writer can try several structures before committing.

A scientist can explore hypotheses that would have been too expensive to enumerate manually.

Optimization is productive when the objective remains informative.

The danger comes when the artifacts become optimized for the measurement surface more strongly than for the underlying reality.

Then the objective starts eating the signal.

Imagine a hiring system.

The employer wants people who can do a difficult job well.

That quality is expensive to observe. A real work trial takes time. References are imperfect. Interviews are noisy. Past titles differ across companies. So the employer builds proxies: resume quality, degrees, keywords, years of experience, a take-home exercise, interview performance.

Applicants rationally optimize against those proxies.

For years that meant resume coaching, interview preparation, templates, and practice problems. Generative tools make the optimization more granular. Every applicant can have a beautifully formatted resume, tailored to the job description, with polished explanations and rehearsed answers.

This democratizes a form of professional communication that used to reward people who had money, insider knowledge, or unusual writing skill.

Good.

It also means the employer must ask whether the old signals still discriminate among candidates.

The polished resume used to contain information about the applicant.

Now it may contain more information about access to a good assistant.

The application has not become fraudulent.

The signal has become weaker.

That distinction is central.

A proxy can decay without anyone cheating.

People simply get better at satisfying it.

Consider model benchmarks.

Benchmarks are essential because claims about intelligence are otherwise hopelessly vague. A benchmark creates a common test, a scoring method, and a way to compare systems over time.

But successful benchmarks attract optimization.

The Stanford 2026 AI Index describes a striking environment: frontier performance has advanced quickly enough that difficult evaluations can saturate in short periods; it also highlights reliability concerns in widely used benchmark questions and evidence that some leaderboard performance can partly reflect adaptation to the evaluation environment.

The right conclusion is not “benchmarks are fake.”

It is that a benchmark is valuable only while the score remains informative about the capability we care about.

Once a benchmark saturates, a perfect score carries little information about differences above the ceiling.

Once a task distribution is deeply studied, progress on it may say less about generalization to new tasks.

Once question quality is uncertain, score precision can exceed measurement precision.

The measurement surface needs renewal.

This is normal science.

A thermometer that cannot measure above a certain temperature is not dishonest. It has reached the end of its useful range.

The problem appears when institutions continue treating the old number as though its meaning has not changed.

Metrics have half-lives.

Some decay slowly.

Height remains a good measure of height because people do not become taller by learning the scoring rubric.

Other measures decay rapidly because the thing being measured can respond to measurement.

Search ranking is a famous example. The ranking system changes publisher behavior. Publisher behavior changes the corpus. The search engine updates its ranking system. The ecosystem moves again.

The metric participates in the world it measures.

This is why artificial noise is so often an optimization artifact.

The visible signal becomes economically valuable.

People produce more of it.

The signal becomes common.

Its correlation with the underlying quality weakens.

A new signal is needed.

Then people optimize against that one too.

The cycle does not imply hopelessness. It implies maintenance.

Information infrastructure has to evolve because strategic environments evolve.

We are used to maintaining roads, software, machinery, and financial controls. We are less comfortable admitting that measurements need maintenance because the number looks objective after it has been printed.

A score can become obsolete while retaining six decimal places.

That is one of the most dangerous aesthetics in modern organizations: precision after meaning has drifted.

Dashboards make this worse.

A dashboard is persuasive because it puts many measurements in one field of view. Red, yellow, green. Up, down, flat. Target, actual, variance. A leader can walk into a meeting and feel that the organization has become legible.

The dashboard is genuinely useful when each metric has a healthy relationship to the decision.

But the visual coherence can hide semantic drift.

One metric changed definition last quarter.

Another depends on self-reported data.

A third is delayed by three weeks.

A fourth improved because a team changed the denominator.

A fifth tracks a behavior customers learned to perform because the company rewards it.

Every number is real.

The combined story is artificial.

Generative systems can intensify this by making narrative coherence almost free.

Feed the dashboard into a model and ask for the executive summary.

The model can produce a smooth account: growth improved because of this initiative, churn rose because of that market condition, margins compressed for these three reasons, and the next quarter should focus on four priorities.

The summary is useful as a draft.

It becomes dangerous when fluency eliminates visible uncertainty.

A human analyst staring at contradictory numbers might write, “We do not yet understand the churn increase.”

A generator optimized for helpfulness may be tempted to supply an explanation because explanations are what summaries are supposed to contain.

The answer becomes more complete than the evidence.

The objective has eaten a second signal: uncertainty.

Uncertainty is information.

A blank field can be information.

Disagreement can be information.

An unexplained residual can be information.

A failed prediction can be information.

A question nobody can answer can be more valuable than a paragraph that closes the gap prematurely.

Optimization systems often dislike these forms because they look unfinished.

Humans dislike them too.

We want completion.

A recommendation.

A ranking.

A confident answer.

A green box.

A finished deck.

This preference creates an opening for artificial noise. The system can satisfy our demand for closure by manufacturing the shape of closure.

That is why one of the most important design choices in AI-assisted decision systems will be preserving negative space.

Let the system say it does not know.

Let the report contain unresolved questions.

Let competing explanations remain side by side.

Let a metric be marked unreliable when the denominator changed.

Let the benchmark retire.

Let a model abstain.

Let a reviewer reject the premise of the requested summary.

These behaviors look less optimized if the objective is “produce a useful answer every time.”

They may be more optimized if the objective is “help the user avoid confident mistakes.”

Objectives shape character.

That sentence applies to institutions as much as machines.

A company that rewards only speed becomes impatient.

A school that rewards only visible performance becomes theatrical.

A newsroom that rewards only traffic becomes excitable.

A platform that rewards only engagement becomes provocative.

A model that is rewarded for always answering becomes reluctant to remain silent.

The objective does not determine behavior perfectly, but it creates a gradient.

People feel it.

Machines learn it.

Organizations recruit around it.

Over time, the local adaptation becomes culture.

This is why metric design is not a back-office technicality in an AI-rich organization.

It is governance.

Every powerful generator placed behind a weak objective increases the speed at which the weakness can be exploited, intentionally or not.

If a company tells an AI sales system to maximize meetings booked, it should expect a different organization from one that optimizes for long-term qualified customer value.

If a school tells an AI tutor to maximize problem completion, it should expect different behavior from one that measures durable understanding weeks later.

If a coding agent is rewarded only for passing the visible test suite, the tests become the world unless the system is also evaluated against hidden cases, maintainability, security, and broader intent.

The practical response is not to search for a perfect metric.

Perfect metrics are a fantasy because important goals are multidimensional.

The response is to design objectives that are harder to satisfy by imitation alone.

Several principles help.

First, use multiple signals that fail differently.

If every measure depends on the same underlying behavior, ten metrics may really be one metric wearing ten labels.

Second, preserve hidden or changing evaluations where gaming is likely.

A system that knows the exact test can specialize to the test. Novel cases tell us more about generalization.

Third, include delayed outcomes.

A fast proxy can be useful for daily steering, but some qualities reveal themselves only later. Customer retention, loan performance, learning, maintenance burden, and safety often have lagging truth.

Fourth, reward error discovery.

If employees are punished for finding problems, dashboards will become cleaner than reality. If models are evaluated only for correct answers, abstention and anomaly detection may be undervalued. Healthy systems make it valuable to surface the fact that breaks the narrative.

Fifth, retire signals that no longer discriminate.

A metric should not become immortal merely because historical reports depend on it.

Sixth, keep the underlying goal linguistically present.

Metrics are compression. People need periodic reminders of what was compressed.

Not “increase completion.”

Help the student learn.

Not “reduce handle time.”

Solve the customer's problem efficiently.

Not “increase engagement.”

Help people find material they value.

Not “maximize benchmark score.”

Build a system that succeeds on new tasks under realistic conditions.

Language does not solve incentive design, but it can expose moments when the proxy starts drifting from the purpose.

The most dangerous metric is not the obviously bad one.

It is the metric that once worked.

The organization has years of habit around it. Promotions depend on it. Tools display it. Forecasts use it. People know how to improve it. The number has institutional gravity.

Then the environment changes.

Generation becomes cheap.

Optimization becomes faster.

The old signal can be manufactured at scale.

The score continues rising.

Everyone congratulates the system.

And the thing the score was built to reveal becomes harder to see.

That is how the objective eats the signal.
