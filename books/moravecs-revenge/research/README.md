# Research Brief

## Thesis under test

*Moravec's Revenge* asks whether a fifty-year-old heuristic about what is hard for machines — Hans Moravec's 1988 observation that abstract reasoning is comparatively cheap for a computer while basic sensorimotor skill is comparatively expensive — is being overturned in the 2020s, and if so, by what specific mechanism and for whom.

The strong version of the argument — "robots are about to replace all physical labor" — is too brittle to be useful and is not what the book argues. The version worth testing is more durable:

> A genuine, historically unusual convergence of cheaper simulation, teleoperated data collection, video-pretrained foundation models, and falling actuator/battery costs has, for the first time, made general-purpose walking and manipulation cheap enough to pilot at commercial scale. This does not mean the paradox is "solved" or that mass displacement of physical labor is imminent or inevitable. It means the fifty-year assumption that hands-on work is comparatively automation-resistant needs to be re-examined against specific, dated evidence rather than either dismissed or catastrophized.

The book should survive either outcome. If humanoid and physical-AI robotics mostly remain a slow-moving pilot-stage industry for another decade, the evidence should force the argument to soften. If displacement accelerates faster than the historical record on ATMs, industrial robots, and self-checkout would suggest, the book should explain why this wave differs rather than retrofitting the conclusion.

## Core empirical tests

