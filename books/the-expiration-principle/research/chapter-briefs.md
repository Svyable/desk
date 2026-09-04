# Chapter Briefs and Falsification Notes

## Prologue — The Day the Internet Got Old

Open on September 30, 2021, when the DST Root CA X3 certificate expired. Explain why an object that had done nothing wrong could cease to be accepted because a date passed, and why legacy devices exposed the difference between a functioning system and a still-trusted system. Establish expiry as a design decision, not a natural fact. Avoid overstating the outage: most modern devices continued to work; the revealing cases were older clients and unusual chains.

## 1 — The Date We Do Not See

Introduce expiration as a family resemblance across mundane objects and powerful institutions. Distinguish physical decay, legal termination, market maturity, credential validity, and policy sunset. The chapter's job is conceptual: an expiry date converts indefinite persistence into a requirement for a new decision. Counterpoint: a date can be arbitrary, and automatic termination can be less rational than ordinary review.

## 2 — Time to Live

Use DNS TTLs, caches, and DHCP leases to show the machine version of the principle. A cache is useful because it remembers; it becomes dangerous when it remembers too long. A lease is useful because it grants control without presuming permanence. Explain the trade between freshness and network load without turning it into a universal formula. Counterpoint: very short TTLs can create cost, fragility, and dependence on upstream systems.

## 3 — Trust on a Timer

Move from cached information to credentials. Explain publicly trusted TLS certificates, ACME, the certificate-lifetime reductions adopted by the CA/Browser Forum, and why the Web PKI increasingly prefers shorter evidence windows combined with automation. Counterpoint: shorter validity can create more opportunities for operational failure if automation is weak.

## 4 — When Freshness Becomes Churn

Use password-expiration policy as the corrective case. Compare older standards that encouraged maximum password lifetimes with current NIST guidance against routine forced changes absent evidence of compromise. The lesson is central: expiry is valuable only when renewal improves the state. If users replace one weak password with another predictable variation, the clock has produced churn rather than freshness.

## 5 — The Sunset Clause

Shift from technical systems to law. Use the National Emergencies Act's annual continuation mechanism as a concrete example of authority that would terminate without an affirmative act. Distinguish genuine sunset from periodic ceremonial renewal. Counterpoint: sunset clauses can destabilize long-term programs and invite hostage-taking when continuation is broadly desirable.

## 6 — The Patent Bargain

Treat the patent term as an explicit bargain: a time-limited right to exclude in exchange for disclosure, followed by expiry. Explain U.S. utility-patent term and maintenance fees carefully. The chapter should not romanticize expiry; innovation incentives and public access are in tension, and practical barriers often persist after legal exclusivity ends.

## 7 — The Patent Cliff

Use pharmaceutical patents and FDA regulatory exclusivities to show that multiple clocks can overlap. The Orange Book makes expiration visible, yet FDA itself warns that expiry dates provide only rough clues to generic entry. Explain Paragraph IV challenges and why market transition can occur before or after a simple calendar date. Counterpoint: the term 'patent cliff' hides manufacturing, regulatory, and commercial complexity.

## 8 — The Option Has a Date

Financial options make time itself part of the price. Use SEC investor guidance and the growth of same-day expiration as a vivid case where an expiring right can become nearly pure sensitivity to the clock. The point is not trading advice. It is that a right with a deadline behaves differently from an otherwise similar right without one.

## 9 — The Rented Life

Move through leases, passports, visas, professional credentials, subscriptions, and temporary authorizations. Emphasize the human feeling of living inside renewable proof. Use U.S. passport validity as an uncomplicated case. Avoid collapsing legal status and document validity; that distinction becomes important in Chapter 14.

## 10 — The Date on the Milk

Use USDA food-date guidance to puncture the intuition that all printed dates describe safety. Except for infant formula and certain specific contexts, many U.S. food dates are quality signals rather than federal safety deadlines. Explore how an easy visual boundary can cause waste because the reader assumes the date means more than the system intended.

## 11 — The Medicine Cabinet

