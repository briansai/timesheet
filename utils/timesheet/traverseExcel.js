const { calculateHours } = require('./calculateHours');

const traverseExcel = (excel) => {
  for (let x = 0; x < excel.length; x++) {
    calculateHours(excel[x]);
  }
};

module.exports = { traverseExcel };
