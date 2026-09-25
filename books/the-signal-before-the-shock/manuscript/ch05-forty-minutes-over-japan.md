# Chapter 5 — Forty Minutes Over Japan

On March 11, 2011, the Tohoku-Oki earthquake began beneath Japan. In the minutes after rupture, the atmosphere and ionosphere unquestionably responded. Acoustic and gravity waves propagated upward. Total electron content changed. A giant earthquake shakes more than the ground.

The controversial part came before zero.

Kosuke Heki reported an enhancement of ionospheric total electron content beginning roughly forty minutes before the magnitude-nine earthquake. If real and causally linked, this was not a faint geological curiosity. Forty minutes is operationally interesting. Satellites and dense GNSS networks already measure the ionosphere. A global sensor system existed.

The claim triggered exactly the fight it deserved.

The ionosphere is a terrible place to search for a subtle earthquake whisper. Solar radiation, geomagnetic activity, local time, latitude, traveling ionospheric disturbances and atmospheric waves all alter TEC. One must construct a background curve before deciding what counts as anomalous. The background is not given by nature; it is estimated.

That estimation became the battlefield.

Critics argued that the apparent pre-event enhancement could be created by how the reference curve was fitted across data containing the large post-seismic disturbance. Eisenbeis and Occhipinti later demonstrated with synthetic data that polynomial detrending choices can produce apparent precursor-like departures even when no pre-event signal exists. Change the polynomial degree or fitting window and the ghost changes shape.

This is a particularly instructive failure mode because no sensor had to be broken. The artefact can arise in perfectly real measurements through analysis.

The Tohoku debate asks a brutal question: when does preprocessing become a time machine?

If the baseline estimator uses information from after the earthquake, then post-event data can mathematically influence what the pre-event residual looks like. The analyst may never intend this. The polynomial simply spans the interval. But a prospective alarm at 2:30 p.m. cannot use data from 3:00 p.m. Any method that does so is not forecasting even if the plotted anomaly begins before rupture.

This should be a hard rule: precursor algorithms must be causal in the signal-processing sense. At every candidate alarm time, they may use only data that would have existed by that time. No symmetric filters crossing the event. No baseline fit informed by the future. No event-centered normalization unavailable online.

Once this rule is imposed, many beautiful retrospective plots become inadmissible.

That is progress.

The remaining scientific question is not whether the Tohoku figure can be made to look suggestive. It is whether a fixed, forward-running TEC detector generates an excess of useful alarms before earthquakes relative to matched control times while accounting for solar and geomagnetic forcing.

Forty minutes is long enough to matter.

It is also long enough for bad mathematics to matter.