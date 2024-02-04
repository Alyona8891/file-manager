import fs from 'node:fs';
import path from 'node:path';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { getArgs } from '../getArgs/getArgs.js';
import { userHomeDir } from '../../../index.js';

export const copyFile = (data) => {
  try {
    const argsArr = getArgs(data);
    const oldPathToFile = argsArr[0];
    const fileName = path.basename(oldPathToFile);
    const newDir = argsArr[1];
    const newPathToFile = path.resolve(newDir, fileName);

    const readStream = fs.createReadStream(oldPathToFile, 'utf-8');
    readStream.on('error', () => console.error(ERROR_MESSAGE));
    const writableStream = fs.createWriteStream(newPathToFile);
    writableStream.on('error', () => console.error(ERROR_MESSAGE));
    readStream.pipe(writableStream);
    changeDir(newDir);
  } catch (error) {
    console.error(error);
    changeDir(userHomeDir.path);
  }
};
