# The Agent Needs an Apprenticeship

Managers call it onboarding. Coders call pieces of it staging, evals, test fixtures, and shadow mode. Trades have an older word for the whole thing.

Apprenticeship.

The language matters because we are about to make a category mistake at enormous scale. We are going to encounter software that can write, reason, search, calculate, browse, code, negotiate, summarize, plan, and use tools, and we are going to mistake general capability for readiness to do *our* work.

Those are not the same thing.

A new agent is connected to email on Tuesday. By Wednesday it can read the calendar. On Thursday it drafts replies that look better than half the replies in the sent folder. Friday afternoon, after three days of impressive behavior, somebody gives it permission to send.

The first week has been mistaken for training.

What actually happened was exposure.

The system encountered a small sample of ordinary work. It behaved well enough to create confidence. Confidence became authority. The expensive cases had not arrived yet.

No angry customer had written from an ambiguous address. No vendor had attached a document containing malicious instructions. No colleague had used sarcasm. No calendar had contained two people with the same name. No family member had asked for something technically permitted and obviously inappropriate. No software dependency had failed halfway through the job. No underlying model had been updated. No task had required the agent to choose between two rules that each looked reasonable in isolation.

A quiet week is not a qualification.

That sentence is useful because it works for almost any agent you can imagine.

The coding agent that fixed three straightforward bugs has not yet qualified to merge a database migration.

The household agent that correctly reordered coffee has not qualified to cancel a family trip.

The sales agent that drafted five decent follow-ups has not qualified to change pricing.

The finance agent that categorized expenses has not qualified to move money.

The scheduling agent that found open times has not qualified to decide which relationships deserve to be displaced.

Capability answers, *Can the system do something like this?*

Qualification answers, *Has this role demonstrated that it can do this kind of work, under these conditions, with this level of authority, to a standard we are willing to live with?*

The agent economy will be built in the gap between those two questions.

Human institutions learned versions of this distinction long ago because the alternative is expensive. Apprentices do not begin with the most dangerous work. Pilots do not receive a passenger jet because the first lesson went well. Medical residents gain responsibility inside a supervised system. Electricians, machinists, lawyers, accountants, operators, soldiers, technicians, and countless other professions contain some form of graduated participation.

The novice watches. Then assists. Then performs bounded work. Then works under review. Then receives more discretion. Eventually, competence includes recognizing the cases that should go to somebody else.

Jean Lave and Etienne Wenger used the phrase *legitimate peripheral participation* to describe how human newcomers move toward fuller participation in communities of practice. Their work is about human learning, identity, and social participation. An AI agent does not acquire a professional identity by standing beside a master carpenter. It does not become a person through repetition. The analogy should stop before it becomes sentimental.

The operational lesson survives.

A principal needs a way to expose capability to reality before granting it the full consequences of reality.

That is an apprenticeship.

For a software team, the apprenticeship might look like a repository clone, a test suite, synthetic tickets, historical incidents, a sandbox account, code review, shadow pull requests, and a rule that the agent cannot merge.

For a small business, it might be old invoices, previous customer messages, draft-only email access, examples of refunds that were approved and denied, a spending ceiling, and a list of situations that always go to the owner.

For a household, it might be read-only calendar access, proposed grocery orders instead of purchases, travel research without booking authority, and explicit rules around medical, financial, educational, and interpersonal information.

Different vocabulary. Same structure.

The agent gets a training ground before it gets a key.

This is more than testing whether the model is smart. A capable model may know more about accounting than a new employee, more about Python than a product manager, and more about travel logistics than the person whose vacation it is planning. None of that tells it which spreadsheet is canonical, why one customer is allowed an exception, which branch must never be force-pushed, how your spouse feels about a six-in-the-morning flight, or why the ugly internal tool nobody likes cannot be removed until October.

General intelligence does not contain local history.

Local history is where the job lives.

A company might have three documents called “pricing policy.” One is current. One is obsolete but still ranks first in search. One describes a special channel nobody has used in eighteen months but that still matters for a handful of contracts.

