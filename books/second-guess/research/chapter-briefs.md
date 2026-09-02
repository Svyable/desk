# Chapter Briefs

These are research and argument briefs, not prose outlines. Each chapter
should still discover its own narrative shape from the evidence available
when it is written. Word-count target for every chapter: 3,800-4,500 words.
Do not pad to hit the target; if a chapter's real material runs short, say so
rather than stretching it with restatement.

**Non-negotiable sourcing rule for every chapter below:** every date, dollar
figure, casualty count, percentage, and named person in this brief is drawn
from the primary or secondary sources listed in `source-ledger.csv` under
that chapter's source IDs. Use those facts exactly as given here — do not
round differently, do not invent additional statistics, and do not write any
quoted dialogue, courtroom testimony, or cockpit voice-recorder transcript
that is not explicitly given in this brief. Where the record does not say
what someone was thinking or feeling, say so or leave it out; do not invent
interior monologue for real, named people. General atmospheric description
(weather, geography, the physical setting of an airport or courtroom) may be
handled with ordinary narrative judgment as long as it does not contradict
the source record.

## Book-wide notes

**Working title:** *Second Guess*
**Subtitle:** *How Human Judgment Survives the Age of the Recommendation*
**Author:** Sven Hardy Benson

**Thesis:** As automated recommendation spreads into aviation, medicine,
criminal justice, finance, warehouses, and driving, the decisive skill is no
longer "make the right call" but "know when this particular system, in this
particular moment, deserves to be trusted, overridden, or double-checked."
People are bad at this in both directions — sometimes trusting a wrong
machine past the point of no return, sometimes abandoning a right one after a
single visible mistake — and the book's job is to make both failure modes
visible, explain what human-factors and behavioral-science research knows
about why they happen, and show what has and has not worked to fix them.

**Voice:** Serious narrative nonfiction in the register of the Kahneman /
Gladwell / Lewis / human-factors trade-book tradition already represented on
this Desk's ratings sheet. Concrete scene first, mechanism and evidence
second, principle last — not the reverse. Follow `.agents/skills/human-prose/
SKILL.md` closely: no invented quotations, no "Here's the secret" reveals, no
five-pillar frameworks invented for this book, no over-neat morals bolted
onto real tragedies, no perfectly symmetrical "not X but Y" sentences used as
a crutch. Real people who died or were seriously hurt in these case studies
(Elaine Herzberg; the passengers of Lion Air 610 and Ethiopian 302) should be
treated with the same restraint and accuracy the source record uses — do not
sensationalize, and do not speculate about their final thoughts or
experiences.

**Formatting:** One `# Title` heading per chapter file, then paragraphs only.
No subheadings, no bullet lists, no numbered lists, no bold/italic emphasis
used as a structural device, no HTML comments, no footnote markers — this
book states its sourcing in the research trail, not inline in the prose
(figures and named studies can and should be named in the text itself, the
way *Predictable* does it — "In a widely cited review, economists Justin
Wolfers and Eric Zitzewitz found..." — but no bracketed citations or numbered
footnotes).

## Chapter 1 — The Decision on the Hudson

**Job:** Open the book with a single, tightly reconstructed scene: US Airways
Flight 1549, January 15, 2009. Use it to introduce the book's central
question without naming a framework yet.

**Facts to use (source ch01-001, ch01-002):** An Airbus A320, registration
N106US, climbing out of LaGuardia Airport, struck a flock of Canada geese
roughly 2.5 minutes into the climb at about 2,818 feet, ingesting birds into
both engines and losing nearly all thrust in both. Captain Chesley
Sullenberger and First Officer Jeffrey Skiles evaluated returning to
LaGuardia, diverting to Teterboro Airport in New Jersey, and ditching in the
Hudson River; they judged the first two unachievable given remaining
altitude and distance, and ditched instead. All 155 people aboard survived;
100 were injured, five seriously. The NTSB's final report (AAR-10/03) later
concluded the decision to ditch was the appropriate one — even simulator
runs by test pilots who knew the failure was coming in advance produced
close but successful returns to LaGuardia, while runs matching the real
decision timeline could not.

**Angle:** This was automation-poor, not automation-rich — the point of
opening here is that Sullenberger and Skiles had almost no automated
decision support for the choice that mattered most; the flight computer
could tell them airspeed and altitude, not which runway was reachable on two
dead engines. Use this to set up the book's actual subject by contrast: what
happens in the much more common case, spreading fast by 2027, where a human
in a comparable high-stakes moment *does* have an automated recommendation
in front of them — and has far less time and far less specific expertise to
decide whether to trust it. End the chapter opening the real question: as
software increasingly proposes the decision before the person reaches it,
what happens to the moment of judgment that Sullenberger still had in full?

**Avoid:** Do not turn this into a hagiography or a "great man" story without
qualification — note that Skiles, air traffic control, and the ferries nearby
were part of the outcome, and that the NTSB's own reconstruction is what
established the decision was sound, not simply Sullenberger's own account of
it. Chapter 17 returns to this event in more analytical depth later in the
book; this chapter should stay in scene and not pre-empt that later
discussion.

## Chapter 2 — Two Kinds of Wrong

