# Chapter 5 evidence notes — Production and Inspection

## Chapter job

Show why inspection is an economic activity with its own cost curve rather than a ceremonial second look. Production and inspection were never perfectly coupled, but many mature systems evolved explicit mechanisms for keeping evidence generation, review authority, and acceptance separate enough that a finished artifact did not certify itself. The chapter should then ask what happens when generative production gets much cheaper while independent checking does not.

The chapter should not argue that every output needs complete human inspection. Sampling, process control, automated testing, machine vision, and delegated quality systems are all legitimate responses to scale. The real distinction is between controls that create new evidence and controls that merely repeat the producing process.

## Central case — signed release without consumed evidence

### FDA Quality Essentials case study

FDA training material published in 2024 reproduces an FDA Form 483 observation concerning a sterile-drug manufacturer. According to the case study, the firm lacked written procedures requiring retrieval and review of finished-product test results from a contract testing laboratory before release. FDA said records showed **952 batches of sterile drug products were released between June 5 and August 17, 2023 without review of those finished-product testing results**.

The striking artifact is the release paperwork. FDA says the firm’s signed QA batch-release documentation nevertheless indicated there were no out-of-specification results for each batch. FDA further states that the lapse and inaccurate quality review resulted in distribution of at least one super-potent and one sub-potent fentanyl batch and **12 adverse drug events**.

Source: FDA, *Quality Essentials: Case Studies* (2024), https://www.fda.gov/media/179077/download

Use carefully:

- This is FDA training material built from an inspection observation, not a judicial opinion or final adjudication of liability.
- The contract laboratory had generated test results; the institutional failure described by FDA was that the manufacturer did not retrieve and review them before release.
- Do not say “nothing was tested.” The point is stronger and narrower: evidence existed but was not consumed by the release process.
- Do not independently infer the medical mechanism behind the 12 adverse events; attribute that connection to FDA’s case-study description.

Why it belongs: the signed record carried the appearance of inspection even though the underlying testing results had not been reviewed. That is almost a physical-world version of the book’s thesis: authority moved farther than comprehension.

## Regulatory architecture — quality has a separate decision right

### 21 CFR 211.22

The current eCFR requires a pharmaceutical quality-control unit with responsibility and authority to approve or reject components, in-process materials, packaging and labeling, and finished drug products. The unit also has authority to review production records to assure that errors did not occur or were fully investigated. It must have adequate laboratory facilities for testing and must approve or reject procedures and specifications affecting identity, strength, quality, and purity.

Source: Electronic Code of Federal Regulations, 21 CFR 211.22, current page displayed as up to date September 1, 2026, https://www.ecfr.gov/current/title-21/chapter-I/subchapter-C/part-211/subpart-B/section-211.22

Use:

- The useful point is not that the law demands one organizational chart. It creates a distinct acceptance authority and makes production records reviewable by that authority.
- Avoid casually calling the unit “independent” in the NASA sense; the regulation defines authority and responsibilities but does not in this section require three-dimensional technical/managerial/financial independence.
- The architecture matters because a batch is not supposed to become acceptable merely by existing at the end of a production line.

## Historical comparison — when complete inspection is impossible

### NIST acceptance sampling and WWII ammunition

NIST’s Engineering Statistics Handbook explains acceptance sampling through the history of Dodge and Romig and U.S. military ammunition testing during World War II. The constraint is unusually clear: if every bullet were tested in advance, no bullets would remain to ship; if none were tested, failures could reach the field. Lot acceptance sampling therefore uses a random sample to decide whether to accept or reject a lot.

NIST calls acceptance sampling a middle course between no inspection and 100 percent inspection. It lists destructive testing, very high inspection cost, and excessive inspection time as classic reasons to sample rather than inspect every item.

Source: NIST/SEMATECH Engineering Statistics Handbook, “What is Acceptance Sampling?”, https://www.itl.nist.gov/div898/handbook/pmc/section2/pmc21.htm

Use:

- This is a history and statistical-method explanation, not evidence that one sampling scheme fits every modern production system.
- The crucial conceptual move is that inspection capacity is finite and can itself consume or delay the product.
- Sampling is not pretending to know every unit. It formalizes producer risk and consumer risk and makes uncertainty explicit.
- This gives the book a useful contrast with generated review that emits a confident verdict without exposing its coverage assumptions.

## Software comparison — independence is part of the control

### NASA Independent Verification and Validation

NASA describes software IV&V as rigorous analysis and testing used to provide an independent assessment of critical products and processes. NASA’s active Software Assurance and Software Safety Standard defines three dimensions of independence: technical, managerial, and financial.

