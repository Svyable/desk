# Chapter 18 — Useful friction evidence and media

## Editorial purpose

Ground the chapter's argument that friction should be selective, purpose-specific, and placed before consequential boundaries. Use mature safety domains to show two distinct mechanisms: protecting attention during critical phases and avoiding warning/decision overload that trains users to ignore controls. Do not imply that aviation or cybersecurity rules are direct evidence about generative AI behavior.

## Source 1 — FAA sterile cockpit rule / 14 CFR § 121.542

**Source:** Federal Aviation Administration, 14 CFR § 121.542, *Flight crewmember duties*.

**FAA PDF:** https://www.faa.gov/sites/faa.gov/files/2022-11/121.542%20Flight%20crewmember%20duties.pdf

**Authority:** Federal aviation regulation administered by the FAA.

**What it establishes:** During critical phases of flight, flight crewmembers may not perform duties unrelated to safe operation or engage in activities that could distract from those duties. The rule defines critical phases to include taxi, takeoff, landing, and other operations below 10,000 feet except cruise flight. The design logic is useful here because interruption is not universal: nonessential activity is restricted specifically when attention has unusually high consequence.

**What it does not establish:** This is not evidence about AI interfaces, knowledge work, or the optimal amount of cognitive friction. It should be used as an institutional example of phase-specific attention protection, not as a behavioral experiment.

**Rights:** U.S. federal government regulation and FAA source material. Original federal text is generally not subject to U.S. copyright under 17 U.S.C. § 105. Avoid reproducing FAA seals, logos, photographs, or separately credited third-party material.

**Publication suitability:** High for citation, paraphrase, and short attributed quotation. No FAA figure or cockpit image is needed.

**Credit if quoted:** Federal Aviation Administration, 14 CFR § 121.542, *Flight crewmember duties*.

## Source 2 — AHRQ PSNet on checklists and human-factors forcing functions

**Source:** Agency for Healthcare Research and Quality Patient Safety Network, *Checklists* and *Human Factors Engineering* primers.

**Checklist primer:** https://psnet.ahrq.gov/primer/checklists

**Human factors primer:** https://psnet.ahrq.gov/primer/human-factors-engineering

**Authority:** AHRQ Patient Safety Network, U.S. Department of Health and Human Services. The checklist primer was last reviewed in 2024.

**What it establishes:** AHRQ describes checklists as tools for reducing slips in suitable clinical tasks and warns that checklist effectiveness depends on appropriate targeting and implementation. Its human-factors primer describes forcing functions as designs that prevent an undesirable action or require another action first. Together, the material supports a narrow distinction in the chapter: some friction exists to prevent an unsafe transition, while other tasks need training, supervision, or decision support rather than another checklist.

**What it does not establish:** These primers do not establish that all high-stakes AI actions should require human confirmation, nor that checklists improve every cognitive task. The chapter should preserve AHRQ's own warning that poorly targeted checklists can be ineffective.

**Rights:** AHRQ is a U.S. federal agency, but PSNet pages can contain editorial and third-party contributions. Treat factual paraphrase and citation as clean; do not reproduce page graphics or long text passages without item-level rights review.

**Publication suitability:** High for factual support and paraphrase. Do not reproduce PSNet artwork.

## Source 3 — NIST research on security fatigue

**Source:** National Institute of Standards and Technology, “Security Fatigue Can Cause Computer Users to Feel Hopeless and Act Recklessly, New Study Suggests,” October 4, 2016.

**URL:** https://www.nist.gov/news-events/news/2016/10/security-fatigue-can-cause-computer-users-feel-hopeless-and-act-recklessly

**Authority:** NIST summary of a multidisciplinary study of ordinary computer users' security decision burden.

**What it establishes:** NIST reports that users who feel overwhelmed by repeated security decisions can experience security fatigue, resignation, and loss of control, with behavior shifting toward avoidance, the easiest available option, impulsive choice, or failure to follow security rules. This supports the chapter's claim that repeated friction can destroy its own signal.

**What it does not establish:** The study is about cybersecurity behavior, not AI approval flows. It does not provide a universal threshold for warning frequency or prove that every repeated confirmation produces habituation.

