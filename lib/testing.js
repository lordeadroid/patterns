const {deepStrictEqual} = require("assert");

const formatExpectationMismatch = function(actual, expected) {
  let message = "";

  message += "\t  Actual : " + actual;
  message += "\n";
  message += "\tExpected : " + expected;

  return message;
};

const formatTestResult = function(result, actual, expected, message) {
  const icon = result ? "✅" : "❌";

  const firstLine = icon + " " + message;
  const secondLine = result ? "" : "\n" + formatExpectationMismatch(actual, expected);

  return firstLine + secondLine;
};

const isObject = function(obj) {
  return !isArray(obj) && typeof(obj) === 'object';
};

const areArraysEqual = function(firstArray, secondArray) {
  if(firstArray === secondArray) {
    return true;
  }

  if(firstArray.length !== secondArray.length) {
    return false;
  }

  for(let index = 0; index < firstArray.length; index++) { 
    if(!areEqual(firstArray[index], secondArray[index])) {
      return false;
    }
  }

  return true;
};

const areObjectsEqual = function(firstObjects, secondObjects) {
  if(Object.keys(firstObjects).length !== Object.keys(secondObjects).length) {
    return false;
  }

  for(const key of Object.keys(firstObjects)) {
    if(!areEqual(firstObjects[key], secondObjects[key])) {
      return false;
    }
  }
  return true;
};

const areEqual = function(a, b) {
  if(a === b) {
    return true;
  }

  if([a, b].every(Array.isArray)) {
    return areArraysEqual(a, b);
  }

  if([a, b].every(isObject)) {
    return areObjectsEqual(a, b);
  }

  return false;
};

const assertEquals = function(actual, expected, message) {
  const result = areEqual(expected, actual);

  console.log(formatTestResult(result, actual, expected, message));
};

const it = function(testName, testData) {
  deepStrictEqual(testData.actual, testData.expected, testName);
};

const conclusionMessage = function(headline) {
  console.log("✅ " + headline + "\n");
};

exports.it = it;
exports.conclusionMessage = conclusionMessage;
