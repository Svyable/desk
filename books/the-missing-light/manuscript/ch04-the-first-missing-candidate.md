# The First Missing Candidate

The original disappearing-star experiment was almost comically simple to state: take an old catalogue, take a new survey, and ask which stars failed to show up for the second photograph.

In practice, the first candidate did what good anomalies often do. It became less impressive under scrutiny without becoming useless.

Beatriz Villarroel, Iñigo Imaz and Josefine Bergstedt proposed the approach in a 2016 Astronomical Journal paper. They selected millions of objects from USNO-B1.0, restricted the sample by proper motion, and searched for sources lacking counterparts in Sloan Digital Sky Survey images. The title announced the ambition openly: lost stars and impossible effects as probes of advanced extraterrestrial civilizations.

The paper is worth reading because it is much less breathless than the title. The authors visually inspected enormous numbers of mismatches and found spurious catalogue targets. One candidate remained interesting enough for follow-up, but uncertain. They explicitly stated that if the object were eventually found, the exercise would instead set a low empirical upper limit on disappearance events in the searched sample.

That willingness to let a candidate dissolve into a limit is exactly right.

The culture around anomalous phenomena often treats debunking as subtraction. In survey science it is measurement. If one million well-characterized stars fail to produce a genuine disappearance over a defined interval and detection threshold, the null result constrains event rates. A null is only empty when the denominator is unknown.

The 2016 study also exposed the main enemy: catalogue construction. USNO-B1.0 was not designed as a technosignature database. It combined detections from photographic surveys across epochs to estimate positions, magnitudes and proper motions. False entries and incorrect associations are unavoidable at some level in a catalogue that large. SDSS had different filters, depth, resolution and sky coverage. Comparing them is scientifically useful precisely because the instruments disagree in systematic ways, but every disagreement needs interpretation.

The pilot work therefore did two things at once. It introduced a strange search target and demonstrated why the target could not be searched naively.

A disappearing object should first be suspected of moving.

Proper motion is angular motion across the celestial sphere. Nearby stars can accumulate arcseconds or more of displacement across decades. A fixed-radius match centered on an old coordinate can therefore declare a perfectly healthy star missing. The solution is not merely to use a wider radius, because wider radii increase false associations in crowded fields. One needs motion models, color information, morphology, neighboring epochs and preferably modern astrometry.

A disappearing object should then be suspected of changing brightness.

Photographic plates and CCD surveys do not see identical spectral slices of the sky. A very red source can be relatively prominent on a red plate and weak in a bluer survey. Flares add another asymmetry. M dwarfs can brighten dramatically for short periods. An old plate that happened to integrate through a flare may record a source whose quiescent state is below the old survey limit, while a later survey may or may not detect it depending on band and depth.

Then there is the thing that never existed.

A single photographic detection is not equivalent to a persistent source. The 2016 project found that some catalogue entries were spurious when checked against the actual imagery. This sounds obvious after the fact, but it is a profound warning for automated astronomy: catalogues are interpretations of images, not the images themselves.

The plate is upstream of the row.

That sentence becomes more important as machine-learning systems inherit astronomical catalogues. A model can become exquisitely confident about a detection produced by a century-old defect if nobody returns to the pixel data. In anomaly research, provenance has to run all the way back through the data-reduction chain.

The first VASCO paper in 2020 expanded the experiment dramatically. Its candidate attrition confirmed many of the pilot lessons. Mismatches were enriched in redder and higher-proper-motion objects. Visual inspection killed huge numbers of candidates. The surviving one-epoch red sources became interesting not because they were immune to natural explanation but because they occupied a more stubborn region of parameter space.

The 2016 candidate itself is therefore not the hero of this book. The method is.

A good search is allowed to become less exciting as it improves.

That is a difficult cultural principle. Funding announcements reward novelty. Media reward mystery. Online communities reward persistence of the extraordinary interpretation. Science rewards elimination, which can look like failure from outside.

But consider the alternative. If a team begins with a proposed technosignature and every processing choice increases the number of candidates, something has gone wrong. The correct trajectory is usually the reverse. Better astrometry removes candidates. Deeper imaging removes candidates. Infrared data remove candidates. spectroscopy removes candidates. Plate inspection removes candidates. Known transient catalogues remove candidates.

If anything remains after that, it becomes interesting because of the bodies behind it.

The first missing candidate taught the search how to lose objects without losing the question.