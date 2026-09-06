# Release review — 2026-09-06

## Purpose

This memo moves *The Ten-Year Republic* from manuscript drafting into publication preparation. It records what is already complete, which claims and structural choices are intentionally provisional, and which objective repository gates still have to clear before a first Shelf release.

This is not a release declaration. Desk is the working source; publication occurs only after a committed Desk snapshot is prepared for Shelf through the Bookself release flow.

## Manuscript state

The full narrative spine is present:

- front matter;
- 25 consecutive ten-year chapters from 1776–1785 through 2016–2025;
- a 2026 epilogue;
- back matter explaining the selection method, causal standard, runners-up, and limits of the form.

Every chapter names or discusses a serious rival event. The chapter briefs preserve a falsification question for each selection so a future edition can change a winner when later evidence warrants it.

The rights package is present and internally consistent:

- `RIGHTS.md` identifies Sven Hardy Benson as author and copyright owner and uses the `bookself-arr-v1` all-rights-reserved profile.
- `rights.json` matches the title, author, copyright year, public-reading posture, and reserved AI / derivative-use permissions.

## Editorial position cleared for publication preparation

The book may make the following claims about its method:

1. It uses twenty-five **consecutive ten-year windows beginning in 1776**, rather than conventional calendar decades.
2. It chooses one event from each window by arguing from institutional reach, breadth, duration, and path dependence.
3. The selections are judgments, not measurements.
4. A runner-up is treated as real counter-evidence rather than a decorative alternative.
5. The book's through-line is that American history is repeatedly reorganized by hinges that alter the machinery available to later actors.

The book should **not** claim that nobody has previously written a decade-by-decade American history, an America-at-250 book, or a turning-points history. Its distinctiveness lies in the specific 1776-anchored window structure and the defended one-event-per-window method.

## Selection judgments currently cleared

The following deliberately non-obvious choices are editorially coherent enough to preserve through publication preparation unless the deeper source audit overturns them:

- **1816–1825:** Missouri Compromise over the Monroe Doctrine, because the compromise converted slavery into explicit territorial arithmetic for the expanding Union.
- **1886–1895:** Sherman Antitrust Act over Haymarket, Pullman, and the Panic of 1893, because the act created a durable federal language for governing concentrated private economic power.
- **1906–1915:** Federal Reserve Act over the Triangle Shirtwaist fire, because the law created monetary and lender-of-last-resort machinery that later shaped nearly every national economic crisis.
- **1956–1965:** Civil Rights Act of 1964 over the Cuban Missile Crisis, because the selection test weights durable institutional change over a catastrophic near-miss.
- **1976–1985:** Paul Volcker's anti-inflation turn over Ronald Reagan's election, because restored monetary credibility changed the economic environment in which the political realignment consolidated.
- **1986–1995:** fall of the Berlin Wall / end of the Cold War over the early World Wide Web, while acknowledging that a later edition may reasonably reverse this judgment as the web's long-run effects accumulate.
- **2006–2015:** financial crisis of 2008 over the iPhone, because the crisis rewrote monetary, regulatory, housing, and political expectations across the decade.

These are arguments. They should remain written as arguments.

## The final window remains provisional

**2016–2025 — COVID-19 pandemic** currently holds the final slot.

The choice is defensible because COVID reached mortality, hospitals, work, schools, fiscal policy, monetary policy, supply chains, housing, cities, public health, scientific institutions, elections, and public trust simultaneously.

The manuscript must keep the rival cases alive:

- the 2016 election and the durable political realignment around Donald Trump;
- January 6, 2021 and the attempted disruption of the electoral count;
- *Dobbs v. Jackson Women's Health Organization* and the return of abortion regulation to active state and federal politics;
- the 2022–2025 public emergence of generative AI and its still-unsettled effects on knowledge work, software, education, media, science, and economic organization.

A future edition should be willing to replace COVID if one of those events proves to have greater durable reach.

## Factual posture

