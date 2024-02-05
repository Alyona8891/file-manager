import { defineUsername } from './defineUsername.js';

const GREETING_TEMPLATE_PART1 = 'Welcome to the File Manager, ';
const GREETING_TEMPLATE_PART2 = '!';

export const showGreeting = () => {
  console.log(GREETING_TEMPLATE_PART1 + defineUsername() + GREETING_TEMPLATE_PART2);
};
