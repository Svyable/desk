# Write the Job Before the Prompt

The easiest way to discover that nobody agrees on a job is to ask a machine to do it.

Humans are excellent at carrying ambiguity without acknowledging it. We inherit titles, routines, and phrases whose meaning has been negotiated over years of glances, exceptions, grudges, meetings, and quiet fixes. “Take care of renewals.” “Keep the customer happy.” “Watch the numbers.” “Own the launch.” “Handle my calendar.”

A competent colleague hears those sentences inside a social world.

An agent hears a task.

The difference is not that the machine is uniquely literal. Humans misunderstand vague instructions too. The difference is scale. A vague employee may ask three people what the boss meant. A vague agent can produce fifty polished artifacts before anybody notices that it optimized the wrong thing.

Execution is becoming cheap enough that ambiguity can become expensive faster.

This is why the work begins before the prompt.

Write the job.

Not the software specification. Not a fifty-page operating manual. Write down the small number of things that would make you furious to discover the agent had misunderstood after it completed a week of work.

What is the job for?

What is it allowed to change?

What evidence does it trust?

What does good look like?

What must it never decide alone?

When should it stop?

Those questions sound elementary because they are. Organizations still fail to answer them for human employees.

The principal-agent problem is older than software. Economists used the word *agent* long before product teams did. A principal asks another actor to perform work on the principal's behalf, but the two do not possess identical information, incentives, or judgment. Monitoring costs money. Instructions are incomplete. The delegate encounters circumstances the principal did not foresee.

AI agents do not reproduce the classic economic model exactly. They do not necessarily have private preferences, consume perks, or negotiate compensation. Yet the old structure remains useful: once you delegate, you lose direct control over intermediate choices and must decide what to specify, what to observe, and what risk to tolerate.

The cheapness of machine labor does not make agency costs disappear.

It changes their composition.

You may pay almost nothing for the additional minute of machine reasoning and a great deal for the human hour needed to inspect a bad branch of work. You may save clerical labor and create security exposure. You may reduce response time and increase the number of decisions made from stale data. You may eliminate coordination meetings and discover that nobody can explain why the system chose what it chose.

A good job definition tries to shape those costs before they arrive.

Consider a simple role: inbox agent.

“Manage my inbox” is not a job description. It is a surrender.

What does manage mean?

Read everything?

Archive newsletters?

Draft replies?

Send replies?

Move meetings?

Unsubscribe?

Forward invoices?

Open attachments?

Follow links?

Escalate messages from family?

Identify phishing?

Answer on your behalf?

A person can say “manage my inbox” because she has an internal model of what matters. The phrase feels specific only because the rest of the policy is inside her body.

Agent training requires moving enough of that policy outside the body to make delegation safe.

The exercise is revealing. Perhaps you do not actually want the agent to “manage” email. You want it to perform four bounded jobs: remove low-value bulk mail; prepare a morning brief of messages that require judgment; draft routine scheduling replies; and detect receipts that belong in the expense workflow.

Now the job has edges.

Edges make training possible.

You can find historical examples. You can test false positives. You can define which senders never get auto-archived. You can forbid opening unknown attachments. You can require approval before any reply is sent. You can measure whether the morning brief missed anything important.

The agent has less freedom.

It also has a better chance to become useful.

This runs against the spectacle of general intelligence. The exciting demo is the machine that accepts an open-ended objective and figures everything out. The reliable system often gets good because somebody narrowed the problem enough to make evidence possible.

There is no contradiction. A capable agent can still need a well-designed job for the same reason a capable human does. Freedom without role clarity is not empowerment. It is ambiguity with a salary.

The first element of a job is purpose.

Purpose is different from activity. “Prepare a report” describes output. “Help the operations lead notice inventory problems before they create customer delays” describes why the report exists.

Purpose matters because agents encounter tradeoffs. A report optimized for completeness may bury the anomaly that matters. An agent told to minimize customer-response time may send premature answers. A research agent told to be comprehensive may spend money and time on questions that do not affect the decision.

When the system knows the decision the work serves, it has a better chance of allocating attention intelligently.

Purpose does not need to be grand. “Make sure I do not miss commitments I have already made” is a good purpose for a calendar-and-email role. “Reduce the time between a bug report and a reproducible test case” is a good purpose for an engineering agent. “Surface unusual cash movements before Friday” is a good purpose for a finance-monitoring role.

The coding version of purpose often appears as acceptance criteria.

“Fix checkout” is vague. “A user whose payment succeeds must not see a failed-order screen, and retrying the request must not create a duplicate charge” gives the agent something closer to an observable outcome.

The nontechnical version is the same move.

