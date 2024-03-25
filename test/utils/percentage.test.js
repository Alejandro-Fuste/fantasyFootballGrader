import percentage from "../../utils/calculations/percentage";

describe("percentage file tests", () => {
  // ***** negative tests *****
  test("function returns false non number input", () => {
    expect(percentage(10, undefined)).toBe(
      "Inputs must be a number. Please, check the inputs to see if they are in the right format."
    );
  });

  test("function returns error message when sum is greater than total", () => {
    expect(percentage(100, 50)).toBe(
      "Oops, could not calculate...sum is greater than total"
    );
  });

  // ***** positive tests *****
  test("function returns 92 for 506 sum and 550 total inputs", () => {
    expect(percentage(506, 550)).toBe(92);
  });
});
