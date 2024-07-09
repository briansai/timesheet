const matchHours = (week, hours) => {
  let allCorrect = true;

  for (let x = 0; x < week.length; x++) {
    let hr = week[x];

    if (hr !== null) {
      hr = hr.toFixed(2);

      if (hr !== hours) {
        allCorrect = false;
      }
    }
  }

  return allCorrect;
};

module.exports = { matchHours };
