# When Freshness Becomes Churn

There was a period when a password that had survived for ninety days could be treated as suspicious simply for being old.

The user would log in, type the same secret that had worked yesterday, and be told that the password had expired. Nothing had necessarily happened. There might be no evidence that anybody else knew it. No breach had been detected. No device was missing. The secret had crossed a date.

Change your password.

For generations of office workers, students, bank customers, government employees, contractors, and system administrators, the request became part of the background irritation of computing. Some organizations required a change every thirty days. Others sixty or ninety. Some allowed longer intervals. The exact number varied, but the logic felt sensible.

A password can be stolen without the owner knowing. If the stolen password remains valid forever, an attacker who obtains it might retain access for a long time. Force everybody to change passwords periodically and a stolen credential eventually dies.

Expiration seemed to provide a security backstop.

The reasoning resembles the case for short-lived certificates and access tokens. Yet modern password guidance has moved in a very different direction.

The current NIST Digital Identity Guidelines say that verifiers and credential service providers shall not require subscribers to change passwords periodically. They should force a change when there is evidence that the authenticator has been compromised.

That is not a minor adjustment to the old rule.

It rejects time, by itself, as sufficient evidence that a password should be replaced.

The reversal is useful because it reveals the condition that makes expiration valuable.

Renewal has to improve the state.

A password is not like a DNS cache entry. The resolver does not get bored when a TTL expires. It asks the authoritative system for the current answer. If the answer changed, the cache becomes fresh. If it did not, the same answer can be cached again without resentment or memory limits.

Humans are different.

Ask a person to create a new high-entropy secret every month, remember it without writing it somewhere unsafe, avoid reusing old passwords, avoid patterns, and do this across many accounts, and the person has been given a cognitive workload rather than a protocol step.

People adapt.

A password that once ended in `7` ends in `8`. A month appears in the string. A season changes. An exclamation point migrates. The secret becomes easier to predict because predictability is how the user makes a recurring burden survivable.

The policy gets a fresh timestamp.

The attacker may get a fresh pattern.

Security research and operational experience pushed the field away from treating arbitrary periodic changes as a universal good. NIST’s older guidance reflects the historical instinct. FIPS Publication 112, issued in 1985, discussed maximum password lifetimes and recommended limits under systems of that era. The current guidance is designed for a world in which password attacks, breach corpora, multifactor authentication, password managers, rate limiting, compromised-password blocklists, and modern verifier practices have changed what a good password policy needs to accomplish.

The lesson is not that the old designers were foolish.

They were solving a legitimate problem: an undetected compromise can persist.

The mistake is easier to see in hindsight. The expiration policy was evaluated as though changing the password were an independent security improvement. In reality, the quality of the replacement depended on the person being asked to create it.

The renewal mechanism had behavior.

Every expiration system has behavior.

That sounds banal until you notice how often policy treats renewal as a neutral reset. A professional license expires; the holder renews. A benefits determination expires; the recipient recertifies. A permit expires; the applicant applies again. A corporate access permission expires; a manager reapproves it. A law sunsets; legislators vote again.

The theory assumes the second decision contains information the first decision did not.

What if it does not?

Imagine a company that requires every manager to reapprove every employee’s existing software access every quarter. The security team expects the process to remove permissions that are no longer needed. Managers receive a screen with dozens or hundreds of entries. The fastest path is to click “approve all.” Deadlines arrive. Reminder emails multiply. The review becomes another inbox chore.

Formally, the permissions are fresh.

Substantively, nothing was reconsidered.

The quarterly expiry may still catch some stale access. A conscientious manager may notice a permission attached to an old project. An employee may have left. A system may have changed. The policy is not worthless merely because compliance becomes routine.

But the renewal process is not producing the amount of information the designer imagined.

This is the central weakness of periodic review.

Frequency can destroy attention.

A yearly question might receive thought. A daily question might become noise. A renewal rule can become less informative as it becomes more frequent because the people involved learn to treat the request as background. Machine-scale checking does not automatically translate into human-scale judgment.

The password case makes the problem especially visible because users often respond directly against the security goal. The more frequently they are forced to change, the more likely they may be to choose transformations that preserve memorability.

