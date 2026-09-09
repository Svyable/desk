# Remembering the Pulse

The digital descendant of the delay line has a better memory.

Digital radio-frequency memory systems capture incoming radio-frequency signals, store a representation, manipulate it, and retransmit it. Public Defense Acquisition University guidance describes DRFM as a radar spoofing technique in which the returned signal can remain coherent enough to resemble legitimate target returns to the transmitting radar.

The engineering has moved far beyond PALLADIUM's early implementation, but the conceptual move is the same: let the victim sensor provide the signal that will be used against its own inference process.

Coherence is the crucial word. A radar designed to reject simple noise can compare features of the received waveform with what it transmitted. A retransmitted copy preserves features that random jamming does not. The deception system can then alter delay, Doppler, amplitude, or other characteristics to create false range or velocity information, subject to the capabilities of the hardware and the counter-countermeasures in the radar.

Public descriptions should not be mistaken for a complete map of modern electronic attack. Operational details, performance envelopes, threat libraries, waveforms, and countermeasures can be classified. That uncertainty cuts both ways. It does not justify assuming secret systems can generate arbitrary realities. It also makes it reckless to assume public 1960s techniques define the modern ceiling.

The right approach is architectural rather than mystical.

A deceptive repeater has to receive something. Reception imposes geometry and sensitivity. It has to process quickly enough. Processing imposes latency and bandwidth. It has to transmit back with sufficient power and the right spatial characteristics. Transmission creates emissions that may themselves be detected. If the radar changes waveforms unpredictably or uses multiple spatial channels, the burden increases. If several independent sensors observe the target from different geometries, the burden increases again.

Countermeasures create counter-observables.

This is one reason the most interesting future deception problems may involve fusion rather than individual sensors. A radar can be hardened against certain false returns, but the attacker may instead target the fusion layer with a coordinated collection of weaker cues: a plausible RF track, a matching communication emitter, a cheap physical decoy, a thermal source, perhaps cyber manipulation of data transport if access exists. The objective is to make the overall story cheaper to accept than to disprove.

Air Force doctrine effectively acknowledges this by noting that deception should simulate as many adversary information sources as practical to increase plausibility. That is an extraordinary sentence to read beside PALLADIUM. The old ghost aircraft was a calibrated point target. Modern doctrine thinks in stories distributed across information sources.

The defensive answer cannot be to distrust everything. A force that doubts all sensors has already been denied the spectrum. The answer is to know which correlations are truly independent, to protect raw data, to test systems under adversarial conditions, and to preserve enough provenance that analysts can reconstruct how a track came into being.

DRFM makes a return remember the radar's pulse. A resilient defense needs to remember the return's entire causal history.

Sources: Defense Acquisition University EMS Survivability Guidebook, https://www.dau.edu/sites/default/files/webform/documents/25701/ems_survivability_guidebook.pdf ; AFDP 3-85, https://www.doctrine.af.mil/Portals/61/documents/AFDP_3-85/AFDP%203-85%20Electromagnetic%20Spectrum%20Ops.pdf