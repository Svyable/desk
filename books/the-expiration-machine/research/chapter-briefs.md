# Chapter Briefs and Falsification Notes

## Prologue — The Passport That Still Looks Like a Passport

Open on the peculiarity of a document becoming unusable while remaining physically intact. Use a U.S. passport only as a concrete object, not as a universal travel rule: adult passports are generally valid for ten years, children's for five, and some destinations require six months of validity beyond the intended trip. The point is that institutional validity can end before physical usefulness and, in some contexts, even before the printed expiration date.

The prologue should widen from the passport to medicine, domains, debt, permits, patents, keys, and warranties. Do not explain the whole thesis too quickly. Let the reader notice the recurring structure first.

**What would make this false?** If the examples are merely linguistic accidents with no useful common mechanism. The book must show that the cross-domain similarity produces transferable design insight, not just a clever list.

## Chapter 1 — The Date That Changes the Object

Define the core distinction between state and status. Physical state usually changes continuously. Institutional status can change discretely because rules need a point at which other actors can coordinate. Midnight is often not a description of nature; it is an agreement about when reliance should stop.

Use medicine to show “end of demonstrated assurance” versus instant failure, patents to show legal status, and digital credentials to show authorization status. Introduce the phrase **validity boundary** sparingly and only if it earns repeated use.

The chapter should explain why civilization likes dates: they are legible, auditable, schedulable, automatable, and easy to communicate across people who do not know one another.

**What would make this false?** If continuous monitoring can cheaply replace fixed boundaries in most important systems. Note that modern sensors and online revocation do reduce the need for some crude calendar rules.

## Chapter 2 — Trust With a Fuse

Make the mechanism explicit. Issuance is a judgment made at time A about conditions that may change by time B. Expiration limits the authority of that old judgment. This is useful when change may occur without being observed.

Distinguish four mechanisms: permanent validity, event-driven revocation, fixed expiration, and continuous re-evaluation. Most real systems mix them. A passport can be revoked before expiration. A token can expire even if no compromise is known. A permit can be renewed after review. A domain can expire and still enter a recovery period.

Use NIST cryptoperiod reasoning to show why limiting the time of authorized use reduces exposure even without a known failure.

**What would make this false?** If revocation alone reliably captures relevant change at lower cost. The chapter should explain why revocation lists, monitoring, and event detection are sometimes enough and sometimes not.

## Chapter 3 — The Passport Problem

Treat the passport as evidence of identity and citizenship that must remain acceptable to many foreign systems, not as identity itself. Explain the different validity periods for adults and children as evidence that systems can assign shorter intervals where the underlying attributes or risk profile change faster.

Use remaining-validity travel rules as a powerful example of nested expiration: a document can be legally unexpired yet operationally unacceptable because another institution applies a larger safety buffer.

Avoid implying that every country uses six months or the same rules. The U.S. State Department explicitly says some destinations require six months beyond travel.

**What would make this false?** If passport renewal is mostly fee collection and photo updating with little risk reduction. Acknowledge the administrative and political dimensions; do not romanticize the process.

## Chapter 4 — The License to Continue

Move from identity to competence and permission. Driver licenses, professional credentials, registrations, certifications, and operating permissions all ask some version of whether yesterday's approval should still count.

Because rules vary dramatically, build the chapter around categories of recheck rather than national numerical claims: identity/contact information, physical fitness where relevant, continuing education, disciplinary status, insurance, fees, testing, and simple confirmation of continued participation.

Introduce the distinction between **renewal that measures** and **renewal that merely persists**. A recurring fee can keep a registry current without re-establishing competence. That may still serve a purpose, but it is a different purpose.

**What would make this false?** Evidence that periodic relicensing has little connection to safety or competence and that event-driven discipline performs better. Include the possibility.

## Chapter 5 — Medicine After Midnight

Build carefully from FDA language. An expiration date reflects the period during which a drug is known to remain stable — retaining strength, quality, and purity — under labeled storage conditions. Stability testing supports the proposed date.