**Job:** Introduce the book's central framework: Parasuraman and Riley's
1997 distinction between misuse (over-reliance on automation, including
automation bias and complacency) and disuse (under-reliance, neglect, or
premature abandonment of automation).

**Facts to use (source ch02-001):** Parasuraman & Riley, "Humans and
Automation: Use, Misuse, Disuse, Abuse," *Human Factors* 39(2), 1997,
pp. 230-253. Their taxonomy: use is the voluntary engagement or
disengagement of automation by an operator; misuse is over-reliance,
producing monitoring failures or decision bias; disuse is neglect or
underuse, often triggered by high false-alarm rates that teach operators to
ignore a system even when it is right; abuse refers to designers or
managers deploying automation in ways that ignore its consequences for
human operators (a fourth category worth naming but not the book's main
focus).

**Angle:** Establish that these are not opposite ends of a simple dial where
"more trust" is always the wrong answer and "less trust" the safe one — both
misuse and disuse kill people, and the book will show both. Preview,
briefly and without giving away the endings, that the aviation cases in
Part I will illustrate misuse (Air France 447), the labor and consumer
cases in Part II will illustrate disuse (people walking away from tools that
would have helped them), and the book keeps returning to both because real
institutions cycle between overcorrecting for one and then the other.

**Avoid:** Do not build a diagram or matrix in prose form as a gimmick;
describe the two failure modes as ideas, not as a labeled quadrant chart.

## Chapter 3 — The Ironies of Automation

**Job:** Give Bainbridge's 1983 paper its full due as the intellectual
foundation of the whole book.

**Facts to use (source ch03-001):** Lisanne Bainbridge, "Ironies of
Automation," *Automatica* 19(6), 1983. A five-page paper on process control
in factories and power plants that became one of the most cited papers in
human factors history (roughly 1,800 citations by November 2016, and rising
steadily since). Two central ironies: (1) designers who automate a task
because they distrust human reliability still leave the human responsible
for the cases automation cannot handle — by definition the rarest, least
practiced, and hardest cases; (2) operators who no longer practice a skill
because automation performs it lose proficiency in that exact skill, so
that when the rare intervention is needed, the operator is least prepared
to give it. Bainbridge's conclusion was that operators need *more* training
as automation increases, not less, precisely because automation replaces
practice with monitoring.

**Angle:** Show why a paper about 1983 factory control still explains 2027
software. Illustrate the argument with a small, concrete, low-stakes example
(a supervisor watching gauges on a control-room wall, or comparable) before
the book turns to higher-stakes cases in later chapters. This chapter is
conceptual scaffolding — it should feel like the moment a reader understands
the shape of the whole book, without yet delivering the dramatic cases held
for Chapters 4, 17, and 18.

**Avoid:** Do not present Bainbridge's two ironies as a "framework" with a
cute name; present them as an argument, in the author's own prose.

## Chapter 4 — Children of the Magenta Line

**Job:** Trace how Bainbridge's abstract argument played out concretely in
commercial aviation, and set up the deeper failure examined in Chapter 18.

**Facts to use (source ch04-001, ch04-002):** In 1996-97, American Airlines
tasked Captain Warren VanderBurgh with investigating a pattern of accidents,
incidents, and violations; his team found that roughly 68 percent were
attributable to "automation mismanagement." VanderBurgh's April 1997
training class at the American Airlines Training Academy in Dallas, titled
"Children of the Magenta Line," became widely circulated inside and beyond
the airline; "children of the magenta" became industry shorthand for pilots
who could manage a flight-management computer but had lost confidence or
proficiency in hand-flying the aircraft. His core prescription was not "less
automation" but appropriate "stepping down" — deliberately reducing the
level of automation in use as workload and complexity change, rather than
either riding full automation past its usefulness or abandoning it
reflexively.

Then: Air France 447, June 1, 2009. A pitot tube iced over at cruise
altitude during a thunderstorm, producing unreliable airspeed readings that
caused the autopilot to disconnect and hand control back to the pilots
without warning. The BEA's final report found the pilots were "startled,"
struggled to reconcile the automation-era flight displays with the raw
information a pre-automation pilot would have relied on, and were unable to
recover; the BEA issued 25 recommendations, prominently including more
manual-flying training at high altitude.

**Angle:** Connect VanderBurgh's 1997 diagnosis directly to the 2009 crash
it seems to predict — not as a supernatural prophecy but as evidence that
the industry already understood the mechanism years before it killed 228
people (the number aboard AF447; confirm against source before stating a
casualty figure — if the brief's sources do not give a precise onboard
count, describe the toll as "everyone aboard" rather than inventing a
number not present in this brief). Close by asking why a well-documented,
named failure mode recurs anyway — a question the book keeps returning to.

**Avoid:** Do not claim VanderBurgh's video directly caused any specific
later safety change beyond what the source material supports; the
connection is diagnostic, not causal, and the chapter should say so.

## Chapter 5 — The Vigilance Problem

**Job:** Explain why "just have a human watch the automation" is a much
harder ask than it sounds, using the oldest and most robust research in the
book.

**Facts to use (source ch05-001):** Norman Mackworth, a British
psychologist recruited by the RAF during the Second World War to study
radar-operator efficiency, found operators lost roughly 10-15 percent of
signal-detection efficiency within the first 30 minutes of a watch, with
detection continuing to decline more gradually over a longer session. His
"Mackworth Clock" — a dial with a hand that mostly ticks in regular
one-second jumps but occasionally makes an irregular double-jump the
operator must catch — became the standard laboratory tool for studying this
"vigilance decrement," and remains in use today.

