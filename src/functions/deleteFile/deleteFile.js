import fs from 'node:fs';
import path from 'node:path';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userWorkingDir } from '../../../index.js';

const fsPromises = fs.promises;

export const deleteFile = async (pathToFile) => {
  fs.access(pathToFile, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(ERROR_MESSAGE);
      changeDir(userWorkingDir.path);
    } else {
      fsPromises
        .unlink(pathToFile)
        .then(() => changeDir(path.dirname(pathToFile)))
        .catch(() => {
          console.error(ERROR_MESSAGE);
          changeDir(userWorkingDir.path);
        });
    }
  });
};
