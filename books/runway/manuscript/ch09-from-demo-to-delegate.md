# From Demo to Delegate

A demo asks a machine to impress you.

Delegation asks it to come back when the work is done.

The distance between those two experiences is the distance between much of the AI industry’s current value and the value it hopes to create.

A good demo can be astonishing. A model writes a program from a sentence, analyzes an image, produces a legal argument, explains a scientific paper or controls a tool it was never explicitly programmed to use. The observer sees a capability that did not exist in an accessible form a few years earlier and naturally extrapolates.

If it can do that, surely it can do the job.

Sometimes it can.

The trouble is hidden in the word “the.”

Jobs are not benchmark prompts. They are streams of objectives interrupted by ambiguity, missing information, changed requirements, permissions, exceptions, conflicting incentives and other people. They extend through time. They contain consequences. They create obligations to remember what happened yesterday and explain what happened when something goes wrong.

A demo gets to choose the moment.

A delegate has to survive the week.

This is why the move toward agents matters more than the move toward better chat. The model is being attached to memory, tools and loops that allow it to continue acting. Instead of waiting for each instruction, the system can inspect a state, choose an action, observe the result and choose again.

The unit of work expands.

First a sentence.

Then a file.

Then a repository.

Then a ticket.

Then a project.

The progression sounds smooth in retrospect. In practice, every expansion creates a new failure surface.

A model that writes one function can be checked by a developer. A system that changes fifty files has more opportunities to misunderstand architecture. A system that works for six hours can encounter external changes, rate limits, broken tools and intermediate decisions that make sense locally but lead away from the original objective. A system that operates across customer records can create privacy and authorization risks. A system that sends messages can create reputational consequences even when each message looks plausible.

The longer the delegation, the more the surrounding machinery matters.

This is where a simple measure like task horizon becomes useful.

METR’s evaluations ask how long a task a frontier system can complete at a specified success rate under controlled conditions. The exact numbers will continue to move and should not be treated as a universal measure of autonomy. Software tasks are easier to evaluate automatically than many real jobs. The benchmark distribution matters. Model scaffolding matters. A task solved in an evaluation may be much cleaner than work inside a living organization.

Still, the concept is powerful.

Intelligence has duration.

A system that is useful for five minutes without supervision is different from one that is useful for five hours. A system that can remain coherent through days of work would change another class of activities. Duration converts capability into delegation.

The hard part is that error compounds with duration.

Suppose an agent chooses the right action ninety-nine times out of a hundred. That sounds excellent. Over a short task, it may be excellent. Over thousands of consequential steps, the rare mistake stops being rare.

Long-running autonomy therefore requires more than better average judgment.

It requires recovery.

Humans survive long projects because they notice mistakes, ask for help, reinterpret goals, check assumptions and use institutions full of redundant safeguards. A surgeon does not trust memory alone. A pilot uses checklists. A software engineer uses tests and version control. An accountant reconciles. A scientist replicates. A lawyer has review. Organizations are machines for making imperfect people dependable enough to do consequential work.

AI agents will need their own institutions.

Tests.

Logs.

Permissions.

Checkpoints.

Rollback.

Escalation.

Independent verification.

Separation of duties.

The architecture around the model becomes as important as the model’s raw intelligence.

This is why some of the most valuable AI engineering looks unimpressive in a demo. A system that knows when to stop can be more useful than one that produces a brilliant answer. An agent that asks for clarification before touching production can create more trust than one that acts boldly. A workflow that records every action and can be replayed may be more valuable than a slightly stronger model inside an opaque loop.

Delegation is a trust technology.

The user does not merely ask, “Can it do this?”

The user asks, “Can I afford not to watch it?”

That second question contains the economics of agents.

If a human has to supervise every step, the system competes with a tool. If a human can define an objective, leave, and return to validated work, the system begins competing with labor time.

This does not mean the human disappears.

It means human attention moves upward.

The person specifies intent, reviews exceptions and takes responsibility for decisions that remain consequential or ambiguous. The machine handles the long middle.

That is the economic promise.