**Angle:** Translate 1940s radar-watch research into 2020s supervisory
control: a person told to "monitor" a system that is right the vast
majority of the time is being asked to perform exactly the task vigilance
research says humans do worst — sustained attention to a rare signal in a
stream of overwhelmingly uneventful data. Connect this forward (briefly,
without fully spoiling it) to the Uber/Tempe safety-driver failure covered
in Chapter 15, where a human "supervisor" of an automated system failed to
catch the one moment that mattered.

**Avoid:** Do not overstate a single WWII-era research program into a
universal, unchanging law of human attention; note, honestly, that
vigilance-decrement magnitude varies by task and that later researchers have
refined Mackworth's original findings.

## Chapter 6 — Trust, Miscalibrated

**Job:** Introduce Lee & See's 2004 concept of trust calibration as the
book's central diagnostic tool.

**Facts to use (source ch06-001):** John D. Lee and Katrina A. See, "Trust
in Automation: Designing for Appropriate Reliance," *Human Factors* 46(1),
2004, pp. 50-80 — one of the most cited papers in the automation-trust
literature (cited in roughly a quarter of subsequent research on the topic,
per later bibliometric reviews). Their central concept: trust calibration is
the correspondence between how much an operator trusts a system and how
trustworthy that system actually is. Poor calibration comes in two forms:
overtrust (trust exceeds actual capability — a form of the "misuse" problem
from Chapter 2) and undertrust (trust falls short of actual capability — a
form of "disuse"). Calibration is not fixed; it is shaped by a closed loop
of experience, feedback, and the operator's mental model of how the system
works.

**Angle:** Give the reader a durable mental tool: trust in a system is
neither good nor bad in the abstract, only appropriately or inappropriately
matched to what the system can actually do. Use this to explain why the
next two chapters (algorithm aversion, then algorithm appreciation) are not
contradictory findings but two sides of the same calibration failure,
running in opposite directions.

**Avoid:** Do not present "calibration" as a simple slider a person can
consciously turn; the research treats it as an emergent property of
repeated experience and feedback, which is much harder to engineer than a
dial.

## Chapter 7 — The Algorithm Aversion Experiments

**Job:** Walk the reader through the Dietvorst, Simmons & Massey research in
enough experimental detail that it feels like discovery, not a summary.

**Facts to use (source ch07-001, ch07-002):** Berkeley Dietvorst, Joseph
Simmons, and Cade Massey, "Algorithm Aversion: People Erroneously Avoid
Algorithms After Seeing Them Err," *Journal of Experimental Psychology:
General* 144(1), 2015, pp. 114-126. Across five studies, participants who
watched an algorithmic forecaster and a human forecaster perform (and who
saw the algorithm outperform the human overall) still lost confidence in the
algorithm faster than in the human after each visible error, and were less
likely to choose to bet their own incentive payment on the algorithm's
future forecasts, even though the algorithm remained the better bet. A 2016
follow-up ("Overcoming Algorithm Aversion: People Will Use Imperfect
Algorithms If They Can (Even Slightly) Modify Them," *Management Science*
64(3), 2018 print/2016 online) found that giving participants even minimal
ability to adjust the algorithm's forecast substantially restored their
willingness to rely on it, even when they barely used the adjustment power.

**Angle:** Make the reader feel the unfairness of the standard before
naming it: we forgive human forecasters for being wrong in ways we do not
forgive machines. Use the modification-restores-trust finding as an early,
concrete design lesson the book will return to in Chapter 19 — a small piece
of real optimism inside a chapter about an uncomfortable bias.

**Avoid:** Do not claim this settles the matter — Chapter 8 immediately
complicates it, and this chapter should not pretend algorithm aversion is
universal or permanent.

## Chapter 8 — Algorithm Appreciation

**Job:** Complicate Chapter 7 with the opposite finding, and use the
contradiction to sharpen the book's actual argument: neither blanket trust
nor blanket distrust is correct, and the same population can hold both
tendencies depending on the framing and the domain.

**Facts to use (source ch08-001):** Jennifer Logg, Julia Minson, and Don
Moore, "Algorithm Appreciation: People Prefer Algorithmic to Human
Judgment," *Organizational Behavior and Human Decision Processes* 151, 2019,
pp. 90-103. Across six experiments, laypeople adhered more closely to advice
when told it came from an algorithm than when told it came from a person —
for numeric estimation of a visual stimulus and for forecasts about song
popularity and romantic attraction — a result the researchers had predicted
would go the other way. The effect weakened when people chose between an
algorithm's estimate and their own judgment (rather than another person's),
and weakened further, reversing into reduced reliance, among people with
real forecasting expertise — professionals who forecast regularly relied
*less* on algorithmic advice than laypeople did, and that reduced reliance
measurably hurt their accuracy.

