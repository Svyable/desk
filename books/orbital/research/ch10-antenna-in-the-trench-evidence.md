# Chapter 10 evidence notes — The Antenna in the Trench

This packet supports the first full draft of live Chapter 10. Because the Ukraine/Starlink record includes later corrections, anonymous-source investigations, company denials, wartime operational secrecy and evolving contracts, every consequential claim is classified here by evidence type.

## Evidence classes used in this chapter

- **Documented official fact:** government document, inspector-general report, procurement notice or formal public statement.
- **Company statement / policy:** SpaceX/Starlink public material; useful for what the provider says its service is designed to do, not independent proof of battlefield events.
- **Reported multi-source account:** serious journalism based on named/anonymous sources; retain attribution and any denial.
- **Disputed / corrected account:** do not state as settled fact. Explain chronology and correction explicitly.
- **Interpretation:** the manuscript's systems argument built from documented events; do not present as a quotation or official finding.

## 1. Viasat KA-SAT attack immediately before the invasion

**UK National Cyber Security Centre / FCDO, May 10, 2022**  
https://www.ncsc.gov.uk/news/russia-behind-cyber-attack-with-europe-wide-impact-hour-before-ukraine-invasion  
https://www.gov.uk/government/news/russia-behind-cyber-attack-with-europe-wide-impact-an-hour-before-ukraine-invasion

**EU Council declaration, May 10, 2022**  
https://www.consilium.europa.eu/en/press/press-releases/2022/05/10/russian-cyber-operations-against-ukraine-declaration-by-the-high-representative-on-behalf-of-the-european-union/

**U.S. State Department attribution, May 10, 2022**  
https://2021-2025.state.gov/attribution-of-russias-malicious-cyber-activity-against-ukraine/

Evidence class: **documented official attribution**.

Use for:
- cyberattack beginning approximately one hour before Russia's February 24, 2022 full-scale invasion;
- targeting of Viasat's KA-SAT satellite communications network;
- significant outages in Ukraine and spillover across Europe;
- U.S./UK/EU assessment that the operation sought to disrupt Ukrainian command/control and communications;
- tens of thousands of terminals outside Ukraine also being disabled or disrupted.

Guardrail: satellite communications are not inherently cyber-resilient. The Viasat episode is included precisely to prevent a simplistic “satellite equals invulnerable” argument.

## 2. Initial Starlink activation and terminal flow

**Reuters investigation, July 25, 2025 — “Musk ordered shutdown of Starlink satellite service as Ukraine retook territory from Russia”**  
https://www.reuters.com/investigations/musk-ordered-shutdown-starlink-satellite-service-ukraine-retook-territory-russia-2025-07-25/

Use for the public chronology:
- Mykhailo Fedorov requested Starlink terminals on February 26, 2022;
- Musk replied within roughly ten hours that Starlink was active in Ukraine and terminals were en route;
- Poland and other donors became major sources of terminals and subscription funding;
- Ukrainian government and military users integrated Starlink rapidly.

Evidence class: **reported chronology**, supported by contemporaneous public posts and later official procurement records.

**USAID Office of Inspector General, Aug. 11, 2025 — E-121-25-003-M**  
https://oig.usaid.gov/node/7845  
https://oig.usaid.gov/sites/default/files/2025-09/%5BREDACTED%5D%20Final%20Report%20-%20Inspection%20of%20USAID%27s%20Oversight%20of%20Starlink%20Terminals%20Delivered%20to%20Ukraine.pdf

Evidence class: **documented official fact**.

Use for:
- USAID providing 5,175 terminals through its effort;
- USAID purchasing 1,508 and SpaceX donating 3,667;
- civilian-resilience purposes including government, essential services and critical infrastructure;
- the inspector general's explicit description of Starlink as dual-use technology important to both resilience and defense;
- documented Ukrainian uses including battlefield communications, piloting drones and targeting artillery;
- SpaceX continuing unlimited service on USAID-delivered terminals beyond the initially purchased service period, according to company statements recorded by the OIG.

Important nuance:
- early USAID procurement restrictions and SpaceX service terms did not map cleanly onto how terminals later moved through a war zone;
- the OIG found USAID did not fully mitigate misuse/theft risk and did not maintain location visibility after transfer.

