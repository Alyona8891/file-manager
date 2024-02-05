import { ERROR_MESSAGE } from '../../constants.js';

const ARGS_QUANTITY = 2;

export const getArgs = (data) => {
  const dataArr = data.split(' ');
  if (dataArr.length !== ARGS_QUANTITY) {
    console.error(ERROR_MESSAGE);
  } else {
    return dataArr;
  }
};
