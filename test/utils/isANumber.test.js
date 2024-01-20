const isANumber = require("../../utils/calculations/isANumber");

describe("isANumber file negative and positive tests", () => {
  test("function returns false non number input", () => {
    expect(isANumber(10, "10")).toBe(false);
  });

  test("function returns false non number input", () => {
    expect(isANumber(10, undefined)).toBe(false);
  });

  test("function returns true when input is a number", () => {
    expect(isANumber(10, 100)).toBe(true);
  });
});
