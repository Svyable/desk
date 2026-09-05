const SECONDARY_ACTION_IDS = Object.freeze([
  'copyPreviewBtn',
  'citeBtn',
  'feedbackBtn',
  'sourceLink',
  'historyLink',
  'rightsLink',
]);

function installStyles() {
  if (document.getElementById('deskCoverActionsStyle')) return;
  const style = document.createElement('style');
  style.id = 'deskCoverActionsStyle';
  style.textContent = `
    .cover-more{position:relative}
    .cover-more>summary{min-height:2.55rem;padding:.48rem .8rem;border:1px solid color-mix(in srgb,var(--border) 82%,transparent);border-radius:999px;background:color-mix(in srgb,var(--bg-elevated) 72%,transparent);color:var(--text-secondary);display:inline-flex;align-items:center;justify-content:center;cursor:pointer;list-style:none;font-family:var(--font-ui);font-size:.76rem;text-transform:none}
    .cover-more>summary::-webkit-details-marker{display:none}
    .cover-more>summary::after{content:'⋯';margin-left:.4rem;color:var(--accent);line-height:1}
    .cover-more>summary:hover,.cover-more>summary:focus-visible,.cover-more[open]>summary{border-color:color-mix(in srgb,var(--accent) 58%,var(--border));color:var(--accent);background:color-mix(in srgb,var(--accent-glow) 42%,var(--bg-elevated))}
    .cover-more-menu{position:absolute;z-index:24;right:0;bottom:calc(100% + .48rem);display:grid;min-width:min(20rem,84vw);padding:.42rem;border:1px solid color-mix(in srgb,var(--border) 88%,transparent);border-radius:14px;background:color-mix(in srgb,var(--bg-elevated) 96%,transparent);box-shadow:0 20px 54px color-mix(in srgb,var(--shadow) 58%,transparent)}
    .cover-more:not([open]) .cover-more-menu{display:none}
    .cover-more-menu :is(button,a){width:100%;min-height:2.7rem;justify-content:flex-start;padding:.55rem .7rem;border-radius:9px;color:var(--text-secondary);font-family:var(--font-ui);font-size:.78rem;text-transform:none}
    .cover-more-menu :is(button,a):hover,.cover-more-menu :is(button,a):focus-visible{background:color-mix(in srgb,var(--accent-glow) 38%,transparent);color:var(--accent)}
    @media(max-width:700px){.cover-more>summary{min-height:2.75rem;padding-inline:.9rem}.cover-more-menu{position:fixed;left:max(.75rem,env(safe-area-inset-left));right:max(.75rem,env(safe-area-inset-right));bottom:max(.75rem,env(safe-area-inset-bottom));min-width:0;max-height:min(70dvh,28rem);overflow:auto;border-radius:18px}}
    @media(forced-colors:active){.cover-more-menu,.cover-more>summary{border:1px solid ButtonText;background:Canvas;color:CanvasText;forced-color-adjust:auto}}
  `;
  document.head.appendChild(style);
}

function installCoverActions() {
  const dock = document.getElementById('coverDock');
  if (!dock || dock.querySelector('.cover-more')) return;
  const actions = SECONDARY_ACTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
  if (!actions.length) return;

  const details = document.createElement('details');
  details.className = 'cover-more';
  const summary = document.createElement('summary');
  summary.textContent = 'More';
  summary.setAttribute('aria-label', 'More book actions');
  const menu = document.createElement('div');
  menu.className = 'cover-more-menu';
  menu.setAttribute('role', 'group');
  menu.setAttribute('aria-label', 'Book actions');
  actions.forEach((action) => menu.appendChild(action));
  details.append(summary, menu);
  dock.appendChild(details);

  details.addEventListener('toggle', () => {
    if (details.open) menu.querySelector(':is(button,a):not([hidden])')?.focus({ preventScroll: true });
  });
  details.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && details.open) {
      details.open = false;
      summary.focus({ preventScroll: true });
    }
  });
}

installStyles();
installCoverActions();
