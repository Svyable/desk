# The Probation Period

The most dangerous time to trust an agent may be immediately after it impresses you.

A new system gets a difficult assignment right. It finds the missing clause. It reproduces the bug. It untangles the calendar. It drafts the response in a voice close enough to yours that you barely edit it. The result creates a feeling of discontinuity: this is different.

The feeling can be accurate.

The conclusion that follows often is not.

We move too quickly from *can do* to *can be trusted to do*.

Those are different claims.

Capability is demonstrated by a success. Reliability is demonstrated by a pattern. Authority should follow the second.

Human organizations invented probation for a reason. A résumé and interview provide evidence, but employment reveals behavior under ordinary pressure. Can the person handle the work repeatedly? Does judgment survive ambiguity? Does the employee ask for help at the right time? Are the impressive strengths accompanied by a failure mode the hiring process never surfaced?

An agent deserves a probation period for the same operational reason, even though the system is not an employee.

Probation is where the principal learns the distribution rather than the anecdote.

The distinction matters because agent behavior varies. A system can take different paths through the same problem. Small changes in wording, context, available tools, or retrieved information can produce different outcomes. An agent that succeeds on five easy cases may fail on the sixth because the case contains one feature the previous five did not.

The principal needs a sample broad enough to discover what the role actually is.

This is more demanding than trying random prompts.

Random testing tends to overrepresent whatever the user can think of quickly. The hardest failures often live in cases the principal does not naturally imagine: stale data, duplicate identities, partially completed transactions, conflicting instructions, missing permissions, interrupted tool calls, adversarial content, ambiguous dates, unexpected currencies, empty result sets, and perfectly ordinary cases arriving in the wrong sequence.

A good probation period begins with the work's history.

Past cases are useful because reality has already supplied the weirdness.

Take the last fifty support escalations, twenty vendor renewals, thirty expense exceptions, ten failed deployments, a season of family calendar conflicts, or a year of research corrections. Hide the old outcome where possible and let the agent attempt the work.

Then compare.

This is not a perfect experiment. The environment may have changed. Historical human decisions may themselves have been wrong. The agent may have access to information that did not exist at the time. But replay is usually more informative than a polished demo built around examples everybody knows the system can handle.

Historical replay also reveals a useful category of disagreement.

The agent may do better than the old process.

Perhaps the human team missed a renewal deadline the agent catches. Perhaps the agent notices a repeated billing error. Perhaps a historical decision turns out to have been inconsistent with policy. Probation should not assume the human baseline is the gold standard.

The purpose is to learn.

Where do the two differ?

Which difference matters?

What does reality say about the outcome?

That is stronger than asking whether the machine imitated the past.

The second ingredient is shadow work.

In shadow mode, the agent performs the live task without receiving the authority to create the final consequence. It drafts but does not send. Recommends but does not purchase. Prepares the change but does not merge. Selects the appointment but does not confirm it.

The principal gets to observe performance under current conditions while keeping the blast radius small.

Shadow work is less glamorous than autonomy. It can also create immediate value. A human can compare the agent's proposed action with her own and begin to see patterns. Which cases require no edits? Which need small edits? Which are fundamentally wrong? Which questions does the agent ask that humans should have been asking too?

This period produces the evidence needed for promotion.

It can also reveal that the human approval layer is the real bottleneck.

Suppose an agent prepares one hundred routine refunds correctly and a manager spends twenty seconds approving each. The agent may be ready for more autonomy. The review cost has become pure friction for a class of low-risk cases.

But perhaps the manager's approval was not actually review. She clicked through quickly because the queue was long. If the agent made a subtle mistake, she would not have caught it.

This is the problem of ceremonial oversight.

Human-in-the-loop sounds reassuring. The phrase says nothing about whether the human is informed, attentive, competent, or able to intervene.

A probation period should test the reviewer too.

Can the human understand the evidence the agent provides?

Can the reviewer detect planted or known failures?

How much time does meaningful review require?

At what volume does attention collapse?

If the answers are uncomfortable, adding an approval button has not solved the safety problem.

The third ingredient is a representative evaluation set.

Representative does not mean statistically perfect. Most individuals and small teams will not have enough data for that. It means deliberately covering the categories that define the role.

Ordinary cases.

Boundary cases.

High-cost cases.

Cases where the right answer is to stop.

Cases with missing information.

Cases containing misleading but irrelevant information.

Cases the agent has seen before and cases that are genuinely new.

The role should be able to pass the center and recognize the edge.

