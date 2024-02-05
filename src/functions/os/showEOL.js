import os from 'node:os';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userWorkingDir } from '../../../index.js';

const EOL_TEMPLATE = 'EOL: ';

export const showEOL = () => {
  try {
    console.log(EOL_TEMPLATE + JSON.stringify(os.EOL));
    changeDir(userWorkingDir.path);
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
