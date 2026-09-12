# Heat That Doesn't Need Charging

Plutonium-238 is radioactive in a way that makes it both useful and awkward for an implanted power source.

The isotope is not the plutonium isotope most people mean when they talk about nuclear weapons. Pu-239 is central to weapons and reactor fuel discussions. Pu-238 is prized as a heat source because it decays rapidly enough, on nuclear timescales, to produce substantial heat per unit mass and slowly enough, on human timescales, to remain useful for decades. The U.S. Nuclear Regulatory Commission still lists heart pacemakers among the historical uses of Pu-238, beside the much more familiar application in spacecraft power systems.

The word nuclear invites the wrong mental picture. The pacemaker is not a reactor. There is no chain reaction that must be controlled. The Pu-238 source simply decays. Alpha particles carry energy away from each nuclear transformation, and in a properly contained source that energy becomes heat. A thermoelectric converter exploits a temperature difference to produce voltage. The device is therefore closer in principle to a tiny radioisotope thermoelectric generator than to a miniature power plant.

This distinction does not neutralize the hazard. Pu-238 is intensely radioactive by mass. Alpha particles are easily stopped by material and do not travel far through tissue, but plutonium is hazardous if it escapes containment and enters the body. The engineering problem was therefore almost inverted from ordinary battery design. Designers wanted the decay energy to leave as heat while the radioactive material itself never left at all.

That is why source encapsulation became the center of the safety case. A pacemaker could not be approved merely because it worked on the bench or because the expected patient dose was small. It had to survive ugly events. Technical reports and clinical papers describe tests involving mechanical shock, crushing, corrosion, fire and cremation conditions. A 1975 report on a small Pu-238 pacer described compliance with U.S. and foreign Atomic Energy Commission safety specifications including accidental crush, industrial fire, impact, corrosion and cremation. The device had a calculated life beyond twenty years.

The extremity of those tests is not theatrical. An implant lives inside a person, but the source's life does not necessarily end when the person does. Bodies are transported, autopsied, buried and cremated. Pacemakers are removed. Sometimes they are missed. A radioactive heat source that is safe under skin can become an environmental or occupational problem if it enters a cremation furnace, metal recycling stream or ordinary waste system.

The source therefore had to be designed against events that would never occur during intended clinical use. This is a recurring theme in technologies whose hazardous component outlives the service context. The likely accident is not always the spectacular mechanical failure imagined by the design team. It may be a records failure. Someone at a hospital does not know the deceased patient carried a nuclear pacemaker. A funeral home removes a device and returns it to the wrong institution. A package is sent through ordinary channels and disappears. The titanium can be stronger than the paperwork.

The physics sets another unusual timescale. With a half-life around 87.7 years, Pu-238 loses only a modest fraction of its heat output over a normal pacemaker service interval. The Department of Energy gives a specific thermal power near 0.56 watts per gram for Pu-238. The important historical engineering number, however, is not that heat density by itself. It is what the early pacemaker could turn into electricity.

An AEC-era description of the NUMEC development program gives a reference design producing about **135 milliwatts of isotopic heat**. A thermopile of 1,056 thermocouples was expected to deliver about **162 microwatts of electrical power** to the pacing electronics. That is only about **0.12 percent** conversion from decay heat to useful electricity.

The ratio is more revealing than either number alone.

The pacemaker did not need much electrical power. It needed tiny, dependable pulses for years. The isotope could therefore be energetically extravagant: throw away essentially all of the heat and still have enough electricity to run the circuit. A spacecraft engineer usually worries about squeezing electrical watts from a scarce heat inventory. The pacemaker engineer could afford terrible conversion efficiency because the load lived in the microwatt regime.

Radioactive decay then changes that budget slowly and predictably. Using the 87.7-year half-life, the heat source retains roughly **92 percent of its initial output after ten years**, **85 percent after twenty**, and **76 percent after thirty-four**. Those percentages are not a complete generator-life calculation—thermocouples can age, interfaces can change, electronics can fail, and a design needs voltage margin rather than merely heat—but they show why isotope depletion was unlikely to be the first clock to expire.

The thirty-four-year NU-5 case later makes this almost literal. The source had lost only about a quarter of its initial decay power by then. The lead had already fractured once, eleven years after implantation, and was repaired while the generator stayed in place. The historical sequence is therefore the opposite of the usual battery story: a part outside the energy source failed first, medicine repaired around it, and the isotope continued decaying on a clock measured in generations.