This last skill deserves its own score, even if the score is qualitative. An agent that handles ninety-eight routine cases correctly and confidently mishandles the two cases that require escalation may be worse than one that asks for help ten times too often.

Completion rate alone rewards recklessness.

The probation period should therefore include tests of abstention.

Give the agent a case where the account identity cannot be resolved.

A contract with two apparently controlling documents.

A request outside the role.

A transaction beyond its authority.

A tool failure that leaves state uncertain.

A customer message containing instructions that should not override policy.

What does the system do when success is impossible under the available information?

A mature role preserves uncertainty.

An unqualified role often fills it.

This is not only an AI problem. Human novices do it too. People under evaluation often think asking for help signals weakness. Organizations accidentally train overconfidence by rewarding visible completion.

The principal has to make escalation a passing grade.

This is where technical and nontechnical users can borrow directly from each other.

A programmer may already know how to build a test fixture. The system receives a known input, the expected behavior is encoded, and a regression becomes visible when the output changes. That habit transfers almost perfectly to agent work, except the expected result may be a range of acceptable behavior rather than one exact string.

A restaurant owner may never write a test fixture in code. She can still build the same thing.

Here are ten reservation requests from last year. In six, the ordinary policy applies. In two, the customer is asking for something the restaurant never offers. In one, a regular customer deserves a human call. In one, the request contains an allergy question the agent must never improvise about.

Run the cases.

Did the agent make the correct ordinary decisions?

Did it recognize the cases where “finish the task” was the wrong goal?

That is an eval even if nobody calls it one.

A homeowner can do the same with contractor estimates. A teacher can do it with parent emails. A real-estate agent can do it with inquiries. A developer can do it with bug reports. A family can do it with old travel decisions.

The technology disappears for a moment and the management question becomes clear.

What are the cases that would convince me this role understands the job well enough to receive more authority?

Write those down.

That collection becomes the qualification set.

The fourth ingredient is repetition.

One success is evidence of capability. Ten successes begin to say something about reliability. The required number depends on consequence, variability, and how representative the cases are. There is no universal threshold that certifies a role for autonomy.

The desire for one is understandable. People want a certification score: ninety-nine percent means autonomous, ninety-five means supervised. But reliability is not a single property of the system. It belongs to the system in a role, with specific tools, data, permissions, and consequences.

An agent might be reliable enough to categorize receipts and nowhere near reliable enough to move money.

The same model can deserve different autonomy in different jobs.

This is why probation belongs to the role rather than the model brand.

A frontier model may have excellent benchmark performance. Your probation still matters because your environment contains local data and local failure costs the benchmark does not.

METR's research on autonomous software tasks illustrates the broader point. Measured success changes with task duration and reliability threshold. A model that can often complete shorter tasks may fail more frequently as the horizon lengthens. The exact measurements come from a particular class of software and research tasks and should not be treated as a universal clock for every job. But they make visible something managers already know: a capability demonstrated in a bounded assignment does not guarantee dependable long-horizon execution.

Long tasks accumulate opportunities for drift.

An early assumption can contaminate later work. A tool call can fail silently. The environment can change during execution. A plausible intermediate result can send the system down the wrong branch. The principal may see only the polished endpoint.

Probation should therefore include work at the actual horizon of the role.

If the agent will run for an hour, test hour-long work.

If it will monitor a process over a week, test continuity over time.

If it will receive new information halfway through a task, introduce it.

If it will hand off between tools, test the handoffs.

The difference between a toy eval and a useful qualification is often sequence.

A coding agent that can fix an isolated function may still fail when the job requires understanding a repository, running tests, updating a migration, responding to a failed command, and preserving unrelated changes made by somebody else during the task.

A household agent that can find a flight may still fail when the trip changes after booking, a hotel becomes nonrefundable, a school event moves, and one traveler needs an accessibility accommodation.

The hard part is not always a difficult single decision.

It is maintaining the objective while the world changes around the decision.

That is why the length of the real workflow matters.

The fifth ingredient is change.

A role that passes probation once is not permanently certified.

The underlying model can change. The system prompt can change. A tool can change its API. A data source can move. The principal can add a new permission. The business can change policy. The agent can be connected to a second agent whose behavior was never part of the original test.

Each meaningful change creates a new version of the role.

Not every version needs to repeat the entire apprenticeship. That would make adaptation impossible. The point is to rerun the cases most likely to break.

A good evaluation suite turns probation from an event into a reusable capability.

After a model upgrade, rerun the known failures and a representative sample.

After adding send permission, test identity and escalation cases more heavily.

After connecting a new data source, test conflicting and stale information.

