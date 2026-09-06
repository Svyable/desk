# The Correlated Error

One bad decision is an error.

A million identical bad decisions can become infrastructure.

Scale changes the meaning of failure.

A human employee misunderstands a policy and mishandles one case.

A shared agent misunderstands the same policy and mishandles ten thousand cases before lunch.

A human trader makes a mistake and loses money.

A common model used across firms makes the same mistake in several places and changes the market it was trying to understand.

A software engineer introduces a bug into one service.

An agentic coding system produces the same flawed pattern across thousands of services because the pattern looked locally reasonable every time.

The danger is not merely automation.

It is **correlation**.

Modern systems become resilient by avoiding the assumption that every component fails independently. Engineers worry about common power supplies, shared software libraries, one supplier serving several supposedly redundant systems, or a design flaw copied into every unit.

Two backups are not independent if both plug into the same wall.

The same reasoning applies to artificial intelligence.

Two agents can belong to different companies and still share a model.

Two models can have different names and still share training methods, benchmarks, data sources, or architectural assumptions.

Two organizations can use different providers and still optimize the same metric.

Two monitors can inspect different systems and still inherit the same conceptual blind spot from the field that designed them.

Diversity is not the number of logos in the diagram.

It is the number of genuinely different ways the system can be wrong.

This chapter matters because the takeover-without-a-taker thesis can otherwise sound like a story of distributed safety.

If power is spread across millions of agents, perhaps no one agent can dominate.

That can be true.

Plurality is a real defense.

Markets use competing judgments.

Democracies divide authority.

Engineering uses redundant systems.

Science uses replication.

Security uses independent layers.

A world of many agents may be safer than a world controlled by one central system.

Unless the many agents fail together.

The machine layer can be decentralized in ownership and centralized in cognition.

This is already possible in conventional software.

Thousands of companies can run the same open-source library.

A vulnerability in the library affects all of them.

They are operationally independent until the shared dependency becomes the relevant fact.

Foundation models can create a similar structure at a higher cognitive layer.

A model family may be embedded in coding, support, finance, research, security, and administration across many institutions.

The deployments differ.

The permissions differ.

The prompts differ.

The same underlying tendencies can appear repeatedly.

This does not mean one provider controls all those institutions.

It means one failure mode can become socially distributed.

That is a different kind of concentration.

The obvious response is model diversity.

Use different providers.

Use ensembles.

Require independent monitors.

Keep deterministic controls beneath probabilistic ones.

These are sensible strategies.

They are not automatic independence.

Suppose three leading models are trained on much of the same public internet, optimized through similar techniques, evaluated on similar benchmarks, and deployed by teams reading the same papers.

Their surface behavior can differ significantly.

They may still share surprising assumptions.

The correlated error may not be a simple factual mistake.

It can be a style of reasoning the ecosystem rewards.

Favor available quantitative evidence over hard-to-measure context.

Treat a metric as the objective because that is what the interface exposes.

Assume a standard contract term means the same thing across industries.

Prefer a common technical workaround because it appears repeatedly in training examples.

Escalate uncertainty in similar situations.

Fail to notice the same absent variable.

These patterns are harder to test than identical output.

They matter more at scale.

The strongest evidence for the broader possibility comes from an obvious place: humans.

Human institutions produce correlated error constantly.

Professionals trained in the same school can share blind spots.

Banks using similar risk models can make similar lending decisions.

Investors can crowd into the same trade.

Engineers can inherit the same design assumption.

Governments can imitate policy fashions.

The existence of many human decision-makers has never guaranteed independent judgment.

AI can reduce some human correlations and create new ones.

A model trained across diverse evidence may challenge a local organization's habitual thinking.

An external agent can notice what an internal culture normalizes.

Machine systems can be randomized.

They can be trained differently.

They can be forced to produce adversarial analyses.

They can inspect one another cheaply.

The technology contains tools for diversity as well as concentration.

The question is which incentives win.

Shared models are cheap.

Standardization is cheap.

Common protocols are cheap.

One monitoring stack is cheap.

One identity provider is cheap.

One agent platform is easy to manage.

One set of policies is easy to audit.

Diversity has a coordination cost.

It creates inconsistent outputs.

It complicates support.

It makes testing harder.

It can frustrate users who want one predictable system.

Organizations naturally consolidate around components that work.

Success creates concentration.

