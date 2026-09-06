# Chapter 2 research note — historical false alerts

## Why this note exists

Chapter 2 argues that famous nuclear false-alarm stories are often compressed into a misleading machine-versus-hero narrative. The primary record supports that caution and gives the chapter a better evidentiary base for talking about architecture, cross-checks, and error propagation.

## November 9, 1979: test data entered the live warning system

A declassified Aerospace Defense Command history describes a test scenario of a missile attack being transmitted from the Message/Generator Recorder into NORAD's operational 427M computer system, where it was processed as real information and displayed on missile-warning consoles. The same official history says the warning was almost immediately assigned low confidence as not being real, although procedural and equipment failures still led to the launch of NORAD interceptor aircraft.

A November 28, 1979 State Department cable likewise says a portion of a recorded test scenario was erroneously transmitted outside NORAD headquarters, that command levels identified it as false in less than six minutes, and that no strategic nuclear units took steps toward advanced alert. The episode therefore supports a narrower claim than many later retellings: bad data propagated into live warning channels and triggered real activity, but multiple confirmation mechanisms also constrained escalation.

Primary/declassified sources:

- Aerospace Defense Command, *History of ADCOM/ADC, 1 January–31 December 1979*, declassified by U.S. Northern Command: https://nsarchive.gwu.edu/document/19911-national-security-archive-doc-13-aerospace
- U.S. Department of State cable 307013, “TNF: Soviets and the False Missile Alert,” November 28, 1979: https://nsarchive.gwu.edu/media/19907/ocr

## June 3 and June 6, 1980: faulty component corrupted warning messages

GAO's May 15, 1981 report *NORAD's Missile Warning System: What Went Wrong?* states that the June 3 and June 6 incidents were caused by a faulty component in the communications system that wrote erroneous numbers into blank fields in warning messages, making them indicate a mass attack. GAO records concrete remediation: tracing messages through preparation, adding a display showing what NORAD was transmitting to other command posts, and requiring release of outgoing warning messages by the NORAD commander in chief.

A contemporaneous Senate Armed Services Committee investigation focused specifically on the June 3 and June 6 alerts and examined the National Military Command Center, NORAD, Strategic Air Command, and responsible defense officials. That institutional record matters because the events were not merely one screen being “believed” or “disbelieved”; they involved distributed command-and-control procedures and corrective action across multiple organizations.

Primary/authoritative sources:

- U.S. Government Accountability Office, *NORAD's Missile Warning System: What Went Wrong?*, MASAD-81-30, May 15, 1981: https://www.gao.gov/products/masad-81-30
- U.S. Senate Armed Services Committee, *Report on Recent False Alerts from the Nation's Missile Attack Warning System*, 1980: https://www.govinfo.gov/content/pkg/CPRT-96SPRT68531O/pdf/CPRT-96SPRT68531O.pdf

## Strongest counterargument

These incidents are evidence that warning systems can fail in consequential ways, but they are also evidence that layered verification can work. The November 1979 record says the false data was identified quickly and strategic nuclear forces did not move to advanced alert. The 1980 incidents produced operational responses and exposed serious system weaknesses, yet they also led to specific technical and procedural fixes.

The chapter should therefore resist both sensationalism and complacency. “We almost had nuclear war because one computer was wrong” is too simple. “The safeguards worked, therefore the system was safe” is also too simple. The useful question is which safeguards were independent, which failed, which caught the error, and whether the same architecture would remain robust under worse timing, correlated failure, cyber interference, or a more plausible geopolitical context.

## Editorial implication

Chapter 2's current thesis is directionally right. A later prose pass should replace generic false-alarm setup with one tightly sourced incident and use the record to show the real mechanism: test or corrupted data entered operational channels, institutional processes gave it temporary authority, and separate checks plus human judgment constrained propagation. That is more vivid and more defensible than a hero-versus-machine morality tale.
