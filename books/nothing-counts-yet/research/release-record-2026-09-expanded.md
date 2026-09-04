# Release Record — Nothing Counts Yet — Expanded Trade Edition

Release date: 2026-09-03

## Frozen source

- Desk source commit: `3bd8456867dff274bad33513cb3b58fc11a21aff`
- Source state: 25 chapters, publication candidate
- Desk release-prep PR: https://github.com/Svyable/desk/pull/828

## Public release

- Shelf PR: https://github.com/Svyable/shelf/pull/201
- Shelf merge commit: `1c2db855b796f55f6528346978e10ed0d4cf2a19`
- Public edition label: `Expanded trade edition`
- Public status: `Published`
- Public slug: `nothing-counts-yet`
- Reader: https://svyable.github.io/shelf/reader/#/b/nothing-counts-yet/

## Verification

- Shelf PR was mergeable before landing.
- `Release feedback coverage` completed successfully on Shelf PR head `791b5d12b9bc4186f66095ee720f0766d04bfa0c`.
- Chapters 21–25 were copied unchanged from the frozen Desk source.
- Expanded source notes and release review were copied with matching Git blob content.
- Existing slug/catalog identity was retained, so the Reader URL did not change.
- The earlier 20-chapter release remains recoverable from Shelf Git history.

## Boundary

Desk remains the canonical working source and must not be relabeled `Published`. Shelf is the released snapshot. Future revisions begin on Desk and require another explicit freeze-and-release transaction.
