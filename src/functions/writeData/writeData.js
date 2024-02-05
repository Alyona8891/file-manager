import { stdin } from 'node:process';

import { showBye } from '../showMessage/showBye.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userHomeDir } from '../../../index.js';
import { readDirectory } from '../readDirectory/readDirectory.js';
import { readFile } from '../readFile/readFile.js';
import { createFile } from '../createFile/createFile.js';
import { renameFile } from '../renameFile/renameFile.js';
import { copyFile } from '../copyFile/copyFile.js';
import { deleteFile } from '../deleteFile/deleteFile.js';
import { moveFile } from '../moveFile/moveFile.js';
import { showEOL } from '../os/showEOL.js';
import { showCPUs } from '../os/showCPUS.js';
import { showUsername } from '../os/showUsername.js';
import { showHomeDir } from '../os/showHomedir.js';
import { showArchitecture } from '../os/showArchitecture.js';
import { calculateHash } from '../calculateHash/calculateHash.js';

const FINISH_KEY = '.exit';
const MOVING_UP_KEY = 'up';
const LS_KEY = 'ls';
const CD_KEY = 'cd ';
const READ_FILE_KEY = 'cat ';
const ADD_FILE_KEY = 'add ';
const RENAME_FILE_KEY = 'rn ';
const COPY_FILE_KEY = 'cp ';
const DELETE_FILE_KEY = 'rm ';
const MOVE_FILE_KEY = 'mv ';
const GET_EOL_KEY = 'os --EOL';
const GET_CPUS_KEY = 'os --cpus';
const GET_USERNAME_KEY = 'os --username';
const GET_HOMEDIR_KEY = 'os --homedir';
const GET_ARCHITECTURE_KEY = 'os --architecture';
const CALCULATE_HASH_KEY = 'hash ';

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
    } else if (
      invalidData.slice(0, RENAME_FILE_KEY.length) === RENAME_FILE_KEY
    ) {
      await renameFile(invalidData.slice(RENAME_FILE_KEY.length));
    } else if (invalidData.slice(0, COPY_FILE_KEY.length) === COPY_FILE_KEY) {
      copyFile(invalidData.slice(COPY_FILE_KEY.length));
    } else if (
      invalidData.slice(0, DELETE_FILE_KEY.length) === DELETE_FILE_KEY
    ) {
      await deleteFile(invalidData.slice(DELETE_FILE_KEY.length));
    } else if (invalidData.slice(0, MOVE_FILE_KEY.length) === MOVE_FILE_KEY) {
      moveFile(invalidData.slice(MOVE_FILE_KEY.length));
    } else if (invalidData === GET_EOL_KEY) {
      showEOL();
    } else if (invalidData === GET_CPUS_KEY) {
      showCPUs();
    } else if (invalidData === GET_USERNAME_KEY) {
      showUsername();
    } else if (invalidData === GET_HOMEDIR_KEY) {
      showHomeDir();
    } else if (invalidData === GET_ARCHITECTURE_KEY) {
      showArchitecture();
    } else if (
      invalidData.slice(0, CALCULATE_HASH_KEY.length) === CALCULATE_HASH_KEY
    ) {
      calculateHash(invalidData.slice(CALCULATE_HASH_KEY.length));
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
