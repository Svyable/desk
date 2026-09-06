# The Message That Broke Itself Apart

The internet’s first message was supposed to be a word.

It became two letters.

On October 29, 1969, a student programmer at UCLA tried to send “LOGIN” to a computer at the Stanford Research Institute over the new ARPANET. The receiving system got the L and the O.

Then it crashed.

“LO” is now remembered as a charming accidental first message, a technological greeting created by failure. The romance is harmless as long as we do not confuse the anecdote with the invention.

The important idea had appeared earlier.

Break the message apart.

Packet switching wins the 1960s because it changed a communications network from a dedicated path into a shared computational system.

The telephone network inherited a circuit-switched logic. To make a call, the system establishes a path between endpoints and reserves network resources for the duration of the connection. That architecture makes intuitive sense for continuous voice. Two people converse; a circuit connects them.

Computers behave differently.

They transmit in bursts. One machine may send a block of data, pause, compute, then send another. Reserving a dedicated end-to-end circuit during silence wastes capacity. More importantly, a digital research network would need to connect machines with different characteristics, tolerate failure, and share expensive communications links among many users.

Packet switching proposed a different logic.

Divide data into smaller units.

Attach addressing and control information.

Let the network move those packets through shared links.

Reassemble the result at the destination.

A message no longer needed one continuous reserved road.

It could become traffic.

That conceptual change is so deeply embedded in modern life that it now feels like nature. Emails, web pages, video streams, file transfers, cloud requests, messages, financial transactions, game data, and AI queries all ride networks whose underlying operations users almost never see.

The application feels continuous.

The network is handling pieces.

Several people reached versions of packet-switching ideas independently. At RAND Corporation in the early 1960s, Paul Baran studied how a communications system might survive severe disruption. His proposed distributed network would divide messages into blocks and route them through a mesh, avoiding dependence on a few vulnerable centralized switching points.

Across the Atlantic, Donald Davies at Britain’s National Physical Laboratory developed a related approach and coined the term “packet.” His work focused strongly on sharing computer communications resources efficiently. Leonard Kleinrock’s research on queuing theory helped provide mathematical foundations for analyzing data networks.

No single country owns the packet.

That is fitting because the invention’s purpose was interoperability.

The American story becomes decisive when the Advanced Research Projects Agency funded a network that put the ideas into operation.

ARPA, later DARPA, had been created after the Soviet launch of Sputnik to support high-risk research relevant to national technological capability. By the 1960s, the agency funded computing work at universities and research institutions across the United States. Those sites had expensive computers built by different manufacturers.

The network problem was partly administrative.

Researchers wanted access to remote resources.

ARPA wanted its investments to connect.

A network could make one institution’s specialized computer useful to another institution without physically moving people or machines.

This origin is less dramatic than the legend that the internet was designed primarily to survive nuclear war. Baran’s survivable-network research belongs to the intellectual background, but ARPANET’s immediate project goals involved resource sharing and interactive computing among research sites. The nuclear-survival story compresses multiple programs into one clean motive.

The truth is more interesting.

A communications architecture useful for resilience was also useful for efficiency.

The same distributed features that reduce vulnerability can improve sharing.

Robustness and utilization can point toward similar designs for different reasons.

That is a recurring systems lesson.

The first ARPANET node was installed at UCLA in 1969. The Stanford Research Institute became the second. UC Santa Barbara and the University of Utah followed, giving the network four nodes by the end of the year. Specialized computers called Interface Message Processors—IMPs—handled packet communication between host computers.

The network separated local computing from network transport.

That separation is one of the most important architectural decisions in the history of information technology.

A computer did not need to understand every physical detail of the communications system. It communicated with an interface machine that handled network functions. Over time, networking would become layered more formally, allowing hardware, routing, transport, and applications to evolve somewhat independently.

Abstraction made the network extensible.

The same principle appeared in electrical power. An appliance does not need to know which generator produced the electricity.

A web browser does not need to know which fiber route carried the packets.

A cloud application does not need to know which exact transistor switched each bit.

Complex systems scale by hiding layers behind interfaces.

Packet switching became one such hidden layer.

The invention also changed the economics of communication. Dedicated circuits make intuitive sense when usage is continuous and predictable. Shared packet networks exploit statistical multiplexing: many users can share capacity because they are not all transmitting at maximum rate simultaneously.

