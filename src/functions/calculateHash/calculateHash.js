import { createHash } from 'crypto';
import { createReadStream } from 'node:fs';
import { ERROR_MESSAGE } from '../../constants.js';
import { userHomeDir } from '../../../index.js';

export const calculateHash = async (pathToFile) => {
  const readStream = createReadStream(pathToFile);
  const hash = createHash('sha256');
  readStream.on('readable', () => {
    const data = readStream.read();
    data ? hash.update(data) : console.log(hash.digest('hex'));
    changeDir(userHomeDir.path);
  });

  readStream.on('error', () => {
    console.error(ERROR_MESSAGE);
  });
};
