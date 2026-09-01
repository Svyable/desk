import {
  bootstrapRecoveryCopy,
  fetchBootstrapResource,
  installDeskRuntimeBridge,
} from './desk-runtime-bridge.js';

const upstream = 'https://svyable.github.io/shelf/reader/js/';
const appUrl = `${upstream}app.js?v=desk-20260901-2`;

installDeskRuntimeBridge();

function installRecoveryStyles() {
  if (document.getElementById('deskBootstrapRecoveryStyle')) return;
  const style = document.createElement('style');
  style.id = 'deskBootstrapRecoveryStyle';
  style.textContent = `
    .desk-bootstrap-recovery {
      box-sizing: border-box;
      width: min(42rem, calc(100vw - 32px));
      margin: max(3rem, env(safe-area-inset-top)) auto 2rem;
      padding: 0 max(1rem, env(safe-area-inset-right)) 0 max(1rem, env(safe-area-inset-left));
      font-family: system-ui, sans-serif;
      line-height: 1.55;
    }
    .desk-bootstrap-recovery h1 { font-size: clamp(1.6rem, 7vw, 2.4rem); line-height: 1.1; }
    .desk-bootstrap-recovery button {
      min-height: 40px;
      padding: 8px 14px;
      border: 1px solid currentColor;
      border-radius: 999px;
      background: transparent;
      color: inherit;
      font: inherit;
      font-weight: 650;
      cursor: pointer;
    }
    .desk-bootstrap-recovery-detail { opacity: .72; overflow-wrap: anywhere; }
    @media (pointer: coarse), (max-width: 680px) {
      .desk-bootstrap-recovery button { min-height: 44px; padding-inline: 16px; }
    }
    @media (max-height: 430px) and (orientation: landscape) {
      .desk-bootstrap-recovery { margin-top: max(1rem, env(safe-area-inset-top)); }
      .desk-bootstrap-recovery h1 { margin-block: .4rem; font-size: 1.5rem; }
    }
    @media (forced-colors: active) {
      .desk-bootstrap-recovery button { border: 2px solid ButtonText; forced-color-adjust: auto; }
    }
  `;
  document.head.appendChild(style);
}

function showRecovery(error) {
  console.error('Desk Reader bootstrap failed', error);
  installRecoveryStyles();
  const copy = bootstrapRecoveryCopy(error, { online: navigator.onLine !== false });

  const main = document.createElement('main');
  main.className = 'desk-bootstrap-recovery';
  main.setAttribute('role', 'alert');
  main.setAttribute('aria-live', 'assertive');

  const title = document.createElement('h1');
  title.textContent = copy.title;

  const detail = document.createElement('p');
  detail.textContent = copy.message;

  const retry = document.createElement('button');
  retry.type = 'button';
  retry.textContent = copy.action;
  retry.addEventListener('click', () => window.location.reload());

  const help = document.createElement('p');
  help.append(
    'The manuscript files are still available. ',
    Object.assign(document.createElement('a'), {
      href: 'https://github.com/Svyable/desk#the-books',
      textContent: 'Open the Desk catalog',
    }),
    ' or try the ',
    Object.assign(document.createElement('a'), {
      href: 'https://svyable.github.io/shelf/reader/',
      textContent: 'released Shelf Reader',
    }),
    '.'
  );

  const diagnostic = document.createElement('p');
  diagnostic.className = 'desk-bootstrap-recovery-detail';
  diagnostic.textContent = error instanceof Error ? error.message : String(error);

  main.append(title, detail, retry, help, diagnostic);
  document.body.replaceChildren(main);
  retry.focus({ preventScroll: true });
}

try {
  const response = await fetchBootstrapResource(appUrl);
  let source = await response.text();

  const importPattern = /from\s+(['"])\.\/([^'"]+)\1/g;
  const importMatches = [...source.matchAll(importPattern)].length;
  if (!importMatches) {
    throw new Error('Shared Reader imports were not recognized; update Desk loader.');
  }
  source = source.replace(
    importPattern,
    (_match, quote, path) => `from ${quote}${upstream}${path}${quote}`
  );

  // Shelf intentionally shows only published books. Desk uses the same Reader UI
  // but must include drafts. Match semantically rather than depending on exact
  // whitespace so harmless upstream formatting changes do not break Desk.
  const catalogGate = /if\s*\(\s*meta\.published\s*\)\s*entries\.push\(\s*meta\s*\)\s*;/g;
  const gateMatches = [...source.matchAll(catalogGate)].length;
  if (gateMatches !== 1) {
    throw new Error(`Expected one shared Reader catalog gate; found ${gateMatches}.`);
  }
  source = source.replace(
    catalogGate,
    "if (meta.published || window.__IMPRINT?.role === 'desk') entries.push(meta);"
  );

  const moduleUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
  try {
    await import(moduleUrl);
  } finally {
    URL.revokeObjectURL(moduleUrl);
  }
} catch (error) {
  showRecovery(error);
}
