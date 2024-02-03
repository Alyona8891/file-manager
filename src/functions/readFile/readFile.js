import fs from 'node:fs';

const fsPromises = fs.promises;

export const readFile = async (pathToFile) => {
  fs.access(pathToFile, fs.constants.F_OK, (err) => {
    if (err) {
      console.error('Operation failed');
    } else {
      fsPromises
        .readFile(pathToFile, 'utf-8')
        .then((data) => console.log(data))
        .catch(() => {
          console.error('Operation failed');
        });
    }
  });
};
