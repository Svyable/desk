# The Transistor Has a Door

For sixty years, the story of computing has been told as a story of smaller transistors.

That story is true and incomplete.

A transistor is useful only if current can enter and leave it. As channels shrink toward a few nanometers and new semiconductor materials become atomically thin, the contacts that inject carriers can consume an increasing share of device resistance, area, variability, and design effort.

The road into the transistor becomes as important as the road through it.

Metal-semiconductor contact sounds easy because metals conduct and semiconductors conduct under the right conditions. Put them together and current should cross.

At the interface, band alignment, work functions, interface states, chemical reactions, doping, defects, geometry, and quantum effects complicate the crossing. A Schottky barrier can impede carriers. Fermi-level pinning can make the barrier less responsive to the metal choice than simple textbook models suggest. Contact resistance wastes voltage and power.

The door is not open just because two conductive materials touch.

Semiconductor engineers have spent decades creating low-resistance ohmic contacts through doping, silicides, annealing, interface preparation, and carefully chosen materials. NIST was developing improved methods for measuring specific contact resistivity in metal-semiconductor contacts in the 1980s because the measurement itself becomes difficult when contact resistance is small and current spreads in complex ways.

What looks like a parasitic detail became a metrology field.

As silicon technology scaled, source and drain regions became shallower and contact dimensions smaller. Engineers could not simply increase contact area indefinitely because area was the resource being compressed. Current crowding and transfer length meant shrinking contact length could raise effective resistance.

The interface inherited Moore's law.

Two-dimensional semiconductors make the problem even sharper. Materials such as molybdenum disulfide and tungsten diselenide can form channels only one or a few atomic layers thick. Their thinness offers attractive electrostatic control for future transistor scaling. It also makes conventional heavily doped three-dimensional contact regions difficult to reproduce.

The channel is almost all surface.

Recent reviews of 2D transistor technology repeatedly identify contact engineering as a central bottleneck. A 2026 Nature Reviews Electrical Engineering article on p-type 2D transistors described contact engineering as the primary bottleneck for reaching CMOS-grade integration, even as record contact resistances improved dramatically.

The frontier transistor is waiting at the door.

This is a perfect example of bottleneck migration. When channels were large and slow, channel performance dominated. Improve channels, shrink dimensions, and contacts consume more of the voltage and space budget. A resistance that once looked negligible becomes a limiting fraction of total resistance.

Progress promotes parasitics.

The same happens in wiring. As interconnects shrink, resistance and capacitance matter more. At the package level, power delivery becomes harder. At the system level, thermal interfaces limit density. Every layer of computing eventually runs into a contact whose relative importance increased because everything else improved.

There is no final bottleneck.

There is a moving frontier of boundaries.

Two-dimensional materials create fascinating contact strategies. Researchers explore phase engineering, heavy local doping, semimetal contacts, van der Waals contacts, edge contacts, and ways to control interface damage and Fermi-level pinning. Some approaches attempt to avoid conventional chemical bonding damage by stacking materials through van der Waals interactions.

A cleaner touch can outperform a stronger one.

This is the opposite of our naive mechanical instinct that better contact means more intimate bonding. At atomic scale, bonding can create interface states that degrade electronic behavior. A gently assembled van der Waals interface can preserve the semiconductor's structure better.

Contact quality depends on what is allowed to mix.

Semiconductor fabrication is therefore obsessed with contamination. A few unwanted atoms at an interface can shift electrical behavior. Native oxides may need to be removed or deliberately grown. Residues from lithography matter. Plasma damage matters. Annealing changes phases. Diffusion changes composition.

The interface is made by a sequence, not by a material list.

This makes process integration a form of choreography. Deposit this layer. Pattern that region. Clean without damaging. Anneal at a temperature compatible with everything already built. Keep contamination below a threshold. Align features within nanometers.

A contact is the memory of the process flow.

Later steps can damage earlier interfaces. High temperature can cause diffusion. Etching can roughen a surface. Mechanical stress can crack low-k dielectrics. Packaging can warp a die. The transistor designer cannot optimize one junction without respecting the manufacturing future around it.

The boundary has a thermal budget and a political budget inside the process.

Every new material must negotiate with the fab.

This is why laboratory record devices do not automatically become commercial technologies. A researcher can make one exceptional contact with a process that is slow, exotic, incompatible with contamination controls, or difficult to scale. Manufacturing requires billions of contacts with narrow distributions across wafers and lots.

The average is not enough.

A chip fails if rare contacts fall outside tolerance.

