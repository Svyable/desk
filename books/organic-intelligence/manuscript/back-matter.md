# Back Matter

## A Note on Sources

This book was drafted against a source ledger maintained in `research/source-ledger.csv`. The ledger is designed to make the book’s concrete claims auditable rather than to function as a conventional endnote apparatus. It records the source, year, type, URL, and intended manuscript use for dated milestones, named platforms, regulatory actions, reported performance figures, and claims about the capabilities or limits of neural organoids and biological neural networks.

Where a company describes its own product, pricing, energy efficiency, learning efficiency, biological lifetime, or commercial roadmap, the manuscript treats that information as a company claim unless an independent publication or third-party report supports it. A product’s existence is evidence of commercialization. It is not by itself evidence that the product performs better than a conventional alternative.

Where scientific papers use contested terms such as *sentience*, the manuscript describes the underlying experiment and keeps the authors’ interpretation separate from broader claims about consciousness or subjective experience.

The field changes quickly. Regulatory guidance, commercial pricing, platform access terms, hardware specifications, and individual research results should be rechecked before publication or a later edition.

## Terminology

**Biological neural network (BNN).** A network of living neurons studied or used as an information-processing system. BNN can include two-dimensional neuronal cultures and other living neural configurations. The term does not imply consciousness.

**Brain organoid / neural organoid.** A three-dimensional stem-cell-derived tissue model that reproduces selected features of nervous-system development, organization, or function. This book uses the more specific term where the underlying source permits it. An organoid is not a complete human brain.

**Forebrain organoid.** A neural organoid directed toward or characterized as having forebrain-related identity. FinalSpark’s published Neuroplatform work, for example, describes forebrain organoids derived from human iPSC-derived neural stem cells.

**Spheroid.** A three-dimensional cellular aggregate. Spheroids can be biologically useful without meeting every definition used for more elaborately patterned organoids.

**Assembloid.** A system created by combining organoids with one another or with additional specialized cell populations to model interactions, migration, or connectivity among components.

**Induced pluripotent stem cell (iPSC).** A differentiated somatic cell that has been reprogrammed into a pluripotent state from which multiple cell types can be generated. Human iPSCs provide a route to donor- and disease-specific neural models.

**Multi-electrode array (MEA).** An array of electrodes used to record electrical activity from cells and, in many systems, deliver electrical stimulation. MEAs can be planar or designed in more complex geometries for three-dimensional tissues.

**Closed loop.** An experimental architecture in which the biological system’s response influences what input, stimulation, or intervention it receives next.

**Open loop.** An architecture in which inputs are delivered according to a predefined sequence or independently of the biological response. The 2026 Braille-classification study discussed in Chapter 13 is an open-loop demonstration.

**Plasticity.** The capacity of a neural system to change its future response as a consequence of activity, stimulation, development, chemical exposure, or other experience. Plasticity is a biological phenomenon and should not automatically be equated with human-like learning.

**Learning.** Used in this book only when a study reports measurable adaptation or improved performance under an experimental protocol. The term does not imply comprehension, self-awareness, or subjective experience.

**Organoid intelligence (OI).** A research field organized around the use of brain organoids and related technologies for information processing, learning research, biocomputing, disease modeling, and human-relevant experimentation. The term is also the name of a section and research community associated with *Frontiers in Artificial Intelligence* and related publications.

**Synthetic biological intelligence (SBI).** A term used by researchers including the DishBrain team for systems in which living biological neural networks are embodied in structured environments and coupled to digital interfaces.

**Wetware computing.** Computing or information processing performed using biological, chemical, or other living substrates rather than conventional electronic logic alone. The category is broader than brain organoids.

**Reservoir computing.** A computational approach in which a complex dynamical system transforms inputs into high-dimensional internal states that can be interpreted by a comparatively simple trained readout. Brainoware used a brain organoid within this architecture.

