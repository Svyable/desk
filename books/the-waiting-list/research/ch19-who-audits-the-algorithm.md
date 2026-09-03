# Chapter 19 research — Who Audits the Algorithm

## Core claim

An allocation mechanism should not be judged only by its stated rule or by whether its code executes as designed. It should also be judged by whether the institution can show that the deployed system uses the intended criteria, produces outcomes within legal and policy boundaries, remains understandable enough to investigate, and is monitored after launch.

The strongest chapter should resist the idea that “algorithm audit” names one mature profession with one settled method. In 2026, the landscape is still fragmented: some audits are legally required, some are voluntary risk-management exercises, some focus on disparate impact, some on documentation and process, and some on technical robustness or traceability. The important question is what evidence an audit can actually provide — and what it cannot.

## Current verified evidence — September 2026

- **New York City requires a specific kind of employment bias audit before certain automated employment decision tools may be used.** NYC Local Law 144 prohibits an employer or employment agency from using a covered automated employment decision tool unless it has undergone a bias audit within the prior year, a summary of the audit results is publicly available, and required notices are provided to candidates or employees. DCWP began enforcement on July 5, 2023. Source: NYC Department of Consumer and Worker Protection, current AEDT page, rechecked September 2026, https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page
+- **The NYC requirement is not a general certification that a tool is fair.** The law and implementing rules focus on specified selection-rate and impact-ratio calculations for covered categories and on public disclosure/notice requirements. A successful audit therefore shows compliance with a defined testing regime; it should not be described as proof that the entire hiring process is unbiased or that every source of discrimination has been eliminated. Source: same DCWP materials and implementing rule.
+- **Existing U.S. employment-discrimination doctrine already treats the whole selection process as relevant.** EEOC guidance on the Uniform Guidelines on Employee Selection Procedures explains that adverse impact is first assessed for the total selection process and, where adverse impact exists, individual procedures may need further analysis and validation. This predates modern AI systems but is useful precisely because it prevents the chapter from pretending algorithmic hiring created the underlying legal problem. Source: EEOC, “Questions and Answers to Clarify and Provide a Common Interpretation of the Uniform Guidelines on Employee Selection Procedures,” https://www.eeoc.gov/es/node/130157
+- **AI tools can create disability discrimination even if group-rate audits look acceptable.** EEOC and DOJ warned in 2022 that software and AI used in hiring can violate the Americans with Disabilities Act, including when a tool screens out qualified people with disabilities or fails to provide reasonable accommodation. This is an important limit on audits that focus narrowly on race/sex selection ratios. Source: EEOC, May 12, 2022, https://www.eeoc.gov/newsroom/us-eeoc-and-us-department-justice-warn-against-disability-discrimination
+- **NIST’s AI Risk Management Framework is broader than a one-time audit and explicitly voluntary.** AI RMF 1.0, released January 26, 2023, organizes risk management around Govern, Map, Measure, and Manage. The companion Playbook, updated June 2026, emphasizes ongoing, contextual risk management rather than treating one predeployment test as sufficient. NIST describes the framework as voluntary and use-case agnostic. Sources: NIST AI RMF, https://www.nist.gov/itl/ai-risk-management-framework and NIST AI RMF Playbook, https://www.nist.gov/itl/ai-risk-management-framework/nist-ai-rmf-playbook
+- **The EU AI Act is creating a different model built around documented obligations, traceability, oversight, and risk management, but the timeline matters.** The Act became generally applicable on August 2, 2026, while the current Commission implementation timeline places many Annex III high-risk obligations — including systems used in employment, education, migration, and other sensitive areas — on December 2, 2027 after the 2026 AI Omnibus changes. The Commission lists requirements such as risk assessment and mitigation, data quality, activity logging, documentation, deployer information, human oversight, robustness, cybersecurity, and accuracy. Do not write as if the full high-risk regime is already enforceable in September 2026. Source: European Commission, current AI Act implementation page, https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai
+- **Some AI Act transparency obligations are already live.** Article 50 transparency requirements apply from August 2, 2026 for covered uses, with limited transitional treatment for some pre-existing systems. Enforcement is primarily through national market-surveillance authorities, with specific AI Office roles in defined cases. Source: European Commission, Article 50 transparency FAQ, https://digital-strategy.ec.europa.eu/en/faqs/transparency-obligations-under-article-50-ai-act
+- **Colorado illustrates how fast the regulatory target is still moving.** The state’s 2024 AI law was later revised. Senate Bill 26-189, signed in May 2026, repealed and reenacted the relevant automated-decision provisions with new requirements, effective January 1, 2027. The Colorado Attorney General is conducting rulemaking in 2026. This is useful counterevidence against writing as though U.S. algorithm-audit law has converged on one stable national model. Source: Colorado Attorney General, current ADMT rulemaking page, https://coag.gov/ai/

All current sources above were rechecked in September 2026.

## Mechanism-design distinctions for the chapter

