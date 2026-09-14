# Chapter 8 media enrichment — same stars, different rules

## Asset added

- **File:** `../assets/ch08-same-stars-different-rules.svg`
- **Working title:** *Same five stars. Different institutional rules.*
- **Type:** original explanatory comparison
- **Purpose:** make Chapter 8's core point concrete: a five-star interface does not define the institution. Aggregation, category boundaries, memory windows, thresholds, remedies, and downstream consequences determine what a rating means in practice.

## Recommended manuscript placement

Place the figure immediately after the passage ending **“Same star. Different institution.”** The surrounding prose already introduces the semantic mismatch. The figure should arrive before the discussion of rating inflation so the reader can see that the mismatch is not merely hypothetical.

### Caption

*The visible scale is not the rule. Airbnb's published guest-rating documentation groups four- and five-star category ratings as positive and one- through three-star ratings as negative for future hosts. Uber's published driver documentation describes a rolling average of the most recent 500 rated trips and a city-specific minimum that can affect platform access after warnings. Both use five stars; the institutional semantics are different. Policies vary by market and can change.*

### Alt text

Two-column diagram titled “Same five stars. Different institutional rules.” The Airbnb column shows a five-star scale and notes that its published guest-rating documentation groups four and five stars as positive and one through three as negative for future hosts, with ratings also used in some booking and account-status decisions. The Uber column shows the same five-star scale but notes that driver ratings are averaged over the most recent 500 rated trips or all rated trips if fewer, and compared with a city-specific minimum that can affect access after warnings. A bottom statement reads, “The star is an input, not the contract.”

## Rights and provenance

The SVG is an original diagram created for this manuscript. It does **not** reproduce Airbnb or Uber screenshots, logos, icons, type treatments, UI layouts, proprietary charts, or other platform artwork. It uses only independently drawn boxes, text, and generic star glyphs.

The platform documentation cited below remains the copyright of its respective publisher. The figure does not copy expressive material from those pages; it independently summarizes factual policy statements needed to explain the chapter's argument. Platform names are used only to identify the systems being discussed. No claim is made that either company endorses the book or the figure.

Because rating rules can differ by market and can change, publication should preserve the date boundary in the note/caption and avoid presenting these rules as timeless or universal.

## Research grounding

### Airbnb — guest ratings have explicit positive/negative category semantics

**Source:** Airbnb Help Center, *Your reviews from hosts*  
https://www.airbnb.com/help/article/3287

Airbnb states that hosts may rate guests from one to five stars in cleanliness, house rules, and communication. Its documentation says category ratings of **4–5** are displayed as positive ratings with a check mark, while **1–3** are displayed as negative ratings with a warning icon. It also states that these ratings can help hosts decide whether to accept a booking request and can inform Instant Book eligibility, experienced-guest status, and enforcement of guest ground rules.

**Use:** this is unusually useful evidence for the chapter because it shows that a nominally continuous five-star scale can contain institutional category boundaries that are not obvious from the stars alone.

**Boundary:** this source describes ratings *of guests by hosts*. It should not be generalized to every Airbnb rating surface or every host-quality rule.

### Uber — the same five-star surface feeds a rolling average and access threshold

**Source:** Uber, *General Community Guidelines*  
https://www.uber.com/in/en/legal/general-community-guidelines/

Uber states that driver ratings are based on the average of post-trip star ratings from the most recent **500 rated trips**, or all rated trips if the driver has fewer than 500. It also states that there is a minimum average rating for drivers in each city and that an account may be deactivated if the average remains below the applicable limit after multiple notifications.

**Supporting source:** Uber, *How star ratings work*  
https://www.uber.com/pt/en/drive/basics/how-ratings-work/

Uber's driver documentation says that if a rider chooses fewer than five stars, the app may ask for additional feedback. It also states that ratings tied to some issues outside the driver's control can be removed from the driver's average.

**Use:** this provides a second, materially different institutional interpretation of the same nominal one-to-five-star interface: the system has a memory window, local threshold, feedback branch, and possible access consequence.

**Boundary:** city minima are not published as one universal numeric cutoff in the cited general guidance. Do **not** invent a single Uber deactivation threshold or imply it is the same everywhere.

## Manuscript research upgrade

Chapter 8 currently makes the conceptual claim that a four-star review can mean “very good” to a customer but something more consequential in a compressed institutional distribution. The new evidence lets the chapter sharpen that distinction without relying on folklore or an unsourced universal threshold.

A safe formulation is:

> The five-star interface does not guarantee five equally spaced institutional meanings. One platform can explicitly group four and five together as positive while another can evaluate a rolling average against a local minimum. The stars look familiar because the interface is familiar. The contract lives behind them.

Do not turn this into a claim that “four stars is bad everywhere.” The stronger argument is that **the institution defines the semantics, not the iconography**.

## Reader-formatting guidance

- Keep the two platform columns on the same page or screen. The comparison fails if one column is separated from the other.
- Use full text-column width in EPUB/web and at least roughly 70% of printable page width in print.
- Preserve the bottom line, **“The star is an input, not the contract.”** It is the interpretive hinge between the graphic and the next prose section.
- Keep the “policies vary” line legible rather than shrinking it into footnote-sized text.
- The SVG is grayscale-safe and does not rely on color to distinguish meaning.
- Do not add company logos or screenshots. They add rights and versioning risk without improving the explanation.
- If the final book uses numbered figures, add the figure number consistently in the caption layer rather than inside the SVG so editions can renumber cleanly.

## Highest-value follow-on opportunities

1. **Chapter 9 — applicant/model compression.** An original diagram showing a rich human history becoming parsed fields, inferred features, ranking, and shortlist would make loss of context visible without reproducing an applicant-tracking-system interface.
2. **Chapter 12 — synthetic competition.** A provenance-oriented diagram could distinguish original work, machine-generated variants, ranking pressure, and the feedback loop that pushes producers toward machine-legible similarity.
3. **Chapter 16 — recursive influence.** A book-level synthesis should connect measurement → adaptation → new data → model update → changed incentives, reusing the established visual grammar without duplicating any single chapter figure.
