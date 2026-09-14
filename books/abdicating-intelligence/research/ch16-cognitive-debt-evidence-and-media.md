# Chapter 16 — Cognitive debt evidence and media

## Editorial purpose

Ground the chapter's "skill debt" and reserve-capability claims in a domain that already treats automation, proficiency, and degraded-mode performance as an operational problem. Keep the evidence narrow: aviation can show that disused skills can degrade and that regulators explicitly preserve opportunities for manual operation; it does not prove that all AI-assisted cognitive work will decay in the same way.

## Source 1 — FAA Advisory Circular 120-123, Flightpath Management

**Source:** Federal Aviation Administration, Advisory Circular 120-123, *Flightpath Management*.

**Landing page:** https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1041433

**PDF:** https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-123.pdf

**Date issued:** November 21, 2022.

**Current status checked:** Active as of September 2026.

**Authority:** FAA advisory circular for operators under 14 CFR parts 121 and 135 and part 142 training centers.

**What it establishes:** The FAA treats manual flight operations, management of automated systems, pilot monitoring, and energy management as linked flightpath-management topics that require training. The circular addresses appropriate engagement and disengagement of automated systems, autoflight mode awareness, recognition of unintended autoflight states, and manual flight operations. This is useful because it shows a mature safety domain does not treat automation proficiency as a substitute for maintaining the human capabilities needed when automation is inappropriate or insufficient.

**What it does not establish:** The circular is aviation guidance, not evidence about generative AI, writing, medicine, law, education, or knowledge work. It should not be used to claim a universal rate of skill decay or a specific causal effect of AI assistance.

**Rights:** U.S. federal government source. Original federal text is generally not subject to U.S. copyright under 17 U.S.C. § 105. FAA pages also state that reproduction or modification of original FAA source material is the responsibility of the publisher. Logos, seals, photographs, vendor screenshots, and third-party material may carry separate restrictions.

**Publication suitability:** High for citation, paraphrase, and short attributed quotation. No FAA artwork is needed for this chapter.

**Credit if quoted:** Federal Aviation Administration, AC 120-123, *Flightpath Management* (Nov. 21, 2022).

## Source 2 — NASA contractor study on flight-skill retention

**Source:** T. E. Sitterley, L. P. Zaitzeff, and W. A. Berge, *Degradation of learned skills: Effectiveness of practice methods on visual approach and landing skill retention*, NASA-CR-128912 / D180-15082-1 (1972).

**NTRS record:** https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19730014359.pdf

**Publication date:** October 1, 1972.

**Authority:** NASA contractor report archived in the NASA Technical Reports Server.

**Study boundary:** Fifteen experienced pilots were trained on simulated space-vehicle approach-and-landing tasks and tested after four months with no practice or with different rehearsal/warm-up methods.

**What it establishes:** In this narrow simulation, both flight-control and procedural-task performance degraded after four months without practice. Rehearsal helped procedural retention, while dynamic rehearsal or a combination involving dynamic warm-up was needed to counter flight-control degradation. The result is useful as a concrete historical example of a capability becoming less available through disuse and of practice design affecting retention.

**What it does not establish:** This is a small, old, domain-specific simulation study. It is not a general decay curve for expertise, does not quantify cognitive debt in modern workplaces, and should not be generalized to all skills or all automation contexts.

**Rights:** NASA NTRS marks the record "Work of the US Gov. Public Use Permitted." The report is suitable for commercial citation and factual use. Avoid assuming that every embedded photograph, trademark, or separately credited element is unrestricted without item-level checking.

**Publication suitability:** High for citation and paraphrase. The book does not need to reproduce the original report figures; an original conceptual diagram communicates the chapter's broader mechanism more accurately.

**Credit if quoted:** Sitterley, T. E., Zaitzeff, L. P., and Berge, W. A., NASA-CR-128912 (1972), NASA Technical Reports Server.

## Source 3 — NASA human-centered automation framing

**Source:** Charles E. Billings, *Human-centered aircraft automation: A concept and guidelines*, NASA-TM-103885 (1991).

**NTRS record:** https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/19910022821.pdf

**Publication date:** August 1, 1991.

