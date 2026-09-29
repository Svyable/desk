# 13. How Much Silence Is Enough

There is no number of years after which a species becomes extinct by arithmetic.

The rule cannot be fifty years because a whale and a cave beetle do not leave the same kind of silence. It cannot be one generation because generation length says nothing by itself about detectability. It cannot be “no photographs since 1936” because the absence of a photograph is only evidence after we know how many genuine opportunities there were to take one.

The IUCN definition gets the logical structure right even if the word that matters most is difficult to operationalize. A taxon is Extinct when there is **no reasonable doubt that the last individual has died**. Presumed extinction requires exhaustive surveys in known or expected habitat, at appropriate times, across the historical range, for a period appropriate to the organism's life cycle and life form.

`Exhaustive` cannot mean literally every square metre.

It has to mean enough searching that a surviving population would probably have betrayed itself.

That changes the unit of evidence from **years since last confirmation** to **detection opportunity**.

Suppose a survey has probability `p` of detecting the species if the survival state under consideration is true. One clean negative result then has probability `1 - p` under that survival hypothesis. If five genuinely independent surveys each have the same detection probability, the chance that all five miss a surviving population is `(1 - p)^5`.

The arithmetic is easy.

The independence is not.

Five cameras on the same logging road are not five independent tests if the animal never uses logging roads. Ten winter surveys are not ten full-year tests if thylacines, were they alive, moved differently in summer. Five observer teams can share the same failure mode if all search the habitat the old literature made famous while the terminal population retreated somewhere else.

A useful extinction survey therefore needs a ledger of **where its detection probability comes from**.

Camera placement.

Area covered.

Season.

Operating time.

Downtime.

Trigger distance.

Body size and movement speed.

Vegetation density.

Animal density.

Home-range size.

Road and trail use.

Scat persistence.

eDNA shedding and degradation.

Observer classification error.

None of these is a philosophical variable. Each can be measured badly or well.

The thylacine adds a second difficulty: we care about more than one survival hypothesis.

`At least one individual remained alive in year t` is not the same claim as `a recoverable breeding population remained alive in year t`.

One old animal can hide almost anywhere until it dies.

A population has to do more work.

It must contain both sexes unless reproduction is already over. Individuals must find one another. Young must be produced. The population must consume prey, move through multiple home ranges, leave carcasses, scat, tracks and road-crossing opportunities, and persist through enough years that the same landscape is repeatedly occupied.

This is why **biological persistence** and **recoverable persistence** should be modeled separately.

A species can remain technically extant after conservation has become demographically hopeless. Declaring that species extinct would still be biologically wrong. But the decision value of another million-dollar targeted expedition is different if the only surviving state compatible with the accumulated nulls is one senescent animal.

This is also where the two major modern thylacine extinction analyses begin to look less contradictory.

Carlson, Bond and Burgio assembled confirmed evidence, expert-validated sightings and unconfirmed sightings and applied several extinction estimators, including a Bayesian approach that modeled valid and invalid sightings as separate processes. Their models clustered the likely extinction date near **1940**, with alternative estimates in roughly the late-1930s to early-1940s range.

Brook and colleagues objected to features of that treatment and later assembled a much larger database: **1,237 Tasmanian observational records from 1910 onward**. They scored record uncertainty and modeled the spatial contraction of the species as well as the temporal tail. A direct reading of the higher-quality records suggested persistence into roughly the 1940s–1970s. Their uncertainty model, using the full sighting database, allowed a much later tail—late 1980s to early 2000s in some analyses—with a small residual possibility in remote southwestern Tasmania.

Those are not two measurements of a hidden death certificate.

They are two inference systems.

Change the treatment of uncertain reports, false positives, spatial information and the sighting process, and the inferred tail moves.

That is not a reason to abandon modeling. It is a reason to demand that the next model ingest the kind of evidence the historical sighting record handles poorly: **survey effort and non-detection**.

The broader extinction-methods literature already points in that direction. An extinction posterior should update not only when a possible sighting arrives but when an unsuccessful survey occurs, weighted by how likely that survey was to detect the species if it remained extant. Search extent, timing, accessibility, method, observer skill and habitat coverage are data.

For the thylacine, the historical archive is asymmetrical.

