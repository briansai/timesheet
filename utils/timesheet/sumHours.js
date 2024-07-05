const sumHours = (hours) => {
  return hours.reduce((acc, cur) => {
    acc += cur;

    return acc;
  });
};

module.exports = { sumHours };
