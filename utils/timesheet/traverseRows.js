const { calculateHours } = require('./calculateHours');

const traverseRows = (row) => {
  if (row[4] instanceof Date && row[5] instanceof Date) {
    calculateHours(row);
  }
};

module.exports = { traverseRows };
