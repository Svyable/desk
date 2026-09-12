#!/usr/bin/env python3
"""Check that every Desk cover agrees with its canonical book and title page."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
AUTHOR = 'Sven Hardy Benson'


def opening(text):
    heading = re.search(r'^# (.+)$', text, re.M)
    if not heading:
        return '', ''
    tail = text[heading.end():].lstrip()
    subtitle = re.match(r'\*([^*\n].*?)\*\s*(?:\n|$)', tail)
    return heading[1], subtitle[1] if subtitle else ''


def main():
    errors = []
    slugs = json.loads((ROOT / 'catalog.json').read_text())['books']
    for slug in slugs:
        book = ROOT / 'books' / slug
        readme = (book / 'README.md').read_text()
        title, subtitle = opening(readme)
        author = re.search(r'\|\s*\*\*Authors?\*\*\s*\|\s*([^|]+)', readme)
        if not author or author[1].strip() != AUTHOR:
            errors.append(f'{slug}: missing canonical author')
        links = re.findall(r'\]\((manuscript/[^)]+\.md)\)', readme)
        front = next((p for p in links if p.endswith('front-matter.md')), None)
        if not front and len(set(links)) == 1:
            front = links[0]
        if not front:
            errors.append(f'{slug}: no title-page link')
            continue
        text = (book / front).read_text()
        if opening(text) != (title, subtitle):
            errors.append(f'{slug}: cover and title-page title/subtitle differ')
        if not re.search(r'^\*\*' + AUTHOR + r'\*\*$', text[:1000], re.M):
            errors.append(f'{slug}: title page lacks author byline')
        if subtitle and (title == subtitle or title.endswith(': ' + subtitle)):
            errors.append(f'{slug}: subtitle duplicated in title')
    if errors:
        print('\n'.join(errors))
        return 1
    print(f'Cover metadata OK: {len(slugs)} books; titles, subtitles, and {AUTHOR} bylines agree.')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