**New Approach Methodology (NAM).** A regulatory and research umbrella for methods intended to improve human relevance and reduce or replace some traditional animal testing. NAMs include diverse in-vitro, in-chemico, computational, organoid, organ-on-chip, and other approaches. FDA acceptance depends on validation and context of use; NAM is not a blanket approval category.

**Context of use.** The specific decision or regulatory purpose for which a method is intended. A neural assay can be useful and validated for one context without being valid for every neurological or toxicological question.

## Terms This Book Avoids

**Mini-brain.** The 2022 nomenclature consensus for nervous-system organoids and assembloids discourages this term because it overstates what an organoid reproduces.

**Brain in a dish.** Avoided for the same reason. Neural organoids reproduce selected features of nervous-system biology; they are not complete brains removed from bodies.

**Digital twin of the patient.** Avoided for patient-derived organoids. A patient-derived model can preserve a donor’s genome and selected functional phenotypes without reproducing the whole person or their current brain state.

**Conscious organoid.** Not used as a description of current systems. Current ISSCR guidance states that there is no biological evidence of consciousness or pain perception in CNS organoids that warrants specialized oversight on that basis. The book argues for capability-sensitive monitoring as models become more complex without treating future possibility as current fact.

## Chapter Source Guide

### Prologue and Chapter 1 — DishBrain and the closed loop

Primary sources: `organic-intelligence-005` and `organic-intelligence-006` in the source ledger. These records correspond to Kagan and colleagues’ 2022 *Neuron* paper describing living neuronal cultures on high-density multi-electrode arrays coupled to a Pong-like simulated environment. The paper reports improved task-relevant performance under structured feedback and includes the authors’ particular use of the word *sentience*. The manuscript does not treat that term as evidence of consciousness.

### Chapter 2 — Induced pluripotency

Primary sources: `organic-intelligence-001` and `organic-intelligence-002`, the 2006 mouse and 2007 human induced-pluripotent-stem-cell papers from Takahashi, Yamanaka, and colleagues. These papers establish the reprogramming milestone underlying donor-specific neural models.

### Chapter 3 — Cerebral organoids and nomenclature

Primary sources: `organic-intelligence-003` for Lancaster and colleagues’ 2013 cerebral-organoid paper and `organic-intelligence-004` for the 2022 nervous-system-organoid nomenclature consensus. The nomenclature paper is the basis for this book’s avoidance of “mini-brain” and its distinction among organoids and assembloids.

### Chapters 4–6 — Interfaces, closed-loop assays, and functional endpoints

Key sources include `organic-intelligence-015`, `organic-intelligence-018`, `organic-intelligence-019`, and `organic-intelligence-020`. These cover proposals for plasticity-sensitive developmental-neurotoxicity testing, multi-organoid microfluidic electrophysiology, patient-derived epilepsy models, and multi-electrode-array use in safety pharmacology.

### Chapter 7 — Remote wetware platforms

Key sources: `organic-intelligence-011`, `organic-intelligence-012`, `organic-intelligence-043`, `organic-intelligence-044`, and `organic-intelligence-045`. FinalSpark’s 2024 peer-reviewed Neuroplatform paper is treated separately from current company pages. Cortical Labs’ CL1 and Cortical Cloud descriptions are company materials and are labeled accordingly where product claims are discussed.

### Chapter 8 — Standardization and the organoid foundry

Key sources: `organic-intelligence-016`, `organic-intelligence-035`, and related NIH materials. The high-quantity organoid paper demonstrates one research approach to larger-scale, more reproducible brain organoids. The NIH Standardized Organoid Modeling Center is a broader organoid standardization initiative; its initial focus is liver, lung, heart, and intestine, with plans to expand to other organs including the brain.

### Chapters 9–10 — Data and pharmacology

The manuscript synthesizes the electrophysiology, platform, safety-pharmacology, and drug-screening sources above rather than relying on a single paper for the broader data-layer argument. Claims about stateful assays, versioning, longitudinal provenance, and adaptive experiment design are analytical conclusions drawn from the architecture of those systems rather than quotations from one source.

