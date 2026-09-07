# Frozen-source release validation — Bookself

Validation date: 2026-09-07

Frozen Desk source: `61a2077913ab7cc8d08ecb96fbf730e220939d71`

## Decision

**Remain blocked — substantive manuscript depth remediation required.**

A temporary evidence-only validation PR (#1325) checked out the frozen Desk source above and ran the repository's exact command:

```text
python3 scripts/check-book-length.py bookself --json
```

The result was `healthy: false`.

- Numbered chapters: **28** (minimum 18)
- Chapter-only words: **64,270** (minimum 65,000)
- Chapters at or above 3,000 words: **2 of 28**
- Chapters below the 3,000-word floor: **26 of 28**
- Aggregate expansion required merely to bring every short chapter to 3,000 words: **20,082 words**
- Chapters in the 3,500–4,500 target band: **0 of 28**

Chapter 14's prior remediation is valid: it now measures 3,257 words. Chapter 24 also clears the release floor at 3,095. Every other numbered chapter is below 3,000 on this frozen source.

## Exact chapter counts

| Chapter | Words | Release floor |
|---|---:|---|
| ch01-the-empty-slot.md | 2,665 | below |
| ch02-the-self-before-the-evidence.md | 2,537 | below |
| ch03-readiness-is-a-story.md | 2,385 | below |
| ch04-the-first-trace.md | 2,471 | below |
| ch05-friction.md | 2,249 | below |
| ch06-the-wrong-size-of-ready.md | 2,080 | below |
| ch07-defaults.md | 1,970 | below |
| ch08-deadlines.md | 1,965 | below |
| ch09-the-bookself.md | 2,153 | below |
| ch10-bad-first-versions.md | 2,101 | below |
| ch11-private-starts.md | 1,943 | below |
| ch12-borrowed-rooms.md | 1,950 | below |
| ch13-small-wins.md | 1,934 | below |
| ch14-the-unfinished-mind.md | 3,257 | pass |
| ch15-restarts.md | 2,186 | below |
| ch16-quitting-well.md | 2,584 | below |
| ch17-starting-after-success.md | 2,296 | below |
| ch18-starting-after-loss.md | 2,115 | below |
| ch19-starting-too-late.md | 2,142 | below |
| ch20-starting-without-permission.md | 2,034 | below |
| ch21-starting-together.md | 2,195 | below |
| ch22-institutions-need-first-pages.md | 2,325 | below |
| ch23-the-last-first-time.md | 2,353 | below |
| ch24-the-first-page-again.md | 3,095 | pass |
| ch25-the-cost-of-a-first-try.md | 2,313 | below |
| ch26-who-gets-to-be-a-beginner.md | 2,296 | below |
| ch27-beginnings-that-bind.md | 2,308 | below |
| ch28-the-shelf-stays-open.md | 2,368 | below |

## Interpretation

This supersedes the earlier assumption that Chapter 14 was the manuscript's only concrete length failure. The full checker shows broad depth debt across the book. The deficit must be addressed through substantive chapter development, not padding or mechanical word inflation.

The bounded factual, research, rights, matter, novelty, and editorial conclusions in `release-review.md` remain useful for the prose reviewed there, but any expanded chapters must be reread against those evidence boundaries before release clearance is restored.

The sequential `python3 scripts/check-desk.py` step in validation PR #1325 was skipped because the length command failed first. That does not create an additional blocker to remediate yet: the failed mechanical gate already controls. After substantive depth remediation, rerun the complete length checker on one frozen source; only if it passes should `check-desk.py` be run on that same source.

## Next gate

Do not create a Shelf release from this state. Deepen the 26 below-floor chapters substantively, rerun `python3 scripts/check-book-length.py bookself` on the resulting frozen candidate, and require `healthy: true` before proceeding to the repository-integrity gate.
