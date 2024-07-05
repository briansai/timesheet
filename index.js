const readXlsxFile = require('read-excel-file/node');

const tsheet = process.argv;

const fileName = `${tsheet[2]} ${tsheet[3]} ${tsheet[4]}`;

const readTimesheet = async (ts) => {
  const timesheet = await readXlsxFile(ts);
  console.log(timesheet);
};

readTimesheet(fileName);
