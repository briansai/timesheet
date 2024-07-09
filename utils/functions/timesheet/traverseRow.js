const { matchHours } = require('./matchHours');

const traverseRow = (row, hours) => {
  const weekOne = row.slice(6, 13);
  const weekTwo = row.slice(14, row.length - 2);

  const weekOneHours = matchHours(weekOne, hours);
  const weekTwoHours = matchHours(weekTwo, hours);
};

module.exports = { traverseRow };
