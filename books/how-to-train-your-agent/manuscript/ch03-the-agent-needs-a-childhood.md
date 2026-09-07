# The Agent Needs a Childhood

The phrase sounds sentimental until you watch somebody skip it.

A new agent is connected to email on Tuesday. By Wednesday it can read the calendar. On Thursday it is allowed to draft replies. Friday afternoon, after three days of impressive behavior, somebody gives it permission to send.

The first week has been mistaken for training.

What actually happened was exposure.

The system encountered a small sample of ordinary work. It behaved well enough to create confidence. Confidence became authority. The expensive cases had not arrived yet.

No angry customer had written from an ambiguous address. No vendor had attached a document containing malicious instructions. No colleague had used sarcasm. No calendar had contained two people with the same name. No family member had asked for something that was technically permitted and obviously inappropriate. No software dependency had failed halfway through the job. No underlying model had been updated. No task had required the agent to choose between two rules that each looked reasonable in isolation.

A quiet week is not an education.

Human institutions learned this slowly because the alternative is costly. Apprentices do not begin with the most dangerous work. Pilots do not receive a passenger jet because the first lesson went well. Medical training, legal training, accounting, skilled trades, military operations, manufacturing, and countless other practices all contain some version of graduated participation. The novice sees work, performs pieces, receives correction, takes on larger responsibility, and is exposed to variation while somebody else still carries enough responsibility to stop a bad outcome.

Jean Lave and Etienne Wenger used the phrase *legitimate peripheral participation* to describe how newcomers move toward fuller participation in communities of practice. Their work is about human learning, identity, and social participation. An AI agent does not become a member of a human community in that sense. It does not acquire a professional identity by standing beside a master carpenter.

The analogy is useful at a different level.

A principal needs a way to expose capability to reality without granting the full consequences of reality on day one.

That is the agent's childhood.

It is a deliberately protected period in which the system is allowed to be wrong cheaply.

This is not how software is usually marketed. Software arrives as a product. You buy it, configure it, and use it. Even enterprise deployments with careful testing are described as implementations, not childhoods. The language of readiness belongs to engineering: staging environment, pilot, sandbox, beta, evaluation, quality assurance.

Those are good words. Keep them.

The reason to add *childhood* is to change the user's expectation of time.

A sandbox sounds like a place you visit before the real work begins. Childhood suggests that what happens there becomes part of the role. A failure is not merely a bug to be fixed. It is a chance to alter the future operating environment. A correction that does not survive is not much of a lesson.

The agent economy will create vast numbers of apparently adult systems with no childhood at all.

They will speak perfectly.

They will know astonishing amounts.

They will be dropped into jobs whose local rules they have never encountered and given authority because general intelligence is being confused with institutional competence.

We already know the human version of this mistake. A brilliant new executive can join an organization and make a foolish decision because she does not know which written rule is obsolete, which unofficial relationship holds the process together, or which customer exception exists for a reason nobody documented. Intelligence helps her learn. It does not erase the need to learn.

Agents make the gap stranger because they may begin with more factual and procedural knowledge than any human newcomer could possess. A general model can explain accounting principles, write code, summarize case law, translate a contract, and draft a marketing plan before it knows that your company calls refunds above a certain amount “rescues” or that the shared drive contains two policy folders and only one is current.

The general competence is dazzling.

The local ignorance is easy to underestimate.

Training starts by separating the two.

You do not need to teach the agent everything about the world. You need to discover what it does not know about *this role* that can hurt you.

That means the first assignments should be chosen for information value, not only productivity.

Suppose you want an agent to manage vendor renewals. The tempting first task is to hand it the renewal queue and ask it to save money. That objective is broad, consequential, and full of hidden preferences. A better childhood begins with old cases.

Give the agent last year's renewal packet without the final decision. Ask it to identify the renewal date, pricing change, termination window, usage data, and unusual terms. Compare the result with what actually happened. Repeat across vendors that behaved differently.

One vendor auto-renewed.

One required notice ninety days early.

One had a discount that disappeared after an acquisition.

One looked expensive but was embedded in a workflow that made switching costly.

One had barely any usage and should have been canceled.

One had low usage because the team had not completed migration yet.

The agent begins to encounter the shape of the job without being able to accidentally cancel anything.

