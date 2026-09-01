import assert from 'node:assert/strict';
import {
  rewriteDeskPublicationUrl,
  deskWorkerUrl,
  deskManifestUrl,
  deskReaderScope,
  shouldRedirectShelfWorker,
  rewriteOfflineReadinessMessage,
} from './desk-runtime-bridge.js';

const moduleUrl = 'https://svyable.github.io/desk/reader/js/desk-runtime-bridge.js';

assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/shelf/books/example/README.md'),
  'https://svyable.github.io/desk/books/example/README.md'
);
assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/shelf/books/example/ch01.md?x=1#part'),
  'https://svyable.github.io/desk/books/example/ch01.md?x=1#part'
);
assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/shelf/reader/js/app.js'),
  'https://svyable.github.io/shelf/reader/js/app.js'
);
assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/desk/books/example/README.md'),
  'https://svyable.github.io/desk/books/example/README.md'
);
assert.equal(
  rewriteDeskPublicationUrl('https://example.com/shelf/books/example/README.md'),
  'https://example.com/shelf/books/example/README.md'
);

assert.equal(deskWorkerUrl(moduleUrl), 'https://svyable.github.io/desk/reader/sw.js');
assert.equal(deskManifestUrl(moduleUrl), 'https://svyable.github.io/desk/reader/manifest.webmanifest');
assert.equal(deskReaderScope(moduleUrl), '/desk/reader/');

assert.equal(
  shouldRedirectShelfWorker('https://svyable.github.io/shelf/reader/sw.js'),
  true
);
assert.equal(
  shouldRedirectShelfWorker('https://svyable.github.io/desk/reader/sw.js'),
  false
);
assert.equal(
  shouldRedirectShelfWorker('https://svyable.github.io/shelf/reader/js/app.js'),
  false
);

const original = {
  type: 'BOOKSELF_OFFLINE_READINESS',
  url: 'https://svyable.github.io/shelf/books/example/README.md',
};
const rewritten = rewriteOfflineReadinessMessage(original);
assert.notEqual(rewritten, original);
assert.equal(rewritten.url, 'https://svyable.github.io/desk/books/example/README.md');
assert.equal(original.url, 'https://svyable.github.io/shelf/books/example/README.md');

const other = { type: 'BOOKSELF_ACTIVATE_UPDATE', url: 'https://svyable.github.io/shelf/books/example/README.md' };
assert.equal(rewriteOfflineReadinessMessage(other), other);

console.log('Desk runtime bridge: 15 assertions passed');