**Rights:** NIST is a U.S. federal agency. Original NIST government text is generally public domain in the United States under 17 U.S.C. § 105, but embedded images and externally sourced material may have separate rights. No NIST artwork is required.

**Publication suitability:** High for paraphrase and citation. Prefer the behavioral finding over reproducing screenshots or page graphics.

**Credit if quoted:** National Institute of Standards and Technology, “Security Fatigue Can Cause Computer Users to Feel Hopeless and Act Recklessly,” Oct. 4, 2016.

## Figure decision

Do **not** reproduce FAA cockpit graphics, AHRQ diagrams, NIST screenshots, seals, logos, or third-party photographs. They add little explanatory value and create avoidable rights or endorsement concerns.

### Original figure

**File:** `../media/ch18-friction-routing.svg`

**Title:** Put friction where the consequence changes

**Concept:** A routing diagram separates three interaction contracts. Low-stakes reversible work proceeds with little interruption. Learning work pauses for prediction, retrieval, explanation, or comparison. Consequential or irreversible work pauses before commitment for authorization, verification, or an independent party. A separate panel shows why friction loses signal when every step becomes a warning.

**Rights:** Original project artwork created for *Abdicating Intelligence*. It reproduces no FAA, AHRQ, NIST, vendor, product, medical, or aviation artwork.

**Credit line:** Original diagram by Sven Hardy Benson / *Abdicating Intelligence* project.

**Alt text:** A task enters an AI system and is routed according to purpose and stakes. Low-stakes reversible work receives little interruption. Learning tasks pause for prediction, retrieval, explanation, or comparison. Consequential actions pause before commitment for authorization, verification, or a second party. A note explains that repeated warnings become background noise and can train users to click through them.

**Placement:** After “Friction must be scarce enough to retain signal” and before the chapter moves into examples of selective interruption. This makes the routing principle visible at the exact point where the manuscript distinguishes useful friction from warning fatigue.

**Formatting:** Full-width figure. Keep caption attached to the SVG. Preserve grayscale legibility and sufficient whitespace above and below. Do not add quantitative axes, percentages, or risk scores; the diagram is conceptual.

**Caption:** *Put friction where the consequence changes.* Low-stakes reversible work, learning, and consequential commitment need different interaction contracts. Repeating the same interruption everywhere weakens its signal. Conceptual diagram; not a quantitative risk model.

## Manuscript integration boundary

A defensible evidence paragraph is:

> Mature safety systems already distinguish between friction everywhere and friction at the boundary that matters. The FAA's sterile-cockpit rule restricts nonessential duties and conversation during critical phases of flight rather than throughout the entire trip. AHRQ makes a similar human-factors distinction in medicine: checklists and forcing functions can prevent slips or block unsafe transitions, but poorly targeted checklists are not a substitute for training or judgment. The point is not that AI should imitate aviation or hospitals. It is that interruption works best when the system can name the failure it is trying to prevent.

For warning overload, a defensible sentence is:

> NIST research on “security fatigue” found that people overwhelmed by repeated security decisions can become resigned and default to avoidance or the easiest option. Friction that fires constantly can train the user to stop reading it.

Do not claim that these sources identify an optimal AI approval frequency or validate a universal “autonomy budget.”

## Reader-facing formatting notes

- Keep the evidence compact; Chapter 18 should remain a design argument, not become another aviation chapter.
- Place the original figure immediately after the warning-fatigue section.
- Keep the caption to three short sentences and retain the “conceptual, not quantitative” qualification.
- The three jobs of friction—consequence, learning, agency—should remain visually distinct in prose even though the figure routes by practical interaction mode.
- Avoid additional decorative sidebars. The chapter already uses examples heavily; the figure should do structural work.

## Highest-value next research opportunity

Find controlled or longitudinal evidence on AI interfaces that compares immediate convenience with later user calibration, learning, or ability to notice consequential errors. The best evidence would vary when an assistant interrupts, require prediction or independent judgment in some conditions, and measure both short-term completion and later unassisted performance. Until then, aviation, patient safety, and cybersecurity should remain bounded design precedents rather than empirical proxies for AI cognition.
