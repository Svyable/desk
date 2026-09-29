# The New Constellations

On June 14, 2025, China launched CSES-02, the second spacecraft in the China Seismo-Electromagnetic Satellite program.

The mission is a useful correction to the idea that earthquake-precursor research belongs to a discredited scientific past. CSES-01 had already been operating since 2018. CSES-02 added a second platform and an updated instrument suite, including high-precision magnetic-field measurement and Italian-built electric-field and energetic-particle instruments. The Italian Space Agency describes the program's scientific objectives plainly: measure electromagnetic, ionospheric and magnetospheric parameters, search for space-time correlations with strong earthquakes, and investigate possible lithosphere-atmosphere-ionosphere coupling.

The interesting word is correlation.

Official mission descriptions do not establish that earthquakes are predictable from orbit. They establish that serious institutions in China and Italy consider the proposed coupling scientifically unresolved enough to instrument. That is already more nuanced than the usual folklore around anomalous research, where state interest is treated either as proof of hidden capability or as something embarrassing to be concealed.

Here the program is public.

CSES-02 also changes the experimental geometry. Two satellites can sample the same broad system with better cadence than one. The program can be compared with ESA's Swarm constellation and ground networks. Magnetometers can be cross-calibrated. Electric-field instruments can distinguish persistent spatial structure from a single anomalous pass more effectively. The orbital archive becomes richer.

None of that automatically improves prediction.

It improves the opportunity to perform a cleaner test.

This distinction matters because precursor research is entering the machine-learning era with exactly the kind of datasets machine learning finds irresistible: many channels, long time series, rare labeled events, strong spatial structure and incomplete causal models. The recipe can produce genuine discovery. It can also produce a classifier that appears prophetic because it has learned everything except earthquake preparation.

Consider what an orbital model can accidentally learn.

Earthquake locations are not random. They cluster along plate boundaries and faults. Those locations correlate with latitude, longitude, ocean versus land, magnetic coordinates and ground-station density. Large earthquakes have seasonal and regional sampling patterns simply because the instrumental record is finite. Satellite measurements themselves vary with local time, orbit, solar activity and geomagnetic conditions. If earthquake windows and control windows are not matched carefully, a model can infer “earthquake” from geography or orbital context without seeing any pre-seismic physics.

The more flexible the model, the easier the mistake.

A neural network does not care that the feature it discovered is embarrassing. If a certain longitude is overrepresented in the positive class, longitude is useful. If one mission mode was active more often during an earthquake-rich period, mission mode is useful. If aftershock sequences produce repeated labels, the model can learn the aftermath of one event and appear to generalize to dozens.

Prediction science had these leakage problems before machine learning. It called them selection, tuning and hindsight. The new systems can automate them at scale.

A modern CSES analysis therefore needs controls that would have looked excessive to early precursor researchers. Train and test splits should be separated by entire earthquake sequences, perhaps by geography and years, not by randomly shuffled data points. Preprocessing parameters must be fitted only on training periods. Quiet controls should preserve the same orbit and region. Model selection should not repeatedly consume the final test set. Performance should be reported under real event base rates, not only on artificially balanced examples.

Most important, the model should produce a continuous prospective output.

Every orbit. Every day. Earthquake or not.

A research group that publishes only scores around later earthquakes recreates the historical problem in digital form. The true denominator is the uninterrupted stream.

There is a second opportunity in the two-satellite era: independent hypothesis transfer.

DEMETER and CSES-01 have already generated proposed signatures. Some studies report nighttime plasma-density anomalies, energetic-particle variations, electromagnetic spectral changes or relationships to magnitude and depth. CSES-02 should not merely search anew for whatever looks unusual before its first major earthquake. It can be used to test a finite set of claims derived from the earlier missions.

That is less glamorous than discovery. It is more decisive.

Take one example. Suppose earlier work predicts a decrease in a specified ion density between two and five days before shallow continental earthquakes above magnitude 6, within a particular spatial radius, primarily at night and only under quiet geomagnetic conditions. Freeze that definition before examining the new evaluation period. Count every qualifying anomaly and every qualifying earthquake. Publish the stream.