The principal learns too.

Perhaps the criteria you thought were obvious are not. Perhaps the old decisions were inconsistent. Perhaps there is no clean source for contract dates. Perhaps two departments disagree about who owns a subscription. Perhaps the real problem is not agent capability but organizational mess.

This is one of the hidden benefits of training agents: they expose tacit systems.

A human employee can survive ambiguity through social osmosis. She hears a name in a meeting, notices who everybody asks, reads tone, walks over to a desk, and learns which procedure exists only on paper. An agent forces some of that invisible structure into the open.

The process can be irritating because the machine seems needy.

Why does it need to know which report is canonical? Because your organization has three reports with similar names.

Why does it keep asking whether “active customer” includes free accounts? Because humans have been using the phrase loosely.

Why can it not decide which objective matters more? Because nobody decided.

The agent's childhood can become an audit of the principal's own vagueness.

This is where training diverges from mere correction. If the agent makes a mistake and you patch the immediate output, you have solved the case. If you ask what property of the case made the mistake possible, you may improve the role.

A child says, “I thought you meant this.” A machine does not have that inner narrative in the human sense, but its trajectory can still reveal a mismatch between instruction and outcome. The useful question is not whether the system should have known better. The useful question is what you will change before the next similar case.

Sometimes the answer is an instruction.

Sometimes an example.

Sometimes a test.

Sometimes a permission boundary.

Sometimes better data.

Sometimes a different tool.

Sometimes the correct lesson is that the task should remain human.

That last answer deserves more respect. The purpose of an agent childhood is not to guarantee adulthood. Some roles fail probation.

This is obvious with humans and strangely hard with software. Companies become attached to automation projects because money, reputation, and strategy have already been invested. Individuals become attached because getting the agent to work once felt like a breakthrough. Every new failure becomes another reason to add a rule.

Soon the role has a forty-page instruction manual designed to prevent a system from doing a job it is poorly suited to do.

Training includes firing.

A job may be too ambiguous, too rare to evaluate, too dangerous to rehearse, too dependent on unrecorded human relationships, or too cheap to justify the supervision burden. The agent may be capable in principle and economically pointless in practice.

Childhood gives you a period in which you are allowed to discover that.

It also protects against the opposite error: abandoning a valuable role because the first attempt was bad.

People are accustomed to software behaving consistently. If a spreadsheet formula is wrong, we fix the formula. If an agent produces a poor result, the variability can feel like evidence that the entire category is unreliable. A structured training process makes variation observable.

Can the agent succeed repeatedly on a representative set of cases?

Does the same correction improve more than one example?

Do new failures cluster at a recognizable boundary?

Does performance survive a change in wording?

Does it know when to stop?

Does a model upgrade improve the role or silently break it?

These questions turn vibes into evidence.

Anthropic's engineering teams have described agent evaluations as difficult precisely because agents operate across many turns and can take different trajectories toward an outcome. That variability is a reason to build evaluations, not a reason to avoid them. OpenAI's agent guidance likewise emphasizes human intervention and bounded use cases. Security agencies have urged organizations to begin with limited autonomy and expand carefully.

The shared principle is simple: do not promote on charm.

The agent economy will have a charm problem.

Models are optimized to communicate. They explain plans, apologize, and produce artifacts that resemble finished professional work. That competence can be real. The presentation can also make us skip the boring evidence we would demand from less fluent automation.

If an industrial robot occasionally improvised a new movement, engineers would want to know the envelope of that behavior before placing a person beside it. If a bank's payment system interpreted policy differently on one transaction in fifty, nobody would accept “it usually gets the idea” as a control.

Language makes inconsistency feel negotiable.

Consequences are less conversational.

A well-designed childhood therefore includes boring repetitions.

The agent should see ordinary cases until ordinary cases are actually ordinary. It should see adversarial cases, ambiguous cases, stale data, missing data, duplicate data, conflicting instructions, and tool failures. It should be tested on cases that are not in the examples used to teach it. It should sometimes be rewarded for doing nothing.

The last category is especially important.

Many evaluations assume the task is to produce an output. Real work includes cases where the right action is to leave the account untouched, refuse the request, ask a question, or wait.

An agent trained only on positive action can become an overeager employee.

