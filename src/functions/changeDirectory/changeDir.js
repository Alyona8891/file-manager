import path from 'node:path';
import fs from 'node:fs';
import { userWorkingDir } from '../../../index.js';
import { showWorkingDir } from '../writeData/showWorkingDir.js';
import {
  ERROR_MESSAGE,
  INVALID_INPUT_MESSAGE,
  TYPE_OF_PATH,
} from '../../constants.js';
import { getTypeOfPath } from '../getTypeOfPath/getTypeOfPath.js';

export const changeDir = async (pathToDirectory) => {
  const directory = path.resolve(userWorkingDir.path, pathToDirectory);
  const typeOfPath = await getTypeOfPath(directory);
  if (typeOfPath === TYPE_OF_PATH.directory) {
    fs.access(directory, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(ERROR_MESSAGE);
        showWorkingDir(userWorkingDir.path);
      } else {
        userWorkingDir.path = directory;
        showWorkingDir(userWorkingDir.path);
      }
    });
  } else if (typeOfPath === TYPE_OF_PATH.file) {
    const parentDir = path.dirname(directory);
    showWorkingDir(parentDir);
  }
};
