# Chapter 1 research audit — verification under reliable automation

Checked 2026-09-14 against the current Chapter 1 manuscript, book research brief, repository prose standards, and active pull requests.

## Editorial target

Chapter 1’s strongest move is the transition from *Mata v. Avianca* to the harder problem: an unreliable system invites checking, while a system that is usually right can make checking feel duplicative. The intuition is good, but the current text risks sounding like a monotonic law — the more reliable the automation becomes, the more dangerous verification becomes.

The evidence supports a narrower and more useful claim. High and stable reliability can degrade monitoring under some multitask conditions, but the effect depends on workload, reliability history, task design, accountability, error visibility, and whether the human has information the automation does not. Better automation can also improve combined performance substantially.

## Primary / authoritative evidence

### Stable reliability can reduce monitoring

Singh, Molloy, and Parasuraman studied a flight-simulation task in which subjects monitored an automated system while also performing tracking and fuel-management tasks. One group experienced automation that stayed at 87.5% reliability; another experienced reliability that alternated between 87.5% and 56.25%. Monitoring for automation failure was inefficient when reliability remained constant but not when reliability varied. The result is directly useful for the chapter because it gives the “usually right” argument a mechanism: stable success changes the allocation of attention.

Source: Singh, I. L., Molloy, R., & Parasuraman, R. (1997), “Automation-induced monitoring inefficiency: role of display location,” *International Journal of Human-Computer Studies* 46(1), 17–30. DOI: https://doi.org/10.1006/ijhc.1996.0081

### Expertise and teams do not automatically remove automation bias

Mosier, Skitka, Heers, and Burdick studied glass-cockpit pilots and defined automation bias as omission and commission errors caused by treating automated cues as a heuristic substitute for vigilant information seeking. Pilots who reported a stronger internalized sense of accountability were more likely to double-check automation against other cues and less likely to make errors, but expertise itself did not make the phenomenon disappear.

Skitka, Mosier, Burdick, and Rosenblatt later compared two-person crews with solo performers. Teams were not immune: both teams and individuals sometimes failed to respond when automation omitted a cue and sometimes followed an incorrect automated directive despite contradictory system information. Training reduced commission errors but not omission errors.

Sources:
- Mosier, K. L., Skitka, L. J., Heers, S., & Burdick, M. (1997), “Automation bias: decision making and performance in high-tech cockpits.” DOI: https://doi.org/10.1207/s15327108ijap0801_3
- Skitka, L. J., Mosier, K. L., Burdick, M., & Rosenblatt, B. (2000), “Automation bias and errors: are crews better than individuals?” DOI: https://doi.org/10.1207/S15327108IJAP1001_5

### The best counterargument: assistance can improve human performance

The chapter should not turn monitoring failures into a general presumption against machine assistance. A 2025 randomized physician study found that GPT-4 recommendations improved guideline-based decision accuracy in standardized chest-pain cases. The effect was positive for both patient groups tested and did not worsen the measured demographic disparity. This is exactly the kind of counterevidence Chapter 1 needs: delegated cognition can raise the quality of the combined system rather than merely erode vigilance.

Source: Goh, E. et al. (2025), “Physician clinical decision modification and bias assessment in a randomized controlled trial of AI assistance,” *Communications Medicine* 5, 59. DOI: https://doi.org/10.1038/s43856-025-00781-2

### But incorrect AI can pull experts away from correct judgments

A 2024 *Nature Medicine* study of 140 radiologists across 15 chest-X-ray tasks found heterogeneous effects from AI assistance. Inaccurate AI predictions worsened radiologist performance overall and on half of the individual pathologies studied. Years of experience, subspecialty, and familiarity with AI did not reliably predict who would benefit. A separate 2024 clinical-vignette study found standard AI predictions modestly improved diagnostic accuracy, while systematically biased predictions reduced it substantially; commonly used explanations did not reliably neutralize the harm.

Sources:
- Yu, F. et al. (2024), “Heterogeneity and predictors of the effects of AI assistance on radiologists,” *Nature Medicine*. DOI: https://doi.org/10.1038/s41591-024-02850-w
- Jabbour, S. et al. (2023/2024), “Measuring the Impact of AI in the Diagnosis of Hospitalized Patients: A Randomized Clinical Vignette Survey Study.” PubMed: https://pubmed.ncbi.nlm.nih.gov/38112814/

## Strongest counterargument

The dangerous version of the thesis would be: as automation accuracy rises, human verification necessarily becomes worse, so highly capable systems are inherently more dangerous to supervise.

The evidence does not justify that. Automation can improve performance, reduce workload, expose weaker performers to useful patterns, and make some errors easier to catch. Combined systems can be superior when humans retain relevant information that the model lacks or when the interface makes disagreement meaningful. Reliability itself is not the enemy.

The stronger claim is architectural: **stable high reliability can make independent checking less likely when checking competes for attention, especially if the interface supplies few reasons to look elsewhere and the human has little independent evidence or authority.** The hazard comes from reliability interacting with attentional design, task load, practice, information asymmetry, and institutional incentives.

