# Front Matter

There are dates that describe what happened. Birthdays. Elections. Accidents. Closings. Launches. They point backward at an event and say: this was the day.

And there are dates that do something stranger. They point forward and tell the world when to stop believing an earlier decision.

A passport expires. A patent expires. A prescription drug carries an expiration date. A lease ends. A bond matures. A warranty runs out. A permit comes up for renewal. A domain registration lapses. A temporary access credential becomes useless after an hour. A cryptographic key is authorized only for a period of time even though the mathematics that makes it work does not notice the calendar.

The objects can look exactly the same before and after. The paper has not changed. The bottle has not changed in any way a person can see. The server has not received a cosmic signal at midnight. The invention remains invented. The building remains standing. The borrower remains the same legal person. Yet a line has been crossed, and with it the willingness of another person, market, court, machine, or institution to rely on what was true yesterday.

This book is about that line.

It is not an argument that everything should expire. Some of the most important things in a decent society are valuable precisely because they do not have to be periodically re-earned: basic rights, legal personhood, ownership that remains valid until transferred, relationships whose meaning would be cheapened by routine recertification. Nor is it an argument that short validity periods are inherently safer. Security engineers learned the opposite lesson in an important corner of their field. Forcing people to change memorized passwords on a calendar can produce weaker, more predictable behavior, which is one reason current federal digital-identity guidance rejects arbitrary periodic password changes.

Expiration is useful only when it matches a real problem.

The problem is stale trust.

Every credential, authorization, approval, warranty, exclusive right, safety claim, and financial promise begins with a judgment. Someone checked something. A government accepted evidence of identity. A manufacturer tested a drug under defined storage conditions. A lender accepted a promise to repay. A regulator decided that an operator could proceed under stated conditions. A security system issued a credential. A patent office granted an exclusive right. A seller promised to bear certain repair costs. A registrar recorded that a particular customer controlled a particular name.

Then time passes.

Time does not make every judgment false, but it creates room for reality to drift away from the evidence that supported it. People move. Children grow. Companies fail. keys leak. Software changes. storage conditions vary. machines age. regulations change. owners lose interest. passwords are stolen. money gets more expensive. pollutants accumulate. exclusive rights outlive the period society intended to grant them. Sometimes the change is discovered immediately and the earlier approval can be revoked. Often it is not.

Expiration is one of the ways civilization limits the authority of old evidence.

A date says: this judgment may be relied upon until here. After that, something new has to happen. Renew it. Replace it. Recheck it. Refinance it. Reissue it. Renegotiate it. Let the right end. Let the monopoly fall away. Let the permission die if nobody still wants it enough to ask again.

That sounds obvious once it is stated, which may be why the mechanism is so easy to overlook. Expiration is scattered across disciplines that rarely speak to one another. Pharmacists talk about stability. Security engineers talk about token lifetimes and cryptoperiods. Lawyers talk about terms and maturities. Regulators talk about permit renewal. Patent lawyers talk about statutory terms. Domain registrars talk about renewal windows and redemption grace periods. Food manufacturers print dates that may concern quality, inventory, or safety, often with enough semantic overlap to confuse the people looking at the package.

The vocabulary changes because the purposes change. But a common design question remains underneath: how long should yesterday's evidence continue to govern today's decision?

That question turns out to be harder than printing a date.

A validity period can be too long, allowing stale trust to persist after the facts have changed. It can be too short, turning harmless continuity into repeated bureaucracy. Renewal can be meaningful, or it can be theater. A hard cutoff can protect a system from forgotten authority, or it can create a catastrophic outage because one certificate failed to rotate. A date can prevent unsafe reliance, or it can cause perfectly edible food to be discarded because a quality signal looks like a safety cliff. A grace period can make a system humane and resilient, or teach everyone to ignore the nominal deadline.

These are not edge cases. They reveal what expiration actually is: temporal governance.

A society cannot continuously re-investigate every fact it relies upon. Neither can a computer system continuously rebuild every chain of trust from first principles. We economize. We inspect once, issue something, and allow that issuance to carry forward. The validity interval determines how long we are willing to live with the uncertainty that accumulates in between.

The interval may be seconds, years, or decades. It may come from engineering evidence, political compromise, historical habit, market convention, administrative convenience, or all of them at once. The original forty-year term for United States commercial nuclear reactor licenses is an unusually revealing case. The Nuclear Regulatory Commission explains that the term was selected for economic and antitrust considerations, not because engineers believed a reactor became unsafe in year forty-one. Yet a licensing system built around that term later developed serious technical review of aging when renewal became necessary. A date can begin as political structure and acquire engineering significance because institutions organize around it.

The reverse also happens. A date can begin with a sensible engineering purpose and persist after the system around it changes. The ritual survives the reason.

That is where the book becomes useful beyond its examples. We can ask the same questions of each clock.

What can change while the credential remains unchanged? How likely is that change to go undiscovered? What is the cost of continuing to trust stale evidence? What does renewal actually measure? What does renewal cost? Can revocation or continuous monitoring catch the important failures faster? Who benefits from a short term? Who pays for the repeated proof? What happens if the deadline is missed by a day? Which forms of trust should not be temporary at all?

There will not be one answer. A machine-generated cloud token and a human-memorized password should not follow the same renewal rule. A patent and a passport expire for profoundly different reasons. A drug expiration date is based on demonstrated stability; a food quality date can be an estimate of peak freshness. A debt maturity is a future payment event, not a judgment that the borrower has become unworthy. The value of the common frame lies in making the differences easier to see, not flattening them.

The ambition of this book is therefore modest in one way and large in another. It does not propose a universal expiration formula. It asks us to recognize a mechanism that has become so ordinary we mostly notice it only when it fails.

The dates are everywhere.

They are small constitutional amendments to yesterday.

They tell the future how long it must honor the past.
