# Interlude — The First Habitats

The swarm will not arrive everywhere at once.

It will appear first where the environment is unusually friendly to machine action: where work can be split into pieces, where results can be checked, where errors are recoverable, and where the value of finishing the task is high enough to pay for repeated attempts.

By 2025 and 2026, those conditions were already visible in a few places. Research was one. Software engineering was another. Customer support, in a different way, offered a third.

None of these domains proves that agent populations will spread through the rest of the economy. They are useful for the opposite reason. They show what an agent-friendly habitat looks like, and therefore what is missing elsewhere.

## A production swarm

In June 2025, Anthropic published an engineering account of the multi-agent research system behind its Research feature. The architecture was not complicated in the abstract. A lead agent received a research question, made a plan, and created specialized subagents to pursue different parts of the problem in parallel. The subagents searched, evaluated what they found, and returned compressed findings. The lead agent decided whether the evidence was sufficient or whether another round of work was needed.[^5]

This is close to the population geometry described earlier in this book, except it was not a thought experiment.

The system had an orchestrator. It had workers. Workers received bounded assignments. They operated with their own context. Their outputs were handed back to a coordinator. More workers could be created when the question branched.

Anthropic reported that the architecture was particularly useful for breadth-first research questions, where several independent lines of inquiry could proceed at the same time. In one internal evaluation, a system using Claude Opus 4 as the lead agent and Claude Sonnet 4 as subagents scored 90.2 percent better than single-agent Claude Opus 4. Anthropic gave a deliberately tedious example: identify all the board members of companies in the information-technology portion of the S&P 500. A single agent searched sequentially and failed to gather the complete answer. The multi-agent system divided the companies among workers and recombined their results.[^5]

The example matters precisely because nobody would confuse it with artificial general intelligence.

It is clerical research at scale.

But clerical research at scale is a large part of institutional life.

A due-diligence team, compliance office, recruiting operation, investigative newsroom, consulting firm, intelligence service, or procurement department repeatedly faces questions of the same shape: there are too many independent things to inspect one after another, each piece is understandable, and the final answer depends on gathering enough of them.

The architecture turns one request into temporary headcount.

It also reveals why the word *swarm* can mislead if it is allowed to become mystical. The system did not become powerful merely because there were more agents. Anthropic's own analysis pointed toward a less romantic explanation: the multi-agent architecture spent much more computation. The company reported that ordinary agents used roughly four times as many tokens as chat interactions, while its multi-agent systems used roughly fifteen times as many. In its BrowseComp analysis, token use alone explained most of the observed performance variation.[^5]

The swarm, in other words, was partly a way to buy more thinking.

That is not a criticism. Human organizations do the same thing. A law firm assigns ten associates to a document room because ten people can inspect more documents than one. A newsroom sends several reporters because parallel attention covers more ground. A laboratory runs multiple experiments because sequential certainty takes too long.

The important economic question is whether the extra work is worth buying.

Anthropic said as much. Multi-agent systems were expensive enough that they made sense mainly for high-value tasks that benefited from parallelism. They were less attractive when all workers needed the same shared context, when tasks depended heavily on one another, or when coordination itself became the bottleneck. Coding, the company noted at the time, often contained fewer truly independent branches than open-ended research.

This is the first empirical correction to the swarm metaphor.

More agents are not automatically better.

A population helps when the work has ecological room for niches.

If every worker needs to touch the same object at the same moment, the swarm becomes a meeting.

If ten agents can each inspect a different object, the swarm becomes a workforce.

## The unusually clean world of code

Software engineering became an early testing ground for agents for a second reason: software can often tell you whether it worked.

The code compiles or it does not. Tests pass or fail. A benchmark can provide a repository, an issue description, and a hidden test suite. An agent can inspect files, run commands, edit code, execute tests, observe errors, and try again.

This is a remarkably generous environment for machine labor.

Most of life does not come with a test suite.

A manager deciding whether an employee is ready for promotion does not receive a clean boolean result. A doctor choosing how much reassurance to give a frightened patient cannot rerun the conversation against hidden tests. A regulator deciding whether a market practice is fair must argue about the meaning of fair.

