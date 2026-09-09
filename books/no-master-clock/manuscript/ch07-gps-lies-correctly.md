# GPS Lies Correctly

Your phone knows where it is because several clocks agree on a fiction carefully enough.

That is not a criticism of GPS.

It is the achievement.

A Global Positioning System satellite broadcasts a signal containing, among other things, information about the satellite’s time and orbit. A receiver compares arrival times from multiple satellites. Because electromagnetic signals propagate at essentially the speed of light in vacuum, differences in arrival time encode geometric distance. Solve for three spatial coordinates and the receiver’s clock offset and you get a position and time solution.

The fourth unknown is why consumer GPS receivers do not need atomic clocks of their own.

The satellite constellation carries excellent clocks. Your receiver carries a much cheaper oscillator. By observing at least four satellites under normal geometry, it can solve for its clock error along with position. The system exports atomic time to a device that could never maintain it independently.

This is a miracle of synchronization disguised as a blue dot.

It is also relativistic from end to end.

GPS satellites orbit Earth at roughly 20,200 kilometers altitude and move at several kilometers per second. Special relativity says their motion makes their onboard clocks run slower relative to clocks at rest in an Earth-centered inertial framework. General relativity says the weaker gravitational potential at orbital altitude makes them run faster relative to clocks deeper in Earth’s gravity well. The gravitational effect is larger. The familiar net figure is about 38 microseconds per day faster than comparable Earth-surface clocks if the satellite clocks were simply left to run without the system’s relativistic design.

Thirty-eight microseconds sounds harmless.

Light travels more than eleven kilometers in that time.

Navigation turns temporal sloppiness into spatial disaster quickly.

The clocks are therefore frequency-offset before launch and the navigation equations include relativistic corrections for orbital eccentricity and other effects within the chosen coordinate framework. The system defines GPS time and relates the constellation to a common coordinate timescale suitable for navigation.

The satellite clock is not asked to report its raw proper time as though that were world time.

It is disciplined to participate in a network.

This is where the title of the chapter comes from. GPS “lies” only in the playful sense that the system deliberately makes local clocks conform to a shared coordinate fiction. The fiction is not false. It is a coordinate convention engineered to be physically consistent.

A satellite follows one worldline. A receiver on Earth follows another. If each simply announced the proper time it had accumulated since some reunion, the numbers would drift relative to one another because of velocity and gravitational differences. A navigation system wants a common reference. Relativity gives the transformation machinery needed to build it.

The common reference is more useful than any clock’s raw biography.

This is an important reversal. People sometimes hear relativity and imagine that local proper time is the “real” time while coordinate time is fake. That hierarchy is too simple. Proper time is what an ideal local clock measures along its worldline. Coordinate time is a label used to relate events across a spacetime region. Both can be physically meaningful in their domains. GPS needs coordinate time precisely because a constellation cannot navigate Earth using hundreds of unrelated local biographies.

The coordinate is not a master clock.

It is a treaty.

The treaty has clauses.

GPS time began at an epoch in January 1980 and does not insert leap seconds. UTC does. Their offset therefore changes when leap seconds occur, while GPS navigation messages provide the information needed to relate the two. This separation protects the continuous system time desired for navigation while allowing users to recover civil UTC.

One physical infrastructure carries multiple temporal semantics.

The receiver needs to know which one it is using.

That small fact has caused real failures in systems that mishandle GPS week-number rollover, leap-second data, or time conversion. GPS originally represented the week count with ten bits, causing it to roll over every 1024 weeks. Equipment that treated the count as an absolute date could jump backward roughly nineteen and a half years at rollover if software was not designed correctly. The satellites had not time-traveled. The representation had exhausted its counter.

Time bugs are often representation bugs wearing metaphysical costumes.

A timestamp is not time. It is an encoding under a timescale and epoch.

This distinction seems pedantic until infrastructure depends on it. Aviation, telecommunications, electricity grids, cellular base stations, scientific observatories, financial networks, and surveying systems all use GNSS timing. A receiver that emits a precise pulse per second can become a reference for other equipment. The blue dot is only the public face of a planet-sized time distribution system.

GPS.gov notes that receivers can synchronize to atomic-clock-derived time at the level of around one hundred billionths of a second under appropriate conditions. Specialized timing receivers and disciplined oscillators can do better for particular applications. The exact performance depends on hardware, geometry, atmosphere, antenna, receiver processing, and reference setup. The important fact is scale: the atomic standard has escaped the national laboratory and become infrastructure.

Distributed civilization now borrows clocks from orbit.

This makes GNSS vulnerability a temporal vulnerability as well as a navigation vulnerability.

Signals arriving from medium Earth orbit are weak at the receiver. They can be jammed. They can be spoofed. Antennas can fail. Space weather can disturb propagation. Satellite or control-segment faults can matter. A system that uses GNSS time as its only authoritative reference may discover that “what time is it?” has become a cybersecurity question.

Critical infrastructure therefore uses holdover oscillators, multiple GNSS constellations, terrestrial timing, fiber links, network protocols, cross-checks, and other redundancy depending on risk. The best design is not to worship the satellite clock. It is to know what chain of trust the clock reading represents.

This is exactly how metrology thinks.

Traceability is a documented unbroken chain of calibrations and comparisons, each contributing uncertainty. A timestamp used in a regulated system may need traceability to UTC. A laboratory measurement may need a frequency traceable to the SI. The reference gains authority through a chain that can be audited.

