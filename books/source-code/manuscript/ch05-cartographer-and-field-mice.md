# The Cartographer and the Field Mice

Picture a large model at a table covered in index cards.

On some cards are facts: a route writes a state, a migration introduced a field, a worker reads an older enum, a test asserts a boundary. On others are hypotheses: perhaps the cache is stale, perhaps two paths disagree, perhaps a retry repeats a side effect. A few cards are blank except for a question mark.

Around the table runs a swarm of smaller models.

One searches feature flags. One searches tests. One traces a schema field. One checks git history. One looks for metrics. One enumerates implementations of an interface. One follows a queue topic. One searches for the old name of a feature that was renamed before anyone on the current team joined.

The large model does not send them on grand quests.

It sends them on errands.

This is an important distinction because many agent systems fail at delegation before they fail at reasoning. They create a hierarchy of vaguely senior personalities and ask each one to “investigate the subsystem,” “understand the architecture,” or “analyze the bug.” The result is predictable: several models independently produce broad summaries, repeat the same obvious observations, and invent slightly different theories from overlapping context.

That is not a swarm. It is a panel discussion.

Useful delegation begins with questions that can come back wrong in obvious ways.

“Understand authentication” is a poor task for a retrieval worker.

“Find every function that writes `session_expires_at`, including migrations and tests” is a good one.

“Explain why checkout fails” is poor.

“Search for the exact error code `PAYMENT_METHOD_STALE`; list every producer and every handler” is good.

“Review the permissions system” is poor.

“Find background jobs that act on behalf of a user without calling the shared authorization helper” is much better.

The difference is falsifiability.

A bounded repository task has outcomes that reduce uncertainty even when the result is empty. If there are zero references to a supposed feature flag, that tells us something. If every writer to a state field flows through one helper, that tells us something. If one of seven adapters never calls the shared validator, that tells us something. If no test mentions a boundary that everyone assumes is guaranteed, the absence deserves attention.

A vague task can fail while sounding successful.

A model asked to “understand settlement architecture” can return two polished pages that do not change a single belief about the incident. A model asked to enumerate every place a settlement capability is cached either returns the places or it does not. The second task is less impressive in a demo and more valuable in an investigation.

The large model is the cartographer because its job is not merely to accumulate findings. It maintains a changing map of the problem.

That map should contain competing explanations rather than one favored story. A checkout defect might currently have four plausible mechanisms: a stale payment-method cache, a provider response being normalized incorrectly, a legacy mobile path bypassing validation, or a retry reusing an expired token. Each mechanism has supporting evidence, missing evidence, and observations that would weaken it.

The cartographer decides what the next search should discriminate between.

This is where information value matters.

Not every unanswered question deserves equal attention. If one hypothesis would be eliminated by a single search, perform that search before spending time richly documenting another branch. If two explanations make the same prediction about every artifact already inspected, search the artifact on which their predictions differ. If an entire family of explanations depends on a state having multiple writers, enumerate the writers early.

The investigation becomes a sequence of cheap experiments.

Suppose the current belief is that a stale cache causes an authorization bug. The strongest alternative is that a background worker uses an old permission snapshot. The next best search is not “find more cache code.” It is something that separates the two stories: inspect the worker’s authorization inputs, search every writer to the snapshot, and determine whether the affected path reads the live cache at all.

If the worker never reads the cache, another hour of cache archaeology has low value.

The cartographer must resist the pleasure of elaborating a map after the route has changed.

This is one reason a central analysis model is useful. Parallel retrieval creates fragments. Someone has to decide which fragments belong to the same mechanism, which contradict one another, and which are merely nearby in the source tree.

A small model may report a route handler, a migration, and a React conditional. Those are three separate files. The larger model may recognize that all three encode one feature contract: the migration establishes a default, the handler transforms that default under a permission rule, and the client hides the control when the rule is false. Another retriever may discover a scheduled job that changes the same state without passing through the handler. Suddenly the contract has an exception.

The architecture is being reconstructed from evidence, not retrieved from a diagram.

That reconstruction should be explicit enough to support further search.

A useful map might say: the feature has three entry points; two use the shared domain service and one legacy import path writes directly. State is stored in two fields, one current and one compatibility mirror. The API checks a permission helper; the worker trusts a stored decision. The visible UI state comes from the current field; a nightly job still reads the mirror. The strongest risk is drift between direct writes and mirror updates.

Once the map has that shape, new retrieval tasks become obvious.

Find all direct writers bypassing the service.

