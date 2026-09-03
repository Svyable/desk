# Research Brief

## Thesis under test

*The Expiration Principle* asks why modern systems put clocks on authority, trust, information, rights, prices, products, and permissions — and what happens when they do not.

The strong version of the argument would be too easy and too wrong: that everything should expire, or that shorter lifetimes are always safer and fairer. The version worth testing is narrower:

> Expiration is one of civilization's least noticed maintenance mechanisms. A well-chosen expiry date turns persistence from the default into a decision. It forces stale claims to be rechecked, old permissions to be re-earned, temporary powers to be reconsidered, and scarce resources to return to circulation. But expiry also creates renewal burdens, new gatekeepers, cliff risks, and opportunities for exclusion. The design question is not whether things end. It is which things should end automatically, on what clock, and who gets to renew them.

The book follows the same design move across domains that are rarely discussed together: DNS time-to-live values, web certificates, password policy, patents, pharmaceutical exclusivity, options, leases, visas, licenses, emergency powers, gift cards, food labels, drug dating, data-retention rules, access tokens, and AI-agent permissions. The wager is that seeing these cases side by side reveals a general institutional principle that each field alone tends to treat as local plumbing.

## Core empirical tests

1. **Freshness versus continuity:** When does a shorter lifetime materially improve security, accuracy, competition, or accountability, and when does it merely increase churn?
2. **Renewal as proof:** Does forced renewal actually produce new information, or does it become a ritual that rubber-stamps the old state?
3. **Cliff risk:** Which systems fail dangerously at the instant of expiry because renewal was treated as somebody else's maintenance problem?
4. **Circulation:** Where does expiry return scarce rights, spectrum, intellectual property, housing, capital, or permissions to a pool that can be reallocated?
5. **Burden and exclusion:** Who loses access when renewal requires forms, fees, appointments, documents, bandwidth, or institutional attention?
6. **The case for permanence:** Which rights, records, conservation commitments, scientific archives, and constitutional protections become less trustworthy if they are forced to expire?
7. **Machine-scale time:** What changes when software can issue, renew, revoke, and revalidate credentials continuously, making lifetimes measured in days, hours, or minutes practical?

## Falsification and counter-evidence

Every chapter should preserve evidence against the central thesis.

- Expiration can create synchronized failure. A certificate, license, or authorization that ends at a hard boundary can take down a healthy service even when nothing substantively changed.
- Short lifetimes only improve freshness when renewal actually revalidates the underlying claim. Automated renewal without meaningful checks can create the appearance of scrutiny without the substance.
- Renewal can be regressive. People with stable addresses, lawyers, money, flexible work hours, good internet access, and complete records are better positioned to keep temporary rights alive.
- Some things should be deliberately hard to sunset: basic rights, archival records, conservation protections, treaty commitments, and infrastructure whose continuity is itself a public good.
- Competition does not automatically appear when a patent or contract expires; complementary assets, regulation, manufacturing capacity, data, brands, and distribution can remain powerful barriers.
- Date labels can mislead in both directions. Treating a quality date as a safety boundary creates waste; treating a real stability limit as merely bureaucratic can create harm.
- Shorter technical credentials can increase operational complexity. If automation is brittle, the security gain can be outweighed by more outages and emergency exceptions.

## Evidence lanes

### I. Technical expiry

DNS TTLs and cache invalidation; X.509 and publicly trusted TLS certificate validity; the 2021 DST Root CA X3 expiration; ACME automation; NIST's retreat from routine password expiration; OAuth access-token expiration; JWT `exp` claims; DHCP leases; distributed-system leases and heartbeats.

### II. Legal and political sunset

Sunset clauses in statutes and emergency powers; temporary authorizations; licensing and permit renewal; the practical difference between a law that persists until repealed and a law that dies unless affirmatively renewed.

### III. Intellectual property and market circulation

Patent terms; pharmaceutical patent and regulatory-exclusivity cliffs; generic entry; maintenance fees; the trade between time-limited monopoly and eventual public access.

### IV. Time-priced contracts

Options and other expiring financial claims; leases; visas and immigration statuses; professional credentials; insurance coverage periods; subscriptions and promotional credits. The common feature is not that the underlying relationship ends, but that continuation requires a new act.

### V. Consumer and biological dates

Food date-labeling conventions and consumer confusion; drug stability testing; FDA's Shelf-Life Extension Program; infant formula as a genuine use-by exception; gift-card expiration restrictions under U.S. law.

### VI. Data and digital memory

GDPR storage limitation; retention schedules; deletion and archival exceptions; ephemeral messaging; cache eviction; session expiry. The central tension is between forgetting stale data and preserving records that society later needs for accountability, science, history, or justice.

### VII. Agents and machine authority

Short-lived tokens, delegated permissions, scoped credentials, approval windows, job leases, context lifetime, memory-retention policy, and the emerging problem of giving autonomous software enough persistence to finish work without giving it permanent authority by default.

## Sourcing conventions

Sources are logged in `research/source-ledger.csv` using the schema `id,year,author_or_institution,title,source_type,book_use,url`. Concrete claims in the manuscript should be traceable to this ledger or to primary material referenced by it. No invented quotations, statistics, incidents, or named individuals. When a source distinguishes safety from quality, validity from trust, or legal term from practical market power, the manuscript should preserve the distinction.

## Originality check

A September 2026 title-and-topic search did not surface an existing general-audience trade book built around this cross-domain thesis. There is extensive specialist literature on particular forms of expiry — planned obsolescence, food dating, certificate lifetimes, patent terms, sunset clauses, administrative burden — which is precisely why the synthesis is plausible. The originality claim should remain modest: the book proposes a new unifying lens, not ownership of the individual facts or fields.
