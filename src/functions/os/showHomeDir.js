import os from 'node:os';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userHomeDir } from '../../../index.js';

const HOMEDIR_TEMPLATE = 'Home directory: ';

export const showHomeDir = () => {
  try {
    const homedir = os.homedir();
    console.log(HOMEDIR_TEMPLATE + homedir);
    changeDir(userHomeDir.path);
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
