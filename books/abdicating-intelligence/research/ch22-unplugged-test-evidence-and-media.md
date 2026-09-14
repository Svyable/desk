# Chapter 22 — Unplugged test evidence and media

## Editorial purpose

Give the chapter two kinds of support without turning it into a safety manual or an education chapter: direct evidence that AI-assisted performance can diverge from later unassisted performance, and an established operational precedent for low-risk exercises that test plans and capabilities before a real disruption does. Keep both claims narrow.

## Source 1 — Bastani et al., unassisted performance after generative-AI practice

**Source:** Hamsa Bastani, Osbert Bastani, Alp Sungu, Haosen Ge, Özge Kabakcı, and Rei Mariman, “Generative AI without guardrails can harm learning: Evidence from high school mathematics,” *Proceedings of the National Academy of Sciences* 122(26), published June 25, 2025. DOI: https://doi.org/10.1073/pnas.2422633122

**Publisher page:** https://www.pnas.org/doi/10.1073/pnas.2422633122

**Authority:** Peer-reviewed randomized controlled field experiment in a high school, focused on mathematics and GPT-4-based tutoring.

**What it establishes:** Students were randomly assigned to standard resources, a general GPT-4-style tutor (“GPT Base”), or a safeguarded tutor designed with teacher input (“GPT Tutor”). Access to either AI system improved performance on assisted practice problems. When AI access was removed for the subsequent exam, the GPT Base group performed statistically significantly worse than the control group; the paper reports a 17% reduction relative to the control mean. The safeguarded GPT Tutor group was statistically indistinguishable from control on the unassisted exam. The study therefore gives the chapter a direct example of why assisted performance and later independent capability should be measured separately.

**Important limits:** This is one subject, one school in Turkey, short-term learning, and a 2023 deployment of specific GPT-4 tutoring interfaces. It does not establish generalized cognitive decline, professional deskilling, long-run effects, or the effect of every AI assistant. The authors themselves call for further work on generalizability and long-term outcomes.

**Correction status:** The PNAS article page notes an August 20, 2025 correction. Use the current publisher version and do not quote or redraw numerical details from an older copy without checking the corrected record.

**Rights / license:** The article is distributed under **CC BY-NC-ND 4.0**. That license is not suitable for reusing or adapting its figures in a commercial book. Do **not** reproduce, crop, redraw, trace, or adapt PNAS figures, tables, screenshots, prompts, or page design. Facts, study design, and reported findings may be cited and paraphrased with normal scholarly attribution; keep quoted language minimal.

**Publication suitability:** High for factual citation and bounded paraphrase. Not suitable as a reusable visual asset for this commercial project.

**Recommended manuscript use:** One compact paragraph in the transfer section. The strongest framing is not “AI makes students worse”; it is “assisted performance can conceal what happens when assistance is removed, and interface design can change that relationship.”

## Source 2 — NIST SP 800-84 on exercising plans and capabilities

**Source:** Timothy Grance, Tamara Nolan, Kristin Burke, Rich Dudley, Gregory White, and Travis Good, *Guide to Test, Training, and Exercise Programs for IT Plans and Capabilities*, NIST Special Publication 800-84, September 2006. DOI: https://doi.org/10.6028/NIST.SP.800-84

**Official landing page:** https://csrc.nist.gov/pubs/sp/800/84/final

**NIST publication page:** https://www.nist.gov/publications/guide-test-training-and-exercise-programs-it-plans-and-capabilities

**Official PDF:** https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-84.pdf

**Authority:** NIST Special Publication guidance on designing, conducting, and evaluating tests, training, tabletop exercises, functional exercises, and tests for IT plans and capabilities.

**What it establishes:** NIST treats exercises as structured ways to train personnel, exercise plans, test systems, and evaluate preparedness for adverse situations. The publication distinguishes tabletop exercises, functional exercises, and tests, and emphasizes defined scope, objectives, participants, conduct, and evaluation. This supports the chapter’s operational analogy: a low-risk exercise can expose hidden dependencies and capability gaps before an actual outage or failure.

**What it does not establish:** NIST SP 800-84 is about IT contingency/security preparedness, not AI skill retention, education, or “cognitive reserve.” It should be used as an exercise-design precedent, not as evidence that unplugged AI tests improve cognition.

**Rights / license:** NIST states that SP 800-series publications are not subject to copyright in the United States and that attribution is appreciated. NIST’s broader publication policy also warns that some third-party-authored material can have separate rights. For this project, cite and paraphrase the publication but **do not reproduce its figures, templates, screenshots, or third-party elements**. This avoids unnecessary rights ambiguity while retaining the authoritative operational precedent.

**NIST rights reference:** https://www.nist.gov/itl/publications-0/nist-special-publication-800-series-general-information

**Publication suitability:** High for citation, paraphrase, and the general exercise-design precedent. No NIST artwork is needed.

**Suggested credit if a short quotation is ever used:** National Institute of Standards and Technology, *NIST SP 800-84*, September 2006. Keep any quotation brief and verify it against the current official PDF.

## Figure decision

