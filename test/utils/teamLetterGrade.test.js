const letterGrade = require("../../utils/calculations/teamLetterGrade");

const testInputs = {
  ranks: [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16, 20, 21, 23, 26, 27, 32],
};

const testObject = {
  letters: ["A+", "A", "B+", "B", "C", "D", "F"],
  descriptions: [
    "Elite",
    "Great",
    "Good",
    "Above Average",
    "Average",
    "Below Average",
    "Not Good Enough",
  ],
  notAvailable: "N/A",
  notAvailableDescription:
    "Oops, something went wrong..could not calculate grade",
};

describe("letterGrade file tests", () => {
  test("function returns A+ for 1 input", () => {
    expect(letterGrade(testInputs.ranks[0]).letter).toBe(testObject.letters[0]);
  });

  test("function description returns Elite for 1 input", () => {
    expect(letterGrade(testInputs.ranks[0]).description).toBe(
      testObject.descriptions[0]
    );
  });

  test("function returns A+ for 3 input", () => {
    expect(letterGrade(testInputs.ranks[1]).letter).toBe(testObject.letters[0]);
  });

  test("function description returns Elite for 3 input", () => {
    expect(letterGrade(testInputs.ranks[1]).description).toBe(
      testObject.descriptions[0]
    );
  });

  test("function returns A for 4 input", () => {
    expect(letterGrade(testInputs.ranks[2]).letter).toBe(testObject.letters[1]);
  });

  test("function description returns Great for 4 input", () => {
    expect(letterGrade(testInputs.ranks[2]).description).toBe(
      testObject.descriptions[1]
    );
  });

  test("function returns A for 5 input", () => {
    expect(letterGrade(testInputs.ranks[3]).letter).toBe(testObject.letters[1]);
  });

  test("function description returns Great for 5 input", () => {
    expect(letterGrade(testInputs.ranks[3]).description).toBe(
      testObject.descriptions[1]
    );
  });

  test("function returns A for 6 input", () => {
    expect(letterGrade(testInputs.ranks[4]).letter).toBe(testObject.letters[1]);
  });

  test("function description returns Great for 6 input", () => {
    expect(letterGrade(testInputs.ranks[4]).description).toBe(
      testObject.descriptions[1]
    );
  });

  test("function returns B+ for 7 input", () => {
    expect(letterGrade(testInputs.ranks[5]).letter).toBe(testObject.letters[2]);
  });

  test("function description returns Good for 7 input", () => {
    expect(letterGrade(testInputs.ranks[5]).description).toBe(
      testObject.descriptions[2]
    );
  });

  test("function returns B+ for 8 input", () => {
    expect(letterGrade(testInputs.ranks[6]).letter).toBe(testObject.letters[2]);
  });

  test("function description returns Good for 8 input", () => {
    expect(letterGrade(testInputs.ranks[6]).description).toBe(
      testObject.descriptions[2]
    );
  });

  test("function returns B+ for 9 input", () => {
    expect(letterGrade(testInputs.ranks[7]).letter).toBe(testObject.letters[2]);
  });

  test("function description returns Good for 9 input", () => {
    expect(letterGrade(testInputs.ranks[7]).description).toBe(
      testObject.descriptions[2]
    );
  });

  test("function returns B for 10 input", () => {
    expect(letterGrade(testInputs.ranks[8]).letter).toBe(testObject.letters[3]);
  });

  test("function description returns Above Average for 10 input", () => {
    expect(letterGrade(testInputs.ranks[8]).description).toBe(
      testObject.descriptions[3]
    );
  });

  test("function returns B for 11 input", () => {
    expect(letterGrade(testInputs.ranks[9]).letter).toBe(testObject.letters[3]);
  });

  test("function description returns Above Average for 11 input", () => {
    expect(letterGrade(testInputs.ranks[9]).description).toBe(
      testObject.descriptions[3]
    );
  });

  test("function returns B for 12 input", () => {
    expect(letterGrade(testInputs.ranks[10]).letter).toBe(
      testObject.letters[3]
    );
  });

  test("function description returns Above Average for 12 input", () => {
    expect(letterGrade(testInputs.ranks[10]).description).toBe(
      testObject.descriptions[3]
    );
  });

  test("function letter returns C for 13 input", () => {
    expect(letterGrade(testInputs.ranks[11]).letter).toBe(
      testObject.letters[4]
    );
  });

  test("function description returns Average for 13 input", () => {
    expect(letterGrade(testInputs.ranks[11]).description).toBe(
      testObject.descriptions[4]
    );
  });

  test("function returns C for 16 input", () => {
    expect(letterGrade(testInputs.ranks[12]).letter).toBe(
      testObject.letters[4]
    );
  });

  test("function description returns Average for 16 input", () => {
    expect(letterGrade(testInputs.ranks[12]).description).toBe(
      testObject.descriptions[4]
    );
  });

  test("function returns C for 20 input", () => {
    expect(letterGrade(testInputs.ranks[13]).letter).toBe(
      testObject.letters[4]
    );
  });

  test("function description returns Average for 20 input", () => {
    expect(letterGrade(testInputs.ranks[13]).description).toBe(
      testObject.descriptions[4]
    );
  });

  test("function returns D for 21 input", () => {
    expect(letterGrade(testInputs.ranks[14]).letter).toBe(
      testObject.letters[5]
    );
  });

  test("function description returns Below Average for 21 input", () => {
    expect(letterGrade(testInputs.ranks[14]).description).toBe(
      testObject.descriptions[5]
    );
  });

  test("function returns D for 23 input", () => {
    expect(letterGrade(testInputs.ranks[15]).letter).toBe(
      testObject.letters[5]
    );
  });

  test("function description returns Below Average for 23 input", () => {
    expect(letterGrade(testInputs.ranks[15]).description).toBe(
      testObject.descriptions[5]
    );
  });

  test("function letter returns D for 26 input", () => {
    expect(letterGrade(testInputs.ranks[16]).letter).toBe(
      testObject.letters[5]
    );
  });

  test("function description returns Below Average for 26 input", () => {
    expect(letterGrade(testInputs.ranks[16]).description).toBe(
      testObject.descriptions[5]
    );
  });

  test("function returns F for 27 input", () => {
    expect(letterGrade(testInputs.ranks[17]).letter).toBe(
      testObject.letters[6]
    );
  });

  test("function description returns Not Good Enough for 27 input", () => {
    expect(letterGrade(testInputs.ranks[17]).description).toBe(
      testObject.descriptions[6]
    );
  });

  test("function letter returns F for 32 input", () => {
    expect(letterGrade(testInputs.ranks[18]).letter).toBe(
      testObject.letters[6]
    );
  });

  test("function description returns Not Good Enough for 32 input", () => {
    expect(letterGrade(testInputs.ranks[18]).description).toBe(
      testObject.descriptions[6]
    );
  });
});