The intellectual move is to separate the confidence interval from the actual molecular state. The bottle does not know the calendar. The date marks the end of a validated claim under specified conditions. Storage history matters; products differ; some formulations are more sensitive than others.

Do not advise readers to use expired medication. This is a book about how validity is established, not personal medical guidance.

**What would make this false?** If expiration were purely arbitrary and unsupported by stability evidence. FDA requirements directly contradict that strong skeptical claim. The real uncertainty lies after the supported shelf life and across storage conditions.

## Chapter 6 — Best By, Sell By, Throw Away

Use USDA guidance to show semantic failure. Except for infant formula, many U.S. food date labels are not federally required safety dates. “Best if Used By” communicates quality; “Sell-By” assists inventory management; “Use-By” is generally about peak quality except for infant formula.

The chapter's target is not consumers. It is system design. A printed date has acquired such strong cliff-like meaning that distinctions among quality, inventory, and safety can collapse in ordinary use. Once a date is prominent, fine print may lose.

Connect this to waste without overclaiming causal shares. USDA notes that consumer and retail food waste is substantial and that date-label confusion contributes to disposal of wholesome food.

**What would make this false?** If consumers accurately interpret the labels and date confusion contributes little to waste. Preserve uncertainty about the size of the effect.

## Chapter 7 — Keys That Must Die

Use NIST's cryptoperiod definition as the purest engineering version of the thesis: the time span during which a key is authorized for use. Explain the logic in plain language. A secret may be compromised without anyone knowing. The longer it remains valuable, the larger the potential damage window. Old algorithms and protection environments also age.

Do not collapse keys, certificates, passwords, and tokens into one thing. A cryptographic key can have a cryptoperiod; a certificate binds information for a validity interval; tokens grant scoped access; passwords are human memorized secrets. Their renewal costs and failure modes differ.

Show how expiration converts uncertainty into bounded exposure. It does not prevent compromise; it limits how long an undiscovered compromise can remain useful.

**What would make this false?** If rotation itself creates more implementation risk than the reduced exposure justifies. This is common enough to lead directly into Chapter 8.

## Chapter 8 — When Expiration Makes Security Worse

Center the chapter on the abandonment of automatic password-aging orthodoxy. NIST says verifiers should not require arbitrary periodic memorized-secret changes and should force changes when there is evidence of compromise. Its FAQ explains the behavioral problem: users expecting frequent changes often choose weaker or predictably modified passwords.

The point is broader than passwords. Expiration works best when renewal can happen safely, cheaply, and with fresh entropy. Machine-generated credentials satisfy those conditions more often than human memory does.

Use this chapter to reject the slogan “shorter is always safer.” Security contains operational risk. Certificate or token renewal systems that fail can cause outages. Rotation without automation can produce secret sprawl.

**What would make this false?** Evidence that routine forced password changes materially improve outcomes in modern systems enough to outweigh predictable user behavior. Treat NIST guidance as strong but not metaphysical.

## Chapter 9 — The Lease and the Option

Turn to negotiated time. A lease grants possession or use for a term; an option grants a choice before a deadline. The important action often occurs before expiration because both parties anticipate the end.

Show that expiration changes bargaining power in advance. A tenant may invest less when renewal is uncertain. A landlord may seek new terms. An option becomes more urgent as the exercise date approaches. A contract's end date is therefore not merely a final moment; it shapes behavior throughout the preceding period.

Avoid pretending all leases work alike. Use generic contract mechanics and carefully sourced examples if any numerical claims are needed.

**What would make this false?** Long-term relationships can stabilize through reputation, regulation, or renewal expectations, muting the formal deadline. Include that social layer.

## Chapter 10 — Debt Has a Birthday

Use the SEC's definition of stated maturity: the date on which principal is scheduled to become due. Explain why debt maturity is expiration transformed into financing. A borrower can remain perfectly solvent day to day yet face a concentrated future need to repay or refinance.

Show how maturity ladders spread this risk and how clustered maturities create “walls.” Refinancing does not abolish expiration; it replaces one promise with another and resets the clock under then-current rates, credit conditions, and market appetite.

Keep the chapter conceptually broad rather than turning it into investment advice.