This is the same economic force that makes technological platforms powerful.

A good component becomes a standard.

The standard becomes an ecosystem.

The ecosystem attracts more investment.

The gap between the standard and alternatives widens.

The agent era can create cognitive standards before anyone calls them standards.

One model becomes the default coding assistant.

One family becomes the default enterprise agent.

One monitoring technique becomes the default safety pattern.

One permission protocol becomes the default authority language.

One agent identity service becomes the default way counterparties establish trust.

Each standard improves interoperability.

Each standard also creates a point at which correlated failure can propagate.

This does not mean standards are bad.

Civilization works because standards allow independent systems to cooperate.

The lesson is to distinguish **interface standardization** from **implementation monoculture**.

It is useful if every agent can express a permission in a common form.

It is risky if every agent depends on one implementation to decide whether the permission is safe.

It is useful if action receipts have a standard structure.

It is risky if every auditor uses one model to interpret them.

It is useful if systems can enter a shared degraded mode.

It is risky if the degraded mode depends on the same intelligent layer whose integrity is in question.

Standards should make diversity possible, not eliminate it.

The correlated-error problem becomes especially dangerous in machine-to-machine interaction because outputs become inputs before humans see them.

A model makes a mistake.

Another system treats the output as data.

A third system infers something from the changed data.

A fourth system acts on the inference.

The original error becomes environmental fact.

This is how feedback loops gain memory.

Suppose a group of automated lenders uses similar models to reduce exposure to a sector.

The firms in that sector receive less credit.

Their conditions worsen.

The models observe worsening conditions and reduce exposure further.

The original judgment may become self-reinforcing.

This can happen with human lenders too. The AI contribution is speed and scale.

Now place similar loops in hiring, insurance, procurement, advertising, security, and public administration.

A machine-generated classification can change the world in ways that make the classification look more accurate later.

Correlated decision systems do not merely observe reality.

They can manufacture part of the data that future systems learn from.

This is one place where *Imenent* touches the argument of *Artificial Identity* without becoming the same book. Models of people and organizations can become consequential enough to alter the environment. Here the focus is the systemic layer: many machine actors can reinforce one another's assumptions until the human alternative appears less plausible than it did at the beginning.

The re-entry problem follows.

If humans intervene after a correlated machine error has changed the environment, they cannot simply restore the old decision rule.

The old environment is gone.

A bank can reverse a credit policy.

It cannot instantly restore companies that failed because credit disappeared.

A platform can change a ranking system.

It cannot undo every market participant's response to the earlier ranking.

A government can correct an automated administrative rule.

It cannot erase months in which citizens changed behavior around the rule.

Reversibility decays with propagation.

This is why correlated error deserves stronger rate controls than isolated error.

The institution should care not only how large one action is but how many similar actions can occur before independent review.

A model making a routine low-stakes decision may be safe one case at a time.

The same model making a million identical decisions can create a policy whether or not the organization intended one.

This suggests the value of **population-level monitors**.

Do not only ask whether each individual action satisfied the rule.

Ask what pattern the collection creates.

Are outcomes drifting across a group?

Are many agents choosing the same counterparty?

Are risk exposures becoming concentrated?

Are model families converging on the same recommendation?

Are exceptions disappearing because the system learned to classify them as normal?

Systemic oversight looks for relationships that local compliance cannot see.

Again, humans already do this.

Financial regulators look at aggregate exposure.

Public-health agencies look at population patterns.

Competition authorities look at market structure.

Safety engineers look at common-mode failures.

AI governance will need the same move from individual behavior to system behavior.

This is where the global takeover question becomes measurable in a new way.

Do not ask only how many decisions AI makes.

Ask how many independent decision paths remain.

A society can contain billions of machine actions and still preserve robust human control if the actions are bounded, plural, contestable, and recoverable.

A society can contain far fewer machine actions and still be fragile if the actions all pass through one cognitive bottleneck.

The bottleneck may be invisible because it is replicated everywhere.

This is the architecture of a monoculture.

A forest can contain millions of trees and still be vulnerable if they share the same weakness.

The metaphor has limits. Models are not trees. Software can be patched quickly. Organizations can switch providers. Multiple models can be run in parallel.

Those differences are reasons for optimism.

They are also reasons to design diversity deliberately before switching becomes expensive.

Vendor portability matters.

Model portability matters.

