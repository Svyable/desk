#!/usr/bin/env python3
"""Prepare one Desk -> Shelf release, including its canonical web identity."""

from __future__ import annotations

import hashlib
import importlib.util
import json
import re
import subprocess
import sys
from pathlib import Path
from types import ModuleType

HERE = Path(__file__).resolve().parent
FEEDBACK_REL = ".github/ISSUE_TEMPLATE/chapter-feedback.yml"
PROVENANCE_NAME = "release.json"
PROVENANCE_SCHEMA = "svyable-release-v1"
PAYLOAD_ALGORITHM = "sha256-tree-v1"


def load_script(filename: str, module_name: str) -> ModuleType:
    path = HERE / filename
    if not path.is_file():
        raise RuntimeError(f"missing Bookself release component: {path}")
    spec = importlib.util.spec_from_file_location(module_name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(f"could not load Bookself release component: {path}")
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


release_core = load_script("release-book.py", "bookself_release_core")
publication_pages = load_script(
    "generate-publication-pages.py", "bookself_publication_pages"
)
ReleaseError = release_core.ReleaseError


def run_git(root: Path, *args: str, check: bool = True) -> subprocess.CompletedProcess[str]:
    proc = subprocess.run(
        ["git", "-C", str(root), *args],
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
    )
    if check and proc.returncode:
        detail = proc.stderr.strip() or proc.stdout.strip() or "git command failed"
        raise ReleaseError(f"{root}: {detail}")
    return proc


def tracked_path(root: Path, rel: str) -> bool:
    proc = run_git(root, "ls-files", "--", rel, check=False)
    return bool(proc.stdout.strip())


def restore_clean_release_path(root: Path, rel: str) -> None:
    """Restore one path to HEAD after a failed generated-surface step.

    The release wrapper checks every affected path is clean before mutation, so
    restoring tracked bytes and deleting newly-created untracked bytes is safe.
    """

    if tracked_path(root, rel):
        run_git(root, "restore", "--source=HEAD", "--worktree", "--", rel)
    run_git(root, "clean", "-fd", "--", rel)


def rollback_release(root: Path, slug: str) -> None:
    for rel in (
        "README.md",
        "catalog.json",
        f"books/{slug}",
        FEEDBACK_REL,
        "publication",
        "sitemap.xml",
    ):
        restore_clean_release_path(root, rel)


def imprint_repository(root: Path, label: str) -> dict[str, str]:
    path = root / "imprint.json"
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        raise ReleaseError(f"could not read {label} imprint repository identity: {exc}") from exc
    github = data.get("github") or {}
    owner = str(github.get("owner") or data.get("owner") or "").strip()
    repo = str(github.get("repo") or data.get("repo") or "").strip()
    if not owner or not repo:
        raise ReleaseError(f"{label} imprint must declare a GitHub owner and repo")
    return {"owner": owner, "repo": repo}


def publication_payload_manifest(root: Path, slug: str) -> dict[str, str]:
    manifest = release_core.file_manifest(root / "books" / slug, exclude_readme=True)
    # release.json is destination-owned provenance, never part of the authored payload.
    manifest.pop(PROVENANCE_NAME, None)
    return manifest


def publication_payload_digest(manifest: dict[str, str]) -> str:
    canonical = json.dumps(
        manifest,
        sort_keys=True,
        separators=(",", ":"),
        ensure_ascii=False,
    ).encode("utf-8")
    return hashlib.sha256(canonical).hexdigest()


def prepare_release_provenance(
    desk: Path,
    shelf: Path,
    slug: str,
    source_commit: str,
) -> str:
    if not re.fullmatch(r"[0-9a-f]{40}", source_commit):
        raise ReleaseError(f"Desk source commit is not a full Git SHA: {source_commit!r}")

    source_files = publication_payload_manifest(desk, slug)
    shelf_files = publication_payload_manifest(shelf, slug)
    if source_files != shelf_files:
        raise ReleaseError(
            "cannot record release provenance: Shelf publication payload no longer "
            "byte-matches the committed Desk snapshot"
        )

    source_repo = imprint_repository(desk, "Desk")
    destination_repo = imprint_repository(shelf, "Shelf")
    relative = f"books/{slug}"
    data = {
        "schema": PROVENANCE_SCHEMA,
        "source": {
            **source_repo,
            "commit": source_commit,
            "path": relative,
        },
        "destination": {
            **destination_repo,
            "path": relative,
        },
        "payload": {
            "algorithm": PAYLOAD_ALGORITHM,
            "digest": publication_payload_digest(source_files),
            "files": len(source_files),
        },
    }
    text = json.dumps(data, indent=2, ensure_ascii=False) + "\n"
    path = shelf / relative / PROVENANCE_NAME
    release_core.atomic_write(path, text)
    if path.read_text(encoding="utf-8") != text:
        raise ReleaseError("Shelf release provenance verification failed")
    return path.relative_to(shelf).as_posix()


def upsert_feedback_option(markdown: str, slug: str) -> tuple[str, str]:
    """Add a book slug to the Shelf chapter-feedback dropdown.

    The helper intentionally edits only the options owned by the dropdown whose
    id is ``book``. Existing order and all other form fields are preserved.
    """

    if not release_core.SLUG_RE.fullmatch(slug) or slug == "_TEMPLATE":
        raise ReleaseError(
            "feedback book slug must use lowercase letters, numbers, and hyphens"
        )

    lines = markdown.splitlines(keepends=True)
    book_idx = next(
        (index for index, line in enumerate(lines) if line.strip() == "id: book"),
        None,
    )
    if book_idx is None:
        raise ReleaseError("Shelf chapter-feedback template has no `id: book` dropdown")

    options_idx = None
    for index in range(book_idx + 1, len(lines)):
        stripped = lines[index].strip()
        if stripped == "options:":
            options_idx = index
            break
        if stripped.startswith("- type:"):
            break
    if options_idx is None:
        raise ReleaseError("Shelf chapter-feedback book dropdown has no `options:` list")

    options_indent = len(lines[options_idx]) - len(lines[options_idx].lstrip(" "))
    item_indent = options_indent + 2
    option_re = re.compile(r"^-\s+([a-z0-9][a-z0-9-]*)\s*$")
    entries: list[tuple[int, str]] = []
    end_idx = options_idx + 1

    while end_idx < len(lines):
        line = lines[end_idx]
        stripped = line.strip()
        indent = len(line) - len(line.lstrip(" "))
        if not stripped:
            break
        if indent <= options_indent:
            break
        match = option_re.fullmatch(stripped)
        if match is None:
            break
        entries.append((end_idx, match.group(1)))
        end_idx += 1

    if not entries:
        raise ReleaseError(
            "Shelf chapter-feedback book dropdown has no readable slug options"
        )

    names = [name for _, name in entries]
    if slug in names:
        return markdown, "unchanged"

    insert_at = end_idx
    for index, name in entries:
        if slug < name:
            insert_at = index
            break

    newline = "\r\n" if any(line.endswith("\r\n") for line in lines) else "\n"
    lines.insert(insert_at, " " * item_indent + f"- {slug}{newline}")
    return "".join(lines), "added"


def prepare_feedback_registration(shelf: Path, slug: str) -> str:
    """Register a released book in Shelf feedback when that surface exists."""

    path = shelf / FEEDBACK_REL
    if not path.is_file():
        return "not-configured"

    original = path.read_text(encoding="utf-8")
    updated, action = upsert_feedback_option(original, slug)
    if updated != original:
        release_core.atomic_write(path, updated)
    if path.read_text(encoding="utf-8") != updated:
        raise ReleaseError("Shelf chapter-feedback registration verification failed")
    return action


def publication_web(root: Path, slug: str) -> tuple[int, int, str]:
    try:
        outputs = publication_pages.build(root)
    except Exception as exc:  # generator owns its own typed errors
        raise ReleaseError(f"publication web generation failed: {exc}") from exc

    target = f"publication/{slug}/index.html"
    if target not in outputs:
        raise ReleaseError(
            f"publication web generation did not produce {target}; "
            "the released Shelf copy must be Published and cataloged"
        )

    try:
        changed, _ = publication_pages.write_outputs(root, outputs)
        _, stale = publication_pages.write_outputs(root, outputs, check=True)
    except Exception as exc:
        raise ReleaseError(f"publication web write failed: {exc}") from exc
    if stale:
        raise ReleaseError(
            f"publication web verification failed: {stale} generated file(s) remain stale"
        )

    record = publication_pages.publication_record(
        root,
        slug,
        publication_pages.derived_site_url(
            publication_pages.read_json(root / "imprint.json")
        ),
        str(
            publication_pages.read_json(root / "imprint.json").get("name")
            or "Bookself Shelf"
        ).strip(),
    )
    canonical = record["canonical_url"] if record else ""
    return len(outputs), changed, canonical


def prepare_release(desk: Path, shelf: Path, slug: str) -> dict[str, str | int]:
    desk = Path(desk).resolve()
    shelf = Path(shelf).resolve()

    release_core.require_git_worktree(shelf, "Shelf")
    generated_paths = ["publication", "sitemap.xml"]
    if (shelf / FEEDBACK_REL).is_file():
        generated_paths.append(FEEDBACK_REL)
    release_core.require_clean_paths(
        shelf,
        "Shelf",
        generated_paths,
    )

    result = release_core.prepare_release(desk, shelf, slug)
    try:
        provenance_path = prepare_release_provenance(
            desk,
            shelf,
            slug,
            str(result["source_commit"]),
        )
        feedback_action = prepare_feedback_registration(shelf, slug)
        total, changed, canonical = publication_web(shelf, slug)
    except Exception as exc:
        try:
            rollback_release(shelf, slug)
        except Exception as rollback_exc:
            raise ReleaseError(
                f"{exc}; automatic rollback also failed: {rollback_exc}"
            ) from exc
        if isinstance(exc, ReleaseError):
            raise
        raise ReleaseError(str(exc)) from exc

    return {
        **result,
        "provenance_path": provenance_path,
        "feedback_action": feedback_action,
        "publication_files": total,
        "publication_changed": changed,
        "canonical_url": canonical,
    }


def main(argv: list[str]) -> int:
    if len(argv) not in {2, 3} or argv[1] in {"-h", "--help"}:
        print("usage: release.py <slug> [path-to-shelf]", file=sys.stderr)
        return 2

    desk = HERE.parent
    slug = argv[1].strip()
    shelf = (
        Path(argv[2]).expanduser()
        if len(argv) == 3
        else desk.parent / "shelf"
    )

    try:
        result = prepare_release(desk, shelf, slug)
    except ReleaseError as exc:
        print(f"release: {exc}", file=sys.stderr)
        return 1

    print(f"Prepared release: {result['title']}")
    print(f"Desk snapshot: {result['source_commit']}")
    print(f"Shelf branch: {result['shelf_branch']}")
    print(f"Catalog: {result['catalog_action']}")
    print(f"Release provenance: {result['provenance_path']}")
    print(f"Chapter feedback: {result['feedback_action']}")
    print(
        "Publication web: "
        f"{result['publication_changed']} changed / {result['publication_files']} generated files"
    )
    if result.get("canonical_url"):
        print(f"Canonical URL: {result['canonical_url']}")
    print(
        "Verified: Shelf publication payload matches the committed Desk snapshot; "
        "release provenance, Published catalog state, chapter-feedback registration, "
        "canonical publication pages, and sitemap are current."
    )
    print("Nothing was committed or pushed.")
    print()
    print("Review:")
    print(
        f'  git -C "{shelf.resolve()}" diff -- README.md catalog.json '
        f'{FEEDBACK_REL} books/{slug} publication sitemap.xml'
    )
    print()
    print(
        "When it looks right, commit the release on a branch/PR or push it "
        "according to your normal workflow."
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv))
