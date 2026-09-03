# Interlude — The Long Tail Wakes Up

Institutions have always had a shadow.

The shadow is made of work that matters, but not quite enough.

A supplier contract that could be improved by two percent if somebody had three hours to negotiate it.

A warehouse exception that deserves ten minutes of thought but arrives in a queue with five hundred others.

A complicated insurance claim that is not mysterious enough to justify a specialist and not simple enough to glide through the normal path.

A discrepancy in a purchase order. A late shipment from a small vendor. A renewal that might be better priced. A customer who deserves a more careful answer than the economics of the call center permit.

These are not necessarily failures of intelligence.

They are failures of attention economics.

Every institution has an economic floor of attention: a threshold below which the likely value of thinking harder is less than the cost of assigning a human being to think.

Below that floor, organizations standardize.

They batch.

They defer.

They use boilerplate.

They create queues.

They tolerate small inefficiencies because removing the inefficiency would cost more than the inefficiency itself.

This is one of the reasons large organizations often appear irrational from the outside. A customer sees an obvious $40 mistake and wonders why a billion-dollar company will not spend an hour fixing it. The company, facing a million such cases, has learned that an hour is not free.

The same logic shapes procurement.

It shapes logistics.

It shapes insurance.

It shapes government benefits, healthcare administration, banking operations, compliance, maintenance, collections, and almost every system where the number of decisions is larger than the number of people available to make them carefully.

The arrival of agents matters here for a reason more interesting than labor substitution.

Agents can lower the economic floor of attention.

They can make it worthwhile to act on cases that were previously not worth assigning to anyone.

That changes the coverage of an institution.

And coverage changes behavior.

## The suppliers nobody had time to negotiate with

Walmart encountered this problem years before the current wave of large-language-model agents.

The company had more than 100,000 suppliers. Human procurement teams could negotiate intensively with the most important ones, but not with every supplier in the tail. A meaningful fraction of supplier agreements therefore used standard terms that were not individually negotiated, not because individualized negotiation had no value, but because the labor required to capture that value would cost too much.[^36]

This is the kind of problem that disappears in a spreadsheet.

Suppose a buyer can improve the economics of a small supplier agreement by $2,000, but doing so requires four hours of a skilled procurement professional whose time is already committed to negotiations worth millions.

The opportunity is real.

It is also economically invisible.

Walmart International tested automated negotiation software from Pactum against precisely this tail. In the initial Canadian pilot, the system negotiated directly with suppliers inside constraints defined by Walmart's procurement organization. The published case later reported that the system expanded to additional countries and closed agreements with a substantial majority of suppliers that engaged with it, producing savings while also negotiating dimensions such as payment terms.[^36]

The important fact is not that a chatbot could bargain.

The important fact is that an organization could suddenly bargain where bargaining had previously been too expensive to justify.

The technology created a new addressable market inside the company itself.

This is what agents do when they become cheap enough.

They do not merely replace an existing worker at an existing desk.

They create desks where no desk existed.

The procurement team had always known that the tail contained value. It simply could not afford to send humans after all of it.

Automation changed the denominator.

Once the marginal cost of another negotiation falls far enough, the organization can revisit commercial terms across a supplier population rather than only at the top of it.

That has second-order effects.

Suppliers that once received generic terms can receive individualized offers.

Small differences in delivery schedule, payment timing, volume commitments, termination rights, rebates, or growth opportunities can become negotiable variables rather than fixed policy.

The organization becomes more granular.

Granularity sounds humane because individual cases receive more attention.

It can also make power more precise.

A giant buyer negotiating with every small supplier individually is not automatically fairer than a giant buyer offering everyone the same standard contract. Personalized negotiation can find mutually useful trades. It can also discover exactly how much pressure each counterparty will tolerate.

The long tail waking up is not inherently benevolent.

It is an increase in institutional resolution.

A higher-resolution institution can see more.

It can also optimize more.

## The warehouse that decides continuously

Procurement negotiations are episodic. Logistics is relentless.

A fulfillment network is a river of small decisions: which work to release, where to allocate labor, which order to prioritize, how to respond to changing demand, which exception deserves escalation, how to use shared warehouse resources without breaking a service-level promise.

Humans are good at these decisions individually.

The problem is arrival rate.

By the time a manager has gathered enough information to decide, the warehouse may have changed.

OPLOG, a fulfillment company operating shared infrastructure for multiple brands and marketplaces, described this problem as its operations grew. Millions of transactions flowed through its systems while important resource-allocation decisions could take hours. In 2025 the company began building a production system of specialized AI agents on AWS, with the first production agent going live that August.[^37]

