# Research Brief

## Central thesis

*The Expiration Machine* argues that expiration is one of civilization's hidden governance primitives. It is a mechanism for deciding when an earlier judgment should stop carrying authority without requiring a specific failure event to be detected first.

The book treats expiration as a family of related mechanisms rather than one universal rule. Across passports, medicines, food labels, professional licenses, leases, debt, patents, warranties, environmental permits, cryptographic keys, domains, temporary cloud credentials, and autonomous software, a date or renewal condition can bound stale trust, reopen bargaining, transfer risk, release temporary rights, or force revalidation.

## Claim classes

The manuscript separates four kinds of claims:

1. **Institutional facts** — what a named agency, standard, legal mechanism, or technical system actually does. These require checkable sources.
2. **Cross-domain synthesis** — the author's interpretation of common structure across otherwise different systems.
3. **Design principles** — recommendations inferred from the comparison: name what expires, match clocks to change velocity, pair expiration with revocation, price renewal burden, design grace deliberately, and protect durable status from disposable evidence.
4. **Counterexamples and boundary conditions** — cases where routine expiration creates more risk than it removes, or where durable continuity is normatively important.

## Research posture

Primary and first-party sources are preferred whenever practical. The source ledger contains one canonical row per principal source so Desk validation can detect duplicate identifiers and duplicate URLs cleanly.

The manuscript avoids fabricated quotations, invented studies, and false numerical precision. A source that describes one jurisdiction or one system is not generalized into a universal rule without qualification.

The research trail is intentionally falsifiable. Each chapter brief records what evidence or counterexample would weaken the chapter's central move.

## Important counterexamples

- Modern NIST guidance rejects arbitrary periodic password changes absent evidence of compromise. This demonstrates that shorter or more frequent expiration is not automatically safer.
- U.S. food date labels often communicate quality or inventory meaning rather than a federal safety cutoff. A date can acquire stronger semantics in public interpretation than the issuing system intended.
- The original forty-year term for U.S. commercial reactor licenses reflected economic and antitrust considerations rather than a forecast that a plant becomes technically unsafe on day one of year forty-one.
- Automatic renewal reverses the default logic of expiration: inaction can produce continuity rather than termination.
- Dead-man-switch logic is appropriate only when unattended continuation is more dangerous than interruption. Fail-closed is not a universal safety principle.

## Working model

Expiration can function as:

- a **stale-trust bound** when relevant change may occur without detection;
- a **forcing function** that schedules revalidation;
- a **bargaining reset** that returns parties to a negotiating boundary;
- an **anti-entrenchment mechanism** that prevents temporary privilege from becoming permanent by inertia;
- a **risk-transfer boundary** that changes who bears cost after a specified time;
- an **operational hazard** when renewal is brittle, expensive, poorly observed, or semantically confusing;
- a **continuation heartbeat** when delegated authority should persist only while an independent principal keeps demonstrating intent.

The final design claim is not “expire more.” It is: **use bounded trust where the future needs another vote, and preserve durable foundations where people need continuity in order to have a future at all.**

## Freshness policy

Regulations, agency guidance, standards, and technical documentation should be rechecked before a Shelf release. The manuscript's conceptual synthesis can persist across editions, but procedural claims should not be assumed timeless.

## Files

- `source-ledger.csv` — canonical principal sources in the Desk-required schema.
- `chapter-briefs.md` — chapter-by-chapter research targets and falsification notes.