**Angle:** The expertise reversal is the chapter's real payload: the people
most qualified to judge an algorithm's advice were also the people most
likely to discount it in a way that cost them accuracy — a specific,
falsifiable warning for every profession the rest of the book visits
(radiology, judging, trading, driving), where the people using the tools are
domain experts, not laypeople. Set this up explicitly as the reason later
chapters (9 through 12) matter: expert disuse, not naive overtrust, may be
the more dangerous default in high-stakes professional settings.

**Avoid:** Do not resolve the aversion/appreciation tension with a glib
one-line answer; let the tension stand as the book's genuine open question
until Chapter 19's design discussion.

## Chapter 9 — The Shadow on the Film

**Job:** Take the abstract algorithm-aversion/appreciation debate into a
single, consequential professional domain: radiology.

**Facts to use (source ch09-001):** Scott Mayer McKinney and colleagues,
"International evaluation of an AI system for breast cancer screening,"
*Nature* 577, 2020, pp. 89-94 — a Google Health collaboration. The system
was trained on UK mammography data (roughly 76,000 women) and evaluated,
without retraining, on US data (more than 15,000 women), to test whether it
generalized across populations rather than merely memorizing one dataset's
quirks. Relative to the original clinical reads, the AI system reduced false
positives by 5.7 percent (US) and 1.2 percent (UK), and reduced false
negatives by 9.4 percent (US) and 2.7 percent (UK). A later addendum to the
paper was published; note that a correction/addendum exists rather than
presenting the original as the final, unrevised word.

**Angle:** Use this to ask the chapter's real question: even a system that
measurably outperforms the average radiologist on this evidence does not
resolve the calibration problem, because the clinical question is never
"is the AI right on average" but "should this particular radiologist, on
this particular read, defer to, double-check, or override the system in
front of them right now" — precisely the Chapter 6 calibration problem,
transplanted into a reading room. Discuss automation bias in a diagnostic
setting: a radiologist primed by an AI's confident flag can anchor on it and
under-search the rest of the image; a radiologist who has seen the AI miss
one case can swing toward the Chapter 7 aversion pattern and discount a
correct flag. Because the brief does not contain a documented, named
real-world instance of either failure occurring with this specific system,
frame this as the well-established mechanism (automation bias / algorithm
aversion, established in Chapters 6-8) applied to the radiology setting
that this specific study makes newly urgent, not as an additional
documented incident.

**Avoid:** Do not claim the McKinney study itself measured or reported
radiologist over- or under-reliance on the AI's output — it evaluated the
AI system's standalone accuracy against clinical reads. Keep the automation-
bias discussion clearly framed as the application of earlier chapters'
established mechanisms to this setting, not as a separate finding of the
McKinney paper.

## Chapter 10 — The Risk Score in the Courtroom

**Job:** Move the book's argument into criminal justice, where the stakes
are liberty rather than health, and where a proprietary, undisclosed scoring
method makes trust calibration especially fraught.