Expiration does not merely impose cost. It shapes the replacement.

This distinction matters far beyond authentication.

Consider a recurring compliance certification. An employee is asked every year to affirm that they have read a policy. The first year, perhaps they do. By the fifth year, the certification can become a familiar sequence of clicks. The organization can produce a record showing one hundred percent current acknowledgment. The record may be administratively valuable. It is weak evidence that one hundred percent of employees recently understood the policy.

The renewal date has measured compliance with the renewal process.

That is not the same thing as measuring the underlying state.

A professional credential can have the same problem. Continuing-education requirements may genuinely expose practitioners to new knowledge. They may also create a market for low-effort courses designed primarily to satisfy the clock. A mandatory annual inspection can catch deterioration. It can also become a predictable ritual in which everyone learns what must look correct on inspection day.

The expiration principle is therefore not a celebration of frequent reconsideration.

It is a demand for useful reconsideration.

There are at least three ways renewal can fail to create it.

The first is ritual.

The institution asks a question whose answer has become automatic. Renew this emergency. Reauthorize this access. Confirm this policy. Approve this vendor. The act occurs, but the burden of changing the status quo remains psychologically or politically higher than continuing it.

The second is gaming.

The holder changes behavior to satisfy the renewal test rather than the underlying purpose. Password users make predictable mutations. Regulated entities prepare for inspections. Applicants optimize paperwork. Organizations learn what evidence the auditor expects.

The third is substitution.

A fresh document becomes a proxy for a fresh reality. The certificate is current, therefore the system is secure. The license is renewed, therefore the professional is competent. The recertification was completed, therefore the program serves eligible people. The patent maintenance fee was paid, therefore the invention remains economically meaningful.

None of those conclusions necessarily follows.

A date can tell you that the renewal process happened. It cannot tell you whether the renewal process was good.

This is why current password guidance pairs the rejection of arbitrary periodic changes with event-driven change. If there is evidence that the authenticator has been compromised, the reason for replacement is not age. It is new information.

That suggests an alternative to calendar thinking.

Renew on change.

The idea is attractive. If an employee changes roles, review access then. If a bank detects credential exposure, force a password change then. If a company changes ownership, revalidate the relevant authority then. If medical evidence changes, reconsider the policy then.

Event-driven renewal better matches the clock to reality.

It also assumes the system can detect the event.

That is the advantage calendar expiry still has. It does not need to know what changed. It is a crude backstop for imperfect observation. If the organization fails to notice that an employee’s responsibilities drifted, a periodic access review may eventually surface the mismatch. If a domain quietly changes hands, shorter validation windows force the certificate system to encounter the new control state sooner. If nobody knows whether stored data remains necessary, a retention review creates a moment at which someone must ask.

Calendar expiration compensates for missing sensors.

Event-driven expiration depends on sensors.

The best systems often use both.

A credential can be revoked immediately on known compromise and still have a finite maximum lifetime in case compromise goes undetected. Access can be reviewed on role change and also periodically. A medicine can be recalled when new evidence emerges while still carrying a labeled expiration based on stability data. A law can be amended when circumstances change while also containing a sunset.

The calendar is not the source of truth. It is the deadline for not having learned anything new.

That framing changes how a lifetime should be chosen.

If the system has excellent continuous information, periodic renewal can be less frequent because important changes trigger action directly. If the system is nearly blind between reviews, the maximum lifetime becomes more important. If renewal is extremely burdensome, a short cycle can create more harm than the stale-state risk it reduces. If the consequence of stale authority is catastrophic, short lifetimes can be justified even with substantial renewal cost.

Again, there is no universal interval.

Password expiration became a bad habit partly because the interval itself acquired moral weight. A password older than ninety days looked negligent. A policy requiring regular changes looked strict. The visible action was easy to audit. Security teams could prove that the rule existed.

The harder work was less visible.

Detect compromised credentials. Block passwords found in breach corpora. Rate-limit guesses. Store password verifiers safely. Support password managers. Use phishing-resistant multifactor authentication where appropriate. Design recovery processes. Remove unnecessary reliance on passwords in the first place.

Expiration offered a simple control in a complicated system.

Simple controls are seductive because they are countable.

