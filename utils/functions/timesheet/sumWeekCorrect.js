const sumWeekCorrect = (week, totalWeekHour) => {
  let sumCorrect = '';
  const sum = week.reduce((acc, cur) => {
    if (typeof cur === 'number') {
      acc += cur;
    }

    return acc;
  }, 0);

  if (sum !== totalWeekHour) {
    sum = `${sum} does not equal to total weekly hours of ${totalWeekHour}`;
  }

  return sumCorrect;
};

module.exports = { sumWeekCorrect };