# The Long Task

A benchmark can make a machine look more autonomous than it is.

That is not a criticism of benchmarks. It is a reminder that measurement requires a boundary, and the boundary can disappear when the result leaves the paper.

METR has spent several years trying to measure a property that matters directly to this book: how long a task an AI agent can complete reliably. The organization’s “time horizon” work asks human experts how long tasks take and measures how model performance changes as task duration rises. The tasks are concentrated in domains such as software engineering, machine learning, and cybersecurity, where outcomes can be judged with unusual clarity.

The result is a curve.

Short tasks are easier.

Longer tasks fail more often.

As models improve, the length of task they can complete at a given success rate increases.

This sounds almost too obvious to deserve a research program until the scale of the change is considered. A system that succeeds on a five-minute task and fails on anything requiring an afternoon is a tool of a particular kind. A system that can reliably complete work that takes a skilled person hours occupies a different role. Extend the horizon far enough and the unit of automation changes from action to project.

The phrase “time horizon” invites a mistake METR explicitly warns against.

It is not a stopwatch on literal continuous autonomy.

If a model has a measured horizon corresponding to tasks that take a human expert several hours, that does not mean it can be turned loose for several hours in any environment and expected to behave like an employee. The benchmark distribution matters. The tools matter. The evaluation matters. The environment is structured enough that success can be determined.

This distinction is easy to preserve in a methods section and easy to lose in a headline.

For EXIT HUMAN, it is the distinction.

Machine succession is a long-task problem raised to an absurd scale.

Keep a civilization running for an hour.

Then a day.

Then a year.

Then through equipment failures, supplier failures, weather, software bugs, political shocks, depleted resources, new diseases in biological workers if any remain, fires, floods, corrosion, unexpected interactions, and the ordinary physical entropy that does not care how good a model was on a benchmark.

The task horizon of civilization is not one number.

It is a stack of loops with different failure rates and repair times.

Software engineering is an unusually favorable place to study the beginning because software gives agents a world they can already touch.

Code is symbolic.

Tools are exposed through commands.

Copies are cheap.

Tests can provide fast feedback.

Failures often leave logs.

State can be inspected.

Changes can be reverted.

The agent can operate through the same digital interface used by a human programmer.

This does not make coding easy.

It makes the environment legible.

A model can read an issue, inspect a repository, edit files, run tests, observe errors, and try again without needing a robot to turn a screwdriver or a technician to carry a sample across a laboratory. Each step can happen inside an environment already designed to accept machine instructions.

The difference between writing code and operating a steel mill is not merely one of intelligence.

It is one of interface density.

Software has handles everywhere.

Physical systems often do not.

This is why a rapid increase in software-agent time horizons can be genuinely important and still tell us little about unattended industrial autonomy.

The benchmark result establishes that some forms of cognitive work can be chained for longer.

It does not establish that the world has become as machine-readable as a code repository.

Researchers around AI agents have identified another problem: a benchmark can reward systems that look impressive while hiding economics.

In “AI Agents That Matter,” Sayash Kapoor and colleagues argued that agent evaluations should measure costs, reproducibility, overfitting, and real-world usefulness rather than ranking systems only by nominal task completion. A method that solves more tasks by making enormous numbers of model calls may be technically interesting and commercially useless. A system optimized repeatedly against a public benchmark can become good at the benchmark without gaining the general capability observers think they are measuring.

That is an old problem in a new costume.

Schools teach to tests.

Athletes optimize for events.

Companies optimize metrics.

Models optimize benchmarks.

A measurement becomes part of the environment and therefore part of what gets selected.

The correct response is not to abandon measurement.

It is to keep the claim the same size as the test.

For this book, the useful claim is already substantial: frontier AI systems have been improving at sustained work across longer digitally defined tasks, and that capability can remove human intervention from longer portions of some workflows.

The missing claim is larger: these improvements will continue at the same rate, generalize to open-ended environments, and close enough physical loops to make human intervention optional.

Nothing in the benchmark establishes that.

The difference can be made concrete through interruption.

Give a coding agent a repository and a failing test. The agent may diagnose the problem, write a patch, run the suite, and produce a useful change.

Now remove network access.

Perhaps it still works.

Remove access to a dependency it needs.

Now the problem changes.

