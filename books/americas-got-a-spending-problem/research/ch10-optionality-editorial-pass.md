# Chapter 10 — Optionality and debt-dynamics editorial pass

## Scope

This is a bounded editorial pass on Chapter 10, “Interest: The Bill for Yesterday,” stacked on the debt-dynamics research audit in PR #1946. It does not propose a chapter-wide rewrite. It targets two places where the prose currently becomes cleaner than the mechanism: the r-versus-g explanation and the claim that interest has “contractual seniority.”

## Material checked

Re-read the chapter, the existing `ch10-refinancing-lag.md` research note, the repository prose standards, and the current open PR set. Fresh primary-source checks on September 15, 2026 confirm the chapter's August refunding numbers and CBO baseline: Treasury's August 5 refunding offered $125 billion to refinance about $96.3 billion of privately held maturities and raise about $28.7 billion of new cash; CBO projects net interest rising from 3.3 percent of GDP in 2026 to 4.6 percent in 2036 while the primary deficit remains positive and debt held by the public rises from 101 to 120 percent of GDP.

Primary sources:

- U.S. Treasury, August 5, 2026 quarterly refunding statement: https://home.treasury.gov/news/press-releases/sb0590
- CBO, *The Budget and Economic Outlook: 2026 to 2036*: https://www.cbo.gov/publication/62105
- Treasury, April 2026 TBAC presentation: weighted average maturity of marketable debt outstanding was 70.8 months on April 30, 2026: https://home.treasury.gov/system/files/221/CombinedChargesforArchivesQ22026.pdf

## Strongest counterargument

The chapter is right that debt service reduces future fiscal room, but “contractual seniority” imports a corporate-capital-stack metaphor that is too literal for the federal budget. Treasury obligations are binding, and choosing not to honor them would be default; that does not mean interest sits in a statutory waterfall ahead of every program. Likewise, favorable r-versus-g arithmetic can make a debt stock easier to carry, but it cannot by itself stabilize a debt ratio while persistent primary deficits continue adding principal.

The objection does not weaken the chapter's optionality argument. It makes it more exact: debt service is a financing obligation inherited from earlier policy, while the primary balance determines whether current policy keeps adding to the stock that must be financed.

## Surgical prose recommendation

Keep the chapter's excellent opening auction and the line “Debt therefore carries a memory of earlier interest rates.” Give that memory one physical dimension rather than another abstraction: Treasury's marketable portfolio had a weighted average maturity of about 71 months in spring 2026. Immediately prevent the obvious misreading. Average maturity is not average repricing time: bills roll much sooner, floating-rate notes reset before maturity, and new deficits are financed at current rates. The useful image is a stack of borrowing vintages, not a six-year timer.

In the r-versus-g passage, replace the current implication that the interest-growth relationship nearly determines stabilization with the missing second lever: a favorable interest-growth differential buys room, but a persistent primary deficit uses it. CBO's own 2026 baseline makes the point without a hypothetical; net interest rises even as the primary deficit remains positive throughout the projection and debt climbs relative to GDP.

Later, replace “Interest therefore differs from most spending because it has contractual seniority” with ordinary federal-budget language. The strongest version is closer to: interest differs because it is the financing obligation attached to debt already issued. Congress can change future taxes and programs through law; refusing to honor Treasury securities already outstanding is a different act, with default consequences. This preserves the loss-of-optionality point without pretending the federal budget has a corporate payment waterfall.

## Rhythm and voice

Do not add another policy catalogue. Chapter 10 already contains several good short landing lines—“Debt therefore carries a memory of earlier interest rates,” “A bond auction is not a referendum,” and “The system worked.” They work because the surrounding mechanism earns them. The weaker pattern is the repeated succession of one-sentence declarations around them. A later manuscript edit should spend the new 71-month detail to develop one fuller paragraph, then cut rather than add a slogan.

The ending should remain. “The system worked” followed by the quiet claim on tomorrow is more interesting than a newly polished summary would be.

## Defensible boundary

**A favorable interest-growth differential can make an inherited debt stock easier to carry; the primary balance determines whether current policy keeps adding to it. Debt service constrains future fiscal room because Treasury securities already issued are binding financing obligations, not because interest occupies a corporate-style senior position over every federal program.**
