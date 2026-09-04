# When Expiration Makes Security Worse

For years, one of the most familiar pieces of computer-security advice was also one of the easiest to obey badly.

Change your password every ninety days.

The number varied. The ritual did not. An organization would place an expiration date on a memorized secret, and the user would eventually encounter a prompt refusing access until a new one was chosen.

The policy felt prudent because it borrowed the logic that works for cryptographic keys.

If an old secret might have been stolen, replace it.

If replacement reduces the useful life of a stolen secret, replace it frequently.

The reasoning is clean.

The human being inside the loop makes it less clean.

Current NIST digital-identity guidance says verifiers should not require memorized secrets to be changed arbitrarily or periodically. A change should be forced when there is evidence that the authenticator has been compromised. Earlier NIST explanation of the shift pointed toward the behavior administrators had observed for years: when people know they must change a password repeatedly, they often make predictable transformations.

The person does not generate a fresh random secret in the way a machine can.

She changes Winter24! to Spring24!.

She increments the digit.

She moves the exclamation mark.

She cycles through a family of memorable variants.

She writes the new password down because the system has demanded one more piece of entropy than her memory can comfortably carry.

The expiration policy changes the threat model by changing the user.

This is one of the most important counterexamples in the entire book because it shows why the metaphor of stale trust has limits.

A password can become dangerous with age if it has been exposed. But age alone does not necessarily make a strong uncompromised password worse. Forced renewal imposes a cognitive cost. When the cost is high, users adapt in ways that can lower security.

The clock reduces one risk and creates another.

Security guidance changed when the second risk became harder to ignore.

This is what good expiration design should look like: not loyalty to a ritual, but willingness to remove the ritual when evidence says it is solving the wrong problem.

The mistake was not that security professionals believed secrets should sometimes be replaced. That remains obvious. The mistake was treating the same temporal mechanism as equally useful across different kinds of secrets.

A machine-generated token and a human-memorized password have different renewal economics.

Software can create a fresh token with high entropy every hour. It does not get tired. It does not resent the security team. It does not reuse the old token with “2” appended. If the renewal path is designed correctly, the cost of rotation can be low enough that short lifetimes make sense.

A person carries secrets in a biological memory system with limited attention. Renewal consumes that scarce resource.

The clock must respect the substrate.

This principle extends beyond passwords.

A recurring professional form can improve compliance if it is short, meaningful, and easy to complete. Make it too frequent and people learn to click through without thinking.

A safety checklist can catch errors if users treat it as a pause for attention. Require it mechanically hundreds of times a day and the check can become an automatic gesture.

A permit renewal can force reconsideration of changing conditions. If review is backlogged and renewal becomes routine copy-and-paste, the formal expiration may add paperwork without adding information.

A certificate rotation policy can reduce long-lived exposure. If the automation is fragile, it can create outages that cause operators to disable checks or build dangerous workarounds.

Every expiration system trains behavior.

We usually evaluate the rule as if people and organizations will remain unchanged around it. That is rarely true.

Rules become environments. Humans adapt.

A ninety-day password policy does not operate on the password alone. It operates on the user's memory, habits, annoyance, time, and understanding of the threat. The resulting behavior determines whether the policy improves security.

This is why arbitrary expiration can be worse than no expiration.

The word arbitrary matters.

If evidence shows a password has been compromised, replacement is not arbitrary. The system has learned something. The old credential's trust should end.

If the user has forgotten the password and must recover the account, replacement is part of restoration.

If the hashing system changes or an incident reveals a class of weakness, broad resets may be justified.

What current guidance rejects is the assumption that the calendar alone supplies enough evidence to force every user through renewal on a fixed cadence.

In other words, revocation can outperform expiration when the failure is detectable.

This brings us back to the distinction in Chapter 2.

Expiration is most valuable when important change can remain hidden and when renewal is capable of reducing the resulting risk.

For memorized passwords, monitoring for known compromise, blocking commonly used or compromised secrets, rate limiting, multifactor authentication, and other controls can address the threat without repeatedly making every user invent a new password on schedule.

The better architecture changes the balance.

Once other controls improve, the justification for periodic expiration weakens.

This is a general pattern in institutional design. Expiration rules should not be evaluated in isolation from the rest of the system.

A five-year permit term might make sense in a world where regulators otherwise have limited information. Add continuous emissions monitoring, real-time reporting, and strong enforcement, and some risks may no longer require the same periodic review. Other risks may still justify it.

A ten-year identity document might be appropriate when the physical document is the primary evidence. Add reliable live status systems and some functions of the printed validity period become less important, while document replacement and identity refresh still matter.

A yearly certification might once have been the easiest way to confirm a company remained compliant. Add machine-readable continuous reporting and the annual ritual may become redundant—or may become the valuable moment when humans step back from the stream and evaluate what the numbers mean.

New controls do not automatically eliminate old clocks.

They change what the clocks should be asked to do.

Passwords also reveal the danger of compliance theater.

A policy is attractive to organizations when it is easy to demonstrate.

Show the auditor the password-age setting.

Show that the system forces changes.

Show the logs.

The control is measurable.

Whether users responded by choosing predictable variants is harder to measure.

This asymmetry can preserve bad policies long after their weaknesses are known.

