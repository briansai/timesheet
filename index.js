const readXlsxFile = require('read-excel-file/node');
const { traverseExcel } = require('./utils/functions/timesheet/traverseExcel');

const tsheet = process.argv;

const fileName = `${tsheet[2]} ${tsheet[3]} ${tsheet[4]}.xlsx`;

const readTimesheet = async (ts) => {
  const timesheet = await readXlsxFile(ts, { dateFormat: 'mm/dd/yyyy' });

  traverseExcel(timesheet);
};

readTimesheet(fileName);
