# Release review — Autonomy Half-Life

**Review date:** September 6, 2026  
**Manuscript source reviewed:** Desk `main` after merge of PR #985; publication-prep metadata is being added without changing manuscript prose.  
**Decision:** **Publication-development cleared. Do not release to Shelf until the frozen-source full-book length gate passes.**

This is a bounded factual, editorial, novelty, rights, and release review for Sven Hardy Benson’s 20-chapter Desk manuscript, *Autonomy Half-Life: Why Authority Should Decay as the World Changes*. It does not mark the Desk copy `Published`; Sven Hardy Benson’s Shelf remains the publication boundary.

## Scope reviewed

- canonical book README and its `Drafting` state;
- front matter, all 20 numbered chapters, and back matter as a complete Reader-visible structure;
- `research/README.md`, `research/chapter-briefs.md`, and the 26-source `research/source-ledger.csv`;
- `RIGHTS.md` and `rights.json` under the `bookself-arr-v1` profile;
- the manuscript’s novelty boundary around authority decay, trust decay, delegated authorization, reauthorization, and environmental drift;
- the strongest counterargument: excessive reauthorization can centralize decision-making, destroy useful initiative, and turn governance into a denial-of-service mechanism;
- the recent 2026 sources most exposed to revision risk.

No manuscript section listed in the canonical README is unchecked or missing. The controlling unresolved release blocker is mechanical length validation, not a missing chapter, rights defect, or identified factual contradiction.

## Current-source refresh

The recent agent-governance sources are moving quickly, so this review freezes what was current on September 6, 2026 rather than implying that an Internet-Draft revision is permanent.

### Progressive Trust

The IETF Datatracker currently lists **draft-sato-soos-pt-03**, updated September 5, 2026. It remains an active individual Internet-Draft with no formal standing in the IETF standards process. The draft distinguishes behavioral trust history from automatic authority grants and includes an explicit trust-decay model. The manuscript is correct to treat this as adjacent work on trust and authority evolution, not as an established standard and not as the same claim as environment-driven mandate decay.

Source: https://datatracker.ietf.org/doc/draft-sato-soos-pt/

### Principal Agent Protocol

The current Principal Agent Protocol remains **draft-baur-pap-02**. It is useful adjacent work on bounded mandates, delegation chains, lifetime, and degraded execution states. It remains work in progress rather than a published IETF standard.

Source: https://datatracker.ietf.org/doc/draft-baur-pap/

### Intent Token

The current Intent Token is **draft-williams-intent-token-01**. It defines a signed authorization envelope for autonomous-agent actions and explicitly identifies itself as an Internet-Draft that may be updated, replaced, or obsoleted. The book uses it as neighboring authorization work, not as proof of a settled protocol layer.

Source: https://datatracker.ietf.org/doc/draft-williams-intent-token/

### Agent Authorization Envelope

The current Agent Authorization Envelope revision is **draft-kroehl-agentic-trust-aae-01**, dated August 11, 2026. Its machine-evaluable MANDATE, CONSTRAINTS, and VALIDITY structure is directly relevant to bounded agent authority, while remaining an Informational Internet-Draft rather than a standard.

Source: https://datatracker.ietf.org/doc/draft-kroehl-agentic-trust-aae/

### AI Agent Internet Architecture

The source used by the manuscript records **draft-daniel-ai-agent-internet-architecture-03**, dated August 28, 2026, by Soohong Daniel Park and Irfan Siddique. It covers delegated authority, re-delegation, revocation, asynchronous operation, provenance, and accountability. As with the other drafts, it is cited as work in progress.

Source: https://bio.nic.funet.fi/index/netinfo/internet-drafts/draft-daniel-ai-agent-internet-architecture-03.html

### Cross-organizational delegation

The current cited cross-organizational delegation draft is **draft-reece-wimse-cross-org-delegation-02**, dated August 31, 2026. It supports the book’s treatment of delegation chains crossing administrative domains without establishing the book’s broader legitimacy thesis.

Source: https://datatracker.ietf.org/doc/draft-reece-wimse-cross-org-delegation/

### Directly adjacent authority-decay proposals

The source ledger explicitly acknowledges Reza Parsa’s 2026 *Runtime Legitimacy in Autonomous AI Systems* and David Forbes’s 2026 *The Missing Layer: The Hidden Risk in Modern Autonomous Systems*. Those are particularly important novelty boundaries because they directly discuss authority decay or contraction under changing conditions. The manuscript does not present the broad idea of dynamic authority as exclusively original; it narrows its claimed synthesis to **environmental distance from the conditions of grant as the primary driver of autonomy half-life, with elapsed time as one signal and backstop**.

Sources:
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6230998
- https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6094846

### Emergency-power persistence

Debdeep Mukherjee’s 2026 *Emergency Powers As Precedent: The Ratchet Thesis Revisited* remains appropriately treated as recent, provisional research on when emergency powers persist or expire. The manuscript does not rely on it as a universal law of institutional ratcheting.

Source: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7118898

## Editorial and novelty judgment

The manuscript maintains several distinctions that are essential to publication integrity:

- a valid credential is not identical to a live mandate;
- competence and trust are not identical to authority;
- authority and legitimacy are related but not interchangeable;
- a constitutional delegation is not a software token, a military subordinate is not an API client, and concept drift is not political legitimacy;
- “half-life” is a design metaphor and burden-of-proof rule, not a claimed universal mathematical decay constant;
- expected variation is part of autonomy, so ordinary change should not force constant escalation;
- weakening authority can mean narrowing consequence — for example, execute → prepare or write → read — rather than simply turning autonomy off.

The strongest publication risk is novelty overclaim because several 2026 proposals now occupy adjacent territory. The front matter and research trail already handle that risk directly. I found no need to rewrite the manuscript’s central claim before first-edition preparation.

## Rights and publication matter

`RIGHTS.md` and `rights.json` agree on Sven Hardy Benson as author and copyright owner, © 2026, All Rights Reserved, with public reading permitted under the `bookself-arr-v1` profile. No permission-dependent third-party image or long quoted excerpt is part of the publication packet reviewed here.

Shelf currently has no `books/autonomy-half-life/` publication. A future Shelf transaction would therefore be a first release rather than an in-place revision of an existing public edition.

## Mechanical publication conditions

This manuscript has 20 numbered chapters and was authored under the current one-shot full-book expectations. The repository’s controlling mechanical gate therefore applies: every numbered chapter must contain at least 3,000 words and the numbered chapters together must contain at least 65,000 words under `scripts/check-book-length.py`.

The connected repository API confirms that all 20 numbered chapter files are present. Their aggregate UTF-8 file size is 438,340 bytes and the smallest numbered chapter file is 18,177 bytes. Those are useful completeness and sanity signals only; **byte size is not the repository’s word-count rule and is not recorded as a pass**.

This environment cannot execute `python3 scripts/check-book-length.py autonomy-half-life` against a local frozen checkout. Do not convert that limitation into a claimed pass, and do not promote the book to `Complete draft` or publish it to Shelf until the exact frozen-source check is run successfully.

## Release decision

**Clear the book for first-edition candidate preparation and a named Desk freeze. Keep Shelf release blocked on the exact full-book length gate.**

If the frozen-source check passes, the next step is to promote the Desk manuscript out of `Drafting`, prepare the exact Desk → Shelf snapshot with the ordinary release semantics, verify Shelf status/catalog parity, and record the frozen Desk source commit. If the check fails, expand the deficient chapter or chapters with evidence-led material rather than padding, then freeze and re-run the gate.
