# Chapters 5–8 — research controls

This note prepares a coherent four-chapter revision pass without borrowing the later chapters' evidence wholesale. The run should move from the cost of searching among abundant options, through calibrated trust and signaling, into the governance problem created when variation itself becomes cheap.

## Chapter 5 — The Cost of Choosing

The chapter should not become a second version of Chapter 19's choice-overload argument. Its cleaner economic mechanism is search itself: information has value, but acquiring and processing another unit of information also has a cost.

George Stigler's 1961 paper, “The Economics of Information,” formalized search as an economic activity rather than assuming decision-makers possess all relevant information for free. Herbert Simon's 1955 “A Behavioral Model of Rational Choice” is useful for the complementary bounded-rationality point: real decision-makers simplify rather than solve an unlimited optimization problem over every conceivable alternative.

Use these sources to support the stopping-rule argument, not to pretend either paper studied generative AI. Cheap generation reduces the production cost of another option or another analysis; it does not make the reader's attention, delay, verification, or opportunity cost zero. The manuscript can therefore distinguish a search that remains information-poor from one where another generated alternative has little realistic chance of changing the decision.

Do not claim that “satisficing” always beats optimization. Better search can produce materially better matches, and machine ranking can reduce human inspection cost. The scarcity claim is conditional: as option production gets cheaper, the economic importance of deciding when additional search is no longer worth its downstream cost can rise.

Falsification / counterevidence: if automated search, ranking, simulation, and verification reduce selection cost as fast as generation expands the option set, the chapter should narrow from a general decision bottleneck to settings where objectives, uncertainty, or irreversible consequences still make stopping costly.

## Chapter 6 — The Trust Premium

Trust should not be framed as a permanent human premium. Two well-known experimental literatures point in opposite directions and are valuable precisely because of that tension.

Dietvorst, Simmons, and Massey's 2015 experiments on algorithm aversion found that people became less willing to use an algorithm after observing it make errors, even when it still outperformed human forecasters. That supports the manuscript's point that trust depends on observed failure, perceived control, and context rather than average accuracy alone.

Logg, Minson, and Moore's 2019 “Algorithm appreciation” experiments provide strong counterevidence to any universal aversion story: in head-to-head comparisons, participants often placed more weight on algorithmic than human advice. The pair should be used to show that source identity by itself does not determine trust.

This chapter should therefore keep its premium attached to governability and recourse: scoped evidence, auditability, stable process, contractual responsibility, the ability to test the result, and what happens after failure. A trusted machine process can beat a human one; a trusted human can matter where the consequence cannot be exhaustively verified. The market can reprice both directions.

Falsification / counterevidence: if direct verification becomes cheap and reliable enough, many credential- or relationship-based trust premiums should shrink. Conversely, if users systematically over-trust fluent systems, the relevant scarcity may become calibrated skepticism rather than confidence in a particular producer.

## Chapter 7 — Proof of Effort

Keep this chapter distinct from Chapter 16's evidence on the effort heuristic and Chapter 23's handmade premium. Chapter 7 is about inference: what does a finished artifact tell the receiver about the process, capability, or costly commitment behind it?

Michael Spence's 1973 job-market signaling model is a useful conceptual control. In the model, an observable signal can affect beliefs because it is differentially costly for different types to obtain; the signal need not itself create the underlying productivity being inferred. The model is not evidence that effort reliably signals quality in AI-mediated work. It gives the chapter a precise reason to ask what happens when technology collapses the cost of producing an old signal.

The implication should stay narrow. If polished prose, code, design, or presentation once carried some information about time, training, or access to skilled labor, cheaper generation can weaken that inference even when the artifact remains useful. Receivers may then shift toward evidence that is harder to reproduce cheaply: live adaptation, version history, demonstrated performance, references, responsibility, or longitudinal outcomes.

Preserve the welfare warning already present in the chapter. Signal replacement can be wasteful. Institutions can respond to cheap old signals by inventing harder tests, more credentials, surveillance, or ceremonial manual work that raises cost without measuring the quality they actually care about.

