# The Point Cloud Can Lie

A point cloud looks objective because it contains too many decimals.

Every return arrives with coordinates. Software may display elevation to centimeters. The terrain model is smooth, shaded and georeferenced. A person can click a pixel and receive a number precise enough to make disagreement feel irrational.

This is how measurement acquires false authority.

Precision is not the same thing as accuracy.

Accuracy is not the same thing as classification.

Classification is not the same thing as archaeology.

The entire book depends on keeping those sentences separate.

## The instrument does not measure a bare-earth model

An airborne laser scanner emits pulses and records returned energy. Depending on the system, one emitted pulse can produce several returns associated with canopy, branch, understory, ground, wall, roof, water edge or some mixture the processing software later has to interpret.

The famous archaeological image appears only after a chain of transformations:

1. the aircraft estimates where it was;
2. the inertial unit estimates how it was oriented;
3. the scanner estimates the angle and timing of the pulse;
4. returns are geolocated;
5. noisy or anomalous returns are identified;
6. points are classified into ground and nonground categories;
7. ground-classified points are interpolated into a terrain surface;
8. derivatives such as hillshade, slope, curvature or local relief are calculated;
9. a human or model identifies something as archaeological.

Every arrow is a place uncertainty can enter.

The final rectangle may be ancient.

It may also be a classification decision rendered with beautiful lighting.

## Start with the quality language engineers actually use

LiDAR production standards are useful here because they show how much measurement discipline exists before archaeology begins.

The U.S. Geological Survey's current 3D Elevation Program specification does not describe a dataset with one magic number called “resolution.” It distinguishes aggregate nominal pulse density, pulse spacing, relative vertical precision, absolute vertical accuracy, land-cover classes, point classification and minimum DEM cell size. Source: https://www.usgs.gov/ngp-standards-and-specifications/lidar-base-specification-tables

Under the 2025 revision, for example, USGS Quality Level 2 collection calls for an aggregate nominal pulse density of at least **2 pulses per square meter** and nominal pulse spacing no greater than about **0.71 meter**. QL1 and QL0 call for at least **8 pulses per square meter** and spacing around **0.35 meter** or finer. Minimum DEM cell sizes are correspondingly 1 meter for QL2 and 0.5 meter for QL0/QL1. Source: https://www.usgs.gov/ngp-standards-and-specifications/lidar-base-specification-tables

Those numbers are useful.

They are also easy to misuse in archaeology.

Pulse density is not ground-point density.

A forest can receive eight emitted pulses per square meter and return only a fraction of them from the actual ground. Leaves, branches and understory intercept energy first. The archaeologically relevant sampling density is therefore the spatial distribution of reliable **ground returns**, not merely the nominal density advertised for the flight.

That distinction is one of the hidden reasons two LiDAR surveys with similar technical specifications can have very different archaeological visibility.

## The canopy is a sampling filter

Imagine a one-meter cell beneath dense tropical vegetation.

The aircraft may illuminate it repeatedly. If every useful return comes from vegetation, the terrain surface beneath that cell contains no direct ground measurement.

The DEM still has to draw something there.

So it interpolates.

Interpolation is not fraud. It is how continuous surfaces are constructed from samples. The problem begins when the reader forgets where the samples ended and the interpolation began.

A broad platform may survive that gap because nearby ground points constrain its general form. A narrow ditch, low wall or twenty-centimeter terrace edge may vanish entirely. Worse, the interpolated surface can create smooth shapes that look more deliberate than the underlying observations justify.

This is why archaeological detectability has to be expressed as a function of at least four things:

**feature geometry × ground-return density × classification behavior × terrain/vegetation context.**

There is no universal LiDAR detection threshold.

A two-meter-high mound under open woodland and a fifteen-centimeter bank under dense palms do not inhabit the same measurement problem.

## Vertical accuracy is not feature-detection accuracy

The standards make another distinction popular accounts often miss.

USGS requires positional accuracy validation before derivative products are developed. It distinguishes nonvegetated and vegetated vertical accuracy and points back to the ASPRS positional-accuracy framework. Source: https://www.usgs.gov/ngp-standards-and-specifications/lidar-base-specification-data-processing-and-handling-requirements

