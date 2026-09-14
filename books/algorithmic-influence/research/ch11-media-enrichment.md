# Chapter 11 media enrichment — feed effects matrix

Checked 2026-09-13 for Chapter 11, “Campaigning for the Recommender.”

## Added asset

`../assets/ch11-feed-effects-matrix.svg`

**Working title:** *The feed changes first. Persuasion is conditional.*

**Recommended placement:** immediately after the manuscript sequence beginning “The cleanest way to see why is to put three experiments beside one another” and ending with the three short interpretive paragraphs for Meta, X, and the redesigned custom feed. In a print layout, keep the figure and caption together on the next available full or half page rather than splitting the three experiment panels across a page break. In EPUB/web, render the SVG at full text-column width and allow tap/zoom rather than shrinking the labels below comfortable reading size.

**Caption:** Three feed experiments do three different causal jobs. Meta’s 2020 election study shows that large changes in exposure do not guarantee measurable attitude change. A 2023 X field experiment shows that algorithmic ranking can, in one platform configuration and period, change both exposure and selected political attitudes. A custom-feed experiment around the 2024 U.S. election shows that ranking objectives can themselves be redesigned. The political effect therefore belongs to a particular ranking rule, platform state, content supply, population, and moment—not to “the algorithm” in general.

**Alt text:** Three-panel comparison of feed experiments. Meta’s 2020 election experiment changed content exposure but did not significantly change several measured political attitudes. A 2023 X experiment changed exposure and shifted selected political attitudes when some users switched from chronology to an algorithmic feed, while switching the algorithm off did not symmetrically reverse effects. A custom-feed experiment around the 2024 election reduced intergroup, moralized, emotional, and toxic content and improved some social-norm perceptions without reducing reported enjoyment. The figure concludes that ranking is not one treatment and chronology is not the only alternative.

## Rights and provenance

The SVG is an **original diagram created for this repository**. It does not reproduce any Nature figure, screenshot, platform interface, logo, seal, or copyrighted artwork. Its shapes, typography, layout, labels, and synthesis are newly authored. The underlying facts are ideas/results described in the cited research and are expressed here in original language.

This choice is deliberate. The Nature pages for the two 2026 studies state that Springer Nature or its licensor holds exclusive rights to the articles and provides a separate reprints-and-permissions path. That makes direct reuse of the published figures a poor default for a commercial book unless specific permission is obtained. The book therefore uses an original synthesis rather than copying those figures.

### Source 1 — X field experiment

Gauthier, Hodler, Widmer & Zhuravskaya, “The political effects of X’s feed algorithm,” *Nature* 652 (2026), 416–423.

DOI: https://doi.org/10.1038/s41586-026-10098-2

Nature article: https://www.nature.com/articles/s41586-026-10098-2

Evidence used in the diagram: active U.S.-based X users were randomized between algorithmic and chronological feeds for seven weeks in 2023; switching onto the algorithmic feed increased engagement, changed exposure, shifted selected political opinions in a conservative direction, and led users to follow conservative activist accounts; switching the algorithm off did not produce comparable attitude effects. The authors explicitly limit generalization to the platform configuration and period studied.

**Reuse status:** do not reproduce the article’s figures without a separate rights determination/permission. Facts and findings may be summarized with citation; this asset is an original explanatory synthesis.

### Source 2 — redesigned/custom feeds

Brady et al., “Redesigning algorithms to intervene on social norm misperceptions during a national election,” *Nature* 655 (2026), 942–956.

DOI: https://doi.org/10.1038/s41586-026-10536-1

Nature article: https://www.nature.com/articles/s41586-026-10536-1

Published 2026-05-27; issue date 2026-07-23.

Evidence used in the diagram: 2,000 participants were randomly assigned to custom feed-ranking algorithms for eight weeks around the 2024 U.S. presidential election. The diversified-extremity algorithm reduced exposure to intergroup, moralized, emotional, and toxic content, improved prescriptive norm accuracy, and maintained comparable platform enjoyment.

**Reuse status:** the Nature page states Springer Nature or its licensor holds exclusive rights. Do not reuse the published figures by default. Use the original synthesis in this repository instead.

### Source 3 — Meta chronological-feed experiment

Guess et al., “How do social media feed algorithms affect attitudes and behavior in an election campaign?” *Science* 381 (2023), 398–404.

DOI: https://doi.org/10.1126/science.abp9364

Evidence used in the diagram: replacing algorithmic ranking with reverse chronology substantially changed what consenting Facebook and Instagram users saw and reduced time spent on the platforms, while producing no statistically significant effects on several measured political attitudes and knowledge outcomes.

**Reuse status:** this enrichment pass does not copy any Science figure or artwork. Treat article figures as third-party copyrighted material unless a specific open license or permission is verified.

## Reader-formatting rules

- Keep the three experiment panels in one figure; do not paginate them independently.
- Do not reduce body labels below the surrounding book’s comfortable small-caption size. If the print trim makes the figure too dense, move it to a full page rather than compressing it.
- Caption below the figure; source note immediately after the caption in smaller type.
- The source note should cite the three papers, not imply that the publishers endorsed this synthesis.
- Preserve the accessible `<title>` and `<desc>` metadata in SVG/HTML output.
- For EPUB, include the supplied alt text even if the SVG’s internal description survives conversion.
- Do not add platform logos. The experiment names are sufficient and avoid needless trademark/branding clutter.
- Use sentence case for the figure title and caption, matching the manuscript’s restrained hierarchy.

## Why this earns its space

This is not decorative media. Chapter 11 asks the reader to remember three experiments whose apparent conflict is the argument. The figure externalizes that cognitive load. Its left-to-right sequence makes the chapter’s central distinction visible: exposure is the more consistent effect; downstream persuasion depends on the actual ranking intervention and context; ranking can also be redesigned rather than merely turned off.

The asset also prevents an easy visual mistake: showing a generic “algorithm” box would reinforce the very abstraction the chapter is trying to dismantle.

## Highest-value next media opportunities

1. **Chapter 13 — publisher → answer engine → reader → publisher loop.** Build an original flow diagram showing where attribution, referral traffic, licensing, and source visibility can be lost or transformed. This can clarify the answer-engine argument without reproducing proprietary interfaces.
2. **Chapter 7 — worker/platform information asymmetry.** A compact two-sided information map could show what the worker can observe versus what the scoring/dispatch system can observe, infer, and withhold.
3. **Book-level recursive systems map.** Near the conclusion, consider one restrained synthesis figure connecting creators, workers, campaigns, sellers, and publishers through the shared pattern: machine allocation → human adaptation → signal decay → model update. Avoid adding this until the chapter-level figures establish a consistent visual grammar.
