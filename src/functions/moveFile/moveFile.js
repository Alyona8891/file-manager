import fs from 'node:fs';
import { ERROR_MESSAGE } from '../../constants.js';
import { deleteFile } from '../deleteFile/deleteFile.js';
import { getArgs } from '../getArgs/getArgs.js';
import { copyFile } from '../copyFile/copyFile.js';

const fsPromises = fs.promises;

export const moveFile = async (data) => {
  try {
    const argsArr = getArgs(data);
    const oldPathToFile = argsArr[0];
    await copyFile(data);
    await deleteFile(oldPathToFile);
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
