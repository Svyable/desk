# Chapter 1 evidence notes — V1

Research checked September 3, 2026.

## The mechanism

The opening chapter uses transport-airplane rejected-takeoff logic as a concrete model for time-dependent exit conditions.

FAA material describes V1 as the takeoff decision speed around which accelerate-stop and accelerate-go performance is organized. The FAA's *Airplane Flying Handbook* explains that the go/no-go decision should be made before V1 so deceleration can begin no later than V1; if braking has not begun by V1, continuing is effectively the default. The same handbook gives an expanded definition in which V1 is both the maximum speed by which a rejected takeoff can assure a safe stop within the remaining runway/stopway and the minimum speed that assures takeoff can be completed within remaining runway/clearway after failure of the most critical engine under the specified conditions.

Primary/authoritative sources:

- FAA, *Pilot Guide to Takeoff Safety* / Takeoff Safety Training Aid: https://www.faa.gov/sites/faa.gov/files/takeoff_safety.pdf
- FAA, *Airplane Flying Handbook*, Chapter 16: https://www.faa.gov/sites/faa.gov/files/regulations_policies/handbooks_manuals/aviation/airplane_handbook/17_afh_ch16.pdf
- FAA, AC 120-114, rejected-takeoff training condition: https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_120-114.pdf
- FAA, AC 120-62, Takeoff Safety Training Aid: https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC%20120-62.pdf

## 2008 Learjet 60 — the cost of a late reject

On September 19, 2008, a Bombardier Learjet 60 operated by Global Exec Aviation overran runway 11 during a rejected takeoff at Columbia Metropolitan Airport in South Carolina. The captain, first officer, and two passengers were killed; two passengers were seriously injured.

The NTSB determined the probable cause was the operator's inadequate tire maintenance, which resulted in multiple tire failures during the takeoff roll due to severe underinflation, and the captain's execution of a rejected takeoff after V1, inconsistent with training and standard operating procedures.

Source:

- NTSB accident page, DCA08MA098: https://www.ntsb.gov/investigations/Pages/DCA08MA098.aspx

Editorial boundary: do not turn this into a morality play about one cockpit decision. The NTSB's probable-cause statement also identifies inadequate tire maintenance and resulting tire failures. The value of the case is that the accident makes the geometry of a late stop visible, not that one late decision explains the whole event.

## FAA certification logic

FAA lessons-learned material explains the underlying performance architecture. Transport-airplane takeoff planning must provide sufficient distance either to continue from the defined go/no-go decision point or to reject from that point and stop. FAA material describes balanced-field logic in which accelerate-stop and accelerate-go distances meet around a selected V1 for specified conditions.

Sources:

- FAA lessons learned, Bombardier CL-600-2B19 / N431CA: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N431CA
- FAA lessons learned, McDonnell Douglas DC-10-10 / N68045: https://www.faa.gov/lessons_learned/transport_airplane/accidents/N68045

Boundary: the chapter should not imply one universal V1 number exists. The selected speed depends on airplane, weight, configuration, runway, atmospheric conditions, and approved performance data.

## 2017 Ameristar MD-83 — the countercase the chapter needs

On March 8, 2017, an Ameristar Charters MD-83 overran the departure end of runway 23L at Willow Run Airport in Michigan after the captain rejected the takeoff 12 seconds after the airplane achieved V1. The crew had discovered, too late to stop normally within the runway, that the airplane would not respond in pitch when the captain commanded rotation. The NTSB found the right elevator was jammed.

All 110 passengers and six crewmembers evacuated; one passenger had a minor injury. The NTSB's findings say the captain's timely and appropriate decision to reject contributed to survivability.

Source:

- NTSB accident page, DCA17FA076: https://www.ntsb.gov/investigations/Pages/DCA17FA076.aspx

This is essential counterevidence. It prevents the chapter from saying "good systems obey the stop threshold." A precomputed rule can organize normal emergency decisions while reality can still produce an abnormal state in which neither designed branch is cleanly available. Good termination architecture must therefore include both precommitment and disciplined exception handling.

## Strongest formulation Chapter 1 can safely earn

A stop condition is valuable because it converts known system dynamics into a decision boundary before stress, sunk cost, or ambiguity peaks. But a mature stop condition is not magic. It is conditional on the state assumptions used to design it. The better lesson from V1 is not "never stop after the line." It is: **know when the meaning of stopping changes, and know what evidence is strong enough to justify violating the ordinary rule.**

## Claims to avoid

- Do not say V1 is simply the speed after which a pilot can never reject a takeoff.
- Do not imply every rejected takeoff after V1 ends in an overrun or accident.
- Do not claim the 2008 accident was caused only by the captain's decision; the NTSB identifies tire-maintenance failures too.
- Do not imply the 2017 captain violated a correct rule irrationally; the NTSB credited the reject decision as contributing to survivability in an airplane that could not rotate.
- Do not use a fixed V1 value in prose unless tied to a specific documented flight.
- Do not generalize aviation's regulatory definitions directly into other domains as if they were mathematically equivalent. V1 is an analogy that earns a design principle, not a universal formula.
