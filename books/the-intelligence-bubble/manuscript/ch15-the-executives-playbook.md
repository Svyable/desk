# The Executive's Playbook

Executives face the opposite danger from investors.

Investors can overpay for AI.

Executives can overbuy it.

The pressure is understandable. Boards ask for strategy. Employees experiment independently. Vendors promise transformation. Competitors announce agents. Consultants produce maturity models. Every software renewal now contains an AI surcharge or an AI bundle. Nobody wants to be the leader who ignored a platform shift.

The answer is not caution for its own sake.

It is operational clarity.

The most expensive mistakes often begin before a model is selected. A company approves an enterprise license because the category feels inevitable, then asks thousands of employees to discover the return on investment after procurement has already committed the money. Another team builds a technically impressive agent around a process whose bottleneck is not cognition at all but permissions, missing data, regulatory review, or a customer who still has to sign a paper form. A third team automates a task that was slow partly because the slowness was doing useful work: forcing a second person to look at an exception, giving a customer time to correct an error, or making an irreversible action inconvenient.

AI does not remove the need to understand the work. It makes misunderstanding the work cheaper to scale.

**Start With the Workflow, Not the Model**

The worst enterprise AI question is:

“Which model should we use?”

The best first question is:

“Which workflow is expensive, slow, error-prone, capacity constrained, or impossible today?”

Models change too quickly to be the organizing principle of enterprise transformation.

Workflows persist.

Map the process.

What enters?

Who decides?

What systems are touched?

Where do errors occur?

Where do people wait?

Which exceptions require judgment?

What output creates value?

Only then choose the intelligence required.

This reverses the common sales motion. Instead of buying a capability and hunting for use cases, you identify valuable work and procure the cheapest reliable capability that performs it.

The word reliable matters as much as cheap. A model that answers ninety-nine routine cases beautifully and mishandles the one case that creates legal liability may be worse than a less capable system with a narrow job description and a dependable escalation path. The relevant unit is not benchmark intelligence. It is the completed workflow under real operating constraints.

That usually means the first useful artifact is not an AI strategy deck. It is a process map with costs attached.

How many people touch the work? How long does the median case take? What does the ninety-fifth percentile look like? Which failures create rework? Which failures create actual loss? Which steps exist because the old software was limited, and which exist because the organization has learned that a second pair of eyes is worth paying for?

Once those questions are answered, some proposed AI projects become more attractive. Others disappear.

That is progress too.

**Buy Outcomes, Not Theater**

AI theater is easy to recognize after the fact.

A chatbot launches.

Employees use it for a week.

A dashboard reports “engagement.”

The company announces an AI initiative.

Nothing important changes.

Real adoption should alter an operating measure.

Hours saved.

Cycle time reduced.

Errors avoided.

Claims processed.

Revenue converted.

Downtime prevented.

Inventory reduced.

Customer satisfaction improved.

Incidents detected.

Research throughput increased.

If the deployment cannot be connected to an operational metric, it may still be useful experimentation. Do not confuse experimentation with transformation.

There is also a subtler version of theater: a metric moves, but the economics do not.

A support agent may shorten handling time while increasing escalations. A coding assistant may raise lines of code produced while increasing review burden. A research system may generate more hypotheses while consuming scarce expert attention sorting plausible ideas from noise. A sales tool may increase outreach while lowering response quality. A clinical documentation system may save typing time while moving verification work to the end of the day.

A local productivity metric can improve while total system cost rises.

That is why measurement has to follow the work across the boundary where value is actually realized. Saving ten minutes upstream is not a gain if it creates fifteen minutes of correction downstream.

**Build Evaluations Before Scale**

A human employee is evaluated by the organization even when the process is informal.

Was the work correct?

Was it on time?

Did it comply with policy?

Did the customer accept it?

AI systems need the same discipline in more explicit form.

Before scaling a model into a workflow, build an evaluation set that represents the real task. Include normal cases, edge cases, adversarial inputs, ambiguous examples, and situations where the system should abstain.

Measure quality by outcome, not by demo impressiveness.

The organization that owns its evaluation layer owns a crucial piece of leverage over model vendors.

It can switch suppliers intelligently.

Without evaluations, model choice becomes faith.

This is not merely an engineering preference. NIST's AI Risk Management Framework organizes practical risk management around four functions—govern, map, measure, and manage—and its generative-AI profile extends that logic to the particular risks created by generative systems. The order matters less than the operating habit behind it: define the context, identify what can go wrong, measure the system in that context, and assign responsibility for what happens next.

A useful enterprise evaluation therefore contains more than a score.

It contains ownership.

Someone decides which failures are intolerable. Someone maintains the examples. Someone investigates regressions. Someone determines whether a new model is genuinely better or simply better on the vendor's preferred benchmark. Someone has authority to stop a rollout when the evidence turns.

That institutional layer is easy to overlook because it is less visible than the model. It may be the more durable asset.