A family might have a shared calendar that appears authoritative but is not. Dad's dentist appointment is there. The school half-day is in an email. The neighbor has the spare key. Grandma cannot do stairs. The cheapest flight is therefore not the best flight.

A codebase might have a clean architectural pattern in the documentation and a very different reality in production because of three migrations, two acquisitions, and an incident everybody remembers but nobody wrote down.

The agent begins with intelligence and without institutional scar tissue.

The apprenticeship is how you discover which scars matter.

That is why the first assignments should be chosen partly for information value, not only for productivity.

Suppose you want an agent to manage vendor renewals. The tempting first instruction is broad: monitor our subscriptions and save us money.

It sounds like delegation. It is mostly an invitation to discover your hidden assumptions in production.

A better apprenticeship begins with old cases.

Give the agent last year's renewal packet without the final decision. Ask it to identify the renewal date, pricing change, termination window, usage data, owner, dependencies, and unusual terms. Ask it what it would recommend. Compare the result with what actually happened.

Repeat across cases that look similar and were not.

One vendor auto-renewed.

One required notice ninety days early.

One had a discount that disappeared after an acquisition.

One looked expensive but was embedded in a workflow that made switching costly.

One had almost no usage and should have been canceled.

One had low usage because a migration was incomplete.

One was redundant technically but politically important because a major customer required it.

The agent begins to encounter the shape of the job without being able to accidentally cancel anything.

The principal learns too.

Perhaps the criteria you thought were obvious are not. Perhaps the old decisions were inconsistent. Perhaps there is no clean source for contract dates. Perhaps two departments disagree about who owns a subscription. Perhaps the real problem is not agent capability but organizational mess.

This is one of the hidden benefits of training an agent: it makes tacit work expensive enough to notice.

Humans survive ambiguity through social osmosis. A new employee hears a name in a meeting, notices who everybody asks, reads facial expressions, sends a private message, watches somebody route around a broken procedure, and slowly learns which rules are real.

An agent forces some of that invisible structure into the open.

The process can be irritating because the machine seems needy.

Why does it need to know which report is canonical?

Because you have three reports with similar names.

Why does it keep asking whether “active customer” includes free accounts?

Because humans have been using the phrase loosely.

Why will it not decide whether speed or margin matters more?

Because nobody decided.

The apprenticeship becomes an audit of the principal's own vagueness.

This is where agent training becomes interesting for coders and non-coders alike. The implementation differs. The management problem does not.

A programmer may turn a discovered failure into a regression test.

A restaurant owner may turn the same kind of discovery into a written exception: never refund a catering deposit without asking me.

A lawyer may add an escalation rule for a class of language.

A parent may mark certain calendars as suggestion-only.

A salesperson may preserve three examples of acceptable discounting.

A project manager may remove a stale document from the agent's retrieval scope.

The forms are different. Each converts a surprise into something that can affect the next case.

That conversion is training.

Fixing one bad output is not.

If the agent makes a mistake and you patch the immediate result, you have solved the case. If you ask what property of the case made the mistake possible, you may improve the role.

Sometimes the answer is an instruction.

Sometimes an example.

Sometimes a test.

Sometimes a permission boundary.

Sometimes better data.

Sometimes a different tool.

Sometimes the correct lesson is that the task should remain human.

Training includes disqualification.

This is obvious in ordinary life and strangely difficult with software. Companies become attached to automation projects because money, reputation, and strategy have already been invested. Individuals become attached because getting the agent to work once felt like a breakthrough. Every new failure becomes another reason to add another rule.

Soon the role has a forty-page instruction file designed to prevent a system from doing a job it is poorly suited to do.

That is not maturity. It may be technical debt wearing a management costume.

Some roles fail apprenticeship.

A job may be too ambiguous, too rare to evaluate, too dangerous to rehearse, too dependent on unrecorded relationships, too politically sensitive, or too cheap to justify the supervision burden. The agent may be capable in principle and economically pointless in practice.

An apprenticeship gives you a period in which you are allowed to discover that before the agent acquires production authority.

It also protects against the opposite error: abandoning a valuable role because the first attempt was bad.