Introduce a test whose intended behavior is ambiguous.

Now the agent may need product judgment.

Make two tests conflict because the organization itself has not decided which behavior is correct.

The task is no longer a software problem alone.

It has become an institutional problem.

This happens constantly in real work.

A person asks for a feature, but the request conflicts with another team’s expectations.

A machine is failing, but the repair requires a part whose vendor discontinued it.

A laboratory produces an anomalous result, but the anomaly could be contamination, calibration, an unexpected phenomenon, or a mistake in the experimental design.

A supplier offers a cheaper component, but the long-term reliability data is weak.

A customer asks for an exception that makes sense in context and breaks a formal rule.

Long work accumulates ambiguity.

This is one reason reliability matters more than peak capability.

Suppose an agent succeeds on each consequential step with 99 percent probability and failures are independent. After one hundred such steps, the probability that every step succeeds is about 37 percent. Real tasks are not that simple: failures can be detected, steps vary in difficulty, errors are correlated, systems can retry, and some mistakes do not matter. The arithmetic is still useful. Long chains turn small error rates into a design problem.

Humans have the same problem.

Civilization did not solve it by making every worker perfect.

It built institutions around fallibility.

Checklists.

Redundancy.

Audits.

Professional standards.

Testing.

Inventory buffers.

Escalation paths.

Insurance.

Maintenance intervals.

Safety factors.

Incident reviews.

Training.

Markets.

Courts.

Management.

A machine civilization would need equivalents.

This is the part of autonomy that gets less attention because it is less dramatic than reasoning.

Intelligence can produce a plan.

Operations keep the plan alive after contact with reality.

The difference appears clearly in aviation.

Modern aircraft automate large portions of flight. Autopilot can maintain altitude, speed, heading, follow navigation paths, and work with systems capable of highly automated approaches. Commercial aviation remains one of the most intensively maintained human technical systems on Earth. Pilots are one layer inside a larger ecology of dispatch, air traffic control, maintenance, inspection, training, weather services, manufacturers, regulators, fuel systems, airports, and component suppliers.

Automation in the cockpit did not create an autonomous aviation civilization.

It moved the boundary of human work.

This is the pattern to watch in AI.

A long-horizon agent may reduce the number of times a software engineer has to intervene. That can create real economic value. It can also move human attention toward specification, review, architecture, exception handling, and accountability.

If the agent improves further, some of those roles may move too.

Then another boundary appears.

Who decides whether the product should exist?

Who negotiates a conflict between objectives?

Who carries legal responsibility?

Who understands the production environment well enough to recognize a failure that has not appeared in testing?

Who responds when the organization’s goal itself becomes wrong?

The Landian answer is that these functions too can become processes.

A market can select products.

Other agents can negotiate conflicts.

Insurance and law can price responsibility.

Monitoring systems can detect failures.

Models can evaluate models.

Automated scientific systems can revise assumptions.

The human need not remain at the top if there is no top.

That is an important possibility.

It also changes the architecture of risk.

A human supervisor is not automatically safer than an automated one. Human reviewers become inattentive, defer to systems, miss errors, and sign things they do not understand. Replacing weak ceremonial review with independent automated verification can improve reliability.

The critical word is independent.

If one model writes code and another instance of the same model checks it using the same assumptions and training patterns, agreement may be cheap. If an external test probes the artifact through a different mechanism, the evidence is stronger.

A machine ecology capable of operating without humans would need disagreement mechanisms.

It would need ways for one subsystem to detect that another is confidently wrong.

Biology evolved these imperfectly. Immune systems detect many threats and create autoimmune disease. DNA repair corrects errors and sometimes fails. Predator-prey relationships regulate populations and can destabilize. Ecosystems are resilient in some dimensions and fragile in others.

Human institutions invented more deliberate forms.

Double-entry bookkeeping creates an internal consistency check.

Independent audits separate production from verification.

Courts put opposing parties in structured conflict.

Science relies on replication, criticism, and methods designed to let nature reject a claim.

Engineering uses destructive testing because asking a designer whether a bridge is strong enough is not the same as loading the structure.

Autonomy needs adversaries.

An agent that can work longer without interruption is useful.

A system that can discover when its own long work has drifted is much closer to independence.

This leads to a better way to interpret time-horizon progress.

