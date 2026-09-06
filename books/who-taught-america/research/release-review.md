# Release review — Who Taught America?

**Reviewed:** 2026-09-06  
**Candidate branch:** `book/who-taught-america`  
**Decision:** **Complete Desk manuscript; not yet release-cleared.**

The branch remains a moving publication-preparation source. A permanent source commit should be recorded only after the objective gates below are closed and the candidate is frozen.

## What is established

- The book has front matter, twenty-six numbered decade chapters, and back matter.
- The organizing frame is explicit and falsifiable: “most important” means historically revealing and consequential, not best, oldest, most prestigious, or morally admirable.
- The back matter includes one serious rival school for every decade so the selection method remains arguable rather than being presented as an objective ranking.
- `RIGHTS.md` and `rights.json` are present under the existing `bookself-arr-v1` all-rights-reserved profile.
- `research/source-ledger.csv` uses Desk’s canonical seven-column schema: `id,year,author_or_institution,title,source_type,book_use,url`.
- `research/chapter-source-map.md` maps all twenty-six chapters to their evidence packets.
- `research/falsifiability-notes.md` records the strongest known overclaim risk for every decade.
- Chapters 1–17 have now been strengthened beyond their original single institutional anchors with primary charters/statutes, federal and state archives, digitized primary collections, or independent scholarship where available.
- Modern and high-risk chapters have denser primary or official evidence, including National Park Service records for Carlisle, Los Alamos, and Little Rock; Minnesota public records for charter schools; MIT records for OpenCourseWare; FBI records for Parkland; and Supreme Court plus Harvard records for the 2020s admissions chapter.
- The manuscript does not treat historical importance as moral endorsement. Carlisle is included for the consequences of coercive assimilation policy. Parkland separates remembrance of the people killed from analysis of the later political movement. The Harvard chapter explicitly treats the 2020s as unfinished.
- The publication branch has been merged forward onto current `main` before shared catalog work, rather than overwriting newer Desk catalog state from its original base.

## Substantive publication blockers

### 1. Exact manuscript-length gate has not been reproduced

Desk’s one-shot full-book standard requires:

- at least 18 numbered chapters;
- at least 3,000 words in every numbered chapter;
- at least 65,000 numbered-chapter words total.

The connected environment cannot execute the repository-local checker from a live checkout. A direct clone/download attempt is not available through the local runtime, and file size is not the controlling metric. No pass is inferred from byte size or manuscript completeness.

**Required:** run `python3 scripts/check-book-length.py who-taught-america` on one frozen Desk source. If any chapter fails, deepen the argument with researched cases, counter-evidence, institutional mechanics, or downstream consequences rather than padding.

### 2. Final manuscript-to-source reconciliation remains

The evidence-strengthening pass is complete at the packet level: every chapter has an explicit source map and early/middle chapters now carry additional primary, governmental, archival, or scholarly evidence.

The remaining source gate is narrower: read the frozen manuscript against those packets and correct any sentence that turns a narrow fact into a broader causal or “first” claim the evidence does not support. Particular care remains warranted around:

- the exact metric behind William & Mary, Georgia, UNC, Oberlin, and charter-school “first” language;
- West Point’s relationship to engineering and continental state capacity without making the academy the sole causal engine;
- deaf education without reducing the story to a hearing reformer;
- Carlisle with student/Native experience rather than administrator-centered history;
- Tuskegee without a one-founder narrative;
- Chicago, Gary, Lincoln School, Scopes, and Black Mountain without projecting later fame backward;
- the incomplete causal record of the 2020s.

This is a reconciliation/correction pass, not a demand for a citation after every sentence.

### 3. Shared Desk discovery surfaces are not yet synchronized

The branch is now based on current `main`, so shared registration can be done without discarding other books’ recent catalog changes. Before merging the new top-level book, synchronize the canonical catalog manifest, root README dashboard/catalog, chapter-feedback dropdown, `llms.txt`, and sitemap from this current base. `index.html` should change only if the current Desk contract requires it.

**Required:** run the current catalog tooling and `python3 scripts/check-desk.py` on the same frozen source used for the length check.

## Editorial notes before first release

The strongest commercial feature is also the main editorial risk: readers will argue with the selections. Preserve that. Do not dilute the premise by turning every chapter into “one of many important schools.” Each chapter should make the selection argument strongly, then preserve its strongest rival or objection honestly.

The manuscript’s distinctive longitudinal argument is now visible across the whole book:

1. schooling begins as preparation for republican government and technical state capacity;
2. access expands across disability, gender, race, class, and public provision;
3. schooling becomes a tool both of liberation and coercive assimilation;
4. professional and research institutions turn knowledge into national infrastructure;
5. the twentieth-century school becomes a battleground over curriculum, culture, constitutional rights, student power, and metropolitan inequality;
6. late-century reforms unbundle the school from one organizational form;
7. the internet unbundles course content from institutional membership;
8. the 2020s reopen both the admissions gate and the meaning of human work in an AI-rich learning environment.

That through-line should be protected during any length remediation. Additional words should deepen cases and contradictions rather than restate the master thesis.

## Publication decision

**Remain on Desk as a complete manuscript under publication review.**

Release to Sven Hardy Benson’s Shelf only after the objective sequence below is satisfied on one frozen source:

1. exact `check-book-length.py` pass, with researched augmentation of any failing chapter;
2. final manuscript-to-source reconciliation and correction of any factual overclaim found;
3. canonical catalog/discovery synchronization;
4. `python3 scripts/check-desk.py` pass;
5. freeze the passing Desk commit and create the linked Shelf snapshot from exactly that source.

If those gates pass, no additional discretionary human-review requirement is imposed by this review.