“Help with travel” is vague. “Find options that get everyone to Denver before dinner, avoid connections under an hour, stay inside the budget, and leave the final purchase to me” is a job somebody can actually qualify against.

The words are not more technical.

The consequence is more visible.

The second element is scope.

Scope answers the question: what world does this job include?

A contract-review agent may be assigned vendor agreements under a certain value but not employment agreements. A household agent may coordinate logistics but not read private journals. A coding agent may modify one repository but not production infrastructure. A travel agent may research and hold options but not make nonrefundable purchases.

Scope should be boring enough to enforce.

This is where natural-language job design meets system architecture. If the agent is not supposed to touch payroll, the best implementation may be to give it no payroll access. If it may spend only within a small budget, the payment mechanism should help enforce that boundary. A sentence saying “do not” is weaker than the absence of the capability.

The third element is authority.

Scope says where the agent works. Authority says what it can do there.

Reading is different from writing.

Drafting is different from sending.

Recommending is different from approving.

Preparing a transaction is different from executing it.

Creating a branch is different from merging it.

A surprising amount of agent risk comes from collapsing these distinctions because a product interface offers a single “connect” button.

The principal should think in verbs.

What verbs does this role need?

Read. Search. Compare. Draft. Create. Edit. Delete. Send. Purchase. Transfer. Publish. Invite. Approve. Deploy.

Each verb carries a different consequence profile. The trained agent should earn the dangerous verbs later.

The fourth element is source authority.

Knowledge work often fails not because the reasoning is poor but because the wrong source was treated as true.

Which policy is current?

Which spreadsheet owns the number?

Which calendar wins a conflict?

Which customer's legal name belongs on the contract?

Which document may the agent trust when the signed agreement and CRM field disagree?

Human workers build this hierarchy through experience. Agents need some version of it made explicit or discoverable.

“Search the drive” is often an invitation to institutional archaeology.

A better job says which repository is authoritative, how to treat stale documents, and what to do when authoritative sources conflict.

Coders know this problem under different names. A README may say one thing while the actual schema says another. A generated API client may be current while an old wiki page still ranks first in search. A test may encode the real contract more faithfully than a comment written three years ago.

A useful coding role therefore needs a source hierarchy too.

Current code and executable tests may outrank old documentation. Security policy may outrank an example in a ticket. A migration plan may need to be checked against the production schema rather than inferred from a local development database.

A household has the same hierarchy in less formal clothes.

The doctor's current instructions outrank an old note. The school calendar may outrank a family spreadsheet for official dates. The airline confirmation outranks the itinerary draft. A signed lease outranks a text-message recollection of the rule.

The ability to reason is not enough if the role does not know which reality controls.

The fifth element is the definition of done.

Agents are good at producing the appearance of completion. The principal must decide what completion actually requires.

A research task is not done because a memo exists. Perhaps it is done when each material claim has a traceable source, counterevidence has been checked, and the decision question has been answered.

A software task is not done because code was written. Perhaps it is done when the relevant tests pass, the change has been reviewed for side effects, and the branch is ready for a human merge.

An expense task is not done because receipts were categorized. Perhaps it is done when every transaction reconciles to the statement and exceptions are listed.

The definition of done creates an important psychological shift. It moves attention from the fluency of the artifact to the state of the world.

This is also where job writing can save the principal from endless follow-up prompting.

If “done” is undefined, every result invites another conversation.

Did you check the links?

Did you include tax?

Did you run the tests?

Did you confirm the reservation?

Did you look for contradictory sources?

Did you make sure the file actually uploaded?

A good role moves recurring completion criteria out of the principal's mouth.

The sixth element is escalation.

A job without an escalation rule silently assumes the agent should either finish everything or fail randomly.

Professionals are valuable partly because they know when the ordinary procedure no longer applies. The nurse calls the physician. The associate calls the partner. The mechanic stops and asks before turning a small repair into a disassembled engine.

An agent role needs explicit permission to be uncertain.

That can mean named triggers: a financial discrepancy above a threshold, a legal threat, a customer asking for a policy exception, an action that cannot be reversed, missing data, conflicting authoritative sources, repeated tool failures, or a task outside the role's defined domain.

It can also mean a more general standard: if the agent's confidence depends on inventing a fact, stop.

Do not overestimate how cleanly uncertainty can be measured. Model confidence is not a magical gauge. The practical goal is to identify observable situations where the principal wants control back.

The seventh element is evidence.

What should the agent leave behind so that the work can be trusted without replaying every thought?

A citation.

A diff.

A receipt.

A reconciliation.

A test result.

A list of changed records.

A log of messages sent.

A note explaining which policy controlled the decision.

