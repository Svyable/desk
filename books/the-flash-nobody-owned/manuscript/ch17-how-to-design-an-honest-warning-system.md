# 17 — How to Design an Honest Warning System

The Vela story suggests design rules for modern warning systems.

First: preserve raw data around threshold crossings. A classifier score is not enough. Future analysts need the waveform, timing, calibration state, sensor geometry and environmental context.

Second: separate the alert from the attribution. *An event occurred* and *state X caused it* should live in different fields, owned by different evidence chains.

Third: seek orthogonal sensors. Optical plus hydroacoustic plus radionuclide evidence is more informative than three optical systems sharing similar failure modes.

Fourth: maintain a zoo. False positives should not disappear after closure. They are training data for the next ambiguous event.

Fifth: pre-register the consequences of confidence levels where possible. If agencies know in advance what 60, 80 or 95 percent confidence triggers, political pressure has less room to reshape the standard after a politically inconvenient alert.

Sixth: create a scientific escape hatch. When a threat-detection anomaly is convincingly non-threatening but scientifically novel, there should be a pathway—after legitimate security review—for outside researchers to examine it.

Seventh: publish uncertainty honestly. “Probably not nuclear” is not the same claim as “meteoroid proven.” “Consistent with nuclear” is not “nuclear confirmed.” Language should preserve the shape of the evidence.

These rules apply to nuclear monitoring, missile warning, cyber intrusion detection, pandemic surveillance and UAP sensor fusion.

Every warning system lives between two humiliations: missing the real thing and declaring the wrong thing real.

Vela experienced both dangers and, in one case, turned the embarrassment into astronomy.