import { stdin } from 'node:process';
import { showBye } from "../showMessage/showBye.js";

const FINISH_PHRASE = '.exit';

export const writeData = async () => {
  stdin.on('data', (data) => {
    if (data.toString().trim() === FINISH_PHRASE) {
      showBye();
      process.exit();
    }
    console.log(data);
  });

  process.on('SIGINT', () => {
    showBye();
    process.exit();
  });
};