Yield is contact statistics multiplied by population.

This resembles connectors and bearings at a more extreme scale. A data center contains millions of connector contacts; a chip contains billions of transistor contacts. If every interface has an independent tiny probability of catastrophic defect, scale becomes merciless.

Manufacturing therefore spends enormous effort on defect density.

A clean room is not sterile theater. It is an economic machine for keeping rare interface failures below the level where yield collapses.

The relationship between contact size and resistance also reveals a deeper scaling problem. Shrinking a conductor usually increases resistance because there is less cross-sectional area. Shrinking a transistor aims to make it faster and denser. At some point, the wiring and contacts resist the very scaling that benefits the channel.

Miniaturization fights itself at the boundary.

This is why the semiconductor industry increasingly pursues three-dimensional architectures: FinFETs, gate-all-around nanosheets, backside power delivery, 3D stacking, chiplets, and advanced packaging. Each solves one geometry problem and creates new interfaces.

Three-dimensional integration multiplies doors between layers.

Chiplets are especially illustrative. Instead of building an enormous monolithic die, designers can combine specialized dies in one package. This can improve yield, mix process technologies, and shorten development. But dies must communicate through dense interconnects. Power and heat must cross package boundaries. Mechanical warpage matters. Thermal expansion mismatches matter.

Modularity returns as an interface tax.

The tax is worth paying because the alternative can be worse. A monolithic chip large enough to contain everything may have poor yield or force all functions onto one expensive process. Chiplets let each function use an appropriate node and then pay for integration.

The future of computing is partly a market in boundaries.

Standards such as die-to-die interfaces attempt to make those boundaries interoperable. Packaging companies compete on bonding density and thermal performance. Foundries develop hybrid bonding and through-silicon vias. System designers think about placement across dies.

The contact moves from a materials problem to an ecosystem problem without ceasing to be a materials problem.

This layering is characteristic of mature technology. A USB connector is physical contact plus electrical protocol plus mechanical standard plus supply chain. A chiplet interface is bonding plus signaling plus protocol plus thermal architecture plus intellectual-property agreements.

Physical continuity becomes institutional compatibility.

We should not reduce standards to contact physics, but neither should we forget that the standard eventually has to materialize in copper and dielectric.

Every abstraction lands on an interface.

The transistor contact also makes quantum mechanics operational. At nanometer scales, carrier injection cannot always be explained with classical pictures of particles crossing barriers. Tunneling, quantum conductance, density of states, and wavefunction overlap become design concerns.

The edge of the object becomes where quantum theory earns revenue.

This is one of the quietest marvels of modern life. Billions of microscopic junctions in a phone operate because engineers manipulate band structures and interfaces with atomic-scale precision. Consumers experience the result as a smooth animation.

A seamless interface is built from engineered interfaces.

There is an important counterexample to the claim that contact always gets more important as systems shrink. Some integration strategies deliberately eliminate contacts by making structures monolithic. Silicon-on-insulator, epitaxial growth, and advanced interconnect techniques can reduce certain boundaries. Wireless communication removes physical connectors at the user level.

But eliminated contacts reappear elsewhere.

Wireless devices need antennas, batteries, power electronics, package interconnects, and thermal paths. Monolithic structures still end at their environment. A chip still needs to be powered and cooled.

Contact can be displaced, not abolished.

This displacement explains why consumer devices appear to lose ports. Removing a headphone jack removes one mechanical connector and moves audio across Bluetooth radios or digital ports. The user sees fewer holes. The system contains more radio-frequency components, antennas, battery use, software protocols, and charging dependency.

Convenience is boundary relocation.

The same phenomenon will shape robotics. Wireless sensors reduce cable contacts but require local power. Soft electronics eliminate rigid joints but create stretchable conductor interfaces. Implantable devices can use wireless power to avoid transcutaneous wires but must manage electromagnetic coupling and tissue heating.

The question is never whether to have interfaces.

It is which interfaces are easiest to make reliable.

Semiconductor contact engineering has become so specialized that it can seem far removed from tires and skin. Yet the pattern remains recognizable.

The nominal area is not enough. Surface cleanliness matters. Intermediate layers matter. Pressure and geometry matter in some assembly contexts. Heat crosses alongside current. Process history writes the interface. Rare defects become important at scale. Better bulk materials reveal contact limits.

The transistor is not an exception to the book.

It is the book at a smaller scale.

The world has spent six decades shrinking the machine that processes information.

At the frontier, progress is waiting on a contact only atoms thick.