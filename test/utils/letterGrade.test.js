import letterGrade from "../../utils/calculations/letterGrade";

const testInputs = {
  percentages: [
    96, 98, 90, 94, 95.99, 86, 88, 89.99, 80, 83, 85.99, 70, 75, 79.99, 60, 65,
    69.99, 59.99, 50,
  ],
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
  test("function returns A+ for 96 input", () => {
    expect(letterGrade(testInputs.percentages[0]).letter).toBe(
      testObject.letters[0]
    );
  });

  test("function description returns Elite for 96 input", () => {
    expect(letterGrade(testInputs.percentages[0]).description).toBe(
      testObject.descriptions[0]
    );
  });

  test("function returns A+ for 98 input", () => {
    expect(letterGrade(testInputs.percentages[1]).letter).toBe(
      testObject.letters[0]
    );
  });

  test("function description returns Elite for 98 input", () => {
    expect(letterGrade(testInputs.percentages[1]).description).toBe(
      testObject.descriptions[0]
    );
  });

  test("function returns A for 90 input", () => {
    expect(letterGrade(testInputs.percentages[2]).letter).toBe(
      testObject.letters[1]
    );
  });

  test("function description returns Great for 90 input", () => {
    expect(letterGrade(testInputs.percentages[2]).description).toBe(
      testObject.descriptions[1]
    );
  });

  test("function returns A for 94 input", () => {
    expect(letterGrade(testInputs.percentages[3]).letter).toBe(
      testObject.letters[1]
    );
  });

  test("function description returns Great for 94 input", () => {
    expect(letterGrade(testInputs.percentages[3]).description).toBe(
      testObject.descriptions[1]
    );
  });

  test("function returns A for 95.99 input", () => {
    expect(letterGrade(testInputs.percentages[4]).letter).toBe(
      testObject.letters[1]
    );
  });

  test("function description returns Great for 95.99 input", () => {
    expect(letterGrade(testInputs.percentages[4]).description).toBe(
      testObject.descriptions[1]
    );
  });

  test("function returns B+ for 86 input", () => {
    expect(letterGrade(testInputs.percentages[5]).letter).toBe(
      testObject.letters[2]
    );
  });

  test("function description returns Good for 86 input", () => {
    expect(letterGrade(testInputs.percentages[5]).description).toBe(
      testObject.descriptions[2]
    );
  });

  test("function returns B+ for 88 input", () => {
    expect(letterGrade(testInputs.percentages[6]).letter).toBe(
      testObject.letters[2]
    );
  });

  test("function description returns Good for 88 input", () => {
    expect(letterGrade(testInputs.percentages[6]).description).toBe(
      testObject.descriptions[2]
    );
  });

  test("function returns B+ for 89.99 input", () => {
    expect(letterGrade(testInputs.percentages[7]).letter).toBe(
      testObject.letters[2]
    );
  });

  test("function description returns Good for 89.99 input", () => {
    expect(letterGrade(testInputs.percentages[7]).description).toBe(
      testObject.descriptions[2]
    );
  });

  test("function returns B for 80 input", () => {
    expect(letterGrade(testInputs.percentages[8]).letter).toBe(
      testObject.letters[3]
    );
  });

  test("function description returns Above Average for 80 input", () => {
    expect(letterGrade(testInputs.percentages[8]).description).toBe(
      testObject.descriptions[3]
    );
  });

  test("function returns B for 83 input", () => {
    expect(letterGrade(testInputs.percentages[9]).letter).toBe(
      testObject.letters[3]
    );
  });

  test("function description returns Above Average for 83 input", () => {
    expect(letterGrade(testInputs.percentages[9]).description).toBe(
      testObject.descriptions[3]
    );
  });

  test("function returns B for 85.99 input", () => {
    expect(letterGrade(testInputs.percentages[10]).letter).toBe(
      testObject.letters[3]
    );
  });

  test("function description returns Above Average for 85.99 input", () => {
    expect(letterGrade(testInputs.percentages[10]).description).toBe(
      testObject.descriptions[3]
    );
  });

  test("function letter returns C for 70 input", () => {
    expect(letterGrade(testInputs.percentages[11]).letter).toBe(
      testObject.letters[4]
    );
  });

  test("function description returns Average for 70 input", () => {
    expect(letterGrade(testInputs.percentages[11]).description).toBe(
      testObject.descriptions[4]
    );
  });

  test("function returns C for 75 input", () => {
    expect(letterGrade(testInputs.percentages[12]).letter).toBe(
      testObject.letters[4]
    );
  });

  test("function description returns Average for 75 input", () => {
    expect(letterGrade(testInputs.percentages[12]).description).toBe(
      testObject.descriptions[4]
    );
  });

  test("function returns C for 79.99 input", () => {
    expect(letterGrade(testInputs.percentages[13]).letter).toBe(
      testObject.letters[4]
    );
  });

  test("function description returns Average for 79.99 input", () => {
    expect(letterGrade(testInputs.percentages[13]).description).toBe(
      testObject.descriptions[4]
    );
  });

  test("function returns D for 60 input", () => {
    expect(letterGrade(testInputs.percentages[14]).letter).toBe(
      testObject.letters[5]
    );
  });

  test("function description returns Below Average for 60 input", () => {
    expect(letterGrade(testInputs.percentages[14]).description).toBe(
      testObject.descriptions[5]
    );
  });

  test("function returns D for 65 input", () => {
    expect(letterGrade(testInputs.percentages[15]).letter).toBe(
      testObject.letters[5]
    );
  });

  test("function description returns Below Average for 65 input", () => {
    expect(letterGrade(testInputs.percentages[15]).description).toBe(
      testObject.descriptions[5]
    );
  });

  test("function letter returns D for 69.99 input", () => {
    expect(letterGrade(testInputs.percentages[16]).letter).toBe(
      testObject.letters[5]
    );
  });

  test("function description returns Below Average for 69.99 input", () => {
    expect(letterGrade(testInputs.percentages[16]).description).toBe(
      testObject.descriptions[5]
    );
  });

  test("function returns F for 59.99 input", () => {
    expect(letterGrade(testInputs.percentages[17]).letter).toBe(
      testObject.letters[6]
    );
  });

  test("function description returns Not Good Enough for 59.99 input", () => {
    expect(letterGrade(testInputs.percentages[17]).description).toBe(
      testObject.descriptions[6]
    );
  });

  test("function letter returns F for 50 input", () => {
    expect(letterGrade(testInputs.percentages[18]).letter).toBe(
      testObject.letters[6]
    );
  });

  test("function description returns Not Good Enough for 50 input", () => {
    expect(letterGrade(testInputs.percentages[18]).description).toBe(
      testObject.descriptions[6]
    );
  });
});
