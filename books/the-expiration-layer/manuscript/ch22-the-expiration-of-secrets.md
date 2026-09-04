# The Expiration of Secrets

A secret has at least two lives.

The first is the period in which disclosure can cause the harm secrecy was meant to prevent.

The second is everything after.

Institutions are often good at creating the first life and terrible at recognizing the second.

A document is classified. A board discussion is confidential. A product roadmap is restricted. A salary negotiation is private. A security vulnerability is embargoed. A court record is sealed. A source’s identity is protected. A company acquisition is known only to insiders.

The restriction is usually created for a reason tied to a moment.

The moment passes.

The label remains.

Secrecy is another form of authority. It gives someone the power to prevent other people from knowing, discussing, publishing, auditing, or using information. Sometimes that power is essential. Privacy, national security, personal safety, fair markets, trade secrets, legal privilege, and responsible vulnerability disclosure all depend on controlled information.

But secrecy that has no expiration mechanism accumulates faster than institutions can govern it.

The United States classification system offers an unusually explicit example of temporal secrecy. Executive Order 13526 established a framework under which classified information can be subject to automatic declassification after defined periods, commonly twenty-five years for records of permanent historical value, with exemptions and longer protection available for specified categories. The National Archives operates declassification programs around this architecture.

The important principle is not the exact number of years.

It is that secrecy must eventually face a renewal test.

The burden cannot always remain on an outsider to prove why the public should be allowed to know something that an institution decided to hide decades earlier.

Automatic declassification recognizes a truth about secret information: sensitivity often decays.

A military plan for tomorrow can be dangerous to disclose today and historically valuable to disclose fifty years later. A diplomatic negotiation can require confidentiality while active and public understanding after the participants leave office. Intelligence sources and methods may require much longer protection than ordinary policy deliberation. Personal information inside government records can retain privacy sensitivity after national-security sensitivity has vanished.

Different harms have different half-lives.

This is precisely the expiration-layer problem.

The object is not simply “secret.” It is restricted for a purpose, under a category of harm, for a period that should reflect how long that harm remains plausible.

Corporate secrecy is usually less disciplined.

Companies mark documents confidential and rarely revisit the label. Shared drives accumulate strategy decks for products that no longer exist. Former acquisition targets remain hidden long after the deal died. Internal investigations remain restricted under rules nobody can explain. Employee information is copied into folders whose access lists outlive the managers who created them.

The result is not merely excessive secrecy.

It is bad information architecture.

If everything is confidential forever, the label loses meaning. Employees become less careful because ordinary material and genuinely dangerous material look the same. Search systems cannot distinguish current sensitivity from historical habit. AI assistants connected to corporate knowledge either become too constrained to help or too permissive to be safe.

Secrecy needs lifecycle metadata.

Why is this restricted?

Who can remove the restriction?

What event changes the risk?

Does the restriction protect the company, an individual, a counterparty, a legal process, or the public?

When should it be reviewed?

Some secrets should expire automatically.

A product launch date becomes public when the product launches. A temporary password should die after use. A vulnerability embargo should end after coordinated disclosure or a defined safety process. A board packet may become less sensitive after a transaction closes, though fiduciary, personal, or legal material can remain restricted. An employee’s personal data may deserve privacy protection long after its operational usefulness ends.

Again, one document can contain information with multiple clocks.

This makes whole-document classification crude.

AI will make the crudity harder to tolerate because models work by recombination. A human can open a confidential deck and understand that one slide contains a still-sensitive customer name while another contains a strategy from five years ago that is now public knowledge. A retrieval system may treat the entire document as one security object.

The future will need finer-grained temporal access.

That does not necessarily mean classifying every sentence manually. Systems can inherit labels from sources, separate personal data, track public release events, and allow owners to review high-value restrictions. The goal is not perfect semantic secrecy. It is to stop assuming that a label applied once should govern every future use.

There is a mirror image: secrets that should not expire merely because time passed.

