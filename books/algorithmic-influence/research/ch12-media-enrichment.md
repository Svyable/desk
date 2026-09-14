# Chapter 12 media enrichment — synthetic competition feedback loop

## Asset added

- **File:** `../assets/ch12-synthetic-competition-loop.svg`
- **Working title:** *Cheap variation makes the filter more consequential.*
- **Type:** original explanatory feedback-loop diagram
- **Purpose:** make Chapter 12's core mechanism visible: lower marginal generation cost can expand the candidate pool without expanding human attention, increasing the importance of selection and creating stronger incentives for producers to optimize against the selector.

## Recommended manuscript placement

Place the figure immediately after the passage ending **“The production process begins to meet the distribution system on its own computational terms.”** The preceding paragraphs establish cheap variation and machine-speed testing; the figure then consolidates the feedback loop before the manuscript moves into concrete examples and the limits of the “AI slop” label.

### Caption

*Generation can become cheaper without attention becoming more abundant. More candidates compete for finite positions; selectors respond with stronger ranking, filtering, provenance, satisfaction, reputation, originality, or anti-spam signals; producers then learn what survives and generate again. The diagram is conceptual rather than quantitative, and the signals differ by system. The structural point is the loop: cheap variation makes selection more consequential, and consequential selection becomes something producers optimize around.*

### Alt text

Four-stage feedback-loop diagram titled “Cheap variation makes the filter more consequential.” Stage one says generation gets cheap and lists more candidates per idea, including headlines, images, listings, clips, translations, summaries, and messages. Stage two says supply expands and notes that finite positions in feeds, search, marketplaces, inboxes, answers, or shelves face more candidates. Stage three says selection gets stronger and lists ranking, spam controls, satisfaction, originality, reputation, and provenance as possible evidence. Stage four says producers adapt by testing, measuring, rewriting, and regenerating what survives. Arrows connect the four stages in a loop. The center says human attention does not scale with output. A note says the diagram is conceptual, not quantitative, and exact signals vary by system.

## Rights and provenance

The SVG is newly authored for this manuscript. It contains no platform screenshots, logos, trademarks, proprietary interface geometry, commercial icon sets, copied charts, or traced source artwork. Its boxes, arrows, typography, labels, and composition are original.

The sources below are used as factual and conceptual grounding only. No third-party figure is reproduced.

### NIST AI 600-1 — federal publication and content-provenance grounding

**Source:** National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, NIST AI 600-1, July 2024  
https://doi.org/10.6028/NIST.AI.600-1  
https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence

**Authority:** U.S. National Institute of Standards and Technology, U.S. Department of Commerce.

**Rights / publication suitability:** NIST states that works authored by NIST employees in its Technical Series are not subject to U.S. copyright protection; for rights NIST may assert outside the United States, it grants a non-exclusive, perpetual, paid-up, royalty-free worldwide right to reprint in all formats and make derivative works. NIST also cautions that some publications can contain third-party material. This pass does not reproduce any NIST figure or third-party element, so that caveat does not affect the new diagram.

**Recommended credit if NIST material is ever directly republished:** follow NIST's requested citation and “Republished courtesy of the National Institute of Standards and Technology.” No such direct republication occurs in the current figure.

**Research use here:** NIST identifies information-integrity risk partly in terms of lowered barriers to generating and exchanging content at scale. Its content-provenance appendix describes provenance tracking as information about the origin and history of content and discusses metadata, watermarking, fingerprinting, and human authentication as possible techniques. That supports the manuscript's narrower claim that cheap generation makes provenance and other trust signals strategically more valuable; it does **not** establish that provenance is a quality score or that any particular platform must use it.

**Boundary:** NIST AI 600-1 is a risk-management profile, not empirical proof of the entire four-stage market loop drawn here. The figure therefore remains explicitly conceptual.

**Rights policy:**  
https://www.nist.gov/nist-research-library/nist-publications  
https://www.nist.gov/open/copyright-fair-use-and-licensing-statements-srd-data-software-and-technical-series-publications

### C2PA — provenance is history, not truth

**Source:** Coalition for Content Provenance and Authenticity, *C2PA Technical Specification* and *C2PA and Content Credentials Explainer*  
https://spec.c2pa.org/specifications/specifications/2.2/specs/C2PA_Specification  
https://spec.c2pa.org/specifications/specifications/2.2/explainer/Explainer.html

