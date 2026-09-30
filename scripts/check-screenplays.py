#!/usr/bin/env python3
"""Validate Desk screenplay projects and Fountain source files.

The screenplay workflow is intentionally local-first and dependency-free. Fountain
is treated as the canonical script source; PDF/FDX/etc. are exports, not authority.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

FORMATS = {"feature", "short", "pilot", "series", "limited-series"}
STATUSES = {"development", "outlining", "drafting", "revision", "locked"}
SCRIPT_REQUIRED = {"drafting", "revision", "locked"}
METADATA_FIELDS = ("Slug", "Title", "Format", "Status", "Source", "Logline")
SLUG_RE = re.compile(r"[a-z0-9]+(?:-[a-z0-9]+)*\Z")
EPISODE_RE = re.compile(r"ep\d{2,3}-[a-z0-9]+(?:-[a-z0-9]+)*\.fountain\Z")
SCENE_RE = re.compile(
    r"^(?:\.(?=\S)|(?:INT|EXT|INT\./EXT|EXT\./INT|I/E|EST)\.)",
    flags=re.IGNORECASE,
)
CHARACTER_RE = re.compile(r"^[A-Z][A-Z0-9 ._'\-]*(?:\s*\([^\n]+\))?$", flags=re.ASCII)


def finding(level: str, project: str, message: str, path: str | None = None) -> dict[str, str]:
    item = {"level": level, "project": project, "message": message}
    if path:
        item["path"] = path
    return item


def parse_metadata(readme: Path) -> dict[str, str]:
    text = readme.read_text(encoding="utf-8")
    pairs = re.findall(r"(?m)^- \*\*([^*]+?):\*\*\s*(.*?)\s*$", text)
    return {key.strip(): value.strip() for key, value in pairs}


def fountain_title(lines: list[str]) -> str | None:
    for line in lines[:40]:
        match = re.match(r"^Title:\s*(.+?)\s*$", line, flags=re.IGNORECASE)
        if match:
            return match.group(1).strip()
    return None


def has_dialogue(lines: list[str]) -> bool:
    for index, line in enumerate(lines[:-1]):
        stripped = line.strip()
        if not stripped or SCENE_RE.match(stripped):
            continue
        if CHARACTER_RE.fullmatch(stripped) and lines[index + 1].strip():
            nxt = lines[index + 1].strip()
            if not SCENE_RE.match(nxt) and not CHARACTER_RE.fullmatch(nxt):
                return True
    return False


def check_fountain(path: Path, project: str, expected_title: str | None, require_dialogue: bool) -> list[dict[str, str]]:
    findings: list[dict[str, str]] = []
    rel = path.as_posix()
    try:
        text = path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return [finding("error", project, "Fountain source must be UTF-8 text", rel)]

    if not text.strip():
        return [finding("error", project, "Fountain source is empty", rel)]

    lines = text.splitlines()
    first_nonblank = next((line.strip() for line in lines if line.strip()), "")
    if first_nonblank == "---" or first_nonblank.startswith("# "):
        findings.append(finding("error", project, "Fountain source must not use Markdown/YAML front matter", rel))

    title = fountain_title(lines)
    if not title:
        findings.append(finding("error", project, "Fountain title page is missing Title:", rel))
    elif expected_title and title.casefold() != expected_title.casefold():
        findings.append(
            finding(
                "warning",
                project,
                f"Fountain Title: {title!r} differs from project title {expected_title!r}",
                rel,
            )
        )

    if not any(re.match(r"^Author:\s*\S", line, flags=re.IGNORECASE) for line in lines[:40]):
        findings.append(finding("warning", project, "Fountain title page is missing Author:", rel))

    scene_count = sum(bool(SCENE_RE.match(line.strip())) for line in lines)
    if scene_count == 0:
        findings.append(finding("error", project, "script has no recognizable scene headings (INT./EXT./etc.)", rel))

    if require_dialogue and not has_dialogue(lines):
        findings.append(finding("warning", project, "script has no recognizable character/dialogue exchange", rel))

    if "\t" in text:
        findings.append(finding("warning", project, "tabs found; Fountain should remain plain text without manual tab alignment", rel))

    return findings


def check_template(root: Path) -> list[dict[str, str]]:
    template = root / "screenplays" / "_TEMPLATE"
    required = (
        "README.md",
        "treatment.md",
        "bible.md",
        "continuity.md",
        "script/main.fountain",
        "episodes/_EPISODE_TEMPLATE.fountain",
    )
    findings: list[dict[str, str]] = []
    if not template.is_dir():
        return [finding("error", "_TEMPLATE", "screenplays/_TEMPLATE/ is missing")]
    for relative in required:
        if not (template / relative).is_file():
            findings.append(finding("error", "_TEMPLATE", f"template is missing {relative}", f"screenplays/_TEMPLATE/{relative}"))
    return findings


def check_project(root: Path, project_dir: Path) -> list[dict[str, str]]:
    slug = project_dir.name
    findings: list[dict[str, str]] = []
    readme = project_dir / "README.md"

    if not SLUG_RE.fullmatch(slug):
        findings.append(finding("error", slug, "project folder must be a lowercase kebab-case slug", f"screenplays/{slug}"))
    if not readme.is_file():
        findings.append(finding("error", slug, "missing README.md", f"screenplays/{slug}/README.md"))
        return findings

    metadata = parse_metadata(readme)
    for field in METADATA_FIELDS:
        if not metadata.get(field):
            findings.append(finding("error", slug, f"README metadata is missing {field}", f"screenplays/{slug}/README.md"))

    declared_slug = metadata.get("Slug", "")
    if declared_slug and declared_slug != slug:
        findings.append(finding("error", slug, f"README Slug {declared_slug!r} does not match folder {slug!r}", f"screenplays/{slug}/README.md"))

    fmt = metadata.get("Format", "").lower()
    status = metadata.get("Status", "").lower()
    title = metadata.get("Title") or None

    if fmt and fmt not in FORMATS:
        findings.append(finding("error", slug, f"Format must be one of: {', '.join(sorted(FORMATS))}", f"screenplays/{slug}/README.md"))
    if status and status not in STATUSES:
        findings.append(finding("error", slug, f"Status must be one of: {', '.join(sorted(STATUSES))}", f"screenplays/{slug}/README.md"))

    source = metadata.get("Source", "")
    if source and source.lower() != "original":
        refs = re.findall(r"books/([a-z0-9]+(?:-[a-z0-9]+)*)/?", source)
        if not refs:
            findings.append(finding("error", slug, "Source must be 'original' or reference one or more books/<slug>/ paths", f"screenplays/{slug}/README.md"))
        for book_slug in refs:
            if not (root / "books" / book_slug).is_dir():
                findings.append(finding("error", slug, f"Source references missing book books/{book_slug}/", f"screenplays/{slug}/README.md"))

    require_script = status in SCRIPT_REQUIRED
    if fmt in {"feature", "short", "pilot"}:
        canonical = project_dir / "script" / "main.fountain"
        if require_script and not canonical.is_file():
            findings.append(finding("error", slug, "drafting/revision/locked projects require script/main.fountain", f"screenplays/{slug}/script/main.fountain"))
        if canonical.is_file():
            findings.extend(check_fountain(canonical, slug, title, require_dialogue=require_script))

        stray_episodes = [p for p in (project_dir / "episodes").glob("*.fountain") if not p.name.startswith("_")] if (project_dir / "episodes").is_dir() else []
        if stray_episodes:
            findings.append(finding("warning", slug, "feature/short/pilot project contains episode files; use Format: series or limited-series if these are canonical episodes"))

    elif fmt in {"series", "limited-series"}:
        episodes_dir = project_dir / "episodes"
        episodes = sorted(p for p in episodes_dir.glob("*.fountain") if not p.name.startswith("_")) if episodes_dir.is_dir() else []
        if require_script and not episodes:
            findings.append(finding("error", slug, "drafting/revision/locked series projects require at least one episodes/epNN-title.fountain file", f"screenplays/{slug}/episodes"))
        for episode in episodes:
            if not EPISODE_RE.fullmatch(episode.name):
                findings.append(finding("error", slug, "episode filename must match epNN-title.fountain (or epNNN-title.fountain)", episode.relative_to(root).as_posix()))
            findings.extend(check_fountain(episode, slug, expected_title=None, require_dialogue=require_script))

        single_script = project_dir / "script" / "main.fountain"
        if single_script.is_file():
            findings.append(finding("warning", slug, "series project contains script/main.fountain; canonical produced episodes belong in episodes/"))

        if status in {"revision", "locked"} and not (project_dir / "bible.md").is_file():
            findings.append(finding("warning", slug, "revision/locked series should carry bible.md for continuity and series-engine context", f"screenplays/{slug}/bible.md"))

    return findings


def run(root: Path, slug: str | None = None) -> dict[str, object]:
    screenplays = root / "screenplays"
    findings = check_template(root)
    projects: list[Path] = []

    if not screenplays.is_dir():
        findings.append(finding("error", "Desk", "screenplays/ directory is missing"))
    elif slug:
        project = screenplays / slug
        if not project.is_dir() or slug.startswith("_"):
            findings.append(finding("error", slug, f"screenplay project screenplays/{slug}/ does not exist"))
        else:
            projects = [project]
    else:
        projects = sorted(p for p in screenplays.iterdir() if p.is_dir() and not p.name.startswith("_"))

    for project in projects:
        findings.extend(check_project(root, project))

    errors = sum(item["level"] == "error" for item in findings)
    warnings = sum(item["level"] == "warning" for item in findings)
    return {
        "projects": len(projects),
        "errors": errors,
        "warnings": warnings,
        "findings": findings,
    }


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("slug", nargs="?", help="optional screenplay project slug")
    parser.add_argument("--root", type=Path, default=Path(__file__).resolve().parents[1])
    parser.add_argument("--json", action="store_true")
    args = parser.parse_args()

    report = run(args.root.resolve(), args.slug)
    if args.json:
        print(json.dumps(report, indent=2))
    else:
        for item in report["findings"]:
            location = f" ({item['path']})" if item.get("path") else ""
            print(f"{item['level'].upper()}: {item['project']}: {item['message']}{location}")
        if report["errors"]:
            print(f"\nScreenplay check failed: {report['errors']} error(s), {report['warnings']} warning(s).")
        else:
            print(f"Screenplay check passed: {report['projects']} project(s), {report['warnings']} warning(s).")
    return 1 if report["errors"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
