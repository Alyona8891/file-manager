import fs from 'node:fs';
import { stdin } from 'node:process';
import path, { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { showGreeting } from './src/functions/showGreeting/showGreeting.js';

showGreeting();

const write = async () => {
  stdin.on('data', (data) => {
    console.log(data);
  });
};

await write();
