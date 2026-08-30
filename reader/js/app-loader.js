const upstream = 'https://svyable.github.io/shelf/reader/js/';
const appUrl = `${upstream}app.js`;

function showFatal(error) {
  console.error('Desk Reader bootstrap failed', error);

  const main = document.createElement('main');
  main.style.maxWidth = '42rem';
  main.style.margin = '4rem auto';
  main.style.padding = '0 1.25rem';
  main.style.fontFamily = 'system-ui, sans-serif';
  main.style.lineHeight = '1.55';

  const title = document.createElement('h1');
  title.textContent = 'Desk Reader could not start';

  const detail = document.createElement('p');
  detail.textContent = error instanceof Error ? error.message : String(error);

  const help = document.createElement('p');
  help.append(
    'The manuscript files are still available. ',
    Object.assign(document.createElement('a'), {
      href: '../README.md#the-books',
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
  diagnostic.style.opacity = '.72';
  diagnostic.textContent =
    'If the shared Shelf Reader changed recently, the Desk compatibility shim may need to be updated.';

  main.append(title, detail, help, diagnostic);
  document.body.replaceChildren(main);
}

try {
  const response = await fetch(appUrl, { cache: 'no-cache' });
  if (!response.ok) {
    throw new Error(`Could not load shared Reader (${response.status})`);
  }

  let source = await response.text();

  source = source.replace(
    /from\s+(['"])\.\/([^'"]+)\1/g,
    (_match, quote, path) => `from ${quote}${upstream}${path}${quote}`
  );

  // Shelf intentionally shows only published books. Desk uses the same Reader UI
  // but must include drafts. Match semantically rather than depending on exact
  // whitespace so harmless upstream formatting changes do not break Desk.
  const catalogGate = /if\s*\(\s*meta\.published\s*\)\s*entries\.push\(\s*meta\s*\)\s*;/;
  if (!catalogGate.test(source)) {
    throw new Error('Shared Reader catalog hook changed; update Desk loader.');
  }
  source = source.replace(
    catalogGate,
    "if (meta.published || window.__IMPRINT?.role === 'desk') entries.push(meta);"
  );

  // A blob-imported module cannot resolve the Shelf service worker relatively.
  // Keep this rewrite tolerant of quote and whitespace changes as well.
  source = source.replace(
    /new\s+URL\(\s*(['"])\.\.\/sw\.js\1\s*,\s*import\.meta\.url\s*\)/,
    "new URL('https://svyable.github.io/shelf/reader/sw.js')"
  );

  const moduleUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
  try {
    await import(moduleUrl);
  } finally {
    URL.revokeObjectURL(moduleUrl);
  }
} catch (error) {
  showFatal(error);
}
