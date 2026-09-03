# Credit for the Known

A lender has a uniquely awkward relationship with evidence.

The lender wants to know whether an applicant will repay a loan. The most convincing way to observe repayment is to make the loan. By the time the answer arrives, the lender has already taken the risk it was trying to estimate.

This circularity has been part of credit scoring for decades. Practitioners have a name for the missing-outcome problem: reject inference.

A credit model is commonly built from borrowers whose loans were actually booked because those are the people for whom repayment behavior exists. Applicants who were declined have characteristics—income, credit history, requested amount, age of accounts, whatever the product lawfully and practically uses—but no repayment outcome on the loan that was never made. The population on which the model learns and the population to which the model will be applied are therefore different.

John Banasik and Jonathan Crook described the problem plainly in research on reject inference. Application scorecards are often estimated using accepted applicants only. If the rejected applicants differ in ways that matter for repayment, the model may be biased when applied to all applicants. Their work and a broader literature examine methods that try to infer what the rejected population might have done.

The phrase “reject inference” sounds more powerful than it is.

No statistical technique can observe the repayment history of a loan that did not exist. Methods can reweight, model, extrapolate, use semi-supervised information, exploit unusually broad samples, or make assumptions about the selection mechanism. The quality of the answer depends on those assumptions and the data available.

A 2021 review and formal analysis by Adrien Ehrhardt and colleagues makes the limits especially useful for this book. The authors examine common reject-inference methods in credit scoring and emphasize the hidden assumptions required to learn from rejected applicants. In their tests, no method was uniformly dominant. The abstract states the practical dilemma without drama: the score is learned on a dataset that excludes rejected applicants, so the population where the score is used differs from the learning population.

That is the unobserved world in a mature industry.

Credit is a good chapter to place after hiring because it prevents the exploration idea from becoming sentimental. Hiring an uncertain candidate can create upside for both employer and employee. Extending uncertain credit can do the same, but credit can also leave a borrower with debt they cannot service. A lender that “explores” recklessly is not intellectually adventurous. It is careless.

The action set has to be bounded by affordability, law, consumer protection, capital constraints, and product design before any learning objective is considered.

Within those bounds, however, the epistemic problem remains. A conservative lending policy can create strong repayment data partly because the policy selects people already likely to repay. That is good risk management. It is not proof that every person outside the boundary would have defaulted.

The difference matters when a lender tries to expand access.

Suppose a traditional score has little information about a person with a thin credit file. The absence may come from youth, immigration, use of cash, lack of previous borrowing, or a life spent outside the financial products that generate conventional bureau data. The lender has two problems at once. It has uncertainty about the person's repayment risk, and the financial system may have produced less information about this person precisely because they have had less access to credit.

A low-information applicant can look like a high-risk applicant if the model is not careful about the distinction.

Alternative-data lending arose partly from this gap. Daniel Björkegren and Darrell Grissen have studied the potential of digital credit to reach people excluded from conventional financial systems, using behavioral signals from mobile phones to predict repayment. Their work is not a blanket endorsement of alternative data; such systems raise serious questions about privacy, fairness, consent, and transferability. But they demonstrate an important route around the missing-evidence problem: find information generated outside the traditional gate.

External data can make an unobserved applicant more observable without requiring the lender to issue a blind loan.

This is a recurring strategy. When internal labels are selective, look for outcomes elsewhere.

A rejected applicant may borrow from another institution. A credit bureau may contain later performance. An employer can observe an applicant's career at another firm. A school can track students after alternative placements. A health system can sometimes link later diagnoses. External evidence does not perfectly answer the counterfactual, because contexts differ, but it can weaken the informational monopoly of the original decision.

Markets are particularly good at generating this kind of leakage. One lender rejects an applicant; another accepts them. The second lender's experience becomes evidence that can eventually influence underwriting across the market. Competition creates parallel experiments.

This is one of the strongest arguments for heterogeneity among lenders. If every institution uses the same score, the same threshold, and the same data, the industry may reject the same marginal applicants and learn little about them. If institutions use different defensible models and products, the market generates variation.

That variation must not come from unlawful discrimination or predatory lending. Different policies are useful only inside legitimate boundaries.

Product design can create safer forms of exploration. A lender uncertain about a customer may offer a smaller initial limit, a secured product, a shorter term, or a structure whose downside is bounded. As repayment evidence arrives, access can expand. This is not experimentation for its own sake. It is a way of making the information problem commensurate with the financial risk.

The principle appears throughout finance: stage commitment as evidence improves.

Venture investors fund rounds rather than the entire future of a company on day one. Project financiers use milestones and covenants. Trade creditors adjust terms. Insurers change limits and pricing as experience develops. The institution does not need certainty before acting; it needs a position sized to uncertainty.

That is an important alternative to the binary gate.

Many predictive systems create sharper categories than the underlying uncertainty justifies. Approve or decline. Pass or fail. Fund or reject. Interview or ignore. The binary output is operationally convenient, but it can make exploration expensive because learning requires crossing the whole threshold.

Graduated decisions create intermediate observations.