**What would make this false?** Firms with abundant cash or committed long-term facilities may face little practical renewal risk. Maturity matters most when repayment depends on future financing conditions.

## Chapter 11 — Monopoly on a Timer

Use U.S. patent terms to show a radically different purpose for expiration. Patent protection is intentionally temporary. USPTO explains that utility and plant patents generally end twenty years from the relevant filing date, subject to adjustments, extensions, disclaimers, and maintenance.

Trace earlier U.S. term structures to make the interval's political construction visible. The central bargain is not that an invention becomes unsafe after twenty years. It is that society grants limited exclusivity in exchange for disclosure and eventually allows the exclusive right to end.

Expiration here creates freedom rather than merely forcing revalidation.

**What would make this false?** Patent doctrine is more complicated than a simple twenty-year countdown, and other intellectual-property rights use different terms. Keep the chapter about the principle, not a legal shortcut.

## Chapter 12 — The Warranty Window

Treat a warranty as a seller's promise with a defined scope and often a defined duration. FTC guidance describes written warranties as commitments to stand behind products and requires disclosure rules once a business chooses to offer one.

Explore what duration can represent: expected defect emergence, repair economics, competitive positioning, price discrimination, customer reassurance, and legal allocation of risk. Do not claim warranty length is a pure engineering estimate; marketing and law matter.

The end of warranty does not mean the product has reached the end of useful life. It means a particular promise to bear certain costs has ended.

**What would make this false?** If warranty duration has weak correlation with product reliability and is mainly marketing. That would strengthen, not destroy, the book's distinction between physical state and contractual status.

## Chapter 13 — Permission to Operate

Use two concrete regulatory systems. EPA says Clean Water Act NPDES permits cannot be issued for more than five years and describes renewal plus administrative continuation. NRC says U.S. commercial reactor operating licenses began with forty-year terms and may be renewed in twenty-year increments after safety and environmental review.

The contrast is important. The intervals differ by an order of magnitude, yet both are institutional checkpoints. Explain the NRC's explicit history: forty years reflected economic and antitrust considerations, not a technical prediction that a plant becomes unsafe on day one of year forty-one.

Renewal can acquire technical meaning around a term whose original selection was not technical.

**What would make this false?** If ongoing inspection and enforcement do most of the real safety work while renewal adds little. The chapter should show expiration as one layer in a larger control system, not the only control.

## Chapter 14 — The Cloud Token

Shrink the clock from decades to hours. AWS describes temporary credentials that can last from minutes to hours and cease to be recognized after expiration. OAuth's `expires_in` parameter expresses access-token lifetime in seconds.

This is the modern extreme of temporary trust. The user or workload may still exist and remain authorized in principle, but the bearer credential is deliberately disposable. Fresh authority can be minted if the deeper identity and permissions still justify it.

Explain why this changes incident response. Theft of a short-lived token has a natural time limit even if revocation is imperfect. The deeper credential or role still matters, so short-lived tokens are not magic.

**What would make this false?** Attackers can use a token immediately, and automatic refresh can perpetuate access if the root authorization is compromised. Expiration bounds one layer, not the whole chain.

## Chapter 15 — The Grace Period

Show that mature expiration systems often resist exact cliffs. ICANN requires multiple reminders and a thirty-day Redemption Grace Period after deletion for covered gTLD registrations. EPA permits can be administratively continued after timely complete renewal applications when reissuance is delayed.

Grace periods solve coordination problems. Humans miss emails, agencies have backlogs, financial settlement takes time, and replacement credentials may overlap. A system can insist that trust is temporary without making one missed minute catastrophic.

Distinguish grace from silent permanent extension. The point is managed transition.

**What would make this false?** Grace periods can weaken discipline if everyone rationally waits until the last moment. Some systems may need hard cutoffs precisely because delay creates danger.

## Chapter 16 — The Cost of Renewal

Bring the hidden burden into view: forms, fees, travel, appointments, documentation, tests, outages, downtime, cognitive load, and the simple probability of missing a date. Revalidation has a cost even when the fee is zero.

