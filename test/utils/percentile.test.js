const percentile = require("../../utils/calculations/percentile");

const testInputs = {
  qbTotal: 87,
  rbTotal: 163,
  wrTotal: 244,
  teTotal: 142,
};

describe("percentile file tests", () => {
  // ***** negative tests *****
  test("function returns false non number input", () => {
    expect(percentile(10, undefined)).toBe(
      "Inputs must be a number. Please, check the inputs to see if they are in the right format."
    );
  });

  // ***** positive tests *****
  // QB test
  test("a rank of 1 to returns a 99", () => {
    expect(percentile(testInputs.qbTotal, 1)).toBe(99);
  });

  // RB test
  test("a rank of 24 to returns a 85", () => {
    expect(percentile(testInputs.rbTotal, 24)).toBe(85);
  });

  // WR tests
  test("a rank of 61 to returns a 75", () => {
    expect(percentile(testInputs.wrTotal, 61)).toBe(75);
  });

  test("a rank of 85 to returns a 65", () => {
    expect(percentile(testInputs.wrTotal, 85)).toBe(65);
  });

  // TE test
  test("a rank of 58 to returns a 59", () => {
    expect(percentile(testInputs.teTotal, 58)).toBe(59);
  });
});