The architecture is worth noticing.

Not one omniscient warehouse brain.

Specialized agents handling operational domains, communicating and coordinating, with infrastructure storing decision histories and operational data.[^37]

This is the swarm thesis arriving in work clothes.

AWS's case study says the system makes thousands of intelligent decisions per day and reports large improvements in decision speed, resource utilization, operating cost, service performance, and the amount of operation one management team can supervise.[^37]

Those metrics are company-and-vendor reported. They should not be mistaken for an independent randomized trial.

But the existence of the production system matters even before one accepts every percentage.

A warehouse is a hostile environment for vague intelligence.

Boxes must be somewhere.

Labor has finite hours.

Robots occupy physical lanes.

Orders have deadlines.

Customers notice when the wrong object arrives.

The world grades the system.

That makes logistics an unusually revealing habitat for agents.

In a chat window, a weak answer can be cosmetically repaired.

In fulfillment, a bad decision eventually becomes a late order, an idle worker, a congested station, a violated service level, or a truck leaving with air where inventory should have been.

The feedback is physical.

And the economic effect is not simply "faster decisions."

It is continuous attention.

A human manager allocates attention in chunks. The manager walks the floor, opens the dashboard, joins the meeting, handles the biggest fire, answers the urgent message.

A population of agents can inspect the operational surface continuously.

That changes which deviations become visible.

A five-percent inefficiency repeated once may not deserve a meeting.

A five-percent inefficiency repeated ten thousand times is a business model.

Agents are machines for discovering repetition.

This is why the long tail and the swarm are the same story.

A population of agents can make millions of small acts of attention economically feasible.

The institution begins to behave as though it has eyes everywhere.

Not perfect eyes.

Not wise eyes.

But cheap, persistent ones.

## Eight hundred small workers

GE Appliances offers another signal of the scale transition.

In April 2026 the company said it had deployed more than 800 AI agents across manufacturing, logistics, and supply-chain operations.[^38]

The number is company-reported, and a count of agents says nothing by itself about their autonomy or value. One organization may call a narrow workflow an agent where another would call it a script with a model in the middle.

But eight hundred is still institutionally interesting.

At that scale, the useful questions change.

You stop asking only whether the model is accurate.

You ask which agents are active.

Who owns them.

Which data they can see.

Which systems they can change.

Which ones duplicate one another.

How they are upgraded.

How failures correlate.

Whether one agent's output becomes another agent's evidence.

How many can act at once.

What happens to old versions.

Whether the organization even knows its synthetic headcount.

This is the transition from application management to population management.

A company with eight hundred agents does not necessarily have eight hundred autonomous employees.

It does have eight hundred opportunities for software to carry context, policy, judgment, or delegated action into a workflow.

That creates an administrative problem that looks surprisingly biological.

Inventory becomes demography.

Version control becomes lineage management.

Access control becomes jurisdiction.

Monitoring becomes epidemiology.

Retirement becomes extinction with dependencies.

The metaphor earns its keep only if it predicts operational questions that ordinary software language makes easy to overlook.

At hundreds or thousands of agents, correlated behavior becomes one of those questions.

If every agent is upgraded to the same model on Tuesday morning, the company has not merely deployed a software update.

It has changed the cognitive substrate of a population.

If the new model interprets a policy differently, the change can appear simultaneously across procurement, manufacturing, logistics, and support.

The unit of risk is no longer one application.

It is a cohort.

## The claim that costs too much to think about

Insurance reveals another side of the same mechanism because attention is tied to due process.

A claim is not merely an operational object.

It is a request for an institution to decide what happened, what a contract covers, what evidence matters, and who should receive money.

That makes automation consequential even when it remains advisory.

In May 2026 Aetna announced the second generation of its Claims Assist Manager, describing it as an AI-powered agentic claims advisor platform. The company said "adjuster AI agents" reduced processing time by more than 20 percent on complex claims that require manual review.[^39]

Again, this is a company-reported performance figure, not an independent experimental result.

The architecture matters more than the marketing adjective.

The agents are described as assisting adjusters with claims that have already crossed the threshold into complexity.

That is a different habitat from customer-service chat.

The object under review can affect payment.

The evidence may be incomplete.

Rules interact.

Errors can harm a provider, insurer, patient, or policyholder.

And yet the institution faces the same attention economics as Walmart's procurement group or OPLOG's warehouse.

A complex case consumes expensive expertise.

