import path from 'node:path';
import { userHomeDir } from '../../../index.js';

export const moveUpDir = () => {
  const parentDirectory = path.resolve(userHomeDir.path, '..');
  return parentDirectory;
};
