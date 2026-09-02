# Chapter 14 research — Matching Refugees to Cities

## Core claim

Refugee resettlement is an allocation problem with unusually consequential geography. U.S. placement already considers family ties, housing, schools, medical care, local services, and employment opportunities. Data-driven matching research asks whether historical outcome patterns can improve those placement decisions without erasing refugee preferences, local capacity, or the moral limits of treating employment as the sole objective.

## Verified evidence

- **U.S. Department of State, refugee placement guidance.** State Department materials explain that resettlement agencies review biographic and case information and match incoming refugees with local affiliate capacity, including affordable housing, school capacity, medical care, employment opportunities, and community services. Family or close-friend reunification is given strong weight. This establishes that placement is already a constrained matching process, not random dispersal. Source: https://2021-2025.state.gov/refugee-admissions/frequently-asked-questions/
- **Bansak et al., Science (2018), “Improving refugee integration through data-driven algorithmic assignment.”** Using historical U.S. and Swiss registry data, the authors combined supervised prediction with optimal matching to estimate location-specific employment outcomes. Their retrospective simulations reported roughly 40–70% average gains in employment relative to observed historical placement practices in the settings studied. Treat these as model-based counterfactual estimates from historical data, not proof of realized gains in a live national rollout. Source: https://doi.org/10.1126/science.aao4408
- **Immigration Policy Lab, GeoMatch research program.** Follow-on research addresses two major limitations of outcome-only assignment: incorporating participant preferences and balancing outcome maximization against even use of receiving locations. A 2021 mechanism-design paper explicitly combines outcome-based and preference-based matching; 2024 Operations Research work studies dynamic assignment with allocation balancing. Source: https://immigrationlab.org/geomatch/research/
- **State Department Reception and Placement materials.** Historical program documentation emphasizes local affiliate capacity and placement radii and shows that implementation is bounded by sponsor networks and local resources. Use this to prevent the chapter from describing placement as an unconstrained national optimization problem. Source: https://2017-2021.state.gov/refugee-admissions/reception-and-placement/

## Counterevidence and limits

- Employment is only one integration outcome. Safety, family proximity, language community, health care, education, housing stability, social connection, autonomy, and long-run mobility can matter as much or more to a family.
- Historical prediction can reproduce historical discrimination or local labor-market barriers. A model that learns low employment for a group in a location might correctly predict a bad outcome while also entrenching the conditions that produced it.
- Refugees are not packages to be optimized. Preference-aware mechanisms are materially different from systems that treat individuals only as input vectors.
- Local capacity is endogenous. Sending more people to a historically high-performing city can exhaust housing, caseworker, school, or labor-market capacity and change the outcome being predicted.
- Family reunification and other hard constraints can dominate model recommendations and should not be described as inefficiencies.
- The 2018 paper's reported gains are retrospective/simulated estimates based on historical registry data. Do not write that the algorithm increased U.S. refugee employment by 40% in realized nationwide practice.

## Falsification notes

Revise any sentence implying that the U.S. currently uses GeoMatch nationwide unless a current government source establishes that fact.

Keep the distinction between prediction and assignment explicit. A model can estimate expected outcomes by location; an allocation mechanism still has to respect capacity, ties, preferences, legal rules, and fairness goals.

Do not equate “best opportunity for success” with employment alone. Government placement practice and the broader integration literature use a wider set of needs and resources.

The strongest chapter tension is not humans versus algorithms. It is whether a transparent, preference-aware decision aid can improve a placement process that already uses informal prediction without converting vulnerable people into optimization targets.