**Facts to use (source ch10-001, ch10-002):** ProPublica's "Machine Bias"
investigation (Julia Angwin, Jeff Larson, Surya Mattu, and Lauren Kirchner,
May 23, 2016) analyzed COMPAS risk scores against actual recidivism outcomes
in Broward County, Florida. Among defendants who were not re-arrested, 45
percent of Black defendants had been misclassified by COMPAS as higher
risk, versus 24 percent of white defendants; the reverse asymmetry held for
false "low risk" labels among defendants who did reoffend. Northpointe (the
tool's developer, later Equivant) published a rebuttal using the same
underlying data to argue the tool achieved "accuracy equity" and
calibration/statistical parity by a different fairness definition —
present this as a real, substantive methodological disagreement about which
fairness criterion should govern, not as a debunking of either side.

Separately: *State v. Loomis*, 881 N.W.2d 749 (Wis. 2016). Eric Loomis, who
had pleaded guilty to fleeing an officer and operating a vehicle without the
owner's consent in a case connected to a drive-by shooting investigation,
challenged the trial court's use of a COMPAS score at his sentencing on due-
process grounds, partly because Northpointe treats its scoring method as a
trade secret and does not disclose it. The Wisconsin Supreme Court upheld
the use of such tools at sentencing but held they could not be the
determinative factor and required courts to give cautionary information
about the tool's limits when using one.

**Angle:** A judge who receives a COMPAS score faces the calibration
problem in its starkest form: the score's inner workings are legally
undisclosed, so a judge cannot inspect why it produced a given number, only
whether to trust it. Connect back explicitly to Chapter 6: this is
overtrust and undertrust with no way to build genuine calibration, because
calibration requires feedback and understanding the system's proven
accuracy in situations like this one, and Loomis shows the legal system
recognized that gap without fully closing it.

**Avoid:** Do not take a side in the fairness-definition debate as though it
were settled; the ProPublica and Northpointe positions rest on different,
both mathematically coherent, notions of fairness (predictive parity versus
equalized false-positive/false-negative rates), and a serious treatment
should let the reader see why the two sides can each be correct on their
own terms and still reach different conclusions.

## Chapter 11 — The Manager in the Warehouse

**Job:** Shift from "should I trust the machine's recommendation" to a
sharper version of the same question when the machine is also your boss:
algorithmic management.

**Facts to use (source ch11-001, ch11-002):** Amazon's warehouse operations
use handheld scanners to generate real-time productivity data, publicly
visible worker rankings, and algorithmic tracking of compliance with rate
quotas, creating what reporting has described as a standing threat of
discipline or termination for workers who fail to "make rate." Amazon
warehouses recorded more than 30 percent more injuries than the
warehousing-industry average in 2023; more than two-thirds of Amazon
warehouses had injury rates exceeding the industry average; cited research
found Amazon's robotic facilities had a 54 percent higher serious-injury
rate than its non-robotic facilities. Amazon has publicly stated it does
not require employees to meet specific productivity speeds or targets;
reporting (including internal documents described by other outlets) has
described workers being disciplined and terminated based on algorithmically
generated quota data, and a Senate investigation found that following
required safety protocols at the required pace became, in the investigators'
characterization, "nearly impossible."

**Angle:** This is disuse and misuse collapsed into one relationship: the
worker cannot meaningfully "second-guess" the system because the system
sets the terms of continued employment, not merely a recommendation.
Connect to Chapter 5's vigilance research from the opposite direction — this
is not a human failing to stay vigilant over a machine, but a human forced
into a machine-set pace that leaves no margin for the judgment (a shortcut
around a safety step, an unreported near-miss) that keeps a body intact.
Present Amazon's public denial and the reporting that contradicts it as a
genuine, unresolved dispute rather than settling it for the reader.

**Avoid:** Do not present this chapter as an indictment of one company
alone without acknowledging that other warehousing and logistics operations
use comparable systems; keep the specific, sourced facts about Amazon
precisely attributed rather than generalized into vaguer claims about "the
industry" that the brief's sources do not support.

## Chapter 12 — Forty-Five Minutes

**Job:** Move into finance, where machine decisions execute in
milliseconds and a human's "second guess" often arrives only after the
damage is already done.

**Facts to use (source ch12-001, ch12-002):** The May 6, 2010 "Flash
Crash": a joint SEC-CFTC staff report (issued September 30, 2010) found
that a large automated sell algorithm — targeting the sale of roughly $4.1
billion in E-mini S&P 500 futures contracts at a fixed execution rate of
about 9 percent of trailing one-minute volume, without regard to price or
time — combined with electronic liquidity providers pulling back their
quotes and separate manipulative "spoofing" activity to produce a rapid,
severe intraday plunge (the Dow fell roughly 9 percent between 2:30 and
3:00pm) followed by a fast partial recovery.

Then: Knight Capital Group, August 1, 2012. A software deployment error
activated dormant legacy code (left over from a discontinued internal
function called "Power Peg") on one of Knight's eight production servers
when the market opened at 9:30am; for roughly 45 minutes, the malfunctioning
system sent a flood of erroneous orders into NYSE-listed securities.
Unwinding the resulting position produced a realized pre-tax loss of
approximately $440 million — nearly wiping out the firm, which was
acquired within months. The SEC later fined Knight $12 million for
violations of market-access and supervisory rules.

**Angle:** Both events share the same structural problem: automated systems
executing far faster than any human "second guess" could interrupt them,
with human oversight only able to operate after the fact — the exact
opposite temporal position from a pilot or a radiologist, who at least have
the machine's recommendation in front of them before acting. Use this to
sharpen the book's argument: calibrated trust is not just a psychological
problem but sometimes a design problem, when the system's speed structurally
forecloses the possibility of a human's timely intervention at all.

**Avoid:** Do not conflate the two events into a single story; they had
different causes (systemic market-structure interaction versus a single
firm's deployment error) and the chapter should keep that distinction clear
even while drawing the shared lesson.

## Chapter 13 — The Deskilling Ledger

**Job:** Confront the deskilling question head-on with the strongest
available evidence, while being honest about how much of the broader
deskilling debate rests on thinner ground.

**Facts to use (source ch13-001):** Eleanor Maguire and colleagues,
"Navigation-related structural change in the hippocampi of taxi drivers,"
*PNAS* 97(8), 2000, pp. 4398-4403. Licensed London taxi drivers, who must
pass "The Knowledge" — a famously demanding, years-long examination of
London's street layout — showed more gray matter in the posterior
hippocampus than matched controls, with hippocampal volume correlating with
years of experience. Crucially, London bus drivers, who drive comparable
hours but along fixed, memorized routes rather than navigating freely, did
not show the same pattern — isolating active navigation demand, not driving
itself, as the likely cause, and offering some of the clearest human
evidence that a skill genuinely used shapes brain structure and, by
implication, that a skill left unused may not.

**Angle:** Use Maguire's study as the chapter's one rigorously documented
anchor, then be explicit about the difference between what this specific
study shows (structural correlation with active, sustained navigational
practice, in one well-studied population) and the much broader, more
casually asserted claims that following GPS turn-by-turn directions, using
a calculator, or relying on spellcheck are quietly degrading equivalent
skills at population scale — claims this book's brief does not have
equivalently rigorous sourcing for and should not assert as established
fact. Frame the wider claims honestly as a live, contested hypothesis that
Bainbridge's 1983 argument (Chapter 3) predicts should be true in principle,
and that Maguire's result makes plausible, but that remains far less proven
for widespread modern conveniences than it is for licensed London taxi
driving.

**Avoid:** Do not assert, as settled fact, that GPS, calculators, or
autocorrect have been proven to measurably degrade human navigation,
arithmetic, or spelling ability at scale; this brief does not contain
sourcing for that claim at the rigor the rest of the book holds itself to,
and the chapter's credibility depends on saying so plainly rather than
implying more certainty than the evidence supports.

## Chapter 14 — Explain Yourself

**Job:** Test the intuitive fix — "just make the AI explain its reasoning"
— against the actual research, and show it does not do what people assume.

**Facts to use (source ch14-001):** Malin Eiband, Daniel Buschek,
Alexander Kremer, and Heinrich Hussmann, "The Impact of Placebic
Explanations on Trust in Intelligent Systems," CHI 2019 Extended Abstracts.
In a lab study of a nutrition-recommender prototype, a "placebic"
explanation — one that merely gestures at a reason without conveying real,
substantive information — produced compliance rates (93 percent) nearly
identical to a genuine, substantive explanation (94 percent), and both were
far above a no-explanation condition (60 percent), when the effort the
explanation asked of the user was low. Cite the related follow-on finding
that later work distinguished satisfaction from performance: people rated
placebic and genuinely informative explanations as equally satisfying, even
though only the informative explanations measurably improved people's
actual understanding of the system.

**Angle:** This is the chapter that should unsettle the reader who assumed
"explainable AI" was a clean solution to everything the book has raised so
far. If the mere presence of an explanation-shaped sentence moves trust as
much as an explanation that actually informs, then explanation interfaces
can be used (deliberately or not) to manufacture the feeling of calibrated
trust without the substance of it — a dangerous shortcut in exactly the
high-stakes domains (courts, hospitals, cockpits) the book has been
examining.

**Avoid:** Do not claim explanation is worthless — the same research shows
genuine, substantive explanations that require real engagement did improve
people's mental models; the danger is specifically low-effort,
placebo-shaped explanation being mistaken for the real thing, and that
distinction should be precise.

## Chapter 15 — The Moral Crumple Zone

**Job:** Ask who is held responsible when a joint human-machine system
fails, using Elish's concept and the Uber/Tempe case as the chapter's
central, carefully handled example.

**Facts to use (source ch15-001, ch15-002):** Madeleine Clare Elish, "Moral
Crumple Zones: Cautionary Tales in Human-Robot Interaction," *Engaging
Science, Technology, and Society* 5, 2019, pp. 40-60. Elish's argument:
accountability for a joint human-automation failure tends to concentrate on
the human operator with the least actual control, much as a car's crumple
zone absorbs a crash's physical force to protect what is inside — except
here it is the technological system, not a person, that is protected by the
concentration of blame.

Then, treated with care and precision: on March 18, 2018, in Tempe, Arizona,
a self-driving Uber test vehicle struck and killed 49-year-old Elaine
Herzberg, who was walking a bicycle across a road outside a marked
crosswalk. The NTSB's subsequent investigation found the system's software
could not classify an object as a pedestrian when it was not near a
crosswalk; the system did not correctly identify the collision as imminent
until roughly 1.2 seconds before impact; automatic emergency braking had
been disabled while the vehicle was under computer control, on the design
theory that it reduced erratic vehicle behavior, with Uber relying instead
on a human safety driver to intervene; and investigators found the safety
driver had been watching a video streaming app rather than monitoring the
road in the moments before the collision.

**Angle:** Use Elish's framework precisely on this case: the software's
design choices (crosswalk-dependent pedestrian classification, disabled
automatic braking, reliance on a single distracted-prone human backstop for
a system asking exactly the sustained-vigilance task Chapter 5 shows humans
perform worst) created conditions in which a human "supervisor" was set up
to fail, and yet public and legal attention concentrated heavily on the
safety driver's inattention. This is not an argument that the driver bears
no responsibility — she had a real, if difficult, task to perform and did
not perform it — but an argument, following Elish, that a full accounting
has to include the design decisions that made her the last and almost only
line of defense against a system built with acknowledged blind spots.

**Avoid:** Do not write a redemptive or excusing narrative about the safety
driver, and do not sensationalize Elaine Herzberg's death; stay within the
NTSB's documented findings, name her once with the dignity the record
affords her, and keep the chapter's analytical focus on the accountability
structure rather than on graphic description.

## Chapter 16 — Full Self-Driving, Actually

**Job:** Look at present-day (as of this writing) autonomous-vehicle safety
data honestly, including its limitations as evidence, as a bridge between
the Tempe tragedy and the book's design chapter.

**Facts to use (source ch16-001, ch16-002):** Tesla's own published safety
data reports roughly one crash per 7.63 million miles driven with Autopilot
engaged, versus about one crash per 955,000 miles for Tesla vehicles driven
without Autopilot active; more recent quarterly data (including
approximately one crash per 6.36 million miles in the third quarter of
2025) shows the Autopilot-engaged rate worsening for three consecutive
quarters even as the company continues to describe Autopilot as
statistically safer than unassisted human driving. Separately, Waymo's
published safety-impact data for its fully driverless operations reports
roughly one crash per 50,000 miles and a low critical-disengagement rate
(about 0.07 per 1,000 miles), with Waymo characterizing most of its
recorded collisions as low-speed events caused by another road user's
error or illegal driving.

**Angle:** Treat both companies' self-reported numbers with real
methodological skepticism, explicitly: Tesla's Autopilot-engaged miles are
disproportionately highway miles, a systematically lower-risk driving
environment than the mixed urban and residential roads unassisted driving
often covers, which complicates any direct comparison to its own
non-Autopilot baseline; Waymo's driverless miles are concentrated in
specific, mapped operational areas the company has chosen and validated in
advance, which is a very different exposure profile from an average human
driver's unrestricted range of roads and conditions. The honest conclusion
this chapter should reach is not "which company's data proves automation is
safer," but that neither figure is the clean, apples-to-apples comparison
either company's marketing implies, and that a reader trying to calibrate
trust in autonomous driving from public data alone faces exactly the
Chapter 6 calibration problem, with the companies themselves controlling
much of the available evidence.

**Avoid:** Do not present either company's safety statistics as
independently verified or as resolving the comparison; state plainly, in
the chapter's own voice, that these are first-party figures with real
limitations, exactly as the source ledger notes.

## Chapter 17 — The Save

**Job:** After many chapters weighted toward failure, give three real,
carefully sourced cases where a human's judgment — informed by, but not
simply obedient to, an automated system or a formal procedure — prevented
disaster. Return to Flight 1549 in more analytical depth than Chapter 1's
scene allowed.

**Facts to use (source ch17-001, ch17-002, ch17-003):**

US Airways 1549, revisited: the NTSB's reconstruction (including simulator
trials) found that even trained test pilots, flying the scenario with
advance knowledge that a dual engine failure was coming, could only barely
return to LaGuardia successfully, and that simulator runs matching the real
decision timeline (accounting for the shock and diagnosis time an actual
crew would need) could not make it back — supporting the finding that
ditching, the option outside the "trust the procedure and try to get back to
a runway" instinct, was in fact correct.

Qantas Flight 32, November 4, 2010: an uncontained failure in a Rolls-Royce
Trent 900 engine over Indonesia's Riau Islands, four minutes after takeoff
from Singapore, triggered roughly 100 ECAM (automated checklist) messages —
far more than the system's automated checklist logic could sensibly
prioritize, some of them contradictory or based on severed sensors reporting
false readings. A five-pilot crew was aboard only because of a scheduled
route check; rather than the automated checklist queue dictating their
actions in strict order, the crew, led by Captain Richard de Crespigny,
divided the workload among the extra pilots and made manual judgment calls
the automation could not reliably make, including on landing performance
given uncertain remaining systems. The aircraft landed safely at Singapore
Changi Airport with no injuries to anyone aboard or on the ground.

Apollo 11, July 20, 1969: during the lunar module's final descent, the
Apollo Guidance Computer twice raised "1202" program alarms signaling
executive overflow. Jack Garman, a 24-year-old engineer in a Mission Control
back room, had prepared a handwritten reference sheet of every alarm code
the computer could raise; using it, he was able to confirm to guidance
officer Steve Bales that the 1202 alarm did not require aborting the
landing, and that confirmation reached the crew in time for the landing to
proceed.

**Angle:** Draw the shared pattern across all three: in each case, a human
(or small human team) did not simply obey an automated system or checklist
blindly, and did not simply override it out of instinct either — they used
specific, prepared knowledge (a reference sheet, a route-check crew's extra
hands, a trained captain's judgment about what a river landing required) to
correctly judge which parts of the automated or procedural guidance to
trust in that exact moment. This is the calibration argument from Chapter 6
made vivid: appropriate reliance, not blanket trust or blanket suspicion,
produced the save in all three cases.

**Avoid:** Do not turn any of the three into an uncomplicated hero myth;
each involved institutional preparation (NTSB simulator work establishing
what was and wasn't survivable, Garman's handwritten prep sheet, the
accidental presence of extra qualified pilots on QF32) as much as individual
brilliance, and the chapter should give that preparation real credit rather
than crediting only individual genius in the moment.

## Chapter 18 — The Miss

**Job:** The book's hardest chapter: two cases where pilots fighting an
automated system's repeated, uncommanded intervention could not save the
aircraft, ending in catastrophic loss of life. Handle with maximum factual
precision and restraint.

**Facts to use (source ch18-001, ch18-002, ch18-003):** Lion Air Flight
610 crashed into the Java Sea on October 29, 2018, killing all 189 aboard,
shortly after takeoff from Jakarta. Indonesia's National Transportation
Safety Committee found that Boeing's MCAS (Maneuvering Characteristics
Augmentation System) repeatedly activated based on erroneous data from a
single faulty angle-of-attack sensor, and repeatedly pushed the aircraft's
nose down in a way that progressively overwhelmed the flight crew's manual
control inputs.

Ethiopian Airlines Flight 302 crashed near Ejere, Ethiopia, on March 10,
2019, shortly after takeoff from Addis Ababa, killing all 157 aboard. The
Ethiopian Aircraft Accident Investigation Bureau's findings described a
closely similar failure pattern: the aircraft's left angle-of-attack sensor
diverged sharply from the right (reaching roughly 74.5 degrees against
15.3 degrees on the right sensor) shortly after liftoff, again triggering
repeated MCAS activation consistent with the Lion Air 610 failure mode.

Both accidents led to the worldwide grounding of the 737 MAX fleet and a
mandated redesign of MCAS — including reliance on both angle-of-attack
sensors rather than one, and revised crew procedures and training — which
the NTSB publicly commented on again as recently as January 2023 in
response to Ethiopia's own final report.

**Angle:** This is the book's clearest case of misuse in Parasuraman and
Riley's sense, but complicated: the crews were not passively over-trusting
an automated recommendation the way earlier chapters describe — they were
actively fighting a system that kept reasserting uncommanded control faster
than they could counteract it, a scenario the original MCAS design and
pilot training materials had not adequately prepared them for. Connect this
back to Bainbridge's second irony from Chapter 3: an automated system
designed on the assumption that human pilots would rarely need to intervene
left those same pilots without the specific knowledge (that MCAS existed
and behaved this way, in the case of many 737 MAX-transitioning pilots) to
correctly diagnose what was overriding their inputs and why. Close with the
regulatory correction — the grounding, the redesign, the renewed training
requirements — as required, honest counterevidence that institutions did
respond, without implying it can undo what was lost.

**Avoid:** Do not speculate about the flight crews' final moments beyond
what the cited investigation findings establish; do not invent cockpit
dialogue; treat the 346 total lives lost across both accidents (189 plus
157) with plain, restrained language rather than dramatic embellishment.

## Chapter 19 — Designing for Appropriate Reliance

**Job:** After eighteen chapters weighted toward diagnosis, turn deliberately
toward what the human-factors literature says can actually be designed and
built differently — the book's most constructive chapter.

**Facts to use (source ch19-001, ch19-002):** Parasuraman, Sheridan, and
Wickens's 2000 model (*IEEE Transactions on Systems, Man, and Cybernetics —
Part A* 30(3), pp. 286-297) proposes automating each of four distinct
functions — information acquisition, information analysis, decision and
action selection, and action implementation — independently, and at a
chosen level along a graduated ten-point scale for each function, rather
than treating "automation" as a single all-or-nothing dial. This directly
answers Bainbridge's 1983 critique and VanderBurgh's "stepping down"
prescription from Chapter 4 with an actual design vocabulary: a system can
fully automate information gathering while leaving decision authority
largely human, or vice versa, and the right mix depends on the task and the
consequences of a wrong decision at each stage.

