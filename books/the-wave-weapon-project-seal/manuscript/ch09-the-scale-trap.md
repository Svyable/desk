# The Scale Trap

The most dangerous sentence in experimental engineering is *it worked at small scale*.

It is dangerous because sometimes that sentence is the beginning of everything.

Wind tunnels work. Ship models work. Hydraulic flumes work. Structural models work. The history of engineering is full of small things that predicted large things well enough to build bridges, aircraft, dams, turbines, ports, and ships. Dismissing a model because it is small is not sophistication. It is ignorance of how engineering learns.

The real question is what has been preserved while the size changed.

Project Seal’s fate sits inside that question.

A wave experiment at Whangaparāoa can measure how one explosive charge interacts with a free surface. A scaled basin can explore how waves shoal toward a model beach. A line of small charges can test interference. The team can adjust depth and spacing until the effect is repeatable. These are legitimate experiments.

Then somebody has to write the sentence that turns them into a weapon.

At full scale, we expect—

Everything after that dash is where the argument can break.

Scale is not one number. Length changes. Time changes. Velocity changes. Pressure changes. Surface tension becomes more or less important. Viscosity changes relative to inertia. Bubble dynamics change with ambient pressure and charge size. The roughness of a model seabed may represent boulders at full scale or sand, depending on the ratio chosen. The explosive itself may not scale neatly because detonation products, charge shape, and confinement interact with the surrounding water.

Hydraulic engineers handle this by identifying governing dimensionless ratios.

For many gravity-driven free-surface flows, Froude similarity is central. If the ratio of inertia to gravity is preserved, a model can reproduce important aspects of wave propagation and run-up. Time then scales with the square root of length. A smaller model runs faster. Velocities scale accordingly.

But one model cannot generally preserve both Froude and Reynolds similarity unless the fluid properties are also changed. Reynolds number captures the relation between inertial and viscous effects. Surface tension introduces Weber number. Compressibility and shock phenomena bring Mach-like relationships and entirely different regimes.

An ordinary harbor model can often ignore some of these conflicts because the problem of interest is dominated by gravity waves after the source has been specified.

Project Seal had to model the source too.

That is the trap.

The explosive generates the initial condition through physics that does not necessarily scale the same way as the later water wave. A model can get the wave tank right while getting the explosion wrong, or get the near-source blast right while distorting the far-field wave.

One solution is to separate the problems. Measure the explosive source empirically, then use that measured displacement as the input to a larger-scale wave model. Another is to derive a source relation and scale it. The final Project Seal report should show which strategy Leech used and where his assumptions entered.

This is not technical nitpicking. The difference can decide whether two million kilograms of explosive is a serious estimate or an artifact of scaling.

The project’s most famous extrapolations therefore deserve to be reconstructed line by line.

What model length scale was used?

What prototype coast did it represent?

How was explosive mass scaled?

Were charge dimensions scaled geometrically?

Was the desired wave amplitude scaled by Froude similitude?

How were bottom friction and breaking treated?

Did the model assume linear addition of waves from charges?

What happened near shore?

Was run-up measured directly or inferred?

What uncertainty did Leech assign?

Without those details, the phrase “tests showed a ten-meter wave could be produced” is nearly meaningless.

A scaled model does not “show” a prototype wave in the same way a full-scale coast does. It supports an inference under a similarity model.

That is still valuable.

The point is not to shame the inference. The point is to expose its structure.

One of the great cultural confusions around technology is treating scale-up as manufacturing. A laboratory process works; therefore engineers merely need to make more of it. Sometimes that is true. Often the underlying process changes as soon as dimensions, throughput, heat transfer, contamination, tolerances, or geometry shift.

Chemical plants are not large beakers.

Power reactors are not large critical assemblies.

Cities are not large buildings.

Tsunami are not large splashes.

That last distinction is Project Seal’s whole problem in six words.

A splash is dominated by local violence. A destructive tsunami is dominated by the movement of a very large water mass across a broad source and its interaction with coastline. Making the splash larger can eventually make a very large local wave, but the scaling path is not simply visual.

This is why nuclear underwater explosions are such an important later control. Nuclear weapons made it possible to test compact underwater sources with yields vastly larger than Project Seal’s conventional charges. If “more energy” alone solved the wave weapon, the nuclear tests should have made the case overwhelming.

They did not produce a revolution in tsunami warfare.

That historical outcome is suggestive but not sufficient. There are strategic, radiological, legal, and delivery reasons a nuclear wave weapon might be unattractive even if physically possible. We need the technical literature to understand what the tests showed.

William Van Dorn and colleagues later examined precisely this territory. Their work on explosion-generated water waves, eventually summarized in the 1968 handbook, used theory and experimental data to investigate generation and propagation. Later researchers revisiting impact tsunami have cited this literature because an asteroid impact and a compact explosion share an important problem: a highly energetic localized source must couple into long ocean waves.

The Van Dorn literature is where Project Seal’s scaling assumptions can meet a more mature field.

