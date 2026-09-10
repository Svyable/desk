# Chapter 11 — Guidance at Mach Three

Project Pluto is remembered for nuclear propulsion because nuclear propulsion photographs well. Guidance is where the weapon would have lived or died.

A strategic delivery system is a machine for being somewhere specific at the right time. Propulsion only buys the right to attempt that.

The proposed SLAM mission combined long range, low altitude, high speed and multiple target opportunities. Each adjective makes navigation harder. Long range amplifies accumulated error. Low altitude blocks some external references and creates terrain collision risk. High speed compresses correction time. Multiple targets increase the cost of getting lost after the first maneuver.

An inertial navigation system can operate without external signals by integrating measured acceleration and rotation. It is wonderfully autonomous and wonderfully unforgiving: small sensor errors accumulate. Over a very long route, uncorrected drift can become unacceptable.

Terrain comparison offers one way to reset that drift. Measure the elevation profile beneath the vehicle and compare it with a stored map. If the observed sequence of ridges and valleys matches a known sequence, update position. This is an information problem disguised as geography.

In the early 1960s, that meant doing map matching with limited computation, storage and sensor fidelity. It also meant deciding how much terrain information to carry, how to handle ambiguous landscapes, what to do over water or flat regions, and how aggressively the missile should correct a mismatch.

The guidance system did not need consciousness. It needed enough confidence to avoid mistaking the wrong valley for the right one at supersonic speed.

This chapter matters because it exposes a recurrent mistake in discussions of advanced propulsion. Range is often treated as the master variable. Give a vehicle more delta-v, endurance or speed and strategic possibility expands automatically. In practice, propulsion can outrun navigation, sensing, communication and control.

Pluto threatened to do exactly that. A nuclear ramjet could in principle keep providing thrust long after a conventional missile would have exhausted its fuel. But a guidance architecture that could not maintain useful position knowledge for the same duration would turn endurance into wandering.

The harder question is what happens when the machine becomes uncertain. A bomber has a crew. A ballistic missile follows a largely predetermined trajectory. A long-endurance autonomous low-altitude missile sits awkwardly between them. It may need to respond to sensor disagreement, map mismatch, actuator degradation and changing mission assumptions without human intervention.

The modern word would be autonomy. The 1960s implementation would have been narrower, but the system problem is recognizable.

A weapon whose propulsion allows it to remain active for hours forces designers to define failure behavior. Does it climb? Abort? Fly to a disposal area? Continue inertially? Shut down the reactor? Can the reactor even be shut down safely while the vehicle remains airborne? Where does an aborted nuclear ramjet go?

Those questions are not evidence that Pluto was doomed. They are evidence that a complete weapon is more than the union of its successful demonstrations.

The core could be tested in Nevada.

The decision logic had to survive everywhere else.
