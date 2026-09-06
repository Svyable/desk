# Release review — The Taiwan Threshold

**Reviewed:** 2026-09-05  
**Desk source:** `706f2ff9c6a98769c9388cb50826ebead97f8a13`  
**Decision:** **Remain blocked — do not release to Shelf.**

## Controlling blocker: canonical manuscript state is still under development

The book README says `Complete draft`, with front matter, prologue, 18 numbered chapters, and back matter checked. The research brief and source ledger also preserve useful distinctions between observed events, official exercises, and scenario analysis.

However, the current canonical `manuscript/back-matter.md` explicitly says:

> This first field edition publishes the argument, full chapter architecture, opening prose, and research path while the complete trade manuscript remains under development on Sven Hardy Benson’s Desk.

That statement is a direct manuscript-level assertion that the trade manuscript is still under development. It controls over the higher-level `Complete draft` label for release purposes. A Shelf publication must not be created by merely deleting or rewording this note without first establishing that the underlying manuscript state has actually changed.

## Why this also needs a fresh factual pass

This is a contemporary, high-stakes Taiwan deterrence manuscript covering exercises, quarantine/inspection scenarios, cyber operations, undersea infrastructure, financial coercion, semiconductors, Japan, the Philippines, and AI-assisted classification. Those claims can age quickly. The existing research packet is a useful foundation, but no current book-local release clearance supersedes the under-development marker.

## Required remediation

1. Determine whether the field-edition note is still substantively accurate.
2. If the manuscript is still incomplete, finish the trade manuscript and preserve the observed-event/scenario boundary throughout.
3. If the manuscript is now genuinely complete, perform a full manuscript-to-source audit using current primary/authoritative sources for material factual claims; only then replace the stale field-edition language.
4. Run the normal mechanical and Desk integrity/catalog checks required by current repository instructions.
5. Record a new release decision from the remediated committed source.

Until then, this project remains **Desk-complete for workflow purposes but not release-cleared**.