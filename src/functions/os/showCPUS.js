import os from 'node:os';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';
import { userHomeDir } from '../../../index.js';

const CPUS_AMOUNT_TEMPLATE = 'Amount of CPUS: ';
const CPUS_INFO_TEMPLATE = 'INFO: ';

export const showCPUs = () => {
  try {
    const cpus = os.cpus();
    const invalidCpusInfo = cpus.map((el) => {
      return { model: el.model, time: `${(el.speed / 1000).toFixed(2)} GHz` };
    });
    console.log(CPUS_AMOUNT_TEMPLATE + invalidCpusInfo.length);
    console.log(CPUS_INFO_TEMPLATE);
    console.log(invalidCpusInfo);
    changeDir(userHomeDir.path);
  } catch (error) {
    console.error(ERROR_MESSAGE);
  }
};
