# Chapter 9 — credit-dispute investigation audit

## Editorial target

Chapter 9, “The Credit Report That Says You Don't Exist,” has the right object: a person contesting a consequential representation assembled by institutions that may never meet them. Its weakest stretch is the middle. The chapter describes the FCRA dispute architecture accurately at a high level, but much of the argument remains hypothetical: distributed responsibility, evidence routing, frivolous-dispute gates, and automation are explained as design principles before the reader sees how those mechanisms fail in practice.

A later prose pass should replace part of that generic architecture with the documented dispute pipeline itself. The strongest material is unusually close to the book's thesis: Congress did not merely create a right to complain. It required a **reasonable reinvestigation**, required the consumer reporting agency to pass **all relevant information** to the furnisher, and required the furnisher to investigate. The CFPB has separately documented that this information is commonly ingested and transmitted through automated protocols. The interesting failure is therefore not simply that a database can be wrong. It is that a correction system can preserve the consumer's words while losing the evidentiary force of the thing they submitted.

## Primary / authoritative record checked

### 1. FCRA § 611 — the statutory correction circuit

FTC-hosted current statutory text:

https://consumer.ftc.gov/system/files/consumer_ftc_gov/pdf/fair-credit-reporting-act-611.pdf

15 U.S.C. § 1681i(a)(1)(A) requires a consumer reporting agency, after a qualifying dispute, to conduct a **reasonable reinvestigation** to determine whether disputed information is inaccurate, record its current status, or delete it, generally before the end of 30 days.

Section 1681i(a)(2)(A) requires the agency, generally within five business days, to notify the person that supplied the disputed item and to include **all relevant information** about the dispute received from the consumer or reseller.

The 30-day period can in specified circumstances extend by up to 15 days when relevant consumer information arrives during the initial period. The statute therefore should not be paraphrased as an unconditional universal “30-day deadline.”

The statute also permits a consumer reporting agency to terminate a reinvestigation it reasonably determines is frivolous or irrelevant, but that is a statutory gate with notice obligations, not a general license to ignore repetitive-looking disputes.

### 2. CFPB Circular 2022-07 — what can disappear in automation

CFPB, *Consumer Financial Protection Circular 2022-07: Reasonable investigation of consumer reporting disputes*:

https://www.consumerfinance.gov/compliance/circulars/consumer-financial-protection-circular-2022-07-reasonable-investigation-of-consumer-reporting-disputes/

The circular is the most useful source for the chapter because it turns the abstract routing problem into a concrete one.

The CFPB says consumer reporting agencies tend to ingest consumer dispute information using automated protocols and transmit dispute information to furnishers electronically. That automation reduces transmission cost and time. The Bureau's warning is not that automation is inherently defective. It is that the FCRA still requires all relevant information to travel through the system.

The circular emphasizes that primary evidence supplied by a consumer can be dispositive. Its example is mundane and therefore excellent for the book: a copy of a bill can convey something about the persuasiveness of a dispute that a data abstraction *about* the bill does not. The Bureau says it may be difficult for a consumer reporting agency to prove compliance if it fails to provide electronic images of primary evidence for the furnisher to evaluate.

That is a much sharper version of the manuscript's “contestability metadata” idea. A dispute can be converted into structured fields efficiently while the evidence that would let another institution recognize the error loses force in transit.

The circular also rejects extra-statutory intake barriers. Consumer reporting agencies and furnishers cannot avoid reasonable-investigation duties simply by insisting on a preferred form, format, or documentation package when the consumer has supplied enough information to trigger the duty.

### 3. CFPB complaint record — the failure is not merely hypothetical

CFPB, *Annual report of consumer and credit reporting complaints* (Jan. 5, 2022):

https://www.consumerfinance.gov/data-research/research-reports/annual-report-consumer-credit-reporting-complaints-analysis-of-complaint-responses-equifax-experian-transunion-2021/

CFPB summary:

https://www.consumerfinance.gov/archive/newsroom/cfpb-releases-report-detailing-consumer-complaint-response-deficiencies-of-the-big-three-credit-bureaus/

The CFPB reported that Equifax, Experian, and TransUnion together reported relief in response to **less than 2% of covered complaints in 2021**, down from nearly **25% in 2019**. This is evidence about complaints transmitted through the CFPB, not a denominator for all credit-report disputes and not a direct measure of underlying report accuracy. Do not turn it into “98% of disputes were wrongly denied.”

