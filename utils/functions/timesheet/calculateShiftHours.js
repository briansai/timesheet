const nums = {
  0: '0',
  15: '25',
  30: '50',
  45: '75',
};

const calculateShiftHours = (row) => {
  const startTime = new Date(row[4]);
  const endTime = new Date(row[5]);
  if (startTime instanceof Date && endTime instanceof Date) {
    const start = `${startTime.getUTCHours()}.${
      nums[startTime.getUTCMinutes()]
    }`;
    const end = `${endTime.getUTCHours()}.${nums[endTime.getUTCMinutes()]}`;

    if (start > 0 || end > 0) {
      return (end - start).toFixed(2);
    }
  }
};

module.exports = { calculateShiftHours };
