# Robustness Pass — Chapters 15–17

This note records the source checks and counter-pressure added during the September 4, 2026 robustness pass on Chapters 15–17. It supplements the main research brief rather than replacing it.

## Chapter 15 — The Version of Me Other People Use

The strengthened chapter separates four ideas that are easy to collapse: prediction, explanation, contestability, and correction.

- Federal Trade Commission, *Data Brokers: A Call for Transparency and Accountability* (May 2014). The report documents data brokers collecting information from multiple online and offline sources, combining it, and deriving consumer categories or inferences, often without direct interaction with the consumer. It also records both potential benefits and privacy risks. https://www.ftc.gov/reports/data-brokers-call-transparency-accountability-report-federal-trade-commission-may-2014
- Consumer Financial Protection Bureau, Circular 2022-03, *Adverse action notification requirements in connection with credit decisions based on complex algorithms* (May 26, 2022). The CFPB states that Equal Credit Opportunity Act and Regulation B requirements apply regardless of the technology used: creditors must provide specific reasons tied to factors actually considered or scored, and opacity is not a defense. https://www.consumerfinance.gov/compliance/circulars/circular-2022-03-adverse-action-notification-requirements-in-connection-with-credit-decisions-based-on-complex-algorithms/
- Consumer Financial Protection Bureau, *CFPB Issues Guidance on Credit Denials by Lenders Using Artificial Intelligence* (September 19, 2023). The guidance emphasizes accurate, specific reasons rather than broad categories or mechanically selected sample reasons. https://www.consumerfinance.gov/about-us/newsroom/cfpb-issues-guidance-on-credit-denials-by-lenders-using-artificial-intelligence/

The chapter generalizes cautiously from those credit-specific rules. It does not claim a universal legal right to explanation. Its normative extension is that consequential representations should remain inspectable enough to correct factual error and contestable enough to challenge inappropriate inference or context.

The new discussion of performative profiles is conceptual: a prediction can influence the treatment a person receives, and that treatment can affect the observations used in later predictions. The manuscript does not claim that every predictive system creates a self-fulfilling loop.

## Chapter 16 — The Human Premium

The robustness pass adds two counterweights to the original argument.

First, human attention can become a premium not only as warmth or authenticity but as access to discretion. That is morally different from luxury. If automated service is competent for ordinary cases but only affluent users can reach a person authorized to hear context and make exceptions, the premium becomes a form of unequal contestability. The chapter explicitly preserves the counterargument that human discretion can itself be prejudiced, arbitrary, corrupt, or inconsistent; standardization sometimes protects people from discretionary power.

Second, visible high-status human involvement can become more valuable while lower-status human labor becomes less visible behind automated systems.

- Mary L. Gray and Siddharth Suri, *Ghost Work: How to Stop Silicon Valley from Building a New Global Underclass*, Houghton Mifflin Harcourt (2019). Used as a labor-history and conceptual source for the category of hidden human work that supports apparently automated services. The chapter does not claim every AI system depends on live hidden labor or that all annotation/moderation work has the same employment conditions.
- Christoph Fuchs, Martin Schreier, and Stijn M. J. van Osselaer, “The Handmade Effect: What’s Love Got to Do With It?” *Journal of Marketing* 79(2), 98–110 (2015). DOI: https://doi.org/10.1509/jm.14.0018. The chapter continues to treat the handmade effect as context-dependent evidence, not a universal market law.

The new section also preserves an inversion of the thesis: in sensitive or stigmatized contexts, some people may prefer automation precisely because human presence can add embarrassment, judgment, social pressure, or surveillance. The “human premium” is therefore intentionally presented as irregular rather than as a species-wide preference.

## Chapter 17 — Proving Too Much

The strengthened chapter treats detector thresholds and false-positive handling as governance choices rather than purely technical properties.

- U.S. Department of Education, Office for Civil Rights, *Report to the President and Secretary of Education, FY 2023*. OCR describes the Florida Gateway College matter resolved in October 2022: an AI-enabled online proctoring program using facial recognition and eye tracking flagged disability-related eye movement; the professor reviewed the video, assigned a failing grade, and warned of expulsion after another incident. OCR found Section 504 and Title II process failures involving the requested alternative and required training and corrective measures. https://www.ed.gov/sites/ed/files/about/reports/annual/ocr/report-to-president-and-secretary-of-education-2023.pdf
- OpenAI, *New AI classifier for indicating AI-written text* (January 31, 2023; updated July 20, 2023). OpenAI retired the classifier because of its low rate of accuracy. Its published challenge-set evaluation reported 26% true-positive identification of AI-written text as “likely AI-written” and 9% false-positive labeling of human-written text. https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/
- Weixin Liang, Mert Yuksekgonul, Yining Mao, Eric Wu, and James Zou, “GPT detectors are biased against non-native English writers,” *Patterns* 4(7):100779 (2023). DOI: https://doi.org/10.1016/j.patter.2023.100779. Used for the documented detector-bias example, not for a claim about every detector.
- Regulation (EU) 2024/1689 (Artificial Intelligence Act), Article 5(1)(f) and recital 44. The Act prohibits specified AI emotion-inference uses in workplaces and educational institutions except for medical or safety purposes. Recital 44 identifies concerns including limited reliability, specificity and generalisability, discriminatory outcomes, intrusiveness, and power imbalance. Official text: https://eur-lex.europa.eu/eli/reg/2024/1689/oj
- NIST, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)* (January 2023). Used as governance background; the manuscript’s specific proposals on notice, appeal, alternative evidence, expiration, and exoneration are normative extensions rather than direct NIST requirements. https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10

The chapter’s added “burden of proof” language is deliberately institutional rather than mathematical. A detector outputs a score or classification under assumptions; an institution decides what threshold triggers intervention, what consequence follows, how a person can respond, whether suspicion persists, and what state counts as resolved. The manuscript treats those downstream choices as part of the verification system.

## Falsification notes for the pass

- If automated exception handling becomes reliably contextual, accessible, auditable, and as contestable as high-quality human review, the claim that human attention functions as an “exception premium” would weaken substantially.
- If empirical work shows users uniformly prefer human involvement across sensitive services, the chapter’s proposed privacy/discretion inversion would be overstated; current language keeps it as a plausible contextual preference rather than a universal result.
- If future writing detectors achieve materially better calibrated, cross-linguistic, adversarially robust performance, the 2023 classifier failures should remain historical examples rather than evidence against those later systems.
- If verification systems can demonstrate that false-positive burdens are evenly distributed and inexpensive to reverse, the chapter’s strongest equity concern would need revision. The present argument is intentionally about the cost and institutional handling of uncertainty, not a claim that every verification system discriminates.
