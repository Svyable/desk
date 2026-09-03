# Machines Underwrite Machines

The old underwriter had a desk.

The new underwriter has a data pipeline.

That sentence can make the transition sound more complete than it is. Insurance still depends on human judgment, regulation, distribution, claims knowledge, and domain expertise. Large commercial risks are often negotiated by people who understand the quirks of a particular factory, hospital, ship, board, or construction project.

But the direction is clear.

More insurance decisions are being made, assisted, triaged, priced, or monitored by models.

Credit history, driving behavior, property imagery, satellite data, sensor readings, claims patterns, weather, medical information, business characteristics, cybersecurity scans, fraud signals, and thousands of other variables can be processed at a scale no human underwriting department could replicate manually.

Artificial intelligence does not introduce the desire to distinguish good risks from bad risks.

Insurance has always wanted that.

AI changes the resolution.

This matters because pooling and segmentation pull in opposite directions.

The better the insurer becomes at predicting each individual's expected loss, the less hidden averaging remains inside the premium. A safer driver pays less. A riskier roof pays more. A company with strong cyber controls receives better terms. A building with verified flood mitigation becomes easier to insure.

This can look like fairness.

People should pay for the risks they bring.

It can also look like the erosion of insurance itself.

If the system becomes capable of identifying, with near certainty, exactly who will claim and how much, the high-risk person is no longer meaningfully pooled with the low-risk person. The premium approaches the expected loss plus expenses and capital.

The unlucky are accurately priced into unaffordability.

Insurance requires uncertainty to create solidarity.

Better prediction removes some uncertainty.

This is the demutualization problem in a broad sense: increasingly granular segmentation can reduce the cross-subsidies that make a pool socially useful.

European regulators have begun discussing this possibility explicitly. EIOPA's 2025 financial-stability work on AI in insurance noted that more granular risk segmentation could create demutualization pressures, alongside risks from common models, third-party dependencies, and correlated behavior.

The idea deserves more attention than it receives.

Artificial intelligence can improve insurance while making insurance less insurance-like.

Consider auto coverage.

A crude system prices a driver using age, location, vehicle, claims history, and a handful of categories. A telematics system measures acceleration, braking, mileage, time of day, routes, phone use, and other behavioral signals.

The second system may be more predictive.

It can reward safe driving rather than relying on demographic averages.

That seems attractive.

But prediction can become surveillance. The same stream that tells the insurer whether a driver brakes hard also reveals where the person goes, when, and how often. A risk-management relationship becomes a behavioral-data relationship.

The trade is not inherently illegitimate.

The customer can benefit from a lower price.

The danger is that insurance becomes one more justification for collecting intimate data because every new variable can potentially explain loss.

If data availability becomes a competitive advantage, the industry acquires an incentive to know everything.

The question is no longer whether a variable predicts risk.

It is whether the insurer should be allowed to use it.

This is where insurance regulation has always drawn lines.

Some distinctions are accepted. Others are restricted or prohibited. The rules vary by jurisdiction and product. Health insurance in the United States operates under different restrictions from life insurance. Auto rating variables are regulated differently from commercial cyber underwriting. Genetic information, race, sex, credit characteristics, location, and other factors can be treated differently depending on law and line.

AI makes these boundaries harder to enforce because a model can infer sensitive traits from apparently neutral variables.

A regulator can ban direct use of one characteristic.

A sufficiently flexible model can discover proxies.

This is not necessarily because the model is malicious. The model is searching for predictive structure.

Society has to decide which predictive structure is legitimate.

The distinction between prediction and causation matters here.

A variable can predict claims without causing them.

Living in a particular ZIP Code may correlate with risk because of road design, weather, crime, income, infrastructure, discrimination, healthcare access, or a dozen other mechanisms. A model optimizing predictive accuracy may not care which one.

Public policy should.

If the insurer uses a proxy for structural disadvantage, the model can reproduce inequality while claiming to price only risk.

This is why fairness in insurance cannot be solved by removing protected attributes from a dataset.

The model's outputs have to be tested.

The National Association of Insurance Commissioners' model bulletin on insurers' use of AI systems reflects this governance challenge. Adopted in 2023 and subsequently taken up by many states in varying forms, the bulletin expects insurers to establish governance, risk management, controls, testing, and documentation around AI use consistent with existing insurance law.

The approach is important because it does not treat AI as a regulatory vacuum.

An insurer cannot escape unfair-trade-practice, discrimination, privacy, claims, or market-conduct obligations merely by delegating a decision to software.

The machine is inside the regulated institution.

This sounds obvious.

It becomes harder when insurers buy models from vendors.

Third-party data and AI systems can create an accountability gap. The carrier makes the regulated decision. The vendor controls part of the model. The data may come from another company. The insurer may not have complete visibility into how the system was trained or why it generated a particular score.

The customer sees only the premium or denial.

Who can explain the decision?

Insurance has always used external data providers, credit scores, catastrophe models, medical exams, inspection reports, and specialized analytics. AI expands the scale and opacity of the dependency.

A regulated entity cannot outsource responsibility simply because the model is proprietary.

This principle will shape the insurance-technology market.

Vendors that cannot provide auditability, version control, data provenance, performance testing, and bias analysis may become harder for regulated insurers to use in consequential decisions.

Regulation can create demand for better engineering.

The same is true of security.

