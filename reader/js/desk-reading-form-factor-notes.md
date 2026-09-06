# Reader form-factor pass — verification note

This branch intentionally changes presentation only.

- Desktop and wide-screen chrome aligns to a bounded reading canvas rather than stretching controls to viewport edges.
- Phone/coarse-pointer controls retain at least 44px targets and safe-area-aware spacing.
- Tablet/desktop settings use a right-side sheet; phone portrait keeps the existing bottom-sheet pattern.
- Short landscape removes redundant labels and uses a compact side settings sheet so the book remains visually dominant.
- Forced-colors and reduced-motion fallbacks remain explicit.

The CSS contract forbids ownership of Reader page geometry variables, `.page-inner`, `.page-surface`, manuscript font metrics, line height, and text indentation.

No live browser/device automation is available in this connected GitHub session, so this note does not claim pixel-level rendering validation.