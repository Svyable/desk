# Part III research controls — Chapters 10–14

Part III moves from benchmark integrity to deployment-shaped measurement. The governing question changes from "Is the test clean?" to "What does task success mean when work lasts longer, failures compound, recovery is possible, context is messy, and the human comparison is itself constructed?"

## Chapter 10 — Time, Not Trivia

### Mechanism

METR's task-completion time horizon is one of the most interpretable attempts to move beyond benchmark percentages. The measure relates agent success probability to the estimated time a human expert needs to complete the same task. A 50%-time horizon is the human-task duration at which the fitted model predicts 50% agent success.

The current Time Horizon 1.1 suite contains more than one hundred software-heavy tasks drawn from RE-Bench, HCAST and shorter novel tasks. METR fits a logistic curve between task duration and success. Human durations are usually estimated from contracted humans attempting the task under similar instructions and affordances; for some tasks, expert estimates or QA completion times are used.

The authors repeatedly warn against a common paraphrase. Time horizon is **not the length of time an AI can work independently**. It is a statistical estimate connecting success probability to human-equivalent serial task duration on the evaluated task distribution.

Current limitations matter:
- the task distribution is heavily software/ML/cyber oriented;
- tasks are deliberately self-contained and well specified;
- human duration estimates can overestimate day-to-day professional time because contracted humans lack ordinary project context;
- current page warns measurements above 16 hours are unreliable on the present suite;
- recent frontier agents have substantially saturated TH1.1, increasing sensitivity to modeling assumptions.

The current frontier-risk report says the most capable agents evaluated in Feb–Mar 2026 essentially saturated TH1.1, leaving only a handful of longer tasks unsolved and making point estimates increasingly uncertain. Use this as a measurement-boundary story, not as a claim of two-day general autonomy.

### Claims to avoid

- Do not translate time horizon into uninterrupted autonomous runtime.
- Do not generalize a software-heavy task distribution to all occupations.
- Do not present the fitted point estimate without the benchmark's saturation/uncertainty caveat.
- Do not assume human duration is a fixed natural measure of task difficulty.

## Chapter 11 — Reliability at N

### Mechanism

A benchmark normally asks whether one task succeeded. Real workflows can require many dependent things to go right.

NIST's reliability handbook provides a clean engineering analogy. In a series system where every independent component must survive, system reliability is the product of component reliabilities. If twenty genuinely independent critical steps each succeed 95% of the time, naïve end-to-end reliability is (0.95^{20}), roughly 36%. This is an explanatory model, not a literal agent forecast.

The assumptions matter more than the arithmetic:
- agent errors are often correlated, not independent;
- a single bad premise can contaminate many later steps;
- some failures are detectable and repairable;
- some steps are optional or redundant;
- retries can raise reliability when failure modes are not perfectly correlated;
- human checks can convert a pure series process into a repair/redundancy architecture.

NIST also provides r-out-of-n and redundant system models. These give a more useful analogy for agents with retries, multiple candidate generation, verification, fallback models or human escalation.

The chapter should define **reliability at N** as the end-to-end probability that a workflow reaches an acceptable state under a specified process, not as the product of a benchmark score unless the series assumptions actually hold.

### Claims to avoid

- Do not raise benchmark accuracy to the Nth power and call the result real-world reliability without an explicit toy-model label.
- Do not assume errors are independent.
- Do not treat retries as free; they add cost/latency and can repeat correlated failures.
- Do not equate detected/recoverable failure with silent failure.

## Chapter 12 — The Cost of One More Nine

### Mechanism

Reliability engineering asks what level of failure is tolerable given consequence and cost. Google SRE's *Embracing Risk* is useful because it explicitly rejects 100% availability as the right target for most services and uses error budgets to balance reliability with development velocity.

The "nines" language expresses high availability: 99%, 99.9%, 99.99%, 99.999%. Each additional nine can reduce the permitted failure window by an order of magnitude. Google SRE's availability table makes the operational meaning concrete.

For AI, the analogous mistake is to treat "more reliable" as unconditionally better without defining:
- the unit of failure;
- severity;
- reversibility;
- detectability;
- cost of verification;
- latency budget;
- availability of fallback;
- whether the task is advisory or action-taking.

A drafting assistant can tolerate visible failure differently from an autonomous production-change system. The correct target is a product/risk decision.

Error budgets offer a useful conceptual move: decide how much failure the use case can absorb, monitor it, and spend engineering effort where the budget is actually consumed. Do not claim Google uses error budgets for LLMs; this is an analogy from production reliability.

### Claims to avoid

- Do not say 99.9% model accuracy equals 99.9% service availability.
- Do not use "five nines" without defining the event being counted.
- Do not imply maximal reliability is economically optimal in all domains.
- High-consequence cases can rationally demand much tighter controls.

## Chapter 13 — Messiness Is the Job

### Mechanism

Benchmarks favor self-contained, well-specified tasks with clear success criteria because those tasks can be scored. METR states this design choice explicitly for Time Horizon 1.1. Real work often contains project history, tacit conventions, coordination, ambiguity, shifting requirements and consequences that cannot be fully written into one prompt.