An underwriting model can be a target. A fraud system can be manipulated. A claims model can be poisoned by false data. A third-party AI service can expose policyholder information. An insurer that becomes dependent on one model provider creates operational concentration.

The machine underwriter must itself be underwritten.

This is one of the stranger loops of the coming decade.

Insurers will use AI to assess policyholders while purchasing cyber, errors-and-omissions, and operational-risk protection against their own AI systems.

Reinsurers will evaluate insurers' model governance.

Regulators will use AI to supervise insurers using AI.

Vendors will insure liabilities created by models that help price insurance.

Risk assessment becomes recursive.

The recursion can be productive if each layer asks a different question.

Does the model predict well?

Does it discriminate unlawfully?

Is it stable under changing data?

Can it be attacked?

Can a human override it?

Do overrides improve or degrade outcomes?

Can the insurer reconstruct the version used for a decision two years later?

Who is liable if the vendor changes the model?

These are governance questions disguised as technical requirements.

Claims will be the ultimate test.

A model can perform beautifully in a validation set and fail in the world because policyholders adapt, economic conditions change, weather shifts, fraudsters learn, or the insurer deploys it outside the context for which it was trained.

Insurance has a natural advantage here because claims produce feedback.

The company can compare predictions with realized loss.

But feedback can be distorted by underwriting itself.

If the model rejects certain customers, the insurer never observes what their claims would have been. If a high price causes low-risk customers to leave, the observed portfolio changes. If mitigation discounts induce safer behavior, the model's old relationship changes.

The prediction changes the population being predicted.

This is second-order risk.

Insurance has always lived with it. AI makes the loop faster.

The same loop appears in fraud detection. A model flags suspicious claims. Investigators focus on those claims. Fraudsters learn which patterns trigger review and change behavior. The model retrains. The system becomes an arms race.

A static accuracy score says little about long-run performance in an adaptive environment.

This should make insurers cautious about fully autonomous underwriting.

Automation is attractive because insurance contains enormous volumes of repetitive decisions. Straightforward personal-lines applications can be quoted in seconds. Claims can be triaged. Documents can be summarized. Images can estimate damage. Customer service can be automated.

The cost savings are real.

The danger is that the institution loses the ability to recognize exceptions.

Insurance is full of edge cases because life is full of edge cases.

A house looks high-risk in aerial imagery because trees are close, but the homeowner installed fire-resistant construction and a private suppression system the model cannot see. A business looks weak on an industry score but has unusually strong controls. A claim looks fraudulent because behavior is atypical, but the atypical behavior has an innocent explanation.

The model can be right on average and wrong in the case that matters to the person standing in front of it.

Appeals become part of model quality.

A good insurance AI system therefore needs more than predictive accuracy.

It needs contestability.

The customer should be able to correct bad data. The insurer should be able to explain material factors. A human reviewer should know when to override. The organization should track override patterns as evidence that the model may be missing something systematic.

This is not anti-automation.

It is how high-stakes automation earns durability.

The underwriting use of AI also creates a competition problem.

Large insurers have more claims data. Claims data improves models. Better models can improve pricing and selection. Better selection improves profitability, which funds more data and technology.

The loop favors scale.

Small carriers can buy external models, but then the vendor becomes a concentration point. A dominant catastrophe-model or AI vendor can influence prices across the industry. If many insurers use similar models, they may all withdraw from the same risks at the same time.

Independent companies can herd algorithmically.

EIOPA has highlighted this as a possible financial-stability issue: common AI models and third-party dependencies can create correlated behavior.

This is not only a capital-markets problem.

Imagine a new wildfire model causes many carriers to reclassify the same neighborhoods simultaneously.

Each company is acting independently.

The collective effect is a sudden availability crisis.

The regulator sees market coordination without collusion.

The model synchronized beliefs.

Insurance has faced related dynamics with catastrophe models for years. AI can spread them into more lines and decisions.

The solution is not model diversity for its own sake. Ten bad models are not safer than one good model.

The solution is epistemic diversity: independent validation, scenario testing, alternative assumptions, human expertise, and enough transparency to know when the industry is leaning on one shared forecast.

Model governance should include concentration governance.

The most interesting promise of AI in insurance is not more precise exclusion.

It is more precise prevention.

A model that can identify which roof improvements materially reduce loss, which cyber controls actually stop claims, which driving behaviors predict severe crashes, or which medical interventions prevent expensive deterioration can move underwriting from sorting toward intervention.

This is a better direction for the technology.

Instead of asking only, "Who is expensive?"

Ask, "What would make this risk cheaper?"

The answer creates a pathway.

A homeowner receives a premium reduction after verified mitigation. A business receives cyber capacity after fixing a control. A driver changes behavior. A factory installs monitoring. A municipal system improves drainage.

The model becomes a translator between prevention and price.

This can preserve pooling better than pure segmentation because it gives high-risk participants a way to change categories.

Some risks cannot be changed, of course. Genetics, age, disability, geography, and inherited property constraints raise questions that prevention cannot solve.

That is where social pooling remains necessary.

The future insurance system will likely use AI to become simultaneously more individualized and more political.

Every new predictive variable creates a technical opportunity and a governance question.

Should the factor be used?

Can the person change it?

Does using it improve safety or merely sort people?

Does the model create proxy discrimination?

Does the industry become more correlated by sharing it?

Does precision preserve the pool or dissolve it?

The machine underwriter can answer only the first-order question: what is likely to happen?

Insurance law and society still have to answer the harder one.

What should happen to the price when we know?