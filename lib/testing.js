const {deepStrictEqual} = require("assert");

const it = function(testName, testData) {
  deepStrictEqual(testData.actual, testData.expected, testName);
};

const concludingMessage = function(message) {
  const icon = "✅";
  const newLine = "\n";

  console.log(`${icon} ${message} ${newLine}`);
};

exports.it = it;
exports.concludingMessage = concludingMessage;
