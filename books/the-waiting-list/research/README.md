# Research Brief

## Thesis under test

*The Waiting List* asks how modern institutions actually allocate scarce, indivisible goods when a price is not allowed, or not able, to clear the market.

The strong, easy version of the argument — that queues are always fairer than markets, or that any algorithm beats any human judgment — is too brittle to defend. The version worth testing is narrower and more durable:

> When price cannot or should not allocate a scarce good, some other rule always fills the vacuum. That rule is rarely neutral. The quality of its design — whether it resists manipulation, treats likes alike, and can explain itself to the people it disappoints — is one of the least examined forms of institutional power in contemporary life, and the economics of matching markets and market design supply a mature, evidence-tested body of work for building it well.

The book should be able to survive contact with failure cases. Market design has real limits: deferred-acceptance mechanisms have documented critics, algorithmic matching has produced real transparency and equity failures, and solving strategic manipulation does not solve underlying scarcity. The manuscript should show those limits rather than only its successes.

## Core empirical tests

1. **Repugnance and its edges:** Which transactions do societies refuse to let price allocate, why, and how consistent is that refusal across countries and eras (organ sale, surrogacy, ticket resale, dating, refugee placement)?
2. **Queue failure modes:** When does first-come-first-served, a lottery, or a simple priority rule produce outcomes participants widely regard as unfair, gameable, or dangerous?
3. **Black markets as diagnosis:** Where an illegal market grows up beside a banned legal one (organ trafficking, ticket scalping, GPU gray markets), what does its existence reveal about the legal mechanism's design flaws?
4. **The market-design toolkit:** How do deferred acceptance, stable matching, and exchange-chain mechanisms actually work, who built them, and what evidence exists that they outperform the ad hoc systems they replaced?
5. **Diffusion beyond the original domains:** How have mechanisms built for kidney exchange and school choice been adapted, well or badly, to ride-hailing, dating apps, refugee resettlement, vaccine allocation, and AI-era compute rationing?
6. **New 2020s scarcities:** How are GPU capacity, water rights, and affordable housing currently allocated, and which of those systems show evidence of deliberate design versus improvisation under pressure?
7. **Accountability and audit:** Who currently has the standing and technical ability to audit an allocation algorithm that a government or platform has adopted, and what happens when nobody does?

## Falsification and counter-evidence

Every chapter should look for evidence against the central argument.

- A well-designed market can outperform a well-designed queue when repugnance concerns are absent; the book should not romanticize non-price allocation as inherently more moral.
- Deferred-acceptance and other stable-matching mechanisms have real critics (fairness to lower-priority participants, opacity to lay users, sensitivity to how priorities are set upstream of the algorithm).
- Algorithmic matching can encode and launder bias that a transparent human queue would have made visible and contestable.
- Some queues that look improvised (mutual-aid networks, informal rationing during acute shortage) perform better than formal mechanisms because of local trust and information the formal system lacks.
- Market design's academic successes (kidney exchange, school choice, the medical match) are a nonrandom, unusually well-funded, unusually well-studied sample; most real-world queues never get that attention, and the book should not imply they could be fixed as easily.
- A shortage that persists no matter how the queue is designed (severe organ scarcity, severe housing scarcity) can make allocation-mechanism debates a distraction from the harder political question of supply.

## Evidence lanes

### I. Repugnant markets and their history

Alvin Roth's writing on repugnance; Iran's regulated living-kidney-donation system; organ trafficking investigations (Nancy Scheper-Hughes and Organs Watch; journalistic investigations in India, the Philippines, and Eastern Europe); the U.S. National Organ Transplant Act of 1984; historical parallels in blood and plasma markets.

### II. Queueing and its failures

Classical queueing theory; hospital emergency-department triage; ticket-market scalping and bot legislation (the BOTS Act of 2016; the 2022 Ticketmaster/Live Nation Senate hearings); pandemic-era shortages of consumer electronics and their bot-driven resale markets.

### III. The market-design canon

David Gale and Lloyd Shapley's 1962 "College Admissions and the Stability of Marriage"; the National Resident Matching Program's history and 1990s redesign led in part by Alvin Roth, Elliott Peranson, and colleagues; Roth, Sönmez, and Ünver's kidney-exchange theory and the growth of paired and chain donation through registries such as the National Kidney Registry and the Alliance for Paired Donation; Abdulkadiroğlu, Pathak, Roth, and Sönmez's redesign of the Boston and New York City school-choice systems; the 2012 Nobel Memorial Prize in Economic Sciences awarded to Shapley and Roth.

### IV. Diffusion into platforms and policy

Two-sided marketplace design at ride-hailing and dating platforms; refugee-resettlement matching research and pilots (Kirk Bansak, Jeremy Weinstein, Justin Grimmer, and collaborators; Swiss and U.S. pilot programs); COVID-19 vaccine allocation frameworks (ACIP phased prioritization, state-level implementation variance, documented equity gaps).

### V. The scarcities of the late 2020s

GPU and AI-compute allocation during the 2023–2026 shortage era (Nvidia disclosures, cloud-provider capacity commitments, reporting on compute rationing); Colorado River Compact renegotiation and Western water-rights seniority; U.S. affordable-housing voucher waitlists and lottery systems (HUD Section 8 data; municipal housing-lottery programs); post-2023 college admissions after *Students for Fair Admissions v. Harvard*.

### VI. Accountability

Algorithmic-fairness and auditability literature; disclosure requirements (or their absence) for public-sector allocation algorithms; case studies where an allocation algorithm was successfully challenged, revised, or made transparent after public pressure.

## Sourcing conventions

Every chapter agent works from this brief and its own chapter entry in `chapter-briefs.md`. Sources are logged in `research/source-ledger.csv` using the schema `id,year,author_or_institution,title,source_type,book_use,url`. Source ids are prefixed with the chapter number (for example `ch08-nyt-chain124`) to keep ids unique across a manuscript researched in parallel by chapter. No invented quotations, statistics, or named individuals; real, checkable sources only, with counter-evidence preserved rather than argued away.
