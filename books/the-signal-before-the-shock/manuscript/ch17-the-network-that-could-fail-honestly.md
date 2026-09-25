# Chapter 17 — The Network That Could Fail Honestly

Here is the experiment I want.

Choose several tectonically active regions with dense existing seismic and GNSS coverage and contrasting geology. Add standardized ground magnetometers, electric-field sensors, radon and selected gas measurements, meteorology and instrument-health telemetry. Where practical, add groundwater and animal telemetry as explicitly secondary channels. Ingest global GNSS TEC, satellite plasma data and space-weather measurements.

Do not center the network on earthquakes after they happen. Tile the regions in advance.

Maintain an open, immutable raw archive. All clocks are synchronized. Hardware changes are logged. Calibration pulses are public. Data gaps are visible.

Create a prospective forecasting server modeled conceptually on earthquake forecast testing centers. Teams submit containerized algorithms. Each algorithm produces a probability distribution for target earthquakes over fixed spatial cells, magnitude ranges and time windows. A submission may use seismicity alone or any combination of non-seismic channels.

The baseline suite includes ETAS-like seismic clustering models. A precursor model wins only if it improves proper probabilistic scores over those baselines on future data. Alarm time is penalized. Spatial volume is penalized. Model complexity and repeated submissions are tracked.

Algorithms are frozen for scoring epochs. Exploration occurs on a delayed public copy of the data so researchers cannot tune on the live evaluation stream. At predetermined intervals the sealed predictions are opened and scored.

Matched control regions with low seismicity operate identical sensors. Global geomagnetic and ionospheric context is mandatory. Every claimed event-specific success is accompanied automatically by nearest false alarms and nearest missed earthquakes.

No press release may describe a 'prediction' from a model that has not passed a prospective epoch.

The experiment has explicit defeat conditions. If, after sufficient target events and exposure, no multimodal model improves out-of-sample scores beyond seismic baselines by a preregistered margin, the operational precursor hypothesis is weakened substantially. If specific physical channels show no reproducible event-conditioned effect above calibrated nulls, those channels are retired or redesigned.

If a model does win, it faces a second geography. Then a third.

The important property of this network is not sensitivity.

It is that the network can humiliate the hypothesis cleanly.