**Authority:** NASA Technical Memorandum, Ames Research Center.

**What it establishes:** The memorandum frames aircraft automation as a resource for pilots that should increase system safety without compromising human authority. It distinguishes forms of automation and discusses the design relationship between automated systems and the pilots responsible for the aircraft.

**What it does not establish:** It is a design framework, not a controlled experiment and not evidence about generative AI. Use it only as historical context for the idea that assistance and retained human authority have long been treated as separate design goals.

**Rights:** NASA NTRS marks the document "Work of the US Gov. Public Use Permitted."

**Publication suitability:** High for citation and historical context. No NASA artwork is required.

## Figure decision

Do **not** reproduce FAA or NASA figures. The chapter's argument is broader than any single aviation study, and importing an aviation graphic would visually overclaim that the same empirical curve applies to knowledge work.

### Original figure

**File:** `../media/ch16-cognitive-debt-maturity.svg`

**Title:** When cognitive debt matures

**Concept:** A conceptual sequence showing how assistance can reduce practice while ordinary output remains strong, leaving reserve capability largely unobserved until a future obligation arrives: an outage, edge case, audit, handoff, vendor exit, or novel failure. At that point the system either degrades gracefully because reserve capability still exists or pays the deferred cost as error, delay, retraining, or dependence.

**Rights:** Original project artwork created for *Abdicating Intelligence*. It reproduces no FAA/NASA diagrams, aircraft interfaces, logos, seals, photographs, icons, or third-party artwork.

**Credit line:** Original diagram by Sven Hardy Benson / *Abdicating Intelligence* project.

**Alt text:** A flow diagram shows assistance expanding and everyday output remaining strong while practice can thin and reserve capability stays mostly unobserved. A later trigger such as an outage, novel case, audit, handoff, or vendor exit exposes whether the reserve still exists. If it does, the system degrades gracefully; if not, the deferred cost appears as error, delay, retraining, or dependence.

**Placement:** After the chapter explains why ordinary throughput cannot reveal reserve capability and before it moves into controlled unassisted testing. This is the point where the reader needs the hidden-liability mechanism made visible.

**Formatting:** Full-width figure. Keep caption attached. Preserve high contrast and grayscale legibility. The diagram is conceptual and must not be presented with quantitative axes or implied empirical magnitudes.

**Caption:** *When cognitive debt matures.* Assistance can keep everyday output high while the underlying reserve goes mostly unmeasured. The debt becomes visible only when a future obligation still depends on the capability. Conceptual diagram; not a quantitative decay model.

## Manuscript integration boundary

A defensible aviation paragraph is:

> Aviation already treats this as a real maintenance problem. FAA flightpath-management guidance pairs automation management with manual flight operations and training rather than assuming one replaces the other. Decades earlier, a NASA-archived simulation study of fifteen experienced pilots found measurable degradation in flight-control and procedural performance after four months without practice, with rehearsal and dynamic warm-up mitigating different losses. The experiment is narrow and old; it is not a universal decay curve. It does make one point concrete: a capability can still exist on paper and become less available through disuse.

Do not convert this into a claim that AI use necessarily causes deskilling, that four months is a meaningful decay interval outside the experiment, or that aviation automation is a direct analogue for generative AI.

## Reader-facing formatting notes

- Keep the aviation evidence in one compact paragraph; do not turn Chapter 16 into another aviation chapter.
- Put the original figure immediately after the sentence that ordinary throughput cannot reveal reserve capability.
- Keep the figure caption to two sentences and retain the "conceptual, not quantitative" boundary.
- Do not add a separate sidebar unless later layout work needs one; the chapter already has a strong list of debt types and should not become visually over-sectioned.
- If print layout permits, keep the figure and caption on the same page and avoid a page break between "You cannot see reserve capability from ordinary throughput" and the figure.

## Highest-value next research opportunity

Find modern longitudinal evidence in knowledge work that separates assisted task performance from later unassisted capability. The ideal study would measure the same participants over time, distinguish immediate productivity from retained skill, and test transfer to neighboring or novel tasks. Until such evidence is strong, aviation should remain an analogy with explicit boundaries rather than a proxy for AI-induced cognitive decline.