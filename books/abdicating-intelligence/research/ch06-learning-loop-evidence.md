# Chapter 6 — learning-loop evidence and media provenance

Rechecked 2026-09-14 for the media/research enhancement pass on “The Vanishing Repetition.”

## Why this chapter now has stronger evidence

The chapter’s central distinction — AI as tutor versus AI as substitute — is no longer only a conceptual analogy. Recent randomized and field evidence shows that different AI interaction designs can produce materially different relationships between assisted performance and later learning.

### Bastani et al. (2025): assisted performance versus later unassisted performance

Hamsa Bastani, Osbert Bastani, Alp Sungu, Haosen Ge, Özge Kabakcı, and Rei Mariman studied nearly 1,000 high-school mathematics students in a field experiment using GPT-4-based tools.

The paper reports two AI conditions:

- **GPT Base**, designed to resemble a standard general-purpose chatbot experience.
- **GPT Tutor**, designed with teacher-authored safeguards and hints intended to support learning rather than simply reveal answers.

During assisted practice, both AI conditions improved student performance relative to control, with the paper reporting a 48% improvement in grades for GPT Base and 127% for GPT Tutor. When AI access was removed for the later exam, students in the GPT Base condition performed 17% worse than control. The negative unassisted effect was largely mitigated in the safeguarded GPT Tutor condition.

This is a strong fit for Chapter 6 because the intervention changes what the learner is required to do, not merely which model is available. The result should stay within scope: it is evidence from high-school mathematics using particular tutor designs, not proof that unconstrained AI use universally harms learning or that hint-oriented interfaces will always improve it.

Source:
- PNAS article / DOI: https://doi.org/10.1073/pnas.2422633122
- PMC full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC12232635/

Rights note: the PNAS article is published under **CC BY-NC-ND 4.0**. That license is not appropriate for adapting its figures into a commercial book. No article figure, table, interface screenshot, or expressive graphic is reused or redrawn here. Only factual findings and study-design distinctions are used as evidence for newly authored prose and artwork.

### Kestin et al. (2025): an AI tutor can improve learning when pedagogy is designed into the interaction

Greg Kestin, Kelly Miller, Anna Klales, Timothy Milbourne, and Gregorio Ponti reported a randomized controlled trial in an undergraduate Harvard physics course (N = 194). Their custom generative-AI tutor was intentionally built around pedagogical practices rather than simply exposing students to an unconstrained answer generator.

The authors report that students in the AI-tutor condition learned significantly more in less time than students in the in-class active-learning comparison condition, while also reporting higher engagement and motivation.

This study is useful as counterweight to a simplistic “AI removes effort, therefore AI harms learning” story. Together with Bastani et al., it supports the narrower chapter claim: **“AI assistance” is not one treatment. Interaction design can change whether the tool completes the cognitive work, structures the cognitive work, or preserves opportunities for the learner to perform it.**

Sources:
- Scientific Reports article / DOI: https://doi.org/10.1038/s41598-025-97652-6
- PubMed: https://pubmed.ncbi.nlm.nih.gov/40537565/
- PMC full text: https://pmc.ncbi.nlm.nih.gov/articles/PMC12179260/

Rights note: the published Scientific Reports article is also under **CC BY-NC-ND 4.0**. No article figure, table, screenshot, or adapted visual is reused. The evidence is cited; the project visual is independently authored.

## Classic learning-science anchors already present in the chapter

The chapter’s older evidence remains useful when kept inside its actual boundaries:

- Norman Slamecka and Peter Graf (1978), **generation effect**: participants remembered generated material better than material they merely read across the experiments reported in the paper. DOI: https://doi.org/10.1037/0278-7393.4.6.592
- Henry Roediger and Jeffrey Karpicke (2006), **retrieval practice / testing effect**: repeated testing produced stronger delayed retention than repeated study in the reported prose-learning experiments even though repeated study could increase confidence. DOI: https://doi.org/10.1111/j.1467-9280.2006.01693.x
- Manu Kapur (2008), **productive failure**: under specified instructional conditions, problem solving before instruction can support later learning; this is not a general argument for unguided struggle. DOI: https://doi.org/10.1080/07370000802212669
- K. Anders Ericsson, Ralf Krampe, and Clemens Tesch-Römer (1993), **deliberate practice**: structured experience matters for expert performance, but the manuscript correctly avoids converting this literature into a universal “10,000 hours” rule. DOI: https://doi.org/10.1037/0033-295X.100.3.363
- Brooke Macnamara, David Hambrick, and Frederick Oswald (2014), meta-analysis: deliberate practice explains meaningful but highly variable shares of performance differences across domains and very little variance in some professional/educational categories. DOI: https://doi.org/10.1177/0956797614535810

