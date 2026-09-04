# Software Begins to Improve Software

The shortest route from intelligence to more intelligence runs through code.

Software is the part of the AI production system that already lives in the same world as the models trying to improve it.

A chip fab is physical. A power plant is physical. A transformer is physical. A data center is stubbornly physical despite the ethereal products it serves.

Code is different.

It can be read, modified, tested, copied and deployed without leaving the machine-readable environment in which AI systems are strongest.

This makes software the first place to look for genuine recursive acceleration.

Not because software is all that matters.

Because software has the shortest feedback loop.

A model proposes a change.

A compiler accepts or rejects it.

Tests run.

Benchmarks score it.

The result returns to the model.

Another change follows.

That loop can run in minutes.

Compare it with chip fabrication, where a design can take months to become silicon, or energy infrastructure, where a project can spend years moving through planning and construction.

The difference in cycle time is enormous.

Takeoff should appear first where the loop is shortest and the evaluator is strongest.

Software fits both conditions.

This is why coding ability has become such an important frontier benchmark even though civilization is not made entirely of repositories. Code offers a compressed laboratory for agency.

A coding system has to understand an objective, inspect an unfamiliar environment, make a plan, manipulate tools, preserve constraints, recover from errors and know when it is done. Those capabilities generalize beyond programming.

But programming adds something especially useful.

The environment talks back precisely.

The program runs or it does not.

The test passes or it fails.

The latency improves or worsens.

The memory footprint shrinks or grows.

The proof checker accepts the argument or rejects it.

Machine intelligence becomes more powerful when the world provides an automatic grader.

This was the architecture behind several of the most interesting algorithm-discovery systems before 2026. Google DeepMind’s AlphaEvolve combined language models that generated candidate programs with automated evaluators that scored them and an evolutionary process that retained promising variants.

The resulting system was not merely a code generator.

It was a search loop.

That distinction is the point.

Generation without evaluation produces volume.

Generation with evaluation can produce improvement.

DeepMind reported that AlphaEvolve found optimizations used inside Google’s computing infrastructure, including a data-center scheduling heuristic, hardware-design changes, training and inference optimizations and new algorithms for mathematical problems. By 2026, the company said the system had become a regular tool for optimizing future TPU designs and had compressed some engineering searches that previously took months into much shorter automated efforts.

The exact examples will age.

The mechanism will not.

Software can become the evaluator for software.

Once that happens, machine-generated variation no longer depends on a human reading every candidate.

This changes the economics of improvement.

Human software engineering has always contained search. An engineer forms a hypothesis, edits code, runs it and observes the result. A good engineer narrows the search through experience.

Machine systems can search more broadly because candidate generation is cheap.

They can also search continuously.

An optimization that is not worth a human engineer spending three days on may be worth a machine spending three million cheap trials on if the evaluator is reliable and the eventual gain applies at scale.

This is where tiny improvements become important.

A fraction of a percent of data-center efficiency sounds boring next to a dramatic model release.

Applied across a vast computing fleet, it becomes real capacity.

Recovered compute can train models, serve users or reduce capital requirements.

A one-percent training improvement can matter because training runs are enormous.

A faster kernel can matter because it runs billions of times.

At scale, microscopic software improvements turn into physical savings.

This is the bridge from the digital loop back to the industrial runway.

Software can effectively manufacture capacity without building a new building.

If an optimization allows the same hardware to perform more useful work, the system has created virtual compute.

That does not eliminate demand for new hardware. Efficiency often increases demand by making additional uses economical.

But it changes the rate at which capability can expand between construction cycles.

The installed base becomes more productive.

This is a recurring way that AI can accelerate itself without designing a new model architecture from first principles.

Improve the compiler.

Improve scheduling.

Improve networking.

Improve memory management.

Improve kernels.

Improve data pipelines.

Improve experiment tracking.

Improve evaluation.

Improve the tools used by researchers.

Each improvement changes the effective productivity of the humans and machines working on the next model.

Recursive improvement can be distributed across thousands of mundane pieces of software.

That is less cinematic than a model rewriting its own weights.

It may be more realistic.

Modern AI systems are not one program.

They are stacks.

Data ingestion, preprocessing, training orchestration, distributed communication, checkpointing, monitoring, inference serving, routing, caching, quantization, compiler passes, numerical kernels, evaluation harnesses, security systems and developer tools all contribute to cost and speed.

The model sits on top of this stack and increasingly participates in maintaining it.

If AI improves each layer a little, the aggregate effect can be large.

The loop becomes stronger when AI is also used to improve the process by which AI improvements are discovered.

