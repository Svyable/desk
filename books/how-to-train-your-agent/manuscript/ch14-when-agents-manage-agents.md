# When Agents Manage Agents

The first delegation is easy to see.

You ask an agent to do something.

The second delegation can disappear inside the first.

The agent decides the task needs research, calls another agent, sends a question to a tool, asks a coding system for a patch, or routes part of the work to a specialist. The original principal receives one answer at the end.

Between intention and outcome, a chain of deputies has formed.

This is where the agent economy stops resembling a smart assistant and begins to resemble an institution.

Institutions are useful partly because nobody has to understand every intermediate act. A chief executive does not personally inspect every purchase order. A general contractor does not perform every trade. A film director does not operate every piece of equipment. Delegation stacks because expertise and attention are distributed.

Software agents make stacking cheap.

That is powerful.

It creates a new question: who trained the manager?

An agent that performs work directly can be evaluated on the work. An agent that manages other agents needs another kind of competence. It must decompose the objective, choose appropriate subworkers, pass enough context without oversharing, detect poor intermediate results, reconcile disagreements, and preserve the principal's authority through the chain.

Management is not merely another tool call.

The distinction matters because a capable worker can be a poor manager. Humans demonstrate this constantly. Technical excellence does not guarantee skill at delegation. People who know how to do a task often give unclear assignments, choose the wrong person, inspect the wrong details, or discover too late that the subordinate optimized a local objective at the expense of the whole.

Agents can reproduce the same structural failure without the human emotions.

An orchestrator asks a research agent to find competitors, a pricing agent to propose packaging, and a legal agent to identify constraints. Each performs competently. The orchestrator combines the outputs into a plan.

The plan can still be incoherent.

The research agent assumed the product served enterprises. The pricing agent assumed individuals. The legal agent evaluated a jurisdiction the orchestrator never intended to enter. Each subtask succeeded inside a different world.

The failure happened in management.

This is why decomposition should be part of the manager agent's training set.

Give it examples where tasks separate cleanly.

Give it examples where the important variable crosses every workstream.

Show cases where parallelization helps and cases where it destroys context.

Train the manager to recognize dependencies before assigning work.

A product launch can be divided into market research, engineering, pricing, legal, and distribution. That sounds tidy. But if one constraint—say a regulated customer workflow—determines product design, price, sales motion, and contractual terms, treating the streams as independent can create five locally reasonable answers that cannot coexist.

A good manager knows which questions must remain coupled.

The agent manager needs evidence for that judgment.

This is one reason multi-agent systems should begin with observable delegation. The principal should be able to see what subtask was assigned, to whom, under what constraints, and what came back.

Without that trace, the final answer becomes epistemically dense. It may contain errors whose origin is impossible to locate.

The manager says, “The research shows.”

Which research?

Which agent found it?

Which source supported it?

Did the managing agent alter the conclusion while summarizing?

Did a subagent make an assumption that vanished from the final memo?

Delegation can wash uncertainty out of information.

A worker says, “I found two conflicting sources.” The manager summarizes, “Sources indicate.” Another manager turns that into, “The evidence shows.” By the time the principal sees the sentence, the conflict has become confidence.

Human organizations do this too.

Agent chains can do it at machine speed.

The cure is provenance.

The final output should preserve enough of the chain that material claims and actions can be traced backward. Not every token of internal reasoning. The principal does not need or benefit from a theatrical transcript of every hidden step. What matters is observable delegation: assignments, sources, tool actions, material assumptions, and state changes.

A receipt should survive management.

This becomes more important when agents receive output from other agents because trust can become transitive accidentally.

The principal trusts Agent A.

Agent A calls Agent B.

Agent B reads a webpage containing malicious instructions.

The harmful content travels back through B to A and perhaps into a tool call.

The principal never chose to trust the webpage. Yet the chain created a route from untrusted data toward trusted authority.

The UK National Cyber Security Centre has warned that adversarial input in agentic systems can arrive through tools and other agents, not only through the original user's prompt. This is a basic property of delegation networks: every new actor can become an input channel.

A manager agent therefore needs a trust model.

Which subagents may provide facts?

Which may recommend actions?

Which may themselves act?

Which sources are treated as untrusted content even when another agent summarizes them?

Can a subagent grant work to yet another agent?

Does authority propagate automatically or stop at the manager?

These are not exotic questions once agents manage agents. They are ordinary questions of organizational design.

Human firms rarely let authority propagate without limit. A manager with a ten-thousand-dollar budget does not necessarily have the right to appoint ten subordinates each with a ten-thousand-dollar budget. A contractor cannot always subcontract sensitive work without consent. A person with confidential information may share it only for specific purposes.

Subdelegation needs containment.

An agent manager should not be able to create more authority than it received.

If the principal authorizes research, the manager's researcher should not inherit purchase rights because the parent agent happens to possess them for another task. If the parent can read a confidential file, a subagent should not receive it automatically when the subtask does not require it.

This is technically inconvenient.

It is institutionally important.

Otherwise the broadest permission in the chain tends to spread.

A second managerial competence is worker selection.

Different agents may be better suited to different tasks. Some are faster or cheaper. Some have stronger tool access. Some have more reliable structured output. Some have access to private data. Some should be kept isolated precisely because of that access.

The manager can choose among them.

This sounds like model routing, which is partly what it is. The deeper skill is matching consequence to capability.

Use the cheap, fast role for routine classification.

Use the stronger model when ambiguity matters.

Use deterministic software when the task is actually deterministic.

