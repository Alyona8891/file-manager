import fs from 'node:fs';
const fsPromises = fs.promises;

import { userWorkingDir } from '../../../index.js';
import { showWorkingDir } from '../writeData/showWorkingDir.js';
import { ERROR_MESSAGE } from '../../constants.js';

export const readDirectory = (filePath) => {
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(ERROR_MESSAGE);
      showWorkingDir(userWorkingDir.path);
    } else {
      fsPromises
        .readdir(filePath, { withFileTypes: true })
        .then((dirents) => {
          const resultArr = dirents.map((dirent) => {
            return dirent.isFile()
              ? { Name: dirent.name, Type: 'File' }
              : { Name: dirent.name, Type: 'Directory' };
          });
          const directorysArr = resultArr
            .filter((item) => item.Type === 'Directory')
            .sort();
          const filesArr = resultArr
            .filter((item) => item.Type === 'File')
            .sort();
          const sortedArr = directorysArr.concat(filesArr);
          console.table(sortedArr);
          showWorkingDir(userWorkingDir.path);
        })
        .catch(() => {
          console.error(ERROR_MESSAGE);
          showWorkingDir(userWorkingDir.path);
        });
    }
  });
};
