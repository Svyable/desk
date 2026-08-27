const upstream = 'https://svyable.github.io/shelf/reader/js/';
const appUrl = `${upstream}app.js`;

const response = await fetch(appUrl, { cache: 'no-cache' });
if (!response.ok) {
  throw new Error(`Could not load shared Reader (${response.status})`);
}

let source = await response.text();

source = source.replace(
  /from\s+(['"])\.\/([^'"]+)\1/g,
  (_match, quote, path) => `from ${quote}${upstream}${path}${quote}`
);

const catalogGate = 'if (meta.published) entries.push(meta);';
if (!source.includes(catalogGate)) {
  throw new Error('Shared Reader catalog hook changed; update Binder loader.');
}
source = source.replace(
  catalogGate,
  "if (meta.published || window.__IMPRINT?.role === 'binder') entries.push(meta);"
);

source = source.replace(
  "new URL('../sw.js', import.meta.url)",
  "new URL('https://svyable.github.io/shelf/reader/sw.js')"
);

const moduleUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
try {
  await import(moduleUrl);
} finally {
  URL.revokeObjectURL(moduleUrl);
}
