const { calculateShiftHours } = require('./calculateShiftHours');
const { traverseRow } = require('./traverseRow');

const traverseExcel = (excel) => {
  for (let x = 0; x < excel.length; x++) {
    const shiftHours = calculateShiftHours(excel[x]);

    shiftHours && traverseRow(excel[x], shiftHours);
  }
};

module.exports = { traverseExcel };