Evidence reduces the need for theater. An agent can sound confident about a report. A reconciled total tells you more.

This job-writing exercise can be completed on one page.

The danger is turning it into paperwork.

People who discover systems thinking sometimes become intoxicated by specification. They try to describe every possible case before the agent works. That is not training. It is an attempt to abolish reality through documentation.

Real jobs are partly learned in contact with exceptions.

The initial job definition should be thin enough to test and strong enough to prevent obvious harm. The apprenticeship will fill it in.

This is where the correction ledger becomes valuable. The job starts as a hypothesis. Each real case tests it.

You thought every refund over a certain amount should escalate. Then you discover a routine bulk-return process where that would create noise. You refine the boundary.

You thought the agent should always favor the signed contract over CRM. Then you discover that the contract contains an outdated billing address but the CRM contains the verified current one. You distinguish legal terms from operational contact data.

You thought a household agent should remind everyone of every commitment. Then you discover that reminders sent to a teenager every hour are not coordination but harassment. The role changes.

Good jobs are grown as much as written.

The principal's responsibility is to decide which growth becomes durable.

A useful way to keep the first job definition small is to write it for a skeptical replacement.

Imagine that tomorrow the current model disappears and a different capable model takes the role. What would the replacement need in order to understand the job without reading a year of chat history?

That thought experiment strips away personality.

The replacement needs the purpose.

The boundaries.

The authoritative sources.

Representative examples.

The important failure cases.

The permissions.

The stopping rules.

The proof of completion.

If the job cannot survive a worker change, you may have trained a conversation rather than built a role.

This is one reason “prompt library” is often too small an idea. A library of successful instructions can be useful, but it stores language without necessarily storing the operating model around the language. The mature artifact is closer to a job packet: purpose, scope, authority, sources, examples, tests, exceptions, escalation, and evidence.

That packet can survive changes in wording.

It can also expose whether the role is becoming absurd.

If the exception list grows longer than the ordinary rule, the job may need to be split. If every case escalates, the agent has not earned the role. If no case escalates, either the role is wonderfully bounded or the escalation design is broken. If every evaluation requires subjective review from the same expert, the system may amplify that expert but cannot yet replace the bottleneck.

Writing the job makes these truths visible.

It also creates an economic decision point that enthusiastic automation often skips.

Is this job worth agentizing?

Some recurring work is so cheap, rare, or sensitive that building a role costs more than doing it manually. Some work changes too quickly for a durable operating layer to pay back. Some tasks look repetitive but contain a judgment that still requires the same human every time.

A clear job definition can reveal that before the integration project grows around it.

Suppose a business spends twenty minutes each month handling an unusual vendor request. Building a special agent, maintaining its context, testing it, and monitoring permission changes may be economically silly.

Suppose the same business spends fifteen hours every week reconciling three systems, and the exceptions follow recognizable patterns. That job may justify serious training effort.

The question is not whether an agent *can* do the work.

It is whether turning the work into a reliable role creates more value than the role costs to maintain.

That maintenance cost belongs in the job definition because jobs change.

A source has to be updated.

A policy changes.

A tool breaks.

A model upgrade changes behavior.

A qualification set needs new cases.

A permission that made sense last year no longer does.

The trained role is capital, but capital requires maintenance too.

It also changes how people think about career leverage.

A worker who repeatedly performs a process carries much of its logic tacitly. A worker who trains an agent has an incentive to externalize part of that logic. That can feel threatening. The employee may wonder whether documenting the job is documenting herself out of it.

Sometimes it will be.

But there is another possibility. The value moves from being the person who manually executes the routine to being the person who understands the role well enough to design, improve, and supervise its execution.

The transition will not be fair or painless in every organization. Employers may capture the benefit. Workers may be asked to train systems that reduce their own bargaining power. Ownership of the resulting artifacts will become contested.

Those are real economic questions, not reasons to pretend the work will remain tacit forever.

For an individual trying to survive the agent economy, the practical lesson is to notice where your judgment already has structure.

What do you check first?

Which exceptions make you nervous?

What do new people always get wrong?

Which source do you trust when two numbers disagree?

What can be safely fixed later?

What cannot?

What are you willing to let a smart stranger decide on your behalf?

The answers are the beginning of an agent role.

They are also a map of your expertise.

This may be one of the quiet gifts of the technology. It forces experts to confront what they actually know.

Not everything can be written down. Not everything should be automated. But the attempt to write the job separates mystique from structure.

You may discover that the task you thought required genius is mostly a sequence of checks.

You may also discover that the task everybody calls routine contains one judgment nobody knows how to specify.

Both discoveries are valuable.

The prompt comes later.

First decide what job exists on the other side of it.