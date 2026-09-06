# Publication status

The manuscript now has a complete 20-chapter arc plus front and back matter, with the previously short opening and closing chapters deepened for the Desk full-book standard.

The remaining pre-publication gates are mechanical and repository-wide:

1. run `python3 scripts/check-book-length.py beyond-the-veil` on the exact branch snapshot;
2. run `python3 scripts/catalog.py --write` to regenerate exact Desk catalog data;
3. run `python3 scripts/check-desk.py`;
4. land the validated Desk publication candidate on `main`;
5. prepare the Shelf edition using the canonical local release helper.

Until those executable checks pass, the book remains `Drafting` on Desk even though the planned manuscript is structurally complete.