Falsification / counterevidence: some generated artifacts can be verified directly, making process history irrelevant. In those cases the right response to signal decay is not a new proof-of-effort ritual but performance-based verification.

## Chapter 8 — Infinite Versions

This chapter needs evidence on both sides of adaptive variation: tailoring can improve outcomes, while choice architecture can also be used to steer people in ways that serve the provider rather than the user.

Kulik and Fletcher's 2016 meta-analysis of 50 controlled evaluations of intelligent tutoring systems found a median achievement effect of 0.66 standard deviations over conventional instruction. The result predates generative AI and should not be presented as evidence that current generative tutors inherit that effect. It supports the narrower proposition that adaptive computer-mediated instruction can deliver real gains, while the review's sensitivity to locally developed versus standardized tests reinforces the importance of deciding which invariant learning objective is being measured.

The OECD's 2022 report on dark commercial patterns supplies the opposite institutional boundary. It documents online interface practices that steer, deceive, coerce, or manipulate consumers and reviews evidence on their prevalence, effectiveness, and harms. Generative personalization can make this older choice-architecture problem more granular, but the report does not establish that generative systems are already doing so at scale.

The chapter's strongest governance claim is therefore not “personalization is manipulative.” It is that cheap runtime variation increases the value of explicit invariants: facts that cannot change, warnings that cannot disappear, rights that cannot vary by predicted receptivity, common learning objectives, permission boundaries, and authoritative records from which customized explanations derive.

Falsification / counterevidence: adaptive systems can increase accessibility, comprehension, and fit. If organizations can cheaply test generated variants while preserving inspectable common rules, the governance cost of infinite versions may be much smaller than the chapter fears.

## Revision boundaries for the four-chapter run

- Do not reuse Chapter 19's choice-overload meta-analysis as Chapter 5's main evidence; keep Chapter 5 centered on search cost and stopping.
- Do not imply Simon or Stigler studied AI or proved a universal decision rule.
- Pair algorithm aversion with algorithm appreciation so Chapter 6 does not smuggle in a permanent human-trust premium.
- Keep Chapter 7 about signal informativeness, not the psychological value of effort already covered later.
- Do not treat Spence's signaling model as empirical proof that effort is an honest signal in every labor market.
- Do not generalize intelligent-tutoring results to current generative tutors; use them only as evidence that adaptive computer instruction can sometimes improve outcomes.
- Do not claim the OECD dark-pattern evidence proves generative personalization is already manipulating consumers at scale.
- Preserve the positive case for accessibility, better matching, cheaper experimentation, and adaptive explanation.
- Keep the book's thesis as moving scarcity, not permanent human exceptionalism.

## Primary sources

- George J. Stigler, “The Economics of Information,” *Journal of Political Economy* 69, no. 3 (1961): 213–225. https://doi.org/10.1086/258464
- Herbert A. Simon, “A Behavioral Model of Rational Choice,” *Quarterly Journal of Economics* 69, no. 1 (1955): 99–118. https://doi.org/10.2307/1884852
- Berkeley J. Dietvorst, Joseph P. Simmons, and Cade Massey, “Algorithm Aversion: People Erroneously Avoid Algorithms after Seeing Them Err,” *Journal of Experimental Psychology: General* 144, no. 1 (2015): 114–126. https://doi.org/10.1037/xge0000033
- Jennifer M. Logg, Julia A. Minson, and Don A. Moore, “Algorithm Appreciation: People Prefer Algorithmic to Human Judgment,” *Organizational Behavior and Human Decision Processes* 151 (2019): 90–103. https://doi.org/10.1016/j.obhdp.2018.12.005
- Michael Spence, “Job Market Signaling,” *Quarterly Journal of Economics* 87, no. 3 (1973): 355–374. https://doi.org/10.2307/1882010
- James A. Kulik and J. D. Fletcher, “Effectiveness of Intelligent Tutoring Systems: A Meta-Analytic Review,” *Review of Educational Research* 86, no. 1 (2016): 42–78. https://doi.org/10.3102/0034654315581420
- OECD, “Dark Commercial Patterns,” *OECD Digital Economy Papers*, no. 336 (2022). https://doi.org/10.1787/44f5e846-en
