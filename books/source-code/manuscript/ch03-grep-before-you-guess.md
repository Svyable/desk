# Grep Before You Guess

There is a subtle status hierarchy in software work. Guessing from experience is often treated as senior. Searching is treated as mechanical.

This is backward.

The senior engineer’s advantage is not that they can avoid search. It is that they know what to search, what not to trust, and when a search result disproves the story everyone has been telling.

A mature codebase is full of statements that were true once.

Comments age. Names survive reorganizations. Directory boundaries preserve an architecture the runtime stopped respecting years ago. Tests are skipped. Interfaces are interpreted differently by different adapters. A type says a field cannot be null while a migration from four years ago explains exactly how old rows acquired nulls. A README describes the desired system. An emergency patch describes the system that had to exist on the night something caught fire.

None of this makes source code useless as evidence. It makes source code interesting as evidence.

The repository does not contain one narrator. It contains witnesses.

Search lets you compare them.

Consider a feature called saved carts. The product page says a saved cart expires after thirty days. An API description says forty-five. A comment in a model says “one month.” The UI says “Saved for 30 days.” A cleanup job deletes carts older than thirty days. A migration that introduced `expires_at` sets the value to forty-five days after creation.

Which one is the feature?

A meeting can produce opinions about which artifact is authoritative. Search can produce the conflict before anyone becomes attached to an answer.

Start with the terms the system itself has used: `saved_cart`, `expires_at`, `expiration`, `30 days`, `45 days`, perhaps the user-facing sentence. Then separate results by role. Which code writes an expiration timestamp? Which code reads it? Which code calculates age independently? Which tests assert behavior at day thirty or day forty-five? Which migration touched old rows? Which administrative tool can extend a cart? Which client displays a constant rather than a server-provided date?

The large model’s job begins after the first contradiction, not before it.

Perhaps new carts receive an explicit `expires_at` value of forty-five days, but the cleanup worker ignores the field and deletes anything older than thirty. Perhaps the UI displays a fixed thirty-day promise, accidentally matching cleanup rather than storage policy. Perhaps a mobile client uses the timestamp directly and therefore shows carts that the server will already have removed. Perhaps a backfill gave old carts forty-five days only to avoid deleting them during migration.

Now there is something worth reasoning about.

Grounding is often described as though it were a decoration added to an answer: generate the answer, attach citations, call it grounded. Repository work demands a stricter meaning. Grounding is a behavioral discipline. Retrieve before inference. Retrieve during inference. Retrieve specifically to attack the inference that currently feels best.

That last step matters because both humans and models are good at falling in love with explanations.

A plausible mechanism produces relief. The investigation has shape. The mind begins compressing the evidence around it. New observations are interpreted as support. Ambiguous details become “consistent with” the hypothesis. The search slows down precisely when it should become adversarial.

A disciplined agent changes mode at that moment.

If the leading hypothesis is that the thirty-day cleanup worker causes the saved-cart mismatch, search for evidence that would make that explanation incomplete. Are there carts surviving past thirty days? Is the worker disabled for some tenants? Is deletion soft or hard? Does another job restore carts from an event stream? Are there direct reads of `expires_at` that bypass cleanup? Do tests cover a clock boundary? Does one environment use a different schedule?

The question changes from “Can I support this theory?” to “What would embarrass this theory?”

This is a useful habit far beyond debugging. It is the difference between using the repository as a source of examples and using it as a source of constraint.

Grep, in this sense, is not one search. It is a sequence of lens changes.

You begin with exact strings because they are cheap anchors. Then symbols because they reveal definitions and call sites. Then sibling names because equivalent behavior tends to drift. Then old names because migrations and compatibility code keep linguistic fossils. Then tests because they expose intended boundaries. Then configuration because behavior changes between environments. Then history because the current code often makes more sense once you know what problem the previous shape was solving.

A weak search session looks like this: query a term, open the most promising file, read until an explanation appears.

A strong search session behaves more like interrogation. Every result earns or loses credibility by its relationship to other results.

Suppose a permission bug is reported as “contractors can sometimes export private project data.” Search for `export` and you will likely drown. Search for the permission constant and perhaps you find the API guard. That looks comforting. The endpoint checks permission. Case closed?

No. Search for every producer of export jobs. One comes from the API. Another comes from a scheduled report system. Search the scheduled path. It never calls the same guard because it trusts a stored report definition created when the user still had access. Search the worker. The worker validates that the report exists but not that the actor remains entitled to the underlying projects.

The initial search found the security control. Continued search found the path around it.

