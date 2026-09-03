# Opening-batch evidence and falsification notes

## Scope

This note supports Chapters 1–3 of *Built to Undo*. The opening batch is deliberately cross-domain: software cancellation and version history, crew escape and consumer cancellation, then bankruptcy discharge. The shared claim is narrower than “all of these literally undo the past.” They preserve a route by which a commitment, state, or obligation can be stopped or changed after an initial action.

## Chapter 1 — Five Seconds Back

### Evidence used

Google Workspace Updates records that Gmail made Undo Send a formal web setting on June 23, 2015 after it had been available as a Gmail Labs feature. Current Google guidance describes a Send cancellation period configurable to 5, 10, 20, or 30 seconds and says selecting Undo returns the message to draft state.

The Git Project's documentation defines version control as recording changes over time so specific versions can be recalled later. `git revert` is more precise than the ordinary interface metaphor of undo: it records new commits that reverse the effect of earlier commits rather than requiring shared history to be erased.

### Claims the prose should not make

- Do not claim Gmail retrieves a message that a recipient has already read. Google's documented mechanism is a cancellation window, and the chapter treats that boundary as the point.
- Do not claim Undo Send was invented in 2015. The 2015 source says the feature already existed in Gmail Labs.
- Do not claim Git makes every change recoverable. Git's own undo documentation warns that some local uncommitted work can be lost and distinguishes revert, reset, and restore.
- Do not universalize the behavioral claim that reversible interfaces always make users faster. The current chapter presents that as a design implication and thought experiment, not a measured effect size.

### Falsification target

The chapter's mechanism would weaken if a cancellation window did not materially preserve a distinct pre-final state, or if the comparison to version-control reversal blurred prevention and restoration. The prose therefore distinguishes stopping before completion from reversing effects after a state is shared.

## Chapter 2 — The Exit Is Part of the Machine

### Evidence used

NASA records that Pad Abort-1 occurred May 6, 2010 at White Sands Missile Range and tested the Orion launch abort system by pulling a boilerplate crew module away from the pad before separation and parachute landing. NASA's current Orion reference material says the launch abort system is designed to carry crew to safety during a launch or ascent emergency and can activate within milliseconds.

The FTC's Cooling-Off Rule provides a separate institutional example. The rule applies to defined door-to-door and certain away-from-business-premises sales over the rule's threshold and requires disclosure of a right to cancel within three business days. It is not a general three-day cancellation right for all purchases.

### Claims the prose should not make

- Do not describe a launch abort as undoing a launch. It sacrifices the forward mission path to preserve crew escape.
- Do not imply that an abort system is costless or unambiguously safety-improving in every architecture. Escape capability adds hardware, software, testing, mass, procedures, and possible failure modes.
- Do not generalize the FTC rule to internet purchases, ordinary retail purchases, or every contract.
- Do not claim staging is always safer. A staged rollout can still expose people to harm, produce misleading evidence, or delay a necessary full intervention.

### Falsification target

The chapter's claim is not that exits are universally good. It is that a credible exit can be part of the operational capability and can change the acceptable risk of entry. Future chapters need empirical cases where a designed exit clearly changed adoption, deployment speed, financing, or experimentation rather than merely existing as a passive safety feature.

## Chapter 3 — The Fresh Start Machine

### Evidence used

The Administrative Office of the U.S. Courts describes a fundamental goal of federal bankruptcy law as giving debtors a financial fresh start from burdensome debts. Its Chapter 7 guidance states that one primary purpose of bankruptcy is discharging certain debts for an honest individual debtor while noting that the right to discharge is not absolute, some debts are not discharged, and liens may survive.

The U.S. Courts bankruptcy process guidance quotes the Supreme Court's 1934 *Local Loan Co. v. Hunt* formulation that bankruptcy gives the honest but unfortunate debtor a new opportunity in life and a clear field for future effort. The chapter uses that language to distinguish ending enforceability from erasing history.

Git appears again only as a contrast: a public software mistake can be counteracted by a later revert while the original change remains in history. The analogy is structural, not legal.

### Claims the prose should not make

- Do not describe bankruptcy as erasing all debt or returning all parties to their pre-loan condition.
- Do not imply creditors bear no legitimate loss when debt is discharged.
- Do not claim bankruptcy alone causes entrepreneurship, risk-taking, or economic dynamism without later empirical support.
- Do not collapse legal expungement, contract termination, patent expiration, data deletion, and bankruptcy into one doctrine. They appear as examples of institutions limiting how long a past state remains operative; their rules differ.

### Falsification target

The fresh-start argument would be overstated if discharge merely redistributed loss without preserving meaningful future productive capacity, or if more permissive discharge produced offsetting harms to credit access large enough to dominate the benefit. Later research should examine comparative bankruptcy regimes and the empirical literature on entrepreneurship, household labor supply, credit pricing, and repeat filing before making causal claims.

## Cross-book novelty boundary

The manuscript must not advertise itself as the first work ever to discuss reversibility. Hartmut Behr's 2024 book treats reversibility in political responsibility, and ecological-economics literature has explicitly analyzed revocability and reversal costs. The book's defensible novelty is the narrative synthesis across ordinary interface design, law, finance, engineering, medicine, computing, and governance, with a repeated distinction among cancellation, restoration, counteraction, exit, compensation, and true irreversibility.