## 3. Why the architecture was operationally resilient

This section is primarily **technical interpretation** grounded in the known architecture and documented wartime performance.

Claims permitted:
- a portable terminal can bypass damaged local last-mile infrastructure if it has power, sky view, network authorization and a working satellite path;
- a proliferated LEO constellation distributes orbital nodes so loss of one spacecraft or terminal does not destroy the service;
- terrestrial fiber/mobile infrastructure remained indispensable in Ukraine; Starlink was valuable as an alternate path, not a total replacement;
- later Starlink generations use inter-satellite laser links, which can reduce dependence on a nearby ground gateway for some traffic paths.

Do not claim:
- Starlink cannot be jammed;
- every Starlink link is routed exclusively through lasers;
- a constellation has no vulnerable ground infrastructure;
- one architecture is categorically secure while another is insecure.

## 4. The transition from donation to government procurement

**Pentagon press briefing, Oct. 18, 2022**  
https://www.defense.gov/News/Transcripts/Transcript/Article/3192466/pentagon-press-secretary-air-force-brig-gen-pat-ryder-holds-an-on-camera-press/

Evidence class: **documented official fact**.

Use for:
- DoD saying at that time it had not paid SpaceX for Starlink in Ukraine;
- DoD simultaneously discussing Ukraine's satellite-communications needs with SpaceX and other companies;
- evidence that the ad hoc/private-funded arrangement had become a procurement problem.

**Pentagon / Reuters, June 1, 2023**  
Reuters text mirrored at: https://www.investing.com/news/world-news/pentagon-buys-starlink-for-ukraine--statement-3096439  
and other Reuters syndication pages.

**Defense Department press briefings, 2023**  
https://www.defense.gov/News/Transcripts/Transcript/Article/3501484/pentagon-press-secretary-air-force-brig-gen-pat-ryder-holds-a-press-briefing/  
https://www.defense.gov/News/Transcripts/Transcript/Article/3534413/pentagon-press-secretary-air-force-gen-pat-ryder-holds-an-on-camera-press-brief/

Evidence class: **documented official fact / contemporaneous reporting**.

Use for:
- DoD publicly acknowledging a Starlink contract supporting Ukraine by June 2023;
- Pentagon description of satellite communications as a vital layer in Ukraine's communications network;
- DoD withholding contract details for operational-security reasons.

Interpretive use:
- “contracts are how states try to turn dependence into obligation” is the manuscript's argument, not a Pentagon quotation.

## 5. Crimea — corrected chronology

**Washington Post correction and reporting, Sept. 7–11, 2023**  
https://www.washingtonpost.com/technology/2023/09/07/ukraine-starlink-musk-biography/

**Washington Post interview on Isaacson correction, Sept. 12, 2023**  
https://www.washingtonpost.com/style/2023/09/12/elon-musk-walter-isaacson-ukraine/

**Reuters 2025 investigation above** also summarizes the corrected sequence.

Evidence class: **disputed/corrected account**.

Safe formulation:
- Walter Isaacson's original biography account suggested service was switched off during a Ukrainian maritime-drone operation near Sevastopol;
- Isaacson later said he had misunderstood the sequence;
- the corrected account is that Starlink had not been enabled in the relevant Crimea/coastal area and Ukraine asked for it to be enabled for the operation; Musk refused the request.

Do not repeat the original “Musk shut off Starlink midattack in Crimea” claim as fact.

The manuscript uses this as a methodological example: turning off existing service and refusing to extend service are strategically consequential but institutionally different acts.

## 6. Late-September 2022 Kherson-area shutdown — reported and disputed

**Reuters investigation, July 25, 2025**  
https://www.reuters.com/investigations/musk-ordered-shutdown-starlink-satellite-service-ukraine-retook-territory-russia-2025-07-25/

Evidence class: **reported multi-source account with company denial**.

Reuters reported, based on multiple people familiar with the order and Ukrainian sources who experienced the outage, that:
- Musk ordered coverage disabled over areas including parts of Kherson and Donetsk during Ukraine's September 2022 counteroffensive;
- at least roughly one hundred terminals were deactivated under the order according to sources familiar with the implementation;
- Ukrainian sources described effects on communications, drone operations and artillery coordination.

