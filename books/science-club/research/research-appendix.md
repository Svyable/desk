# Research Appendix: Next Expansion Pass

This first-pass manuscript has complete architecture but does not yet clear Desk's one-shot length gate. Expansion should come from documents, not repeated ethical framing.

## Highest-value archival work

1. Obtain the full 1994 Massachusetts task-force report and every Appendix B document cited by ACHRE. Build a document-level table with date, sender, recipient, sponsor, study, subject count, disclosure language, and archival identifier.
2. Recover every original Fernald nutrition paper from 1946–1956. Build experiment-level rows for unique subjects, ages, diagnoses/labels, administered isotope/activity, route, meal composition, sampling schedule, dose estimate and scientific conclusion.
3. Reconcile subject overlap across the iron study and calcium subexperiments. Freeze a unique-participant count only after roster-level evidence supports it.
4. Recover AEC isotope-distribution files and Subcommittee on Human Applications minutes cited by ACHRE. Trace whether the Fernald protocols passed through AEC review and what consent requirements were communicated.
5. Recover NIH funding records for the studies where ACHRE/Oxford identifies NIH support. Separate grant purpose from isotope-supply oversight.
6. Recover Quaker Oats fellowship/grant correspondence. Determine exactly what the company requested, knew and controlled. Do not infer advertising intent from later litigation rhetoric.
7. Recover Fernald institutional records on Science Club membership, rewards, parent contacts, guardianship status, and resident classification. Determine whether privileges were exclusive to research participants and whether boys could withdraw without losing unrelated benefits.
8. Recover full Fred Boyce testimony and other former-subject transcripts. Use testimony for subjective experience and recruitment memory; distinguish from technical dose claims.
9. Recover settlement filings and final agreement. Separate allegations, admissions, denials and settlement terms.
10. Compare Fernald with Wrentham and one noninstitutional pediatric tracer study from the same period. The comparison should test whether institutionalized children received materially different disclosure/recruitment treatment.

## Chapter expansion map

- Chs. 1–3: institutional history, admissions/classification, daily conditions and the rise of isotope medicine.
- Chs. 4–5: full reconstruction of iron and calcium studies from original papers.
- Chs. 6–8: complete parent-letter and Science Club document trail; guardian status; contemporaneous pediatric ethics.
- Chs. 9–12: dosimetry, tracer physics, AEC isotope governance, Nuremberg/AEC/medical consent history.
- Chs. 13–14: Wrentham comparator and broader institutional-subject methodology.
- Chs. 15–17: 1993–1998 discovery, ACHRE process, apology, litigation and settlement documents.
- Ch. 18: present-day implications grounded in current federal pediatric/ward regulations rather than analogy alone.

## Mechanical gates before merge/publication surfaces

- `python3 scripts/check-book-length.py science-club`
- Every numbered chapter >= 3,000 words.
- Chapter-only total >= 65,000 words; target 70,000–90,000.
- Full human-prose pass after source expansion.
- `python3 scripts/check-desk.py`.
- Only after the objective book gate passes, synchronize root catalog, Reader/discovery surfaces, llms.txt, sitemap, index, and feedback dropdown.