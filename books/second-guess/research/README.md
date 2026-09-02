# Research Brief

## Thesis under test

*Second Guess* asks a narrower question than "is AI good or bad." It asks: once a
recommendation, a score, a checklist item, or a flight-director's callout comes
from a machine instead of a colleague, what changes about how a person decides
whether to follow it?

The working thesis:

> As automated recommendation moves into aviation, medicine, criminal justice,
> finance, warehouses, and driving, the decisive skill stops being "make the
> right call" and becomes "know when the system in front of you deserves your
> trust and when it does not." Humans are measurably bad at this calibration in
> both directions — over-relying on systems that are wrong (automation bias,
> misuse) and distrusting systems that are right (algorithm aversion, disuse) —
> and the same person, the same week, can do both.

The book should survive being read by someone who builds automation for a
living and by someone who has been hurt by it. It is not an argument that
automation is bad, that human intuition is generally superior, or that any
specific industry should stop building decision-support tools. It is an
argument that *reliance itself* is a skill, that the skill is teachable and
measurable, and that most institutions currently do nothing to teach it.

## Core empirical tests

1. **Automation bias / misuse:** Under what conditions do trained
   professionals (pilots, radiologists, traders) follow an automated
   recommendation past the point where their own senses contradict it?
2. **Algorithm aversion / disuse:** Under what conditions do people abandon a
   demonstrably superior algorithm after watching it make one visible mistake,
   even when a human alternative errs just as often?
3. **Algorithm appreciation:** Under what conditions does the same population
   swing the other way and over-trust algorithmic advice, and why does that
   effect shrink for domain experts?
4. **Deskilling:** Does habitual reliance on an automated aid measurably
   degrade the underlying human skill (navigation, arithmetic, manual flying,
   diagnostic pattern recognition), and does that degradation matter only in
   rare failure conditions?
5. **Vigilance:** How long can a human productively supervise a system that
   is right the overwhelming majority of the time, and what happens to
   detection accuracy over that period?
6. **Trust calibration:** What is the empirical relationship between how much
   a person trusts a system and how trustworthy that system actually is —
   and what closes that gap?
7. **Explanation:** Does adding an explanation to an automated recommendation
   improve the accuracy of human oversight, or does it mainly improve the
   *feeling* of oversight?
8. **Accountability:** When a joint human-machine system fails, where does
   formal and informal blame land, and does that allocation track the actual
   distribution of causal control?

## Falsification and counter-evidence

Every chapter should look for evidence against the central argument.

- Automation has prevented far more harm than it has caused; aviation fatality
  rates per mile have fallen for decades even as cockpits have automated.
  A book fixated on failure cases without this context would mislead.
- Algorithm aversion is not universal; the same literature that documents it
  also documents algorithm appreciation, and later work (Dietvorst 2016 on
  modifiable algorithms) shows aversion is fixable with small design changes.
- Expert forecasters relying less on algorithms is not obviously irrational —
  domain experts sometimes have private information an algorithm lacks, even
  though the Logg/Minson/Moore results show this reliance *hurt* accuracy in
  their specific forecasting tasks.
- Some automated systems (Waymo's driverless service, in its own published
  data) report notably fewer crashes per mile than human drivers on comparable
  roads; this cuts against a narrative where automation is simply dangerous.
- Blame concentrating on a human operator is not always unjust; operators do
  sometimes have the last clear chance to prevent harm, and "moral crumple
  zone" framing should not be used to excuse operators who had real
  opportunity and training to intervene.
