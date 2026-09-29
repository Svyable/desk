# Research audit — the paddlefish behavior boundary

## Scope

One bounded audit of Chapter 1's strongest empirical bridge: laboratory-added electrical noise → improved paddlefish feeding behavior → naturally useful environmental noise. This note does not revise the manuscript. It records what the primary paper supports, where the opening currently outruns it, and the countermodel later drafting must be able to defeat.

## Primary record checked

Russell, Wilkens & Moss, “Use of behavioural stochastic resonance by paddle fish for feeding,” *Nature* 402, 291–294 (1999), DOI: https://doi.org/10.1038/46279.

The paper's central result is real and unusually concrete. Juvenile paddlefish fed on *Daphnia* in a recirculating swim mill while experimenters passed externally generated electrical noise through plate electrodes. At an intermediate applied-noise amplitude, the spatial distribution of feeding strikes broadened: fish struck at prey from farther away than in the no-noise condition. Higher noise did not continue helping. The paper therefore supports a behavioral stochastic-resonance result under the tested conditions, not merely a receptor-level effect.

The same paper also reports details that should constrain the narrative. The authors say optimal noise did **not** affect capture rate in two fish even though those fish showed increased spatial variance of strike locations. They report no significant effect of the applied noise on a separate U-turn behavior, and they tested an alternative explanation—that the field caused *Daphnia* to emit larger electrical signals—without finding a significant change in the prey's measured electrical signature under that test. These controls make the experiment better, but they also show why “feeding improved” needs a named metric rather than a general performance verb.

Primary link: https://www.nature.com/articles/46279

## Natural-noise claim: keep one missing step visible

Russell et al. also measured electrical activity from *Daphnia* populations and concluded that swarms are a natural source of electrical noise. That is evidence that the animal's environment contains biologically generated fluctuations in the relevant sensory domain.

It is **not yet the same experiment** as demonstrating that a natural *Daphnia* swarm causally improves an individual prey capture through stochastic resonance. The behavioral manipulation used an external electronic noise generator. The paper joins two observations—laboratory noise can broaden strike range, and prey populations generate electrical noise—and interprets the combination as evidence that stochastic resonance may be an evolutionary adaptation.

That interpretation is plausible and comes from the investigators themselves, but the manuscript should not silently upgrade it into a field-demonstrated ecological feedback loop. The sentence “The prey population could help create the conditions under which an individual prey item became easier to detect” is appropriately modal; later chapters should preserve that modal status unless a direct natural-swarm manipulation or field experiment closes the causal bridge.

## Follow-up model checked

Greenwood, Ward, Russell, Neiman & Moss, “Stochastic Resonance Enhances the Electrosensory Information Available to Paddlefish for Prey Capture,” *Physical Review Letters* 84, 4773–4776 (2000), DOI: https://doi.org/10.1103/PhysRevLett.84.4773.

This paper calculates the information content of noisy *Daphnia* signals at the paddlefish rostrum using an exact statistical treatment of threshold stochastic resonance as a **minimal neural model**, then compares the calculations with the observed strike data. It strengthens the quantitative threshold account. It should not be described as an independent behavioral replication: it is a model applied to the earlier behavioral experiment.

Primary link: https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.84.4773

## Strongest counterargument

The paddlefish result may demonstrate a bounded laboratory effect without establishing a generally advantageous ecological strategy.

A fish in the experiment did not choose the noise level. Investigators supplied it. The useful regime was intermediate rather than monotonic. Some measured behavioral outcomes did not improve. Natural prey swarms may generate fluctuations whose amplitude, spectrum and geometry vary with density and distance. If the beneficial regime is narrow, unstable, or only discoverable retrospectively after looking at the response curve, then “recruit the environment” becomes much less transferable to an engineered field sensor.

The strongest conventional engineering model therefore is not simply “remove all noise.” It is: estimate the local background, preserve useful signal bandwidth, adapt thresholds or filters, and inject noise only if a prospective controller can show net information or decision gain over those alternatives. That model is allowed to win.

## Quantitative burden for the manuscript

For the paddlefish case, later drafting should extract from the full figures and methods: number of fish and strikes by condition; exact applied-noise amplitudes and bandwidth; change in strike-distance/spatial-variance distributions; capture-rate results by fish; individual variability; high-noise degradation; *Daphnia* population-noise amplitude/spectrum versus the experimentally optimal regime; and whether any later experiment directly manipulated natural swarm density/noise while holding prey opportunity constant.

The decisive ecological comparison is not “does a swarm make electrical noise?” It is whether naturally occurring fluctuations place the fish in a beneficial operating regime often enough to improve ecologically meaningful performance after prey density itself is controlled.

## Editorial consequence

Chapter 1's best narrative engine survives, but it becomes sharper if it refuses to let one seductive word—“improved”—cover several outcomes. The fish could strike over a broader region without every fish capturing more prey. The experimenters could tune an electronic field; the river cannot. A *Daphnia* swarm can be both signal source and background source, but its causal contribution to stochastic-resonance feeding needs to be demonstrated rather than inferred.

That distinction gives the later defense comparison a harder and more useful question: not whether noise can help a threshold system, but whether a fielded system can identify and stay near the helpful regime **prospectively**, while the target, background and adversary all move.

## Publication hold

Do not write that natural *Daphnia* swarm noise was experimentally shown to improve paddlefish capture unless a direct causal study is recovered. Do not use Greenwood et al. 2000 as an independent behavioral replication. When describing the 1999 result, name the improved metric—spatial detection/strike range or distribution—rather than implying uniform improvement in capture rate.
