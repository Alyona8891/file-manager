import { stdin } from 'node:process';
import { homedir } from 'os';

import { showBye } from '../showMessage/showBye.js';
import { showHomeDirectory } from './showHomeDirectory.js';
import { moveUpDir } from '../changeDirectory/moveUpDir.js';
import { userHomeDir } from '../../../index.js';

const FINISH_KEY = '.exit';
const MOVING_UP_KEY = 'up';

export const writeData = async () => {
  stdin.on('data', (data) => {
    if (data.toString().trim() === FINISH_KEY) {
      showBye();
      process.exit();
    } else if (data.toString().trim() === MOVING_UP_KEY) {
      userHomeDir.path = moveUpDir();
      showHomeDirectory(userHomeDir.path);
    } else {
      console.log('Invalid input');
    }
  });

  stdin.on('error', (error) => {
    console.error('Invalid input');
  });

  process.on('SIGINT', () => {
    showBye();
    process.exit();
  });
};