Explain how repeated small failure probabilities compound. If a person must successfully renew many independent credentials across decades, even reliable processes create chances of accidental exclusion. Organizations face the same problem with certificates, domains, permits, insurance, and financing.

Do not invent population-level estimates without evidence. Use mechanism and sourced case examples.

**What would make this false?** Automation and interoperability can make renewal nearly frictionless. That possibility becomes part of the design agenda rather than a rebuttal.

## Chapter 17 — The Forever Problem

Examine the opposite failure: authority that never expires. Long-lived API keys, forgotten accounts, stale board permissions, old vendor access, dormant authorizations, abandoned domains held indefinitely, or institutional rules that survive the problem that created them.

The danger is not age itself. It is the growing distance between current reality and the evidence that originally justified trust. If no event reliably triggers revocation, “forever” turns absence of detection into continued permission.

Balance this against rights that should be durable. The chapter must not imply that citizenship, ownership, constitutional protection, or personhood ought to be routinely re-earned.

**What would make this false?** Durable systems can remain safe when they contain strong event-driven update mechanisms and when repeated proof would itself be unjust or destabilizing.

## Chapter 18 — Designing the Clock

Synthesize a design method without pretending to offer a universal formula. Ask five questions: How fast can the underlying fact change? How likely is undiscovered change? How costly is stale trust? How costly is renewal? How good are revocation and monitoring?

Use comparative examples across tokens, passports, environmental permits, reactor licenses, patents, warranties, and debt. The point is to show that validity is a parameter chosen under different constraints.

**What would make this false?** Political legitimacy, simplicity, and equal treatment may matter more than individualized risk optimization. A perfectly tailored clock can become opaque or discriminatory.

## Chapter 19 — The Expiration Economy

Follow the money created by recurring validity. Renewal generates predictable demand for registrars, insurers, certifiers, licensors, inspectors, lenders, software vendors, and subscription businesses. It also generates internal bureaucracies whose workload exists partly because trust is periodically reset.

Avoid conspiracy framing. Recurring checking can be socially useful and expensive to perform. The important question is incentive alignment: who benefits from a shorter term, who pays the friction, and who decides the interval?

**What would make this false?** Competitive markets or statutory term rules may constrain providers from shortening validity simply to collect more fees. Some renewals may be priced below cost or cross-subsidized.

## Chapter 20 — A Civilization That Rechecks Itself

Return to the opening object and widen. Expiration is civilization admitting that evidence ages. It is a distributed way to say: yesterday's approval is not infinitely authoritative.

But the conclusion must preserve the counterexamples. The best systems do not maximize expiration. They choose where temporary trust is appropriate, distinguish hard safety boundaries from quality signals, automate low-value renewal, preserve meaningful reassessment, use grace where brittle cliffs would be absurd, and leave some fundamental rights outside routine requalification.

**What would make this false?** If the framework adds no predictive or design value beyond ordinary domain-specific rules. The final chapter should demonstrate transfer: lessons from one domain should illuminate another without erasing their differences.

## Chapter 21 — The Dead Man's Switch

Extend the framework from passive expiration to active continuation. A dead man's switch reverses the default: silence no longer means persistence; continuation requires evidence that a responsible actor or condition is still present.

Use industrial fail-safe control as the physical precedent, then make the chapter's original contribution carefully: autonomous software may need authority that expires unless an independent principal renews it. The renewal signal must sit above the delegated process; otherwise the agent is merely reauthorizing itself.

Distinguish high-consequence delegated machine authority from durable human status. A citizen should not need a weekly heartbeat to remain a citizen. An autonomous purchasing agent may reasonably need a periodic heartbeat to keep spending someone else's money.

**What would make this false?** If interruption is more dangerous than unattended continuation, or if human confirmation becomes meaningless click-through ritual. Fail-closed is not universally safer. The chapter must preserve that boundary.

## Epilogue — Tomorrow's Date

Use ordinary dates and renewals to close quietly. The final image should not be apocalypse at midnight. It should be continuity made possible by a small, repeated institutional act: warning, recheck, renewal, replacement, or deliberate expiry. End on the distinction between time arriving automatically and humans deciding what should change when it does.
