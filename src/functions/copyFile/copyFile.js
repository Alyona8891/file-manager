import fs from 'node:fs';
import path from 'node:path';
import { ERROR_MESSAGE, TYPE_OF_PATH } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { getArgs } from '../getArgs/getArgs.js';
import { userWorkingDir } from '../../../index.js';
import { getTypeOfPath } from '../getTypeOfPath/getTypeOfPath.js';

export const copyFile = async (data) => {
  try {
    const argsArr = getArgs(data);
    const oldPathToFile = argsArr[0];
    const fileName = path.basename(oldPathToFile);
    const newDir = argsArr[1];
    const newPathToFile = path.resolve(newDir, fileName);
    const typeOfOldPath = await getTypeOfPath(oldPathToFile);
    const typeOfNewPath = await getTypeOfPath(oldPathToFile);

    if (typeOfOldPath === TYPE_OF_PATH.file && typeOfNewPath === TYPE_OF_PATH.file) {
      const readStream = fs.createReadStream(oldPathToFile, 'utf-8');
      readStream.on('error', () => console.error(ERROR_MESSAGE));
      const writableStream = fs.createWriteStream(newPathToFile);
      writableStream.on('error', () => console.error(ERROR_MESSAGE));
      readStream.pipe(writableStream);
      changeDir(newDir);
    } else {
      changeDir(userWorkingDir.path);
    }
  } catch (error) {
    console.error(error);
    changeDir(userWorkingDir.path);
  }
};