### Chapters 11–12 — Disease models and patient-specific use

Key sources include `organic-intelligence-017` through `organic-intelligence-028`. These cover glioma screening, SCN2A epilepsy models, broad brain-organoid disease-model reviews, patient-derived organoid drug evaluation, individualized brain-tumor organoids, and Alzheimer’s-related organoid cohorts. The manuscript distinguishes research-use patient-derived models from clinically validated treatment-selection assays.

### Chapters 13–14 — Computing demonstrations

Key sources: `organic-intelligence-010` for Brainoware, `organic-intelligence-014` for the 2026 tactile/Braille classification study, and `organic-intelligence-048` and `organic-intelligence-054` for the broader wetware/neuromorphic landscape. Brainoware demonstrated reservoir-computing tasks including speech recognition and nonlinear prediction. The 2026 Braille work is described as open-loop and reports 61 percent average classification accuracy for a single organoid and 83 percent for a three-organoid ensemble in the study’s setup.

### Chapter 15 — Economics

Key sources: `organic-intelligence-011`, `organic-intelligence-043` through `organic-intelligence-047`, and `organic-intelligence-035`. The $35,000 CL1 price cited in the manuscript comes from 2025 *IEEE Spectrum* reporting. Company statements about unit economics, biological scalability, life span, and efficiency are not presented as independently established system-level advantages.

### Chapter 16 — Regulation

Key sources: `organic-intelligence-029` through `organic-intelligence-037`. FDA’s March 2026 general NAM guidance remains draft guidance and provides a validation framework rather than technology-specific approval. NIH’s human-based-research initiatives and SOM Center are treated as research-policy infrastructure, not regulatory acceptance of any specific brain-organoid assay.

### Chapters 17–18 — Consent and moral status

Key sources: `organic-intelligence-038` through `organic-intelligence-042` and `organic-intelligence-049`. ISSCR guidance is the primary boundary for the current state of CNS organoid moral-status claims. The 2024 ethics literature supplies discussion of informed consent, commercialization, transplantation, ownership, uncertainty, and adaptive governance.

### Chapters 19–20 and Epilogue — Synthesis

These chapters synthesize the source base rather than introduce major new empirical claims. Their central proposition—that living neural systems are more likely to change biotechnology first as functional, stateful, human-relevant experimental infrastructure than as replacements for mainstream digital computing—is the author’s argument and should be evaluated against the falsification tests in `research/README.md`.

## Research Boundary at Draft Completion

The manuscript was completed as a first-pass Desk draft in September 2026. The following facts were treated as current at completion and should receive an explicit freshness check before publication:

- the status and wording of FDA New Approach Methodology guidance;
- NIH Standardized Organoid Modeling Center scope and expansion plans;
- current specifications, access models, and pricing for Cortical Labs’ CL1 and Cortical Cloud;
- current access terms and platform specifications for FinalSpark’s Neuroplatform;
- publication status and final pagination of the 2026 Braille-classification paper;
- any new demonstrations of closed-loop learning, sensory encoding, long-term organoid maturation, vascularization, or cross-laboratory reproducibility;
- any new ISSCR or jurisdiction-specific guidance concerning CNS organoids, assembloids, transplantation, or advanced neural models.

## Falsification Reminder

A later edition should weaken this book’s central thesis if neural functional assays fail to achieve meaningful reproducibility, predictive value, or economic fit in drug development, toxicology, disease modeling, or patient stratification. General-purpose biological computing does not need to succeed for the thesis to survive. Narrow functional biotech adoption does.

If the field instead converges on simpler 2D neural systems, conventional organoids without closed-loop protocols, purely computational models, or other NAMs that deliver equal or better predictive value at lower cost, the role assigned here to organic intelligence should be reduced accordingly.

## Rights

Copyright © 2026 Sven Hardy Benson. All Rights Reserved.

See `../RIGHTS.md` and `../rights.json` for the book’s publication and machine-readable rights policy.
