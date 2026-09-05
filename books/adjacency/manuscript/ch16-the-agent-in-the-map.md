# The Agent in the Map

A search engine waits at the edge of action.

It finds something and hands the result back to a person.

An agent does not have to stop there.

It can search, choose, retrieve, compare, call a tool, inspect what happened, search again, and continue until the task changes shape or ends.

This turns adjacency from a retrieval technique into part of a control system.

The agent is not merely looking at the map.

It is moving through it.

Imagine a software agent asked to fix a bug in a repository large enough that no one person understands all of it anymore.

The request names a symptom, not a file. A user says that invoices occasionally duplicate when a retry happens during a network failure. The repository contains services, jobs, schemas, tests, migration scripts, old incident reports, deployment configuration, and several nearly abandoned components that still matter at the worst possible moment.

The agent cannot load the institution into one context window.

It has to travel.

It searches the exact error text. It retrieves code whose descriptions are semantically near the complaint. It follows a dependency graph. It inspects recent commits. It finds an incident from eighteen months earlier that sounds similar but involved a different queue. It runs tests. A failure points toward an idempotency key. That sends the agent toward a payment service. The payment service imports a helper whose name never appeared in the original complaint.

The task is a walk through overlapping spaces.

Text similarity.

Code similarity.

Repository structure.

Execution traces.

Dependency graphs.

Human documentation.

Historical memory.

Permissions.

Time.

The agent's competence depends partly on choosing which map matters at each step.

This is a more useful picture of agentic AI than the common image of a model simply thinking longer.

Longer reasoning helps. Better models help. But action in a real environment requires selective access to information and capability. A capable agent repeatedly constructs a small relevant world from a much larger one, acts inside that small world, then rebuilds the world as new evidence arrives.

Vector retrieval is one of the technologies that makes this construction cheap.

Tool use provides the cleanest example.

Five tools can be listed in a prompt. Five thousand cannot.

A large organization may expose databases, search systems, billing functions, deployment controls, calendar actions, procurement interfaces, compliance checks, internal APIs, research resources, code execution environments, and specialist agents. Even if the language model could technically read every description, doing so on every turn would be expensive and noisy.

One answer is semantic tool retrieval.

Embed the descriptions of the tools. Embed the current need. Retrieve a small neighborhood of plausible capabilities. Let the model reason over that neighborhood.

The action space becomes searchable.

This is a profound shift in software design.

Traditional software exposes capability through explicit menus, fixed routes, API names, and interfaces programmers learned in advance. Agentic software can discover capability through descriptions.

The user says, “Check whether this supplier appears on any restricted-party list.”

The agent does not need the internal function name.

The user says, “Find out why this deployment slowed down after lunch.”

The agent does not need to know which telemetry service owns the relevant trace.

Intention becomes a query into capability space.

That makes extensibility attractive. Add a new tool, describe it well, index it, and the capability can enter an agent's consideration without hard-coding every routing path.

It also creates a failure mode upstream of reasoning.

The right tool may never be retrieved.

A poorly described tool can become effectively nonexistent.

Two tools with similar descriptions can be confused.

A generic tool can become a semantic hub and dominate candidate sets.

A deprecated tool can keep winning because its documentation is clearer than its replacement.

A dangerous tool can sit linguistically close to a harmless one.

The agent may reason impeccably over the wrong menu.

This distinction matters because agent evaluations often collapse the entire loop into one success rate.

Did the system understand the request?

Did it retrieve the right sources?

Did it retrieve the right tools?

Did it choose among them correctly?

Did it supply valid parameters?

Did the environment behave as expected?

Did it verify the outcome?

Did it know when to stop?

A failure in any one of those stages can look like one vague category: the agent was bad.

The remedy depends on the layer.

Better reasoning does not repair a missing tool description.

A better embedding does not repair a tool that is documented incorrectly.

More memory does not repair stale authorization.

A stronger model does not repair an API whose side effects are larger than its name implies.

Agentic systems are compositions of maps, permissions, actions, and evidence.

As autonomy increases, retrieval quality becomes more consequential because the distance between candidate selection and world change shrinks.

A retrieved paragraph becomes an email.

A retrieved code file becomes a patch.

A retrieved supplier becomes a purchase order.

A retrieved calendar action becomes a meeting invitation.

A retrieved policy becomes an input to a benefits decision.

A retrieved account becomes the account an agent tries to modify.

The vector space is now upstream of agency.

This should change how we think about safety.

Many safety conversations focus on model output: what text may be generated, whether a statement is false, whether an instruction is harmful. Agentic systems add another layer. Which capabilities become reachable? Which memories enter context? Which records are treated as candidates? Which actions require stronger authority than mere relevance?

Capability needs geometry and gates.

A low-risk tool such as public documentation search can be broadly retrievable. A tool that sends money should not become executable merely because its description is semantically close to the user's words. Exact permissions, transaction limits, identity checks, explicit intent, and confirmation can sit outside the fuzzy layer.

Similarity nominates.

Authority decides.

Natural language makes that separation easy to blur.