A survivor’s private medical history does not become public interest because fifty years elapsed. A confidential source may face danger long after publication. Cryptographic material can remain sensitive as long as it unlocks something valuable. Trade secrets can retain value indefinitely if they remain secret and commercially useful under applicable law. Personal correspondence can deserve privacy even when historians would love to read it.

The expiration layer cannot turn age into entitlement.

The renewal test has to ask whether the protected interest still exists.

This is why automatic declassification systems contain exemptions. A serious expiration architecture always needs a way to preserve restrictions when the original risk survives.

The problem is making extension costly enough that “keep secret” is a decision rather than a reflex.

If an agency can extend classification with no specific justification, the clock becomes decorative. If a corporation can click “confidential forever” by default, review becomes theater. If every archive restriction is renewed because opening the record creates work, administrative convenience becomes a secrecy doctrine.

Renewal proof matters.

The institution should be able to state the current harm disclosure could cause, not merely repeat the historical reason for restriction.

This distinction is crucial for democracy because secrecy changes accountability.

A government can reasonably keep some operational information secret while a threat is active. If the same information remains hidden after the threat disappears, secrecy can prevent citizens from evaluating what was done in their name. Historical disclosure is not just for historians. It is delayed oversight.

Expiration can therefore reconcile two values that appear opposed: operational secrecy and eventual accountability.

Keep the plan secret while disclosure would defeat the plan.

Preserve the record so the public can later understand the plan.

The archive becomes the bridge.

Deletion is not the answer.

A government that solved excessive secrecy by destroying old classified records would create a worse problem. The public would gain neither present access nor future accountability. A corporation that deletes every sensitive internal record as soon as its immediate purpose ends could destroy evidence needed for litigation, safety investigation, compliance, or learning.

The temporal states should be separate: active secret, restricted archive, declassified or released, deleted under a legitimate retention policy.

These are not interchangeable outcomes.

The same applies to personal AI.

A user may tell an assistant something private for a temporary purpose: a surprise party, a job search, a medical concern, a planned resignation, a gift, a financial problem, a confidential negotiation. The assistant may need the information for days or months.

Should it remember forever?

The answer should not default to yes simply because memory is useful.

Some secrets have obvious event-based expiry. Once the surprise party happens, the assistant no longer needs to proactively protect the date from the guest of honor in the same way. Once a job search ends, related instructions can leave active memory. Once a transaction closes, negotiation positions can become historical rather than operational.

Other private facts remain sensitive indefinitely.

The user should control that distinction.

A powerful personal agent might eventually support something like sealed memory: information available only for a named purpose, inaccessible to ordinary personalization, and automatically demoted or deleted when the purpose ends.

This would be privacy by temporal scope rather than privacy by one giant account-level switch.

It also solves a social problem. People disclose more when they know context has boundaries.

Human conversation depends on this. A friend tells you something “for tonight.” A colleague shares information “until the announcement.” A lawyer receives privileged information for representation. A doctor receives medical information for care. Context governs not only who may know but what later uses are appropriate.

Digital memory tends to erase those boundaries because all stored text looks equally retrievable.

The expiration of secrets restores context.

There is a final paradox. Some secrets become more dangerous with time.

A cryptographic key that protects an archive can become a larger target as the archive grows. A database of personal information can accumulate value. A password reused across systems can become riskier as breaches occur. A private dataset can become more revealing when combined with future datasets.

Age does not always reduce sensitivity.

Sometimes the secret should expire by destroying the capability rather than releasing the information.

Rotate the key.

Delete the credential.

Tokenize the identifier.

Remove the raw data when the purpose ends.

Secrecy and retention are different clocks.

A secret can stop being secret because disclosure is safe. Or it can stop existing because continued possession is unsafe. The correct path depends on why it was protected.

That distinction may become one of the central governance problems of an AI-rich world. Models and agents will have access to enormous stores of information whose sensitivity changes over time, across contexts, and across users. “Authorized once” will not be enough.

The system will need to know not only whether information is secret.

It will need to know what the secret is waiting for.