One result often associated with this tradition is that large explosion- or impact-generated waves may break offshore and dissipate substantially before reaching land, although later authors have refined how bottom damping and breaking interact. The details matter; “waves break, weapon fails” is too simple. But the existence of such propagation limits reinforces the larger point: increasing source amplitude does not guarantee proportional shoreline amplitude.

The ocean edits the wave on the way in.

Project Seal could optimize generation and still lose at propagation.

This gives the scale trap two stages.

First: does the source scale?

Second: does the wave survive the scale?

The second stage is less intuitive. A model beach may turn a modest wave into dramatic run-up because its geometry happens to focus the energy. A different full-scale continental shelf may cause breaking, dispersion, reflection, or dissipation. Very long earthquake tsunami can cross oceans with relatively little loss because their wavelengths are enormous and their amplitudes in deep water are modest. A shorter, steeper explosion-generated wave may behave differently.

Wave period becomes as important as wave height.

This is one of the most useful corrections modern science can make to the Project Seal legend. The public image of tsunami is a tall crest. The geophysicist cares about period and wavelength because they describe how much water is moving and how it will interact with depth.

A one-meter wave with a period of fifteen seconds is a different physical object from a one-meter tsunami with a period of twenty minutes.

They may have the same height at a point and radically different power to flood land.

Project Seal’s report needs to be mined for period data, not just amplitude.

If the team focused heavily on crest height without adequately capturing wavelength and water-volume transport, that would weaken the weapon inference.

If they explicitly modeled long-period waves and source length, that would strengthen the technical sophistication of the work even if practicality still failed.

Either outcome is more interesting than the headline.

Scale also changes error.

Suppose a model array is one hundred meters long and charge positions are accurate to ten centimeters. The relative placement error is one part in a thousand. A geometrically scaled ten-kilometer prototype would require placement accuracy of ten meters to preserve that ratio. That may be easy. But if timing must scale differently, or depth varies across the real seabed, relative error can grow. The model’s flat bottom may become a prototype contour map.

Operational noise enters precisely where the laboratory was quiet.

The same issue applies to explosive yield. Manufacturing variation among small conventional charges may be tiny. A full system using thousands of tonnes introduces storage, handling, deterioration, detonation-chain reliability, and synchronization problems. The engineering margin has to absorb them.

This is why robust systems are often deliberately designed away from peak theoretical performance.

If the optimum depth is razor-thin, an operational designer may choose a less efficient depth with wider tolerance. If a tightly phased sequence yields the best wave but simultaneous firing is more reliable, reliability may win. Every such choice reduces the idealized effect used in the original extrapolation.

The full-scale weapon is therefore often worse than the model’s best case even when the model is correct.

There is another kind of scaling that has nothing to do with physics: institutional scale.

A test unit can improvise. A deployable weapon needs doctrine, transport, training, maintenance, safety, command authority, intelligence support, target planning, and production. The transition from one experimental site to multiple operational units can kill systems that function beautifully in demonstration.

Project Seal’s proposed weapon, because it depended on local geography, would require unusually deep integration with intelligence and hydrography. Every target package might need custom bathymetric analysis. Tidal predictions and shoreline elevation would matter. If the system required pre-survey, that survey itself could expose intent.

The weapon scales organizationally as badly as it scales spatially.

Again, this is not proof it could never be used. Special operations tolerate custom planning. But the mission category narrows further.

A weapon that needs bespoke oceanographic design belongs to a small family of targets.

The scale trap is therefore not one fatal equation. It is accumulation.

Each experimental success answers a narrow question and reveals a broader one.

Can a submerged charge make a wave? Yes.

Can depth optimize it? Yes.

Can multiple charges shape the source? Probably, under controlled conditions.

Can the model be extrapolated? Under specified similarity assumptions.

Can a full array be emplaced? Perhaps, at enormous logistical cost.

Can the resulting wave survive to the target? Depends on the spectrum and bathymetry.

Can the coast amplify it? Depends on the coast.

Is the damage worth the explosive? Depends on alternatives.

The original miracle dissolves into conditional statements.

That dissolution is what science is supposed to do.

It is also why abandoned technologies are often more fascinating than successful ones. Success hides the chain by making the final object familiar. Nobody riding an airliner thinks about each failed aerodynamic assumption that had to be removed. Failed systems leave the assumptions exposed.

Project Seal lets us watch the transition from “the sea can amplify a blast” to “the attacker must engineer almost every condition of the amplification.”

The project did not discover that nature was unwilling.

It discovered that nature charged retail.

The same realization appears in other grand environmental weapons. Weather modification can exploit a cloud already near a precipitation threshold, but it cannot cheaply create the whole weather system from nothing. Avalanche control can release an unstable slope, but it cannot summon a mountain of snow. Dam attacks exploit stored water, but the dam had to be built first.

The great leverage systems are triggers.

Project Seal was closer to a generator.

That is a harder business.

The scale trap finally becomes visible when the line of charges meets the actual shore. A model can be scaled. A coastline cannot be generalized away.

The coast is not where the wave ends.

It is part of the weapon.