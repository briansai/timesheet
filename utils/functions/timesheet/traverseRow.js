const { matchHours } = require('./matchHours');
const { sumWeekCorrect } = require('./sumWeekCorrect');

const traverseRow = (row, hours) => {
  const errors = [];

  const weekOne = row.slice(6, 13);
  const weekTwo = row.slice(13, row.length - 2);

  const weekOneHoursMatch = matchHours(weekOne, hours);
  const weekTwoHoursMatch = matchHours(weekTwo, hours);

  const sumWeekOne = sumWeekCorrect(weekOne, row[row.length - 2]);
  const sumWeekTwo = sumWeekCorrect(weekTwo, row[row.length - 1]);

  weekOneHoursMatch.hoursNotCorrect &&
    errors.push(`Week 1 error. ${weekOneHoursMatch.hoursNotCorrect}`);
  weekTwoHoursMatch.hoursNotCorrect &&
    errors.push(`Week 2 error. ${weekTwoHoursMatch.hoursNotCorrect}`);
  sumWeekOne && errors.push(`Week 1 error.  ${sumWeekOne}`);
  sumWeekTwo && errors.push(`Week 2 error.  ${sumWeekTwo}`);

  return errors;
};

module.exports = { traverseRow };
