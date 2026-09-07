# Chapter 9 status check — RealPage consent decree

**Checked:** 2026-09-06

## Why this note exists

Chapter 9 correctly treats the RealPage matter as a negotiated resolution rather than a merits holding, but its current prose sometimes slides from **proposed consent judgment** into **final settlement** language. That distinction remains live.

As of the Justice Department's case page updated **September 4, 2026**, the RealPage instrument is still listed as **Proposed Final Judgment [RealPage, Inc.]**, dated November 24, 2025. The same case page separately labels Greystar's March 2, 2026 decree **Final Judgment**, making the status difference unusually easy to verify from the government's own docket index.

Primary status source:

- U.S. Department of Justice, Antitrust Division, *U.S. and Plaintiff States v. RealPage, Inc.* case page, updated Sept. 4, 2026: https://www.justice.gov/atr/case/us-and-plaintiff-states-v-realpage-inc

## What the November 2025 filing actually did

The Justice Department announced a **proposed settlement** on November 24, 2025. DOJ said the proposal would require RealPage to stop using competitors' nonpublic data to determine rental prices, redesign features that limited price decreases or aligned pricing, stop collecting competitively sensitive information through market surveys, accept a court-appointed monitor, and cooperate in the government's continuing case against property managers.

Primary announcement:

- U.S. Department of Justice, *Justice Department Requires RealPage to End the Sharing of Competitively Sensitive Information and Alignment of Pricing Among Competitors*, Nov. 24, 2025: https://www.justice.gov/opa/pr/justice-department-requires-realpage-end-sharing-competitively-sensitive-information-and

The proposed judgment is more precise than the chapter's current shorthand. It says that, within 180 days after entry of the Stipulation and Order, RealPage must stop using current or historical unaffiliated-property data in runtime operation except for narrow exceptions; it may use historical unaffiliated-property data in model training only when that data is at least twelve months old and not from active leases; and models trained on unaffiliated-property data generally may not identify geographic effects more specifically than nationwide, with specified AI demand/supply models permitted statewide granularity. It also bars specified market-survey uses and constrains product features that can align or impede downward pricing.

Primary decree:

- U.S. Department of Justice, *Proposed Final Judgment [RealPage, Inc.]*, filed Nov. 24, 2025: https://www.justice.gov/atr/case-document/proposed-final-judgment-298

## Editorial correction to carry into Chapter 9

A later prose pass should avoid sentences implying that a federal judge had already completed Tunney Act review of the RealPage decree by the manuscript's September 2026 evidence date. The clean formulation is:

- DOJ and RealPage agreed to, and filed, a proposed consent decree in November 2025;
- the accompanying Stipulation and Order created an operative compliance framework while Tunney Act review remained pending;
- as of Sept. 4, 2026, DOJ still catalogued RealPage's decree as **proposed**, not final;
- therefore the decree is strong evidence of the remedy the government and RealPage accepted, but not a merits holding and not yet the same procedural object as an entered final judgment.

This makes the book's broader argument stronger, not weaker. The interesting point is not that a court definitively held RealPage's architecture illegal. It did not. The interesting point is that the government's negotiated remedy targeted the architecture's information topology: fresh rival data, geographic specificity, market surveys, aligned pricing features, and resistance to overrides.

## Current landlord-defendant status is also more advanced than the chapter says

The chapter currently says that, as of early 2026, Camden, Cushman/Pinnacle, and Willow Bridge had not settled with the government. That statement has aged out.

The DOJ case page records:

- **Greystar:** Final Judgment entered March 2, 2026.
- **LivCor:** Proposed Final Judgment filed December 23, 2025.
- **Willow Bridge:** Proposed Final Judgment filed July 6, 2026.
- **Pinnacle Property Management Services:** Proposed Final Judgment filed September 4, 2026.
- **Cortland:** Proposed Final Judgment filed January 7, 2025.

The live federal case therefore no longer supports a simple "four landlords remain unsettled" sentence. Any manuscript update should use a dated status sentence rather than implying a static defendant map.

## Strongest counterargument / limiting evidence

The word **proposed** should not be used to imply that nothing changed operationally. The decree itself measures many obligations from entry of the November 2025 Stipulation and Order, not from eventual entry of final judgment. RealPage and DOJ had already consented to a concrete compliance architecture even while the Tunney Act process remained incomplete.

Likewise, a consent decree does not establish that the challenged conduct would have been found unlawful at trial. The agreement expressly avoids adjudication of fact or law and contains no admission of liability. The right evidentiary weight is therefore substantial but bounded: the remedy shows what the enforcers demanded and the defendant accepted, not what a court proved after contested evidence.

## Why this improves the book

Chapter 9 is strongest when it distinguishes allegation, settlement, and holding. Updating this one status boundary prevents the chapter from accidentally doing the very thing its research rules prohibit. It also improves the argument's specificity: rather than saying "the settlement barred real-time data and granular models," the book can show exactly which data uses were prohibited, which older data remained permissible for model training, where statewide granularity remained allowed, and which obligations were operative before final Tunney Act approval.