People are accustomed to software behaving consistently. If a spreadsheet formula is wrong, we fix the formula. If an agent produces a poor result, the variability can feel like evidence that the entire category is unreliable. A structured apprenticeship makes variation observable.

Can the role succeed repeatedly on a representative set of cases?

Does the same correction improve more than one example?

Do new failures cluster at a recognizable boundary?

Does performance survive a change in wording?

Does it behave sensibly when data is missing?

Does it know when to stop?

Does a model upgrade improve the role or silently break it?

These questions turn vibes into evidence.

That last sentence may be the practical heart of the book.

The agent economy is going to produce a lot of vibes.

Models are good at presentation. They explain plans, apologize fluently, organize work into steps, and produce artifacts that resemble finished professional work. Real competence is mixed into that fluency, sometimes at a level that is genuinely startling.

The problem is that polish arrives before qualification.

A junior developer who speaks confidently but has never deployed a production system is still junior. A financial analyst with a beautiful deck can still have the sign wrong. A contractor with a clean truck can still wire the panel badly.

We know how to distrust surface competence in people because we have centuries of institutions built around credentials, references, supervised practice, licenses, reviews, audits, and trial periods.

Agents arrive speaking like seniors.

That bypasses an old psychological warning system.

The safest response is not cynicism. It is qualification.

Anthropic's engineering teams have described agent evaluations as difficult because agents operate across multiple turns and can take different trajectories toward an outcome. That variability is a reason to build evaluation, not a reason to avoid it. OpenAI's guidance emphasizes instructions, tools, guardrails, and human intervention. Security guidance from the UK's National Cyber Security Centre recommends bounded pilots and carefully expanded autonomy.

These sources use different language because they are solving different parts of the problem.

The shared principle is simple.

Do not promote on charm.

A useful apprenticeship includes boring repetitions.

The agent should see ordinary cases until ordinary cases are actually ordinary. It should see adversarial cases, ambiguous cases, stale data, missing data, duplicate data, conflicting instructions, and tool failures. It should be tested on cases that were not used as teaching examples. It should sometimes be rewarded for doing nothing.

That last category is easy to miss.

Many tests assume the task is to produce an output. Real work includes situations where the right action is to leave the account untouched, refuse the request, ask a question, wait, or escalate.

A coding agent should sometimes decline to change the code because the failing test reflects the intended behavior.

A purchasing agent should sometimes leave the cheaper supplier alone because the quality evidence is weak.

A calendar agent should sometimes preserve a conflict because it cannot infer which commitment matters more.

A household agent should sometimes say that a decision belongs to the people who live there.

Helpful systems have a bias toward action because action is visible.

Qualification must test restraint too.

One of the cleanest methods is shadow work.

Let the agent perform the job without authority to change the real system. It can propose replies without sending them, prepare transactions without executing them, select files without deleting them, identify scheduling conflicts without moving meetings, recommend code changes without merging them.

For coders, this resembles dry runs, preview plans, staging, test environments, and pull requests.

For everyone else, it is simply: show me what you would do before you do it.

The human watches patterns rather than isolated outputs.

Which mistakes repeat?

Which cases trigger uncertainty?

Where does the agent become confident for the wrong reason?

What does the human routinely change?

What never needs changing?

What information is repeatedly missing?

A good shadow period produces a correction ledger.

The ledger can be a database table, a Markdown file, a notebook, a document, or twenty lines in a spreadsheet. The sophistication is less important than the habit. Record what happened, why it mattered, and what changed in the operating system around the agent.

“Agent treated refunded revenue as new revenue. Added reconciliation test.”

“Agent drafted response to legal threat instead of escalating. Added mandatory escalation trigger for litigation language.”

“Agent repeatedly selected stale policy folder. Removed stale folder from retrieval scope.”

“Agent asked for approval on harmless formatting change. Widened autonomy; no approval needed.”

“Agent generated a database migration that passed unit tests but would lock a large table. Added production-scale migration check.”

“Agent chose lowest airfare and ignored an accessibility constraint. Added traveler constraints as required planning input.”

Notice that training moves in both directions.

Some failures reveal too much autonomy.

Some reveal too little.