Reduce the cost of assembling evidence, checking policy, finding anomalies, or preparing a recommendation and the institution can devote more effective attention to each case—or process more cases at the same staffing level.

This is where the long-tail argument becomes morally ambiguous.

Lowering the cost of review can improve consistency and speed.

It can also make it economically attractive to scrutinize claims that a human organization might once have paid because deeper investigation cost more than the disputed amount.

An insurer with cheaper cognition can become more generous or more exacting.

A tax authority with cheaper cognition can discover overlooked refunds or overlooked liabilities.

A benefits agency can identify eligible people who never completed the right form or investigate anomalies that previously sat below the enforcement threshold.

A bank can waive small fees more intelligently or optimize collections against every struggling borrower.

Cheaper attention is not a value.

It is a capability.

The institution supplies the value.

## The administrative dark matter

Economists often describe technologies in terms of productivity: more output per unit of input.

That is necessary but incomplete for agents.

There is another effect: previously uneconomic output becomes economic.

Consider the work organizations do not currently perform.

The unanswered supplier email.

The contract clause nobody reopens.

The maintenance warning that is logged but never investigated.

The $70 billing discrepancy that no employee can justify spending forty minutes on.

The customer account that would benefit from a custom retention offer but is too small to reach the high-touch team.

The permit application that could be explained more clearly if a clerk had time.

The scientific dataset that might contain a useful anomaly if somebody explored it.

The small-business loan application whose economics cannot support an hour of manual underwriting.

This is administrative dark matter.

It exists because human organizations are sparse.

There are never enough experts to inspect every edge.

The swarm changes that sparsity.

The largest near-term economic effect of agents may therefore be neither mass unemployment nor universal robotic abundance.

It may be an explosion in the number of decisions institutions find worthwhile to make.

Some of those decisions will replace human work.

Many will be new work.

That distinction matters for forecasting.

If a company deploys one thousand agents and lays off nobody, it would be wrong to conclude that nothing changed.

The agents may be negotiating with suppliers who were never negotiated with, watching systems nobody watched continuously, reconciling records nobody reconciled, checking policy on every transaction rather than a sample, or generating analysis for cases that previously received only a default answer.

The counterfactual worker never existed.

The counterfactual action did not happen.

This is why employment statistics alone can miss the early swarm.

The first population boom may occur in the institutional negative space.

## When everything becomes worth optimizing

There is a danger hidden inside this abundance of attention.

Human scarcity creates accidental mercy.

A bureaucracy cannot enforce every rule.

A retailer cannot personalize every price.

An insurer cannot investigate every inconsistency.

A manager cannot measure every minute.

A school cannot optimize every student interaction.

A government cannot inspect every transaction.

Some of what we call discretion is wisdom.

Some is simply lack of capacity.

Agents reduce that lack.

This means institutions will need to decide deliberately where not to optimize.

A mature agent policy may include minimum materiality thresholds even when the machine could economically pursue smaller amounts.

It may preserve random audits instead of universal surveillance.

It may forbid personalized bargaining on certain essential goods even when the seller's agent can estimate each buyer's willingness to pay.

It may decline to score every employee action simply because instrumentation makes scoring cheap.

It may preserve appeal paths whose cost exceeds the value of the disputed transaction because legitimacy requires the option to contest power.

The old world often relied on expensive cognition as an informal brake.

The new world will need explicit brakes.

This is the institutional consequence of the long tail waking up.

When attention becomes cheap, neglect stops being the default.

That sounds like progress until one asks what neglect was protecting.

## The new frontier is coverage

Walmart's supplier negotiations, OPLOG's warehouse orchestration, GE Appliances' hundreds of operational agents, and Aetna's claims advisors are very different systems.[^36][^37][^38][^39]

They should not be collapsed into one maturity level.

Walmart's procurement system predates the current LLM-agent boom. GE's deployment count is a company-defined population. OPLOG's performance metrics come through a cloud-provider customer case. Aetna's claims improvement is self-reported.

That source discipline matters.

But across the cases, a pattern appears.

The valuable frontier is not only making an existing decision faster.

It is extending competent attention across a larger surface.

More suppliers can be negotiated with.

More operational states can be watched.

More workflows can have specialized software actors inside them.

More complicated administrative cases can receive structured assistance.

This is what a swarm looks like before it looks dramatic.

Not a million robots marching in formation.

A million decisions that suddenly become worth making.

The institution acquires finer resolution.

And once an institution can see the long tail, the political question is unavoidable:

**What will it choose to do with all that attention?**
