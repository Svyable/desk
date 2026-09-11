# The Point Cloud Can Lie

A point cloud looks objective because it contains too many decimals.

Each return has coordinates. Elevation can be measured to centimeters under favorable conditions. The computer renders a terrain surface with gradients that feel precise enough to settle arguments.

Precision is not the same thing as interpretation.

The first source of error arrives before archaeology. Instrument altitude, pulse density, scan angle, GPS and inertial measurement all affect the data. Vegetation determines how many pulses reach ground. Water absorbs or reflects badly. Steep terrain complicates classification.

Then software decides what counts as ground. Misclassify a low wall as vegetation and archaeology disappears. Keep a fallen trunk as terrain and archaeology appears.

Interpolation creates a continuous surface between measured ground points. In dense canopy, those gaps can be large. A smooth digital elevation model may therefore contain terrain that was mathematically guessed.

Visualization adds another layer. Hillshade depends on the imagined sun angle. A subtle bank can look dramatic when light strikes across it and disappear when illumination aligns with it. Multi-directional hillshade helps. So do slope, curvature, local relief and sky-view-factor products. But each representation emphasizes some shapes and suppresses others.

Analysts then bring expectation.

Humans are excellent at finding geometry. Archaeology makes this worse because geometry is often genuinely diagnostic. Rectangles, circles, parallel lines and grids deserve attention. They also occur through forestry, drainage, geology, modern roads and image processing.

The cure is not distrust. It is falsification.

A candidate feature should be evaluated across visualizations. Does it persist in the raw points? Is it consistent with local topography? Does historical aerial imagery show a modern origin? Does field inspection find construction material or altered soil? Do excavations confirm cultural deposits?

The 2026 Amazon study is unusually valuable because it quantified a limitation many popular accounts ignore. In some surveyed regions, substantial fractions of ground lacked enough returns to visualize ordinary earthworks. Large monuments remained more detectable than small ones. Even canopy-penetrating LiDAR had its own monument bias.

That is deliciously inconvenient. A technology celebrated for defeating vegetation still sees the past preferentially according to size.

Machine-learning classification will not remove this problem. A neural network can find features faster but inherits training labels and data quality. If known archaeological sites are unusually large because those were what older survey methods found, the training set may teach the model to reproduce that bias at industrial scale.

There is another kind of lie: the composite surface. Features from different centuries coexist in one model with identical brightness. The map whispers simultaneity because the display has no time dimension.

Archaeologists know this. Readers often do not.

The point cloud does not lie intentionally. It lies the way every instrument lies: by answering the question it can measure while looking authoritative enough to be mistaken for the question we actually asked.

The discipline lies in remembering the difference.