This is why “I found the check” is not the same thing as “the behavior is checked.”

Repositories encode negative space as well as positive evidence. The absence of a reference can matter. If a critical permission constant appears in API handlers and frontend controls but nowhere in background workers, that absence should change the investigation. If a state transition is tested on creation and update but never on retry, that absence matters. If every adapter implements a new interface method except one legacy provider, the missing implementation is information.

Small models are especially useful here because they are cheap enough to preserve negative results instead of summarizing only what they found. A retriever should be able to say: searched all worker directories for `MANAGE_EXPORTS`; zero matches. Searched tests for revoked-access scheduled exports; zero matches. Those statements are not proof of a defect, but they sharpen the next question.

The discipline can be formalized without becoming bureaucratic. Keep a live hypothesis ledger.

The ledger does not need to be a grand document. It can be a compact structure maintained by the analysis model: current question, observed facts, leading explanations, contradictory evidence, unknowns, and next discriminating searches.

For the saved-cart example, the ledger might say that one hypothesis is policy drift between explicit expiry and cleanup age. Evidence: new rows receive forty-five days; cleanup deletes at thirty. Contradiction: a subset of carts appear to persist beyond thirty. Unknown: whether cleanup excludes carts with active sessions. Next search: cleanup predicate, exclusion flags, and tests around active carts.

Another hypothesis might be that multiple creation paths assign different expiry values. Evidence: API creator uses forty-five; import path not yet inspected. Next search: all writers to `expires_at` and all inserts into the cart table.

The value of the ledger is not administrative neatness. It protects the investigation from narrative gravity.

Language models are compression machines. Given enough fragments, they will naturally try to make them cohere. Usually that is their gift. During debugging, premature coherence is a liability. The ledger gives contradiction a reserved seat at the table.

It also makes delegation easier. A large model can hand a small model a bounded uncertainty rather than a vague request to “look around.” Find every write to `expires_at`. Find whether cleanup reads the column. Find tests at 29, 30, 44, and 45 days. Search history for the change from thirty to forty-five. Each task can succeed, fail, or return nothing in a way that changes the parent model’s confidence.

There is another reason to search before guessing: repositories contain implementation vocabulary that product language hides.

The customer says “saved cart.” The database may say `basket_snapshot`. The backend may say `draft_order`. An analytics event may still say `cart_saved_v1`. A migration may mention `abandoned_checkout`. If you guess the architecture from the business term, you may search only the newest name and conclude the behavior is compact. Once you discover the internal vocabulary, the feature suddenly stretches across years.

Names are historical strata.

A capable model can help by generating synonym sets, morphological variants, likely abbreviations, old names, state labels, and consequences. But the guesses should be treated as query proposals, not facts. The repository gets to vote.

This distinction is small and important. The model is allowed to be imaginative about what to search. It should be conservative about what to claim.

That is an excellent division of labor.

Let the model speculate in the query planner. Let grep be literal. Let the analyst update beliefs only after results return.

The same method improves code review. A pull request says it changes how organization deletion works. Rather than reading only the changed files, search the state field it modifies. Search every consumer of the deletion event. Search tests for restore. Search the old enum value. Search admin tooling. Search data-retention jobs. The diff tells you what the author intended to change. Repository search tells you what else may have depended on the previous behavior.

The same method improves feature planning. A ticket says “add a grace period to failed payments.” Before designing tables and timers, search the existing states around failure. Search retry scheduling. Search dunning emails. Search entitlement revocation. Search provider webhook handling. Search customer-support overrides. Search analytics labels. The feature request arrives as a sentence. The implementation environment is already a web of commitments.

Good engineering begins by discovering those commitments before adding another one.

There will always be cases where search is insufficient. Dynamic configuration may live outside the repository. Production data may violate the assumptions visible in code. A distributed race may only be observable in traces. A third-party provider may behave differently from its contract. Source code is not a magical total description of reality.

But guessing does not solve those limitations. Search helps locate them.

A disciplined source investigation eventually reaches a boundary and can say: the repository proves these paths exist; it does not prove which configuration is active in production, so inspect runtime configuration. Or: the code publishes before commit, so a race is possible; traces are needed to determine whether it happened in this incident. Or: the retry wrapper can execute the provider call twice after timeout; provider-side idempotency must be checked externally.

The better the search, the more precise the request for non-source evidence becomes.

That is what seniority looks like in an AI-assisted codebase. Not clairvoyance. Not memory theater. Not the ability to stare at a ticket and produce the most convincing story first.

It is the habit of making the system answer.

Grep before you guess.