The practical challenge is figuring out where the middle begins and ends.

Software is moving first because it offers unusually good conditions for delegation. The environment is digital. Actions can be logged. Files can be copied. Changes can be tested. Version control makes rollback cheap. Unit tests and static analysis provide machine-readable feedback. A failed experiment can often be thrown away without harming anyone.

Even here, the transition is uneven.

METR’s study of experienced open-source developers using early-2025 AI tools found that the developers were slower on the evaluated tasks. The result matters because the participants knew their repositories well. Machine assistance introduced overhead: prompting, waiting, reviewing and correcting. A system can be capable in general and poorly matched to a person who already possesses rich local context.

Delegation has to beat context acquisition.

This is a crucial constraint.

A new employee is not instantly productive because intelligence is not the only thing a job requires. The employee has to learn the codebase, customers, norms, history, exceptions, tools and unwritten reasons why things are done in particular ways. An AI agent faces the same problem, except organizations often have less patience for its learning curve because they assume software should be instant.

Memory systems, retrieval and tool access are attempts to close this gap.

They give the agent more of the local world.

But access creates risk.

An assistant that can read only public documents is limited but safe. An agent that can read internal files, call databases, deploy code and send money is more useful precisely because it is more dangerous.

Capability and blast radius rise together.

This makes permission one of the hidden bottlenecks between demo and delegate.

NIST’s 2026 work on software-agent identity and authorization describes the problem in practical terms: organizations need to know which agent is acting, on whose behalf, with what permissions, and how actions can be audited. Prompt injection and other attacks become much more serious when the target can take action rather than merely generate text.

A malicious instruction hidden in a document is irritating if it changes a summary.

It is consequential if it changes a payment.

The move to delegation therefore forces AI systems into the mature security world of least privilege, authentication, authorization and audit.

This is not bureaucracy arriving to spoil the fun.

It is what lets fun become infrastructure.

The internet would be much less economically useful if every website received unlimited access to the user’s bank account. Mobile operating systems became safer and more usable partly by creating permission models. Cloud platforms use identity and access management because large organizations cannot run on universal administrator rights.

Agents need analogous boundaries.

They may eventually need more sophisticated ones because a person can delegate authority dynamically. An agent might be allowed to spend up to a limit, modify code only in a particular repository, communicate with customers only through approved templates, or access sensitive data only for a specified task.

Authority becomes programmable.

That is potentially transformative because it lets organizations create machine workers without giving them the keys to everything.

It also creates a new category of systems engineering.

Who manages agent identity?

How is authority revoked?

How are actions attributed when several agents collaborate?

Can an agent delegate to another agent?

How does an auditor reconstruct a chain of decisions?

What happens when the model changes underneath the same agent identity?

How does a user distinguish an authorized agent from an imitation?

These questions will feel abstract until agents control valuable resources.

Then they will feel obvious.

The path from demo to delegate also depends on economics at the task level.

An agent that spends twenty dollars of inference and thirty minutes of supervision to complete a ten-dollar task is not economically autonomous. A system that completes a thousand-dollar task with ten dollars of compute and five minutes of review is different.

The relevant measure is cost per accepted outcome.

Not cost per token.

Not benchmark score.

Not even cost per attempted task.

Accepted outcome.

That unit includes failure.

If half the work has to be redone, the cost doubles before counting damage. If one error creates a major incident, average productivity can become irrelevant. High-stakes fields care about tails.

This is why verification and delegation advance together.

A coding agent becomes more useful when tests improve. A financial agent becomes more useful when transactions have limits and reconciliation. A clinical assistant becomes more useful when its recommendations are constrained by protocols and reviewed at the right thresholds. A manufacturing agent becomes more useful when physical systems have sensors and safe states.

The environment can be redesigned to make the agent reliable.

That point is often neglected because debates focus on improving the model.

Humans redesign environments for machines all the time.

Factories arrange parts so robots can reach them. Roads contain lanes, signs and signals because structured environments make driving easier. Warehouses standardize shelves and labels. Software systems expose APIs because structured interfaces make programs reliable.

