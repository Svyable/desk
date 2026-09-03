# Book brief — Blind by Design

## Working title

**Blind by Design**  
**Subtitle:** *How Trust Is Built by Keeping Information Out*

**Author:** Sven Hardy Benson

## Premise

Modern institutions usually describe information as an unqualified good. Better decisions require more data. Better managers know more. Better markets reveal more. Better governments disclose more. Better software connects more context. Ignorance is what education, transparency, instrumentation, analytics, and search are supposed to eliminate.

That story is incomplete.

Some of the systems people trust most work because somebody is deliberately prevented from knowing something.

A secret ballot asks the state to count a vote while making it difficult for an employer, party boss, spouse, buyer, or intimidator to verify how a particular person voted. A blinded clinical trial may prevent patients, investigators, assessors, or analysts from knowing treatment assignments because expectations can change care, reporting, measurement, and interpretation. A sealed-bid procurement process requires bids to remain unopened until a stated time so one bidder's price cannot become another bidder's input. A witness can be excluded from the courtroom while another witness testifies. A paper can be reviewed without the reviewer's knowing the author's identity. A bank can build an information barrier between teams whose access to the same confidential facts would create a conflict. A password system can verify a credential without storing the password itself in recoverable form. A zero-knowledge proof can establish that a mathematical statement is true without revealing the secret information that makes it true.

These arrangements look unrelated if information is treated only as content. They look like members of the same family if information is treated as an input that can change behavior.

The central argument of *Blind by Design* is that **selective ignorance is infrastructure**. Trustworthy systems do not merely decide what information to collect and disclose. They decide what information particular actors must not receive, when they must not receive it, and how outsiders can verify that the boundary was respected.

The last clause matters. An official who says “I chose not to look” has not created a trustworthy information barrier. A voter who is told that a ballot is secret needs more than a promise. A bidder needs confidence that rival bids stayed sealed until the deadline. A clinical trial needs allocation concealment and blinding procedures that survive contact with real treatment effects, side effects, emergencies, and operational mistakes. A cryptographic proof is valuable because the verifier does not have to trust the prover's restraint; the protocol defines what can be learned.

This is therefore not a celebration of ignorance. It is a book about the architecture of **not knowing on purpose**.

## Novelty boundary

There is a substantial scholarly literature on ignorance. Agnotology studies the production and maintenance of ignorance. Work on strategic ignorance examines cases in which people avoid information, sometimes to preserve self-image, bargaining advantage, plausible deniability, or freedom to behave selfishly. Linsey McGoey's work argues that ignorance can operate as an organizational resource and a source of power. Economics papers examine deliberate information avoidance in bargaining, delegation, prosocial choices, and risk.

That literature is adjacent and important, but it is not the book's thesis.

*Blind by Design* focuses on a narrower and more constructive institutional problem: **when does a system become fairer, more independent, more private, or more credible because it can prove that a decision maker did not possess certain information?** The book moves from secret ballots and blinded trials through sealed bids, courts, peer review, finance, privacy engineering, authentication, cryptographic commitments, and zero-knowledge proofs. The connective tissue is not ignorance as weakness or evasion. It is ignorance as a deliberately enforced constraint on influence.

The book should not claim that nobody has ever noticed any of these mechanisms, or that “designed ignorance” is a new phrase. The defensible white space is the cross-domain trade-book synthesis and the distinction between *withholding information to protect a process* and *withholding information to escape accountability*.

That distinction must survive every chapter. If the manuscript begins treating secrecy itself as virtuous, it has failed.

## Audience

The primary reader is a general nonfiction reader who enjoys discovering a hidden structure underneath institutions they already use: voting booths, prescriptions, auctions, passwords, courts, exams, hiring processes, and software.

Secondary readers include policymakers, lawyers, researchers, product designers, security engineers, privacy practitioners, executives, auditors, and people building autonomous systems. The book should reward domain experts with accurate mechanics while remaining understandable to someone who has never read a clinical-trial protocol or a cryptography paper.

The strongest reader experience is recognition. After enough cases, the reader should begin asking a new question whenever a system claims to be fair or trustworthy: **What information was the decision maker allowed to see?**

## Voice

Calm, exact, skeptical, and slightly counterintuitive. Begin with procedures and objects rather than declaring a grand theory. A ballot booth, a blinded treatment code, a locked bid box, a witness waiting outside a courtroom, a salted password hash, and a cryptographic proof can carry the argument without decorative futurism.

Avoid treating ignorance as mystical wisdom. The book is not about intuition, spiritual unknowing, information overload, media avoidance, or the psychological benefits of knowing less.

Avoid easy claims that blind procedures automatically remove bias. They do not. A process can hide one attribute while preserving ten proxies. Blind review can move discrimination to another stage. A secret ballot can coexist with intimidation outside the polling place. A clinical trial can become effectively unblinded when treatments have obvious side effects. An information barrier can fail through informal contact, shared incentives, or weak controls.

The interesting question is always specific: what causal path from information to influence is the barrier trying to interrupt, and what evidence shows that it actually does so?

## Argument spine

The first movement begins with institutions that make blindness tangible.

The secret ballot is an information design whose value depends partly on making a person's vote difficult to prove to someone who might reward or punish it. Blinded clinical trials suppress treatment knowledge because knowing can alter treatment, reporting, assessment, and interpretation. Sealed bidding keeps prices hidden until a deadline because premature disclosure changes the game. Zero-knowledge proofs take the idea to its mathematical extreme: a verifier can gain confidence in a claim without receiving the secret that would normally serve as evidence.