Consider evaluation.

A research team can generate many candidate model changes, but experiments are expensive. Choosing which experiments to run is itself an optimization problem. Agents can inspect prior results, suggest promising branches, prepare experiment code, monitor runs and summarize failures.

This increases the number of research iterations a team can manage.

The gain comes not from one brilliant insight but from reduced friction between attempts.

Research velocity is partly a logistics problem.

A scientist spends time configuring environments, reproducing results, locating regressions, comparing runs and writing glue code. If machine agents absorb enough of that work, the human researcher can spend more time choosing questions.

Then the bottleneck moves.

Perhaps the scarce resource becomes experimental compute.

Perhaps it becomes evaluator quality.

Perhaps it becomes senior judgment about which research directions deserve thousands of machine-hours.

The bottleneck migrates, but the cycle can still accelerate.

This is where simple predictions about autonomous AI research become unreliable.

It is tempting to ask whether an AI system can “do AI research.”

That is too coarse.

Research is a bundle of activities with different feedback structures.

Some are highly machine-readable.

Run this ablation.

Compare these logs.

Rewrite this kernel.

Port this implementation.

Search this hyperparameter space.

Find the commit that introduced this regression.

Generate a benchmark.

Check whether a paper’s reported result reproduces.

Other activities are much harder to grade automatically.

Choose a research paradigm.

Decide which apparent anomaly matters.

Recognize that a benchmark is teaching the wrong lesson.

Infer that a result is scientifically interesting rather than merely numerically better.

Balance a promising direction against safety, cost and strategic risk.

The frontier between those categories will move.

Takeoff does not require all of them to automate at once.

It requires enough of the research cycle to become faster that improvements arrive sooner than the institutions around them were built to expect.

METR’s task-horizon work gives one way to observe the movement. Its evaluations estimate the duration of software tasks, measured by human completion time, that frontier agents can complete at different reliability levels. The numbers change as models change, which makes any single value less important than the curve.

The curve asks a useful question.

How long can the machine remain productive before a human has to rescue it?

At five minutes, an agent is a tool.

At an hour, it can absorb a meaningful task.

At a day, it can own a work package.

At a week, the shape of software management changes.

These are not magical thresholds. Reliability and task type matter enormously.

But time horizon measures a deep feature of delegation.

Longer autonomous episodes let machine work escape the cadence of constant human supervision.

That is when parallelism becomes economically powerful.

One engineer can supervise several long-running agents instead of interacting with one assistant every few seconds. The engineer moves from producing every change to allocating objectives and reviewing exceptions.

The organization begins to look different.

This is why the transition from autocomplete to agents matters more than the transition from one benchmark score to another.

Autocomplete makes a human faster inside a task.

Agents change how many tasks the human can own at once.

The productivity function changes from assistance to leverage.

Leverage creates a feedback loop because software teams are building the software used by software teams.

Better coding agents help build better coding-agent infrastructure.

Better infrastructure makes it cheaper to train and evaluate better agents.

Better agents automate more of the infrastructure.

The loop can close quickly because deployment is digital.

There are brakes.

Software is full of deceptive evaluators.

A test suite can be incomplete.

A benchmark can be gamed.

A performance optimization can degrade maintainability.

A system can pass every visible test while violating an unstated requirement.

Security failures can hide until an adversary finds them.

A local speedup can create a global bottleneck elsewhere.

Automatic evaluation is only as good as what it measures.

This is the verification problem in its purest form.

An agent that optimizes against a weak objective can accelerate in the wrong direction.

The faster the search loop, the more quickly it can exploit mistakes in the grader.

Humans have known this problem under many names: Goodhart’s law, specification gaming, overfitting, metric fixation. Machine search makes it operational.

The solution is not to stop automation.

It is to strengthen the evaluator.

Multiple test suites.

Adversarial tests.

Formal verification where practical.

Production canaries.

Rollback systems.

Independent agents checking each other.

Human review at high-consequence boundaries.

The software runway becomes a contest between the speed of generation and the strength of verification.

If generation improves faster, the organization drowns in plausible changes.

If verification keeps pace, the organization can safely accept more machine-produced work.

The accepted-change rate is therefore more useful than the generated-code rate.

This distinction matters because code volume can rise while productivity falls.

Repositories can become harder to understand. Technical debt can accumulate. Review queues can explode. Engineers can spend their days inspecting machine output instead of writing code.

An early randomized study by METR produced exactly the kind of counterexample the runway framework needs. Experienced developers working in mature open-source repositories believed AI tools were helping them, yet in the measured setting the tools slowed them down.