This is the systems argument the phrase *lifetime pacemaker* can obscure. Half-life is not device life. Specific power is not delivered power. Delivered power is not useful therapy. A pacemaker is a chain:

`nuclear decay → heat → thermoelectric conversion → electrical conditioning → output pulse → lead → myocardium`.

Every arrow has a loss, failure mode or changing clinical requirement. Making the first term unusually durable merely gives the later terms more time to become visible.

If the initial thermoelectric system has enough margin, radioactive decay is unusually predictable. Chemical batteries age through mechanisms that depend on materials, current drain, storage, internal resistance and manufacturing quality. A radioisotope source ages according to nuclear probability. That is attractive in any application where maintenance is difficult.

But the thermoelectric converter is not magic. Only part of the heat becomes useful electricity. The rest must go somewhere. In a spacecraft RTG, thermal management is obvious because the generator is large and the surrounding vacuum changes heat transfer. In a pacemaker, the thermal source is tiny, and the device is surrounded by living tissue. Designers had to keep temperature rise within acceptable limits, maintain electrical output, shield or geometrically manage penetrating radiation components and package the entire system in a body-compatible form.

The dose question is frequently mishandled because people hear plutonium and imagine either catastrophe or perfect shielding. Neither is useful. A sealed source can still expose the patient to small amounts of gamma and neutron radiation associated with the isotope and impurities, depending on source composition and design. Historical health-physics summaries have estimated patient whole-body exposure on the order of tenths of a rem per year for some pacemakers, with much smaller exposures to nearby spouses. Those figures must be tied to specific device/source assumptions rather than generalized across every model, but they show the kind of trade being made: a chronic low dose in exchange for avoiding surgeries associated with battery replacement.

That trade cannot be judged by radiation dose alone. A patient with complete heart block faces a direct and immediate risk without effective pacing. A generator replacement has nonzero risk. A nuclear source has chronic radiological and lifecycle burdens. Medicine chooses among risks, not between risk and zero.

The isotope also arrived carrying the institutional history of the atomic state. Pu-238 did not come from an ordinary medical-device supply chain. It belonged to the infrastructure of reactors, radiochemistry, isotope production, national laboratories and Atomic Energy Commission contracting. The pacemaker program therefore connected cardiology to organizations built for nuclear technology. NUMEC, later associated with the U.S. isotopic pacemaker effort, worked under AEC contract on radioisotope heat sources. Quarterly progress reports survive in Department of Energy technical-report collections, describing source fabrication, testing, vibration and thermal work.

Those documents matter because later retellings tend to make the device look inevitable: take a space battery, shrink it, implant it. The development record is messier. Fuel form matters. Encapsulation matters. Thermocouple efficiency matters. Heat flow matters. Mechanical isolation matters. Electronic load matters. The source must survive not just normal life but credible abuse. Manufacturing has to produce repeatable capsules, not one heroic prototype.

The space analogy can also mislead in the opposite direction. NASA's use of Pu-238 is often invoked to make the medical device sound proven by association. A material can be suitable in two applications for different reasons without one validating the other. Space RTGs are designed around launch accidents, reentry, vacuum, extreme mission duration and remote operation. Pacemakers are designed around biocompatibility, surgery, patient dose, human movement, clinical monitoring and funerary handling. Shared isotope, different system.

The strongest claim is narrower: the atomic pacemaker borrowed from a mature idea in radioisotope power—the conversion of steady decay heat into long-lived electricity—and forced it through a medical safety case.

This gives the device an almost perverse elegance. Its energy source does not know whether the patient is asleep, hospitalized, crossing an ocean or living through a power outage. It does not need an external charging ritual. It cannot be accidentally left unplugged. It is indifferent to behavior. The thing that makes it dangerous is also what makes it dependable: the decay continues.

Modern implantable technology has moved in a different direction. Rechargeable systems accept dependence on external energy transfer in exchange for smaller implanted batteries. Primary lithium cells accept finite life in exchange for simpler regulation and high energy density. Some ultra-low-power sensors can contemplate exotic nuclear batteries again because their loads are minute. Every architecture chooses a relationship with maintenance.

The Pu-238 pacemaker chose the most radical relationship available: make maintenance irrelevant to the power source.

The rest of the book is what happened when that choice met the human world.