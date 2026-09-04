# Context Is the New Supply Chain

A factory can have excellent machines and still stop because one small part did not arrive.

Modern production taught companies to think about inputs as a system. Raw materials have sources. Components have lead times. Suppliers have quality histories. Ports create delay. Warehouses create buffers. A cheap part can become an expensive dependency if no substitute exists. A supplier that looks efficient in normal conditions can become the reason the whole line stops under stress.

Agentic work has an equivalent supply chain.

The inputs are context.

A model may be extraordinarily capable in the abstract and nearly useless inside an organization if it cannot obtain the right facts, instructions, definitions, history, tools, and state at the moment they matter.

This is why the question “Which model should we use?” often arrives too early.

The model is one supplier of intelligence.

The workflow also depends on where the customer records live, which document is authoritative, whether the policy is current, how the codebase is structured, what the user means by a local term, which decisions were made last quarter, what permissions exist, and whether the system can see the consequence of its last action.

Intelligence without context is generic capability.

Leverage begins when capability is connected to the local world.

The connection can be deceptively difficult.

Organizations rarely have one truth.

They have a contract in the document system, a customer note in the CRM, a pricing exception in email, a policy in the wiki, a product limitation remembered by support, a spreadsheet maintained by finance, a code comment that contradicts the documentation, and a meeting in which somebody decided what everyone would actually do.

A human employee learns to navigate this mess socially.

Ask Maria; she knows why the number is strange.

Use the spreadsheet labeled final-v7, not final-v8.

The handbook says thirty days, but legal changed the rule for Europe.

The customer record is wrong because the account merged last year.

That feature exists, but sales should not promise it before October.

This knowledge is ugly.

It is also part of the company’s operating system.

Agents make the ugliness visible because software needs some way to decide which context deserves authority.

The immediate temptation is retrieval.

Connect every repository of information. Index everything. Let the agent search across the company. The result can be powerful. It can also turn an information problem into an authority problem.

Finding a document is not the same thing as knowing whether the document should govern the action.

A policy written in 2023 may rank above a meeting note from last week legally, while the meeting note reflects the actual operational change that has not yet been incorporated into the policy. A salesperson’s account note may contain useful local context and a mistaken assumption. A technical design document may describe intended architecture while the code reveals what is actually running.

The agent needs provenance.

Where did this fact come from?

When was it last confirmed?

What class of source is it?

What should happen when two sources disagree?

These are supply-chain questions.

A manufacturer does not treat every supplier as interchangeable merely because each can deliver something shaped like the component. It qualifies suppliers. It knows which components are safety critical. It tests incoming materials. It may dual-source important parts. It carries inventory where interruption is expensive.

Context needs similar discrimination.

Some context is commodity.

Public definitions. Common reference material. Stable technical documentation. Information that can be reacquired cheaply if lost.

Some context is critical.

The customer’s contractual obligation. The approved risk limit. The current production configuration. The source of a public claim. The latest board decision. The credential policy. The data residency requirement.

The workflow should treat these classes differently.

Critical context deserves stronger provenance, fresher verification, and clearer ownership.

This is the beginning of context engineering as an operational discipline.

The phrase may sound like a fashionable replacement for prompt engineering. It should mean something more serious.

Prompt engineering focuses on what the user says to the model now.

Context engineering focuses on what the system makes available to the model before and during action.

The difference is the difference between giving an employee good instructions for one task and building a workplace in which the employee can reliably find what is needed to do many tasks.

A good context system has selection.

It does not dump the entire company into every interaction.

More context is not automatically better. Large context windows make it technically possible to include enormous amounts of material. The economic problem remains attention inside the model. Irrelevant information can obscure the important fact. Conflicting instructions can create ambiguity. Stale examples can pull behavior toward an old standard. Sensitive material can be exposed unnecessarily.

The goal is sufficient context, not maximum context.

This requires routing.

Which information belongs to this task?

Which belongs to the role?

Which belongs to the user?

Which belongs to the organization generally?

Which should be retrieved only when a condition appears?

Which should never be available unless a human grants temporary access?

These questions mirror the architecture of human organizations.

A lawyer working on a merger sees different information from a marketing contractor. A new employee receives onboarding context. A specialist is called when a rare issue appears. A confidential board discussion does not become common context because one executive happens to know it.

Agentic systems need role-shaped context as much as role-shaped permission.

The two are inseparable.

Knowing can itself be consequential.

An agent cannot accidentally leak a secret it never received.

It cannot make a biased decision based on a sensitive attribute it could not access.

It cannot confuse two customers if the context boundary is scoped correctly.

Data minimization therefore becomes an agency design choice, not merely a compliance requirement.

The principal should ask what the agent needs to know to exercise the authority it has been given.

No more by default.

There is a second supply-chain property: freshness.

A supplier can deliver the right component late and still stop the line.

Context can be correct historically and wrong operationally.

Prices change.

People change roles.

Policies expire.

Models are deprecated.

Customers cancel.

Code deploys.

Inventory moves.

A decision made yesterday changes the meaning of a document written last month.

