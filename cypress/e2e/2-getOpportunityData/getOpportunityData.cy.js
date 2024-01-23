import percentile from "../../../utils/calculations/percentile";
import letterGrade from "../../../utils/calculations/letterGrade";

describe("get opportunity data for all players", () => {
  let snapMap = new Map();
  let joinedMap = new Map();
  it("get all player snap percentages", () => {
    cy.visit("https://www.fantasypros.com/nfl/reports/snap-counts/?show=perc");
    cy.location("href").should(
      "eq",
      "https://www.fantasypros.com/nfl/reports/snap-counts/?show=perc"
    );

    // page should land on NFL snap count leaders

    cy.get("h1").should("have.text", "NFL Snap Count Leaders");

    // get table rows
    cy.get("#data > tbody > tr").as("tableRows");
    cy.get("@tableRows").should("have.length", 614);

    // loop through table rows
    cy.get("@tableRows").each(($tr, index, $lis) => {
      const rowElement = $tr.get(0);
      const cells = rowElement.cells;

      let formattedName = cells[0].innerText.replace(/\s$/, "");
      let formattedPercentage = cells[22].innerText.replace(/[%]$/, "");

      let data = {
        name: formattedName,
        snapPercentage: parseInt(formattedPercentage),
      };

      snapMap.set(formattedName, data);
      console.log(snapMap);
    });
  });

  it("get QB passing and rushing attempts", () => {
    cy.visit("https://www.fantasypros.com/nfl/stats/qb.php?scoring=PPR");
    cy.location("href").should(
      "eq",
      "https://www.fantasypros.com/nfl/stats/qb.php?scoring=PPR"
    );

    cy.get("tbody > tr").as("tableRows");

    let tableLength = 118;

    cy.get("@tableRows").should("have.length", tableLength);

    cy.get('[data-column="3"]').click();

    cy.get("@tableRows").each(($tr, index, $lis) => {
      if (index >= 77) {
        return false;
      } else {
        const rowElement = $tr.get(0);
        const cells = rowElement.cells;

        let name = cells[1].innerText.split(" ");
        let formattedName = "";

        if (name.length === 4) {
          formattedName = `${name[0]} ${name[1]}`;
        } else {
          formattedName = `${name[0]} ${name[1]} ${name[2]}`;
        }

        let rank = index + 1;
        let percentileValue = percentile(tableLength, rank);
        let grade = letterGrade(percentileValue);

        let data = {
          name: formattedName,
          opportunity: {
            snapPercentage: snapMap.get(formattedName).snapPercentage,
            completions: parseFloat(cells[2].innerText),
            attempts: parseFloat(cells[3].innerText),
            attemptsRank: rank,
            attemptsPercentile: percentileValue,
            attemptsGrade: grade,
            rushingAttempts: parseFloat(cells[8].innerText),
          },
        };

        joinedMap.set(formattedName, data);
        console.log(joinedMap);
      }
    });
  });

  //   it("get RB attempts and targets", () => {});

  //   it("get WR targets", () => {});

  //   it("get TE attempts", () => {});

  //   it("write data to JSON file", () => {
  //     let results = Object.fromEntries(resultsMap);
  //     let jsonString = JSON.stringify(results, null, " ");
  //     console.log(jsonString);

  //     cy.writeFile("./data/production/productionData.json", jsonString);
  //   });
});