We have many reports of things somebody saw.

We have much worse bookkeeping for all the times competent people, cameras, trappers, vehicles, hunters, road workers and field biologists were in plausible habitat and did **not** encounter a thylacine.

The denominator is missing.

That missing denominator is why “hundreds of sightings” and “decades with no body” can both sound decisive depending on which side of the argument is speaking.

They are numerator statements.

A proper modern search should be designed to manufacture the denominator the historical record lacks.

Consider cameras.

The useful unit is not the number of cameras. It is effective camera-days in habitat that a specified population model predicts the animal would use, corrected for failure and for detection distance. If twenty cameras run for a year but half are offline for four months, the nominal deployment tells the wrong story. If the cameras are all placed on roads and the target avoids roads, multiplying camera-days only multiplies one bias.

The same logic applies to eDNA.

A negative water or soil sample has almost no meaning unless the assay has a quantified probability of detecting thylacine DNA under the relevant shedding, transport, degradation and sampling conditions. Museum DNA can validate primer specificity. Spiked field controls can test inhibition and recovery. Neither by itself tells us how often a living thylacine would deposit detectable DNA into the sampled substrate.

Then there are false positives.

Tasmania's own historical record contains many serious post-1936 sightings. Mainland Australia provides an unusually valuable partial control because persuasive modern thylacine-like reports also occur in a landscape where the species disappeared roughly two millennia ago. That does not prove Tasmanian reports false—the habitats, observers and fauna differ—but it proves that high-confidence human testimony has a nonzero background rate even when actual persistence is essentially excluded by independent history.

A model of silence therefore needs both sides of the detection matrix:

**true-positive probability** — how likely the method is to register a thylacine if one is present;

**false-positive probability** — how often the method generates a thylacine-like signal when no thylacine is present.

Cameras, eDNA, tracks and people have different matrices.

That is useful because the methods can fail differently.

A blurry image and a contaminated DNA amplification are not the same error. A competent search gets stronger when a putative positive has to survive two physically independent channels.

Silence works the same way.

If a viable population would have a high probability of producing camera detections **and** recoverable DNA **and** road or track encounters, then a multi-year null across all three carries more weight than any one system alone. But the combined probability must respect shared dependence. Drought can reduce both eDNA persistence and animal movement. A road-avoidant population can weaken camera and track surveys simultaneously. A badly chosen geographic prior can poison every instrument in the project.

The model should therefore be written before the search, not after it.

Define several survival states:

- one residual individual;
- a tiny non-reproducing remnant;
- a minimally reproducing population;
- a larger persistent population capable of surviving for decades.

For each state, simulate spatial occupancy, movement, reproduction and expected evidence production. Then run the actual survey design through those simulated animals. How often does the design fail to see them?

That number is the meaning of a null.

If the survey misses a hypothetical reproducing population in thirty percent of simulations, failure to detect proves little.

If it misses in one percent, the null hurts that survival state badly.

If it almost always misses a single old individual but almost never misses a population large enough to have persisted since 1980, the result can simultaneously leave room for biological persistence and sharply reject recoverable persistence.

That is a better conclusion than a ceremonial extinction date.

The IUCN's caution exists for a reason. Declaring extinction too early can create the **Romeo error**: protection and funding disappear because a species believed gone was merely undetected. But refusing ever to let absence count is also an error. Conservation money is finite. Search programs can become rituals that consume resources long after plausible survival states have collapsed.

The solution is not a universal confidence threshold handed down from statistics.

It is decision analysis.

Low-cost passive detection can continue at very low posterior probability, especially when the instruments benefit other conservation work. A camera network that maps devils, quolls, feral cats and prey species can listen for a thylacine almost for free. Targeted helicopter searches, bespoke genetics campaigns or repeated expeditions need a stronger expected information gain.

The best search is therefore one whose null remains valuable after the ghost is gone.

It maps the living forest.

It calibrates false positives.

It measures detectability.

It leaves behind a time series another team can audit.

And it converts silence from a mood into a likelihood.

The question is not how many years have passed since 1936.

The question is: **if the population we claim might still exist were actually there, how surprising would this much well-measured silence be?**

That is the quantity extinction inference has been trying to ask all along.