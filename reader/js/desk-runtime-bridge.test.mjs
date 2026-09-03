import assert from 'node:assert/strict';
import {
  bootstrapFailureKind,
  bootstrapRecoveryCopy,
  deskManifestUrl,
  deskReaderScope,
  deskWorkerUrl,
  fetchBootstrapResource,
  responseError,
  retryPauseMs,
  rewriteDeskPublicationUrl,
  rewriteSharedModuleSpecifiers,
  shouldRedirectShelfWorker,
} from './desk-runtime-bridge.js';

const moduleUrl = 'https://svyable.github.io/desk/reader/js/desk-runtime-bridge.js';
let assertions = 0;
const check = (run) => {
  run();
  assertions += 1;
};

check(() => assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/shelf/books/example/README.md'),
  'https://svyable.github.io/desk/books/example/README.md'
));
check(() => assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/shelf/books/example/ch01.md?x=1#part'),
  'https://svyable.github.io/desk/books/example/ch01.md?x=1#part'
));
check(() => assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/shelf/reader/js/app.js'),
  'https://svyable.github.io/shelf/reader/js/app.js'
));
check(() => assert.equal(
  rewriteDeskPublicationUrl('https://svyable.github.io/desk/books/example/README.md'),
  'https://svyable.github.io/desk/books/example/README.md'
));
check(() => assert.equal(
  rewriteDeskPublicationUrl('https://example.com/shelf/books/example/README.md'),
  'https://example.com/shelf/books/example/README.md'
));

check(() => assert.equal(deskWorkerUrl(moduleUrl), 'https://svyable.github.io/desk/reader/sw.js'));
check(() => assert.equal(deskManifestUrl(moduleUrl), 'https://svyable.github.io/desk/reader/manifest.webmanifest'));
check(() => assert.equal(deskReaderScope(moduleUrl), '/desk/reader/'));

check(() => assert.equal(
  shouldRedirectShelfWorker('https://svyable.github.io/shelf/reader/sw.js'),
  true
));
check(() => assert.equal(
  shouldRedirectShelfWorker('https://svyable.github.io/desk/reader/sw.js'),
  false
));
check(() => assert.equal(
  shouldRedirectShelfWorker('https://svyable.github.io/shelf/reader/js/app.js'),
  false
));

check(() => assert.equal(bootstrapFailureKind(new TypeError('network')), 'transient'));
check(() => assert.equal(bootstrapFailureKind(Object.assign(new Error('server'), { status: 503 })), 'transient'));
check(() => assert.equal(bootstrapFailureKind(Object.assign(new Error('rate'), { status: 429 })), 'transient'));
check(() => assert.equal(bootstrapFailureKind(Object.assign(new Error('missing'), { status: 404 })), 'permanent'));
check(() => assert.equal(bootstrapFailureKind(Object.assign(new Error('abort'), { name: 'AbortError' })), 'abort'));
check(() => assert.equal(retryPauseMs(140), 140));
check(() => assert.equal(retryPauseMs(140, { offline: true }), 1200));
check(() => assert.equal(retryPauseMs(5000, { offline: true }), 1800));
check(() => assert.equal(responseError({ status: 502 }).status, 502));

let calls = 0;
const pauses = [];
const response = await fetchBootstrapResource('reader.js', {
  retryDelays: [0, 0],
  pause: async (delay, context) => pauses.push([delay, context.attempt]),
  fetchImpl: async () => {
    calls += 1;
    if (calls < 3) throw new TypeError('network');
    return { ok: true, status: 200 };
  },
});
check(() => assert.equal(response.status, 200));
check(() => assert.equal(calls, 3));
check(() => assert.deepEqual(pauses, [[0, 0], [0, 1]]));

let missingCalls = 0;
await assert.rejects(
  fetchBootstrapResource('reader.js', {
    retryDelays: [0, 0],
    pause: async () => {},
    fetchImpl: async () => {
      missingCalls += 1;
      return { ok: false, status: 404 };
    },
  }),
  /404/
);
assertions += 1;
check(() => assert.equal(missingCalls, 1));

let serviceCalls = 0;
await fetchBootstrapResource('reader.js', {
  retryDelays: [0],
  pause: async () => {},
  fetchImpl: async () => {
    serviceCalls += 1;
    return serviceCalls === 1 ? { ok: false, status: 503 } : { ok: true, status: 200 };
  },
});
check(() => assert.equal(serviceCalls, 2));
check(() => assert.equal(bootstrapRecoveryCopy(new TypeError('offline'), { online: false }).action, 'Try again'));
check(() => assert.match(bootstrapRecoveryCopy(new TypeError('network')).title, /temporarily/i));
check(() => assert.match(bootstrapRecoveryCopy(new Error('contract')).title, /update/i));

const moduleRewrite = rewriteSharedModuleSpecifiers(
  "import { ready } from './base.js';\nconst lazy = () => import('./pagination-scheduler.js');",
  'https://svyable.github.io/shelf/reader/js/'
);
check(() => assert.equal(moduleRewrite.staticImports, 1));
check(() => assert.equal(moduleRewrite.dynamicImports, 1));
check(() => assert.match(moduleRewrite.source, /shelf\/reader\/js\/base\.js/));
check(() => assert.match(moduleRewrite.source, /shelf\/reader\/js\/pagination-scheduler\.js/));

console.log(`Desk runtime bridge: ${assertions}/33 assertions passed`);
