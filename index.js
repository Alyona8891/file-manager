import { homedir } from 'os';

import { showGreeting } from './src/functions/showMessage/showGreeting.js';
import { writeData } from './src/functions/writeData/writeData.js';
import { showWorkingDir } from './src/functions/writeData/showWorkingDir.js';

export const userWorkingDir = { path: homedir() };

showGreeting();
showWorkingDir(userWorkingDir.path);

await writeData();
