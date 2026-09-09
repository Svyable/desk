# The Agreement Between Distant Strangers

A clock can tell you its own time.

The trouble begins when you ask it to speak for somewhere else.

Suppose I place one excellent clock in New York and another in London. Each can count a local sequence of seconds. Now I want the clocks to agree. The phrase sounds harmless. Agree about what?

If they sit side by side, comparison is easy. A cable can carry a signal over centimeters. At transatlantic distance, the signal itself becomes part of the problem. Light takes time to propagate. Fiber routes are longer than straight lines and have delays. Satellite links travel through changing geometry. Equipment contributes latency. Atmospheric paths vary. The clocks occupy different gravitational potentials. Earth rotates under them.

The synchronized world begins with a delay budget.

Einstein’s 1905 synchronization procedure was cleaner because it was a thought experiment. Put identical clocks A and B at rest in one inertial frame. Send a light signal from A to B and back. Define B as synchronized with A when the outbound and inbound light travel times are treated symmetrically. In that frame, the procedure yields a coherent assignment of times to distant events.

The phrase “treated symmetrically” has generated a century of philosophy.

Can the one-way speed of light be measured without already having synchronized clocks at the endpoints? If synchronization uses the assumption that light takes equal time in each direction, have we discovered simultaneity or defined it? There are sophisticated positions on the conventionality of simultaneity. You do not need to settle them to notice something operationally important.

Distant simultaneity is not given to a lone clock for free.

A clock reading is local. A network time is constructed through a protocol.

That statement survives even if you regard Einstein synchronization as uniquely natural given the symmetries of special relativity. Natural is not the same as instantaneous. You still need the light signals and the geometry. The protocol is how local readings are extended into a coordinate convention.

This sounds like a small technicality until you realize how much of modern life depends on hiding it.

A financial exchange wants to know which order reached the market first. A cellular network wants transmitters aligned. A power grid wants phasor measurements tied to common time. An observatory wants data from distant antennas combined coherently. A data center wants logs ordered. A satellite navigation receiver wants a position from signal arrival times. None of these systems can use “now” as a metaphysical primitive. They need clocks and transfer.

The network has to build the present it needs.

Computer engineers learn a version of this painfully. In a distributed system, there is no perfect shared clock. Each machine has an oscillator. Oscillators drift. Network delays vary. Synchronization protocols can estimate offsets but not eliminate uncertainty. If an application requires strict ordering, a wall-clock timestamp may be insufficient. Lamport clocks and later logical-clock schemes order events using message relationships rather than pretending to know a universal physical time. Modern systems mix physical and logical time in various ways because each captures something the other cannot.

This is not the same problem as relativity, but the rhyme is instructive.

Both punish the fantasy of an omniscient observer outside the system.

A distributed database cannot see every event instantly. A relativistic observer cannot receive information faster than light. In each case, global order must be inferred from local information and communication structure. The engineering case includes congestion, faults, and malicious machines that spacetime does not. The physics case includes exact causal constraints and geometry that software protocols do not create. I do not want to collapse them into one theory. I want to notice that coordination repeatedly begins where the view from nowhere fails.

Humans used to solve distant time much more slowly.

Before electrical communication, towns kept local solar time. Noon was tied to the Sun’s passage across the local meridian. Because longitude changes continuously, so did local time. A traveler moving east or west encountered towns whose clocks differed by minutes. This was tolerable when travel itself was slow.

Railroads made the differences operationally expensive.

A train schedule that crossed many local times could become confusing and dangerous. Telegraphy made it possible to distribute a standard reference rapidly. During the nineteenth century, railway time and national standards spread. In North America, railroads adopted standard time zones in 1883 before federal law later formalized aspects of civil time. Britain’s railways similarly helped displace local mean time in favor of Greenwich-based standards.

The usual story is that technology standardized time.

The more interesting story is that technology changed the scale over which disagreement mattered.

