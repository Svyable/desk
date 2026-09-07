# Chapter 13 research note — fake reviews, cheap generation, and the deception boundary

## Why this belongs in the chapter

Chapter 13 uses fake consumer reviews to illustrate a receiving-side asymmetry: producing plausible testimony can become cheap while deciding which testimony deserves belief still imposes costs on platforms, sellers, regulators, and buyers.

That mechanism is useful, but the chapter should not slide from **cheap synthetic production** into **AI-generated reviews are inherently unlawful or socially harmful**. The Federal Trade Commission's record now supplies unusually good evidence for the narrower boundary.

## Primary sources checked

### FTC Consumer Reviews and Testimonials Rule

The FTC's Rule on the Use of Consumer Reviews and Testimonials took effect on October 21, 2024. It prohibits specified deceptive or unfair practices involving reviews and testimonials, including reviews that misrepresent that they are by a person who does not exist, such as certain AI-generated fake reviews, as well as reviews that misrepresent actual experience with a product or service.

The rule does **not** create a general duty for a business to investigate every review. FTC staff guidance says liability may arise under a "should have known" standard when there are clear indications that purchased reviews are likely fake or false.

Sources:

- Federal Trade Commission, "The Consumer Reviews and Testimonials Rule: Questions and Answers": https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers
- Federal Trade Commission, "Rulemaking: Use of Consumer Reviews and Testimonials": https://www.ftc.gov/legal-library/browse/rules/rulemaking-use-consumer-reviews-testimonials
- Federal Trade Commission, "Federal Trade Commission Announces Final Rule Banning Fake Reviews and Testimonials," August 14, 2024: https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials

### Rytr: useful counterevidence from the same regulator

In September 2024 the FTC filed a complaint against Rytr over an AI "Testimonial & Review" service and later entered a final consent order. The complaint alleged that the service could generate detailed reviews containing specific material claims unrelated to user input and was likely to facilitate false or deceptive reviews.

That enforcement history changed materially. On December 22, 2025, the FTC reopened the matter and set aside the final Rytr order. The Commission said the facts alleged in the complaint did not support the Section 5 allegations and that the order unduly burdened innovation. At the same time, the FTC stated that it would continue to pursue actors that use AI to deceive consumers or otherwise violate the law.

Source:

- Federal Trade Commission, "FTC Reopens and Sets Aside Rytr Final Order in Response to the Trump Administration's AI Action Plan," December 22, 2025: https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-reopens-sets-aside-rytr-final-order-response-trump-administrations-ai-action-plan

### Sitejabber: the harm can exist without synthetic reviewers

The FTC's January 3, 2025 final order against Sitejabber is a useful control case. The agency alleged that an AI-enabled review platform misrepresented ratings and reviews collected from consumers before they had actually received or experienced the relevant products or services. The core deception was therefore not "AI wrote the review." It was that the platform represented the resulting review signal as evidence of experience that had not yet occurred.

Source:

- Federal Trade Commission, "FTC Approves Final Order against Sitejabber, Which Misrepresented Ratings and Reviews by Consumers Who Had Not Yet Received Products or Services," January 3, 2025: https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-approves-final-order-against-sitejabber-which-misrepresented-ratings-reviews-consumers-who-had

## Strongest counterargument / disconfirming evidence

The chapter should preserve three boundaries.

First, the FTC's consumer-review rule targets deceptive or unfair conduct, not synthetic text as such. A generated draft that accurately reflects a real customer's experience is analytically different from a fabricated testimonial by a nonexistent person or a review that falsely implies product use.

Second, filtering costs can fall as generation costs fall. Platforms can use purchase verification, provenance, anomaly detection, moderation, identity controls, and machine-assisted screening. The chapter already acknowledges this; the regulatory record supports keeping that countercase substantial rather than ceremonial.

Third, the Rytr reversal is direct evidence against a simplistic theory that offering generative review tooling is itself sufficient evidence of consumer harm. The stronger claim is about **asymmetric verification costs when cheap generation is coupled with misrepresentation, weak provenance, or incentives to flood a trust channel**.

## Editorial implication

A later prose pass should keep the fake-review section centered on who bears the authentication cost, while making the legal and causal boundary explicit. The cleanest formulation is not "AI makes fake reviews cheap, therefore reviews become untrustworthy." It is closer to:

> When manufacturing plausible testimony becomes cheaper than establishing whether the testimony corresponds to a real experience, part of the cost migrates from production to authentication.

That formulation survives the Rytr reversal, fits the Sitejabber case, and preserves the chapter's broader attention argument without turning a regulatory example into an anti-AI claim.
