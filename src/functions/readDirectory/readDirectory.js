import fs from 'node:fs';
const fsPromises = fs.promises;

import { userHomeDir } from '../../../index.js';
import { showHomeDirectory } from '../writeData/showHomeDirectory.js';

export const readDirectory = (filePath) => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      throw new Error('FS operation failed');
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
          showHomeDirectory(userHomeDir.path);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
};
