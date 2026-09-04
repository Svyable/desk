import assert from 'node:assert/strict';
import fs from 'node:fs';

const runtime = fs.readFileSync(new URL('./settings-hierarchy.js', import.meta.url), 'utf8');
const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const worker = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');

assert.match(runtime, /shelf\/reader\/js\/storage\.js/);
assert.match(runtime, /resetReadingAppearancePrefs\(loadPrefs\(\)\)/);
assert.match(runtime, /savePrefs\(/);
assert.match(runtime, /Restores paper, lamp, type size, typeface, and line height/);
assert.match(runtime, /\['shareBtn', 'focusBtn', 'progressBtn', 'helpBtn'\]/);
assert.match(runtime, /\['printBtn', 'downloadMd', 'downloadHtml', 'exportNotesBtn'\]/);
assert.match(runtime, /aria-describedby', 'appearanceResetHelp'/);
assert.match(runtime, /card\.dataset\.settingsHierarchy === 'true'/);
assert.match(loader, /const settingsHierarchyUrl = '\.\/settings-hierarchy\.js';/);
assert.ok(loader.indexOf('await import(moduleUrl)') < loader.indexOf('[settingsHierarchyUrl'));
assert.match(worker, /'css\/settings-panel\.css'/);

console.log('Desk settings hierarchy contract: 11 assertions passed');
