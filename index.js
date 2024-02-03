import { homedir } from 'os';

import { showGreeting } from './src/functions/showMessage/showGreeting.js';
import { writeData } from './src/functions/writeData/writeData.js';
import { showHomeDirectory } from './src/functions/writeData/showHomeDirectory.js';

export let userHomeDir = { path: homedir() };

showGreeting();
showHomeDirectory(userHomeDir.path);

await writeData();