The first draft is built from authoritative institutional and primary-source pathways recorded in `source-ledger.csv`, including the National Archives, Library of Congress, congressional historical offices, Federal Reserve History, Department of State Office of the Historian, National Park Service, the 9/11 Commission, the Financial Crisis Inquiry Commission, and CDC materials.

That is sufficient for a narrative draft but **not yet sufficient for final historical release** under the book's own research rules.

Before Shelf release, every chapter should have at least one serious secondary-history check for causal interpretation, with competing interpretations preserved where the historiography is contested. Priority chapters for deeper audit are:

- Declaration versus Yorktown;
- Missouri Compromise and the political economy of slavery;
- Indian Removal with nation-specific Native histories;
- Texas independence / annexation and slavery;
- Mexican-American War causation and the post-treaty property regime;
- emancipation, Black self-liberation, and constitutional abolition;
- the disputed simplicity of the “Compromise of 1877” narrative;
- antitrust, labor, and early enforcement doctrine;
- imperial motives in 1898 and the Philippine-American War;
- Federal Reserve institutional design;
- suffrage's racial and organizational divisions;
- competing explanations of the Great Depression;
- atomic-use decision making in 1945;
- *Brown* litigation strategy and implementation;
- the legislative coalition behind the Civil Rights Act;
- Vietnam / Watergate causation and executive legitimacy;
- distributional and international effects of the Volcker disinflation;
- causal explanations for Soviet collapse;
- post-9/11 legal and intelligence change;
- mortgage securitization and alternative explanations of 2008;
- pandemic mortality, school effects, inflation, vaccination, Long COVID, and revised datasets.

## Length gate

The repository standard for an automated full-book drop requires:

- at least 18 chapters;
- at least 3,000 words in every chapter;
- at least 65,000 chapter words total, with 70,000–90,000 preferred;
- most chapters ideally in the 3,500–4,500 range.

The book has 25 chapters and the current aggregate file sizes strongly indicate that the total-manuscript floor is achievable. The remaining risk is the **per-chapter 3,000-word minimum** in several earlier / mid-book chapters.

A targeted augmentation pass is underway. Chapters 4, 7, and 12 have already been materially deepened with additional causal and counter-case material rather than padding. Remaining short chapters should be expanded only where mechanical counting shows they fail or sit uncomfortably close to the floor.

The mechanical publication gate remains:

`python3 scripts/check-book-length.py the-ten-year-republic`

Do not mark the length gate cleared until that command passes on a repository checkout.

## Catalog / Desk integrity gate

Because this is a new book, the normal Desk surfaces must be synchronized before landing:

- root `README.md` book catalog;
- `llms.txt`;
- `sitemap.xml`;
- `index.html`;
- `.github/ISSUE_TEMPLATE/chapter-feedback.yml` Book dropdown.

Then run:

`python3 scripts/check-desk.py`

Do not treat a clean manuscript folder as equivalent to Desk integration.

## Release sequence

Once the source audit, length checker, and Desk integrity checker are green:

1. land the publication-candidate snapshot on Desk;
2. ensure the book's Desk status is a Desk-appropriate state such as `Complete draft` or `Publication candidate`, never `Published`;
3. run `scripts/release-book.sh the-ten-year-republic ../shelf` from a local checkout with a clean Shelf path;
4. review the exact Shelf replacement snapshot prepared by the release helper;
5. commit and land the Shelf change through normal Git workflow.

Shelf, not Desk, is where the public `Published` state belongs.

## Current publication judgment

**Not yet ready for Shelf release. Ready for a publication PR.**

The manuscript is complete enough to review as a book rather than as an outline. Its two remaining substantive publication blockers are objective and finite:

1. make every chapter clear the mechanical length floor without padding;
2. deepen the chapter-level source trail beyond the initial authoritative-source ledger.

Catalog synchronization and repository checks are then mechanical integration work.

The book should move forward without adding a human-review requirement as a blocker. The desired gate is evidence: source coverage, length validation, repository integrity, and a clean Desk snapshot suitable for Bookself release.
