// formatName.test.js
// const formatName = require("../../utils/formatName");
import formatName from "../../utils/formatName";

describe("formatName file positive tests", () => {
  test("removes suffix from a name", () => {
    expect(formatName("Patrick Mahomes II")).toBe("Patrick Mahomes");
    expect(formatName("Tom Brady Jr.")).toBe("Tom Brady");
    expect(formatName("George Foreman III")).toBe("George Foreman");
  });

  test("does not modify name without suffix", () => {
    expect(formatName("Michael Jordan")).toBe("Michael Jordan");
    expect(formatName("LeBron James")).toBe("LeBron James");
    expect(formatName("Amon-Ra St. Brown")).toBe("Amon-Ra St. Brown");
  });
});