ASPRS, in turn, maintains current positional-accuracy standards specifically because modern mapping systems require explicit horizontal, vertical and three-dimensional error reporting rather than vague claims of precision. Source: https://asprs.org/Main/Main/Standards/Positional-Accuracy-Standards.aspx

That is necessary.

It is still not enough for archaeology.

Suppose a terrain model meets a ten-centimeter vertical-accuracy target over a project.

That does not imply a twenty-centimeter archaeological bank has a ninety-five-percent probability of being detected.

Feature detection depends on shape, width, local slope, return distribution, classification and visualization. A broad low rise can be obvious even if its absolute elevation contains error. A narrow ditch can disappear even in a dataset whose survey-wide vertical accuracy is excellent.

Survey accuracy and archaeological sensitivity are related but different metrics.

The book should never substitute one for the other.

## Relative precision matters in a different way

Absolute accuracy asks whether the mapped elevation is correctly tied to the real-world vertical reference.

Relative precision asks whether neighboring swaths and points agree internally.

For archaeology, relative precision can matter enormously because many features are detected through small local differences rather than their absolute elevation above sea level. A platform does not care whether the DEM is globally shifted upward by eight centimeters. It cares whether one side of the platform is rendered consistently relative to the surrounding ground.

The current USGS specification therefore reports relative vertical precision separately from absolute vertical accuracy. At QL1/QL2, its table gives smooth-surface relative vertical RMS differences on the order of centimeters, with larger allowances across swath overlap. Source: https://www.usgs.gov/ngp-standards-and-specifications/lidar-base-specification-tables

Again, those are mapping-production metrics, not guarantees that a particular archaeological edge survives processing.

But they show the right habit: uncertainty is decomposed instead of hidden inside the word **high-resolution**.

## Ground classification is an archaeological hypothesis before the archaeologist arrives

The most consequential processing step is often deciding which returns are ground.

USGS's standard classification scheme uses Class 2 for bare earth and maintains explicit requirements for classification consistency. Source: https://www.usgs.gov/ngp-standards-and-specifications/lidar-base-specification-data-processing-and-handling-requirements

That sounds procedural until you think like an archaeologist.

A low wall is not bare earth in the everyday sense.

A roof is not bare earth.

A fallen log is not bare earth.

An earthen platform covered by soil and vegetation may be terrain for one algorithm and an object for another depending on scale and slope thresholds.

The classifier therefore makes a prior decision about what the landscape *is* before the archaeologist interprets it.

A filter designed for flood mapping may remove small structures it regards as nonground artifacts.

A filter tuned to preserve microtopography may retain vegetation or modern debris that produces false archaeological shapes.

There is no perfectly neutral ground filter because “ground” is partly an operational category.

That is why archaeological projects should preserve and inspect more than the final DEM.

If a candidate matters, go back to the classified point cloud.

Look at the vertical distribution of returns.

Compare alternative classifications.

Ask whether the feature exists in independently processed terrain models.

If the archaeology disappears when a reasonable ground-classification parameter changes, confidence should fall.

## The 2026 Amazon paper makes the problem visible

The southwest Amazon survey is valuable not only because it found hundreds of earthworks.

It quantified where the sensor struggled.

Dense canopy reduced ground penetration. Some flight-line segments produced too few reliable ground returns for ordinary earthworks to be visualized confidently. Large monuments had a better chance of surviving the measurement chain than small ones.

This creates a second-order visibility bias.

Traditional archaeology can be biased toward what a person can reach and see.

LiDAR can correct that bias while introducing another: preference for features large enough and geometrically coherent enough to survive canopy penetration, ground classification and interpolation.

The technology celebrated for defeating vegetation can therefore remain monument-biased.

That is not an indictment of LiDAR.

It is a reason to estimate detection probability rather than speak as if the scan created complete visibility.

## We need archaeological detection curves

The field should borrow a habit from ecology and signal detection.

For a given survey, estimate the probability of detecting a feature as a function of measurable properties:

- height or depth,
- width,
- planform area,
- slope contrast,
- canopy density,
- understory structure,
- ground-return density,
- scan angle,
- DEM cell size,
- classification method,
- visualization method,
- analyst or model.