Visible compliance wins over invisible outcomes.

The expiration machine becomes self-protecting because its activity produces evidence of diligence.

Renewal counts.

Emails sent.

Credentials rotated.

Forms completed.

Certificates replaced.

The organization can prove that the clock ran.

It is much harder to prove that the clock mattered.

This is why every recurring validity rule should be forced to answer a counterfactual question.

What would happen if the interval were twice as long?

What would happen if there were no fixed expiration but stronger event-driven revocation?

What would happen if renewal were automated?

What would happen if the system required change only when new evidence appeared?

What failure is the current cadence preventing?

If the answers are vague, the date may be ritual.

Security teams have another reason to care: frequent expiration creates edge cases.

A credential can expire while a service is offline. A renewal authority can be unreachable. Machines can disagree about time. A replacement can propagate slowly. A new certificate can be issued with the wrong name. automation can have permission errors. A dependency can reject the new key. A clock can cross a boundary during a long-running transaction.

The more often renewal occurs, the more often the system exercises this machinery.

That can be good. Frequent exercise reveals failures before everyone forgets how the process works. An annual disaster-recovery test is useful partly because untested recovery plans decay. Automated certificate rotation that happens every few weeks may be safer than a manual ritual nobody remembers until year three.

But frequency also multiplies opportunities for a bad renewal.

The quality of automation determines which effect dominates.

This is a strange inversion of the password case. Humans may perform worse under frequent forced renewal. Machines may perform better when renewal is frequent enough to remain a normal, continuously tested path rather than an emergency procedure.

The substrate matters again.

There is no general law that renewal burden rises with frequency in the same way for every system.

For a human, one extra form is one extra form.

For software, one million successful refreshes can cost less attention than one manual annual rotation.

This difference will shape the future of expiration.

As more institutional processes become automated, the economic case for shorter validity will grow. Licenses, permissions, access rights, registrations, and attestations can be revalidated more cheaply when data flows automatically.

That sounds attractive until we remember what happened with passwords.

Cheap renewal can still change behavior.

If a professional credential is continuously renewed from databases, institutions may begin adding more conditions because checking them is easy.

If benefits eligibility can be recomputed nightly, governments may be tempted to make status more volatile.

If insurance permissions can be refreshed before every transaction, the system may move from stable coverage periods toward constant reevaluation.

If workplace access can be recalculated from productivity and risk signals, “renewal” can become perpetual probation.

The administrative cost falls.

The human cost may rise.

Expiration can therefore become too efficient.

The friction of renewal sometimes protects continuity. It discourages institutions from asking people to re-earn status constantly.

This is a theme that computing culture often misses. Engineers see stale state and want to refresh it. Social systems contain reasons to tolerate stale state: predictability, due process, reliance, privacy, dignity, investment, and the right to live without permanent evaluation.

A person who has a professional license for two years can build a life around a known period of eligibility. A person whose license is continuously recomputed from dozens of feeds may have “fresher” status but less security in the ordinary sense of the word.

The best clock is not always the shortest technically possible clock.

NIST's password guidance is valuable because it demonstrates institutional learning in the opposite direction. Security professionals had the technical ability to force more frequent changes. They chose not to recommend arbitrary periodic changes because the control did not behave as hoped in human use.

That is an unusually mature outcome.

It admits that a rule can sound safer and be worse.

Expiration policy needs this humility everywhere.

Consider maintenance schedules. Replacing parts too frequently can introduce infant-mortality failures or maintenance errors. Opening equipment unnecessarily can disturb systems that were functioning properly. In medicine, repeated testing can generate false positives and cascades of intervention. In finance, refinancing too frequently exposes a borrower to transaction costs and market timing. In bureaucracy, constant recertification can exclude people through paperwork.

“Check more often” is not a universal safety principle.

Every check can itself cause failure.

Expiration creates a forced check.

Therefore expiration creates check-induced risk.

The right comparison is not between fresh trust and stale trust in the abstract. It is between two imperfect systems:

One allows some risk to accumulate during a validity period.

The other incurs the risk and cost of renewal.

The optimum can move when technology, behavior, threats, and institutions change.

This is why old expiration rules deserve periodic expiration of their own.

A policy written decades ago may have assumed manual records, slower communication, different fraud patterns, different costs, or different technology. The interval can become stale even while faithfully expiring everything beneath it.

There is a pleasing irony in this.

The mechanism designed to prevent stale trust is itself vulnerable to stale trust.

We trust the ninety-day password rule because somebody trusted it before us.

We trust the five-year renewal cycle because the statute contains it.

We trust the annual certification because the form has always arrived annually.

The calendar can fossilize judgment.

A healthy expiration system therefore needs a second-order review: not only did the credential expire, but has our reason for expiring it remained valid?

Security's retreat from arbitrary password changes is one answer.

The system looked at the behavior created by its own rule and changed the rule.

That is what it means for a civilization to recheck itself.

The lesson is not that expiration failed.

The lesson is that expiration is a tool, and tools inherit the intelligence—or stubbornness—of the people who decide where to use them.

A key that can be copied invisibly may deserve a short life.

A human memory forced to manufacture novelty on command may not.

The difference is not philosophical.

It is operational.
