import fs from 'node:fs';
import os from 'node:os';
import { stdout } from 'node:process';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';

export const readFile = async (pathToFile) => {
  const readStream = fs.createReadStream(pathToFile, 'utf-8');
  readStream.on('data', (data) => {
    stdout.write(data + os.EOL);
    changeDir(pathToFile);
  });
  readStream.on('error', (err) => console.error(ERROR_MESSAGE));
};