If the effect is real but weak, it will show up as a modest shift. If it is an artifact of old analysis choices, it should fade. If it operates only in a geological subset, the residuals may reveal the missing condition.

That last outcome is especially valuable.

A failed universal hypothesis can contain a successful conditional one.

Earthquake science has historically treated inconsistent replication as a reason either to abandon a precursor or to keep widening the theory. Modern global datasets offer a third option: model heterogeneity explicitly. Compare subduction zones with continental strike-slip faults. Separate oceanic and continental sources. Include depth, crustal conductivity, hydrology and geomagnetic geometry as predeclared modifiers.

The danger is obvious. Every subgroup is another chance to find significance.

The protection is also obvious: the subgroup rule must be derived in one period and tested in another.

CSES has another advantage over some historical programs: many of its instruments are scientifically useful even if the earthquake hypothesis fails. The magnetometer contributes to geomagnetic field measurement. Particle instruments study radiation-belt and space-weather phenomena. Electric-field data have ionospheric applications unrelated to earthquakes. This matters because a mission that needs an earthquake precursor to justify its existence faces strong institutional pressure to find one. A multi-purpose mission can tolerate a null more honestly.

In 2025, the Chinese Academy of Sciences described the CSES-02 high-precision magnetometer as an operational geophysical instrument with improved vector and scalar measurement. Its predecessor on CSES-01 had already accumulated years of data and been cross-calibrated with ESA's Swarm satellites. That is mundane, excellent science infrastructure.

The anomaly hunt sits on top of it.

This is the arrangement precursor research needs: the baseline measurement should be valuable enough that years of negative earthquake results are not wasted.

A network designed only to catch the extraordinary event can become psychologically dependent on extraordinary interpretations. A geomagnetic observatory is useful every day. A groundwater chemistry network can be useful for hydrology. A GNSS network measures tectonic strain regardless of whether TEC precursors exist. The best precursor experiment is one that can afford to be wrong.

There is a geopolitical footnote here that deserves discipline. China, Italy, France, Japan and other states have funded earthquake-related electromagnetic research. It is tempting, especially in the anomalous-research ecosystem, to treat convergent state interest as evidence that classified results must be stronger than public ones.

That inference is not warranted.

Governments investigate low-probability possibilities because the payoff can be enormous. They also sustain scientific programs for basic research, disaster mitigation and technological capability. A satellite launch demonstrates investment. It does not demonstrate a hidden operational warning service.

If anything, the public record creates a useful burden. A country with dense seismic networks, a dedicated electromagnetic satellite and strong technical capacity should eventually be able to show prospective performance if the signal is large enough for operational use.

The absence of such a record is evidence too.

Not proof of impossibility. Evidence about scale.

This is where the new constellations may finally resolve an old ambiguity. If pre-seismic ionospheric effects are common and strong, multiple satellites plus ground networks should find them with increasing consistency. If they are weak statistical shifts, the larger archive will estimate their magnitude. If they disappear under matched controls, the field can move on. If they occur only under special conditions, the conditions can be isolated.

The worst outcome would be the most familiar one: every new earthquake gets its own anomaly after analysis, every anomaly requires a slightly different window, and the prospective false-alarm stream remains unpublished.

That would not be a failure of the satellites.

It would be a failure to use abundance as a test.

There is a broader historical pattern here. Early earthquake precursor science suffered from scarcity. One magnetometer. One well. One fault segment. One exceptional event. Each case carried too much interpretive weight.

We are moving into the opposite regime.

Too much data.

Thousands of GNSS receivers, dense seismic arrays, Earth-observing radar, magnetometers, groundwater sensors, weather models, multiple orbital platforms, continuous catalogs and increasingly cheap computation. Every earthquake can be surrounded by terabytes of potential precursors.

Abundance does not solve the epistemic problem. It changes its shape.

When the archive was sparse, the danger was mistaking one coincidence for a law.

When the archive is huge, the danger is finding a law-shaped coincidence somewhere in the search space.

The remedy is the same one Parkfield taught with much less data: make the future capable of saying no.