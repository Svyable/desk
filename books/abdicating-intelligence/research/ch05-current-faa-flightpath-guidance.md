# Chapter 5 — current FAA flightpath-management boundary

Rechecked 2026-09-14 for the media/research enhancement pass on “Out of the Loop.”

## Primary authoritative evidence

The manuscript previously cited a 2013 FAA Safety Alert to support its aviation analogy. Current FAA guidance provides a stronger and more nuanced institutional anchor.

FAA Advisory Circular 120-123, *Flightpath Management* (issued 2022-11-21; currently Active), treats manual flight operations, management of automated systems, pilot monitoring, and energy management as parts of one flightpath-management framework. It is guidance for parts 121/135 operators and part 142 training centers, not evidence that manual flight is categorically safer than automation.

FAA Advisory Circular 61-98E, *Currency Requirements and Guidance for the Flight Review and Instrument Proficiency Check* (issued 2024-10-30; currently Active), says overreliance on automated flight systems can erode manual flying skills, strongly recommends that pilots manually control automation-equipped aircraft at times to maintain those skills, and says pilots should be able to operate without aircraft automation. It also recommends safe, practical simulation of critical automation failures during flight reviews. This circular is aimed at general aviation pilots and instructors, so it should not be presented as a rule for airline operations.

Sources:
- FAA AC 120-123 landing page: https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1041433
- FAA AC 120-123 PDF: https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-123.pdf
- FAA AC 61-98E landing page: https://www.faa.gov/regulations_policies/advisory_circulars/index.cfm/go/document.information/documentID/1043281
- FAA AC 61-98E PDF: https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_61-98E.pdf

## Counterevidence and boundary

The current FAA material does not support a nostalgic “humans good, automation bad” reading. AC 120-123 explicitly integrates automation management with manual operations and monitoring. AC 61-98E treats advanced avionics and automation as valuable capabilities while warning about overreliance and degraded recovery skill. The institutional response is proficiency across modes, not rejection of automation.

The strongest transferable claim for Chapter 5 is therefore narrower: where humans retain responsibility for recovery from automation failures, institutions may need deliberate practice and observable system state because ordinary automated operation can provide too little practice for rare takeover conditions. This does not establish that every automated knowledge-work task requires manual duplication, or that aviation findings transfer quantitatively to AI supervision.

## Integrated media asset

**File:** `../media/ch05-out-of-loop-reserve.svg`

**Working title:** “Automation can remove practice faster than responsibility.”

**Purpose:** Make the chapter’s core operational paradox visible without turning aviation into a simplistic anti-automation morality tale. The upper path shows routine automated operation reducing direct human-control practice before a rare abnormal condition requires immediate takeover. The lower reserve loop shows recurrent practice, failure drills, or simulation maintaining the human capability that ordinary operation no longer exercises often enough.

**Rights/provenance:** The SVG is newly authored for this project. It does not reproduce, trace, or adapt FAA diagrams, cockpit displays, aircraft manufacturer graphics, airline material, logos, commercial icons, or third-party artwork. It uses factual and conceptual distinctions drawn from the FAA sources above. Under 17 U.S.C. § 105, copyright protection is generally unavailable for works of the United States Government, although federal documents can contain third-party material; none of the source artwork is reused here. Copyright Office text: https://www.copyright.gov/title17/92chap1.html#105

**Attribution/credit line:** No third-party visual attribution is legally required for the original diagram. Keep the source note/caption tied to FAA AC 120-123 and AC 61-98E in the manuscript/research apparatus. A reader-facing credit may say: “Conceptual diagram by the author; evidence boundary informed by FAA AC 120-123 and AC 61-98E.”

**Caption:** *Automation can improve ordinary operation while leaving the human responsible for exceptional cases. If direct practice falls during routine operation, recurrent drills or simulation may be needed to keep the fallback role real rather than ceremonial.*

**Alt text:** “Conceptual diagram. Routine automation controls the process while a human monitors and receives less direct control practice. A rare abnormal condition then requires the human to take over, reconstruct state, and act. A separate reserve loop shows recurrent practice, failure drills, or simulation maintaining situation awareness and control skill so the fallback role remains practiced.”

**Evidentiary boundary:** This is conceptual, not quantitative. It does not claim that automation necessarily degrades safety, that all pilots lose proficiency, that aviation rules transfer directly to AI systems, or that recurrent practice guarantees successful recovery. It illustrates the narrower design problem supported by the cited guidance: automation can reduce exposure to the very manual or recovery conditions for which humans may still retain responsibility.

## Reader-facing formatting guidance

- Place the figure immediately after the current-FAA paragraph and before the chapter generalizes from aviation to the broader automation paradox.
- Keep the image and caption together across page breaks.
- Prefer full text width in print; do not shrink below the point where the three-line labels become cramped.
- Preserve high-contrast grayscale rendering. The figure intentionally does not depend on color.
- In EPUB/HTML, use the SVG’s title/description plus the manuscript alt text rather than a filename-derived label.
- Do not float the figure more than one page away from the FAA paragraph; the source boundary is part of the meaning.

## Editorial implication

The chapter can now replace the dated 2013 FAA reference with current active guidance and use the FAA’s integrated framing to strengthen its best line of argument: reserve capability is a design and training problem. The figure also reduces the need for another generic analogy because it makes the ordinary-operation → rare-takeover → reserve-practice structure visible at a glance.