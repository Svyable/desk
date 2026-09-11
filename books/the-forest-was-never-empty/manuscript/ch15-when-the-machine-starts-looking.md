# When the Machine Starts Looking

The next archaeological bottleneck is not scanning. It is attention.

National mapping programs and research projects are producing terrain data faster than archaeologists can inspect them feature by feature. A human analyst can spend days moving a virtual light source across one valley. Multiply that by countries.

Machine learning is the obvious answer and an epistemological trap.

Recent work has already used convolutional networks and related methods to identify mounds, charcoal kilns, field systems, cemeteries and other archaeological features in LiDAR-derived terrain products. The appeal is obvious. Train on known examples, sweep huge areas, rank likely candidates, send humans to the best ones.

The trap is equally obvious. Known examples are not a neutral sample of the unknown past.

Suppose earlier archaeology preferentially found large round burial mounds. A model trained on them becomes extremely good at finding large round burial mounds. It may miss small rectangular ones, eroded examples, or a different regional tradition. The machine amplifies archaeological history.

Synthetic training data can help. A 2025 study on ancient cemeteries under forest used multiple LiDAR-derived channels—elevation, slope, hillshade, roughness, curvature—and data synthesis to improve semantic segmentation. This is technically clever. It also illustrates how far the field is moving from an archaeologist simply “seeing” a site in a scan.

Soon the discovery chain may be: aircraft collects photons; classification algorithm estimates ground; raster pipeline derives topographic measures; neural network assigns archaeological probabilities; analyst validates; field team checks; excavation dates.

At which step was the site discovered?

The question is not philosophical decoration. Credit, reproducibility and bias depend on it.

If a model flags a feature because it resembles training data, researchers need confidence scores and false-positive rates. If the model was trained on unpublished site coordinates, heritage security matters. If results cannot be reproduced because proprietary software or closed datasets are involved, the archaeological claim becomes difficult to audit.

There is nevertheless an enormous opportunity. Machines are good at boredom. Archaeological terrain analysis contains oceans of boredom around rare features. Automated detection can make systematic survey possible at continental scale.

The best system will not ask the model to declare archaeology. It will ask it to rank anomalies worth human attention.

That framing preserves uncertainty. A probability map is not a site map.

There is another possibility more interesting than simply automating old categories: unsupervised anomaly detection. Instead of asking the machine to find known mound shapes, ask it to find topographic patterns that are locally unusual. That could reveal archaeological forms outside the training imagination.

Of course it will also find landslides, bad data and drainage ditches.

Good. Discovery should have false leads.

The danger begins when efficiency pressure makes the false leads disappear from the record and the machine’s preferred archaeology becomes the only archaeology that receives field time.

The next lost city may not be found by a person looking at a beautiful hillshade. It may begin as row 18,442 in a ranked table.

That is less romantic and much more consequential.
