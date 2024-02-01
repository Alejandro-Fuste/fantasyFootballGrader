import percentile from "../../../utils/calculations/percentile";
import teamLetterGrade from "../../../utils/calculations/teamLetterGrade";

describe("get each team's offensive data for the 2023 season and write to json file", () => {
  let resultsMap = new Map();

  it("gets offense data and assigns grades", () => {
    // Go to website and verify
    cy.visit(
      "https://www.covers.com/sport/football/nfl/statistics/team-offense/2023-2024"
    );

    cy.location("href").should(
      "eq",
      "https://www.covers.com/sport/football/nfl/statistics/team-offense/2023-2024"
    );

    // Check if it's the right data and year
    cy.get("h1").should("have.text", "NFL Stats - Team Offense 2023-2024");

    // cy.get(".covers-CoversMatchups-subH1").should("have.text", "2023-2024");

    // Click on season and points per game
    cy.get(".covers-DataPages-tabButtonContainer > :nth-child(1) > a").click();

    cy.get("#RegularSeason > thead > tr > th:nth-child(10)").click();

    cy.get("#RegularSeason > tbody > tr").as("tableRows");

    let total = 32;

    cy.get("@tableRows").should("have.length", total);

    // loop through table
    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let name = cells[0].innerText.replace(/\s/, "");
      let rank = index + 1;
      let percentileValue = percentile(total, rank);
      let grade = teamLetterGrade(rank);

      let data = {
        name: name,
        offense: {
          pointsPerGame: parseFloat(cells[9].innerText),
          QBR: parseFloat(cells[5].innerText),
          passPerGame: parseFloat(cells[4].innerText),
          rushPerGame: parseFloat(cells[2].innerText),
          yardsPerGame: parseFloat(cells[1].innerText),
          rank: rank,
          percentile: percentileValue,
          grade: grade,
        },
      };

      resultsMap.set(name, data);
      console.log(resultsMap);
    });
  });

  it("write data to JSON file", () => {
    let results = Object.fromEntries(resultsMap);
    let jsonString = JSON.stringify(results, null, " ");

    cy.writeFile("./data/offense/offenseData.json", jsonString);
  });
});