Contrast food dating with pharmaceuticals. FDA requires stability-supported expiration dating for drugs and warns that degraded medicines can lose strength or create other risks, while the Shelf-Life Extension Program shows that some properly stored stockpiled drugs can remain suitable beyond their original labeled dates after testing. The point is not that expiration is fake, but that the real object is evidence about stability under conditions.

## 12 — Money That Vanishes

Examine gift cards, loyalty points, credits, coupons, and promotional balances. U.S. federal law generally prevents paid gift-card expiration earlier than five years, which exposes a public judgment about who should bear the cost of forgetting. Distinguish purchased value from promotional value. Counterpoint: indefinite liabilities have real accounting and operational costs.

## 13 — The Renewal Bureaucracy

Use administrative-burden research and GAO findings to show that renewal is not free. Every recurring form, fee, document request, appointment, and eligibility recertification can screen out people who remain substantively qualified. This is the book's main human counterweight to the elegance of technical expiry. A system can be fresh and still be unjust.

## 14 — The Difference Between a Card and a Right

Use permanent-resident documentation to distinguish the expiry of evidence from the expiry of underlying status. Most green cards are time-limited documents; USCIS provides mechanisms showing continued status while replacement is pending. Contrast this with conditional residence, where the underlying legal condition can genuinely require timely action. The conceptual point: designers must specify exactly what dies at the date — the thing, the permission, the proof, or only the artifact.

## 15 — The Half-Life of Data

Use GDPR storage limitation and retention schedules to show expiration applied to memory. Old personal data can become inaccurate, excessive, or risky, but deletion also destroys future evidence. The chapter should make the case for purpose-bound retention rather than indiscriminate purging.

## 16 — The Archive That Must Not Expire

Build the case for permanence: public records, scientific data, historical archives, judicial opinions, certain conservation protections, and other institutions whose value comes from continuity. Use the debate over sunset clauses in Antarctic marine protected areas as an example of a case where time-bounding protection may conflict with the time scale of the thing being protected. The book must earn the right to recommend expiry by showing where it does not belong.

## 17 — The Machine That Must Forget

Bring the principle into agentic systems. Distinguish credential freshness from intent freshness: a token can remain valid after the human purpose behind an instruction has gone stale. Develop capability leasing, mandate expiry, authority ancestry, and propagation of revocation to delegated agents and scheduled work. Counterpoint: excessive reauthorization can destroy the persistence that makes agents useful. The chapter must avoid treating delegation itself as the novelty; the subject is the lifetime of delegated authority.

## 18 — The Right to Be Asked Again

Apply expiration to consent. The central claim is not that consent should expire on arbitrary calendars, but that material changes in purpose, capability, risk, or control can make an old yes insufficient. Develop event-driven reconsent and the distinction between a historical consent receipt and current permission. Counterpoint: constant reconsent creates fatigue and can become theater when refusal is not realistic.

## 19 — The Expiration Budget

Make renewal cost explicit. Every recurring review spends human attention, and too many freshness rituals can reduce actual judgment. Develop the idea of an expiration budget: allocate deliberate review to volatile or consequential states, automate objective revalidation, and count burden imposed outside the institution as well as inside it. Counterpoint: reducing review frequency can preserve attention while increasing stale-state risk; the correct trade depends on the cost of both errors.

## 20 — The Expiration Constitution

State the durable synthesis as a constitution of time rather than a universal preference for shorter lifetimes. Name what expires; identify stale-state and termination harms; account for reversibility; match lifetime to rate of change; prefer informative renewal; budget attention; provide safe boundary crossing; preserve revocation; specify renewal authority; and protect durable rights and archives from accidental temporariness. End on the governing idea: persistence is a decision made by defaults.

## Epilogue — Leave an Ending in the Design

Close quietly on the asymmetry between beginnings and endings. The final idea is that a good expiration system does not maximize endings; it maximizes justified continuation. As machines remove accidental friction and make persistence cheap, deliberate boundaries become more important. End with the instruction to ask how a thing ends at the moment it is created.
