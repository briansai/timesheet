const { sumHours } = require('./sumHours');

const calculateHours = (row) => {
  const weekOneHours = sumHours(row.slice(6, 13));
  const weekTwoHours = sumHours(row.slice(14, row.length - 2));
  return [weekOneHours, weekTwoHours];
};

module.exports = { calculateHours };
