import fs from 'node:fs';
const fsPromises = fs.promises;
import { ERROR_MESSAGE, INVALID_INPUT_MESSAGE } from '../../constants.js';

export const getTypeOfPath = async (path) => {
  const stats = await fsPromises.stat(path, (err) => {
    if (err) {
      console.log(INVALID_INPUT_MESSAGE);
    }
  });
  try {
    if (stats.isFile()) {
      return 'file';
    } else if (stats.isDirectory()) {
      return 'directory';
    }
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