Software offers something closer to a laboratory.

That is one reason benchmarks such as SWE-bench became important. They did not ask a model to explain programming in a chat window. They gave an agent a real repository and a real issue derived from software development, then asked it to produce a patch. The benchmark itself had flaws—some tasks were ambiguous or effectively impossible—which led to the creation of the human-validated SWE-bench Verified subset. The important change was conceptual: the unit being measured was no longer an answer. It was a completed piece of work.[^6]

METR, an independent research organization focused on measuring frontier AI capabilities, pushed the idea further. Instead of asking only how many benchmark problems an agent could solve, METR estimated a *time horizon*: the length of task, measured by how long it took a skilled human, at which an AI agent had a given probability of succeeding.[^6]

The metric is easy to misunderstand. It does not mean the agent literally works unattended for that many hours. It means that, on the tasks in the evaluation suite, the agent can complete work comparable to a certain quantity of human expert labor with a specified success rate.

That distinction matters enough that METR has repeatedly emphasized it.

The organization's tasks are disproportionately drawn from software engineering, machine learning, and cybersecurity. They are self-contained. They have relatively clear success criteria. The humans used for comparison often begin without the local knowledge that an experienced employee would bring to a familiar codebase. METR has explicitly warned against reading an eight-hour software time horizon as evidence that an AI can do any eight hours of a professional's job.[^6]

Even with those qualifications, the movement has been striking. In a May 2026 frontier-risk report, METR said the strongest agents it evaluated had essentially saturated much of its Time Horizon 1.1 suite and produced a measured horizon of more than two full-time-equivalent days. In the same breath, it warned that the point estimate had become increasingly uncertain because the benchmark itself was running out of sufficiently difficult tasks. Early results on a separate software-reimplementation benchmark showed agents completing some tasks estimated to require humans weeks.[^6]

The interesting fact is not the exact number. The number will move, the benchmark will change, and the measurement will be argued over.

The useful fact is that engineers now need measurements whose unit is no longer a prompt, a paragraph, or a coding exercise.

They need a unit that resembles delegated labor.

This is what it looks like when software gets legs in a measurable habitat.

The habitat is also unusually forgiving. Failed code can often be rolled back. A test catches many mistakes before a customer sees them. Version control preserves history. Sandboxes limit permissions. Logs record actions. Review systems already exist. Software organizations have spent decades building exactly the infrastructure an agent population needs: machine-readable tasks, reproducible environments, explicit permissions, automated checks, artifact histories, and reversible deployment.

Agents did not choose software because software was economically unimportant.

They found it hospitable because the terrain was already paved for them.

That is a clue for the rest of the economy.

Wherever institutions make work legible enough to machines—structured records, bounded permissions, clear interfaces, checkable outcomes—they are also preparing habitat for agents.

## Seven hundred people, then eight hundred fifty

Customer support offers a messier test.

In February 2024, Klarna launched an AI customer-service assistant developed with OpenAI. The company's early public claims attracted attention because the scale sounded like a labor statistic: the assistant was doing work Klarna estimated as equivalent to more than 700 full-time agents.[^7]

By the end of 2025, Klarna's annual filings said the system had handled 80 percent of customer-service chats during the year. The company reported 31 million conversations since launch, an average resolution time of two minutes compared with twelve minutes for human agents in 2024, and no decline in customer satisfaction according to its internal surveys. Its later annual filing estimated the work as equivalent to more than 850 full-time agents and attributed approximately $59 million in 2025 cost savings to the system.[^7]

These are company-reported figures, not an independent randomized trial. The estimates depend on Klarna's own chat logs, surveys, cost assumptions, and definition of equivalent work. They should be read as evidence about what a company believed it had operationalized, not as a universal productivity coefficient for customer service.

Still, the deployment is instructive.

Customer support contains enormous quantities of repeated structure. Where is my refund? Why was this payment declined? How do I change an address? What happened to my return? The questions vary, but the underlying systems contain databases, policies, transaction histories, account states, and known procedures. An agent can retrieve information, interpret policy, explain a result, and sometimes take a bounded action.

