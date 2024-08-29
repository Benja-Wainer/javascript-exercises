const removeFromArray = function (array, ...removals) {
  const newArray = [];
  for (const element of array) {
    if (removals.includes(element) === false) newArray.push(element);
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