The account changed its password on this date. The employee renewed on this date. The permit was reissued on this date. The certificate expires on this date. The form was filed on this date.

The metric can become the objective.

This is one reason the language of “freshness” needs discipline. Fresh does not necessarily mean better. A fresh password can be weaker than the old one. A freshly approved access list can contain the same unnecessary permissions. A freshly renewed law can preserve the same obsolete assumptions. A freshly reissued document can carry forward the same error.

Time creates an opportunity for correction.

It does not create the correction.

That difference is obvious in software updates. A new version can fix vulnerabilities and introduce bugs. Nobody assumes recency alone guarantees quality. We ask what changed.

Renewal deserves the same question.

What changed?

If the answer is “only the date,” the expiration system may be performing useful housekeeping, but it should not claim more.

There is a subtler problem. Even a renewal that genuinely checks something can encourage people to optimize for the check.

A business knows that a permit inspection occurs annually. A school knows when standardized testing occurs. A department knows when budget authority must be renewed. A person knows when eligibility will be recertified. The schedule makes governance predictable, which is often fair and useful. It also makes the test gameable.

Unpredictable review avoids some gaming but creates a different kind of burden. People cannot plan. Authority becomes discretionary. Enforcement can become selective. The cure can be worse than the disease.

Expiration design keeps finding the same trade.

Make the rule predictable and people adapt to it.

Make the rule unpredictable and people cannot organize around it.

No timestamp escapes institutional behavior.

The password story has another lesson that deserves more attention: when a renewal requirement is badly designed, users often create shadow systems to survive it.

They write passwords down. Reuse them. Choose patterns. Store them in unsafe places. Seek exceptions. Keep sessions open. Ask support staff for resets. Every workaround weakens the neat model in which the user simply generates a new strong secret on schedule.

Bureaucratic renewal produces similar shadows.

People hire specialists to navigate forms. Employers maintain teams to handle licensing. Applicants create spreadsheets of deadlines. Wealthier households pay for expedited service. Companies lobby for automatic extensions. Agencies create grace periods because strict enforcement would produce intolerable disruption.

The renewal burden does not disappear. It generates an economy around itself.

Sometimes that economy is valuable. Accountants, lawyers, compliance professionals, credential managers, and renewal services can turn complexity into reliable execution. A world of expiring rights naturally creates specialists in keeping rights alive.

But the existence of a renewal industry should make us ask whether the underlying expiration is doing enough useful work to justify the maintenance apparatus.

The question is easiest when the answer changes.

A medical license renewal that identifies a disciplinary action matters. A security review that removes access from a departed employee matters. A patent maintenance deadline that causes an owner to let a no-longer-valued right lapse matters. A benefits review that accurately identifies a material change in eligibility matters.

The question is harder when almost everybody renews automatically and almost nothing is learned.

At that point, the expiration mechanism may be functioning primarily as a tollbooth.

That does not make it illegitimate. Some tollbooths fund systems. Some renewals verify contact information. Some create a periodic moment for notices, fees, education, or updated terms.

It means the institution should describe the purpose honestly.

Do not say the annual password change makes secrets fresh if users predictably weaken them.

Do not say a renewal proves continuing fitness if the process does not test fitness.

Do not say a sunset forces reconsideration if continuation is automatic.

The integrity of an expiration system begins with an accurate account of what renewal actually does.

NIST’s password rule is valuable because it abandoned a visible ritual when evidence and experience no longer supported the ritual as a default.

That is harder than adding a requirement.

Institutions accumulate clocks. Once a renewal cycle exists, people build forms, software, jobs, audits, fees, reminders, and expectations around it. Removing the clock can look like lowering standards even when the clock itself is counterproductive.

A security team that stops forcing arbitrary password changes may have to explain why “less frequent change” is not “less security.” A regulator that moves from annual forms to event-driven data matching may have to prove that oversight did not disappear. A professional body that lengthens a renewal cycle can be accused of becoming lax.

Expiration creates a visible performance of vigilance.

That performance has political value.

The difficult task is to separate vigilance from motion.

Sometimes the right response to an old password is to leave it alone.

Not because permanence is inherently safer.

Because the calendar arrived with no new information, and making the person move would produce churn instead of security.