Unused moments become available to someone else.

This is the Evans automated-mill lesson translated into information infrastructure.

Do not waste the space between operations.

Keep the flow moving.

Shared infrastructure can achieve higher utilization than isolated infrastructure.

Cloud computing later applies a similar logic to servers. Instead of every organization running underused machines for peak demand, shared data centers pool resources among customers. Ridesharing, coworking, and other businesses invoke related economics, though with different tradeoffs.

Pooling can reduce waste.

It can also create concentration.

The early packet network was decentralized in routing logic compared with traditional centralized systems, but the modern internet still contains powerful chokepoints: backbone providers, cloud platforms, content-delivery networks, domain infrastructure, app stores, search engines, social platforms, submarine cables, data centers, and major network exchanges.

Decentralized architecture does not guarantee decentralized power.

That distinction is essential to the internet’s history.

The protocol can allow many endpoints.

Economics can still concentrate traffic, users, and control.

The same contradiction appeared with the telephone. A network makes individual connection easier while increasing the value of whoever controls coordination.

Packet switching did not solve the political economy of networks.

It made a much larger network technically possible.

The 1960s had brutal competition for the decade title. The laser, demonstrated in 1960, became fundamental to communications, manufacturing, medicine, measurement, and consumer electronics. The MOSFET, developed at Bell Labs in 1959 and advanced through the 1960s, became the dominant transistor structure underlying modern integrated circuits. The first successful heart transplant occurred in 1967 in South Africa. Satellites transformed communications and observation. Apollo took humans to the Moon in 1969.

The Moon landing may be the most extraordinary technological achievement of the decade.

It does not win because it was a destination more than a reusable general-purpose invention.

Apollo integrated thousands of technologies, advanced computing and materials, and demonstrated state capacity at enormous scale. Its spinoffs and institutional effects mattered. But society did not reorganize ordinary life around human lunar travel.

It reorganized ordinary life around networks descended from packet switching.

The laser is harder to beat. Fiber-optic communications, barcode scanners, optical storage, surgery, manufacturing, scientific instruments, and countless devices depend on it.

The packet wins because it became the transport mechanism for nearly all digital interaction.

The difference is breadth of social coordination.

A laser can cut material or carry data.

Packet networking organizes the exchange of the data itself.

The invention also changed failure.

In a circuit-switched world, a broken path can terminate the connection. In a packet network with alternative routes, traffic can potentially move around failures. This does not make the network indestructible. Routing errors, software bugs, power failures, cable cuts, cyberattacks, configuration mistakes, and concentrated services can still produce enormous outages.

But resilience becomes an architectural property rather than purely a component property.

The elevator brake assumed the rope could fail.

Packet switching assumes a route may not remain sacred.

Find another.

This is fault tolerance at network scale.

Modern distributed systems take the principle much further. Data can be replicated across machines and regions. Services can fail over. Packets can be retransmitted. Multiple paths can exist. Systems monitor health and reroute traffic.

The promise is not that nothing breaks.

It is that breaking one thing does not necessarily break everything.

That is one of the most consequential ideas in engineering.

It is also one of the hardest promises to keep as systems grow tightly coupled.

The modern internet is more resilient than a simple point-to-point network and more vulnerable in surprising ways because billions of users depend on shared services. A software error at one cloud provider can affect thousands of businesses. A routing mistake can redirect traffic globally. A single damaged undersea cable may be survivable while a platform outage makes the network feel broken to millions of people because that platform has become their practical internet.

Architecture can distribute failure while markets reconcentrate consequence.

The packet did not foresee this.

It enabled the scale at which the contradiction became visible.

The culture around ARPA computing also mattered. Researchers such as J. C. R. Licklider had imagined interactive computing and networks as environments for human collaboration rather than mere remote batch processing. His vision of an “intergalactic computer network” is often quoted because it sounds prophetic, but the important shift was less poetic: computers were becoming communication media.

That was not obvious.

Early computers were calculators and data processors. Networking turned them into places where people could exchange messages, share files, access remote resources, and eventually build communities.

The machine for computation became a machine for society.

Email demonstrated this sooner than many planners expected. Electronic mail emerged on ARPANET in the early 1970s and quickly became one of its most popular uses. Researchers built a network partly to share computers and discovered they valued sharing words with one another.

