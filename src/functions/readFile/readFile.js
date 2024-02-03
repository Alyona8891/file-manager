import fs from 'node:fs';
import { ERROR_MESSAGE } from '../../constants';

const fsPromises = fs.promises;

export const readFile = async (pathToFile) => {
  fs.access(pathToFile, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(ERROR_MESSAGE);
    } else {
      fsPromises
        .readFile(pathToFile, 'utf-8')
        .then((data) => console.log(data))
        .catch(() => {
          console.error(ERROR_MESSAGE);
        });
    }
  });
};