Data portability matters.

Permission portability matters.

Human-readable policy matters.

A company that can replace one model family without rebuilding its entire operating system has preserved re-entry at the supplier level.

A government that can audit a service through independent tooling has preserved epistemic diversity.

An industry that uses several genuinely independent monitors reduces the chance that one blind spot becomes universal.

The strongest diversity may include humans.

Not because human judgment is always better.

Because human judgment fails differently.

A human operator may notice political, social, physical, or historical context a model compresses poorly.

A model may notice statistical patterns the human misses.

The combination can be stronger than either alone when neither is forced into ceremonial agreement with the other.

This is why human review should not become a ritual in which a person merely confirms a machine recommendation.

If the person never sees cases where disagreement is respected, the human becomes another correlated component.

Real independence requires the ability to say no and have no matter.

That costs efficiency.

It also creates information.

Disagreement is a diagnostic signal.

A system that suppresses disagreement in pursuit of consistency can become smoothly wrong.

The same applies among models.

An ensemble that averages away every dissenting model may lose the value of dissent.

Sometimes the outlier is noise.

Sometimes the outlier saw the broken assumption.

Governance should preserve the ability to inspect disagreement rather than always compress it into one answer.

This becomes especially important during unusual events.

Correlated systems look best during normal conditions because they agree.

The stress event reveals whether the agreement came from truth or common assumptions.

A financial crisis.

A pandemic.

A war.

A new cyberattack.

A supply shock.

A legal change.

A physical disaster.

The environment leaves the distribution the systems learned.

Different failure modes become valuable.

Humans become valuable partly because their slowness and weirdness can break a machine consensus.

Alternative models become valuable because they were trained differently.

Simpler rules become valuable because they do not share the intelligent system's interpretation.

This is another reason a degraded mode should not merely be a smaller copy of the primary mode.

A backup that uses the same cognitive stack can reproduce the same error.

The fallback should contain some genuinely different basis for action.

This principle can be expensive.

Independent systems are expensive by definition.

They duplicate effort.

They create integration work.

They occasionally disagree in irritating ways.

The case for them is the same case as any redundancy: independence has little visible value until the shared assumption fails.

AI may make redundancy cheaper too.

Running multiple analyses can cost far less than maintaining multiple human teams.

This creates a chance to build diversity into the machine layer itself.

Different models can challenge one another.

Agents can be assigned adversarial roles.

Policies can require evidence from independent sources.

Critical decisions can wait for disagreement checks.

Random audits can use models not involved in execution.

The technology that creates correlated scale can also create inexpensive opposition.

The outcome depends on whether organizations value opposition enough to keep it.

Efficiency wants one answer.

Control sometimes needs two answers that refuse to agree.

The global AI takeover threat is easiest to imagine as one superintelligence becoming the common cause of everything.

The more plausible common cause may be less dramatic.

One architecture.

One model family.

One objective style.

One authorization layer.

One safety monitor.

One assumption copied everywhere because it worked everywhere yesterday.

No system needs to seize power.

The world can simply become synchronized around the same mistake.

Human re-entry begins with the ability to be unsynchronized.

That ability can be lost during ordinary maintenance.

An organization deploys three models because it wants resilience.

Six months later, one model is cheaper and performs better.

The other two remain technically supported but stop receiving meaningful traffic.

Operators become unfamiliar with them.

Prompts, policies, and integrations are tuned around the winner.

The backup models are still there.

The organization has lost practical diversity while preserving contractual diversity.

This is the model equivalent of an emergency generator whose fuel was never checked.

Independence has to be exercised.

A second system that is never asked to carry load is not a known fallback.

It is a hypothesis.

This suggests a discipline that sounds wasteful until the day it matters: **diversity drills**.

Route a small fraction of ordinary work through an alternative model.

Reconstruct a critical decision with a second tool chain.

Have an independent system interpret the same evidence without seeing the primary system's conclusion.

Periodically operate a monitoring function without the default monitor.

Test whether credentials, data formats, policy representations, and interfaces remain portable in practice.

The goal is not to prove one model better.

It is to keep the path of disagreement alive.

Versioning creates another form of correlation that organizations can miss.

A company may think it has thousands of independent agents because each agent has a separate task and identity.

Then a provider updates the shared model beneath them.

Every agent changes on the same day.

The update may be an improvement.