1. **The paradox's real content**: What did Moravec, Minsky, and Brooks actually claim, and on what evidentiary basis (evolutionary, computational)?
2. **The historical difficulty**: What concretely made robotics research slow for decades (DARPA Grand Challenge, DRC Finals, Boston Dynamics' unprofitable arc)?
3. **The technical fix**: What specifically changed circa 2022–2026 in simulation, teleoperated data collection, and foundation models, and is the change proportionate to the claims made about it?
4. **The economics**: Has humanoid robot unit cost genuinely fallen, by how much, and how much of that is real shipped hardware versus announced targets?
5. **The capital**: How much money has moved into physical-AI companies, at what valuations, and does the investment thesis rest on demonstrated capability or on narrative?
6. **The deployments**: What is actually, verifiably happening on warehouse floors, factory floors, and in homes right now, at what scale, doing what tasks, under what supervision?
7. **The labor economics**: What do the best available empirical studies (Autor, Frey & Osborne and its critics, Acemoglu & Restrepo, Bessen) actually say about automation and employment/wages, and how well do industrial-robot-arm findings transfer to ambulatory, dexterous robots?
8. **The exposure**: Which specific, named occupational categories are most exposed, and what do we know about the people who currently hold those jobs?
9. **The safety and liability regime**: What standards and legal/insurance frameworks exist, and how are they being stretched to cover robots working near untrained bystanders?
10. **The geopolitics**: What is China's actual industrial policy and manufacturing position, and how does that compare with more general (and often conflated) robot-density statistics?

## Falsification and counter-evidence

Every chapter should look for evidence against the strong version of the thesis.

- Warehouse employment has generally grown even through a decade of heavy automation investment (Amazon's own headcount and BLS data); a simple "robots destroy warehouse jobs" story does not fit the last decade cleanly.
- ATM adoption did not reduce the number of US bank tellers for years, because it changed the economics of opening branches (Bessen). The same kind of demand-effect could apply to physical-AI robots and needs to be tested, not assumed away.
- Most current humanoid deployments are small, supervised pilots — a few dozen robots, specific tasks, extensive human oversight — not autonomous fleet-scale replacement.
- Announced cost targets and production volumes from robotics companies routinely slip; treat unshipped promises with real skepticism.
- The OECD's task-based critique of Frey & Osborne suggests automation risk estimated at the occupation level substantially overstates real displacement risk, because most jobs contain a mix of automatable and non-automatable tasks.
- Some historical automation waves (industrial robot arms per Acemoglu & Restrepo) did measurably reduce employment and wages in the exposed local labor markets — the reassuring ATM story is not universal.
- Robot safety standards (ISO 10218, ISO/TS 15066) and cobot design have produced a strong industrial safety record in controlled settings; the open, unresolved question is what happens outside those controlled settings, not a presumption of danger.

The manuscript should distinguish these possibilities rather than forcing every fact into either a triumphant or a catastrophic narrative.

## Evidence lanes

### I. Intellectual and technical history

Moravec's paradox and its origins in Moravec, Minsky, and Brooks; the DARPA Grand Challenge (2004–2005) and DARPA Robotics Challenge (2015); Boston Dynamics' ownership history; the industrial robot arm's own origin (Unimate, 1961) as a contrasting case of a narrow, structured-task automation that succeeded early.

### II. The technical fixes

Simulation and domain randomization (NVIDIA Isaac and similar); teleoperated data-collection programs at 1X, Figure, and Physical Intelligence; vision-language-action foundation models (RT-2, Pi-0, GR00T and successors).

### III. Unit economics and capital

Humanoid robot list prices and stated cost targets (Unitree, Tesla Optimus, 1X NEO); funding rounds and valuations for Figure AI, 1X, Physical Intelligence, Apptronik, Skild AI, Sanctuary AI, and UBTech's IPO.

### IV. Deployment case studies

Amazon's robotic fleet and Digit pilot; Figure/BMW; Apptronik/Mercedes-Benz and Apptronik/GXO; Chinese factory deployments (Unitree, UBTech); food-service, agricultural, and construction robotics; home robots (Roomba, Jibo, 1X NEO).

### V. Labor economics

Autor's routine-biased technical change and job polarization; Frey & Osborne (2013) and the OECD task-based critique; Acemoglu & Restrepo (2020) on robots, employment, and wages; Bessen on ATMs and bank tellers; self-checkout and retail employment/theft.

### VI. Exposure, demographics, and eldercare

BLS occupational employment and wage data for the most exposed categories; Japan's METI nursing-care robot subsidies and PARO; South Korea's demographic trajectory.

### VII. Safety, liability, and geopolitics

ISO 10218 / ISO/TS 15066 and cobot history; documented robot-related workplace injury/fatality history; autonomous-vehicle regulatory precedent (California DMV disengagement reports, the Cruise case) as a liability analogy; China's industrial policy and IFR robot-density statistics; Bill Gates's 2017 robot-tax proposal and South Korea's 2017 tax law change.

## Planned figures

1. **The cost curve** — humanoid robot unit prices/cost targets over time, research platforms through announced production targets.
2. **The capital wave** — cumulative disclosed funding into named physical-AI companies by year.
3. **Robot density** — IFR industrial robots per 10,000 manufacturing employees by country.
4. **Exposure map** — employment and median wage for the most-exposed US occupational categories.
5. **The paradox restated** — a plain-language summary comparing which capabilities were "easy" versus "hard" for machines in 1988 versus the mid-2020s.

## Chapter-to-evidence map

| Chapter | Primary research question |
|---|---|
| 1 — The Paradox in the Room | What, specifically, is a robot doing for pay right now, and what assumption does that violate? |
| 2 — What Moravec Actually Said | What did Moravec, Minsky, and Brooks actually claim, and why? |
| 3 — The Slow Robots | What made robotics research slow and often embarrassing for decades? |
| 4 — The Bottleneck Was Data | Why did physical tasks lack an internet-scale training corpus? |
| 5 — Three Fixes for a Fifty-Year Problem | What concretely changed in simulation, teleoperation, and foundation models? |
| 6 — The Cost Curve Breaks | How much has humanoid robot hardware actually gotten cheaper, and on what evidence? |
| 7 — Money Finds the Body | How much capital has moved into physical AI, and on what thesis? |
| 8 — Learning to Walk Again | What changed technically in bipedal locomotion? |
| 9 — The Warehouse Floor | What is verifiably happening in warehouse robotics deployment? |
| 10 — The Factory Floor | What is verifiably happening in manufacturing robotics deployment? |
| 11 — Rethinking the Safe Job | What do the best labor-economics studies actually say about automation and jobs? |
| 12 — Who Actually Loses First | Which specific occupations and workers are most exposed, by the numbers? |
| 13 — The Eldercare Wager | What is the real scale of demographic pressure toward caregiving robotics? |
| 14 — Teaching an Arm to Feel | What safety engineering and standards govern physical AI, and what is their track record? |
| 15 — Who Insures a Robot | How are liability and insurance frameworks adapting to a new physical-risk category? |
| 16 — The Geopolitics of the Body | What is China's actual industrial policy and manufacturing position? |
| 17 — The Home Robot Bet | What does the history of home robotics predict about the current home-humanoid bet? |
| 18 — The Analogies That Mislead | What do real historical automation waves (ATMs, self-checkout, textile mills) actually show? |
| 19 — Building the Robots That Build Robots | What is the real state of robots manufacturing robots, and what bottlenecks does that raise? |
| 20 — What Physical Common Sense Is Worth | What remains unresolved, and what would a fair, falsifiable restatement of the paradox look like today? |

## Source discipline

- Prefer company filings, primary announcements, government and standards-body documents, peer-reviewed or preprint academic research, and contemporaneous reporting from reputable outlets.
- Treat vendor-supplied figures (fleet size, cost targets, deployment scale) as claims to be cross-checked, not settled facts, and say so in the text where independent verification was not available.
- Keep dates attached to every figure. A funding round, a price, or a pilot's scope is a snapshot, not a permanent fact.
- Preserve counter-evidence rather than arguing it away. The chapter-to-chapter map above is a research aid, not a constraint on where a chapter's own reporting leads it.
