const readXlsxFile = require('read-excel-file/node');
const { traverseExcel } = require('./utils/timesheet/traverseExcel');

const tsheet = process.argv;

const fileName = `${tsheet[2]} ${tsheet[3]} ${tsheet[4]}`;

const readTimesheet = async (ts) => {
  const timesheet = await readXlsxFile(ts);

  traverseExcel(timesheet);
};

readTimesheet(fileName);
