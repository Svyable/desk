# When Every Sensor Agrees

The strongest deception is not the one that creates the most noise. It is the one that makes independent-looking systems tell the same wrong story.

Air Force doctrine is explicit about the attraction. If an adversary relies on electromagnetic sensors for intelligence, deceptive information can be introduced to mislead. The doctrine notes that simulating multiple information sources can increase confidence in the plausibility of the deception story.

The phrase “deception story” belongs in a technical book because fusion systems tell stories whether we call them that or not. A track manager associates detections over time. A classifier maps features onto categories. A command system combines radar, infrared, communications intelligence, identification data, and contextual reporting into an operational picture. The picture is a hypothesis about what is happening.

Multiple sensors improve that hypothesis when their errors are sufficiently independent. They can make it worse when their dependencies are hidden.

Consider a radar cue that points an infrared sensor. The infrared sensor detects a hot point at the cued location. That is stronger than radar alone, but the two observations are not independent in the same way as a wide-field infrared system that found the object without the radar cue. Now add a shared clock error, a network coordinate mistake, or a common software service assigning identity. Three displays can agree because one upstream assumption is wrong.

A deliberate attacker studies those dependencies.

Physical decoys complicate the picture further. A real decoy can generate radar, infrared, and optical evidence. Electronic emitters can imitate communication activity. False command posts can reproduce radio traffic. Army lessons from Ukraine emphasize emitter decoys and false positions because modern targeting networks hunt signatures, not just visible bodies.

The result is not that sensor fusion is futile. It is that fusion has to be designed as an adversarial discipline.

Useful diversity is causal. Different frequencies, different geometries, different physical modalities, different processing stacks, independent clocks, preserved raw data, and blind calibration all raise the cost of coordinated deception. So does the ability to ask for an observable that the suspected mechanism cannot cheaply generate.

PALLADIUM's metallized spheres were a primitive version of that instinct. The CIA did not let an electronic ghost certify its own apparent strength. Physical calibration targets were introduced into the same environment.

A modern test range could go much further. Defenders should deliberately attack their own fusion systems with mixtures of coherent RF false targets, physical drones, decoys, chaff, cyber-injected metadata, timing perturbations, and environmental clutter. The objective would not be to produce a single “spoof resistant” score. It would be to map the transitions at which a system stops preserving uncertainty and begins confidently inventing an object.

That last failure is worse than missing a target. A missed target is absence of information. A confidently fused phantom can recruit weapons, aircraft, analysts, and commanders into its reality.

PALLADIUM demonstrated that an enemy sensor could be made to participate in an experiment. Modern fusion systems are larger instruments. They deserve to be experimented on before an adversary does it for us.

Sources: AFDP 3-85, https://www.doctrine.af.mil/Portals/61/documents/AFDP_3-85/AFDP%203-85%20Electromagnetic%20Spectrum%20Ops.pdf ; U.S. Army lessons on command-post deception and emitter decoys, https://www.army.mil/article/273510/lessons_learned_from_the_ukrainian_territorial_defense_forces_command_post_survivability