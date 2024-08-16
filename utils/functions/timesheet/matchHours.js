const matchHours = (week, hours) => {
  let allCorrect = '';

  for (let x = 0; x < week.length; x++) {
    let hr = week[x];

    if (hr !== null) {
      hr = hr.toFixed(2);

      if (hr !== hours) {
        allCorrect = `${hr} does not equal to the shift hours of ${hours}`;
      }
    }
  }

  return allCorrect;
};

module.exports = { matchHours };