It is not as clean as code, but it is cleaner than many jobs.

The scale also changes the economics. A human service operation must staff for nights, weekends, languages, demand spikes, training, turnover, and idle periods. A software system can be copied into another conversation at negligible organizational delay. The marginal worker does not need a desk, a shift schedule, or a manager's calendar.

This is the organizational compression described in the labor chapter, now visible in a public filing.

But Klarna's record also complicates the simplest replacement story.

In 2025, press coverage of comments by chief executive Sebastian Siemiatkowski suggested the company had discovered that AI customer service was lower quality and was bringing humans back. The issue became material enough that the U.S. Securities and Exchange Commission asked Klarna, during review of its registration statement, to explain how its approach had changed.[^8]

Klarna disputed the press interpretation. In its formal response to the SEC, the company said the comments referred to a pilot using highly skilled freelance customer-experience consultants to improve the quality of *human* service, not an admission that AI service had deteriorated. It reiterated its internal metrics for the AI system, while adding something more interesting than either side of the headline: customers would continue to have access to human representatives. The company described the arrangement as a dual-track model combining scalable AI support with high-quality human support.[^8]

The dispute is useful because it resists a tidy moral.

"AI replaced 700 people" is too simple.

"AI failed and humans came back" is too simple too.

What actually emerged was a layered service system.

Routine volume moved toward the machine. Human support remained available. The company continued experimenting with the quality and composition of that human layer. The exact boundary between machine and human work became an operational design choice rather than a philosophical verdict on whether AI was good at customer service.

That is likely to be a common pattern.

A swarm does not need to eliminate a profession to rearrange it.

It can take the high-volume center of a workflow and leave humans holding exceptions, relationships, appeals, edge cases, liability, or premium service. The remaining human work may become more valuable, more difficult, more emotionally demanding, or simply less numerous. Measuring only the number of jobs can miss the change in job shape.

The Klarna case also exposes a measurement problem that will recur throughout this book. Firms deploying agents will usually possess better operational data than outside researchers, but they also have incentives to present successful deployments favorably. Journalists and critics provide an important counterweight, but simplified reversal stories can be wrong too. Regulators sometimes create the most revealing documents because they force companies to reconcile public claims with formal disclosures.

The ecology will need an ecology of evidence.

## What the habitats have in common

Put the three examples beside one another.

Anthropic's research swarm worked because a question could be decomposed into independent searches and recombined. The cost was substantial additional computation, so the architecture was most attractive when the answer was valuable enough to justify the budget.

Software agents advanced quickly because the environment offered files, commands, tests, version control, sandboxes, and relatively objective success criteria. The work was difficult, but the feedback was unusually legible.

Klarna's customer-service system operated at scale because much of the work sat on top of structured transactions and repeatable procedures. Yet the company still preserved a human path, because some customers and some situations did not fit comfortably inside the automated lane.

The first habitats therefore share several properties.

The work can be decomposed.

The agent can reach the tools required to act.

The environment produces feedback.

Mistakes can often be detected or reversed.

The task occurs often enough for infrastructure investment to pay.

And there is enough economic value to purchase the necessary computation, verification, and supervision.

Remove those properties and the picture changes quickly.

A one-off political negotiation has weak ground truth. A family argument has no API. A novel scientific question may take years to verify. A senior executive's judgment depends on context no database fully contains. A physical repair may require hands, local improvisation, and responsibility for injury. A court cannot reduce legitimacy to whether the output passed a unit test.

The frontier of agent deployment will therefore be jagged.

Some institutions will acquire dense machine populations while neighboring institutions remain stubbornly human. One department may run thousands of agent-hours per day while another still waits for a signature. A company may automate ninety percent of routine contact while reserving its most consequential conversations for people.

This unevenness is not a temporary embarrassment on the road to universal automation.

It is what ecology looks like.

Organisms spread where they fit.

So do agents.

The important question is not simply which model is smartest this year. Watch the environments being rebuilt around machine participation. Look for clean interfaces, objective tests, cheap copying, reversible actions, standardized records, and budgets large enough to support repeated cognition.

Those are the places where a population can take root.

The swarm enters the economy through habitat.