The second movement moves through professions and adjudication. Witness sequestration, evidentiary exclusions, anonymous review, blind grading, auditions, information barriers, and clean rooms are attempts to prevent one fact from contaminating another judgment. Some work better than their reputations suggest. Others work less well. The manuscript should use the mixed evidence as an asset rather than forcing a universal rule.

The third movement turns from human judgment to technical architecture. Password hashing, cryptographic commitments, access control, data minimization, compartmentalization, and privacy-enhancing computation all recognize a principle that organizations often learn too late: information that was never available cannot be leaked, misused, subpoenaed from that holder, casually browsed, or unconsciously allowed to change a decision. This does not make collection-free systems possible in every case. It changes what “secure” means.

The final movement asks where blindness becomes dangerous. Information barriers can protect conflicts or conceal them. Compartmentalization can limit damage or keep leaders ignorant of abuse. “Need to know” can become a shield against oversight. A manager who deliberately avoids bad news may preserve deniability while destroying accountability. A machine constrained to limited context may protect privacy while missing information necessary to prevent harm.

The conclusion should therefore reject both maximal transparency and maximal secrecy. A trustworthy system makes its information boundaries legible. It can explain what is hidden, from whom, for how long, for what purpose, and by what procedure the hidden information can be audited when necessary.

The paradox is that public trust can require private information.

## Planned chapters

1. **The Vote You Cannot Prove** — secret ballots, coercion, vote buying, and why democratic privacy depends on more than a curtain.
2. **The Treatment Nobody Knows** — blinding in clinical trials and the attempt to keep expectations from becoming evidence.
3. **The Bid Behind the Envelope** — sealed bidding, deadline integrity, and why prices must sometimes be public only after they were private.
4. **Prove It Without Telling Me** — zero-knowledge proofs and the invention of evidence that reveals less than the secret itself.
5. **The Witness Outside the Room** — witness sequestration and the problem of testimony contaminated by other testimony.
6. **The Jury That Cannot Unsee** — inadmissible evidence, limiting instructions, mistrials, and the hard boundary between information exclusion and human memory.
7. **The Anonymous Paper** — peer review, reviewer identity, author identity, status signals, and evidence about whether blinding changes judgment.
8. **The Audition Behind the Screen** — blind auditions, the famous economics result, later disputes, and why simple anti-bias stories deserve rechecking.
9. **The Information Barrier** — securities firms, confidential information, conflicts, surveillance, and the operational difficulty of keeping teams apart inside one company.
10. **The Clean Room** — controlled environments for competitively sensitive data, advertising measurement, due diligence, and collaborative analysis without unrestricted access.
11. **Need to Know** — compartmentalization in intelligence and security, and the trade between limiting exposure and preventing synthesis.
12. **The Password Nobody Stores** — one-way password representations and why a verifier should not need possession of the secret it verifies.
13. **Commit Before You Reveal** — cryptographic commitments, sealed-envelope logic in digital systems, and preventing one party from changing an answer after seeing another's.
14. **The Name Off the Exam** — anonymous grading, hiring screens, and the limits of hiding identity after history has already left clues.
15. **The Randomizer** — random assignment as a way to remove discretion before outcome information arrives.
16. **The Data You Never Collect** — data minimization, privacy by design, retention limits, and the security value of absent data.
17. **The Firewall Between Roles** — separation of duties, dual control, internal audit, and systems that distribute knowledge so no single actor can silently complete the whole action.
18. **The Price of Blindness** — lost context, slower decisions, duplicated work, unblinding, proxy variables, and the situations in which more information really is better.
19. **When Not Knowing Becomes Negligence** — plausible deniability, willful blindness, organizational silence, and the moral boundary of designed ignorance.
20. **The Right Not to Know** — genetic information, incidental findings, personal autonomy, and cases where the person protected from information is the person the information concerns.
21. **Machines on a Need-to-Know Basis** — autonomous agents, least privilege, contextual minimization, private data, and why capable systems may need less access rather than more context.
22. **Blind by Design** — a final argument for explicit, auditable information boundaries rather than reflexive transparency or reflexive secrecy.

## Research standard

Concrete claims should prefer primary sources and official procedures wherever possible.

Election chapters should use electoral commissions, statutes, court opinions, and historical election records. Clinical-trial chapters should use FDA, ICH, trial protocols, peer-reviewed methodology, and major systematic reviews. Procurement chapters should use the Federal Acquisition Regulation and documented auction research. Court chapters should use the Federal Rules of Evidence, judicial opinions, and empirical legal scholarship. Finance chapters should use SEC, FINRA, bank-policy material, and enforcement records. Privacy and security chapters should use NIST, standards bodies, legislation, and primary technical documentation. Cryptography chapters should trace definitions to original papers and current standards work rather than relying on promotional material from cryptocurrency projects.

The source trail should preserve negative and mixed findings. In particular:

- secrecy can reduce coercion while making individual verification harder;
- blinding can fail in practice and is impossible in some interventions;
- anonymous review may reduce some status signals while leaving textual or institutional clues;
- identity masking can hide accountability as well as bias;
- information barriers can become ceremonial rather than operational;
- compartmentalization can stop leaks while preventing necessary coordination;
- data minimization can make retrospective investigation harder;
- zero-knowledge systems can preserve secrecy while implementation flaws, metadata, or surrounding protocols leak information;
- deliberate ignorance can become willful blindness when an actor has a duty to know.

The book's thesis should become narrower if the evidence demands it. The goal is not to prove that less information produces better decisions. It is to show that **information itself can be a source of influence and risk, so trustworthy systems sometimes have to govern absence as carefully as presence.**