It wants to help.

The principal needs to teach the value of restraint.

One way to do this is with shadow work.

Let the agent perform the job without authority to change the real system. It can propose replies without sending them, prepare transactions without executing them, select files without deleting them, identify scheduling conflicts without moving meetings, recommend code changes without merging them.

The human sees not only final recommendations but patterns.

Which mistakes repeat?

Which cases trigger uncertainty?

Where does the agent become confident for the wrong reason?

What does the human routinely change?

A good shadow period produces a correction ledger. The ledger does not need to be elaborate. It records what happened, why it mattered, and what changed in the system as a result.

“Agent treated refunded revenue as new revenue. Added example and reconciliation test.”

“Agent drafted response to legal threat instead of escalating. Added mandatory escalation trigger for litigation language.”

“Agent repeatedly selected stale policy folder. Removed stale folder from retrieval scope.”

“Agent asked for approval on harmless formatting change. Widened autonomy; no approval needed.”

Notice that training moves in both directions.

Some failures reveal too much autonomy.

Some reveal too little.

An agent that asks permission for every low-risk step is not mature. It has merely transferred its labor back to the principal through interruptions. A childhood should teach what the system can do alone as well as what it cannot.

This is one reason the word *guardrail* can be misleading if it dominates our thinking. A guardrail prevents a vehicle from leaving the road. Training is about learning to travel the road efficiently too.

A system buried under approval gates can be safe and useless.

A system with no gates can be useful until one day it is spectacularly not.

The objective is demonstrated freedom inside meaningful bounds.

Human apprenticeship contains another lesson worth borrowing: exposure should grow with competence.

The apprentice watches, then assists, then performs a bounded task, then handles more complete work under review, then operates independently on ordinary cases, then becomes capable of recognizing cases that require somebody else.

An agent can move through a similar operational ladder without pretending to be human.

First, observe historical examples.

Then draft.

Then act with approval.

Then act within explicit limits and report what happened.

Only later should it receive authority whose misuse creates serious or irreversible consequences.

The exact stages vary by role. What matters is that authority has a memory of evidence behind it.

This is more disciplined than the common alternative, which is feature-driven autonomy. The vendor adds a new capability, so the user turns it on. The model can now browse, so it browses. It can now buy, so it buys. It can now call another agent, so it delegates.

Capability becomes permission by accident.

A trained role reverses the sequence.

Capability is merely a candidate for permission.

This distinction becomes more important as base models improve. METR has measured rapid progress in the length of software tasks frontier agents can complete at given reliability levels. The exact trend should not be generalized beyond the benchmark. The management implication survives the uncertainty: the capability envelope is moving.

If you tie authority directly to what the model can technically do, authority will expand whenever the model does.

If you tie authority to what the role has demonstrated under your conditions, you retain a stable principle while the technology changes beneath it.

The childhood may become shorter as models improve.

It should not disappear merely because the child arrives knowing calculus.

There is a final reason to train this way. Childhood is when the principal learns whether the role is worth having.

People talk about training agents as though knowledge flows in one direction. The human teaches; the machine improves. In practice, the machine often forces the human to articulate what successful work actually means.

That can be humbling.

You discover that you cannot explain why you reject half the drafts.

You discover that the metric you ask people to optimize is not the outcome you care about.

You discover that the “simple” weekly process depends on one employee quietly fixing three systems.

You discover that your policy contains a contradiction everyone has learned to route around.

You discover that some of your judgment is principle and some is habit.

The agent's childhood becomes a period of parental education.

That is not a cute metaphor. It is a source of economic value.

Every ambiguity you resolve can make both human and machine work cleaner. Every example you preserve can accelerate the next person. Every test you add can protect against regression. Every boundary you clarify can reduce future supervision.

The trained agent is one output.

A better-understood job is another.

This is why the first weeks with an agent should not be judged only by hours saved. Some of the most valuable work will initially create no savings at all. You will spend time designing examples, reviewing cases, naming exceptions, and building tests.

From the perspective of this afternoon, that can look inefficient.

From the perspective of the hundredth repetition, it can look like capital investment.

The agent economy will favor people who know the difference.

A childhood is expensive because somebody has to pay attention.

That is exactly why it can become valuable.