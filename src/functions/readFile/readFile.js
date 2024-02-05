import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { stdout } from 'node:process';
import { ERROR_MESSAGE, INVALID_INPUT_MESSAGE, TYPE_OF_PATH } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { getTypeOfPath } from '../getTypeOfPath/getTypeOfPath.js';
import { userWorkingDir } from '../../../index.js';
import { showWorkingDir } from '../writeData/showWorkingDir.js';

export const readFile = async (pathToFile) => {
  const directory = path.resolve(userWorkingDir.path, pathToFile);
  const typeOfPath = await getTypeOfPath(directory);
  if (typeOfPath === TYPE_OF_PATH.file) {
    const readStream = fs.createReadStream(directory, 'utf-8');
    readStream.on('data', (data) => {
      stdout.write(data + os.EOL);
      changeDir(directory);
    });
    readStream.on('error', () => console.error(ERROR_MESSAGE));
  } else if (typeOfPath === TYPE_OF_PATH.directory) {
    console.error(ERROR_MESSAGE);
    showWorkingDir(userWorkingDir.path);
  } else {
    showWorkingDir(userWorkingDir.path);
  }
};
