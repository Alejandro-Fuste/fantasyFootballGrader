// Combine players from each position group into one file

// import files
import writeToFile from "../writeToFile.js";
import offenseData from "../../data/offense/offenseData.json" assert { type: "json" };
import opportunityData from "../../data/opportunity/opportunityData.json" assert { type: "json" };
import productionData from "../../data/production/productionData.json" assert { type: "json" };

let allData = (offense, opportunity, production) => {
  let object = new Map();
  let data = {};
  let list = Object.keys(production);

  list.forEach((player) => {
    data = {
      name: player,
      overallGrade: "",
      position: production[player].position,
      team: offense[production[player].team]
        ? offense[production[player].team].name
        : "N/A",
      production: production[player].production || "N/A",
      opportunity: opportunity[player]
        ? opportunity[player].opportunity
        : "N/A",
      offense: offense[production[player].team]
        ? offense[production[player].team].offense
        : "N/A",
    };
    object.set(player, data);
  });

  let obj = Object.fromEntries(object);

  return obj;
};

let data = allData(offenseData, opportunityData, productionData);
writeToFile("../../data/combinedData/combinedData.json", data);