A town could live happily with its own noon while the neighboring town was half a minute different. Once trains connected them on precise schedules, the local convention became friction. Once telegraphs connected markets, newsrooms, observatories, and government offices, temporal interoperability acquired value.

Synchronization expanded because interaction expanded.

The pattern repeats. Radio time signals let ships and distant stations compare clocks. Telephone and digital networks increased requirements. Satellite navigation made precise time globally available. Fiber links now compare optical clocks over hundreds or thousands of kilometers with extraordinary stability. Each step makes common time seem more natural to the user while making the underlying transfer problem more elaborate to the specialist.

Infrastructure is the art of making a hard relationship look like a property.

A synchronized timestamp appears on your screen. The device does not show the strata underneath it: oscillator discipline, network time protocols, GNSS reception, national laboratory traceability, TAI, UTC, Earth orientation, leap-second policy, relativistic corrections.

The result feels like the world told your phone the time.

That feeling is one of the greatest interface successes in human history.

It is also metaphysically misleading.

A useful common time scale can be defined over a region. General relativity does not ban coordinate time. The International Astronomical Union defines relativistic reference systems and time coordinates for geocentric and barycentric applications. GPS has a system time designed for navigation. Astronomers use Terrestrial Time, Barycentric Coordinate Time, UT1, and other scales because different tasks require different relationships to clocks, Earth rotation, and relativistic coordinates.

The multiplicity is not bureaucratic failure.

It is what precision looks like after absolute time is gone.

A master-clock intuition wants one scale to be real and the others to be approximations. Practice is more plural. A rotation angle of Earth is not the same physical quantity as an atomic timescale. A coordinate parameter centered on the solar-system barycenter is not the proper time of a clock on Earth’s surface. One can define exact transformations and conventions among them within stated models. Trying to compress all of them into one unqualified “time” would throw away information.

Even UTC contains a negotiated marriage between unlike things.

Atomic clocks provide extraordinary regularity. Earth rotation provides the historical relationship between civil time and the astronomical day. Earth does not rotate with atomic-clock regularity. Tides, atmosphere, oceans, core-mantle interactions, earthquakes, and other mass redistributions affect its rotation. The length of day varies. If you insist that civil seconds remain uniform according to atomic standards *and* that civil time remain very close to Earth’s rotation angle, you need occasional adjustments.

That is what leap seconds have done since 1972.

When the difference between UTC and UT1, an Earth-rotation angle timescale, approaches a specified limit, a leap second can be inserted. The result has been a civil time scale that stays close to mean solar time while using atomic seconds. It is a clever compromise between astronomy and metrology.

It is also a nuisance for systems that expect every minute to contain sixty seconds and every timestamp sequence to advance continuously.

Leap seconds have produced implementation bugs and operational concern across computing and telecommunications. Different systems smear them, step them, ignore them, or handle them correctly under different definitions of correct. A one-second civil adjustment can become a distributed-systems event.

In 2022 the General Conference on Weights and Measures adopted a resolution to increase the maximum allowed difference between UTC and UT1 by or before 2035, effectively creating a path toward a continuous UTC without the current leap-second mechanism. The exact future tolerance and implementation details are matters of international coordination. The vote did not repeal Earth rotation. It changed how civilization plans to couple civil time to it.

This is almost too perfect an example for the thesis of the book.

Atomic time is physical.

Earth rotation is physical.

The relation chosen for civil time is institutional.

None of these statements weakens the others.

The common mistake is to think that if any element is conventional, the whole structure becomes arbitrary. But conventions can be constrained by physics, legacy systems, social expectations, safety, interoperability, and cost. You could define a civil day to contain 100,000 new units tomorrow. The universe would not object. Billions of clocks, legal documents, software systems, navigation devices, employment contracts, habits, and historical records would.

A convention can be optional in principle and nearly immovable in practice.

