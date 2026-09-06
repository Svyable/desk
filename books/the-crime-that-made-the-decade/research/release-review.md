# Release review — The Crime That Made the Decade

## Decision — September 6, 2026

**Complete first draft; not release-cleared.**

The manuscript now contains front matter/prologue, 25 of 25 numbered chapters, back matter, rights files, a research brief, source ledger, and runner-up challenge matrix. The architecture is complete from 1776–1785 through 2016–2025.

Publication remains blocked on substantive evidence and mechanical gates. This status is intentional: completion of a narrative first draft is not evidence that the book is ready for Shelf.

## What is already strong

- The book has one governing selection rule: **criminal afterlife**, not fame, gore, body count, or sensationalism.
- Every era has a recorded runner-up capable of displacing the current selection if evidence supports the change.
- The manuscript explicitly separates allegation, conviction, acquittal, pardon, commutation, vacatur, exoneration, and unsolved status.
- The prior-art boundary does not make an unsupported “first ever” claim.
- Modern high-risk chapters have been checked against official sources before being completed.
- Rights files use the Desk all-rights-reserved profile and reserve AI/generative reuse rights.

## Modern-source checks completed in this pass

### Chapter 17 — Korematsu

National Archives materials confirm that Korematsu was convicted for resisting exclusion, the Supreme Court upheld the conviction in 1944, and the federal district court vacated the conviction in 1983 after evidence showed relevant government intelligence reports had been intentionally suppressed or destroyed. Preserve the procedural distinction: the Supreme Court did **not** itself reverse the 1944 criminal judgment in 1983.

### Chapter 18 — Emmett Till

DOJ's 2021/2022 closure materials confirm the 1955 murder prosecution and acquittal of Roy Bryant and J. W. Milam and their later published admission to kidnapping and murdering Till. DOJ could not substantiate the later-reported recantation attributed to Carolyn Bryant Donham. Do not write the alleged recantation as established fact.

### Chapter 19 — 16th Street Baptist Church bombing

FBI materials support the death of four girls, the four principal Klan suspects, Robert Chambliss's 1977 conviction, Thomas Blanton's 2001 conviction, Bobby Frank Cherry's 2002 conviction, and Herman Cash's death before trial. Preserve the evidentiary/jurisdictional complexity around the failure to prosecute in the 1960s rather than reducing it to a single unsupported Hoover-blocked-the-case narrative.

### Chapter 20 — Watergate

National Archives materials support the June 17, 1972 burglary, the expanding investigation into presidential abuses, and Nixon's August 9, 1974 resignation under threat of impeachment. *United States v. Nixon* remains the controlling primary legal source for the tapes/executive-privilege discussion.

### Chapter 21 — Tylenol

FDA materials support seven Chicago-area deaths from cyanide-laced Tylenol capsules, 1982 tamper-resistant packaging regulation, and the 1983 Federal Anti-Tampering Act. Preserve the distinction that James Lewis was convicted of extortion related to the crisis, not of the murders; the murders remain unsolved.

### Chapter 22 — Oklahoma City

FBI materials support 168 deaths including 19 children, McVeigh's arrest after an Oklahoma traffic stop, the evidence trail through the rented Ryder truck, Nichols's involvement, and the scale of the federal investigation. “Homegrown terrorism” is well supported as the institutional frame.

### Chapter 23 — September 11

The 9/11 Commission Report supports the attack reconstruction and the Commission's four broad categories of failure: imagination, policy, capabilities, and management. The chapter must keep Iraq analytically distinct from responsibility for September 11: al Qaeda carried out the attacks; Iraq did not.

### Chapter 24 — Madoff

SEC Inspector General materials support the conclusion that the SEC missed numerous opportunities to uncover the Ponzi scheme despite receiving credible warning information. DOJ materials support Madoff's March 12, 2009 guilty plea to eleven federal felonies and June 29, 2009 sentence of 150 years. Any dollar figure must label whether it refers to fictional account balances, principal losses, forfeiture recoveries, or victim distributions.

### Chapter 25 — January 6

DOJ trial materials support Oath Keepers and Proud Boys seditious-conspiracy convictions. *Fischer v. United States*, 603 U.S. 480 (2024), narrowed the scope of 18 U.S.C. §1512(c)(2); it did not hold the Capitol breach lawful or invalidate every January 6 conviction. The January 20, 2025 presidential proclamation commuted specified sentences, pardoned other covered federal defendants, and directed dismissal with prejudice of covered pending federal indictments. Clemency must not be described as appellate exoneration.

## Required substantive work before release

1. **Primary-source audit chapters 1–16.** The existing source ledger identifies the right source families, but every material date, legal status, quoted/closely paraphrased claim, causal reform claim, and contested historical assertion needs chapter-level verification.
2. **Pinpoint source map.** Add a chapter-source map tying each numbered chapter to the exact primary/official source(s) and the narrow claims each source supports.
3. **Causation audit.** Search every chapter for verbs such as “caused,” “created,” “led to,” “produced,” and “changed.” Replace single-cause language where the evidence only supports catalyst, acceleration, contribution, or symbolic effect.
4. **Victim-centering pass.** Confirm that institutional analysis does not reduce victims to legislative or doctrinal triggers.
5. **Selection challenge.** Re-run the runner-up matrix after primary-source review. In particular, pressure-test Teapot Dome against Tulsa and the Osage murders; Leo Frank against representative racial lynching cases; and Hamilton–Burr against the Sedition Act prosecutions.
6. **Current-politics neutrality pass.** Chapter 25 must stay anchored in conduct, court records, judicial holdings, and the text of the clemency proclamation, with political characterizations attributed rather than adopted as the narrator's voice.
7. **Novelty language.** Preserve the prior-art boundary. Do not market the book as the first decade-by-decade American crime history without a formal bibliographic review that can support that claim.

## Required mechanical work before release

Run the standard Desk release method on one frozen commit:

1. `python3 scripts/check-book-length.py the-crime-that-made-the-decade`
2. Require at least 18 numbered chapters, every numbered chapter at or above 3,000 words, and at least 65,000 numbered-chapter words unless an explicit documented exception applies.
3. Expand short chapters substantively. Do not pad. Depth should come from primary-source scenes, adversarial evidence, runner-up comparison, legal mechanism, and consequences.
4. Run `python3 scripts/check-desk.py` on the same frozen source.
5. Register catalog/discovery surfaces only against the then-current `main` snapshot so this manuscript PR does not overwrite concurrent generated Desk state.

## Publication boundary

No Shelf edition should be created from this review state.

The next meaningful milestone is **research-audited expanded draft**, not release. Once the primary-source and chapter-depth work is complete, refreeze Desk, rerun the four release gates, and update this decision with exact evidence rather than a generic “ready” declaration.
