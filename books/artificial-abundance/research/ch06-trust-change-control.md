# Chapter 6 — trust as controlled change

Chapter 6 argues that abundant competent-looking output can make trust a separate product, and that trust can migrate from the identity of the producer toward the quality of the verification and governance system. A current FDA mechanism makes that claim concrete without requiring the chapter to imply that regulation itself guarantees reliability.

## Primary-source mechanism: predetermined change control plans

In August 2025, the U.S. Food and Drug Administration issued final guidance for predetermined change control plans (PCCPs) for artificial-intelligence-enabled device software functions. The guidance is designed for AI-enabled medical devices that may be modified after authorization. Instead of treating every future model change as equivalent to the already-reviewed version, a PCCP specifies in advance the modifications a manufacturer intends to make, the methodology for developing, validating, and implementing those modifications, and an assessment of their impact.

FDA reviews the PCCP as part of the device's marketing submission. Changes that stay within an authorized PCCP can then be implemented without a separate marketing submission for each modification while the manufacturer remains responsible for the plan's validation and controls.

This is a useful Chapter 6 example because the object of trust is not simply "the AI" or the manufacturer's reputation. The trust architecture attaches to a bounded version-and-change process: what may change, how the change will be tested, what evidence is required, what effects must be assessed, and what remains outside the preauthorized boundary.

Source: U.S. Food and Drug Administration, *Marketing Submission Recommendations for a Predetermined Change Control Plan for Artificial Intelligence-Enabled Device Software Functions*, final guidance, August 2025: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/marketing-submission-recommendations-predetermined-change-control-plan-artificial-intelligence

## Supporting international principles

FDA, Health Canada, and the United Kingdom's MHRA have also described five guiding principles for PCCPs for machine-learning-enabled medical devices. The principles emphasize that planned changes should be focused and bounded; risk-based; evidence-based; transparent; and managed across the total product lifecycle. The guidance explicitly discusses verification and validation, monitoring, detection of performance deviations, and mechanisms to revert or stop a change that fails specified performance criteria.

That language is unusually close to Chapter 6's strongest proposition: a changing system needs a trust mechanism that says where confidence ends and what happens when a new version crosses the boundary.

Source: FDA / Health Canada / MHRA, *Predetermined Change Control Plans for Machine Learning-Enabled Medical Devices: Guiding Principles*: https://www.fda.gov/medical-devices/software-medical-device-samd/predetermined-change-control-plans-machine-learning-enabled-medical-devices-guiding-principles

## Strongest counterargument

A regulated change-control process is not proof that the resulting system is safe, accurate, or worthy of trust. A manufacturer can test the wrong endpoints, a validation set can miss real-world conditions, cumulative small changes can behave differently from isolated changes, postmarket populations can drift, and compliance paperwork can become a substitute for noticing failures.

The FDA mechanism therefore should not be used as an argument that formal governance creates trust by declaration. Its value is narrower: when software can change after deployment, trust can be made more inspectable by forcing the institution to define the permissible change space, validation method, impact assessment, and response to failed performance before the change is shipped.

FDA's separate lifecycle work reinforces the limitation. Its January 2025 draft guidance for AI-enabled device software functions recommends total-product-lifecycle risk management and postmarket performance monitoring precisely because premarket review cannot freeze an adaptive or frequently updated system in time. That document remains draft guidance and should be identified as such if used.

Source: U.S. Food and Drug Administration, *Artificial Intelligence-Enabled Device Software Functions: Lifecycle Management and Marketing Submission Recommendations*, draft guidance, January 2025: https://www.fda.gov/regulatory-information/search-fda-guidance-documents/artificial-intelligence-enabled-device-software-functions-lifecycle-management-and-marketing

## Editorial use

A later prose pass can strengthen the section beginning "Trust also has a maintenance cost" by replacing some generic version-control language with one compact regulated example. The point is not that medical-device regulation should be copied into every AI product. It is that a serious institution already treats model change as something that can invalidate yesterday's confidence unless the scope of change, validation procedure, impact assessment, and failure response are specified in advance.

The sharper formulation is: **trust in a changing system is partly trust in the rules governing change.** That is more precise than a generic appeal to audit trails and gives the chapter a concrete example of confidence moving from producer identity to process.
