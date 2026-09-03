# Chapter 13 Evidence — When the Model Decides

## Purpose

This note supports the chapter’s concrete claims about algorithmic decision systems while keeping the normative argument separate from the empirical record.

The chapter’s central claim is not that models are inherently unfair. It is that predictive performance does not determine the objective, threshold, acceptable error tradeoff, deployment rule, explanation duty, appeal path, or legitimate scope of automation. Those are governance choices around the model.

## Verified claims

### NIST AI Risk Management Framework

The National Institute of Standards and Technology published AI RMF 1.0 in 2023 as a voluntary, rights-preserving, non-sector-specific framework for organizations that design, develop, deploy, or use AI systems.

The framework distinguishes transparency, explainability, and interpretability rather than treating them as synonyms. It also links explainability and interpretability to monitoring, documentation, audit, governance, and accountability. The framework emphasizes that trustworthy characteristics are contextual and that responsibility for AI outcomes remains connected to the roles of the people and organizations developing and deploying systems.

This supports the chapter’s use of explainability as a governance requirement with different audiences and purposes, not as a single technical property.

**Primary source:** NIST, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023. https://doi.org/10.6028/NIST.AI.100-1

**Release check:** NIST states that AI RMF 1.0 is being revised in 2026. Re-check the current framework and terminology before publication; retain the 1.0 citation when describing what the 2023 framework said.

### Complex credit algorithms do not remove explanation duties

Consumer Financial Protection Circular 2022-03 states that Equal Credit Opportunity Act and Regulation B adverse-action requirements apply even when a creditor uses a complex or difficult-to-interpret algorithm. A creditor must provide specific and accurate principal reasons for an adverse action; inability to understand the model is not a defense.

This supports the chapter’s concrete statement that institutional complexity does not eliminate an explanation obligation in U.S. credit decisions.

**Primary source:** Consumer Financial Protection Bureau, *Consumer Financial Protection Circular 2022-03: Adverse action notification requirements in connection with credit decisions based on complex algorithms*, May 26, 2022. https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/

### Algorithmic employment tools can screen out people with disabilities

EEOC guidance explains that algorithmic or AI decision tools can screen out applicants or workers with disabilities even when they can perform the job with or without reasonable accommodation. The agency’s guidance emphasizes processes for reasonable accommodation and warns that a technological assessment can measure a disability-related feature rather than the job-relevant ability the employer intends to assess.

This supports the chapter’s examples in which a standardized technical assessment can measure the wrong expression of ability.

**Primary source:** U.S. Equal Employment Opportunity Commission, *Artificial Intelligence and the ADA* resource collection and related technical assistance, 2022–2023. https://www.eeoc.gov/eeoc-disability-related-resources/artificial-intelligence-and-ada

**Additional current guidance:** EEOC, *Visual Disabilities in the Workplace and the Americans with Disabilities Act*, questions 16–17. https://www.eeoc.gov/laws/guidance/visual-disabilities-workplace-and-americans-disabilities-act

## Claims intentionally kept conceptual

The manuscript uses hypothetical examples for thresholds, rare-event accuracy, feedback loops, calibration, rankings, human overrides, and appeals. The examples illustrate mathematical or governance structure rather than reporting a named institution’s measured performance.

Before release, any move from these hypotheticals to named real-world cases should receive its own source entry and evidence note.

## What would make this false?

The chapter should be revised if the evidence shows that its governance distinctions are materially wrong—for example:

- if complex consequential models can reliably provide adequate accountability without meaningful institutional understanding of their outputs;
- if appeal and contestability consistently worsen consequential decisions without meaningful error-correction value;
- if human oversight generally improves decisions merely by placing a nominal reviewer after a model, regardless of authority, information, time, or incentives;
- if model performance metrics alone reliably determine the morally relevant tradeoff among false positives, false negatives, access, dignity, and procedural rights;
- if historical training data can be treated as neutral ground truth without regard to the selection and institutional processes that produced the observed outcomes.

Counter-evidence should narrow the chapter rather than be absorbed as another example of the thesis.

## Release questions

- Has NIST published a successor to AI RMF 1.0, and does the manuscript need updated wording?
- Have CFPB adverse-action rules or interpretations materially changed?
- Are the EEOC algorithmic-employment resources still current?
- Does every named legal or regulatory claim specify the jurisdiction and source vintage?
- Are any examples that read as empirical actually hypothetical, and is that distinction clear enough to a reader?