That result was not proof that coding AI had failed.

It was proof that capability does not automatically convert into throughput.

The integration layer matters.

The user interface matters.

The task distribution matters.

The quality of the model matters.

The cost of checking matters.

The maturity of the codebase matters.

A takeoff roadmap that ignores these frictions mistakes potential energy for motion.

The more interesting question is what happens when the frictions themselves become targets of automation.

Review assistance improves.

Agents learn the repository’s conventions.

Tests become richer.

Continuous integration becomes more adaptive.

Code provenance improves.

Changes are smaller and easier to audit.

Agents reproduce failures before asking for human attention.

The interface shifts from chat to objective delegation.

The organization learns where autonomy is safe.

Then the same technology that initially created overhead can begin removing it.

This is a pattern we should expect across the runway.

Early adoption often makes systems temporarily more complicated because new and old workflows coexist. The productivity gain arrives only after the surrounding process is redesigned.

Electric motors did not transform factories merely by replacing steam shafts one for one.

Computers did not transform offices merely by recreating paper forms on screens.

Agents will not transform software merely by typing into the same workflows humans used.

The software development process will reorganize around machine abundance.

Tasks can be specified more formally because agents benefit from explicit acceptance criteria.

Tests can become contracts rather than afterthoughts.

Repositories can carry richer machine-readable context.

Architectural decisions can be recorded in forms agents can consult.

Issue trackers can become execution queues.

Code review can focus on policy, risk and design while machines handle routine consistency.

Some organizations will build these interfaces deliberately.

Others will remain trapped in a world where AI writes faster than humans can absorb.

The productivity gap between them could become large.

This is another reason takeoff may be uneven.

The model is shared.

The organizational runway is not.

A frontier agent can be available globally while only a subset of firms have the systems, permissions and verification culture required to delegate consequential work.

Those firms learn faster because they accumulate experience with machine execution.

Learning itself becomes a competitive asset.

They discover which tasks are safe to delegate.

They build better evaluators.

They redesign workflows.

They produce internal data about failure modes.

That knowledge increases the amount of autonomy they can grant.

Autonomy produces more data.

The loop closes inside the organization.

Software companies may reach this state first because their work is already digital.

When they do, they become laboratories for the wider economy.

The patterns developed there—machine-readable objectives, automatic evaluators, bounded permissions, reversible actions, exception routing—can migrate into finance, logistics, science and manufacturing.

Software is not merely one sector being automated.

It is where the grammar of delegation is being invented.

That grammar will matter when intelligence reaches machines.

A robot also needs an objective, permissions, state, evaluators and recovery procedures. A laboratory agent needs the same. An energy-management agent needs the same.

The software stack becomes the control layer for physical acceleration.

This is why improving software has second-order effects.

Better software does not only make computers better.

It makes the institutions connected to computers easier to coordinate.

Scheduling improves equipment utilization.

Simulation reduces physical mistakes.

Monitoring reduces downtime.

Optimization extracts more output from installed capital.

Planning improves project sequencing.

Design tools compress engineering cycles.

Every physical bottleneck has a software boundary somewhere around it.

AI can attack that boundary first.

Sometimes the gain will be modest because the physical bottleneck dominates.

A faster permit application does not make concrete cure faster.

Sometimes the gain will be enormous because coordination was the hidden constraint.

A data center waiting for a missing component may be delayed not by manufacturing but by a planning error that failed to order it early enough.

The runway is full of these interfaces.

The important recursive loop is therefore broader than “AI writes AI code.”

AI improves the software that coordinates the production of AI.

That software improves the effective productivity of chips, researchers, networks, power systems, construction teams and laboratories.

Those improvements expand the resources available to train and deploy better AI.

Better AI returns to the software layer.

The loop may pass through many people and companies before closing.

It is still a loop.

The speed of that loop will depend on how much of it can be evaluated automatically and how much remains on slow human or physical critical paths.

Software gives us the optimistic case.

The evaluator can be immediate.

The deployment can be immediate.

The improvement can spread globally.

The cost of another attempt can be tiny.

This is the closest part of the runway to pure exponential machinery.

That does not mean software alone can carry the aircraft.

Eventually the loop asks for electricity.

It asks for chips.

It asks for cooling.

It asks for people willing to let software control valuable systems.

It asks reality for permission.

But each time software shortens one of those waits, the next cycle begins sooner.

This is how recursive improvement can start before any system is capable of improving every component of itself.

It only needs to improve enough components that the average cycle time falls.

Then the runway is no longer being built at a fixed human pace.

Part of the machinery building it is running on the intelligence the runway already produced.
