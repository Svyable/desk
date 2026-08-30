# The City Under the City

Imagine it is 2:17 in the morning and the payments graph begins to lean.

Not crash. Not spike. Lean.

A small but visible percentage of transactions that should settle immediately are entering a delayed state. Retries are rising, but not enough to explain the whole thing. The payment processor is answering. The queue is moving. Database latency is ordinary. The evening deploy changed code, but no single diff looks guilty. Every dashboard is healthy enough to argue with.

The incident ticket says: “Some instant transfers becoming pending.”

That sentence is useful to the customer and almost useless to the machine.

A conventional debugging session often begins from the noun phrase. Instant transfers must live in the transfer service, so someone opens the transfer service. The handler looks reasonable. The engineer follows a few calls, checks the obvious configuration, searches recent pull requests, asks in chat whether anyone remembers a related incident, and slowly builds a mental model from whatever pieces happen to be nearby.

A capable language model can make this faster. It can also make it worse.

Ask a large model, cold, why instant transfers might become pending and it will produce a competent catalogue: provider degradation, timeouts, idempotency conflicts, insufficient funds, asynchronous fallbacks, risk review, stale account state, eventual consistency, race conditions. None of that is foolish. It is a useful list of generic possibilities. It is simply not knowledge of this system.

The danger arrives when fluent possibility begins to feel like diagnosis.

A model that knows a great deal about software can sound uncannily specific while remaining entirely outside the repository. It can describe the kind of architecture the company probably has, the kind of failure that commonly occurs, and the kind of patch that often fixes it. This is the software equivalent of a doctor diagnosing a patient from the average symptoms of everyone who has ever sat in the waiting room.

The first move should be less glamorous.

Search.

Search for the exact state the customer sees. If `pending` is too broad, search the state enum. Search the metric name from the dashboard. Search the alert text. Search the log prefix. Search the API field that carries the status to the client. Search the feature flag mentioned in the last deployment. Search the word `instant`, then the internal word for settlement, then the provider capability that must be true before instant settlement is attempted.

The point is not that any one query is clever. The point is that each result changes what deserves to be searched next.

Suppose the first useful result is a serializer that maps an internal `DEFERRED` state to the external word `pending`. That changes the question. You are no longer searching for every place a programmer happened to type `pending`. You are searching for producers of `DEFERRED`.

One of those producers is a settlement adapter. The adapter has several branches: attempt instant settlement if the processor supports it, use standard settlement otherwise, and fall back to standard if the instant capability cannot be confirmed. The code is unsurprising. What matters is the capability check.

Search the capability symbol. There are readers in the adapter, a test fixture, a warm-up job, and a cache wrapper. Search the cache key. The current implementation keys by processor. Git history shows that, until a recent refactor, it keyed by processor and region.

Now the shape of the incident begins to emerge.

One region’s capability response can occupy the cache entry used by another region. A processor can support instant settlement in one jurisdiction and not another. The transfer service is not failing. The processor is not failing. The queue is not failing. The system is successfully executing a conservative fallback because it is consulting a capability answer that belongs to a different place.

The customer sees “pending.” The product team calls the feature “instant transfers.” The repository team that owns the transfer service may have changed nothing. The defect lives in a generic capability cache several architectural neighborhoods away.

This is the city under the city.

Every mature software product has at least three maps. The first is the map drawn for users: checkout, search, messages, invoices, projects, transfers. The second is the map drawn for programmers: services, packages, modules, adapters, libraries, workers. The third is the map that actually determines behavior at runtime: state, configuration, data, network calls, caches, queues, retries, clocks, regions, versions, and the order in which all of them happen to meet.

Bugs move between these maps without asking permission.

A user reports a checkout problem and the cause is a tax cache. A support ticket describes a missing notification and the cause is a permission snapshot written hours earlier. A search result disappears because a data-retention job changed the field that controls indexing. A mobile feature fails only for accounts created before a migration because the supposedly impossible null value still exists in old rows.

The repository tree encourages us to believe that software is organized according to the folders we gave it. Runtime behavior has never made that promise.

This is one reason textual search remains so powerful in an era crowded with more sophisticated forms of code intelligence. Text does not care which organizational map you started from. A visible sentence can lead to the component that renders it. The component can lead to a response field. The response field can lead to a serializer. The serializer can lead to a state enum. The state enum can lead to a job. The job can lead to a migration. The migration can explain why only accounts older than a certain date are affected.

No architecture diagram has to predict that route in advance.

