const convertToCelsius = function (degreesF) {
  const celcius = (degreesF - 32) * (5 / 9);
  if (Number.isInteger(celcius)) {
    return celcius;
  } else {
    return parseFloat(celcius.toFixed(1), 10);
  }
};

const convertToFahrenheit = function (degreesC) {
  const fahrenheit = degreesC * (9 / 5) + 32;
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit;
  } else {
    return parseFloat(fahrenheit.toFixed(1), 10);
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
