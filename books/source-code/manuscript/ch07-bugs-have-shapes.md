# Bugs Have Shapes

A bug is not a location.

The line you eventually change may be one line. The bug itself may require six conditions to become visible: an account created before a migration, a feature flag enabled, a request made through the mobile API, a cache warmed by another region, a reconciliation job running late, and a retry entered after a timeout.

Search for the line and you may find nothing wrong with it.

The defect is the shape formed by the conditions around it.

This is why repository-scale debugging is less like proofreading and more like geometry. The investigator is trying to reconstruct a region of state space in which behavior crosses from acceptable to wrong. Files are coordinates in that reconstruction, but the bug does not belong to any one of them.

Some shapes recur often enough to be useful.

One is the fork.

A fork appears when two paths believed to be equivalent have drifted. The web route validates before normalization while the mobile route normalizes before validation. The synchronous operation checks permissions live while the queued path trusts a decision stored earlier. The new API uses the current serializer while a CSV importer still instantiates the old data object directly. One payment provider goes through the shared retry wrapper and another implements its own.

Forks are common because software organizations copy working paths before they understand which parts must remain identical forever.

At the time of the copy, the two routes may genuinely be equivalent. Then one receives a bug fix. One adopts a new validator. One switches to a new library. One team knows about a changed invariant and the other does not. The branches continue to look similar enough that everyone assumes they still mean the same thing.

Search for sibling entry points and compare their downstream calls.

The useful question is not simply whether two files differ. Of course they differ. The question is whether they differ on a property the product assumes is shared.

Suppose password reset correctly revokes active web sessions, but account recovery through an older mobile flow does not. The bug may be reported as “I changed my password and my lost phone stayed logged in.” Search the password-change handler and it looks correct. Search the session revocation helper and it is called exactly where expected. Only when the agent searches sibling credential-reset paths does the fork appear.

A large model is good at aligning the two paths semantically. A small model can enumerate the branches and return the relevant slices. Together they can ask a precise question: where do these paths stop being equivalent?

Another recurring shape is the stale mirror.

Modern systems maintain many representations of the same fact. A user’s permission exists in the canonical membership table, a cached capability set, a token claim, a search-index document, a denormalized reporting table, a client state store, and perhaps an analytics model. Each representation exists for a reason. Each creates the possibility that reality changes while one mirror keeps showing the old face.

A stale mirror bug rarely looks like a bad line of code. Every individual reader can be correct relative to the representation it trusts.

The question is which representation is authoritative at which moment, and whether every relevant mutation updates or invalidates the others.

Search every writer to the mirrored value. Search every reader. Search invalidation calls. Search event consumers. Search background repair or reconciliation jobs. Search tests that mutate the source and then observe the mirror.

Imagine an organization removes a contractor from a project. The membership table updates immediately. The online API invalidates the permission cache. The search index, however, stores an `allowed_user_ids` field updated asynchronously. A project-search request trusts that field to filter results before the detail endpoint performs a live authorization check.

The contractor briefly sees a project title they can no longer open.

Is that a permissions bug, a search bug, an indexing bug, or an eventual-consistency bug?

Those labels are less useful than the shape: a mirror went stale across a security boundary.

The shape suggests where to search and what to test. That is the value of naming it.

A third shape is the ghost default.

Ghost defaults are decisions made by absence.

A missing environment variable becomes false. A missing feature flag becomes enabled. A null column is interpreted as “standard.” An omitted JSON field becomes an empty list. A configuration loader supplies one default while a generated client supplies another. A migration adds a field without backfilling old rows, and the application quietly turns null into a value that no product document ever approved.

Defaults are distributed policy.

They are dangerous precisely because they often do not look like policy. They look like convenience.

Search the configuration key, then search the fallback literals. Search schema defaults, migration defaults, deserialization defaults, test factories, fixture builders, and client-side initial state. Ask what happens when the value is absent at every boundary.

A feature may work perfectly for all new accounts because every new row has an explicit setting. Only old accounts exercise the ghost.

The fourth shape is the retry echo.

A retry echo occurs when code is correct once and wrong twice.

This is one of the most important shapes in distributed systems because operational infrastructure is designed to repeat work under uncertainty. A request times out after the provider completed it. A worker crashes after sending an email but before acknowledging the message. A transaction commits locally while the client disconnects. A queue redelivers because acknowledgement was lost.

The code often reads beautifully under the assumption of single execution.

Charge the card. Write the record. Send the message. Publish the event. Mark complete.

Then reality asks the block to run again.

