# Source Ledger

This ledger is the starting research trail for the Desk draft. Before release, every concrete historical and technical claim should be checked against the underlying source and expanded where the chapter relies on it materially.

## Reliability engineering and high-reliability systems

1. U.S. Federal Aviation Administration, *System Safety Handbook* and advisory material on system safety, redundancy, failure analysis and common-cause considerations. Primary regulatory/engineering reference.
2. NASA, *Apollo 13 Mission Report* (1970). Primary mission record for spacecraft failures, resource constraints and recovery actions.
3. Charles Perrow, *Normal Accidents: Living with High-Risk Technologies* (Princeton University Press, 1984; later editions). Foundational analysis of complex, tightly coupled systems.
4. Karl E. Weick and Kathleen M. Sutcliffe, *Managing the Unexpected*. Secondary synthesis on high-reliability organizations and attention to weak signals.

## Lean production and supply chains

5. Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production*. Primary practitioner account; important for avoiding the false equation of lean with “zero inventory.”
6. James P. Womack, Daniel T. Jones, and Daniel Roos, *The Machine That Changed the World*. Historical synthesis of lean production.
7. World Bank and Japanese government / industry reports on supply-chain effects of the March 11, 2011 Great East Japan Earthquake and tsunami. Use for multi-tier supplier disruption claims.
8. World Bank, OECD, and industry analyses of the 2011 Thailand floods and global hard-disk-drive disruption.
9. U.S. Department of Commerce, semiconductor supply-chain Request for Information findings and subsequent reports during the 2021–2022 shortage period. Primary public-sector evidence on inventories, lead times and concentration.
10. U.S. White House, *Building Resilient Supply Chains, Revitalizing American Manufacturing, and Fostering Broad-Based Growth* (100-day supply-chain review, 2021). Primary policy source; treat policy conclusions separately from factual inventories.

## Banking and finance

11. Financial Crisis Inquiry Commission, *The Financial Crisis Inquiry Report* (2011). Primary U.S. investigative record for the 2007–2009 crisis.
12. Basel Committee on Banking Supervision, Basel III capital and liquidity standards, including Liquidity Coverage Ratio documentation. Primary regulatory material.
13. Federal Reserve, Comprehensive Capital Analysis and Review / supervisory stress-test methodology and results. Primary stress-testing source.
14. Federal Deposit Insurance Corporation, Federal Reserve, and U.S. Treasury material on the March 2023 bank failures. Primary material for digital run speed and liquidity discussion.
15. Douglas W. Diamond and Philip H. Dybvig, “Bank Runs, Deposit Insurance, and Liquidity,” *Journal of Political Economy* 91(3), 1983. Foundational model of maturity transformation and runs.

## Electricity and infrastructure

16. North American Electric Reliability Corporation, annual reliability assessments and standards material on resource adequacy, contingency planning and grid reliability. Primary industry reliability source.
17. Federal Energy Regulatory Commission reports and orders concerning resource adequacy, transmission planning and reliability. Primary U.S. regulatory source.
18. U.S. Department of Energy, transformer and grid-supply-chain assessments. Primary material for large power transformer lead-time and critical-component discussion.
19. National Academies, reports on electric-grid resilience and recovery from extreme events. Independent synthesis.

## Healthcare and preparedness

20. U.S. Department of Health and Human Services / Administration for Strategic Preparedness and Response material on the Strategic National Stockpile. Primary stockpile source.
21. U.S. Government Accountability Office reports on pandemic preparedness, medical supply chains and Strategic National Stockpile management. Independent public audit source.
22. World Health Organization material on hospital emergency response, surge capacity and health-system resilience. International primary guidance.
23. National Academies and peer-reviewed literature on nurse staffing, hospital occupancy and patient safety. Use carefully; effects vary by setting and design.
24. U.S. Food and Drug Administration drug-shortage database and annual reports. Primary source for shortage counts and causes.
25. Erin Fox and other peer-reviewed drug-shortage literature on manufacturing concentration, quality failures and generic-drug economics. Secondary expert literature.

## Cloud, software and cyber resilience