Call it a detection curve.

Then stop pretending an empty cell in the archaeological map has one meaning.

An empty cell could mean:

1. there is no archaeological feature;
2. a feature exists but the laser did not obtain useful ground returns;
3. the point cloud contains it but classification removed it;
4. the DEM smoothed it away;
5. the visualization suppressed it;
6. the analyst missed it;
7. the model scored it below threshold;
8. the feature exists but falls outside the morphology the project was searching for.

Those are scientifically different absences.

A serious regional population or settlement model should propagate at least some of that uncertainty forward.

## Cell size creates another false intuition

A one-meter DEM does not mean the terrain was measured every meter.

It means the final raster contains a value for every one-meter cell.

Those values may be supported by many ground returns, one return, or interpolation from nearby observations depending on the processing workflow and local conditions.

This is a profound difference.

A raster is regular.

The measurement support beneath it may be violently irregular.

The most honest archaeological visualization would therefore include not only terrain but a companion map of **support**: ground-point density, interpolation distance, classification confidence or another measure showing where the bare-earth surface is well observed and where it is inferred.

Then the reader could see the uncertainty beside the feature instead of searching for it in the methods section.

## Data voids should be visible

The USGS specification explicitly defines and tracks data voids in collection planning. Under its current collection language, a first-return gap exceeding a threshold based on nominal pulse spacing can count as a void, with exceptions for legitimate surfaces such as water. Source: https://www.usgs.gov/ngp-standards-and-specifications/lidar-base-specification-collection-requirements

Archaeological practice needs an analogous concept for **ground-information voids**.

A forested area may have dense first-return coverage and still have poor terrain support.

The relevant void is not “no laser pulse.”

It is “insufficient reliable ground evidence to test for features of this scale.”

That threshold should be tied to the archaeological question.

A dataset adequate for mapping a five-meter mound may be inadequate for detecting raised fields or low residential platforms.

The phrase **LiDAR coverage** hides this distinction.

Coverage of photons is not coverage of archaeological sensitivity.

## Visualization is another experiment

Once a terrain model exists, the analyst still has to see structure inside it.

Single-direction hillshade is seductive because humans are exquisitely responsive to light and shadow. Rotate the virtual sun and a subtle linear feature can appear or disappear. Reverse the illumination and some people experience relief inversion, seeing depressions as ridges.

This is why robust archaeological interpretation uses multiple visualizations rather than one beautiful hillshade.

Multi-directional hillshade reduces dependence on one illumination angle.

Slope emphasizes local gradient.

Curvature highlights changes in surface form.

Local relief can remove broad topographic trends and expose subtle anthropogenic microtopography.

Sky-view factor and related openness measures can reveal shapes that ordinary hillshade suppresses.

But every derivative is a filter.

The correct question is not **which one shows the archaeology best?**

It is **does the candidate survive reasonable changes in representation?**

If a rectangle exists only under one azimuth, one stretch and one smoothing setting, treat it as fragile.

If it persists across raw points, alternative terrain models, multiple derivatives and field inspection, confidence rises.

## Human expectation enters after all that machinery

Humans are excellent at finding geometry.

Archaeology makes this worse because geometry is often genuinely diagnostic.

Rectangles, circles, parallel lines, grids and radial plans deserve attention.

They also occur through forestry, drainage, geology, roads, cadastral boundaries, military works, erosion and processing artifacts.

An analyst who has just found three platforms is primed to find the fourth.

That is ordinary cognition, not misconduct.

The solution is workflow design.

Blind some validation tiles.

Mix known positives, known negatives and unverified candidates.

Have multiple analysts classify independently.

Record confidence before field results are revealed.

Measure disagreement.

Then the field can discover whether experts are actually better than models, whether models are better than experts, and where both hallucinate the same landscape.

## Machine learning industrializes both detection and bias

A neural network can inspect terrain derivatives much faster than a person.

It can also reproduce the historical sample at industrial scale.

Suppose the training set contains mostly large known mounds because large mounds were what older surveys found.

The model learns **archaeology = large mound**.

