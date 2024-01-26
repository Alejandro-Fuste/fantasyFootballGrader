import writeToFile from "../writeToFile.js";
import offenseData from "../../data/offense/offenseData.json" assert { type: "json" };
import opportunityData from "../../data/opportunity/opportunityData.json" assert { type: "json" };
import productionData from "../../data/production/productionData.json" assert { type: "json" };
import sumCriteriaPoints from "./sumCriteriaPoints.js";
import percentage from "./percentage.js";
// const letterGrade = require("./letterGrade.js").default;
import letterGrade from "./letterGrade.js";

function overallGrade(offense, opportunity, production) {
  let object = new Map();
  let data = {};
  let list = Object.keys(production);
  let total = 400;

  list.forEach((player) => {
    let overallPercentile = production[player].production.overallPercentile;
    let positionPercentile = production[player].production.positionPercentile;
    let offensePercentile = offense[production[player].team]
      ? offense[production[player].team].offense.percentile
      : 0;
    let opportunityPercentile;

    if (
      production[player].position === "WR" ||
      production[player].position === "TE"
    ) {
      opportunityPercentile = opportunity[player]
        ? opportunity[player].opportunity.targetsPercentile
        : 0;
    } else {
      opportunityPercentile = opportunity[player]
        ? opportunity[player].opportunity.attemptsPercentile
        : 0;
    }
    let valuesArray = [
      overallPercentile,
      positionPercentile,
      opportunityPercentile,
      offensePercentile,
    ];
    let sum = sumCriteriaPoints(valuesArray);

    let percent = percentage(sum, total);

    let grade = letterGrade(percent);

    data = { value: percent, grade };
    console.log(player, data);
    object.set(player, data);
  });
}
let data = overallGrade(offenseData, opportunityData, productionData);
// writeToFile("../../data/combinedData/combinedData.json", data);
