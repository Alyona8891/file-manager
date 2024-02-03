const PREFIX = '--username=';

export const defineUsername = () => {
  const args = process.argv.slice(2);
  const username = args.reduce((acc, arg) => {
    if (arg.slice(0, PREFIX.length) === PREFIX) {
      acc = arg;
      return acc.slice(PREFIX.length);
    }
  }, '');

  return username;
};
