import assert from 'node:assert/strict';
import fs from 'node:fs';

const loader = fs.readFileSync(new URL('./app-loader.js', import.meta.url), 'utf8');
const index = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');

let assertions = 0;
const check = (run) => {
  run();
  assertions += 1;
};

check(() => assert.match(loader, /dataset\.oneHandedActionsReady\s*=\s*'true'/));
check(() => assert.match(loader, /#readerOneHandedActions/));
check(() => assert.match(loader, /\.reader-one-handed-actions/));
check(() => assert.ok(loader.indexOf('installDeskChromePolicy();') < loader.indexOf('fetchBootstrapResource(appUrl)')));

for (const id of ['bookmarkBtn', 'searchBtn', 'tocBtn', 'settingsBtn']) {
  check(() => assert.match(index, new RegExp(`id=["']${id}["']`)));
}

console.log(`Desk shortcuts contract: ${assertions}/8 assertions passed`);