“Can you see whether I owe anything?” may justify a billing lookup. It does not necessarily justify payment.

“Figure out why production failed.” may justify reading logs. It does not automatically justify restarting a service.

“Take care of this customer issue.” may justify investigating the account. It does not automatically justify issuing the maximum refund.

Conversational fluency makes these transitions feel continuous.

Software authority is not continuous.

A mature agent system should preserve the difference between investigating, preparing, proposing, and committing.

That suggests a useful design principle: investigative radius can be wider than committing radius.

A coding agent can search the entire repository and edit freely on a branch while lacking permission to merge.

A purchasing agent can compare every approved supplier while lacking authority to submit the final order.

A finance agent can prepare a transfer while a separate control governs whether funds move.

A legal agent can retrieve privileged material for an authorized lawyer without gaining the ability to send that material to an external party.

The same intelligence can roam farther than it can act.

This is not a concession to weak models.

It is how institutions already separate exploration from commitment.

Draft and send are different buttons.

Quote and purchase are different events.

Prepare and approve are different roles.

Staging and production are different environments.

Natural-language interfaces should not erase these boundaries merely because they make the journey between them feel easy.

The need becomes clearer under uncertainty.

An agent can be very confident that a tool is relevant and only moderately confident that the user has authorized its consequential function. It can understand the technical fix while lacking organizational permission to deploy it. It can retrieve a convincing precedent while missing the one difference that makes the current case exceptional.

Good systems let uncertainty change behavior before uncertainty becomes damage.

When the evidence is weak, retrieve more.

When the action is reversible, experiment cheaply.

When the action is difficult to reverse, raise the threshold.

When the user intent is broad but the side effect is narrow and consequential, ask for a sharper commitment.

Reversibility belongs beside relevance.

Consider an agent that manages cloud infrastructure.

Deleting an unused temporary file and deleting a production database may both be semantically described as cleanup. The action verbs are close. The recovery paths are not.

A useful agent architecture should know something about the reversibility of its tools, not only their semantic purpose.

Can the action be undone automatically?

Does it create an external commitment?

Does it affect another person?

Does it move money?

Does it destroy information?

Does it publish information?

Does it alter a system of record?

These are properties of action, not language.

They should not be inferred from embedding distance alone.

The same principle appears in memory.

Agents increasingly retrieve prior task traces as procedural precedent. A new migration resembles an old migration. A support case resembles an old exception. A coding task resembles an earlier refactor. The system can retrieve what happened before and reuse a successful path.

This can be powerful because organizations are full of repeated structures hidden under different names.

It is also a way to industrialize cargo cults.

An old procedure can be close in description and wrong in context. A database migration that worked when writes were paused may be dangerous under continuous traffic. A legal exception granted in one jurisdiction may be invalid elsewhere. A customer concession may have been approved because of facts omitted from the stored summary.

Procedural memory needs provenance about validity, not only provenance about success.

Worked because the table was append-only.

Approved only for this contract class.

Safe only while feature flag X was disabled.

Allowed by a manager under a temporary exception.

Failed when the dependency graph contained a cycle.

A stored trace without these boundary conditions is a recipe waiting to be misapplied.

This is how machine precedent can harden faster than institutional understanding.

An agent handles one strange case.

The trace enters memory.

A future case looks similar.

The trace is retrieved because it worked before.

The exception begins to look like a norm.

The system has turned history into policy without anyone making the policy decision.

Memory and policy can sit beside each other in context.

They must not be confused.

This makes auditability more important than ordinary application logging.

Traditional logs often tell us which function was called, by whom, and when.

An agent may require a richer reconstruction.

Which documents entered context?

Which memories were retrieved?

Which tools were considered?

Which tool descriptions were visible?

Which candidates were absent?

Which policy gate permitted the action?

Which model and index version shaped the neighborhood?

Which environmental response changed the next step?

Without that history, a bad outcome can be difficult to diagnose.

The final action may look unreasonable while the local reasoning was sensible given a distorted candidate set. Or retrieval may have been excellent and the failure may have occurred later, when the model chose badly among good candidates. Or the model may have chosen correctly and the tool itself may have behaved unexpectedly.

A postmortem has to follow the path through the map.

Suppose a purchasing agent sends an order to the wrong supplier.

Replacing the language model may do nothing if the supplier catalog had stale aliases.

Suppose a coding agent modifies the wrong module.

Retraining the embedding may do nothing if the repository ownership metadata was wrong.

Suppose an assistant exposes a private memory.

The problem may be access control rather than semantic similarity.

Suppose an agent selects the correct refund tool but enters the wrong currency.

The candidate set was not the failure.

A mature evaluation system should attribute error to the layer where it occurred.

This is not only for blame.

It determines what gets improved.

Agent systems can otherwise fall into an expensive superstition: every failure becomes evidence that the foundation model needs to be larger.

Sometimes the model was fine.

The map was bad.

Sometimes the map was fine.

The gate was missing.

Sometimes the gate was fine.

The system never checked what happened afterward.