A company with a mature evaluation set can take advantage of model improvement quickly because it has a way to verify improvement. A company without one may have access to the best model in the market and still be unable to tell whether changing providers makes its operation better or worse.

**Design for Portability**

No enterprise should assume today's preferred model will remain preferred.

Abstract where practical.

Separate business logic from model-specific prompts.

Maintain evaluation suites that can compare providers.

Use routing where different tasks have different requirements.

Keep data schemas and permissions independent of a single vendor.

Negotiate access to logs and outputs necessary for migration.

Understand which fine-tunes or proprietary features create genuine switching cost.

Portability does not mean using every model.

It means preserving the option to change when economics change.

Options are valuable in deflationary markets.

The design problem is to identify what should be portable and what is worth allowing to become specific.

A company may rationally choose a proprietary feature that is materially better than the alternatives. It may choose a single cloud because the operational simplicity is worth more than theoretical independence. It may build tightly around one model because time to market matters more than future bargaining power.

Those are not mistakes if the trade is explicit.

The mistake is accidental lock-in: discovering later that a model-specific function call contains years of business logic, that evaluation data cannot be exported, that a security process assumes one provider's architecture, or that the company signed a minimum-spend commitment larger than the workload it now wants to run.

Portability is partly software architecture and partly contract architecture.

Both have to be designed before the bargaining leverage is needed.

**Treat Data as a Governed Asset**

The phrase “our proprietary data” has encouraged companies to imagine that every old document is a gold mine.

It is not.

Enterprise data is often duplicated, stale, legally constrained, poorly labeled, inconsistent, and stored in systems with unclear permissions. Feeding all of it into AI can amplify confusion rather than create intelligence.

Govern the asset.

What may be used?

For what purpose?

Who owns the rights?

What contains personal or regulated information?

What should never leave a particular environment?

How long should outputs be retained?

What feedback may be used to improve a system?

Who can revoke access?

Data advantage comes from trustworthy structure, not hoarding.

Governance becomes more important as models become easier to connect to everything.

The old enterprise application often had a narrow permission surface. A payroll system knew payroll. A claims system knew claims. A document repository stored documents. An agent can sit above several systems at once, read from one, write to another, summarize a third, and take an action in a fourth.

That is useful precisely because it crosses boundaries.

It is also why inherited access controls deserve suspicion. An employee who can open three systems separately does not necessarily need an agent that can combine all three automatically and act at machine speed. Aggregation can create a capability that did not exist when the permissions were granted one application at a time.

The governance question is therefore not only whether the model may see the data. It is what the model may infer, combine, retain, and do because it saw the data.

**Negotiate the Deflation**

Enterprise buyers should assume the unit cost of many AI services will fall.

Contracts should reflect that possibility.

Avoid long commitments that lock in scarcity-era pricing without compensating benefits. Seek volume tiers, benchmark clauses, periodic repricing, portability rights, or other mechanisms that let the organization participate in efficiency gains.

The vendor will argue that usage will expand.

Good.

A customer can commit to more usage without agreeing to permanent unit prices.

The central procurement principle is simple:

**Do not give away the deflation dividend.**

Procurement should also distinguish discounts from economics.

A vendor can offer a lower token price while encouraging an architecture that consumes far more tokens. A cheap model can become expensive if it requires multiple retries, more human review, or a larger context window to reach acceptable quality. A premium model can be cheaper per completed task if it succeeds the first time.

The contract should follow the business unit where possible.

Cost per completed claim is more informative than cost per million tokens. Cost per resolved support case is more useful than price per model call. Cost per accepted software change is more useful than cost per generated line.

When vendors sell intelligence by the unit, buyers should keep translating the unit back into work.

**Know When Lock-In Is Worth It**

Lock-in is not always bad.

A deeply integrated system can create enormous value. Standardizing on one cloud platform, one enterprise suite, or one model provider can reduce complexity and accelerate execution.

The question is whether the switching cost is matched by real value.

Good lock-in comes from accumulated workflow value: integrations, data, process improvement, reliability, user habits, governance.

Bad lock-in comes from contract traps and proprietary plumbing around a commodity capability.

One compounds productivity.

The other compounds resentment.

There is a financial test for the difference.

If the incumbent raised price materially tomorrow, would the customer stay because the product had become more valuable inside the organization, or because leaving had become too painful to contemplate?

Those can look identical in retention statistics for years.

They are not the same business.

An executive buyer should care because today's procurement decision helps determine which kind of relationship is being created. A system that improves as it accumulates company-specific learning may deserve commitment. A system whose main defense is the cost of extracting your own work from it deserves a different contract.

**Keep Humans at the Liability Boundary**

As systems become more autonomous, organizations need clarity about where machine action ends and accountable human authority begins.

Not every task needs approval. Requiring a human click on every low-risk action defeats much of the point.

But high-consequence workflows should define thresholds.

