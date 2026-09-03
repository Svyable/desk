# The Factory Learns to Fly

In July 2019, just outside the gates of Kennedy Space Center, a new kind of space facility opened on Florida's Space Coast.

It did not contain a giant rocket.

It was not a mission-control room.

It was a factory built to produce satellites at a rate that would have sounded faintly absurd during much of the space age.

The plant belonged to OneWeb Satellites, a joint venture between OneWeb and Airbus. It covered a little more than one hundred thousand square feet and contained two production lines. The advertised target was two satellites a day.

The number mattered less than the sentence around it.

Two satellites a day.

A spacecraft, traditionally, was an object around which schedules bent. It might spend years moving from design to assembly to environmental testing. It might be built for fifteen years of service because replacing it meant buying another satellite, another launch, another long campaign of integration and review. The economics encouraged caution all the way down.

The OneWeb plant was organized around another idea. Engineers had built the first units in Toulouse, using the early run not only to qualify the spacecraft but to prove the production system that would make the rest of them. The Florida facility then copied and expanded that system. Airbus described production methods borrowed from serial aircraft manufacturing, defense electronics and the automotive industry. The company talked about minimizing part types. Aviation Week reported workstations designed around an eight-hour rhythm.

This was aerospace learning a word manufacturers had known for a century: flow.

The factory did not make space easy. It made repetition part of the design.

That distinction is central to what happened next in low Earth orbit.

For most of the twentieth-century space industry, reliability was concentrated in the individual spacecraft. This made sense. If a satellite represented years of engineering, a large capital investment and a scarce launch slot, failure could erase an enormous amount of work in seconds. A communications satellite intended for geostationary orbit might be designed to operate for fifteen years. Commercial operators depreciated expensive orbital assets over periods that could run well past a decade.

Every kilogram was argued over because the launch vehicle had limits.

Every component was scrutinized because repair was usually impossible.

Redundancy was not extravagance. It was insurance against a world in which replacement was slow.

This produced some of the most remarkable machines humans have ever built.

It also produced a particular philosophy of engineering: make the satellite survive.

A large constellation changes the sentence.

Make the **service** survive.

The difference sounds small until it reaches the factory floor.

A network built from hundreds or thousands of satellites does not require every node to become an heirloom. It requires enough functioning nodes, in the right orbital geometry, with enough capacity and maneuverability, to keep the network working. A failed spacecraft still matters. It consumes money, launch capacity and orbital management attention. But it need not become a national-level event.

Reliability moves upward.

The engineering problem is no longer only, *How do we prevent this satellite from failing?*

It becomes, *How do we keep the network healthy while individual satellites fail, age, improve and are replaced?*

This is not permission to build badly.

It is permission to optimize differently.

The first industrial constellation companies were not all making the same choices, and that matters. OneWeb's first-generation spacecraft were designed for an orbit around 1,200 kilometers, much higher than the operating altitudes of the first Starlink shells. Their orbital dynamics, disposal requirements, communications architecture and replacement economics were different. The point is not that one universal satellite factory model suddenly appeared.

The point is that multiple companies independently concluded that constellation economics demanded manufacturing economics.

SpaceX pushed the idea hardest.

The first sixty Starlink satellites launched in May 2019 had been built at a new SpaceX facility in Redmond, Washington. They were flat panels rather than the boxy, appendage-heavy form the public often imagined when hearing the word *satellite*. Each weighed about 227 kilograms. They carried phased-array antennas, a single solar array and krypton-fueled electric propulsion.

Their shape was not cosmetic.

Sixty of them had to fit together inside a Falcon 9 fairing.

The launch was limited by volume before it was limited by what the rocket could lift. SpaceX had designed a spacecraft that could be stacked in a dense batch and then released from the upper stage without the elaborate dispenser architecture common to many multi-satellite missions.

The launch vehicle and the satellite were beginning to look less like two products supplied by different industries and more like two sections of one logistics system.

By late 2019, trade reporting put Starlink production in Redmond at roughly seven satellites a day.

The exact number would rise, fall and change with satellite generations. The deeper shift was already visible. SpaceX was not waiting for a constellation design to freeze for a decade before beginning production. Manufacturing itself became part of development.

