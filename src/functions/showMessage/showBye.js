import { defineUsername } from './defineUsername.js';

const BYE_TEMPLATE_PART1 = 'Thank you for using File Manager, ';
const BYE_TEMPLATE_PART2 = ', goodbye!';

export const showBye = () => {
  console.log(BYE_TEMPLATE_PART1 + defineUsername() + BYE_TEMPLATE_PART2);
};