Required counterweight:
- SpaceX called Reuters' reporting inaccurate and pointed to prior statements affirming commitment to Ukraine, but did not publicly identify which specific elements it disputed;
- DoD declined to comment on the reported incident;
- Reuters could not establish every operational detail or the full geographic extent.

Manuscript rule: always attribute this episode to Reuters reporting. Never state it as an uncontested historical fact.

## 7. SpaceX policy on military/offensive use

**Reuters, Feb. 8–9, 2023 — Gwynne Shotwell remarks**  
Syndicated full Reuters text: https://finance.yahoo.com/news/spacex-curbed-ukraines-starlink-internet-002037328.html

Evidence class: **company statement reported contemporaneously**.

Use for:
- SpaceX president Gwynne Shotwell saying ordinary Starlink had not been intended for weaponization;
- her statement that Ukraine had used Starlink in ways not intended or included in the agreement;
- her statement that SpaceX had taken steps to limit Ukraine's ability to use the service for controlling drones, without disclosing the technical method.

**Current Starlink Terms of Service**  
https://starlink.com/legal/documents/DOC-1028-64945-75

**Current Starlink Acceptable Use Policy**  
https://starlink.com/legal/documents/DOC-1001-59234-61

Evidence class: **current company policy**.

Use for:
- ordinary Starlink being characterized as a commercial communications product rather than a product intended for offensive/defensive weaponry;
- current restrictions on military activity and remote control of drones/unmanned vehicles unless otherwise contractually permitted;
- international trade/export-control considerations.

Guardrail: current 2026 terms are not proof that every identical clause existed in every Ukrainian agreement in February 2022. They support the present product distinction and help explain the later Starlink/Starshield separation.

## 8. Russian unauthorized use and 2026 whitelisting

**Reuters, Feb. 19, 2024**  
https://www.reuters.com/world/europe/ukraine-seeking-action-stop-russian-use-starlink-minister-says-2024-02-19/

Use for:
- Ukrainian reports that Russian forces had acquired Starlink terminals through intermediaries;
- Ukraine asking SpaceX to help block unauthorized use;
- SpaceX's public position that it did not do business with the Russian government or military.

Evidence class: **Ukrainian government claim + company position, reported by Reuters**.

**Reuters, Jan. 29 and Feb. 5, 2026**  
https://www.reuters.com/business/media-telecom/ukraine-working-with-spacex-stop-russian-drones-use-starlink-kyiv-says-2026-01-29/  
https://www.reuters.com/world/europe/starlink-used-by-russian-forces-deactivated-battlefield-ukraine-says-2026-02-05/

Evidence class: **current Ukrainian claim / reported operational outcome**.

Use for:
- Ukraine and SpaceX cooperating on an authorized-terminal whitelist after reports of Russian use, including on drones;
- Ukraine saying whitelisted Ukrainian terminals continued operating while unauthorized Russian terminals were blocked;
- Ukrainian military sources reporting significant battlefield effects.

Required qualifier:
- Reuters could not independently verify the full scale of disruption;
- SpaceX did not publicly disclose the complete technical mechanism.

Interpretive use:
- provider control is not inherently pro- or anti-customer; the same capability to deny service can be a risk to the dependent customer and a defensive tool against unauthorized adversary users.

## 9. Formal defense support and Starshield

**SpaceX Starshield page**  
https://new.spacex.com/starshield

Evidence class: **company statement**.

Use for:
- Starshield being explicitly designed for government/national-security use;
- communications, Earth observation and hosted-payload focus;
- additional high-assurance cryptographic capability beyond ordinary Starlink positioning;
- use of Starlink-derived technology, manufacturing, launch and laser-link infrastructure.

**SAM.gov / Space Systems Command 2026 Starshield awards**  
https://sam.gov/opp/528df9b3997743b1973f802271312e90/view  
https://sam.gov/opp/1b65a276e3074771b489396ea34bdc0d/view

Evidence class: **documented procurement fact**.

Use for:
- firm-fixed-price task orders for Starshield services under the U.S. military's proliferated-LEO commercial-services contracting framework;
- evidence that national-security customers are formalizing a distinct service relationship rather than relying on improvised consumer-service use.

