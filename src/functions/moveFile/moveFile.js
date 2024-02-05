import fs from 'node:fs';
import path, { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { deleteFile } from '../deleteFile/deleteFile.js';
import { getArgs } from '../getArgs/getArgs.js';
import { copyFile } from '../copyFile/copyFile.js';

const fsPromises = fs.promises;

export const moveFile = async (data) => {
  try {
    const argsArr = getArgs(data);
    const oldPathToFile = argsArr[0];
    copyFile(data);
    await deleteFile(oldPathToFile);
  } catch (error) {
    console.error(error);
  }
};
