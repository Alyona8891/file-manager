import fs from 'node:fs';
const fsPromises = fs.promises;
import {
  ERROR_MESSAGE,
  TYPE_OF_PATH,
} from '../../constants.js';

export const getTypeOfPath = async (pathToFile) => {
  try {
    await fsPromises.access(pathToFile, fs.constants.F_OK);
    const stats = await fsPromises.stat(pathToFile);
    if (stats.isFile()) {
      return TYPE_OF_PATH.file;
    } else if (stats.isDirectory()) {
      return TYPE_OF_PATH.directory;
    }
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