Credit is also a warning about feedback that arrives through economic conditions. A borrower who receives credit can use it to smooth consumption, invest in a business, handle an emergency, or build a payment history. The loan can improve the borrower's future financial state. It can also worsen it through interest, overextension, or a poorly designed product. The outcome is not merely a readout of an applicant's fixed “creditworthiness.”

The decision changes the person whose risk is being measured.

This complicates reject inference. What would a declined applicant have done if approved? The answer depends on the loan terms, amount, timing, servicing, economic environment, and what the borrower did with the money. There is no single latent default label sitting behind the rejection.

This is why the book's garden metaphor has to be used sparingly. The lender is not simply discovering who was a good seed. It is offering a financial contract that changes the environment.

Credit models nevertheless need outcomes. Default, delinquency, loss, early repayment, utilization, and profitability are measurable and essential. The danger comes when these outcomes are treated as pure traits of applicants rather than joint products of borrower, product, macroeconomy, and underwriting policy.

A risk score that works beautifully on one product may not transfer to another. A borrower who can service a $500 line may not service $5,000. A product with high fees can change repayment. A recession shifts defaults across the entire distribution. The label is conditional on a world.

This matters when models become self-reinforcing. Imagine an institution that tightens its cutoff after a period of losses. The next portfolio contains safer borrowers. Defaults decline. The model appears to improve. Management interprets the result as validation of the tighter cutoff.

Perhaps it is.

But part of the improvement is mechanical: the lender selected a different population. To know whether the old boundary was too loose or the new boundary is too tight requires comparing profitability and risk across policies, including business the lender no longer writes.

The opportunity cost of false negatives is hard to observe.

A declined borrower who would have repaid is not booked as a loss. They disappear from the revenue ledger. The lender can count defaults it made. It cannot directly count profitable loans it refused.

This is another general asymmetry. False positives often become visible because the institution acts and suffers. False negatives often vanish because the institution does nothing.

In hiring, a bad hire is painfully visible while a rejected star builds a career elsewhere. In science, a funded dead end consumes money while an unfunded breakthrough remains hypothetical. In medicine, an unnecessary test produces a bill while an untested disease may appear later under a different diagnosis. Decision systems therefore tend to have richer stories about the cost of saying yes than the cost of saying no.

The asymmetry makes conservative policies politically attractive.

A lender can explain a bad loan. It is harder to explain the growth it never had. A regulator can see consumer harm from reckless credit. It is harder to measure opportunity denied by overly restrictive underwriting. Both matter, but one leaves more immediate evidence.

This is why exploration should not be framed as looseness. The goal is not a lower standard. The goal is a better way of learning near uncertainty without placing unacceptable risk on borrowers or institutions.

Some of the most promising tools do not look like exploration at all. Better cash-flow data can reveal capacity that bureau history misses. Open banking can, with appropriate consent and safeguards, provide evidence of income and payment behavior. Small-dollar products can generate repayment history. Credit-building products can create labels where none existed. Randomized policy tests can compare underwriting changes on applicants already within a defensible range.

These methods change what is observable.

They also create new risks. Alternative data can become surveillance. A model can infer socioeconomic status from intimate behavior. Data sources can encode protected characteristics indirectly. Consumers may not understand how information is used. A system designed to widen access can become another opaque gate.

More observation is not automatically better governance.

That point becomes important as this book's thesis expands. The answer to unobserved outcomes is not total data collection. Privacy itself creates valuable unobservability. People are entitled to zones of life that lenders, employers, platforms, and governments do not inspect. The objective is not omniscience.

The objective is to recognize when the institution is treating missing evidence as negative evidence.

Credit scoring has wrestled with this problem long enough to make the humility visible. Reject-inference methods exist because practitioners know accepted-only data is selected. The literature is full of caveats because there is no magic technique for recovering rejected outcomes. Even studies using rare datasets where almost everyone was accepted find that common correction methods do not automatically improve performance.

That is a healthy scientific result.

It says the missing world is genuinely missing.

We can model it. We can use broader data. We can change the decision rule. We can create safer opportunities for observation. We can exploit natural variation. We can compare institutions. We can improve identification.

We cannot simply fill the blank with confidence.

The discipline has a practical implication for every model review. When a credit model performs well, ask where the labels came from. Which populations were historically approved? How has policy changed? Where does the current applicant population extend beyond the old support? Which variables are dense only among booked accounts? What happens near the cutoff? Are there external outcomes for declined applicants? Which rejected groups remain persistently unobserved?

These are not philosophical questions. They determine whether the model is extrapolating beyond the world it has seen.

The same review should ask about the cost of exploration. Can the lender create smaller, safer products for uncertain segments? Can it learn from other institutions or bureau histories? Can a policy trial be confined to applicants already near an acceptable risk boundary? Can uncertainty be priced without becoming exploitative? Can consumer outcomes, not only lender losses, be part of the feedback?

A system that asks only how to increase approval while controlling defaults can miss the larger design problem. Access, risk, information, and product structure are linked.

Credit makes that linkage impossible to romanticize.

The borrower is not an experiment. The lender is not a charity. The model is not an oracle.

The institution still has to decide under uncertainty.

The best it can do is know which part of the uncertainty came from the world and which part came from doors it closed before evidence had a chance to arrive.
