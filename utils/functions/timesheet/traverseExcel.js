const { calculateShiftHours } = require('./calculateShiftHours');
const { traverseRow } = require('./traverseRow');

const traverseExcel = (excel) => {
  const arrayOfErrors = [];
  for (let x = 0; x < excel.length; x++) {
    const shiftHours = calculateShiftHours(excel[x]);
    if (shiftHours) {
      const matchErrors = traverseRow(excel[x], shiftHours);

      matchErrors.length &&
        arrayOfErrors.push({ [`row ${x + 1}`]: matchErrors });
    }
  }
  console.log(arrayOfErrors);
};

module.exports = { traverseExcel };
