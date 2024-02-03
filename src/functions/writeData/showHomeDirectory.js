import { homedir } from 'os';

const DIR_MESSAGE_TEMPLATE = 'You are currently in ';

export const showHomeDirectory = () => {
  const userHomeDir = homedir();
  console.log(DIR_MESSAGE_TEMPLATE + userHomeDir);
};