## Implication for the eventual prose pass

The current hypothetical — “suppose the system is right ninety-nine times out of a hundred” — should not carry the whole empirical burden. A later revision can replace or follow it with the Singh experiment: two automation regimes with the same high-reliability periods, but different histories of failure, producing different monitoring behavior. That gives the reader an observable mechanism rather than a rhetorical extrapolation.

The medical evidence supplies the necessary resistance. AI support can improve judgment, sometimes substantially. The chapter becomes stronger if it says that success is precisely why interface and training design matter: a useful system earns trust, and earned trust changes where attention goes.

This would also improve the transition into the book’s larger training-pipeline argument. The chapter can distinguish three separate risks rather than letting them blur together:

1. **monitoring risk** — the human stops sampling independent evidence during ordinary use;
2. **skill-acquisition risk** — the human performs fewer of the tasks from which judgment used to develop;
3. **institutional-authority risk** — the nominal reviewer lacks time, evidence, or power to disagree.

Those mechanisms can reinforce each other, but the evidence for one should not be used as proof of all three.

## Claim boundary / falsification

Narrow the chapter further if high-quality field studies show that, after controlling for workload and interface design, increasing reliable AI assistance consistently increases independent verification or leaves it unchanged across consequential tasks.

Abandon any implication that human review is intrinsically superior if well-designed automated cross-checking, ensembles, provenance systems, or machine-assisted humans produce lower error rates without reducing the organization’s ability to detect novel failure modes.

Do not use aviation or medicine to claim that generative AI will necessarily produce the same effects. They establish mechanisms and design risks, not a universal transfer law.

## Safe one-sentence formulation

A reliable machine does not make verification impossible; it changes the economics and attention of verification, which is why the quality of the human-machine system depends on whether independent evidence, practiced judgment, and real authority remain available when the machine is wrong.

## Media integration — independent review versus repeated review

Asset: `../media/ch01-independent-review.svg`

Working title: **More review events ≠ more independent review**

Purpose: make the manuscript’s sequence — “A machine writes. Another machine checks. A third summarizes the check. A human receives a green indicator.” — legible as an architectural problem rather than a claim that machine review is inherently useless. The diagram contrasts a shared cognitive pipeline, where several review events can inherit the same upstream evidence or omissions, with a review architecture that introduces an independent evidence path before the human decision.

### Rights and provenance

- Artwork: original SVG created for *Abdicating Intelligence* in the Desk repository on 2026-09-14.
- Third-party visual material: none.
- Logos, screenshots, proprietary interfaces, commercial icons, copied charts, and traced artwork: none.
- Copyright/permission posture: publication-safe original artwork. The underlying research sources are used as factual and conceptual evidence only; no source artwork is reproduced.
- Attribution required in the published figure: none beyond normal book authorship/production credit. Keep the research sources in notes/back matter as appropriate.

### Evidence boundary

The upper pipeline is conceptual. It does **not** claim that two models, agents, or vendors necessarily share errors, nor that model ensembles or automated cross-checking lack value. Its narrower claim is that repeated processing is not the same thing as evidentiary independence when stages inherit the same source error, omission, or upstream compression.

That boundary is consistent with the automation-bias literature already collected here. Mosier et al. and Skitka et al. show that additional people or expertise do not automatically remove automation-related omission and commission errors; Singh et al. shows that reliability history can alter monitoring. None of those studies directly tests modern multi-agent generative-AI review chains, so the figure must remain explicitly conceptual rather than empirical.

Fresh source verification for this pass:
- Singh, Molloy & Parasuraman (1997), PubMed record and DOI: https://pubmed.ncbi.nlm.nih.gov/11539855/ and https://doi.org/10.1006/ijhc.1996.0081
- Mosier et al. (1997), PubMed record and DOI: https://pubmed.ncbi.nlm.nih.gov/11540946/ and https://doi.org/10.1207/s15327108ijap0801_3
- Skitka et al. (2000), PubMed record and DOI: https://pubmed.ncbi.nlm.nih.gov/11543300/ and https://doi.org/10.1207/S15327108IJAP1001_5

### Caption and accessibility

Caption: *More review events do not necessarily create independent review. A chain of automated stages may perform real checking while still inheriting the same upstream source error or omission. Independent review requires some route to evidence that can disagree for a reason.*

Alt text: *Diagram comparing two review architectures. In the first, a shared upstream model or source layer feeds a machine that writes, another that checks, another that summarizes, and finally a human who receives a positive indicator; the stages may inherit the same omissions. In the second, primary sources or separate evidence feed an independent check before the human decision, while the generated result may still inform the review.*

### Placement and production guidance

Place the figure immediately after “More review events. Less independent review.” That is the point at which the abstraction has been earned and before the text explains why redundancy is not independence.

Keep the figure and caption together on the same page/spread in print when possible. Use full text width; do not shrink below comfortable reading size. The SVG is intentionally grayscale-safe and does not encode meaning by color. Preserve vector output for print/PDF. For EPUB or other reflowable formats, retain the full alt text and avoid rasterizing below a width that makes the node labels illegible.