The 2025 METR randomized trial with experienced open-source developers creates a powerful countercase to simple benchmark extrapolation. Sixteen experienced developers completed 246 real tasks in mature repositories they knew well; access to early-2025 AI tools increased completion time by 19%, even though participants expected AI to speed them up. This is a small, specific setting and early-2025 tooling; it must not be turned into a universal "AI slows developers" claim.

Dillon et al.'s experiment across 66 firms and 7,137 knowledge workers gives a broader coordination result. AI access reduced email time for active users and reduced after-hours work, but individual-level provision did not produce broad detected changes in the quantity or composition of tasks. Work that requires organizational coordination does not automatically reorganize when one worker receives a tool.

Counterevidence is essential:
- Brynjolfsson/Li/Ray found substantial productivity gains in customer support, especially among less experienced workers;
- the P&G "Cybernetic Teammate" field experiment found individuals with AI could match teams without AI on product-innovation work and AI improved performance in that setting;
- BCG's jagged-frontier experiment found gains inside the tested capability frontier and worse performance on an outside-frontier task.

The chapter should argue that **messiness is a measurable variable**, not a mystical human moat. Context familiarity, workflow integration, coordination and error cost can be included in field evaluation.

### Claims to avoid

- Do not romanticize ambiguity as uniquely human.
- Do not generalize a 16-developer RCT to software engineering broadly.
- Do not dismiss benchmark results because real work is messier; benchmarks isolate mechanisms.
- Do not imply current coordination bottlenecks are permanent.

## Chapter 14 — The Human Is in the Benchmark

### Mechanism

"Human level" is not a natural constant. Human baselines are produced by a sampling and protocol decision.

GPQA illustrates the issue cleanly. The benchmark's domain experts achieved about 65% accuracy, or 74% when excluding clear mistakes the experts identified retrospectively; strong nonexpert validators achieved about 34% despite unrestricted web access and substantial time. Which number is "human"?

METR's time-horizon work uses contracted humans under similar instructions/affordances and usually takes a geometric mean of successful completion times. METR itself notes that these estimates likely overstate how long ordinary experts with project context would take. The human measure is an experimental construct serving a particular purpose.

Humanity's Last Exam is built from expert-submitted questions at the academic frontier, but "expert human frontier" should not be translated into a universal percentage for humanity. Expertise is domain-specific; question writers, validators and test takers occupy different populations.

The chapter should distinguish:
- median person;
- educated nonexpert;
- domain expert;
- best available expert;
- team;
- tool-assisted expert;
- expert with ordinary project context;
- expert given benchmark-like isolation and instructions.

The baseline must match the decision. A model replacing a workflow should be compared with the workflow, not with an unaided individual chosen for convenience.

### Claims to avoid

- Do not use "human level" without naming the population, tools and conditions.
- Do not treat one expert's error as a species ceiling.
- Do not assume humans and models received equivalent context merely because the prompt text matched.
- Do not imply machine superiority on a bounded benchmark establishes superiority over humans in the surrounding profession.

## Part III progression

Chapter 10 turns capability into a duration-linked probability without claiming continuous autonomy.

Chapter 11 shows why local success can decay across a chain and how recovery changes the architecture.

Chapter 12 asks what reliability target is worth buying once consequence, cost and reversibility enter.

Chapter 13 puts the system into work that contains context and coordination the benchmark intentionally removed.

Chapter 14 finally interrogates the denominator in "human level."

## Sources for this pass

- METR, *Task-Completion Time Horizons of Frontier AI Models*: https://metr.org/time-horizons/
- METR, *Time Horizon 1.1* (2026): https://metr.org/blog/2026-1-29-time-horizon-1-1/
- METR, *Clarifying limitations of time horizon* (2026): https://metr.org/notes/2026-01-22-time-horizon-limitations/
- METR, *Frontier Risk Report (February to March 2026)*: https://metr.org/frontier-risk-report
- NIST/SEMATECH, *Series model*: https://www.itl.nist.gov/div898/handbook/apr/section1/apr182.htm
- NIST/SEMATECH, *R out of N model*: https://www.itl.nist.gov/div898/handbook/apr/section1/apr184.htm
- Google SRE, *Embracing Risk*: https://sre.google/sre-book/embracing-risk/
- Google SRE, *Service Level Objectives*: https://sre.google/sre-book/service-level-objectives/
- Google SRE, *Availability Table*: https://sre.google/sre-book/availability-table/
- Joel Becker et al., *Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity*: https://metr.org/Early_2025_AI_Experienced_OS_Devs_Study-paper.pdf
- Eleanor W. Dillon et al., *Shifting Work Patterns with Generative AI*: https://www.nber.org/papers/w33795
- Fabrizio Dell'Acqua et al., *The Cybernetic Teammate*: https://www.nber.org/papers/w33641
- Erik Brynjolfsson, Danielle Li and Lindsey Raymond, *Generative AI at Work*: https://www.nber.org/papers/w31161
- Fabrizio Dell'Acqua et al., *Navigating the Jagged Technological Frontier*: https://doi.org/10.1287/orsc.2025.21838
- David Rein et al., *GPQA: A Graduate-Level Google-Proof Q&A Benchmark*: https://arxiv.org/abs/2311.12022
- Center for AI Safety / Scale AI / HLE Contributors, HLE *Nature* paper: https://doi.org/10.1038/s41586-025-09962-4