Use a human specialist when the result requires licensed judgment or the system's uncertainty is materially consequential.

A mature manager agent should not route everything to the most impressive model.

That is the software equivalent of assigning the chief scientist to staple packets.

Nor should it route everything to the cheapest worker if the savings are trivial relative to the failure cost.

The manager's job is economic allocation.

This is where trained agent systems may begin to resemble firms in miniature. The principal defines objectives and capital constraints. Manager agents allocate tasks across specialized capabilities. Workers produce artifacts. Reviewers inspect. Tools execute. Receipts record.

The resemblance can be intellectually seductive.

Do not confuse resemblance with equivalence.

Software agents are not employees. They do not have wages, families, labor rights, personal ambitions, or moral claims merely because a diagram puts them in boxes under a manager. Human organizations are social systems before they are workflow graphs.

The comparison is useful only for the mechanics of delegated work.

The economics are strange because machine subordinates can be duplicated nearly instantly and often cost only when used. A manager agent can summon a temporary research team for one question and dissolve it seconds later.

This makes hierarchy fluid.

The best “org chart” may exist only for the duration of a task.

One assignment needs three researchers and one critic.

Another needs one coder and deterministic tests.

A third should remain with a single agent because coordination would add noise.

The manager can assemble the structure dynamically.

This flexibility increases the value of good decomposition and decreases the value of permanent bureaucracy.

It can also create invisible sprawl. If every task dynamically summons subagents, the principal may have no idea how much compute, data access, or external activity a simple instruction triggers.

The managing agent needs budgets.

Money is one budget.

Time is another.

Tool calls, external messages, data access, and number of delegated hops can all be bounded.

The purpose is not arbitrary frugality. Constraints force the manager to choose.

“Research this topic” can expand indefinitely if every unanswered question spawns another worker. An agentic system can consume resources exploring branches no human would have authorized individually.

A budget makes stopping part of management.

The manager should know when another worker is unlikely to change the decision.

This is a hard problem for humans. More information feels safer. Consultants add interviews. analysts add scenarios. committees add reviewers. Agents can make the same instinct almost costless in labor terms, which means the principal must impose a stopping rule deliberately.

What uncertainty are we reducing?

What decision will another subtask change?

What evidence would justify spending more?

If there is no answer, the manager should stop the organization from reproducing itself.

A third competence is disagreement handling.

Two agents return different answers.

The naive manager votes.

Voting is sometimes useful. It is often intellectually lazy.

Why do they disagree?

Different evidence?

Different assumptions?

Different interpretations of the objective?

A stochastic variation from the same model?

A conflict in the sources?

The disagreement contains information.

A good manager exposes the reason before collapsing it.

This matters because agent consensus can be misleading. Three agents powered by the same underlying model may share the same blind spot. Five research agents may all retrieve the same highly ranked but incorrect source. Independence cannot be counted by windows on a screen.

The managing agent should be trained to seek diversity of evidence, not merely multiplicity of opinion.

A deterministic check can sometimes be more valuable than a second language model.

An external database can resolve a factual dispute.

A primary source can outrank three summaries.

A qualified human can decide a value conflict no amount of machine debate can settle.

Management means knowing what kind of disagreement exists.

The fourth competence is escalation.

An agent manager should not hide uncertainty merely because it has a team available. More workers are not a substitute for principal authority.

If the objective itself is ambiguous, the manager should call upward.

If subagents disagree on a decision that changes the risk materially, call upward.

If the task crosses a permission boundary, call upward.

If the manager cannot determine whether the evidence is trustworthy, call upward.

The hierarchy should compress routine work, not bury uncertainty under more delegation.

This is a useful test for the whole architecture: does adding a manager make the principal's remaining decisions clearer?

If the principal now receives longer reports and more ambiguous recommendations, the hierarchy has increased distance without increasing control.

The fifth competence is incident ownership.

When a subagent causes a failure, the managing agent should preserve the chain rather than blaming the worker and moving on.

Which assignment created the failure?

Which context was missing?

Which permission allowed the consequence?

Which evaluation should be added?

Should the manager have caught the result before passing it upward?

The manager's training set should include its management mistakes, not only the worker's technical mistakes.

This is how an agent manager gets a childhood.

It begins with low-risk delegation.

It manages workers whose outputs can be checked.

It encounters disagreement.

It learns which tasks should not be split.

It learns when subdelegation needs explicit permission.

It learns to return receipts and uncertainty with the result.

Only then does the principal widen the complexity of the organization underneath it.

The strange consequence is that humans may soon train agents whose primary job is not producing anything recognizable as work.

Their job is to have work done.

That role already exists in human economies. We call it management.

The agent economy does not eliminate middle management as a function. It may automate pieces of it and spread the function into settings too small to have had managers before.

A one-person business can have a managing agent.

A researcher can have an orchestrator that commissions searches, replications, and critiques.

A household can have a logistics manager routing narrow tasks without exposing every family record to every service.

The principal is no longer supervising every worker directly.

The principal is supervising the supervisor.

This raises the final question of the chapter: how far can the chain go before accountability becomes fiction?

There is no universal answer. Deep chains can be useful in complex systems. The danger begins when nobody at the top can identify what authority exists below, what evidence returns, or where a failure can be stopped.

A simple principle helps.

Every layer of delegation should reduce the principal's cognitive load without increasing the principal's ignorance of consequence beyond what the role can tolerate.

If the chain makes work easier to direct and outcomes easier to verify, hierarchy has earned its place.

If it merely makes responsibility harder to trace, the agents are not managing.

They are hiding one another.