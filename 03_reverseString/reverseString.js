const reverseString = function (string) {
  const chars = string.split("");
  let reversedStr = "";
  while (chars.length > 0) {
    reversedStr += chars.pop();
  }
  return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
