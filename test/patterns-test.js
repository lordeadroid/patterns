const test = require("../lib/testing.js");
const patterns = require("../src/patterns.js");

const it = test.it;
const displayHeadline = test.displayHeadline;

const triangle = patterns.triangle;
const rectangle = patterns.rectangle;
const hollowRectangle = patterns.hollowRectangle;
const alternateRectangle = patterns.alternateRectangle;

const testRectangle = function() {
  it("should give an rectangle of 3 x 4 dimension", {
    actual: rectangle(3, 4),
    expected: ["****", "****", "****"]
  });

  it("should return nothing when dimension is 0", {
    actual: rectangle(0, 0),
    expected: []
  });

  displayHeadline("All test cases for rectangle passed successfully");
};

const testHollowRectangle = function() {
  it("should give hollow rectangle of 4 x 4 dimension", {
    actual: hollowRectangle(4, 4),
    expected: ["****", "*  *", "*  *", "****"]
  });

  displayHeadline("All hollow rectangle case passed");
};

const testAlternateRectangle = function() {
  it("should give alternate lines of the rectangle", {
    actual: alternateRectangle(3, 4),
    expected: ["****", "----", "****"]
  });

  displayHeadline("All alternate rectangle cased passed");
};

const testTriangle = function() {
  it("should give left alingned triangle", {
    actual: triangle(3),
    expected: ["*", "**", "***"]
  });

  displayHeadline("All triangle cased passed");
};

const runTests = function() {
  testRectangle();
  testHollowRectangle();
  testAlternateRectangle();
  testTriangle();
};

runTests();
