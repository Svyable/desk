# Chapter 6 — The Polynomial That Predicted an Earthquake

A polynomial has no geological theory. That is its charm and its danger.

To identify an anomaly, analysts often subtract a smooth estimate of normal behavior. The residual looks like discovery. But normality has been chosen. If the smooth curve bends because the post-earthquake data pull on it, then the residual before the event contains information from the future.

The criticism of reported pre-Tohoku TEC enhancement is therefore larger than ionospheric science. It is a general theorem for retrospective anomaly research: **a background model can leak the event backward in time.**

The same can happen with moving averages, normalization windows, principal components trained on the whole dataset, machine-learning preprocessing, interpolation across missing data and event-conditioned station selection. Any transformation that sees the full record before generating the earlier feature can create impossible foresight.

This is why prediction papers need what financial backtests learned painfully: walk-forward evaluation. At time t, fit only on information available before t. Generate a forecast. Freeze it. Advance the clock. Score the result. Repeat.

Earthquake science adds an uglier problem because events are spatial. Analysts may choose the radius around an epicenter after knowing where rupture occurred. A satellite anomaly 150 kilometers away sounds local if 150 kilometers was chosen after inspection. A fair system needs a spatial rule fixed in advance, perhaps conditioned on physically motivated propagation or coupling lengths.

Magnitude thresholds are another degree of freedom. If the signal appears before magnitude 6.5 events but not magnitude 6.0 events, the threshold can drift upward until the plot behaves. Depth thresholds, local-time windows and geomagnetic cutoffs can be tuned similarly. Each tuning consumes evidence.

The solution is not to forbid exploratory work. Exploration is how one learns. The solution is to label it correctly. Use one period to discover candidate transforms. Then lock them and test on untouched future data. The Earth provides an endless test set, although slowly and with terrible ethics.

A useful precursor consortium would therefore maintain two systems. The research stream is messy, permissive and creative. Investigators can try any filter they like. The scoring stream is sealed. Algorithms enter in containers with version hashes and issue probabilistic forecasts continuously. They cannot be changed retroactively. Results are evaluated against common baselines.

The distinction resembles drug discovery and clinical trials. Nobody asks medicinal chemists to preregister every molecular intuition. But the pivotal trial does not let them move the endpoint after seeing the deaths.

Earthquake precursors need pivotal trials.