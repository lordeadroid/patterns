const {it, concludingMessage} = require("../lib/testing.js");
const {rectangle, hollowRectangle, alternateRectangle, triangle} = require("../src/patterns.js");

const testRectangle = function() {
  it("should give an rectangle of 3 x 4 dimension", {
    actual: rectangle(3, 4),
    expected: ["****", "****", "****"]
  });

  it("should return nothing when dimension is 0", {
    actual: rectangle(0, 0),
    expected: []
  });

  concludingMessage("rectangle test cases passed successfully");
};

const testHollowRectangle = function() {
  it("should give hollow rectangle of 4 x 4 dimension", {
    actual: hollowRectangle(4, 4),
    expected: ["****", "*  *", "*  *", "****"]
  });

  concludingMessage("hollow rectangle test cases passed successfully");
};

const testAlternateRectangle = function() {
  it("should give alternate lines of the rectangle", {
    actual: alternateRectangle(3, 4),
    expected: ["****", "----", "****"]
  });

  concludingMessage("alternate rectangle test cases passed successfully");
};

const testTriangle = function() {
  it("should give left alingned triangle", {
    actual: triangle(3),
    expected: ["*", "**", "***"]
  });

  concludingMessage("triangle test cases passed successfully");
};

const runTests = function() {
  testRectangle();
  testHollowRectangle();
  testAlternateRectangle();
  testTriangle();
};

runTests();
