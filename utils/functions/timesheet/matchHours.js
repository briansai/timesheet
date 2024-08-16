const matchHours = (week, hours) => {
  let hoursNotCorrect = '';
  let weekHours = [];

  for (let x = 0; x < week.length; x++) {
    let hr = week[x];

    weekHours.push(hr);

    if (hr !== null) {
      hr = hr.toFixed(2);

      if (hr !== hours) {
        hoursNotCorrect = `${hr} does not equal to the shift hours of ${hours}`;
      }
    }
  }
  console.log(weekHours);
  return { hoursNotCorrect, weekHours };
};

module.exports = { matchHours };