Revisit Lee & See's 2004 trust-calibration framework (Chapter 6) for its
design-facing conclusions: calibration is built through experience,
feedback, and an accurate, evolving mental model of the system's actual
capability — meaning design choices that give operators clear, honest
feedback about when and how a system fails (rather than either hiding
failures or crying wolf with excessive false alarms, the disuse-inducing
mechanism named back in Chapter 2) do more for appropriate reliance than
either maximizing trust or maximizing suspicion.

**Angle:** Synthesize the book's design lessons concretely, in prose rather
than a listicle: the Chapter 7 finding that letting people slightly modify
an algorithm's output restores appropriate use; the Chapter 14 warning that
explanation interfaces can manufacture the feeling of calibration without
the substance, so real design work has to earn calibration through accurate
feedback rather than persuasive interface design; the Parasuraman-
Sheridan-Wickens case for graduated, function-specific automation over
all-or-nothing automation; VanderBurgh's aviation-tested "step down" habit
of deliberately reducing automation level as workload or uncertainty rises,
generalized beyond the cockpit.

**Avoid:** Do not present this as a tidy checklist that solves the book's
problem; human-factors researchers themselves describe appropriate reliance
as an ongoing design and training discipline, not a one-time fix, and the
chapter's tone should reflect that continuing effort rather than a false
sense of closure.

