import fs from 'node:fs';

import path, { join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { showGreeting } from './src/functions/showMessage/showGreeting.js';
import { writeData } from './src/functions/writeData/writeData.js';

showGreeting();
showHomeDirectory();

await writeData();
