import fs from 'node:fs';
const fsPromises = fs.promises;
import { ERROR_MESSAGE, INVALID_INPUT_MESSAGE, TYPE_OF_PATH } from '../../constants.js';

export const getTypeOfPath = async (path) => {
  const stats = await fsPromises.stat(path, (err) => {
    if (err) {
      console.log(INVALID_INPUT_MESSAGE);
    }
  });
  try {
    if (stats.isFile()) {
      return TYPE_OF_PATH.file;
    } else if (stats.isDirectory()) {
      return TYPE_OF_PATH.directory;
    }
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