Verification closes the loop.

An agent should not infer success merely because a tool call returned without an error. The world needs to be inspected.

A file was supposed to be created. Does it exist?

A payment was supposed to be scheduled. Is the amount and recipient correct?

A deployment was supposed to improve latency. Did the metric move?

A meeting was supposed to include three people. Are the attendees actually on the invitation?

A database migration was supposed to preserve row counts. Did it?

This is another place where adjacency alone is insufficient.

Retrieval gets the agent to a plausible action.

Evidence from the environment tells it whether the action achieved the intended state.

The distinction becomes essential for long-running agents because their own actions change the terrain they later search.

An agent edits documentation. That documentation is re-indexed. A future retrieval sees the agent's own words as organizational memory.

An agent creates a ticket. The ticket becomes a source for later summaries.

An agent writes a postmortem. Another agent retrieves it as precedent.

The system begins feeding its own outputs back into its maps.

This is a new form of reflexivity.

The map changes because the traveler leaves roads behind.

If generated artifacts are not marked clearly, the institution can lose the boundary between observed state and machine-authored interpretation. A speculative diagnosis becomes a document. The document gets embedded. Later it is retrieved as if it were independent evidence.

One uncertain output can gain apparent corroboration by echoing through the corpus.

Provenance must survive indexing.

Was this source produced by a person, a sensor, a transaction system, a model, or a model summarizing other model output?

Was it approved?

Was it superseded?

Was it ever verified?

The stronger the agent becomes, the more important those distinctions become because the agent can manufacture large amounts of searchable history very quickly.

There is a security version of the same problem.

Tool descriptions, documents, web pages, and memories are not merely information. In an agentic system they can influence action selection.

A malicious or compromised source may try to make itself semantically attractive to a useful query. A tool may be described in a way that causes it to appear in many neighborhoods. A document may contain instructions intended to redirect the agent rather than inform it.

The retrieval layer becomes part of the attack surface.

This does not mean every document is hostile.

It means the architecture should distinguish data from authority.

A retrieved page can tell the agent that a process exists.

It should not automatically gain the right to redefine the agent's operating rules.

A retrieved email can contain an instruction from a human.

Whether that human has authority for the requested action is a separate question.

A retrieved tool description can explain parameters.

It should not be able to grant itself permissions.

Again the useful separation is simple.

Semantic systems expand consideration.

Explicit systems govern commitment.

Agents also make exploration cheaper.

A human analyst may test one interpretation because time is limited. An agent can branch. It can retrieve several neighborhoods, test several hypotheses, compare results, and keep the branches that survive.

Parallel search changes the economics of uncertainty.

This is one of the most exciting consequences of adjacency for agent design.

The agent does not have to take the first plausible route.

It can deliberately sample different regions.

One candidate from the dominant cluster.

One from a neighboring cluster.

One that contradicts the current theory.

One that looks structurally similar but comes from a different representation.

One exact match that semantic retrieval would have ranked lower.

The goal is not diversity theater.

It is protection against semantic basins.

A long-running agent can become relentlessly local. The nearest document shapes the first hypothesis. That hypothesis shapes the next query. The next query retrieves evidence from the same neighborhood. The agent becomes more confident because every new result agrees with the framing that selected it.

Search can automate confirmation bias.

A robust agent needs ways to escape.

Generate an alternative framing.

Search for disconfirming evidence.

Traverse a graph rather than only a vector neighborhood.

Switch from semantic retrieval to exact records.

Retrieve an older precedent with a different outcome.

Ask which assumption, if false, would change the plan.

These are computational forms of intellectual dissent.

They need not run on every trivial task.

A formatting request does not deserve five competing investigations.

A million-dollar procurement decision may.

A safety-critical diagnosis should.

Autonomy needs an epistemic budget.

Spend more search where error is expensive.

Spend less where reversibility is high.

This is where traversal policy becomes strategy.

The map does not only tell an agent where things are.

The agent decides how to travel.

Nearest first.

Broad sweep.

Diverse sampling.

Counterexample search.

Historical precedent.

Exact record.

Human escalation.

The best route depends on the stakes and the shape of uncertainty.

Human expertise has always been partly navigational. Experts do not possess every relevant fact. They know where to look, which source to distrust, whom to ask, when the familiar pattern is misleading, and which anomaly deserves more attention than the obvious similarity.

Agents are acquiring a computational version of that skill.

The vector space gives them neighborhoods.

Tools give them reach.

Memory gives them history.

Policies give them boundaries.

The environment gives them resistance.

The difficult engineering work is no longer merely making the agent capable of moving.

It is making the movement legible enough that capability does not become authority by accident.

The agent should be able to search farther than it can act.

It should be able to imagine more than it can authorize.

It should be able to retrieve precedent without inheriting authority from precedent.

It should be able to learn from its own history without mistaking its own output for independent evidence.

And when it does change the world, we should be able to reconstruct the neighborhood that made the action look reasonable at the time.

The vector space gives the agent reach.

Judgment begins with deciding where that reach must stop.