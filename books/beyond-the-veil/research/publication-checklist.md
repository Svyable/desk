# Publication checklist

## Manuscript gates

- [x] 20 planned chapter files present
- [x] Front matter present
- [x] Back matter present
- [x] Research brief present
- [x] Research trail present
- [x] Rights notice present
- [x] Machine-readable rights present
- [ ] Every chapter is at least 3,000 words
- [ ] Chapter-only manuscript is at least 65,000 words
- [ ] `python3 scripts/check-book-length.py beyond-the-veil` passes

## Desk integration gates

- [ ] Root README catalog synchronized
- [ ] `catalog.json` synchronized
- [ ] `llms.txt` synchronized
- [ ] `sitemap.xml` synchronized
- [ ] Chapter-feedback Book dropdown synchronized
- [ ] `python3 scripts/check-desk.py` passes
- [ ] Publication candidate committed to Desk `main`

## Shelf release gate

Release only from a clean committed Desk snapshot using the repository's canonical local release procedure. Do not mark the Desk copy `Published`.