The world does not have to remain maximally difficult for AI.

Organizations can make themselves more legible.

A company with documented processes, machine-readable systems, strong tests and clear permissions is easier to automate than one held together by oral tradition and spreadsheets on individual laptops. AI adoption can therefore create pressure for organizational modernization that would have been useful anyway.

The agent reveals the mess.

This is another runway effect.

A company may begin by trying to automate a workflow and discover that nobody can state the workflow clearly. Exceptions are handled through personal relationships. Data fields mean different things in different departments. Authorization is informal. Documentation is stale. The AI project fails for reasons that have little to do with AI.

The failure is diagnostic.

If the company fixes the process, future automation becomes easier and human work often improves too.

This is why adoption can arrive in waves. The first generation of agents performs poorly inside messy systems. Organizations clean up data, interfaces and controls. The next generation arrives into a friendlier environment and appears dramatically more capable.

Part of the capability gain was outside the model.

The runway improved.

The transition also changes management.

A manager traditionally allocates people. In an agentic organization, the manager may allocate machine capacity, permissions and review attention as well. The problem starts to resemble running a portfolio of processes. Some tasks can be fully delegated. Some require human approval at checkpoints. Some should never be automated. Some should be attempted by several agents and compared.

The scarce managerial skill becomes designing the boundary.

Too little delegation wastes capability.

Too much creates risk.

The optimal boundary moves as systems improve.

This creates a subtle source of organizational lag. A company can learn the right degree of delegation for one model generation just as a new generation changes what is possible. Controls designed for weak systems may unnecessarily constrain stronger ones. Controls designed for strong systems may be unsafe when performance varies across tasks.

Organizations have to update their trust faster.

That may prove harder than updating software.

Trust is sticky because failures are memorable. One agent that sends the wrong message to a major customer can freeze deployment across a company. One security incident can produce restrictions far beyond the specific failure. A period of overhype can make managers skeptical even after the technology improves.

The adoption curve therefore depends on institutional memory as much as technical capability.

This is where companies with better evaluation can move faster.

If an organization can measure agent performance on its own tasks, it does not have to rely on headlines or fear. It can define a threshold, run experiments, compare outcomes and expand delegation when evidence supports it.

Evaluation creates local confidence.

Local confidence creates permission.

Permission creates real-world experience.

Experience improves the system and the process.

A feedback loop begins.

This is the organizational version of takeoff.

It can happen inside one company long before it happens in the economy as a whole.

A firm that redesigns itself around reliable agents may process more work without adding people proportionally. It can run more experiments. It can maintain more software. It can serve more customers. It can monitor more systems. Competitors see the result and imitate.

The imitation matters because organizational practices diffuse differently from software.

A model update can be deployed overnight.

A management practice spreads through hiring, consulting, case studies, competition and failure. It can take years.

The runway therefore includes a cultural layer.

People need to learn what to delegate.

They need to learn how to specify objectives.

They need to learn how to review machine work without reviewing everything.

They need to become comfortable assigning authority to software while remaining accountable for outcomes.

These are not natural skills. They will be learned through use.

The most important milestone may be when delegation becomes mundane enough that people stop calling it delegation.

A database executes queries without supervision. A payroll system moves money according to rules. A deployment pipeline changes production systems after tests pass. Organizations already delegate consequential actions to software.

AI expands the class of actions that can be specified in language rather than hard-coded in advance.

That is the novelty.

The old software required the organization to anticipate the path.

The agent can choose among paths.

This flexibility is the source of value and risk.

A rigid system can be tested against known states. A flexible system can encounter a situation its designers did not foresee and improvise. Improvement in improvisation makes the system more useful while making exhaustive validation impossible.

Delegation will therefore rest on bounded autonomy rather than perfect certainty.

Define the objective.

Define the authority.

Observe the actions.

Limit the damage.

Verify the result.

Escalate uncertainty.

This architecture is less dramatic than an autonomous superintelligence.

It is also much closer to how powerful systems become economically deployable.

The takeoff will not be driven only by machines that can do more.

It will be driven by institutions that can safely watch them less.