26. Google, *Site Reliability Engineering* (Beyer et al., eds.) and *The Site Reliability Workbook*. Practitioner sources on error budgets, redundancy, capacity and incident response.
27. Amazon Web Services Well-Architected Framework, Reliability Pillar. Provider documentation; useful for failure-domain and multi-region concepts, not independent evaluation of provider reliability.
28. Microsoft Azure and Google Cloud architecture guidance on availability zones, regions, backup and disaster recovery. Provider primary documentation.
29. Public incident postmortems from major cloud and infrastructure providers. Use exact incident documents for any release-edition examples.
30. U.S. Cybersecurity and Infrastructure Security Agency guidance on ransomware backups, recovery and critical infrastructure resilience. Primary government guidance.
31. Netflix technical publications on Chaos Monkey / chaos engineering history, supplemented by later practitioner literature. Primary practitioner account for deliberate failure testing.

## Insurance, disasters and climate resilience

32. Swiss Re Institute and Munich Re catastrophe-risk publications. Industry sources for correlated catastrophe risk and reinsurance; verify quantitative claims independently where possible.
33. U.S. Federal Emergency Management Agency material on the National Flood Insurance Program, hazard mitigation and benefit-cost analysis. Primary public source.
34. National Academies and peer-reviewed literature on the levee effect / flood-protection risk and development incentives.
35. Intergovernmental Panel on Climate Change, Sixth Assessment reports on changing climate hazards. Primary international scientific assessment.

## Ecology, diversity and resilience

36. C. S. Holling, “Resilience and Stability of Ecological Systems,” *Annual Review of Ecology and Systematics* 4, 1973. Foundational resilience ecology paper.
37. Stockholm Resilience Centre publications on ecological resilience, response diversity and adaptive capacity. Secondary/institutional synthesis.
38. Peer-reviewed agricultural literature on genetic diversity, monoculture and disease vulnerability. Use crop-specific evidence rather than universal claims.

## Human factors and automation

39. Raja Parasuraman and Victor Riley, “Humans and Automation: Use, Misuse, Disuse, Abuse,” *Human Factors* 39(2), 1997. Foundational human-automation reference.
40. Lisanne Bainbridge, “Ironies of Automation,” *Automatica* 19(6), 1983. Foundational analysis of human skill and supervision under automation.
41. FAA and NTSB materials on automation, manual flying proficiency and human factors. Use incident-specific records for concrete claims.
42. Joint Commission and peer-reviewed medical literature on alarm fatigue. Healthcare human-factors evidence.

## Strategic reserves and industrial capacity

43. U.S. Department of Energy, Strategic Petroleum Reserve official history and operational documentation. Primary source.
44. International Energy Agency emergency oil stockholding rules and coordinated response documentation. Primary international source.
45. U.S. Department of Defense industrial-base reports and National Defense Industrial Strategy documents. Primary source for warm industrial capacity and supplier-base concerns.
46. OECD and national government critical-supply-chain assessments for semiconductors, pharmaceuticals and energy equipment. Use to compare domestic, allied and global diversification.

## Queueing, utilization and operations

47. John D. C. Little, “A Proof for the Queuing Formula: L = λW,” *Operations Research* 9(3), 1961. Foundational queueing result.
48. Wallace J. Hopp and Mark L. Spearman, *Factory Physics*. Operations synthesis on variability, utilization, flow and buffers.
49. Peer-reviewed queueing literature on healthcare, call centers and service systems. Use domain-specific studies before making quantitative utilization claims.

## AI and agentic systems

50. NIST, *AI Risk Management Framework (AI RMF 1.0)* and subsequent generative-AI profile material. Primary U.S. risk-management guidance.
51. Current provider documentation for agent permissions, tool use, sandboxing, rate limits and audit logs where concrete product claims are made. Re-verify immediately before release because this area changes quickly.
52. Peer-reviewed and credible empirical work on automation bias, model correlation, ensemble diversity and human oversight. Keep speculative agent-economy scenarios clearly labeled as scenarios.

## Research cautions

- The manuscript currently uses broad historical examples without footnotes in chapter prose. Before publication, link each materially relied-upon example to a specific source above or add a more precise source.
- Avoid claiming exact outage probabilities, transformer lead times, shortage counts, hospital occupancy thresholds or financial run speeds unless the exact dataset and date are recorded.
- Do not imply that “lean” caused pandemic shortages as a single factor; distinguish lean production, supplier concentration, long lead times, demand spikes, shutdowns and logistics constraints.
- Do not imply that redundancy always improves safety. Common-cause failure and added complexity can reverse the benefit.
- Re-check all contemporary AI and cloud examples at release time.