Find whether mirror updates are transactional with current-state writes.

Find tests exercising the legacy import path.

Find whether the nightly job is still enabled.

Find history around the introduction of the mirror.

The small models return seeds. The cartographer decides where the forest is.

There is another responsibility that belongs centrally: distinguishing observation from interpretation.

A retrieval worker can observe that a function named `recompute_entitlements` runs after a webhook. It should not silently convert that into the claim “webhooks are authoritative for entitlements.” The repository may also recompute entitlements after manual admin changes, scheduled reconciliation, imports, or billing events. Authority is a theory about the whole system. A call site is evidence toward that theory.

The analysis model should preserve that distinction in its map.

Fact: webhook handler calls `recompute_entitlements`.

Fact: admin override path writes entitlement rows directly.

Fact: nightly reconciliation calls the same recompute function.

Hypothesis: provider state is intended to be authoritative except during explicit admin override.

Unknown: what happens when reconciliation encounters an active override.

Next search: override marker, reconciliation exclusions, and tests covering both.

This style of reasoning feels slower on paper than a confident paragraph. In practice it is faster because it prevents entire branches of work from being built on an inference that was never checked.

The large model also needs to recognize when different layers are talking about the same thing in different languages.

A product manager says “pause.” The billing provider says `collection_behavior=keep_as_draft`. The database says `suspended_until`. The entitlement service says `ACCESS_TEMPORARILY_DISABLED`. The client says `subscriptionPaused`. A support tool says “hold.” A retriever can find each term. The cartographer must infer whether they participate in one state machine or several overlapping ones.

Semantic alignment is a reasoning task, not a search task.

This is where large models earn their role. They are good at seeing that a database field, an API status, a UI branch, and a job schedule may be different projections of one behavioral concept. They can propose equivalences, notice mismatches, and ask for evidence to confirm or reject the alignment.

But they should not be permitted to declare equivalence by linguistic resemblance alone.

If `suspended_until` looks like the pause state, search who writes it. Search what reads it. Search whether it is present for manual suspensions unrelated to billing. Search tests. Search old migrations. The large model proposes the bridge. The field mice test whether the bridge reaches the other side.

This creates a productive asymmetry.

The large model is allowed to be imaginative about relationships. The small model is required to be literal about evidence.

The large model asks, “Could these two mechanisms be the same contract expressed at different layers?”

The small model answers, “These are the seven references; four share the same state value, two are unrelated admin holds, and one is a deprecated migration.”

The large model then revises the map.

A second central responsibility is choosing when to stop.

This sounds less glamorous than hypothesis formation, but it determines whether an agent system is useful in real work. Repository search has no natural endpoint. There is always another synonym, another historical commit, another test directory, another indirect consumer, another configuration layer.

Perfect understanding is not the objective.

The objective is usually a decision: diagnose the incident, implement the feature, review the change, write the test plan, explain the blast radius, or decide which evidence must be gathered from production.

The cartographer must know when the map is good enough to cross the river.

For a bug diagnosis, that may mean the primary mechanism is supported by independent artifacts, the strongest alternative has been tested, the affected and unaffected paths are understood, and the proposed fix addresses the mechanism rather than merely the symptom.

For a feature change, it may mean all entry points are enumerated, state and transitions are mapped, major guards and side effects are identified, legacy paths have been checked, and the remaining unknowns are explicit enough to be tested during implementation.

For a code review, it may mean every changed invariant has been traced to its consumers and no unexamined path appears capable of violating it.

Stopping is not certainty. It is a judgment about marginal information value.

A well-designed harness can help by recording when new searches mostly duplicate previous evidence. If five different queries all lead to the same three files and no new writer, entry point, or boundary appears, the system should notice diminishing returns. If a contradiction remains unresolved, it should not confuse repetition with completion.

This is where the phrase “agent orchestration” can become unnecessarily grand. The core pattern is modest.

One mind holds the question.

Many cheap workers inspect the world.

The mind changes its theory according to what they find.

Then it asks again.

The image of a cartographer and field mice is intentionally uneven. The cartographer has the broad view but cannot personally inspect every hedge. The mice can move through the hedges but do not know why the river matters.

The system works because neither role pretends to be the other.

When every worker tries to be the architect, we get duplicated speculation. When the architect refuses to retrieve, we get elegant fiction. When retrieval is centralized in one expensive model, we waste cost and time on literal work. When synthesis is scattered across dozens of small agents, we lose a coherent theory.

Parallelize observation.

Centralize interpretation.

Then send the interpretation back into the field.