Do **not** reproduce the PNAS charts or tutor screenshots because CC BY-NC-ND is incompatible with adapting them for a commercial book. Do **not** reproduce NIST exercise diagrams or templates; they add less explanatory value than a purpose-built original figure and may include separately authored material.

### Original figure

**File:** `../media/ch22-unplugged-test.svg`

**Title:** The unplugged test measures the reserve

**Concept:** Normal operation measures real combined capability. A temporary test condition removes, distrusts, or masks one dominant cognitive dependency. The result can reveal four different things: reserve is retained; transfer is weak; fallback architecture is brittle; or the old reserve is obsolete and should no longer be required. The bottom rule makes the governance point explicit: test the capability that still carries responsibility, then redesign training, workflow, fallback, or accountability based on what the test reveals.

**Rights:** Original project artwork created for *Abdicating Intelligence*. It reproduces no PNAS, NIST, OpenAI, school, vendor, product, interface, table, graph, seal, logo, or third-party artwork.

**Credit line:** Original diagram by Sven Hardy Benson / *Abdicating Intelligence* project.

**Alt text:** A conceptual diagram contrasts normal assisted operation with a temporary unplugged test. Normal operation combines the human, AI, records, workflow, and infrastructure. The test temporarily removes or distrusts one dominant dependency. Four possible findings follow: reserve capability is retained, transfer is weak, fallback architecture is brittle, or the old reserve is obsolete. A design rule says to test capabilities that still carry responsibility and use the result to redesign training, workflow, fallback, or accountability rather than punish people.

**Placement:** Immediately after the paragraph ending “A test turns belief into evidence.” At that point the chapter has established the mismatch between policy claims and actual practice but has not yet listed example drills. The figure gives the reader the interpretation framework before the examples arrive.

**Formatting:** Full-width figure; keep image and caption together across page breaks. Maintain grayscale legibility and readable labels at print size. Do not add numerical scales, scores, or maturity levels. This is a conceptual interpretation diagram, not a quantitative model.

**Caption:** *The unplugged test measures the reserve.* Normal operation should measure combined capability; a temporary removal test asks a different question: what still works when one dominant cognitive dependency disappears or becomes untrusted? A weak result may mean lost transfer, brittle fallback architecture, or simply that an old skill no longer deserves reserve. The purpose is diagnosis and redesign, not purity or punishment.

## Manuscript integration boundary

A defensible evidence paragraph is:

> There is now a direct example of why the distinction matters. In a 2025 randomized field experiment with nearly a thousand high-school math students, access to GPT-4-based tutors improved performance on assisted practice. But when the AI was removed for a later exam, students who had used the more general GPT interface performed worse than students who had never received AI assistance; a tutor designed with learning safeguards largely eliminated that penalty. The result is narrow—one school, one subject, short-term outcomes, specific tutor designs—but useful. Assisted performance and retained capability are not the same measurement.

Do not generalize this study to adult professionals, all knowledge work, long-term cognitive decline, or every tutoring architecture. Do not state that AI assistance necessarily causes deskilling. Preserve the study’s positive finding as well: interface design changed the outcome materially.

A defensible operational bridge is:

> The logic is already familiar in resilience engineering. NIST guidance for IT preparedness treats tabletop and functional exercises as low-risk ways to test plans, systems, roles, and recovery capability before a real disruption does it for you. A cognitive unplugged test borrows the structure, not the domain claim.

Do not imply that NIST recommends AI “unplugged tests.”

## Reader-facing formatting notes

- Place the original figure after “A test turns belief into evidence.”
- Keep the PNAS evidence in the transfer section, not the opening, so the chapter does not become an education chapter.
- Keep the NIST exercise precedent adjacent to the existing tabletop-exercise passage.
- Link the first PNAS mention to the DOI/publisher page and the NIST mention to the official NIST landing page.
- Retain the distinction between testing an individual and diagnosing a system. The evidence should sharpen that distinction, not weaken it.
- Keep image and caption together. Avoid page breaks after the figure title or before its caption.

## Rejected or deferred media

- **PNAS figures/tables/screenshots:** Rejected for book reuse. CC BY-NC-ND 4.0 is incompatible with commercial adaptation/republication in this project.
- **PNAS prompt screenshots:** Rejected. Same license issue, plus they would date the chapter to one interface design.
- **NIST exercise templates/graphics:** Rejected. The factual precedent is useful; the original figure is clearer and avoids separately authored-material ambiguity.
- **Stock imagery of a classroom, outage, or person without a laptop:** Rejected. Decorative and weaker than the mechanism.
- **A chart presenting the reported 17% result as a general “AI learning penalty”:** Rejected. It would visually overgeneralize a narrow study.

## Highest-value next research opportunity

Find longitudinal evidence in professional or adult knowledge-work settings that measures both assisted output and later **unassisted transfer** on neighboring or novel tasks. The ideal design would randomize assistance style, follow participants across weeks or months, distinguish retrieval from reasoning and domain knowledge, and test whether any loss is reversible with changed interface design or practice. A second high-value line is evidence on organizational drills where backup capability was believed to exist but failed under exercise, especially where the post-exercise corrective action changed training, records, authority, or system architecture rather than merely documenting the failure.
