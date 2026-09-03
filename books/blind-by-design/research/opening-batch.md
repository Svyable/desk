# Opening-batch evidence and falsification notes

## Scope

This note supports Chapters 1–4 of *Blind by Design*. The opening batch intentionally moves across elections, clinical research, public procurement, and cryptography. The shared claim is not that all secrecy is good. It is that some trustworthy processes deliberately keep a particular fact away from a particular actor during a period when possession of that fact could distort the process, create coercive leverage, or produce unnecessary privacy risk.

## Chapter 1 — The Vote You Cannot Prove

### Evidence used

The Australian Electoral Commission describes public voting before the 1850s as leaving voters vulnerable to intimidation and coercion and identifies the Australian ballot reforms of that period with the development of secret voting.

The U.S. Election Assistance Commission's Voluntary Voting System Guidelines treat ballot secrecy as a system property. The guidelines state that a voting system should not create records or artifacts capable of associating voter identity with voter intent or selections.

The Supreme Court's 1992 *Burson v. Freeman* opinion reviews U.S. ballot history and describes how distinctive party tickets and observable voting practices enabled bribery and intimidation before Australian-style ballot reforms spread. The chapter uses that history to support the narrower claim that secrecy reduces the ability of a coercer or buyer to verify compliance.

### Claims the prose should not make

- Do not claim the secret ballot eliminates coercion or vote buying. Pressure can occur outside the polling place and remote voting can create different exposure paths.
- Do not claim secrecy makes election systems self-verifying. Ballot privacy has to coexist with chain of custody, audits, recounts, testing, observation, and other forms of process transparency.
- Do not claim every jurisdiction implements ballot secrecy identically.
- Do not claim a voter can never create evidence of a vote. Photos, assisted voting, remote environments, and other practices can weaken practical secrecy.

### Falsification target

The chapter's stronger causal claim is that making political obedience difficult to verify reduces a coercer's or buyer's ability to enforce the demanded vote. The historical record strongly motivates the mechanism, but later research should distinguish the effect of secret ballots from contemporaneous reforms such as official ballot printing, restricted polling-place access, professional election administration, and anti-bribery enforcement.

## Chapter 2 — The Treatment Nobody Knows

### Evidence used

FDA's E9 Statistical Principles for Clinical Trials identifies blinding and randomization as central design techniques for avoiding bias. The guidance states that treatment knowledge can influence recruitment, allocation, subsequent care, subject attitudes, endpoint assessment, withdrawals, data exclusions, and interpretation. It also recognizes that blinding can be compromised by apparent treatment effects, that some interventions cannot feasibly or ethically be double-blinded, and that treatment codes may need to be broken for patient care.

FDA guidance on Bayesian statistics for medical-device trials separately explains that masking clinicians can reduce intended or unintended differences in patient care and outcome evaluation while masking patients can reduce expectation-related bias.

### Claims the prose should not make

- Do not say every rigorous clinical trial must be double-blind. Some interventions make blinding impossible or unethical and some outcomes are less susceptible to particular biases.
- Do not imply a nominally blinded trial is necessarily effectively blinded. Side effects, administration differences, laboratory results, or protocol details can reveal allocation.
- Do not imply blinding substitutes for randomization, allocation concealment, prespecification, data quality, or appropriate statistical analysis.
- Do not treat every effect of expectation as fraud. The chapter's point is that sincere people can still be influenced by treatment knowledge.

### Falsification target

The book's broader thesis would weaken if withholding treatment information had no meaningful effect on judgment or behavior under realistic trial conditions. Later research should draw on meta-epidemiological evidence about blinded versus unblinded outcome assessment rather than relying only on regulatory rationale.

## Chapter 3 — The Bid Behind the Envelope

### Evidence used

Federal Acquisition Regulation 14.101 defines sealed bidding as a sequence involving competitive bids, public opening, evaluation without discussions, and award. FAR 14.401 requires timely bids to remain secure and generally unopened and unviewed before the opening time. Even the identity and number of bids received are subject to limited need-to-know disclosure before opening.

The chapter uses those rules to make a timing argument: the same information that would change a live competition if disclosed early can support transparency and accountability once all bidders have crossed the submission boundary.

### Claims the prose should not make

- Do not claim sealed bidding is the best procurement method for every acquisition. Federal rules themselves limit its use to circumstances where discussions are unnecessary and award can be made under the relevant price and price-related conditions.
- Do not claim sealed bidding eliminates collusion, corruption, bid mistakes, or favoritism.
- Do not equate electronic bidding with perfect concealment. Digital access controls, logs, keys, administrators, and software all create their own trust assumptions.
- Do not claim public opening makes the entire procurement record immediately or universally public in every context.

### Falsification target

The chapter's mechanism is that simultaneous or rule-timed revelation preserves more independent competitive commitments than sequential disclosure. Later research should compare sealed, open, ascending, descending, and negotiated mechanisms rather than assuming that secrecy always improves price discovery.

## Chapter 4 — Prove It Without Telling Me

### Evidence used

Goldwasser, Micali, and Rackoff's 1985 work on the knowledge complexity of interactive proof systems is the foundational academic source. NIST's Privacy-Enhancing Cryptography project gives the current operational description used in the chapter: a zero-knowledge proof can prove a mathematical statement without revealing additional information that may have been useful in establishing its truth; proofs of knowledge can establish possession of a secret witness consistent with a public instance.

The chapter uses age and income-threshold examples as illustrative architectures, not as claims about universal deployment. It distinguishes the cryptographic witness from the larger system that authenticates real-world facts.

### Claims the prose should not make

- Do not imply zero-knowledge systems reveal literally nothing in every practical sense. Statements, metadata, timing, network information, side channels, software flaws, setup assumptions, and surrounding protocols can leak information.
- Do not imply a proof can establish that an off-chain real-world fact is true without some trusted path by which that fact entered the cryptographic system.
- Do not imply all zero-knowledge systems are interactive or share one performance/security model.
- Do not present cryptocurrency implementations as the definition of zero knowledge.

### Falsification target

The chapter's institutional claim is not that zero knowledge solves privacy. It is that verification need not always require disclosure of the underlying witness. The claim would be overstated if later chapters treat cryptographic non-disclosure as equivalent to full-system privacy or ignore the trust concentrated in credential issuers, devices, key management, and implementations.

## Cross-book novelty boundary

The manuscript must distinguish itself from the literature on agnotology and strategic ignorance. Work such as Linsey McGoey's studies how ignorance can be produced, maintained, or used as an organizational resource; economics research studies deliberate information avoidance for self-image, bargaining, delegation, or strategic reasons. Those are counterweights, not evidence that ignorance is inherently beneficial.

The book's defensible white space is narrower: a cross-domain account of **protective information absence** in systems that intentionally prevent a relevant actor from receiving a fact because possession itself creates coercive power, bias, strategic adaptation, conflict, or privacy risk.

The thesis should fail gracefully at the boundary. When an actor has a duty to know, when secrecy protects the powerful rather than the process, when excluded information is necessary to prevent harm, or when a blind procedure merely hides accountability, the case belongs on the other side of the argument.
