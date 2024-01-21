/// <reference types="cypress" />

describe("get each player's PPR fantasy points for the 2023 season and write to json file", () => {
  beforeEach(() => {
    cy.visit(
      "https://www.fantasypros.com/nfl/reports/leaders/ppr.php?year=2023"
    );

    cy.location("href").should(
      "eq",
      "https://www.fantasypros.com/nfl/reports/leaders/ppr.php?year=2023"
    );
  });

  it("gets PPR points for QBs", () => {});
});
