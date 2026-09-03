# Research Brief

## Thesis under test

*Asleep at the Wheel* asks why nearly every institution that runs on human beings — medicine, aviation, shipping, rail, trucking, manufacturing, prisons, schools, sports, courts, and now the always-on knowledge economy — was built by treating sleep as a negotiable, moral, individual variable instead of a hard, measurable biological constraint with a known failure mode.

> Sleep is infrastructure. Institutions that schedule around it perform predictably better and fail predictably less often than institutions that schedule around the myth that sleep is optional for the disciplined or the ambitious.

The strong version of this claim — that every disaster, error, or illness has a sleep cause — is false and should not survive contact with evidence. The version worth testing is narrower and more durable: circadian biology and sleep pressure are as measurable and as ignorable as gravity, and a recurring set of institutions have paid, and continue to pay, an avoidable price for scheduling around convenience, tradition, and status display rather than around the biology of the people doing the work.

The book should be able to survive contrary evidence. Some institutions that appear to ignore sleep function well because other safeguards compensate. Some fatigue-linked disasters have contested or multi-causal investigations. Some sleep science headlines (circadian genetics, the "eight-hour" number, wearable-derived claims) are less settled than popular treatments suggest, and the book should say so explicitly rather than borrowing false certainty from its own sources.

## Core empirical tests

1. **Mechanism:** What does chronobiology and sleep-stage research actually establish about circadian rhythm, homeostatic sleep pressure, sleep debt, and performance/alertness decline — and where does the popular account overstate the laboratory record?
2. **Disaster record:** In major documented industrial, transportation, and aerospace accidents, what specific role did investigators (not journalists) assign to fatigue, shift timing, or circadian low points, and what other causes did they identify alongside it?
3. **Institutional response:** When regulators or institutions changed rules after a fatigue-linked failure (medical residency hours, rail engineer sleep-apnea screening, trucking hours-of-service, aviation duty limits), what did the rule change, what evidence supported it, and what tradeoffs or pushback followed?
4. **Economics:** What do peer-reviewed or major-institution economic estimates (RAND, CDC, WHO/IARC) say about the cost of insufficient sleep, shift work, and circadian disruption, and how should the book represent the uncertainty in those estimates?
5. **Culture and myth:** Which "successful people need less sleep" narratives (Edison, Thatcher, hustle-culture executives) have documented counter-evidence, and which sleep-science claims in bestselling popular treatments have been publicly disputed by other scientists?
6. **Commercial response:** How well do the sleep-aid pharmaceutical industry, the melatonin supplement industry, and the consumer sleep-wearable industry actually serve the biology they market against, and where is there a documented gap between marketing claims and clinical evidence?
7. **Future of work:** What early evidence exists (not speculation) about how AI-mediated, asynchronous, and always-on work patterns are changing sleep timing and quality as of 2026, and what would an institutional redesign around sleep look like in practice, with real pilots and real results?

## Falsification and counter-evidence

Every chapter should look for evidence against the strong version of the thesis.

- Short sleep is not uniformly harmful; individual variation in required sleep duration is real, and a small population may be genuine short sleepers (documented DEC2 gene research).
- Not every disaster with a tired operator was "caused" by fatigue; multiple-cause accident investigations should be represented as multi-cause, not simplified into a single-factor morality tale.
- Some institutions that appear to schedule against circadian biology (hospital residency, military watch rotations, ships at sea) may have hard operational constraints — continuity of care, minimum crewing, national security — that a pure sleep-optimal schedule cannot satisfy, and the book should show the real tradeoff rather than pretend it away.
- Wearable sleep trackers and popular sleep science have produced real clinical and behavioral benefit for many users even where their precision is overstated; do not dismiss the category, characterize its actual evidentiary standing.
- Regulatory fixes (duty-hour limits, hours-of-service rules) have documented compliance gaps, enforcement problems, and, in at least one well-studied case (resident duty hours), mixed or contested evidence on whether patient safety measurably improved — represent that honestly instead of declaring victory.

## Source discipline

- Prefer primary sources: peer-reviewed journal articles, government investigation reports (NTSB, Presidential Commission, Rogers Commission), regulatory agency materials (FAA, FMCSA, ACGME, FDA), and first-party institutional data (NASA, WHO/IARC monographs, RAND reports).
- Every named study needs a real author, a real publication, and (where available) a real DOI or stable URL. No invented statistics, no invented quotations, no composite anecdotes presented as single real events.
- Distinguish an accident investigation's own causal findings from later popular retellings of the same accident; cite the investigation itself wherever possible.
- Record the vintage of every source. Popular science claims (e.g., "you need exactly eight hours") should be checked against the more cautious primary literature and qualified accordingly.
- Preserve genuine scientific disagreement — including publicly documented critiques of celebrated popular-science sleep books — rather than treating one bestseller as the final word on the field.
- Every chapter file lands in `manuscript/chNN-slug.md`. Every source a chapter uses must appear in `research/source-ledger.csv` with columns `id,year,author_or_institution,title,source_type,book_use,url` — no duplicate `id` or `url` values anywhere in this ledger.

## Voice

Follow `.agents/skills/human-prose/SKILL.md` and this repository's `AGENTS.md`. Chapters are narrative nonfiction: open on a specific, dated, named scene, let the mechanism and the tension carry the argument, and let the reader arrive at the implication rather than being told it in a slogan. No named "frameworks," no motivational-poster aphorisms, no manufactured quotations, no invented dialogue or sensory detail beyond what a cited source supports.
