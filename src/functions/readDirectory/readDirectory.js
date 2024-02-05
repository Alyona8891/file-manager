import fs from 'node:fs';
const fsPromises = fs.promises;

import { userWorkingDir } from '../../../index.js';
import { showWorkingDir } from '../writeData/showWorkingDir.js';
import { ERROR_MESSAGE } from '../../constants.js';

export const readDirectory = (filePath) => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(ERROR_MESSAGE);
    } else {
      fsPromises
        .readdir(filePath, { withFileTypes: true })
        .then((dirents) => {
          const resultArr = dirents.map((dirent) => {
            return dirent.isFile()
              ? { Name: dirent.name, Type: 'File' }
              : { Name: dirent.name, Type: 'Directory' };
          });
          const sortedArr = resultArr.sort((a, b) => {
            return a.Name === b.Name ? 0 : a.Name < b.Name ? -1 : 1;
          });
          console.table(sortedArr);
          showWorkingDir(userWorkingDir.path);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
};
