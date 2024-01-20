const sumCriteriaPoints = require("../../utils/calculations/sumCriteriaPoints");

describe("sumCriteriaPoints file tests", () => {
  test("function returns sum of 550", () => {
    expect(sumCriteriaPoints([75, 100, 75, 50, 50, 200])).toBe(550);
  });

  test("function returns sum of 351", () => {
    expect(sumCriteriaPoints([117, 117, 117])).toBe(351);
  });
});