Agentic systems can act quickly enough that stale context becomes especially dangerous. A human who works slowly may discover a change through conversation before action completes. A machine can complete the old plan before anyone notices that the premise changed.

High-leverage context needs a clock.

When was this last verified?

How long should it remain trusted?

What events invalidate it?

Does the workflow need the latest state or merely a historical snapshot?

A market-research agent can often tolerate a source that is several months old if the claim is structural.

A pricing agent cannot use last quarter’s price table as if time were irrelevant.

A deployment agent needs current repository and environment state at the moment of action.

The tolerance for staleness follows consequence.

This is exactly how supply chains manage perishability. Milk and steel do not share a shelf-life strategy.

Context should not either.

The third property is substitutability.

What happens when the source is unavailable?

Human workers are excellent at quiet substitution.

The CRM is down, so the account manager checks the last email. The internal search fails, so the engineer asks a colleague. The official data feed is late, so finance uses yesterday’s snapshot for a preliminary view and marks the limitation.

Agents need explicit or learned strategies for degraded context.

But substitution can create false confidence.

A weaker source should not silently inherit the authority of the missing source.

If the contract repository is unavailable, a salesperson’s notes may help prepare questions. They should not become the legal truth by convenience.

The system should be able to distinguish “I found an answer” from “I found the authoritative answer.”

That distinction is part of verification capacity.

The fourth property is transformation.

Supply chains do not move only raw material. They refine it.

Context is transformed too.

A transcript becomes a decision summary.

A codebase becomes an architecture map.

A customer history becomes a set of active constraints.

A thousand support tickets become recurring failure modes.

A policy library becomes a role-specific rule set.

These transformations make context cheaper to use.

They also create new opportunities for distortion.

A summary can omit the exception that later matters. An extracted “fact” can turn a tentative statement into certainty. A machine-generated profile can freeze a customer into an old pattern. A taxonomy can force ambiguous cases into categories that make downstream automation easier and reality less accurate.

Derived context needs provenance back to the source.

Otherwise compression creates epistemic debt.

The agent knows the conclusion and loses the evidence that would allow the principal to challenge it.

This is why citations, source links, version identifiers, and decision rationale matter even in internal systems where nobody is worried about academic style.

They preserve the path back through the context supply chain.

The fifth property is inventory.

How much context should be preloaded and maintained versus retrieved on demand?

Human beings carry a large amount of tacit inventory in memory. The experienced employee does not search for every definition. She knows the customer, the architecture, the team, the history, and the exceptions. This makes her fast.

Agents can emulate some of that speed with persistent memory or precomputed project state.

The risk is that stored context becomes stale or overbroad.

Retrieval on demand is fresher and more targeted but can introduce latency, failure, and the possibility that the system fails to search for something it should have known to seek.

Good designs will mix the two.

Stable principles and active project state may be kept close.

Volatile facts are retrieved fresh.

Rare historical detail is fetched when a signal suggests relevance.

Sensitive context is gated.

This is not one universal architecture. It is a portfolio of context according to cost, volatility, consequence, and access.

Once context is treated as infrastructure, another economic fact appears.

The quality of an organization’s agentic leverage may depend less on how much information it owns than on how well that information is organized for use.

Many companies already possess enormous data assets that produce little value because the data is inaccessible, untrusted, poorly defined, duplicated, stale, or disconnected from decisions.

Agents do not magically cure this.

They can sometimes navigate mess better than traditional software, which is valuable. They can search unstructured material, reconcile variations, and reason across documents. But they cannot repeal contradictory reality.

If two departments disagree about what “active customer” means, the agent can identify the disagreement.

It cannot create organizational agreement by statistical force.

The context problem often reveals a governance problem.

Who owns the definition?

Who can change it?

Which system is authoritative?

How are exceptions represented?

When does a decision become policy?

These questions can be deferred while humans compensate socially.

Agents make the cost of deferral measurable because every ambiguity becomes repeated friction or repeated guesswork.

This may be one of the least glamorous and most valuable effects of agent adoption.

Organizations will be forced to clean the places where meaning leaks.

Not all of them will.

Some will build increasingly elaborate agents over incoherent information systems. The models will spend intelligence reconstructing the organization every time a task arrives. They may still produce impressive outputs. The cost will appear as latency, errors, inconsistent decisions, and constant human correction.

Others will invest in context as a shared operating layer.

Canonical sources where canon matters.

Portable project state.

Clear ownership of definitions.

Versioned policy.

Durable decision records.

Access boundaries.

Freshness rules.

Source provenance.

Examples of quality.

Explicit exceptions.

The agents in those organizations may not be smarter.

They will appear smarter because less of their intelligence is spent guessing what the organization means.

This is similar to the difference between two factories with identical machines and different supply chains.

One spends its time expediting missing parts.

The other converts inputs into output.

Agentic leverage is not merely a property of the model.

It is a property of the system around the model.

Context is the material flowing through that system.

When the material is late, contaminated, inaccessible, ambiguous, or trapped with one supplier, the intelligence at the center cannot rescue the economics indefinitely.

The new supply chain is made of meaning.

It still has to arrive.