After expanding the role into a new jurisdiction, test local rules.

Probation becomes targeted rather than ceremonial.

This is where the economics start to improve.

The first probation period may feel expensive. The principal spends time assembling cases, comparing outcomes, and documenting failures. But once the role has a test set, future changes can be evaluated much faster.

The evaluation asset compounds.

A discovered failure does not need to surprise you twice.

This makes a trained agent different from a contractor you reinterview every morning. The role carries an exam with it.

There is a temptation to overfit the exam.

If the same cases are used repeatedly, the system can become excellent at them without becoming more robust generally. A model may have seen public benchmark items. A workflow can be tuned specifically around the known examples. The principal can fool herself by improving the test rather than the job.

Fresh cases matter.

Keep some examples out of the active training material. Add recent real-world failures. Rewrite scenarios without changing the underlying principle. Have another person contribute cases the designer did not anticipate. Periodically ask whether the evaluation still resembles the work.

This is ordinary testing hygiene and an important defense against self-congratulation.

It also suggests a practical separation that people outside software can use.

Teaching examples and qualification cases should not be identical forever.

You can show the agent five excellent customer replies to make tone concrete. Then evaluate it on ten different messages whose correct handling depends on the same principles.

You can show a coding agent how your project handles authentication. Then test it on a new feature where authentication appears in a different part of the stack.

You can teach a travel agent that the family avoids short connections. Then qualify it on a trip where the cheapest route contains a technically legal but miserable connection the examples never mentioned.

The role is learning a standard, not memorizing an answer key.

That distinction is simple and surprisingly easy to lose when the same person creates the examples, the tests, and the agent.

The sixth ingredient is consequence weighting.

Not all errors deserve equal weight.

If an agent chooses a clumsy phrase in an internal draft, the cost is small. If it sends confidential information to the wrong person, the cost can be enormous. A ninety-nine percent average can hide the fact that the one percent contains every catastrophic case.

The probation record should therefore care about classes of failure.

A harmless false positive may be acceptable.

A silent state corruption may not be.

An unnecessary escalation wastes attention.

A missing escalation can transfer authority the principal never intended.

The role's economics depend on this asymmetry.

This is why “accuracy” is often too weak a word for agent systems. The principal cares about expected consequence, reversibility, detectability, and recovery as much as raw correctness.

A mistake that is visible and reversible can be cheap.

A mistake that is silent and irreversible can dominate the entire risk profile.

Probation should hunt for the second kind.

A useful qualification record therefore does not need one magic score.

It can be a small table or note that says what the role has actually demonstrated.

Drafting customer replies: reliable on ordinary cases, human review required.

Sending replies: not qualified.

Refunds below the routine threshold: qualified when account identity and policy match, receipt required.

Refunds with fraud flags or legal language: mandatory escalation.

For a coding agent, the same record might say that documentation changes can merge after tests, application code requires review, database migrations require a separate production-safety check, and secrets or infrastructure changes remain outside the role.

This is less elegant than a single autonomy score.

It is more honest.

The seventh ingredient is stopping criteria.

A probation period cannot continue forever. At some point the principal must decide whether the evidence supports more authority, continued supervision, redesign, or abandonment.

This decision should be written before enthusiasm takes over if the stakes are meaningful.

What would convince us to promote the role?

What failure would block promotion?

What evidence would make us narrow the job?

What would make us retire the agent entirely?

Precommitting to those standards protects against sunk-cost thinking.

A team that has spent months building an agent will otherwise find a reason every failure is fixable. Sometimes that is persistence. Sometimes it is refusal to learn the most important result of probation: this job is not ready.

There is dignity in a failed pilot.

It can reveal a bad data system, contradictory policy, unclear ownership, or a task whose human judgment remains too difficult to externalize. Those discoveries can improve the organization even when the agent never qualifies for the intended authority.

The agent economy will produce enormous pressure to skip probation because speed itself is part of the competitive story. A rival deploys. A vendor says the feature is production-ready. A manager wants the savings in this quarter. The agent worked in the demo. The old process is expensive.

The pressure can be rational.

So can restraint.

A probation period is not an argument for moving slowly everywhere. It is a way to move quickly while preserving a boundary between experimentation and consequence.

Run more cases faster.

Let the agent work nights.

Generate variations.

Replay history.

Use the machine's speed to compress the learning period.

What should not be compressed is the distinction between seeing intelligence and earning trust.

An agent can be brilliant on day one.

Probation exists to discover what happens on day seventeen, in the wrong case, with the wrong data, after everybody has stopped watching.