**Creator / institution:** Coalition for Content Provenance and Authenticity (C2PA).

**License:** Creative Commons Attribution 4.0 International (CC BY 4.0), as stated on the specification/explainer pages.

**Attribution if text or artwork is reused:** identify C2PA as the source, link the source and CC BY 4.0 license, and indicate modifications. The current diagram does not copy C2PA artwork or expressive text, so no CC-licensed element is embedded in the asset.

**Research use here:** C2PA defines provenance in terms of an asset's history and explicitly separates validation of provenance information from judgments about whether content is true or good. That distinction supports Chapter 12's existing sentence that provenance is evidence about origin rather than a universal quality score.

**Boundary:** do not add the Content Credentials logo, C2PA marks, or user-interface examples merely because the specification is CC BY. Those marks can carry separate branding and UX requirements and add no explanatory value to this figure.

### Montero-Porras, Smets, and Lenaerts — platform/creator co-adaptation

**Source:** Eladio Montero-Porras, Annelien Smets, and Tom Lenaerts, “Enshittification of Algorithmic Recommendation: An Evolutionary Model of Platform-Creator Dynamics,” *HHAI 2026*, first published online August 19, 2026  
https://doi.org/10.3233/FAIA260512

**Research use here:** the paper supplies a formal, deliberately stylized evolutionary-game model of co-adaptation between a recommender and strategic creators. It supports the chapter's careful statement that there is active theoretical work on feedback between creator incentives and recommendation policy.

**Rights / reuse decision:** the publisher page inspected for this pass did not expose a clear Creative Commons or other commercial-reuse license for the article figures. Therefore **do not reuse, trace, crop, recolor, or redraw its figures**. Cite the paper for the model and keep this book's diagram independently designed and qualitative.

**Boundary:** the paper itself says its model is intentionally minimal and uses simplifying assumptions. Do not turn its modeled tipping points or calibrated parameters into empirical claims about real platforms without separate evidence.

## Manuscript research upgrade

The chapter contains three claims that should remain distinct:

1. **Observed capability/economics:** generative systems lower the effort required to produce many kinds of candidate content and variants.
2. **Institutional mechanism:** finite attention and finite display positions make selection necessary even when production becomes abundant.
3. **Theoretical feedback:** creators and selectors can co-adapt, but the exact equilibrium is platform-, market-, and policy-dependent.

The new figure visualizes claim 2 and the plausible feedback connecting it to claims 1 and 3. It does not pretend to measure the size of any arrow.

The provenance section should also keep a separate distinction:

- **provenance:** evidence about origin/history/process;
- **truth:** whether a claim corresponds to reality;
- **quality:** whether an artifact is useful, valuable, original, or satisfying;
- **authenticity:** context-dependent and not reducible to “human-made.”

NIST and C2PA both justify keeping those categories apart.

## Reader-formatting guidance

- Keep all four loop stages and the central “human attention” circle on one page/screen. A page break inside the loop defeats the point.
- Use full text-column width in EPUB/web. In print, prefer 90–100% of usable page width or a dedicated figure page if reduction makes the stage labels small.
- Keep the caption immediately attached to the figure.
- Preserve the bottom qualifier that the graphic is conceptual rather than quantitative.
- The figure is grayscale-safe; stage identity is carried by location and text rather than color.
- Do not add decorative “AI” imagery, robot heads, platform logos, generated-content mosaics, or screenshots. They would date quickly and add rights risk without clarifying the mechanism.
- If figure numbering is introduced later, put the number in the caption/manuscript layer rather than the SVG so editions can renumber cleanly.
- In EPUB export, retain the SVG `title`, `desc`, and manuscript alt text; do not rasterize unless the production pipeline requires it.

## Highest-value follow-on opportunities

1. **Chapter 16 — recursive influence.** Build the book-level synthesis figure connecting measurement → behavioral adaptation → changed data → model update → changed incentives, while avoiding duplication of the chapter-specific diagrams.
2. **Abdicating Intelligence, Chapter 1.** Visualize the difference between review count and independent verification in the “one machine writes, another checks, a third summarizes” sequence, grounded in automation-bias/verification research rather than proprietary interfaces.
3. **Chapter 12 research packet follow-up.** If a later edition wants a quantitative sidebar, look for open datasets measuring content volume, duplication, or platform spam interventions over time. Do not infer a time series from anecdotal “AI slop” reporting.