The important frontier is not only how long one agent can pursue one objective.

It is how long a system of agents, tools, tests, institutions, and physical processes can remain inside acceptable bounds without external intelligence entering the loop.

That frontier can advance through better models.

It can also advance through better environments.

Standardize an interface and the agent becomes more capable without changing its model.

Add reliable tests and it can operate longer.

Give it a map of the system and recovery procedures and failures become easier.

Expose inventory data and procurement tools and it can resolve shortages.

Install sensors and a maintenance system can reason about equipment state.

Automation is partly the project of making environments legible enough that machines can manage them.

This is exactly what factories have done for generations.

A modern production line is not a slice of uncontrolled physical reality. It is engineered to constrain variation. Parts arrive in fixtures. Motions are repeated. tolerances are specified. Sensors convert physical states into signals. Safety zones restrict interactions. Maintenance procedures define known failure modes.

Robots thrive when the world is redesigned for robots.

Human beings do too. Roads are environments redesigned for vehicles. Airports are engineered around aviation. Offices are made legible to bureaucracies through forms, schedules, job roles, and records.

The post-human question can therefore be asked two ways.

How capable must machines become to handle the human world?

How much will humans reshape the world so machines no longer have to?

The second route may be faster.

A household is messy because it evolved around human life. A fulfillment center can be redesigned around standardized bins, barcodes, controlled routes, and machine-readable inventory. A mine can add autonomous haul roads. A port can standardize containers. A data center can be built with robotic inspection in mind.

Every redesign moves complexity from the agent into the environment.

This is not cheating.

Intelligence has always been environmental.

Humans use language, maps, signs, lists, institutions, measurement, architecture, and tools to make difficult tasks easier. A pilot does not reconstruct aerodynamics during every flight. A surgeon does not manufacture instruments. A trader does not personally authenticate every security certificate.

The machine successor, if one emerges, will inherit a world already full of cognitive scaffolding.

The hard part is the tail.

Ninety-nine percent of operations may be routine.

The remaining one percent can define whether a human is still essential.

A warehouse can be automated until a damaged pallet arrives.

A mine can run autonomous trucks until a road washes out.

A data center can monitor itself until a cooling loop fails in an unfamiliar way.

A laboratory can execute experiments until an instrument produces a signal outside its known diagnostic tree.

A software system can deploy changes until a dependency behaves in a way its documentation did not anticipate.

Human work often migrates toward the tail because people are expensive and flexible.

This creates a paradox.

Automation can make the remaining human work harder.

The routine cases that once trained intuition disappear. People are left with rare exceptions, degraded context, and the expectation that they intervene only when the automation is confused. Aviation human-factors research has lived with this problem for decades. High reliability can turn the person into a monitor whose skills are most needed when practice has been reduced.

A machine ecology would escape this paradox only by automating the tail or preserving machine capabilities for recovery that do not depend on routine repetition.

Simulation is one answer.

Systems can train on failures that have not happened recently.

Digital twins can model equipment.

Synthetic environments can generate edge cases.

Robots can practice manipulation in simulation.

Agents can be evaluated against adversarial tasks.

But simulated surprise is not the same as surprise.

The distribution of future failures is not fully knowable from the past. New combinations occur. A supposedly independent system must eventually encounter events its designers did not enumerate.

Generalization becomes the core property.

That is where human beings still possess a remarkable advantage in many physical settings. A person can walk into an unfamiliar room, infer what matters, use ordinary objects as improvised tools, ask another person for help, notice smoke, move around an obstruction, and transfer knowledge from one domain to another with little explicit retraining.

Current robots can be spectacular inside bounded tasks and brittle outside them.

Current agents can be spectacular inside digital tasks and confused by ambiguities a human resolves through ordinary world knowledge.

The gap is narrowing in some domains.

It is not gone.

The right conclusion from METR’s curves is therefore neither complacency nor inevitability.

The measured horizon is moving.

That means the boundary around machine-operable work is moving too.

The next question is what happens when the evaluator is not a software test but nature.

Science is a long task with an unusually unforgiving reviewer.

A molecule either has the property.

A material either survives the condition.

An experiment either reproduces or it does not.

The laboratory is where machine agency begins to touch a world that cannot be patched after the test fails.
