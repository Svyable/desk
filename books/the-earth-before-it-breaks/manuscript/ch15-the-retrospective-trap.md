# The Retrospective Trap

Retrospective science has one unfair advantage.

It knows where to look.

After an earthquake, the epicenter is a coordinate. The origin time is a timestamp. Magnitude is known. Depth is known. Analysts can draw a circle around the source, choose a lead window, inspect satellite tracks and compare the resulting measurements with background periods.

Operational prediction begins with none of those gifts.

The satellite sees anomalies everywhere.

A plasma-density depression over the Pacific is not labeled future earthquake. An ELF electric-field burst does not arrive with a magnitude. A ground electrode does not know whether the next event will be forty kilometers away or whether no event will happen at all.

This inversion is the central methodological test for the field.

Recent CSES studies are often careful to call their work retrospective. One five-year analysis examined dozens of large shallow earthquakes and found that many had at least one identifiable ionospheric anomaly beforehand, with multiple payloads sometimes agreeing. The result is interesting.

It is also not the number an emergency manager needs.

The emergency manager needs the reverse conditional: given an anomaly now, what is the probability of a damaging earthquake in a defined place and time window?

Those probabilities can differ enormously when earthquakes are rare and anomalies are common.

This is the base-rate problem that medical screening learned painfully. A test with impressive sensitivity can still produce mostly false positives when the condition is rare.

Earthquakes are worse because the target has several dimensions. Location. Time. Magnitude. Depth. Fault. The prediction window can be widened until hits accumulate, but every widening also increases chance success and reduces practical value.

Machine learning does not repeal this.

It can make the retrospective trap harder to see. A flexible classifier can exploit subtle structure in station identity, season, orbital geometry or catalog construction. Cross-validation performed randomly across time can leak environmental regimes from train to test sets. Hyperparameters can be tuned on what is effectively the future.

The proper test is temporal exile.

Train the model on the past. Freeze it. Let years happen.

No earthquake researcher gets to edit the answer key after that.

This is why I am more excited by mediocre prospective performance than spectacular retrospective accuracy. A weak result that survives the future is a physical object. A beautiful retrospective classifier may still be autobiography written by the dataset.