The report is still useful because it shows that the correction layer itself became a subject of regulatory concern. The Bureau described failures to provide meaningful responses and a sharp decline in reported relief.

The next annual report, covering complaints transmitted from October 2021 through September 2022, documented improvement: the three nationwide companies reduced problematic response types, provided more tailored responses, and reported greater rates of relief. In September 2022, tailored responses were provided to more than half of complaints closed with explanation or relief.

Source:

https://www.consumerfinance.gov/archive/newsroom/cfpb-issues-report-on-transunion-experian-and-equifax/

That improvement is important counterevidence. A regulatory feedback loop can work; a bad snapshot should not be converted into a timeless claim that dispute systems never correct themselves.

### 4. Current consumer guidance — preserve the procedural boundary

CFPB, *How do I dispute an error on my credit report?*:

https://www.consumerfinance.gov/ask-cfpb/how-do-i-dispute-an-error-on-my-credit-report-en-314/

The current guidance says the credit reporting company must investigate, forward the dispute and relevant information to the furnisher, and report the result. If a furnisher determines that supplied information was wrong or cannot be verified, it must update or remove it and notify the credit reporting companies after correction. A consumer can in qualifying circumstances ask to have a statement explaining the dispute included in the file if the disagreement remains.

This supports the manuscript's interest in preserving disagreement, but the prose should avoid implying that a consumer statement forces downstream decision makers to accept the consumer's account. It preserves contest, not victory.

## Strongest counterargument

The chapter can become too eager to treat every unresolved dispute as proof that the correction architecture is fake. The evidence does not support that.

The FCRA contains real deadlines, routing duties, investigation duties, deletion/update mechanisms, frivolous-or-irrelevant gates, and consumer-statement rights. Automation can make the process faster and cheaper. The CFPB's own 2023 reporting found meaningful improvement in complaint responses after its earlier criticism. A distributed system also has a legitimate reason not to accept every consumer assertion at face value: inaccurate deletion can harm lenders, other consumers, fraud controls, and the informational value of the reporting system.

The sharper claim is narrower. **Correction quality depends on whether the evidence needed to test the disputed fact survives the trip through the institutions that own different pieces of the record.** Automation is useful when it transmits evidence; it becomes dangerous when it compresses evidence into a category that makes the investigation look complete while stripping away what could change the answer.

## Recommended manuscript move

Do not add another framework or list. Replace a portion of the generic “furnisher loop” / “frivolous dispute” exposition with one compact documentary sequence:

A consumer disputes an account and supplies primary evidence. The CRA has a statutory duty to reinvestigate and route all relevant information. The dispute enters an automated protocol because automation is cheap and fast. The CFPB's 2022 circular then asks the awkward question: did the furnisher receive the actual evidence, or merely a structured description of it? A bill is not identical to a field saying `consumer disputes balance`. The system can preserve the proposition while discarding the proof.

That sequence gives the chapter a physical mechanism and a small amount of bureaucratic absurdity without inventing a victim story. It also earns the later AI-agent discussion. The question for agents is no longer merely whether they can generate more disputes. It is whether machine-to-machine correction systems preserve the evidentiary object well enough for the second decision to be genuinely different from the first.

## Claim boundaries for the prose pass

Safe:

- The FCRA generally requires a reasonable reinvestigation within 30 days after a qualifying direct dispute, with a possible statutory extension in specified circumstances.
- CRAs generally must notify the furnisher within five business days and provide all relevant dispute information.
- CFPB has documented automated ingestion/transmission of dispute information and warned that primary evidence can lose material force if it is not actually provided for evaluation.
- CFPB complaint reporting showed serious response deficiencies in 2021 and meaningful improvement in the following reporting period.

Avoid:

- “Credit bureaus have 30 days, full stop.”
- “Automated dispute systems reduce documents to codes” unless a source establishes that exact implementation for the case being described.
- “98% of disputes received no relief.” The <2% figure concerns a defined set of covered CFPB complaints and reported relief, not all FCRA disputes.
- Treating consumer allegations as proof that the underlying credit data was inaccurate.
- Treating later response improvements as proof that underlying accuracy problems were solved.

## Why this is worth the chapter's space

The current chapter says, correctly, that the person can become the courier between institutions. The primary record yields a stranger and more modern problem: sometimes the courier is a protocol. It can move the dispute instantly and still fail to move the thing that would change anyone's mind.
