# Research audit — Knight Capital and the control boundary

This audit is for Chapter 1, “Forty-Five Minutes.” Its purpose is to keep the Knight Capital opening from carrying more argumentative weight than the SEC record supports.

## What the primary record establishes

The best source is the Securities and Exchange Commission’s October 16, 2013 administrative order in *In the Matter of Knight Capital Americas LLC*, Exchange Act Release No. 70694. Knight consented to the order without admitting or denying the findings except as to jurisdiction, so manuscript language should say that the SEC found or that the order states, rather than treating every detail as an adjudicated fact.

Primary order: https://www.sec.gov/Archives/edgar/data/1569391/000119312513401173/d613486dex101.htm

The failure was more specific than “a bad deployment activated old code.” Knight’s SMARS router ran on eight servers. In preparation for the NYSE Retail Liquidity Program, Knight deployed new code beginning July 27, 2012. One technician failed to copy the new code to one of the eight servers. There was no required second-person review, and Knight had no written procedure requiring one. The other seven servers received the code correctly.

The missed server still contained callable legacy functionality called Power Peg. Knight had stopped using Power Peg in 2003. In 2005 it moved the cumulative-quantity function that had told Power Peg when a parent order was fully filled, but it did not retest Power Peg after that change. The 2012 RLP work then repurposed the flag that had once invoked Power Peg. On the seven updated servers the flag invoked the intended new RLP behavior. On the eighth, it invoked the old, now-defective code.

That distinction matters narratively. The accident was not an unknowable emergent behavior. Seven machines were doing the intended thing while one was doing something different for a historically legible reason.

For the 212 incoming parent orders processed by the defective code, SMARS sent millions of child orders. Those orders produced more than four million executions in 154 stocks and more than 397 million shares in approximately forty-five minutes. Knight accumulated an approximately $3.5 billion net long position in 80 stocks and an approximately $3.15 billion net short position in 74 stocks, ultimately realizing a loss of more than $460 million.

The market impact was not confined to Knight. The SEC found that in 75 stocks Knight’s executions represented more than 20 percent of trading volume and contributed to price moves greater than five percent. In 37 of those stocks, Knight represented more than half the trading volume and the price moved more than ten percent.

## The warnings were real, but “97 alerts” overstates what they were

Beginning at about 8:01 a.m., an internal Knight system generated 97 automated emails before the 9:30 market open. They referenced SMARS and carried the error description “Power Peg disabled.” The messages were caused by the deployment failure and, in the SEC’s view, created an opportunity to diagnose the problem before the open.

But Knight had not designed those messages as system alerts, and personnel generally did not review them as they arrived. The manuscript should therefore avoid the seductive formulation that Knight “ignored 97 alerts.” It received 97 machine-generated error emails that contained useful evidence but were not embedded in an operational alerting process.

That is actually more useful for *Breakneck*. The failure was not absence of telemetry. It was failure to turn telemetry into an organizational interrupt.

The 97 messages also came from pre-market RLP-eligible orders distinct from the 212 parent orders that later produced the erroneous executions. This is worth preserving because it prevents the chapter from accidentally making the morning chronology cleaner than the underlying system was.

## The most important fact for the book happens after the market opens

The SEC’s order says senior personnel saw a large volume of positions accumulating in Knight’s “33 Account” at the opening. Knight’s primary monitoring tool, PMON, depended entirely on human monitoring. It did not generate automated alerts about firm financial exposure, did not display the relevant account or trading-group limits, and experienced delays under high volume that made its reports inaccurate. The 33 Account also held positions from multiple sources, so personnel could not quickly determine where the accumulating positions were coming from.

Knight remained connected to the markets while its technology staff tried to diagnose the live failure.

Then came the detail Chapter 1 should eventually earn the right to dwell on: in an attempt to fix the problem, Knight removed the new RLP code from the seven servers on which it had been installed correctly. That made the failure worse. The removal exposed the old Power Peg code on those servers too, causing additional incoming parent orders to activate the defective behavior.

This is stronger than a generic sentence about “humans falling behind.” It shows people acting while their causal model was still incomplete. The intervention was not absent; it was wrong in the direction predicted by an incomplete diagnosis.

The scene also supplies a useful distinction for the book’s terminology. Detection had occurred. Intervention authority existed. Action occurred. What was missing was sufficiently accurate diagnosis before the intervention itself changed the state of the system again.

## The strongest counterargument: Knight may be a controls story, not a comprehension story

The SEC did not conclude that the incident proved a fundamental limit on human understanding. Its order repeatedly identifies controls that could have stopped the event without requiring anyone to comprehend millions of orders in real time.

Before the failure, a simple second-person deployment check could have caught the missing eighth server. A protocol requiring retesting of dormant code after the 2005 modification could have exposed the broken cumulative-quantity behavior years earlier. Integrating the BNET reject messages into actual monitoring could have surfaced the deployment problem before the open. Immediately before market submission, a control comparing the orders leaving SMARS with those entering it could have detected aberrant output. Firm-wide automated capital thresholds could have stopped further order entry as exposure accumulated. Clear incident-response procedures could have told personnel when to disconnect a malfunctioning system from the market.

