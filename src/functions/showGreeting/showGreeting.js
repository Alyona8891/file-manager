import { defineUsername } from './defineUsername.js';

const GREETING_TEMPLATE = 'Welcome to the File Manager, ';

export const showGreeting = () => {
  console.log(GREETING_TEMPLATE + defineUsername() + '!');
};