- Regulators, courts, and professional bodies have made real, documented
  attempts to correct these problems (BEA recommendations after AF447, the
  737 MAX re-certification process, Wisconsin's limits on COMPAS use); the
  book should track what those corrections did and did not fix rather than
  treat every institution as static.

## Evidence lanes

### I. Aviation automation

US Airways 1549 (2009), Air France 447 (2009), Qantas 32 (2010), the 737 MAX
accidents (Lion Air 610, 2018; Ethiopian 302, 2019), and the "Children of the
Magenta Line" training lineage inside American Airlines. Primary sources:
NTSB and BEA final reports, Indonesian NTSC and Ethiopian AIB reports, FAA
lessons-learned pages.

### II. Human factors foundations

Bainbridge's "Ironies of Automation" (1983), Parasuraman & Riley's "Use,
Misuse, Disuse, Abuse" (1997), Parasuraman, Sheridan & Wickens's levels-of-
automation model (2000), Lee & See's "Trust in Automation" (2004), and
Mackworth's WWII radar vigilance research and the Mackworth Clock.

### III. Algorithmic advice psychology

Dietvorst, Simmons & Massey's algorithm-aversion studies (2015) and the
follow-up "Overcoming Algorithm Aversion" (2016); Logg, Minson & Moore's
algorithm-appreciation studies (2019); the placebic-explanation literature on
explainable AI (Eiband et al. 2019 and successors).

### IV. Medicine

McKinney et al., "International evaluation of an AI system for breast cancer
screening," *Nature* 577 (2020), and the broader literature on radiologist
reliance on AI second reads.

### V. Criminal justice

ProPublica's "Machine Bias" investigation (Angwin et al., 2016) of the COMPAS
recidivism tool in Broward County, Florida; *State v. Loomis*, 881 N.W.2d 749
(Wis. 2016); Northpointe/Equivant's methodological response.

### VI. Labor and logistics

Academic and investigative reporting on Amazon's algorithmic warehouse
management: rate-based discipline, injury-rate comparisons with the
warehousing industry, and Senate and press investigations into "The Rate."

### VII. Finance

The Knight Capital trading malfunction of August 1, 2012, and the May 6, 2010
"Flash Crash," using the SEC/CFTC joint reports and SEC enforcement filings
as primary sources.

### VIII. Autonomous vehicles

The March 2018 fatal collision between a self-driving Uber test vehicle and
Elaine Herzberg in Tempe, Arizona (NTSB final report, 2019), and published
comparative safety data from Waymo and Tesla.

### IX. Deskilling

Maguire et al.'s hippocampus research on London taxi drivers ("The
Knowledge," 2000) as the strongest neuroscientific case study for
skill-linked structural brain change, used to frame (not settle) the broader
and more contested deskilling debate.

### X. Accountability and design

Elish's "Moral Crumple Zones" (2019); design literature on adaptive
automation and calibrated trust.

## Planned figures (described in prose; this manuscript does not ship binary
image files for these — chapters describe the pattern in words)

1. The automation-reliance grid: misuse (over-trust) versus disuse
   (under-trust) as two axes, with named case studies placed on it.
2. A timeline of the four aviation cases (1549, AF447, QF32, MAX) against
   fatality outcome.
3. The algorithm-aversion / algorithm-appreciation reversal, side by side.
4. Waymo and Tesla published safety-metric comparisons, with the chapter text
   flagging the methodological differences between the two datasets rather
   than presenting them as directly comparable.

## Source discipline

- Use only NTSB, BEA, NTSC, AIB, SEC, CFTC, and peer-reviewed primary sources
  for the documented incidents; do not invent cockpit dialogue, courtroom
  testimony, or trading-floor conversation beyond what the primary reports
  record.
- Treat every number (casualty counts, dollar losses, timing, percentages)
  as needing to match the source exactly; when sources conflict slightly
  (e.g., rounded dollar figures), note the range rather than picking a false
  point estimate.
- Distinguish a single study's finding from a settled scientific consensus;
  the algorithm-aversion and algorithm-appreciation literatures qualify each
  other and should be presented as an active, evolving debate, not a solved
  question.
- Do not attribute invented quotations to Sullenberger, de Crespigny, Garman,
  or any other named person. Where a real quotation from a cited primary
  source is used, it must be traceable to that source.
- Preserve genuine uncertainty: the deskilling literature is younger and more
  contested than the aviation human-factors literature; say so.
- For every chapter's central claim, keep in mind: what evidence would make
  this false, and does the chapter show it.
