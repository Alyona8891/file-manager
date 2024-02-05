import fs from 'node:fs';
import path from 'node:path';
const fsPromises = fs.promises;
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userWorkingDir } from '../../../index.js';

export const createFile = async (fileName) => {
  const pathToFile = path.resolve(userWorkingDir.path, fileName);

  fs.access(pathToFile, fs.constants.F_OK, (err) => {
    if (err) {
      fsPromises
        .writeFile(pathToFile, '')
        .then(() => changeDir(pathToFile))
        .catch(() => console.error(ERROR_MESSAGE));
    } else {
      console.error(ERROR_MESSAGE);
    }
  });
};
