/* global it */
const iterator = (tests) =>
  tests.forEach(({ name, test, timeout }, indx) => {
    const index = indx + 1;
    it(`${index}. ${name.toLowerCase()}`, () => test(), timeout);
  });

export default iterator;
