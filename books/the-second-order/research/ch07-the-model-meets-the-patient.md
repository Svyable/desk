# Chapter 7 research — The Model Meets the Patient

## Core evidence

### Rich Caruana et al. — pneumonia prediction and the asthma treatment artifact

- **Source:** Rich Caruana, Yin Lou, Johannes Gehrke, Paul Koch, Marc Sturm, and Noémie Elhadad, “Intelligible Models for HealthCare: Predicting Pneumonia Risk and Hospital 30-day Readmission,” *Proceedings of the 21st ACM SIGKDD International Conference on Knowledge Discovery and Data Mining* (2015), pp. 1721–1730.
- **DOI:** https://doi.org/10.1145/2783258.2788613
- **Microsoft Research record:** https://www.microsoft.com/en-us/research/publication/intelligible-models-healthcare-predicting-pneumonia-risk-hospital-30-day-readmission/
- **Supports:** the chapter's concrete example in which pneumonia models learned that a history of asthma appeared to lower mortality risk because asthmatic pneumonia patients in the training data often received aggressive care, including direct ICU admission. The authors describe this as a dangerous pattern for a model intended to guide hospitalization decisions and explain why intelligibility helped expose and repair it.
- **Caution:** the paper reports a pattern in specific pneumonia datasets and does not imply that asthma is generally associated with lower pneumonia mortality or that all opaque models necessarily contain comparable treatment artifacts.

### Michael J. Fine et al. — pneumonia severity prediction as a treatment decision aid

- **Source:** Michael J. Fine, Thomas E. Auble, Donald M. Yealy, Barbara H. Hanusa, Lisa A. Weissfeld, Daniel E. Singer, Christopher M. Coley, Thomas J. Marrie, and Wishwa N. Kapoor, “A Prediction Rule to Identify Low-Risk Patients with Community-Acquired Pneumonia,” *New England Journal of Medicine* 336 (1997), pp. 243–250.
- **DOI:** https://doi.org/10.1056/NEJM199701233360402
- **PubMed record:** https://pubmed.ncbi.nlm.nih.gov/8995086/
- **Supports:** the chapter's background claim that pneumonia prediction rules were explicitly developed to identify patients at low risk of death and support hospitalization decisions, making the downstream treatment pathway part of the intended use of the prediction.
- **Caution:** the Fine rule itself is not presented as causing the asthma artifact discussed in the Caruana paper; the chapter uses the studies to explain the broader clinical decision context.

### Matthew Sperrin et al. — treatment drop-in and the treatment paradox

- **Source:** Matthew Sperrin, Glen P. Martin, Daniel S. McLachlan, Niels Peek, Iain E. Buchan, and Niels van Staa, “Using Marginal Structural Models to Adjust for Treatment Drop-in When Developing Clinical Prediction Models,” *Statistics in Medicine* 37(28), 2018, pp. 4142–4154.
- **DOI:** https://doi.org/10.1002/sim.7913
- **Open record:** https://pmc.ncbi.nlm.nih.gov/articles/PMC6282523/
- **Supports:** the chapter's explanation that models used to guide preventive treatment ideally need estimates relevant to the untreated or alternative-treatment scenario, while routine data contain patients who begin or change treatment after baseline. Ignoring those treatment changes can distort predictor-outcome relationships through the treatment paradox.
- **Caution:** marginal structural modeling is one family of methods for this problem, not a universal solution for every clinical prediction setting.

### Rolf H. H. Groenwold et al. — prediction meets causal inference

- **Source:** Rolf H. H. Groenwold, Karel G. M. Moons, Pajouheshnia R., and colleagues, “Prediction Meets Causal Inference: The Role of Treatment in Clinical Prediction Models,” *European Journal of Epidemiology* 35 (2020), pp. 619–630.
- **DOI:** https://doi.org/10.1007/s10654-020-00636-1
- **Open record:** https://pmc.ncbi.nlm.nih.gov/articles/PMC7387325/
- **Supports:** the chapter's distinction among predictions under observed care, untreated risk, and alternative treatment policies, and the warning that a model intended to inform treatment initiation can become miscalibrated if its estimand silently reflects treatment patterns from the development cohort.
- **Caution:** the methodological literature emphasizes defining the intended predictand before choosing an analysis strategy; the chapter does not imply that all useful clinical prediction requires causal modeling.

### Orestis Efthimiou et al. — prediction models should be tied to intended clinical decisions

- **Source:** Orestis Efthimiou, Michael Seo, Konstantina Chalkou, Thomas Debray, Matthias Egger, and Georgia Salanti, “Developing Clinical Prediction Models: A Step-by-Step Guide,” *BMJ* 386 (2024): e078276.
- **DOI:** https://doi.org/10.1136/bmj-2023-078276
- **Record:** https://www.bmj.com/content/386/bmj-2023-078276
- **Supports:** the chapter's broader design claim that a clinical prediction model should be defined in terms of its target population, intended users, outcome, setting, and especially the decisions the predictions are meant to inform. The paper also distinguishes discrimination, calibration, and clinical usefulness.
- **Caution:** this is methodological guidance rather than evidence that any specific deployed model improves patient outcomes.

## Falsification / counterevidence note

The chapter should weaken if treatment triggered by clinical risk factors or model outputs rarely changes the outcomes being predicted, if models developed under one care policy remain well calibrated after materially different treatment policies without adjustment, or if treatment-contaminated predictor relationships prove negligible in real deployment settings.

Counterevidence also matters in the other direction. Many clinical prediction models can remain useful without full causal identification when their purpose is explicitly to forecast outcomes under a stable care environment rather than to select an intervention. Accurate, interpretable risk stratification can improve care, and treatment-response feedback is often the intended mechanism. The narrower claim is that once predictions influence treatment, observed outcomes reflect both patient risk and the care induced by that risk; model evaluation and updating must account for that causal loop rather than treating the record as passive natural history.
