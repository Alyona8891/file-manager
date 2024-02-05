import zlib from 'node:zlib';
import fs from 'node:fs';
import path from 'node:path';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userWorkingDir } from '../../../index.js';
import { getArgs } from '../getArgs/getArgs.js';

export const decompressFile = async (substring) => {
  try {
    const argsArr = getArgs(substring);
    const sourcePath = argsArr[0];
    const fileName = path.basename(sourcePath);
    const destinationPath = argsArr[1];
    const newPathToFile = path.resolve(destinationPath);
    const readStream = fs.createReadStream(sourcePath);
    const writeStream = fs.createWriteStream(destinationPath);
    const brotli = zlib.createBrotliDecompress();
    readStream.pipe(brotli).pipe(writeStream);
    changeDir(userWorkingDir.path);
  } catch (error) {
    console.error(ERROR_MESSAGE);
    changeDir(userWorkingDir.path);
  }
};