An agent that asks permission for every low-risk step is not well trained. It has merely transferred its labor back to the principal through interruptions. The point is not to construct a maze of gates. It is to demonstrate freedom inside meaningful bounds.

This is why *guardrail* is too small a metaphor for the entire problem.

A guardrail tells you where the car must not go.

An apprenticeship teaches what counts as competent driving.

Both matter.

A system buried under approval gates can be safe and useless. A system with no gates can be useful until one day it is spectacularly not.

The apprenticeship is how you find the boundary with evidence instead of hope.

Human apprenticeship contains another useful pattern: exposure grows with competence.

The apprentice watches, assists, performs a bounded task, handles more complete work under review, operates independently on ordinary cases, and finally learns to recognize cases that require another level of expertise.

An agent can move through a similar operational ladder without pretending to be human.

Observe historical examples.

Draft without acting.

Act with approval.

Act inside explicit limits and produce evidence.

Escalate at known boundaries.

Only later receive authority whose misuse creates serious or irreversible consequences.

The exact stages vary by role. What matters is that authority has a history behind it.

This is qualification by evidence.

It is more disciplined than feature-driven autonomy. A vendor adds a new capability, so the user turns it on. The model can now browse, so it browses. It can now buy, so it buys. It can now commit code, so it commits. It can now call another agent, so it delegates.

Capability becomes permission by accident.

A trained role reverses the sequence.

Capability is merely a candidate for permission.

This distinction becomes more important as base models improve. METR has measured rapid progress in the length of software tasks frontier agents can complete at specified reliability levels. The benchmark is software-heavy and should not be turned into a universal clock for the economy. The management implication is narrower and sturdier: the technical capability envelope moves faster than most organizations rewrite their operating rules.

If you tie authority directly to what the current model can technically do, authority expands whenever the model does.

If you tie authority to what the role has demonstrated under your conditions, you retain a stable principle while the technology changes beneath it.

The apprenticeship may get shorter as models improve.

The entrance exam may get harder.

The training ground may become more automated.

The tests may be generated by other agents.

The underlying principle does not require a slow or clumsy machine. In fact, the more capable the system becomes, the easier it is to skip the qualification step because the first result looks so good.

There is a final reason to train this way.

The apprenticeship is not only for the agent.

It is where the principal learns the job.

People talk about training agents as though knowledge flows in one direction. The human teaches; the machine improves. In practice, an agent often forces the human to articulate what successful work actually means.

That can be humbling.

You discover that you cannot explain why you reject half the drafts.

You discover that the metric you ask people to optimize is not the outcome you care about.

You discover that the “simple” weekly process depends on one employee quietly fixing three systems.

You discover that the policy contains a contradiction everybody has learned to route around.

You discover that some of your judgment is principle and some is habit.

You discover that a test suite measures what is easy to assert rather than what users actually value.

You discover that the family routine works because somebody remembers what nobody wrote down.

The machine did not create these ambiguities.

It made them legible.

Every ambiguity you resolve can make human and machine work cleaner. Every example you preserve can accelerate the next person. Every test you add can protect against regression. Every boundary you clarify can reduce future supervision. Every stale source you remove can improve decisions beyond the agent itself.

The trained agent is one output.

A better-understood job is another.

This is why the first weeks with an agent should not be judged only by hours saved. Some of the most valuable work may initially create no savings. You will spend time designing examples, reviewing cases, naming exceptions, cleaning context, and building tests.

From the perspective of this afternoon, that can look inefficient.

From the perspective of the hundredth repetition, it can look like capital investment.

That is the economic argument hiding inside apprenticeship.

You are not merely teaching software how to complete a task.

You are converting judgment into a system that can be reused.

A coder might call the durable pieces an eval suite, fixtures, tools, policies, schemas, permissions, logs, and runbooks.

A business owner might call them standards, examples, checklists, limits, and institutional knowledge.

A household might simply call them the way we do things here.

The names are different.

The asset is the same.

It is accumulated operating judgment.

The agent economy will favor people who learn how to build it.

And the first rule is simple enough to remember without any metaphor at all:

Do not give production authority to unqualified intelligence.