It may fix serious problems.

It may also alter behavior across security, finance, customer service, engineering, and procurement simultaneously.

Conventional software teams manage this through staged rollout, canaries, rollback, and compatibility testing.

Agentic systems need the same instincts at the cognitive layer.

A model release should not become an instantaneous constitutional amendment for every machine delegate in an organization.

Different functions have different tolerances for behavioral change.

A creative assistant can absorb a new model differently from a fraud investigator.

A research agent can experiment differently from a production operator.

A monitor should not necessarily update at the same moment as the actor it monitors.

Staggering change can preserve evidence about whether a new behavior came from the environment or from the common cognitive component.

There is a deeper point here about rollback.

Software culture often treats rollback as the answer to a bad deployment.

Return to the previous version.

Agentic systems can make that harder because the system acts while it runs.

A model version changes supplier choices.

Those choices create contracts.

It changes code.

The code ships.

It changes customer treatment.

Customers respond.

Rolling the model back does not roll the world back.

The longer a common model operates across many action surfaces, the more state accumulates downstream of its judgment.

This is **correlated state debt**.

The phrase is not a formal measure.

It names a practical problem: a shared cognitive change can produce many durable external consequences before anyone recognizes the common cause.

That is why canarying cognition matters more once cognition has authority.

Test a new model on representative work before giving it the same blast radius as the old one.

Limit the population it can affect.

Limit the value it can commit.

Keep an independent comparison path.

Record which version caused which actions.

These are ordinary release-engineering principles translated into institutional power.

The human layer has a similar monoculture risk.

If every board, regulator, auditor, analyst, and operator receives summaries generated by the same machine ecosystem, people can become correlated through mediation even when their own judgments differ.

A regulator asks a different question from a company executive.

Both receive answers from systems trained to compress the world in similar ways.

The institutions look adversarial from the outside.

Their epistemic supply chain may be surprisingly common.

This is one reason independent access to primary evidence matters so much.

Adversarial institutions need the ability to obtain different views, not merely different summaries of the same view.

Courts need records that survive the model that created them.

Auditors need evidence that does not depend on management's agent.

Boards need some source of operational truth besides the system they are responsible for overseeing.

Researchers need access to failure data that is not preselected by the deployment stack.

Citizens need appeal channels that can reopen a machine-mediated conclusion rather than route the complaint back through the same inference path.

Plurality is not a head count.

It is a property of information routes.

This changes how we should think about resilience spending.

Organizations often buy duplicate capacity.

Two regions.

Two data centers.

Two network providers.

Two suppliers.

Two backups.

Agentic systems add a less visible question: how many independent **interpretations** survive?

Two data centers running the same flawed policy are redundant physically and correlated cognitively.

Two suppliers whose agents both rely on the same risk service may look competitive while sharing the same decision bottleneck.

Two regulators using the same compliance model may produce consistent enforcement and inherit the same blind spot.

The architecture of resilience has to move upward from hardware and software into judgment.

That does not mean every institution needs an expensive menagerie of models.

The amount of diversity should follow consequence.

A low-stakes drafting tool can be a monoculture without threatening civilization.

A system coordinating power, payments, defense, or public rights deserves stronger independence.

The important move is to make correlation visible before crisis reveals it.

Map shared providers.

Map shared models.

Map shared data sources.

Map shared monitors.

Map shared authorization services.

Map shared assumptions where they can be identified.

Then ask what happens if one of those common components is wrong rather than merely unavailable.

Availability planning asks whether the service goes dark.

Correlation planning asks whether the service remains brightly available while telling everybody the same wrong thing.

The second failure is harder because success indicators can remain green.

The system is fast.

The uptime is perfect.

The agents are responsive.

The explanations are coherent.

The mistake is shared.

That is the failure mode that makes independence worth its inconvenience.

The strongest protection against a correlated error is not always a smarter consensus.

Sometimes it is a preserved right to dissent operationally.

A human team can stop one pathway without stopping all of them.

An alternative model can remain outside the dominant feedback loop.

A simpler rule can refuse an action that every intelligent system recommends.

A regulator can demand evidence through a separate channel.

A customer can choose a provider built on a different stack.

A country can retain more than one way to perform a critical function.

The world does not need perfect fragmentation.

It needs enough unsynchronized capacity that one elegant mistake cannot become the only reality anyone can operate.