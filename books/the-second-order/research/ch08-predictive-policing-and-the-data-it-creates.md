# Chapter 8 research — Predictive Policing and the Data It Creates

## Core evidence

### Kristian Lum and William Isaac — Oakland drug arrests and predictive reinforcement

- **Source:** Kristian Lum and William Isaac, “To Predict and Serve?” *Significance* 13(5), 2016, pp. 14–19.
- **DOI:** https://doi.org/10.1111/j.1740-9713.2016.00960.x
- **Publisher record:** https://academic.oup.com/jrssig/article/13/5/14/7029190
- **Supports:** the chapter's Oakland example. Lum and Isaac compared Oakland drug-arrest records with estimates derived from a demographically representative synthetic population and the National Survey on Drug Use and Health, finding police-recorded drug incidents far more geographically concentrated than the independent estimate of drug use. Applying a predictive-policing algorithm to the police data reproduced those concentrations and disproportionately targeted Black residents in their simulation.
- **Caution:** their independent estimate is not a complete local ground-truth census of drug offenses. Critics have noted that a drug user's home location is not necessarily the location of drug activity. The chapter therefore uses the study as evidence of a plausible observation/enforcement mismatch, not proof of the exact spatial distribution of every drug offense in Oakland.

### Danielle Ensign et al. — runaway feedback loops

- **Source:** Danielle Ensign, Sorelle A. Friedler, Scott Neville, Carlos Scheidegger, and Suresh Venkatasubramanian, “Runaway Feedback Loops in Predictive Policing,” *Proceedings of Machine Learning Research* 81 (2018), pp. 160–171.
- **Record:** https://proceedings.mlr.press/v81/ensign18a.html
- **Supports:** the chapter's distinction between reported incidents and police-discovered incidents and the claim that patrol allocation can create selective observation. Their mathematical model shows how systems updated from discovered incidents can repeatedly send police back to the same areas even when underlying crime rates do not justify the concentration.
- **Caution:** the runaway-loop result is produced in a formal model with explicit assumptions. It demonstrates a mechanism and conditions under which feedback occurs; it is not evidence that every real predictive-policing deployment necessarily enters a runaway loop.

### Danielle Ensign et al. — decision making with limited feedback

- **Source:** Danielle Ensign, Sorelle Friedler, Scott Neville, Carlos Scheidegger, and Suresh Venkatasubramanian, “Decision Making with Limited Feedback,” *Proceedings of Machine Learning Research* 83 (2018), pp. 359–367.
- **Record:** https://proceedings.mlr.press/v83/ensign18a.html
- **Supports:** the broader claim that predictive policing belongs to a class of deployed decision problems where actions influence which future labels become observable. The paper frames predictive policing and recidivism prediction as partial-monitoring problems rather than ordinary batch prediction.
- **Caution:** the paper develops an abstract learning framework rather than measuring a specific police department's outcomes.

### George O. Mohler et al. — randomized field trials and counterevidence

- **Source:** George O. Mohler, Martin B. Short, Sean Malinowski, Mark Johnson, George E. Tita, Andrea L. Bertozzi, and P. Jeffrey Brantingham, “Randomized Controlled Field Trials of Predictive Policing,” *Journal of the American Statistical Association* 110(512), 2015, pp. 1399–1411.
- **DOI:** https://doi.org/10.1080/01621459.2015.1077710
- **Open record:** https://escholarship.org/uc/item/1br4975j
- **Supports:** the chapter's counterevidence that algorithmically guided hotspot patrol can improve operational deployment and reduce crime under some conditions. In randomized trials in Los Angeles and Kent, the ETAS forecasts predicted more crime than analyst-generated hotspot maps, and algorithm-directed patrol was associated with crime reductions as a function of patrol time.
- **Caution:** these trials evaluate specific dynamic hotspot forecasting and patrol protocols. They do not establish that all forms of predictive policing, especially person-based risk scoring or systems trained on highly enforcement-dependent data, are effective or equitable.

### U.S. Department of Justice — contemporary policy context

- **Source:** U.S. Department of Justice, Office of Legal Policy, *Artificial Intelligence and Criminal Justice: Final Report*, December 3, 2024.
- **Record:** https://www.justice.gov/olp/media/1381796/dl?inline=
- **Supports:** the chapter's broader contemporary framing that AI and predictive analytics in criminal justice can reproduce disparities when historical data reflect unequal exposure to enforcement and that design and governance need to consider those downstream effects.
- **Caution:** this report is policy analysis, not an experimental estimate of predictive-policing effectiveness.

## Falsification / counterevidence note

The chapter should weaken if patrol allocation has little effect on which offenses are discovered, if predictive systems trained on police-generated data reliably recover underlying crime patterns despite large differences in observation intensity, or if independent data consistently show that recorded incidents are representative of underlying offenses across crime types and neighborhoods.

The chapter should also weaken if algorithm-directed patrol consistently reduces victimization without concentrating intrusive police contact, creating displacement, or distorting future data. Mohler et al.'s randomized trials are therefore important counterevidence: predictive deployment can generate real public-safety benefits under some designs. The narrower claim is that predictive policing becomes methodologically hazardous when the same allocation decision controls both where police act and where future training labels are discovered; systems need evaluation designs and data sources that can distinguish crime patterns from patterns in police observation.
