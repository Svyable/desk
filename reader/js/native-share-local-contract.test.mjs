import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const loader = readFileSync(fileURLToPath(new URL('./app-loader.js', import.meta.url)), 'utf8');
const ownership = readFileSync(fileURLToPath(new URL('../.bookself-runtime-files', import.meta.url)), 'utf8');
const nativeShare = readFileSync(fileURLToPath(new URL('./native-share.js', import.meta.url)), 'utf8');

assert.match(loader, /const nativeShareUrl = new URL\('\.\/native-share\.js', import\.meta\.url\)\.href;/);
assert.doesNotMatch(loader, /native-share\.js[^\n]*svyable\.github\.io\/bookself/);
assert.match(ownership, /^js\/native-share\.js$/m);
assert.match(nativeShare, /export function nativeShareAvailable/);
assert.match(nativeShare, /export async function shareOrCopy/);
assert.match(nativeShare, /export function installNativeShare/);

console.log('Desk Reader owns canonical native sharing locally and tracks it in the Bookself runtime sync set');