Navigation adds geometry to the chain.

The receiver is solving not only which time but where.

That is why better clocks improve positioning and better positioning improves clock comparison. At enough precision, the two questions couple through gravity. If a laboratory wants to compare an optical clock with another at 10^-18-level fractional uncertainty, it needs the gravitational potential difference to roughly the centimeter-equivalent scale. Conversely, an optical clock comparison can in principle measure potential difference.

Time becomes height.

Height becomes time.

GPS sits in the middle as a reminder that coordinates are operational structures, not merely labels in a textbook.

The system has an Earth-centered coordinate frame tied to monitoring stations and orbit determination. Satellite ephemerides describe where the spacecraft are in that frame. Relativistic models relate onboard clocks to system time. A receiver’s position solution emerges from the consistency of all these pieces.

If one insists on asking which clock in the network tells “the real time,” the question is badly formed.

There are clocks with proper times. There is GPS system time. There is UTC. There are local receiver clocks. There are transformation and steering procedures. The engineering problem is to relate them well enough that the range equations close.

This is perhaps the most practical refutation of the claim that relativity is merely philosophical.

The system works because engineers did not insist on Newton.

There is a popular anecdote that the designers initially left relativistic corrections switchable because some people doubted whether they would matter, and that the predicted effect quickly appeared. Versions of this story are often repeated without careful sourcing. I do not need it. The documented architecture is enough. GPS’s specification and operation incorporate relativistic effects because the clocks occupy different velocities and gravitational potentials. Navigation accuracy would degrade rapidly if those effects were ignored.

The stronger lesson does not require folklore.

Common time can be more useful than local time only if common time respects local physics.

That sentence could be the motto for the entire book.

A bureaucracy cannot decree satellite clocks into Newtonian agreement. It can choose a coordinate scale and build hardware and algorithms that map the clocks into it. The convention works because the physics is modeled rather than suppressed.

This is what I mean by a good fiction.

All coordinate systems are in some sense representational. Latitude and longitude do not exist as painted lines on Earth. Yet a coordinate can guide an aircraft because its relationship to the planet is disciplined. A legal property boundary is conventional but can decide who owns a house because surveys anchor it to agreed geodetic references. GPS time is designed, but your receiver can determine position because the design is consistent with signal propagation and relativity.

A fiction becomes dangerous when we forget where it departs from the thing.

Consider “simultaneous” satellite transmissions. The navigation system can assign coordinate times to emission events across the constellation. That does not mean some cosmic observer sees a universal simultaneous layer. It means the system has chosen a coordinate convention under which the equations can be solved consistently.

The same is true of a timestamped photograph. The time label tells you where the camera’s clock placed the event in a shared temporal scheme. It does not encode every causal relation around the event. If two cameras’ clocks were synchronized poorly, their timestamp order can disagree with physical order. If events are spacelike-separated, relativity can make their order frame-dependent. The timestamp is an artifact that needs a reference system.

We usually do not care.

The fact that most applications can ignore this is evidence of successful abstraction, not of absolute time.

GPS makes the abstraction particularly impressive because it coordinates clocks in motion thousands of kilometers above us, corrects relativistic effects, distributes the result globally, and lets a mass-produced receiver infer its own clock offset.

The phone does not own the time it displays.

It rents it from a network.

That network itself is connected to broader timing infrastructure and control systems. The U.S. Naval Observatory and other facilities contribute to maintaining GPS time and its relation to UTC. Other GNSS constellations maintain their own system times with defined relationships. Multi-constellation receivers must reconcile different time scales and reference frames.

The future of navigation is therefore not one global clock but translation among several highly controlled temporal systems.

This feels messy only if you expect the master clock.

Without that expectation, it is ordinary engineering.

The multiplicity is a feature. Galileo, GPS, BeiDou, GLONASS, regional systems, ground-based augmentation, inertial navigation, terrestrial timing, and future optical links can provide resilience and cross-checks. The more civilization depends on precise synchronization, the less comfortable it should be with one unexamined temporal source.

There is a philosophical lesson hiding in redundancy.

Agreement among clocks is strongest when the clocks can disagree.

If every device copies one reference, apparent consensus may reveal only distribution. Independent clocks with different architectures, locations, and transfer paths can expose common assumptions and systematic errors. This is why frequency metrology values comparisons across species and laboratories. The same logic applies to infrastructure: independent timing paths are evidence against common-mode failure.

A master clock is epistemically fragile.

A network of clocks can test itself.

That does not mean decentralization is automatically superior. Coordination requires hierarchy somewhere. GPS needs a control segment. TAI needs an institution to compute and publish it. Standards need definitions. A thousand clocks without a comparison protocol are a thousand local stories.

The achievement lies in federation.

Local clocks remain physical.

Shared time remains organized.

GPS is the clearest object lesson because the two meet every time you ask for directions.

When the map says you will arrive in seventeen minutes, the phone is standing on more time theory than the sentence deserves.

The satellite clocks are running at their own proper rates. Their frequencies have been engineered relative to a system scale. Signals take finite time. Earth rotates. The receiver solves for its local clock error. Relativistic corrections sit inside the navigation model. Civil time may be recovered through another mapping.

Out comes a blue dot.

There is no master clock.

There is a remarkably good agreement.