import { stdin } from 'node:process';
import { showBye } from '../showMessage/showBye.js';
import { showHomeDirectory } from './showHomeDirectory.js';

const FINISH_PHRASE = '.exit';

export const writeData = async () => {
  stdin.on('data', (data) => {
    showHomeDirectory();
    if (data.toString().trim() === FINISH_PHRASE) {
      showBye();
      process.exit();
    }
  });

  process.on('SIGINT', () => {
    showBye();
    process.exit();
  });
};
