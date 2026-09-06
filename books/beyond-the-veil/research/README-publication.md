# Publication handoff

The prose pass is complete. Treat the following commands as the authoritative handoff gates:

```bash
python3 scripts/check-book-length.py beyond-the-veil
python3 scripts/catalog.py --write
python3 scripts/check-desk.py
```

Only after all three succeed should the parent new-book PR be landed on Desk `main` and the canonical Desk-to-Shelf release helper be used.