The Macnamara result is worth retaining as a restraint on the chapter’s rhetoric: practice is important, but “expertise has a production function” should not be read as “practice alone explains expertise.”

## Integrated media asset

**File:** `../media/ch06-learning-loop.svg`

**Working title:** “Same AI capability. Different learning loop.”

**Purpose:** Make visible the chapter’s strongest distinction without turning the evidence into a false universal law. The upper path shows a completion-first interaction in which a full answer can arrive before prediction, retrieval, generation, error discovery, or explanation. The lower path shows a learning-preserving interaction in which assistance is delayed or shaped around attempts, hints, feedback, revision, and occasional independent testing.

The figure is a conceptual synthesis, not a visualization of effect sizes from either study. It does not imply that every completion-first interaction reduces learning, that every hint preserves it, or that findings from mathematics and physics transfer quantitatively to programming, law, medicine, or other professions.

## Rights and provenance

The SVG is newly authored for this project. It does not reproduce, trace, adapt, or imitate any PNAS, Scientific Reports, APA, Sage, Taylor & Francis, platform, school, or commercial graphic. It contains no proprietary interface, logo, trademarked visual system, commercial icon set, or third-party illustration.

The underlying research findings, study facts, ideas, and methods are used as evidence; their original expressive presentation is not copied. The U.S. Copyright Office states that copyright does not protect facts, ideas, systems, or methods of operation, although it can protect the particular expression used to describe or illustrate them: https://www.copyright.gov/help/faq/faq-protect.html

**Attribution/credit line:** No third-party visual attribution is required for the original diagram. Keep the evidence note attached to the cited studies. A reader-facing credit may say: “Conceptual diagram by the author; evidence anchor: Bastani et al. (2025) and Kestin et al. (2025).”

**Caption:** *The same model capability can create very different developmental environments. A completion-first workflow can deliver a correct artifact while bypassing prediction, retrieval, generation, and error discovery. A learning-preserving workflow delays or shapes assistance so the learner still has to produce evidence about their own model. The diagram is conceptual; the cited experiments are educational studies, not universal effect estimates for knowledge work.*

**Alt text:** “Conceptual comparison of two AI-assisted learning paths. In the completion-first path, a task moves quickly to a full answer, acceptance or repair, and a finished artifact, while prediction, retrieval, generation, error discovery, and explanation can be bypassed. In the learning-preserving path, the learner first attempts or predicts, then receives a hint or feedback, revises and explains, and reaches the artifact with a richer practice trace. A final box recommends occasionally testing whether the learner can perform, explain, or detect error without the tool.”

## Reader-facing formatting guidance

- Place the figure after the chapter establishes that AI can function as either tutor or substitute and after the short 2025 evidence paragraph.
- Keep the whole two-path comparison together. Do not split the upper and lower paths across pages.
- Prefer full text width in print. The comparison depends on the reader seeing both paths at once.
- Preserve grayscale contrast. The figure does not depend on color.
- Keep the caption attached to the figure and retain the “conceptual, not cross-domain effect estimate” qualifier.
- In EPUB/HTML, use the manuscript alt text or the SVG’s embedded description rather than a filename-derived label.
- Do not reproduce charts or screenshots from either 2025 paper alongside this figure unless separate commercial publication rights are verified.

## Editorial implication

Chapter 6 can now move beyond an entirely hypothetical programmer example. The best use of the new evidence is not to claim that AI is educationally dangerous. It is to make the chapter’s more interesting claim harder to dismiss: **the learning consequence depends partly on which cognitive events the interface still requires the person to perform.**

That framing also protects the manuscript from overclaiming. One 2025 study shows a guardrail design avoiding a negative unassisted-performance effect in high-school mathematics; another shows a pedagogy-rich AI tutor outperforming an active-learning comparison in college physics. The tension is productive. It points toward design, not prohibition.