## Chapter 20 — The Recommendation Economy

**Job:** Close the book by widening the lens to 2027 and beyond, drawing
together aviation, medicine, courts, warehouses, finance, and driving into
one argument about where this is heading and what individuals and
institutions can actually do about it.

**Facts to use:** No new primary sources are required for this chapter;
draw only on facts and arguments already established in Chapters 1-19 (do
not introduce new named incidents, studies, or statistics that are not
already in this brief or the source ledger).

**Angle:** Make the case, explicitly, that the specific machines named
across the book — flight-management computers, mammography AI, COMPAS,
warehouse scanners, trading algorithms, self-driving perception stacks —
are not really the subject. The subject is a skill that spans all of them:
knowing, in a given moment, whether the system in front of you has earned
your trust, and building institutions (through training, feedback, design,
and accountability structures that do not simply hand blame to whichever
human happened to be nearest the failure) that make that skill possible to
learn and to exercise. Argue that by 2027 this skill applies to
essentially every kind of work that touches a recommendation engine of any
kind — not just the dramatic, life-or-death domains the book focused on for
clarity — and that the book's dramatic cases were chosen because their
investigations produced unusually rigorous public evidence, not because the
underlying psychology is unique to aviation, medicine, courts, warehouses,
finance, or driving. End without a falsely tidy resolution; acknowledge
that the tools will keep changing faster than the training and design
practices meant to keep pace with them, and that the book's realistic hope
is a wiser, more specific vocabulary for the everyday act of deciding
whether to trust the recommendation on the screen — not a final answer to
whether to trust it.

**Avoid:** Do not introduce a grand new unifying metaphor or named
framework in the closing pages that the rest of the book has not earned;
let the synthesis rest on the specific cases and research already built up,
and end with restraint rather than a rousing call to action.
