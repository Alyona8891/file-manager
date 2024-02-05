import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { ERROR_MESSAGE, TYPE_OF_PATH } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userWorkingDir } from '../../../index.js';
import { getArgs } from '../getArgs/getArgs.js';
import { getTypeOfPath } from '../getTypeOfPath/getTypeOfPath.js';

export const compressFile = async (substring) => {
  try {
    const argsArr = getArgs(substring);
    const sourcePath = argsArr[0];
    const fileName = path.basename(sourcePath);
    const destinationPath = argsArr[1];
    const newPathToFile = path.resolve(destinationPath, fileName);
    const typeOfSourcePath = await getTypeOfPath(sourcePath);
    const typeOfNewPath = await getTypeOfPath(destinationPath);
    if (
      typeOfSourcePath === TYPE_OF_PATH.file &&
      typeOfNewPath === TYPE_OF_PATH.directory
    ) {
      const readStream = fs.createReadStream(sourcePath);
      readStream.on('error', () => console.error(ERROR_MESSAGE));
      const writeStream = fs.createWriteStream(newPathToFile + '.gz');
      writeStream.on('error', () => console.error(ERROR_MESSAGE));
      const brotli = zlib.createBrotliCompress();
      readStream.pipe(brotli).pipe(writeStream);
      changeDir(newPathToFile);
    } else {
      changeDir(userWorkingDir.path);
    }
  } catch (error) {
    console.error(ERROR_MESSAGE);
    changeDir(userWorkingDir.path);
  }
};
