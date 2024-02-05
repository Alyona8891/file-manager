import os from 'node:os';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userWorkingDir } from '../../../index.js';

const USERNAME_TEMPLATE = 'Username: ';

export const showUsername = () => {
  try {
    const userInfo = os.userInfo();
    console.log(USERNAME_TEMPLATE + userInfo.username);
    changeDir(userWorkingDir.path);
  } catch (error) {
    console.error(ERROR_MESSAGE);
    changeDir(userWorkingDir.path);
  }
};