- **Auditing the code is not the same as auditing the allocation system.** A model can execute exactly as specified while the institution has chosen bad targets, biased training data, inappropriate thresholds, incomplete eligibility rules, or a harmful workflow around the model. The relevant unit of analysis may be the end-to-end selection process rather than the model alone.
+- **Outcome disparity is evidence, not a diagnosis.** A large impact difference can reveal a problem worth investigating, but the statistic alone does not identify the causal mechanism. Conversely, acceptable aggregate ratios do not prove the absence of individual discrimination, disability-access problems, proxy effects, or harms outside the measured categories.
+- **Process audits and outcome audits answer different questions.** Documentation, logs, governance, human-oversight procedures, incident reporting, and change control can show whether an institution has a disciplined process. Statistical outcome testing can show patterns in decisions. Neither automatically substitutes for the other.
+- **A predeployment audit can expire morally before it expires legally.** Data distributions, applicant behavior, institutional policy, model versions, thresholds, vendors, and surrounding workflows change. A system that passed a test last year can drift. Monitoring and re-audit cadence therefore belong to the design, not merely compliance paperwork.
+- **Independence matters, but independence is not omniscience.** An external or structurally independent auditor may reduce conflicts of interest. The auditor still depends on the audit scope, available data, access rights, legal definitions, sampling choices, and test methodology. “Independent” should not be used as a synonym for “complete.”
+- **Public disclosure can improve accountability without revealing the whole mechanism.** NYC requires public summaries of covered bias audits. This gives candidates, workers, regulators, and researchers more information than a private compliance file, but summary statistics still provide only a partial view of the allocation process.
+- **Human oversight is itself auditable.** If an institution says a human can override a model, the chapter should ask how often overrides occur, in which direction, under what policy, and whether the human stage corrects or reproduces the same disparities. A nominal human-in-the-loop is not automatically meaningful oversight.
+- **The most important audit question is often whether the deployed mechanism matches the stated mechanism.** Did the institution use the variables it promised? Did prohibited or deprecated inputs remain accessible through proxies? Did staff route around the system? Did a new model version change outcomes? Did the allocation rule drift because operational pressure changed how people used it?

## Strong counterevidence

- **Audits can create useful discipline even when they are imperfect.** Requiring a defined test, public summary, documentation, or recurring review can force organizations to collect data they previously ignored and create a record that regulators, workers, applicants, or internal teams can challenge.
+- **Perfect transparency can conflict with privacy, security, trade secrets, and anti-gaming needs.** An audit regime that requires every feature weight, threshold, or source record to be public may expose sensitive applicant information, allow strategic manipulation, or reveal legitimate proprietary details. Accountability therefore needs access rules, not a simplistic demand that all internals be public.
+- **Not every disparity is proof of illegal discrimination.** Outcome differences can reflect many stages of a process and require causal and legal analysis. The chapter should not turn impact ratios into automatic verdicts.
+- **A fully manual process can be less auditable than an algorithmic one.** Software can create logs, reproducible versions, fixed rules, and measurable outputs that informal human discretion often lacks. The right comparison is not “algorithm versus perfect human judgment” but one real mechanism versus another.
+- **Regulation can freeze immature metrics.** If a law defines one narrow audit calculation, organizations may optimize to that test while missing other harms. Compliance can become a ceiling instead of a floor if institutions confuse the mandated metric with the whole fairness problem.
+- **Audit burden can affect smaller organizations differently.** Extensive documentation, testing, and third-party review can be easier for large firms to absorb. A good governance regime needs proportionality without turning smaller scale into an excuse for consequential systems to escape scrutiny.

## Falsification notes

Do not say NYC Local Law 144 requires every AI hiring system to be audited. It applies to covered automated employment decision tools as defined by the law and rules.

Do not say a NYC bias audit proves a tool is unbiased or legally safe in every respect. The required audit addresses defined disparate-impact calculations and disclosure obligations; other discrimination theories and workflow harms remain possible.

Do not say NIST AI RMF is mandatory federal law. NIST explicitly describes AI RMF as voluntary guidance.

Do not say the EU AI Act’s full Annex III high-risk regime is already in force in September 2026. Current Commission materials place those obligations on December 2, 2027 after the 2026 timeline changes, while other AI Act provisions are already applicable.

Do not describe Colorado’s original 2024 AI Act as the current final operative text without noting the 2026 repeal-and-reenactment and January 1, 2027 effective date.

Do not treat “human in the loop” as evidence that a system is safe or fair without examining what the human can see, what authority the human has, and how the override is used in practice.

Do not imply statistical parity is the only legitimate fairness objective. Different allocation systems may have lawful and normatively defensible reasons for different outcomes; the audit still needs to test whether those reasons match stated policy and applicable law.

## Strong chapter tension

The easiest version of this chapter would say that opaque algorithms need independent audits.

That is true and insufficient.

The more interesting problem is that every audit must itself choose an allocation of attention.

Which groups are measured?

Which outcomes count?

What comparison population is used?

Is the audit testing code, data, process, outcomes, governance, or all five?

How much access does the auditor receive?

What happens when the mechanism changes the week after the audit?

Who sees the results?

Who can force remediation?

An audit is therefore another mechanism layered onto the first one.

New York City offers a concrete case where a law forces a recurring statistical test and public disclosure for covered employment tools. NIST offers a broader voluntary governance model built around ongoing risk management. The EU is moving toward a more comprehensive regulatory architecture with documentation, logging, oversight, and risk obligations, but its high-risk implementation is still phased. Colorado shows that the U.S. state-law architecture is still changing underneath organizations trying to comply.

The chapter should land on a narrower principle: an allocation system deserves confidence only when its operators can produce evidence about how it works in practice, not merely explain what it was intended to do.

That creates the handoff to Chapter 20. Once we know how to inspect a waiting list, lottery, priority rule, match, or AI-assisted decision system, what principles should we use to build a better one in the first place?