The trail is discovered rather than assumed.

Engineers have always searched code. The change introduced by tool-using models is not the existence of grep. It is the economics and persistence of the search loop.

A human performs repository search under a rationing regime. Attention is limited. Working memory decays. Repeating a slightly different query feels tedious. Opening the fifth nearly identical adapter is boring. Searching old names after the current name produced good-looking results can feel unnecessary. During an incident, social pressure pushes toward action. Once an explanation sounds plausible, the urge to stop looking becomes strong.

A small model with deterministic tools experiences none of these costs in the same way.

It can search five synonyms because doing so is cheap. It can enumerate every writer to a field. It can inspect six sibling implementations. It can look for the old flag name in migrations and the new flag name in production. It can return an empty result without feeling that the search “failed.” It can keep going until the space of plausible mechanisms is smaller than the space we started with.

This is where grep stops being merely a command and becomes a reasoning primitive.

The primitive is not `rg`. The primitive is the cycle: observe a trace, form a narrower question, search for evidence, revise the hypothesis, then search again.

The order matters.

When the model begins by explaining, it tends to project an architecture onto the codebase. When it begins by searching, the architecture has a chance to reveal itself.

Consider another symptom: “Deleting a workspace sometimes leaves its files visible for several minutes.” A model can easily speculate about asynchronous cleanup. That may even be correct. But “asynchronous cleanup” is not yet an explanation. Which asynchronous mechanism? What is the state transition? Which store remains visible? What event starts deletion? Does the UI hide records optimistically? Does the object store use a separate lifecycle? Is there a search index? Does a cache survive the database delete? Is there a compensating retry when one cleanup operation fails?

Search the delete endpoint. Search the workspace status written by that endpoint. Search every reader of that status. Search the job or event emitted after the write. Search all consumers. Search the name of the object-store prefix. Search the search-index deletion call. Search the retry policy. Search the tests that mention deletion and the ones that mention visibility.

Perhaps the repository reveals that the database row is soft-deleted immediately, the search index is updated by a queue consumer, and object-store cleanup runs later. The user’s report is not really about files surviving. It is about search results surviving long enough to link to files whose authorization check still trusts an index document containing an obsolete ownership snapshot.

Now the phrase “asynchronous cleanup” looks almost comically insufficient.

The investigation has moved from category to mechanism.

That move—from category to mechanism—is one of the most important habits an agent can learn.

Categories are useful for generating search directions. Mechanisms are what code changes.

The same discipline protects feature work. Suppose a product manager asks what it would take to let enterprise administrators revoke all active sessions for a user. The weak approach is to ask the model how session revocation is usually implemented and begin designing from first principles. The stronger approach is to search the current system before inventing the next one.

Where are sessions created? What persists them? Are access tokens self-contained or checked against server state? Which flows already revoke a single session? What does password reset do? What does account suspension do? Is there a token version field? Does mobile behave differently? Is there a background session cache? Which tests assert logout semantics? Which services accept credentials without consulting the central session store?

The repository contains the constraints the feature must survive.

If the investigation discovers that web sessions are server-side, mobile tokens are long-lived and self-contained, support has an administrative revoke path that only covers web, and API keys are represented in a separate table, then “revoke all sessions” is not a button plus an endpoint. It is a feature that crosses several authentication representations. Search reveals that before implementation turns the ambiguity into a production bug.

This is why the best starting artifact is often not an architectural concept but a concrete trace.

A trace is something the system had to make real: an error code, a string, a state, a field, a metric, a route, a queue topic, a log prefix, a feature flag, a test name, a serialized key. Traces are imperfect. Strings can be duplicated. Metrics can be stale. Tests can describe obsolete intent. But traces offer a foothold in actual machinery.

Once you have a foothold, you can climb toward abstraction with evidence underneath you.

The reverse direction is riskier. Starting from an abstraction such as “billing,” “permissions,” or “recommendations” encourages the investigator to find the files that look as though they ought to implement the concept. Mature systems are full of behavior that escaped its original home long ago. Compatibility layers, migrations, emergency fixes, duplicated clients, admin tools, shadow traffic, regional adapters, and historical experiments all leave working paths outside the clean diagram.

The first law of repository cognition is therefore simple: when you do not know where a behavior lives, search for its traces before you search for its abstraction.

Search the thing the user saw. Search the state that must have existed. Search the signal the operator observed. Search the name that crosses a boundary. Then follow the consequences.

Do not ask the repository to confirm the architecture you expected.

Let it show you the city underneath.