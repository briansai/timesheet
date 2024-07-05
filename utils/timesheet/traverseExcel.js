const { traverseRows } = require('./traverseRows');

const traverseExcel = (excel) => {
  for (let x = 0; x < excel.length; x++) {
    traverseRows(excel[x]);
  }
};

module.exports = { traverseExcel };