Technical independence requires evaluators who were not involved in development, so they can establish their own understanding and potentially catch subtle errors overlooked by people focused on building the system. Managerial independence puts the IV&V function outside the development/program-management chain and gives it authority to select what to analyze, which techniques to use, and when to perform them. Financial independence protects the assurance effort from budget pressure by the development organization.

Sources:

- NASA, “IV&V Overview,” updated July 23, 2024, https://www.nasa.gov/ivv-overview/
- NASA-STD-8739.8B, *Software Assurance and Software Safety Standard* (2022), https://sma.nasa.gov/docs/default-source/policies/nasa-std-8739-8b.pdf

Use:

- NASA applies IV&V selectively based on project risk; it is not a universal prescription for ordinary software.
- The value is analytical: a second pass is more informative when it can develop a different model, choose different tests, and report without needing the producer’s approval.
- This is the chapter’s clearest answer to the “just have another model review it” instinct. A second model call may increase coverage, but independence depends on evidence, incentives, scope choice, and failure modes, not call count.

## Countercase — inspection cost can fall too

### Automated manufacturing inspection

NIST documents multiple ways automation can reduce inspection cost rather than only increase production. Its Manufacturing Extension Partnership describes automated visual inspection using machine vision for seals, labels, bar codes, and product defects. NIST’s 2024 work on ISO 10303 STEP describes machine-readable product/manufacturing information that can drive both CNC manufacturing and coordinate-measuring machines for automated inspection, reducing re-entry error, improving efficiency, and lowering cost.

NIST research has also demonstrated convolutional-neural-network approaches to manufacturing defect detection that are fast enough for production settings on benchmark casting and weld X-ray data, while emphasizing that deployment quality depends on training data, metrics, and implementation.

Sources:

- NIST MEP, “Robotics and Manufacturing Automation,” created August 10, 2022, https://www.nist.gov/mep/robotics-and-manufacturing-automation
- NIST, “NIST Engineers Support Vendor Implementations of STEP to Evolve Digital Manufacturing,” November 1, 2024, https://www.nist.gov/news-events/news/2024/11/nist-engineers-support-vendor-implementations-step-evolve-digital
- Ferguson et al., “Detection and Segmentation of Manufacturing Defects with Convolutional Neural Networks and Transfer Learning,” 2018, NIST publication page: https://www.nist.gov/publications/detection-and-segmentation-manufacturing-defects-convolutional-neural-networks-and

Use:

- This is the strongest counterclaim: cheap generation does not necessarily outrun review forever. In some systems, measurement is designed into production and automated at line speed.
- Do not imply automated vision provides perfect or independent inspection. Sensors can be miscalibrated; models can share blind spots with the process that generated their training data; the measuring system itself needs validation.
- The design clue for Part V is that good automation makes evidence cheaper and more inspectable instead of merely creating another fluent approval artifact.

## Mechanism to carry into prose

Production and inspection have different objective functions.

Production asks: can we make the thing, satisfy the specification, complete the task, or emit the artifact?

Inspection asks: what evidence would convince us that the thing is acceptable, and how much uncertainty are we willing to carry into consequence?

Those activities can share tools and data, but they are not identical. When the same process generates the output, selects the tests, judges the tests, summarizes the result, and authorizes release, failures can become common-mode: the assumptions that made the defect also decide that the defect is absent.

This is why mature systems use combinations of:

- process control before the final artifact exists;
- sampling when complete inspection is too costly or destructive;
- independent authority for high-consequence acceptance;
- tests that create evidence rather than restate intent;
- automated metrology where measurement can scale;
- explicit residual risk rather than a ceremonial “reviewed” state.

## Falsification / what would weaken the chapter

The chapter would be too strong if evidence showed that inspection generally scales at least as fast as generative production across consequential knowledge work, or that same-system automated review reliably provides independent error detection equivalent to genuinely separate methods. It would also be weakened if organizations can preserve comprehension through better instrumentation while allowing artifact volume to expand without proportional review time.

The evidence here already gives part of that countercase. Automated manufacturing inspection shows that review cost is technologically elastic. Acceptance sampling shows complete inspection has never been the standard answer to scale. NASA IV&V shows that expensive independence is reserved for high-risk systems rather than applied indiscriminately. The argument therefore has to remain conditional: the danger appears where output cost falls faster than the cost of obtaining *independent, consequence-relevant evidence*.

## Handoff to Chapter 6

Once inspection is treated as a real production input, the next question becomes budgetary. Organizations have finite hours of qualified attention. They can spend those hours creating, reviewing, supervising, meeting, selling, responding, or recovering from mistakes. Chapter 6 should make that review budget visible rather than treating it as free.