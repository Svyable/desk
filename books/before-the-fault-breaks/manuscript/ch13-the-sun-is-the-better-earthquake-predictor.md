# The Sun Is the Better Earthquake Predictor

If you put a magnetometer beside a fault and refuse to look at the Sun, you are not studying earthquake precursors. You are studying your willingness to be fooled.

The magnetosphere is driven by the solar wind. Solar flares, coronal mass ejections, high-speed streams, particle precipitation, and geomagnetic storms reshape magnetic and electric environments across the planet. The ionosphere responds strongly to solar radiation and geomagnetic forcing. Electron density changes. Currents move. Radio propagation shifts. Auroral activity intensifies. Satellites fly through plasma structures that can look dramatic on any isolated plot.

Earthquakes, meanwhile, occur every day.

Put these two noisy systems on the same timeline and coincidences are inevitable.

This sounds like a simple confounder. It is not simple because space weather has structure. A geomagnetic storm is not a binary variable researchers can subtract with one checkbox. Different latitudes respond differently. Local time matters. Quiet periods still contain variability. Solar forcing interacts with atmospheric tides and waves. Geomagnetic indices summarize large-scale activity but may not capture every regional disturbance relevant to a specific satellite pass.

A paper that says “geomagnetic conditions were quiet” has begun the control, not completed it.

This chapter is about the enemy every anomalous field eventually encounters: a background process more energetic, more common, and less narratively interesting than the proposed signal.

For earthquake electromagnetics, the Sun is the obvious enemy. For animal behavior, weather and husbandry play the role. For radon, pressure, moisture, and ventilation. For groundwater, rain and pumping. For earthquake lights, electrical infrastructure and atmospheric phenomena. Every candidate precursor has a better-funded confounder.

The discipline is to study the confounder first.

Suppose a satellite detects an unusual change in electron density over a future earthquake region two days before a magnitude-seven event. The first analysis should try to destroy the earthquake interpretation. Was there enhanced solar activity? Did similar changes occur at the same geomagnetic latitude elsewhere? Was the feature part of a traveling ionospheric disturbance? Did the satellite cross a plasma bubble? Did local time or season make the baseline unstable? Was there strong thunderstorm activity below? Did the data-processing pipeline introduce an edge effect?

Only after those questions should the fault be invited into the room.

This ordering feels hostile to discovery. It is actually how fragile discoveries survive.

A precursor field that begins with “how could the earthquake explain this?” will produce earthquake explanations. A field that begins with “what ordinary process can explain this?” creates a residual worth investigating.

The concept of a residual is central. Raw environmental measurements are almost never the target. What matters is what remains after known drivers are modeled. A radon anomaly should be unusual relative to expected behavior given weather and season. A magnetic anomaly should be unusual relative to geomagnetic forcing and local cultural noise. Animal movement should be unusual relative to feeding, temperature, day-night cycle, predators, and handling.

Residuals, however, inherit the errors of the model that produced them.

If the background model is bad, ordinary variation becomes “anomaly.” This is particularly dangerous with machine learning because a complex residual can look objective while depending on opaque training choices. A neural network does not purify data. It relocates assumptions into architecture, features, and training distribution.

There is a wonderful inversion available here: use earthquakes as the control rather than the target.

Take the full environmental data stream and create synthetic earthquake catalogs that preserve realistic spatial and temporal clustering. Run the exact precursor pipeline against thousands of these fake catalogs. How often does it discover relationships as impressive as the real one? This permutation logic can expose methods that are predisposed to find significance whenever enough events and windows are available.

The synthetic catalogs must themselves be realistic. Randomly scattering earthquakes uniformly across Earth would create a laughably weak null because real earthquakes cluster along tectonic boundaries and in aftershock sequences. A good null preserves the parts of seismicity the precursor is not claiming to explain.

This is another recurring rule: the null hypothesis should be competent.

Weak nulls are one of the easiest ways to manufacture anomalies.

Imagine testing whether ionospheric anomalies occur more often near earthquake epicenters than random points. Random points will include oceans and stable continental interiors where ionospheric climatology, human infrastructure, latitude, and sampling differ from tectonic zones. The earthquake locations may win for reasons unrelated to seismic preparation. Better controls would match geomagnetic latitude, local time, land-ocean setting, season, satellite sampling, and perhaps tectonic region.

The harder the control, the more valuable the surviving effect.

Space-weather scientists already possess sophisticated models and indices that precursor researchers can use. Collaboration matters. A seismologist searching magnetometer data may underestimate magnetospheric complexity; an ionospheric physicist may underestimate fault complexity. The subject sits between disciplines in exactly the place where each can mistake the other’s ordinary phenomena for anomalies.

Cross-disciplinary ignorance is a precursor factory.

The same problem appears in reports of thermal infrared anomalies before earthquakes. Satellites observe land-surface temperature and outgoing longwave radiation. Temperature changes before earthquakes have been reported in many studies. But clouds, soil moisture, vegetation, topography, atmospheric humidity, weather fronts, urban heat, fires, and sensor geometry all produce thermal variation. A warm patch beside a future epicenter is not self-interpreting.

The physical mechanism is sometimes linked back to stress-activated charges, gas emissions, or changes in latent heat flux. Again, a multi-step mechanism increases the number of expected companion observations. That is good if researchers measure them and bad if the mechanism is invoked only after the thermal anomaly appears.

The ideal design becomes increasingly obvious.

For every candidate channel, build an adversarial background model with experts from the field that normally studies that channel. The magnetometer background is designed with space-weather physicists. The radon background with atmospheric and soil-gas specialists. Groundwater with hydrogeologists. Animal movement with behavioral ecologists. Thermal imagery with remote-sensing experts.

Then let seismology ask whether anything remains.

This is slower than anomaly hunting. It produces fewer papers. It is probably the only path forward.

There is a cultural reason these controls are often weak. Scientific specialization rewards knowing the target better than the background. A researcher enters the field because earthquakes are interesting, not because barometric pressure is. The confounders feel like chores between the researcher and the signal.

But in rare-event science, the chores are the science.

A practical warning system has to operate during geomagnetic storms, heat waves, monsoons, holidays, equipment maintenance, migrations, and power-grid failures. It does not get to request quiet conditions when society needs it. If the precursor disappears whenever the environment becomes complicated, it may still reveal interesting physics but it cannot carry public warning.

This distinction should be made early. There are two possible victories.

One is scientific: demonstrate a reproducible pre-seismic coupling under controlled conditions.

The other is operational: use the coupling to improve forecasts with acceptable false alarms in the real world.

The first can exist without the second.

I suspect that is where several precursor phenomena will end up if they survive at all. Real, conditional, mechanistically interesting, locally measurable, and operationally weak.

That is not failure. It is what happens when a strange claim becomes a normal effect.

The Sun will still be louder.