When can the system act?

When must it ask?

When must it refuse?

Who reviews exceptions?

Who can undo an action?

What evidence is logged?

How quickly can the system be disabled?

The practical design problem is not “human in the loop” versus “full autonomy.”

It is placing human responsibility at the right liability boundary.

That boundary should move as evidence improves.

An agent that begins by drafting a customer response may later be allowed to send responses below a defined risk threshold. A system that initially recommends a refund may eventually issue small refunds automatically. A coding agent may begin with pull requests and later receive authority over low-risk maintenance changes. Autonomy does not need to arrive as a philosophical choice made once. It can be earned through observed performance.

The important thing is that authority expands deliberately.

A company should know which actions an AI system can take, the maximum consequence of a mistaken action, how the action can be reversed, and which person or function owns the resulting risk. “The model did it” is not an operating model.

Neither is “a human reviewed it” if the human is presented with hundreds of machine-generated decisions at a pace that makes meaningful review impossible.

Human oversight has capacity limits too.

**Measure the Right Unit**

Executives should avoid measuring AI by tokens consumed, seats activated, or pilots launched.

Those are input metrics.

Measure the business unit that matters.

Cost per resolved support case.

Time from lead to proposal.

Hours per audit.

Yield per engineer.

Defect rate per release.

Revenue per sales representative.

Research hypotheses tested per month.

Downtime per machine.

Time from clinical encounter to completed documentation.

The best AI implementation may use fewer tokens than the flashy one.

Efficiency is the point.

The measure also needs a denominator that survives growth.

A company can report that its AI system saves a million employee hours while hiring enough reviewers, security staff, data engineers, and integration specialists to consume much of the apparent benefit. That does not mean the deployment failed. It means the organization should measure the whole production function rather than one automated step.

The best comparison is often against the next-best way of doing the work, not against doing nothing.

Could ordinary software have solved the problem? Could a process change have removed the task entirely? Could a smaller model do it locally? Could the company buy the outcome from a specialist rather than build the capability itself?

AI has a habit of making technically interesting solutions arrive before economically boring questions.

The boring questions are usually where the return lives.

**Run a Portability Drill**

Most companies discover whether they are portable at the worst possible moment: when a vendor changes price, suffers an outage, alters terms, falls behind technically, or becomes unacceptable to a regulator.

A better practice is to test the option before it is needed.

Once or twice a year, take one meaningful AI workflow and attempt to move it.

Not on a slide.

In code.

Run the evaluation set against another provider or an internally hosted model. Measure the quality gap. Measure the engineering work. Identify which prompts, fine-tunes, tools, data connectors, safety layers, and logging systems are genuinely portable and which are secretly vendor-specific.

Then price the difference.

You may discover that switching would save little and create substantial operational risk. Fine. That means the incumbent is earning its position.

You may discover that ninety percent of the workload can move in days. That is valuable negotiating information.

Portability is not a religious commitment to multi-vendor complexity.

It is an audited option.

An option that has never been exercised in a test environment may not exist when you need it.

This discipline also changes internal architecture. Teams become less likely to bury business logic inside model-specific prompts. Evaluation becomes a first-class asset. Data contracts improve. Procurement gains evidence rather than intuition.

In a rapidly deflating market, the ability to switch is not merely technical hygiene.

It is purchasing power.

**Treat the Pilot as a Capital-Allocation Decision**

The low cost of starting an AI pilot can hide the high cost of maintaining one.

The first prototype may take a week. Production requires permissions, monitoring, evaluations, incident handling, integration maintenance, security review, vendor management, user training, and somebody who still understands the workflow after the enthusiastic builder moves to another project.

Multiply that across fifty experiments and the company can recreate the very software sprawl it hoped AI would simplify.

This is where executives need portfolio discipline.

Experiments should be cheap and numerous. Production systems should earn permanence.

A pilot that works should graduate into an owner, a budget, an evaluation regime, and an operating metric. A pilot that does not work should be easy to kill. The dangerous middle is the zombie deployment: useful enough that nobody deletes it, unimportant enough that nobody truly owns it, and connected to enough systems that its eventual failure matters.

Capital allocation is not only about dollars invested in hardware or licenses. Management attention is capital too.

AI makes it possible to start more things than an organization can responsibly operate.

The executive advantage comes from being willing to stop some of them.

**The Executive's Five Rules**

If the entire chapter must fit on one card, use these:

1. **Start with workflows.** Buy intelligence only where work has measurable value.
2. **Own the evaluation layer.** Never outsource the definition of “good enough.”
3. **Design for portability.** Preserve the ability to route and switch as models change.
4. **Capture deflation.** Negotiate so falling costs flow through to you.
5. **Measure outcomes.** Time saved, errors avoided, revenue gained, risk reduced.

The executive's advantage in the intelligence bubble is that unlike the investor, the executive does not need to predict which model company wins.

The executive can make them compete.
