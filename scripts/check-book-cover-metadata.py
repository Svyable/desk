#!/usr/bin/env python3
"""Read-only cover audit. Scan every book, or pass slugs for a focused check."""
import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUTHOR = 'Sven Hardy Benson'
SLUG = re.compile(r'^[a-z0-9][a-z0-9-]*$')


def opening(text):
    heading = re.search(r'^# (.+)$', text, re.M)
    if not heading:
        return '', ''
    tail = text[heading.end():].lstrip()
    subtitle = re.match(r'\*([^*\n].*?)\*\s*(?:\n|$)', tail)
    return heading[1].strip(), subtitle[1].strip() if subtitle else ''


def check_book(root, slug):
    errors = []
    if not SLUG.fullmatch(slug):
        return [f'{slug}: invalid book slug']
    book = root / 'books' / slug
    try:
        readme = (book / 'README.md').read_text(encoding='utf-8')
        title, subtitle = opening(readme)
        if not title or title in {'Your Book Title', 'Front Matter'}:
            errors.append(f'{slug}: missing or placeholder book title')
        author = re.search(r'\|\s*\*\*Authors?\*\*\s*\|\s*([^|\n]+)', readme)
        if not author or author[1].strip() != AUTHOR:
            errors.append(f'{slug}: missing canonical author')
        links = re.findall(r'^- \[[ xX]\] \[[^\]]+\]\((manuscript/[^)]+\.md)\)', readme, re.M)
        front = next((p for p in links if re.search(r'(?:^|/)(?:\d+-)?front-matter\.md$', p)), None)
        if not front and len(set(links)) == 1:
            front = links[0]
        if not front:
            return errors + [f'{slug}: no title-page link in Contents']
        path = (book / front).resolve()
        if not path.is_relative_to(book.resolve()):
            return errors + [f'{slug}: title-page link leaves its book folder']
        text = path.read_text(encoding='utf-8')
        if opening(text) != (title, subtitle):
            errors.append(f'{slug}: cover and title-page title/subtitle differ')
        # Allow existing italic edition/tagline lines, but never count an author
        # mention in body prose, a later section, or a copyright notice.
        byline = False
        for line in text.splitlines()[1:]:
            line = line.strip()
            if line == '**' + AUTHOR + '**':
                byline = True
                break
            if not line or re.fullmatch(r'\*[^*].*\*', line):
                continue
            break
        if not byline:
            errors.append(f'{slug}: title-page opening lacks author byline')
        if subtitle and (title == subtitle or title.endswith(': ' + subtitle)):
            errors.append(f'{slug}: subtitle duplicated in title')
    except (OSError, UnicodeError) as exc:
        errors.append(f'{slug}: cannot read book metadata ({exc})')
    return errors


def audit(root, requested=()):
    books = root / 'books'
    discovered = sorted(p.name for p in books.iterdir() if p.is_dir() and not p.name.startswith('_')) if books.is_dir() else []
    slugs = list(dict.fromkeys(requested)) if requested else discovered
    errors = []
    if not slugs:
        errors.append('no books discovered under books/')
    # Global mode detects unregistered books and still checks their covers.
    if not requested:
        try:
            manifest = json.loads((root / 'catalog.json').read_text(encoding='utf-8'))
            entries = manifest.get('books') if isinstance(manifest, dict) else None
            if manifest.get('version') != 1 or not isinstance(entries, list) or not all(isinstance(s, str) for s in entries):
                raise ValueError('expected version 1 with a books array of slugs')
            if len(entries) != len(set(entries)):
                errors.append('catalog.json contains duplicate book entries')
            for slug in sorted(set(discovered) - set(entries)):
                errors.append(f'{slug}: book missing from catalog.json')
            for slug in sorted(set(entries) - set(discovered)):
                errors.append(f'{slug}: catalog entry has no book folder')
        except (OSError, UnicodeError, ValueError, AttributeError) as exc:
            errors.append(f'cannot read catalog.json ({exc})')
    for slug in slugs:
        errors.extend(check_book(root, slug))
    return {'ok': not errors, 'books_checked': len(slugs), 'errors': errors}


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('slugs', nargs='*', help='optional book slugs; omitting scans all book folders')
    parser.add_argument('--root', type=Path, default=ROOT)
    parser.add_argument('--json', action='store_true', help='emit a structured audit report')
    args = parser.parse_args(argv)
    report = audit(args.root.resolve(), args.slugs)
    if args.json:
        print(json.dumps(report, ensure_ascii=False))
    elif report['errors']:
        print('\n'.join(report['errors']))
    else:
        print(f"Cover metadata OK: {report['books_checked']} books; titles, subtitles, and {AUTHOR} bylines agree.")
    return 0 if report['ok'] else 1


if __name__ == '__main__':
    raise SystemExit(main())