**Space Systems Command, May 26, 2026 — Space Data Network Backbone**  
https://www.ssc.spaceforce.mil/Newsroom/Article-Display/Article/4501527/us-space-force-advances-space-data-network-backbone-for-global-warfighter-conne

Use carefully for the broader 2026 trend toward resilient proliferated-LEO data transport. This is not the same contract as Ukraine Starlink support.

## 10. 2025 foreign military sale for continued Ukraine service

**Defense Security Cooperation Agency, Aug. 29, 2025 — Ukraine Satellite Communications Services**  
https://media.defense.gov/2025/Aug/29/2003790442/-1/-1/0/PRESS%20RELEASE%20-%20UKRAINE%2025-58%20CN.PDF

Evidence class: **documented official fact**.

Use for:
- State Department approval of a possible foreign military sale estimated at $150 million;
- Ukraine requesting an extension of satellite communications services for Starlink terminals;
- evidence that the 2022 emergency capability had become a formal defense-support transaction.

Do not imply the full $150 million was necessarily expended; it was the estimated value of the approved possible sale.

## 11. European diversification response

**Reuters, March 5, 2025 — Eutelsat/OneWeb as possible Ukraine alternative**  
https://www.reuters.com/technology/space/could-europes-eutelsat-help-replace-starlink-ukraine-2025-03-05/

**Reuters, Aug. 31, 2026 — IRIS² industrial contracts / strategic context**  
https://www.reuters.com/business/aerospace-defense/german-satellite-maker-ohb-wins-12-bln-contract-18-satellites-eu-network-2026-08-31/

Evidence class: **reported current policy/market response**.

Use for:
- European interest in backup/sovereign satellite communications after Ukraine demonstrated the strategic value of proliferated satellite connectivity;
- OneWeb/Eutelsat as a possible complement, not an instant drop-in substitute;
- IRIS² as a longer-term European secure-connectivity effort.

Guardrail: do not claim Starlink alone caused IRIS². Ukraine and concerns about strategic dependence strengthened the rationale for capabilities already rooted in broader European policy.

## 12. Core interpretive claims and falsification conditions

### “Physically distributed, operationally centralized”
Supported by:
- large distributed constellation and portable terminals;
- network authorization, coverage policy, terminal identity and software management remaining under provider control.

Would be weakened if customers could operate the network independently of SpaceX control once terminals/satellites were delivered. They cannot under the ordinary service architecture.

### “Infrastructure with a kill switch”
This is a metaphor, not a claim that one literal red button exists.

The manuscript explicitly defines the real mechanisms as coverage maps, terminal authorization, accounts, firmware, geographic restrictions, routing policy and service classes.

### “Charity is not doctrine”
Interpretive claim: a military cannot responsibly rely indefinitely on voluntary private subsidy for critical communications. The later DoD contract and FMS support the transition toward formal obligation.

### “Private operational power can have foreign-policy consequences without making the firm sovereign”
Keep the boundary:
- SpaceX does not command armed forces, make treaties, levy taxes or possess state coercive authority;
- it can control a communications capability on which state actors rely;
- the book's sovereignty argument is functional and infrastructural, not metaphysical.

## Drafting guardrails

- Attribute the late-September 2022 Kherson shutdown to Reuters and include SpaceX's denial.
- Correct the Crimea chronology; do not repeat the original Isaacson account as settled fact.
- Distinguish service already active, requested service expansion, use restrictions, and adversary-terminal blocking.
- Do not write as though every Starlink terminal in Ukraine was donated by SpaceX; governments and donors purchased large numbers and paid service costs.
- Do not describe Starlink as replacing Ukraine's terrestrial telecom sector. It was a critical alternate path alongside repaired fiber, mobile, radio and other satellite systems.
- Avoid treating Musk's personal choices as the entire institutional story. Company terms, export controls, contracts, network architecture and government procurement all matter.
- Do not claim Starlink is unjammable or invulnerable.
- Do not infer the exact technical mechanism of restrictions when SpaceX has not disclosed it.
- Treat Russian terminal use and 2026 disruption scale as Ukrainian claims reported by Reuters unless independently confirmed.
- Keep the handoff clean: Chapter 11 should move from private communications to private observation—commercial imagery and the redistribution of strategic visibility.