That is a dangerous sentence in aerospace if interpreted carelessly.

Factories are good at repeating things.

They are equally good at repeating mistakes.

A defect that affects one handcrafted spacecraft can destroy one spacecraft. A defect embedded in a fast production line can propagate across a fleet before anyone fully understands it. High-volume manufacturing therefore does not abolish testing, qualification or quality control. It changes their timing and their relationship to operations.

The constellation becomes a feedback system.

Telemetry returns from orbit.

Failures reveal weak points.

Software changes behavior on spacecraft already flying.

Manufacturing changes the hardware coming off the line.

The next launch carries the revision.

The network absorbs the transition.

The Federal Communications Commission offered an unusually revealing glimpse of this loop in a 2021 order reviewing Starlink's orbital plans. The record included early satellite failures and disposal performance. SpaceX told the commission it had identified causes of some failures, improved its manufacturing process and updated software on satellites already in orbit. The FCC noted that, by mid-February 2021, SpaceX reported 720 of its previous 723 satellites were maneuverable above injection altitude.

There is a lot inside that dry regulatory paragraph.

A satellite company had a factory correction process and an installed-base software correction process operating at the same time.

This is familiar in computing.

It was much less familiar as the organizing principle for a fleet of spacecraft.

Software changes the meaning of hardware when the hardware is numerous, connected and replaceable.

A traditional satellite can also receive software updates. Spacecraft have long been reprogrammed in orbit, and operators have recovered missions through ingenious remote work. The new element is not software itself. It is the cadence at which software, hardware and fleet composition can evolve together.

A constellation can contain several moments of its own history at once.

Older satellites remain in service.

Newer satellites carry revised radios, propulsion, antennas, processors or optical links.

Ground software learns to route around differences.

The user may experience one service even while the machinery providing it changes overhead.

This makes the satellite less like a finished monument and more like a server in a data center.

The analogy is imperfect, as all analogies involving orbital mechanics eventually are. A failed server can be reached by a technician. A failed satellite is moving several kilometers per second in vacuum. Launch is still a physical bottleneck. Radiation, thermal cycling, atomic oxygen, debris and atmospheric drag are not problems faced by ordinary racks of computers.

But the economic intuition transfers.

A cloud company does not require every server to last fifteen years. It requires the service to remain available while machines are installed, fail, age and are replaced.

A constellation can be engineered with the same shift in attention.

This is why shorter satellite lives can be rational rather than embarrassing.

Starlink told regulators that its satellites had a nominal mission lifetime of roughly five to seven years. In public securities correspondence in 2026, SpaceX described an accounting useful life of about five years for its broadband satellites and said spacecraft can often generate revenue beyond that point. The company also said it may retire satellites earlier as new generations arrive or as it manages degradation and collision-avoidance risk.

The important word is *generation*.

A fifteen-year spacecraft locks many design decisions into orbit for fifteen years.

A five-year replacement cycle allows the network to turn over much faster.

That does not make short life automatically virtuous. Every satellite launched has environmental and traffic-management consequences. Disposal has to work. Failed vehicles that cannot maneuver are not just private losses; they become risk imposed on other operators. Frequent replenishment also consumes launch capacity and puts more material through the upper atmosphere.

The industrial model creates obligations at the same speed it creates capability.

But from the point of view of competition, a shorter fleet-refresh cycle is formidable.

Imagine two networks.

One refreshes its major hardware once every fifteen years.

The other can introduce meaningful hardware revisions continually and replace much of its fleet within a handful of years.

Even if the slower network begins with better equipment, the faster one receives more opportunities to learn.

Manufacturing becomes a clock.

This is where vertical integration matters again.

A communications constellation is not actually a satellite business.

It is a terminal business, a network-operations business, a spectrum business, a ground-station business, a launch business, a software business and a satellite business that all have to agree with one another often enough to make an internet connection appear at a customer's location.

The satellite may be the most theatrical component. The customer terminal can be economically harder.

SpaceX discovered this early. Its first Starlink user terminals were expensive to manufacture. The company had to learn another form of high-volume production on the ground while the orbital factory was already accelerating.

This is easy to miss because launches attract cameras and factories rarely do.

