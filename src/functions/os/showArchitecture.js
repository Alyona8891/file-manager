import os from 'node:os';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userHomeDir } from '../../../index.js';

const CPUS_AMOUNT_TEMPLATE = 'Architecture: ';

export const showArchitecture = () => {
  try {
    const architecture = os.arch();
    console.log(CPUS_AMOUNT_TEMPLATE + architecture);
    changeDir(userHomeDir.path);
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
