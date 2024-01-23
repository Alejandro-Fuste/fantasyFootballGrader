/// <reference types="cypress" />

import percentile from "../../../utils/calculations/percentile";
import letterGrade from "../../../utils/calculations/letterGrade";

describe("get each player's PPR fantasy production data for the 2023 season and write to json file", () => {
  let resultsMap = new Map();
  let overallMap = new Map();
  beforeEach(() => {
    cy.visit(
      "https://www.fantasypros.com/nfl/reports/leaders/ppr.php?year=2023"
    );

    cy.location("href").should(
      "eq",
      "https://www.fantasypros.com/nfl/reports/leaders/ppr.php?year=2023"
    );
  });

  it("gets overall production grades for all players", () => {
    cy.get(".pills > :nth-child(1) > a").click();

    cy.get(":nth-child(3) > .select-links")
      .select("Wk 18")
      .should("have.value", "?year=2023&start=1&end=18");

    cy.get("tbody > tr").as("tableRows");

    let tableLength = 707;

    cy.get("@tableRows").should("have.length", tableLength);

    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let name = cells[1].innerText;
      let rank = parseInt(cells[0].innerText);
      let percentileValue = percentile(tableLength, rank);
      let grade = letterGrade(percentileValue);

      let data = {
        name: name,
        overallRank: rank,
        overallPercentile: percentileValue,
        overallGrade: grade,
      };

      overallMap.set(name, data);
    });
  });

  it("gets production data for QBs", () => {
    cy.get(".pills > :nth-child(2) > a").click();

    cy.get(":nth-child(3) > .select-links")
      .select("Wk 18")
      .should("have.value", "?year=2023&start=1&end=18");

    cy.get("tbody > tr").as("tableRows");

    let tableLength = 87;

    cy.get("@tableRows").should("have.length", tableLength);

    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let name = cells[1].innerText;
      let rank = parseInt(cells[0].innerText);
      let percentileValue = percentile(tableLength, rank);
      let grade = letterGrade(percentileValue);

      let data = {
        name: name,
        position: cells[2].innerText,
        team: cells[3].innerText,
        production: {
          totalPoints: parseFloat(cells[23].innerText),
          pointsPerGame: parseFloat(cells[22].innerText),
          overallRank: overallMap.get(name).overallRank,
          overallPercentile: overallMap.get(name).overallPercentile,
          overallGrade: overallMap.get(name).overallGrade,
          positionRank: rank,
          positionPercentile: percentileValue,
          positionGrade: grade,
        },
      };

      resultsMap.set(name, data);
    });
  });

  it("gets production data for RBs", () => {
    cy.get(".pills > :nth-child(3) > a").click();

    cy.get(":nth-child(3) > .select-links")
      .select("Wk 18")
      .should("have.value", "?year=2023&start=1&end=18");

    cy.get("tbody > tr").as("tableRows");

    let tableLength = 163;

    cy.get("@tableRows").should("have.length", tableLength);

    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let name = cells[1].innerText;
      let rank = parseInt(cells[0].innerText);
      let percentileValue = percentile(tableLength, rank);
      let grade = letterGrade(percentileValue);

      let data = {
        name: name,
        position: cells[2].innerText,
        team: cells[3].innerText,
        production: {
          totalPoints: parseFloat(cells[23].innerText),
          pointsPerGame: parseFloat(cells[22].innerText),
          overallRank: overallMap.get(name).overallRank,
          overallPercentile: overallMap.get(name).overallPercentile,
          overallGrade: overallMap.get(name).overallGrade,
          positionRank: rank,
          positionPercentile: percentileValue,
          positionGrade: grade,
        },
      };

      resultsMap.set(name, data);
    });
  });

  it("gets production data for WRs", () => {
    cy.get(".pills > :nth-child(4) > a").click();

    cy.get(":nth-child(3) > .select-links")
      .select("Wk 18")
      .should("have.value", "?year=2023&start=1&end=18");

    cy.get("tbody > tr").as("tableRows");

    let tableLength = 244;

    cy.get("@tableRows").should("have.length", tableLength);

    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let name = cells[1].innerText;
      let rank = parseInt(cells[0].innerText);
      let percentileValue = percentile(tableLength, rank);
      let grade = letterGrade(percentileValue);

      let data = {
        name: name,
        position: cells[2].innerText,
        team: cells[3].innerText,
        production: {
          totalPoints: parseFloat(cells[23].innerText),
          pointsPerGame: parseFloat(cells[22].innerText),
          overallRank: overallMap.get(name).overallRank,
          overallPercentile: overallMap.get(name).overallPercentile,
          overallGrade: overallMap.get(name).overallGrade,
          positionRank: rank,
          positionPercentile: percentileValue,
          positionGrade: grade,
        },
      };

      resultsMap.set(name, data);
    });
  });

  it("gets production data for TEs", () => {
    cy.get(".pills > :nth-child(5) > a").click();

    cy.get(":nth-child(3) > .select-links")
      .select("Wk 18")
      .should("have.value", "?year=2023&start=1&end=18");

    cy.get("tbody > tr").as("tableRows");

    let tableLength = 142;

    cy.get("@tableRows").should("have.length", tableLength);

    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let name = cells[1].innerText;
      let rank = parseInt(cells[0].innerText);
      let percentileValue = percentile(tableLength, rank);
      let grade = letterGrade(percentileValue);

      let data = {
        name: name,
        position: cells[2].innerText,
        team: cells[3].innerText,
        production: {
          totalPoints: parseFloat(cells[23].innerText),
          pointsPerGame: parseFloat(cells[22].innerText),
          overallRank: overallMap.get(name).overallRank,
          overallPercentile: overallMap.get(name).overallPercentile,
          overallGrade: overallMap.get(name).overallGrade,
          positionRank: rank,
          positionPercentile: percentileValue,
          positionGrade: grade,
        },
      };

      resultsMap.set(name, data);
      console.log(resultsMap);
    });
  });

  it("write data to JSON file", () => {
    let results = Object.fromEntries(resultsMap);
    let jsonString = JSON.stringify(results, null, " ");
    console.log(jsonString);

    cy.writeFile("./data/production/productionData.json", jsonString);
  });
});