The brutal debugging question is: what happens if this exact operation succeeds partially and then executes a second time?

Search for retry wrappers. Search transaction boundaries. Search idempotency keys. Search provider calls. Search acknowledgement. Search deduplication state. Search whether the side effect occurs before or after durable recording. Search tests that run the operation twice.

A duplicate-email report may be a retry echo. So may duplicate charges, duplicate audit records, duplicate jobs, repeated provisioning, or a counter that increments twice while the underlying object remains singular.

The fifth shape is the temporal crack.

A temporal crack appears when the same operations produce different outcomes depending on order.

A token is invalidated after an event is published. A cache is cleared before the transaction commits. A job reads a replica before the write has arrived. A cleanup worker races with a restore action. A feature flag changes between validation and execution. An entitlement is recomputed from provider state while an administrative override is being written.

Source code tends to make time look more orderly than production makes it.

Files are static. Functions read top to bottom. Transactions create comforting boundaries. Runtime systems overlap.

Search for the edges where ordering becomes uncertain: publishes, commits, cache operations, asynchronous jobs, clocks, leases, locks, retries, scheduled work, replication reads, external calls. Then construct the competing orderings.

If operation A must happen before B, where is that guarantee encoded? If nowhere, perhaps it is only a habit of the current timing.

Consider a service that updates a database row and then publishes an event. That sounds safe until you discover that publishing occurs inside a transaction callback registered before commit, or that an error path publishes compensation while the original transaction later succeeds. The bug is not “event handling.” It is a crack in temporal assumptions.

These shapes can combine.

A fork can create a stale mirror because one path forgets invalidation. A ghost default can activate only on retry because the second execution omits a field. A temporal crack can expose a fork when one asynchronous path observes intermediate state that the synchronous path never sees. Real incidents are often compound geometries.

The point is not to force every bug into a taxonomy. That would replace one kind of guess with another.

The point is that recurring shapes suggest high-value search moves.

If the symptom appears only on one client, search for forks.

If behavior disagrees between surfaces after a state change, search for mirrors.

If only old accounts or one environment are affected, search for defaults and migrations.

If the symptom involves duplication or intermittent side effects, search retries and idempotency.

If the failure depends on load, timing, or brief inconsistency, search ordering boundaries.

A good model can use the symptom to propose shapes, then ask small retrievers to look for the structural evidence each shape predicts.

This is stronger than asking the model to propose root causes in prose.

Suppose support reports that one class of users occasionally regains access to a resource minutes after an administrator removes it. Several shapes become plausible. A stale mirror could repopulate the permission cache. A temporal crack could let an old event arrive after the revocation. A retry echo could replay an earlier grant. A fork could mean one removal path forgets to revoke a secondary representation.

Each shape implies different searches.

For the stale mirror, enumerate representations and invalidations. For the temporal crack, map event publication and ordering. For the retry echo, inspect handlers for idempotency and event identity. For the fork, enumerate revocation entry points and compare them.

The repository becomes an experimental environment for eliminating shapes.

This style of investigation also improves bug reports produced by agents. Instead of returning “the issue is likely caused by cache inconsistency,” an agent can explain the conditions that define the defect.

For example: removal through the admin API updates canonical membership and invalidates the web permission cache, but the report worker uses a capability snapshot stored when the report was scheduled. That snapshot is refreshed only when the report definition changes. Users removed after scheduling can therefore continue receiving reports until the next edit or manual rebuild.

Now the bug has a shape.

It has an entry path, a stale representation, a missing invalidation, an affected surface, and a condition under which it disappears.

That description predicts behavior. It tells you which accounts are affected, which are not, how to reproduce the issue, which fix surfaces exist, and which test should fail before the patch.

Prediction is the standard that matters.

An explanation that merely sounds plausible is not yet a model of the bug. A useful model should predict what else the system will do.

If the cache-key theory is right, switching regions should change the outcome. If the stale-snapshot theory is right, editing the report should temporarily repair access. If the ghost-default theory is right, explicitly setting the value should eliminate the defect for an old account. If the retry theory is right, the duplicate should correlate with timeout or redelivery conditions.

Search can test many of these predictions before production experiments are necessary. Tests, code paths, configuration, and history may already contain the discriminating evidence.

When they do not, the source investigation tells you exactly what runtime observation to seek.

This is what it means to grok a bug rather than merely find a suspicious line.

You can describe the shape well enough to predict its boundaries.

You know which conditions bend the system into the wrong outcome.

And only then does the line you change become interesting.