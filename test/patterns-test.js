const {deepStrictEqual} = require("assert");
const {describe, it} = require("node:test");

const {rectangle, hollowRectangle, alternateRectangle, triangle} = require("../src/patterns.js");

describe("rectangle", function() {
  describe("filled rectangle", function() {
    it("should give a rectangle of the given dimensions", function() {
      deepStrictEqual(rectangle(3, 2), ["**", "**", "**"]);
    });

    it("should return nothing when dimension is 0", function() {
      deepStrictEqual(rectangle(0, 0), []);
    });
  });

  describe("hollow rectangle", function() {
    it("should give an hollow rectangle of the given dimensions", function() {
      deepStrictEqual(hollowRectangle(4, 4), ["****", "*  *", "*  *", "****"]);
    });
  });

  describe("alternate rectangle", function() {
    it("should given a rectangle of different patterns", function() {
      deepStrictEqual(alternateRectangle(3, 3), ["***", "---", "***"]);
    });
  });
});                                              

describe("triangle", function() {
  describe("left alingned triangle", function() {
    it("should give a left alingned right angled triangle", function() {
      deepStrictEqual(triangle(4), ["*", "**", "***", "****"]);
    });
  });
});
