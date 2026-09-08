# Notes on Terms, Evidence, and What Could Change

This book uses *agent* in a practical rather than metaphysical sense. The word refers to software that can pursue a task across multiple steps, use tools, make bounded decisions, and sometimes take actions in external systems. Nothing in the argument depends on an agent being conscious, alive, humanlike, or legally equivalent to a person.

*Training* is also used in the practical operating sense. An ordinary user who corrects an agent is usually not retraining the underlying foundation model. The useful role can nevertheless change through instructions, examples, retrieval, memory, tool design, evaluation, permissions, workflow structure, and feedback. The book is about shaping that surrounding system.

*Apprenticeship* is an analogy for graduated participation, not a theory of machine development. Human apprentices learn socially, physically, emotionally, and professionally in ways current AI systems do not. The analogy is useful because it separates technical capability from operational qualification. A delegate first encounters bounded work, receives correction while mistakes are cheap, demonstrates competence under variation, and receives wider authority only when the evidence justifies it.

*Qualification* is the book's preferred word for the transition from “the model can probably do this” to “this role has demonstrated that we are willing to let it do this under these conditions.” Qualification is local. An agent qualified to draft customer replies is not thereby qualified to send them. An agent qualified to propose code changes is not thereby qualified to merge to production. An agent qualified to reorder ordinary household supplies is not thereby qualified to book a family trip.

*Accumulated operating judgment* names the durable layer that can form around repeated use: role definitions, accepted and rejected examples, tests, source hierarchies, tools, permissions, escalation rules, logs, and lessons extracted from failures. Calling this capital is an economic hypothesis, not a claim that every prompt archive is a valuable asset. The strongest version of the argument requires the accumulated layer to improve future work, remain sufficiently portable, and matter even as base models improve.

The evidence behind the manuscript is recorded in `research/source-ledger.csv` and the accompanying research brief. The source trail favors original research, standards, government guidance, and first-party engineering reports where those are the best available records of current practice. Vendor engineering guidance is treated as evidence about how current systems are being built, not as independent proof that a vendor's preferred design is universally correct.

Several older sources come from human-factors and automation research. Lisanne Bainbridge's work on the ironies of automation, Raja Parasuraman and Victor Riley's work on automation use and misuse, and research on out-of-the-loop performance predate modern language-model agents by decades. They are used because the supervisory problem has a recognizable family resemblance: automation can remove routine practice while leaving humans responsible for abnormal conditions. The manuscript does not assume that an AI coding agent, autopilot, process-control system, and household assistant are technically interchangeable.

The same restraint applies to apprenticeship research. Jean Lave and Etienne Wenger studied human participation in communities of practice. Their work does not establish how AI systems learn. It supplies a useful institutional comparison for moving from peripheral, bounded participation toward fuller responsibility.

Current measures of agent capability are especially time-sensitive. Benchmarks such as METR's task-completion time-horizon work provide evidence that frontier systems have been improving on software-oriented tasks. They do not provide a universal timetable for the replacement of occupations. The labor market contains physical work, interpersonal trust, regulation, organizational politics, local knowledge, liability, capital, and thousands of task structures no single benchmark represents.

The manuscript therefore avoids a date when “agents take over” and does not depend on one. Its argument is meant to survive a moving capability boundary. If models become better at planning, memory, evaluation, and tool use, the amount of explicit apprenticeship required for a given role may shrink. A better base model may pass qualification tests with fewer examples and less correction. Some operating layers that are valuable today will become commodity features.

That is counterevidence, not a problem to hide.

The strongest version of the book would be wrong if capable agents reliably inferred goals, standards, permissions, context, and escalation needs from minimal instruction; if user-created examples and correction histories added little durable value; if the economically useful roles remained too unreliable for meaningful autonomy; or if vendor platforms made operating knowledge so non-portable that individuals and organizations could not accumulate useful assets around it.

The book's weaker claim would still survive: whenever a principal delegates consequential action to a system whose behavior cannot be perfectly specified in advance, questions of qualification, authority, evidence, escalation, and accountability remain.

Some practical guidance in the book is intentionally conservative around permissions. That is not an assertion that every agent deployment is dangerous. It reflects an asymmetry. A little friction during apprenticeship is cheap. A broadly permissioned system discovering an edge case in production can be expensive. Least privilege, bounded pilots, shadow work, logging, and meaningful human escalation appear repeatedly in current security and engineering guidance for this reason.

The household chapter raises additional privacy and consent questions that are not solved by better model accuracy. A system can be perfectly accurate and still have too much access. It can optimize a household process and still centralize authority in a way family members dislike. It can reduce administrative burden while collecting information that should not have been combined. These are governance questions, not benchmark questions.

The career chapters are deliberately conditional. A worker who can direct agent systems may gain leverage, but productivity gains are divided among workers, employers, customers, owners, and platforms through bargaining and competition. Technology does not guarantee that a worker who produces twice as much will earn twice as much or work half as long. The book's use of *owner* refers primarily to ownership of purpose and consequence, not a prediction that everyone will become a shareholder or entrepreneur.

The title *How to Train Your Agent* is not claimed as an unprecedented phrase. A market scan before drafting found a contemporary article using the same wording in a narrower customer-research context, along with a growing literature on agent engineering, agentic work, trust, delegation, and management. The book's intended contribution is the synthesis around apprenticeship, qualification, accumulated operating judgment, and the economic transition from personal execution toward the ownership of reliable delegated capability.

Because the field is moving quickly, dated claims should be reread against the source trail in future editions. A security recommendation can change. A benchmark can be surpassed. A platform can add a feature that makes a chapter's implementation detail obsolete. A research result can receive stronger replication or criticism.

The book should change when the evidence changes.

The principle worth preserving is simpler.

Do not confuse intelligence with authority.

Do not confuse memory with experience.

Do not confuse output with consequence.

Do not confuse a polished answer with a qualified role.

And do not delegate so completely that nobody remains able to say what the work was for.