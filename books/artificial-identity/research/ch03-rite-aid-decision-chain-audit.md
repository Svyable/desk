# Chapter 3 — Rite Aid decision-chain audit

Checked: 2026-09-13

## Scope

This note supports one bounded revision to Chapter 3, **“The Model Gets a Vote.”** The purpose is to make the chapter's opening claim concrete without turning one deployment failure into a blanket claim about face recognition.

The manuscript's relevant proposition is not that facial recognition inherently produces one kind of social harm. It is that a probabilistic representation becomes consequential when an institution places it inside a chain of action and assigns people authority to respond to it.

## Primary record checked

### Federal Trade Commission — Rite Aid facial-recognition case

Source-ledger entry: **AI012**.

FTC enforcement announcement, December 19, 2023:
https://www.ftc.gov/news-events/news/press-releases/2023/12/rite-aid-banned-using-ai-facial-recognition-after-ftc-says-retailer-deployed-technology-without

The Commission alleged that Rite Aid used facial recognition from 2012 to 2020 in hundreds of stores to compare shoppers with a database of people the company had labeled persons of interest. The FTC said the system generated thousands of false-positive matches and that employees sometimes followed customers, searched them, ordered them to leave, called police, or accused them publicly of shoplifting or other wrongdoing after alerts.

The same enforcement record matters because it identifies institutional controls around the model, not merely model error. The Commission alleged that Rite Aid did not adequately assess accuracy before deployment, did not routinely track false-positive rates after deployment, used low-quality images in the enrollment database, inadequately trained employees about false matches, and discouraged employees from telling customers that facial recognition was being used.

The FTC also alleged a demographic disparity in the deployment: false positives were more likely in stores serving plurality-Black and Asian communities than in plurality-White communities.

### Claim posture

These are FTC allegations and settlement findings, not a license to write as though every disputed fact was independently adjudicated. The chapter therefore uses formulations such as **“according to the Commission”** and **“the FTC alleged.”**

The useful causal sequence is:

**comparison output → employee alert → institutional response authority → customer consequence**

That sequence is stronger evidence for the chapter than the generic statement that “AI can make mistakes.”

## Strongest counterargument

Source-ledger entry: **AI011**.

NIST, *Face Recognition Vendor Test Part 3: Demographic Effects*:
https://doi.org/10.6028/NIST.IR.8280

Current NIST demographic-effects overview:
https://pages.nist.gov/frvt/html/frvt_demographics.html

NIST's evaluations complicate any easy claim that face recognition is one uniformly biased technology. False-positive and false-negative rates vary substantially by algorithm, task, image quality, operating threshold, and demographic group. NIST has also reported that some of the most accurate algorithms show much smaller demographic differentials than weaker systems.

That counterevidence changes the chapter's emphasis. The defensible lesson from Rite Aid is not **“face recognition is biased, therefore the deployment failed.”** The more useful lesson is sociotechnical: algorithm choice, gallery construction, image quality, thresholds, testing, staff training, monitoring, and the authority attached to an alert all contribute to the result experienced by the person.

This also preserves a benefit boundary. One-to-one facial verification can be useful in authentication contexts, and improvements in algorithms can reduce error and demographic differentials. The manuscript should not imply that eliminating face recognition would eliminate institutional classification, suspicion, or unequal treatment.

## Factual boundaries for the prose

- Do not describe a similarity match as a finding of guilt.
- Do not state that every Rite Aid alert was acted on or that every false match produced police involvement.
- Do not generalize the alleged Rite Aid demographic disparity to every face-recognition deployment.
- Do not imply that demographic differentials are fixed properties of the technology; NIST documents material variation among algorithms.
- Keep the distinction between one-to-one verification and one-to-many identification because the error consequences differ.
- Preserve the institutional layer: a model output acquires consequence through a response policy.

## Why this revision improves the chapter

The prior opening named thousands of false positives but moved quickly into abstraction. The revised opening lets the reader see what the output entered: a store, an employee workflow, a set of response permissions, and a person who could be followed, searched, expelled, or accused. The chapter's phrase **“the model gets a vote”** is therefore earned by a documented decision chain rather than announced as a metaphor.

The NIST counterevidence prevents the scene from becoming a familiar anti-technology morality tale. The sharper claim is about how uncertain technical outputs acquire institutional authority—and how safeguards, system quality, and response design determine what that authority can do.
