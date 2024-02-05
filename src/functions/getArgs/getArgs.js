const ARGS_QUANTITY = 2;

export const getArgs = (data) => {
  const dataArr = data.split(' ');
  if (dataArr.length === ARGS_QUANTITY) {
    return dataArr;
  }
};
