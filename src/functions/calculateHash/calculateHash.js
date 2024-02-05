import { createHash } from 'crypto';
import { createReadStream } from 'node:fs';
import { ERROR_MESSAGE } from '../../constants.js';
import { userWorkingDir } from '../../../index.js';

export const calculateHash = async (pathToFile) => {
  const readStream = createReadStream(pathToFile);
  const hash = createHash('sha256');
  readStream.on('readable', () => {
    const data = readStream.read();
    data ? hash.update(data) : console.log(hash.digest('hex'));
    changeDir(userWorkingDir.path);
  });

  readStream.on('error', () => {
    console.error(ERROR_MESSAGE);
  });
};