A constellation can fail commercially while its satellites work perfectly.

OneWeb would prove that with painful clarity.

The company's factory was genuinely important. It demonstrated that a Western aerospace manufacturer could industrialize small-satellite production at a rate far beyond traditional communications-spacecraft practice. Airbus later said the joint venture built more than six hundred first-generation OneWeb satellites, and the manufacturing system became the basis for other small-satellite work.

Yet the factory did not repeal finance.

In March 2020, with seventy-four satellites already launched, OneWeb filed for Chapter 11 bankruptcy protection after efforts to secure additional funding collapsed amid the economic shock of the pandemic. The company later emerged under new ownership and resumed deployment.

The lesson was not that satellite mass production had failed.

It was that satellite mass production solved only one part of the constellation problem.

You still needed launch.

You still needed terminals.

You still needed spectrum.

You still needed ground infrastructure.

You still needed enough capital to survive the years before the network produced reliable cash.

And eventually you needed customers willing to pay.

SpaceX's advantage was that several of those problems sat inside the same corporate boundary.

The rocket carried the satellites.

The satellite program created launch demand.

The launch program improved through repetition.

The constellation created a reason to increase launch cadence.

The company designed the spacecraft around the dimensions and performance of its own rocket, then revised both sides of the interface as it learned.

Vertical integration did not mean SpaceX manufactured every atom or every semiconductor itself. No serious industrial company is vertically integrated in that literal sense. It meant the company controlled enough of the critical interfaces that decisions which would have required negotiation among firms could often become internal engineering decisions.

That reduces more than cost.

It reduces waiting.

A supplier contract can be renegotiated.

A production line can be changed.

A payload can be redesigned around a launcher.

A launch manifest can be rearranged around an internal payload.

Software can be updated while the next hardware revision is already moving through production.

Time gets taken out of the joints.

By 2026, SpaceX's public securities materials described a Starlink manufacturing operation in Redmond averaging roughly seventy satellites per week over a five-month period. The same materials said the site was producing bus structures, phased-array antennas, propulsion systems, solar arrays and inter-satellite laser hardware.

That figure belongs to a later generation of Starlink than the seven-per-day line reported in 2019, so the two numbers should not be treated as a simple factory productivity chart. The satellites changed. Their mass, capability, configuration and launch system changed. Production was not one frozen line getting faster forever.

That is precisely the point.

The factory itself became a changing machine.

Space manufacturing had traditionally treated design and production as phases: first decide what the spacecraft is, then build copies.

Constellation manufacturing weakens that boundary.

Production experience changes design.

Design changes production.

Operational data changes both.

The fleet becomes the record of those revisions.

Walk backward through a constellation and you are walking through versions.

The same pattern transformed automobiles when model years gave way to faster electronics cycles. It transformed phones when software updates and annual hardware releases replaced the expectation that a device category would remain technically stable for long periods. It transformed data centers when operators stopped treating each computer as a durable capital object and began managing fleets through automation.

Orbit adds harsher physics and higher consequences, but the organizational motion is recognizable.

Aerospace is becoming less allergic to iteration.

That brings gains.

It also brings new failure modes.

When a company can launch thousands of satellites, a bad assumption can scale quickly.

When hardware generations turn over rapidly, regulators and astronomers may struggle to evaluate changes at the speed they arrive.

When a network depends on constant replenishment, launch continuity becomes part of service continuity.

When vertically integrated firms control the factory, rocket, network and customer relationship, competitors may find that the unit they are competing against is not a product at all.

It is an industrial loop.

This is why the factory matters more than the individual satellite coming off the line.

The satellite is inventory.

The network is the machine.

The launch system is the conveyor belt that reaches orbit.

Once those three ideas coexist, an old dream becomes economically plausible in a new way: surround Earth with enough low-orbiting communications satellites that a user almost anywhere can see one.

The dream was not new.

Its failures were not obscure.

Before Starlink, other companies had already discovered that a technically functioning constellation could become a financial disaster on the ground.

The next question, then, is not how to manufacture hundreds of satellites.

By 2019, the industry had shown it could.

The harder question is why anyone thought putting hundreds of them in orbit would make money.

That story begins with a bankruptcy.
