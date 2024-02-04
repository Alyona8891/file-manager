import { stdin } from 'node:process';
import { homedir } from 'os';

import { showBye } from '../showMessage/showBye.js';

import { changeDir } from '../changeDirectory/changeDir.js';
import { userHomeDir } from '../../../index.js';
import { readDirectory } from '../readDirectory/readDirectory.js';
import { readFile } from '../readFile/readFile.js';
import { createFile } from '../createFile/createFile.js';

const FINISH_KEY = '.exit';
const MOVING_UP_KEY = 'up';
const LS_KEY = 'ls';
const CD_KEY = 'cd ';
const READ_FILE_KEY = 'cat ';
const ADD_FILE_KEY = 'add ';

export const writeData = async () => {
  stdin.on('data', async (data) => {
    const invalidData = data.toString().trim();
    if (invalidData === FINISH_KEY) {
      showBye();
      process.exit();
    } else if (invalidData === MOVING_UP_KEY) {
      changeDir('..');
    } else if (invalidData === LS_KEY) {
      readDirectory(userHomeDir.path);
    } else if (invalidData.slice(0, CD_KEY.length) === CD_KEY) {
      changeDir(invalidData.slice(CD_KEY.length));
    } else if (invalidData.slice(0, READ_FILE_KEY.length) === READ_FILE_KEY) {
      await readFile(invalidData.slice(READ_FILE_KEY.length));
    } else if (invalidData.slice(0, ADD_FILE_KEY.length) === ADD_FILE_KEY) {
      await createFile(invalidData.slice(ADD_FILE_KEY.length));
    } else {
      console.log('Invalid input');
    }
  });

  stdin.on('error', () => {
    console.error('Invalid input');
  });

  process.on('SIGINT', () => {
    showBye();
    process.exit();
  });
};
