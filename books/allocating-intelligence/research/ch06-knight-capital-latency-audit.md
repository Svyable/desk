# Chapter 6 research audit — Knight Capital and the control-loop boundary

Checked September 13, 2026.

## Why this case belongs in Chapter 6

Chapter 6 uses Knight Capital to argue that a nominally responsible human can be temporally outside a fast system's control loop. That is directionally useful, but the current prose compresses a much more interesting record into "old code + forty-five minutes + $460 million." The SEC's enforcement order supports a narrower and stronger claim: Knight's failure was not that machine speed made control impossible. It was that several controls that could have acted at machine or pre-market speed were absent, misconfigured, disconnected from the relevant account, or not treated as operational alerts, while the live human response made the incident worse.

That distinction matters for the book. The case supports **temporal architecture**, not technological fatalism.

## Primary record

### SEC administrative order, October 16, 2013

*In the Matter of Knight Capital Americas LLC*, Exchange Act Release No. 70694.

- Order PDF: https://www.sec.gov/files/litigation/admin/2013/34-70694.pdf
- SEC enforcement summary: https://www.sec.gov/newsroom/press-releases/2013-222
- Market Access Rule overview: https://www.sec.gov/rules-regulations/2011/06/risk-management-controls-brokers-or-dealers-market-access

### What the order establishes

Knight deployed new Retail Liquidity Program code to its SMARS router beginning July 27, 2012. One technician failed to copy the new code to one of eight servers. Knight had no second-technician deployment review and no written procedure requiring one. Dormant "Power Peg" code remained callable on the eighth server.

When eligible orders arrived on August 1, the seven correctly updated servers behaved as intended. The eighth invoked Power Peg. A cumulative-quantity function that once stopped routing after a parent order was filled had been moved years earlier, and the dormant code had not been retested after that change. The server therefore continued sending child orders without regard to executions already received.

For 212 incoming parent orders processed by the defective code, SMARS generated millions of child orders and produced more than four million executions in 154 stocks for more than 397 million shares in about 45 minutes. Knight accumulated roughly $3.5 billion net long and $3.15 billion net short positions and ultimately lost more than $460 million.

Before the 9:30 a.m. open, beginning around 8:01 a.m., an internal system generated 97 automated emails referencing SMARS and the error "Power Peg disabled." The SEC explicitly says these messages were **not designed as system alerts**, and personnel generally did not review them on receipt. They nevertheless represented an opportunity to identify the deployment failure before the market opened.

During the incident, Knight personnel attempted diagnosis in the live environment. One intervention removed the correctly deployed new code from the seven good servers. That exposed dormant Power Peg code there too and **worsened the problem**.

The SEC also found that Knight's controls did not adequately prevent orders exceeding capital thresholds, that the account receiving the erroneous executions was not linked to automated controls for Knight's overall financial exposure, and that Knight lacked adequate incident-response procedures.

## The counterargument the manuscript should preserve

Knight is not good evidence for the proposition that human comprehension simply cannot keep up with fast machines. The SEC's case is almost the opposite: several narrow, fast, and already-legible controls could have prevented or bounded the event.

Rule 15c3-5, adopted before the incident, required broker-dealers with market access to maintain risk-management controls reasonably designed to prevent orders exceeding preset credit/capital thresholds or appearing erroneous. The SEC's Knight action was its first enforcement case under that rule.

The useful contrast is therefore not **human speed versus machine speed**. It is among:

1. controls that operate before or at the speed of consequential action;
2. observability that makes abnormal state legible to operators;
3. live diagnosis after the system has already entered an unfamiliar failure mode.

Knight was weak at all three. The third layer then made the first failure worse.

## Safe manuscript claims

- "In about forty-five minutes" is supported.
- "$460 million loss" is supported.
- Prefer "more than four million executions" over "millions of orders" when describing the SEC's quantified market outcome; the order separately says SMARS sent millions of child orders.
- Prefer "97 automated emails" or "97 error emails" over "97 alerts." The SEC says Knight did not design them as system alerts.
- The seven-of-eight-server deployment failure is supported.
- The remediation attempt that removed correct code from the seven good servers and worsened the event is supported.
- The case supports the claim that **known failure classes should be constrained before consequence outruns diagnosis**.

## Claims to avoid

- Do not say one bad algorithm autonomously lost $460 million. The SEC describes interacting deployment, dormant-code, testing, monitoring, capital-control, account-linkage, and incident-response failures.
- Do not say no safeguards existed. Some controls existed; the problem was their design, coverage, linkage, review, and response.
- Do not imply a human-in-the-loop approval step would necessarily have solved the problem. The required control could have been automated and narrower than human review.
- Do not treat the 97 emails as proof that personnel consciously ignored 97 urgent warnings.

## Editorial opportunity

A later prose revision should make the scene do more work and cut some of the chapter's subsequent catalog of generic controls. The most revealing sequence is compact:

**one server missed the deployment → dormant code became live → 97 pre-open error emails failed to function as alarms → market-speed execution accumulated exposure → humans diagnosed inside the live system → one attempted fix spread the bad path to the seven previously correct servers.**

That sequence gives Chapter 6 a concrete version of its strongest idea: speed changes what kind of cognition belongs where. Pre-market deployment verification, machine-speed exposure limits, operator-visible alarms, and slower causal diagnosis are different cognitive jobs. Asking one layer to substitute for all the others is the design failure.

## Falsification / narrowing test

The chapter's broader temporal claim should narrow if fast autonomous systems with materially consequential actions show no improvement in loss containment from precommitted machine-speed constraints, high-salience state observability, or rehearsed degraded modes compared with systems relying mainly on post-hoc human diagnosis. Knight alone cannot establish the general effect; it supplies a mechanism-rich historical case.