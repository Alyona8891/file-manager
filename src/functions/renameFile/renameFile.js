import fs from 'node:fs';
import path from 'node:path';
import { getArgs } from '../getArgs/getArgs.js';
import { ERROR_MESSAGE } from '../../constants.js';
import { changeDir } from '../changeDirectory/changeDir.js';

const fsPromises = fs.promises;

export const renameFile = async (data) => {
  try {
    const argsArr = getArgs(data);
    const oldPathToFile = argsArr[0];
    const parentDir = path.dirname(oldPathToFile);
    const newPathToFile = path.resolve(parentDir, argsArr[1]);
    fs.access(oldPathToFile, fs.constants.F_OK, (err) => {
      if (err) {
        console.error(ERROR_MESSAGE);
      } else {
        fs.access(newPathToFile, fs.constants.F_OK, (error) => {
          if (error) {
            fsPromises
              .rename(oldPathToFile, newPathToFile)
              .then(() => changeDir(newPathToFile))
              .catch(() => {
                console.error(ERROR_MESSAGE);
              });
          } else {
            console.error(ERROR_MESSAGE);
          }
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
};