Users invent the killer application after the infrastructure exists.

This is one of technology’s most reliable humiliations for planners.

The people who fund a platform imagine one use.

Users find another.

The telephone was expected to serve business and practical coordination; it became social life.

Text messaging was initially a secondary cellular feature; users turned it into a dominant communication form.

Twitter’s users invented conventions such as hashtags and retweets before the platform formalized them.

Generative AI systems designed as conversational models became coding tools, tutors, search interfaces, drafting partners, and agent platforms through user pressure.

Infrastructure creates option value no specification document can enumerate.

Packet switching is perhaps the century’s greatest option-value invention.

It does not specify what the packet means.

A packet can contain text, voice, image, software, money instructions, telemetry, game state, video, scientific data, or malicious code.

The network is largely indifferent to semantics.

This neutrality enabled extraordinary innovation at the endpoints because new applications could be built without redesigning the physical network for each media type.

That principle later became associated with end-to-end internet architecture.

A general network carrying agnostic packets became more innovative than specialized networks optimized for one service.

The telephone network had been built around voice and later adapted to data.

The internet was built around data abstraction and eventually swallowed voice.

The general system ate the specialized system.

This is another recurring technological pattern.

General-purpose platforms often look inefficient at first because they do not optimize one task as tightly as dedicated systems. Then scale, software, and innovation improve them until their flexibility overwhelms the specialized alternative.

Personal computers did this to dedicated word processors and calculators.

Smartphones did it to cameras, GPS units, music players, flashlights, and countless other devices.

Generative AI may do something similar to specialized software interfaces if general models become reliable enough to coordinate tasks across applications.

Generality is expensive until it becomes abundant.

Packet networking received its abundance from semiconductor progress.

Routers and computers became more capable as integrated circuits improved. Transmission links became faster. Fiber optics increased capacity. Memory became cheaper. The network expanded.

Again the decade winners compose.

No internet without transistors.

No scalable packet network without integrated electronics.

No Web without packet network.

No smartphone without Web and wireless packet data.

No cloud-scale AI without global networks moving data among users and data centers.

The history is becoming less a sequence than a stack.

The public funding model shaped the stack. ARPA could pay universities to connect before a consumer business case existed. Researchers could experiment with protocols in an environment where the value was scientific and strategic as well as commercial.

This created space for openness.

Standards and protocols could circulate among institutions. The eventual TCP/IP architecture developed in the 1970s under Vint Cerf, Bob Kahn, and others, allowing multiple networks to interconnect. On January 1, 1983, ARPANET’s transition to TCP/IP became a milestone in the internet’s evolution.

That event belongs later than this chapter, but the conceptual move begins here.

A network is useful.

A network of networks is transformative.

Interoperability turns local infrastructure into a platform.

This is why standards can be more important than products. A proprietary network can be excellent and remain bounded. A common protocol lets strangers build compatible systems without asking one company for permission.

The Web will later amplify this with open standards for documents and links.

The internet’s greatest commercial asset may have been the absence of a single commercial owner at its core.

That openness did not prevent companies from building enormous proprietary empires on top.

It created the arena in which they could compete.

The counterfactual is strong and international. If ARPANET had never existed, packet switching still had Donald Davies’s work in Britain and other research. If Baran had never written his distributed-network studies, data communication would still have faced the inefficiency of dedicated circuits. Computer networks were emerging in multiple forms.

But timing matters.

ARPA created a live environment in which theory, hardware, protocols, users, and institutions could collide. The network became a place where networking itself could be invented.

That recursive property is powerful.

A better airplane can be tested in flight.

A better network protocol can be tested on the network that distributes the knowledge and software for building the next protocol.

The internet accelerates invention about itself.

Software can spread through software infrastructure.

Standards can be discussed over the network they standardize.

The system becomes its own development environment.

That self-acceleration will become a defining feature of digital technology.

The first attempted ARPANET login failed after two letters.

The story is memorable because failure humanizes a monumental system.

The deeper fact is more important.

Those two letters did not travel as a dedicated private circuit representing a single conversation.

They entered a new kind of shared network whose descendants would eventually carry much of civilization’s information.

The message broke itself apart so the world could connect.