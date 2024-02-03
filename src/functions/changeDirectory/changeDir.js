import path from 'node:path';
import fs from 'node:fs';
import { userHomeDir } from '../../../index.js';
import { showHomeDirectory } from '../writeData/showHomeDirectory.js';
import { ERROR_MESSAGE } from '../../constants.js';

export const changeDir = (pathToDirectory) => {
  const parentDirectory = path.resolve(userHomeDir.path, pathToDirectory);
  fs.access(parentDirectory, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(ERROR_MESSAGE);
      showHomeDirectory(userHomeDir.path);
    } else {
      userHomeDir.path = parentDirectory;
      showHomeDirectory(userHomeDir.path);
    }
  });
};