Time zones show the same structure with lower precision and higher politics. Geography does not force a country to choose one time zone, several, daylight saving, permanent standard time, or a half-hour offset. Solar position constrains the consequences. Commerce and governance constrain the costs. Legislatures choose.

People argue about these choices as if one side has Nature.

Nature supplies sunrise.

Law supplies the clock label attached to it.

At the precision of human sleep and school schedules, this distinction matters. At the precision of optical clocks, the conventions sit atop relativity and metrology. The stack is continuous but the layers are not interchangeable.

This is why I resist the sentence “time is a social construct,” even though a large portion of what people experience as time clearly is organized socially.

The phrase blurs exactly where we need resolution.

The legal deadline is constructed. The calendar is constructed. The time zone is constructed. UTC is institutionally maintained. The SI second is a defined unit anchored to reproducible physics. Proper time differences due to motion and gravity are not created by legislation. Entropy production is not a committee decision. The human nervous system’s perception of duration is another layer again.

One word, several problems.

Good thinking begins by refusing to make them all prove one another.

Distant synchronization offers a particularly clean boundary because it requires both nature and agreement. The finite speed of light is physical. The fact that remote clocks cannot be compared instantaneously is physical. The geometry and motion affecting signal propagation are physical. The protocol used to assign coordinate times is a convention chosen to respect those physical constraints and serve a purpose.

You can get the protocol wrong.

That alone should end the lazy idea that convention means fiction.

A poorly calibrated time-transfer link produces errors. A synchronization algorithm that assumes symmetric delay when the network is asymmetric can estimate the wrong offset. A GNSS receiver using stale ephemerides or mishandling leap seconds can misbehave. A financial system with unsynchronized clocks can generate ambiguous audit trails. Conventions create expectations that can be tested against implementation.

The objectivity lives in the procedure.

This is close to how measurement works generally. A temperature scale is defined through standards and procedures, but hot objects are not socially constructed. Voltage depends on a defined unit and measurement apparatus, but a circuit can still kill you if your convention is sloppy. Scientific quantities become portable through disciplined agreements about how measurements map to numbers.

Time is special because portability tempts us to imagine a substance.

A globally synchronized clock network feels like one giant clock.

It is not.

It is a network continually proving that many clocks can behave coherently enough for a shared purpose.

The difference is hidden until the network breaks.

Then suddenly time has administrators.

A leap second is announced. A stratum-1 NTP server is misconfigured. A GNSS antenna fails. An optical link loses lock. A database node drifts. The supposedly ambient present fractures into offsets, uncertainty intervals, logs, correction files, and frantic people asking which timestamp to trust.

Failure reveals the machinery that success concealed.

This is why I want to treat synchronization as a human role rather than merely a technical service.

Our species is unusually good at extending local regularities into shared abstract spaces. We agree that a certain oscillation realizes the second. We build clocks. We compare them. We weight ensembles. We distribute signals. We write protocols. We legislate time zones. We preserve mappings between old and new standards. We maintain archives so a timestamp from 1974 can be interpreted in 2074.

None of this gives us authority over time itself.

It gives us responsibility for the bridge.

The distinction matters more as systems become autonomous. Machines schedule machines. Power markets settle automatically. Satellites coordinate networks. High-frequency trading operates at intervals far below human reaction time. Scientific instruments generate data whose timestamps must remain meaningful for decades. If the temporal infrastructure becomes opaque, errors can propagate long before a person notices.

Common time is therefore not merely convenience. It is a trust system.

A timestamp says: this event has been placed into a shared temporal framework by a chain of physical and institutional references. Most users never inspect the chain. They rely on the institutions that maintain it.

The chain can be extraordinarily good.

That is the point I do not want skepticism to erase. We are capable of synchronizing distant strangers with precision Newton could not have imagined. Relativity did not make the project futile. It told us what the project actually requires.

No instantaneous action at a distance.

No universal now.

Signals, clocks, models, conventions.

And then the astonishing result: a planet full of local histories that can meet at 14:00 UTC.