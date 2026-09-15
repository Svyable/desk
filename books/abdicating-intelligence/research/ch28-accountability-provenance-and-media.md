# Chapter 28 — Accountability, provenance, and media packet

## Editorial purpose

Support **The Human Who Signs** without turning the chapter into a compliance survey. The useful evidentiary distinction is between a visible human checkpoint and an accountability architecture that preserves authority, information, monitoring, and reconstructability.

## Source 1 — U.S. Government Accountability Office AI Accountability Framework

- **Institution:** U.S. Government Accountability Office (GAO)
- **Publication:** *Artificial Intelligence: An Accountability Framework for Federal Agencies and Other Entities*, GAO-21-519SP
- **Published:** June 30, 2021
- **URL:** https://www.gao.gov/products/gao-21-519sp
- **Authority:** U.S. federal legislative-branch agency; primary government accountability guidance.
- **What it supports:** GAO organizes AI accountability around governance, data, performance, and monitoring across the AI lifecycle. This is useful evidence against treating accountability as a final approval click or signature.
- **Boundary:** The framework is guidance, not evidence that any particular oversight design is effective, and not a universal legal standard.
- **Rights posture:** U.S. federal government source. Factual material can be cited and paraphrased. Do not assume every embedded image or third-party contribution on a federal page is separately public domain without checking its credit metadata.
- **Reuse decision:** Cite/paraphrase only. Do not reproduce GAO's framework graphic; an original conceptual figure is more useful and avoids source-artwork ambiguity.
- **Credit/citation:** U.S. Government Accountability Office, GAO-21-519SP (2021).

## Source 2 — NIST AI Risk Management Framework 1.0

- **Institution:** National Institute of Standards and Technology (NIST), U.S. Department of Commerce
- **Publication:** *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1
- **Published:** January 26, 2023
- **URL:** https://doi.org/10.6028/NIST.AI.100-1
- **Current landing page:** https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10
- **What it supports:** AI risk management is lifecycle work rather than a terminal human-approval ritual. The framework's Govern, Map, Measure, and Manage functions are especially useful as a contrast with nominal human-in-the-loop governance.
- **Boundary:** Voluntary, non-sector-specific guidance; not a compliance safe harbor or empirical proof that a given governance structure works.
- **Rights posture:** NIST federal publication. Use factual paraphrase and citation. Avoid copying NIST graphics/logos when an original figure communicates the manuscript's narrower argument better.
- **Credit/citation:** Elham Tabassi, NIST AI 100-1 (2023).

## Source 3 — FAA human-factors material on automation and complacency

- **Institution:** Federal Aviation Administration (FAA)
- **Landing page:** https://www.faa.gov/aircraft/air_cert/design_approvals/human_factors
- **Related FAA Aviation Instructor's Handbook chapter:** https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/aviation_instructors_handbook/03_aih_chapter_1.pdf
- **What it supports:** FAA training material treats complacency and reduced cross-checking as real hazards of highly reliable automation and emphasizes the interaction among people, technology, procedures, training, and organizations. This supports the manuscript's bounded statement that supervision is work and that reliable automation can make passive monitoring brittle.
- **Boundary:** Aviation is an analogy and a mature safety domain, not direct evidence about generative-AI review workflows. Do not generalize aviation accident causality to office AI systems.
- **Rights posture:** U.S. federal government material. Cite/paraphrase; do not reuse seals, logos, or incidental third-party imagery.
- **Credit/citation:** Federal Aviation Administration.

## Original figure recommendation

### Title

**A signature is not an accountability system**

### Concept

Show two paths ending in the same visible human signature.

**Ceremonial path:** machine output → generated rationale → overloaded reviewer → approve → human signature. The signature has responsibility but weak access, weak discretion, and weak reconstructability.

**Accountable path:** evidence + model/version + policy/objective → review with time and authority → decision → preserved trace → appeal/correction → human or institutional signature. Responsibility can travel backward to a component that can actually change the next outcome.

The important visual surprise is that the signature looks identical at the end of both paths. What differs is everything behind it.

### Rights

Create as wholly original project artwork. Do not adapt GAO/NIST framework diagrams, FAA cockpit graphics, vendor interfaces, seals, logos, or screenshots.

### Suggested caption

**The signature is the visible endpoint, not the accountability architecture.** Two decisions can carry the same human approval while giving the signer radically different access to evidence, discretion, provenance, and correction.

### Alt text

Two process paths end at identical boxes labeled Human signature. The upper ceremonial path runs from machine output through generated rationale and overloaded review to approval, with weak evidence access, discretion, and reconstructability. The lower accountable path begins with evidence, model version, and policy; passes through review with time and authority; preserves a trace; and connects to appeal and correction. The diagram emphasizes that identical signatures can sit atop very different accountability systems.

### Placement

Best placed after: **“The organization has preserved a click and lost a judgment.”** It should appear before the chapter expands from individual review to institutional architecture.

### Print/layout

- Keep figure and caption together; avoid a page break between them.
- Design for one-column book width and grayscale reproduction.
- Use line weight/pattern/labels rather than color as the only distinction.
- Minimum body-label size equivalent to 9 pt at final print width.
- Caption immediately below figure; source/credit line can read: **Original diagram by Sven Hardy Benson.**

## Media rejected in this pass

- GAO AI Accountability Framework graphic: authoritative but unnecessary to reproduce; the manuscript needs a narrower conceptual contrast, not a copy of the full framework.
- NIST AI RMF diagrams: same issue, plus source-artwork reuse adds no reader value.
- FAA cockpit photographs: legally safer when federal, but decorative here and likely to over-weight the aviation analogy.
- Stock images of a person signing a document or clicking Approve: decorative, generic, and weaker than a diagram that exposes the hidden architecture.
- Vendor screenshots of AI review interfaces: rights/provenance and rapid-obsolescence risk.

## Manuscript opportunities

1. Add one compact GAO paragraph after the chapter turns from the individual reviewer to institutional architecture: GAO's framework explicitly distributes accountability work across governance, data, performance, and monitoring. Keep this as a concrete precedent, not an appeal to authority.
2. Link the existing human-factors sentence to FAA material rather than leaving “researchers have studied versions of the problem for decades” unsupported.
3. Preserve the chapter's distinction between **formal responsibility**, **epistemic access**, **authority**, and **ability to alter the system**. These are analytically stronger than generic calls for “human oversight.”
4. Avoid adding another general NIST paragraph if Chapter 20 already carries AI RMF context; use NIST here only if a cross-reference or endnote prevents repetition.

## Highest-value next research

Find field or controlled studies in professional settings where reviewers receive AI recommendations under manipulated workload, explanation quality, override friction, or automation reliability, and where researchers measure error detection and appropriate override rather than subjective trust alone. The chapter's strongest remaining empirical gap is the distance between a nominal human approval and a reviewer who can actually detect, reconstruct, and correct a machine-mediated error.