This is not a minor objection. If Chapter 1 says Knight proves that human comprehension is intrinsically too slow for machine-speed systems, the SEC record pushes back. Much of the disaster was preventable precisely because known classes of failure can be bounded by machine-speed controls.

That counterargument should improve the book’s claim rather than weaken it. *Breakneck* does not need humans to understand every machine-speed event. For known, measurable failure modes, the mature response is often to encode boundaries that act before comprehension is available. Human understanding matters most where someone must diagnose novelty, choose among competing explanations, decide whether a boundary is being crossed for a legitimate reason, or intervene in a system whose state is changing while the intervention is being designed.

Knight therefore works best as a case about the boundary between **precomputed control** and **live comprehension**. The organization had left too much of a machine-speed failure for live human sensemaking, then made that sensemaking harder with delayed, poorly contextualized monitoring and no clear disconnect procedure.

## A second piece of counterevidence: Knight had been warned by an earlier failure

The order records a roughly $7.5 million loss in October 2011 after a disaster-recovery test. Test data remained in use when trading resumed the following Monday, producing automated quotes. Knight fixed the specific problem but did not broaden the review to ask whether its systems had adequate controls against erroneous orders regardless of which system or failure mechanism produced them.

This complicates any story in which August 2012 was simply too fast to anticipate. The institution had already experienced an automated trading error serious enough to lose millions. The SEC’s criticism was partly about organizational learning: Knight reacted narrowly to the previous event rather than treating it as evidence about a wider class of controls.

That fact gives the opening a longer clock. Forty-five minutes explains the speed of the catastrophe. The eleven months before it explain why speed alone is not a sufficient causal account.

## Recommended Chapter 1 use

A future prose pass should make only a bounded change to the opening case rather than adding every technical detail here.

The most valuable narrative sequence is:

1. Eight servers; seven updated, one missed.
2. A repurposed flag calls dormant Power Peg code on the missed server.
3. Ninety-seven pre-open error emails exist but are not operational alerts.
4. At the open, positions accumulate in a mixed account while PMON is human-monitored, delayed under load, and missing the relevant limits.
5. Staff diagnose in the live market and remove correct code from seven servers, worsening the event.
6. The SEC later points to several controls that could have prevented or automatically bounded the failure.

The argumentative turn should then be explicit: Knight is not evidence that humans must watch machines faster. It is evidence that machine-speed systems must not depend on live human comprehension for failure modes that can be bounded in advance—and that when diagnosis really is required, speed can make a mistaken intervention compound the original error.

That is a narrower and stronger bridge into agentic AI. The relevant question is not “can a human keep up with every action?” The answer is obviously no in many mature automated systems. The harder question is which consequential states can be bounded by stable rules, and what happens when an adaptive system reaches a state for which the boundary itself requires interpretation.

## Claim boundaries for manuscript revision

Use:

- “The SEC found…” or “The SEC order states…” for contested factual particulars because the order arose from a settlement without admission or denial of the findings.
- “97 automated emails” or “97 error emails,” not “97 alerts.”
- “one of eight servers missed the deployment,” not a vague implication that the whole rollout was uniformly defective.
- “more than four million executions,” distinguishing executions from the millions of child orders sent.
- approximately $3.5 billion net long and $3.15 billion net short positions, rather than collapsing both into a single gross number without explaining the sides.
- the $460 million figure as the ultimate realized loss reported by the SEC.

Avoid:

- implying Knight could not have been protected because humans cannot react at machine speed;
- implying the 97 messages were formal alarms employees consciously dismissed;
- implying Power Peg was simply ancient code that spontaneously reawakened, without the 2005 modification and 2012 flag reuse;
- implying staff did nothing during the forty-five minutes;
- implying that more observability alone would have solved the problem;
- presenting Knight as an AI case. It is useful precisely because it predates current generative agents and exposes the underlying control problem.

## Sources checked

- U.S. Securities and Exchange Commission, *In the Matter of Knight Capital Americas LLC*, Exchange Act Release No. 70694, October 16, 2013: https://www.sec.gov/Archives/edgar/data/1569391/000119312513401173/d613486dex101.htm
- SEC, “SEC Charges Knight Capital With Violations of Market Access Rule,” October 16, 2013: https://www.sec.gov/newsroom/press-releases/2013-222
- SEC, Rule 15c3-5 overview and compliance material, explaining the pre-existing requirement for systematic controls over erroneous orders and capital exposure: https://www.sec.gov/rules-regulations/2011/06/risk-management-controls-brokers-or-dealers-market-access

The first source should control factual detail. The press release is useful for concise corroboration. The rule material matters because it shows that the relevant class of machine-speed safeguards was not invented after Knight’s failure; the Market Access Rule had been adopted in 2010 and its compliance requirements were already in effect before August 2012.