Run it over a continent and it will produce a beautifully consistent map of yesterday's visibility bias.

Accuracy metrics can hide this if evaluation data come from the same biased distribution.

A model can achieve impressive precision against known sites while remaining poor at discovering the feature classes archaeology systematically failed to record.

That is why the next generation of machine-assisted prospection needs prospective validation.

Train the model.

Freeze it.

Send it into an area whose archaeology has not already been exhaustively labeled.

Select some high-score candidates, some medium-score candidates, some low-score candidates and some random controls.

Field-check all of them under a preregistered protocol.

Then report:

- precision,
- recall where estimable,
- false-positive rate,
- detection by feature class,
- detection by canopy/terrain regime,
- calibration of model probability,
- analyst comparison,
- failures.

The failures are the valuable part.

A model that points out its own blind spots can improve archaeology.

A model evaluated only on things archaeology already knew existed can merely automate confidence.

## The composite surface lies about time

There is another kind of lie no positional standard can solve.

Features from different centuries coexist in one terrain model with identical brightness.

A road used in AD 300 can cross a field system from AD 900 beside a modern drainage ditch and an earlier mound. The DEM renders all four in the same present tense.

This is one of LiDAR's deepest rhetorical hazards.

Spatial completeness looks like temporal simultaneity.

A map full of houses, reservoirs, roads and platforms can quietly become an image of one enormous city even when archaeology shows those features accumulated across generations or centuries.

The point cloud measures the surviving surface now.

It does not date the surface.

Chronology has to come from excavation, stratigraphy, ceramics, radiocarbon, inscriptions or other independent evidence.

Population models are especially vulnerable to this error because structure counts invite multiplication. If every visible residential platform is treated as occupied at once, the map becomes a census that no sensor actually performed.

The correction is conceptually simple and empirically difficult: model contemporaneity explicitly.

Which features could plausibly overlap in time?

What occupation durations are assumed?

What fraction of mapped structures is residential?

How many people per household?

How much rebuilding occurred on the same platform?

The beautiful terrain image answers none of those questions.

## A better archaeological uncertainty stack

Every important LiDAR claim should be traceable through an uncertainty stack.

**Layer 1 — Sensor:** pulse density, scan geometry, positioning and instrument calibration.

**Layer 2 — Environment:** canopy, understory, water, slope, surface reflectance and occlusion.

**Layer 3 — Classification:** ground filtering, noise removal, breaklines and manual correction.

**Layer 4 — Surface construction:** interpolation, raster cell size, smoothing and derivative generation.

**Layer 5 — Detection:** human or machine candidate identification and confidence.

**Layer 6 — Archaeological validation:** field inspection, excavation, dating and functional interpretation.

**Layer 7 — Historical inference:** contemporaneity, population, political organization, land use and regional extrapolation.

The uncertainty usually grows as the claim climbs the stack.

Yet public narratives often reverse it.

A centimeter-scale elevation number becomes a confident sentence about a city, a kingdom or a million people.

The decimals survive while the assumptions disappear.

## Publish the support map

There is a simple reform I would like to see become normal.

For every spectacular bare-earth image, publish a companion uncertainty or support image.

Show ground-return density.

Show interpolation distance.

Show regions of weak classification confidence.

Show where field validation occurred.

Show which candidate features were confirmed, rejected or remain unvisited.

If a regional extrapolation depends on sampled flight lines, show the sample geometry against the region being modeled.

The reader should be able to distinguish **we looked and found nothing** from **the dataset could not see this feature class reliably here**.

Those statements have been conflated for too long.

## The point cloud does not actually lie

That title is unfair to the instrument.

The point cloud records returns according to the physics and engineering of the survey.

The lie appears when we ask the wrong layer of the system to answer a stronger question than it contains.

A coordinate is not a ground classification.

A ground classification is not a wall.

A wall is not a date.

A date is not a household count.

A household count is not a population estimate.

A population estimate is not a civilization theory.

LiDAR's great contribution to archaeology is that it exposes how much terrain we failed to see.

Its next contribution should be forcing us to quantify how much of the newly visible terrain we still fail to measure cleanly.

The discipline lies in keeping both revelations on the same map.