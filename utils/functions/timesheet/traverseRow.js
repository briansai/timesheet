const { matchHours } = require('./matchHours');

const traverseRow = (row, hours) => {
  const errors = [];
  const errorMessage = 'Hours do not match';
  const weekOne = row.slice(6, 13);
  const weekTwo = row.slice(14, row.length - 2);

  const weekOneHoursCorrect = matchHours(weekOne, hours);
  const weekTwoHoursCorrect = matchHours(weekTwo, hours);

  !weekOneHoursCorrect && errors.push(`Week 1 error. ${errorMessage}`);
  !weekTwoHoursCorrect && errors.push(`Week 2 error. ${errorMessage}`);

  return errors;
};

module.exports = { traverseRow };
