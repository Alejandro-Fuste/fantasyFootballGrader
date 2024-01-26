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

  // loop through list and only add QBs
  list.forEach((player) => {
    data = {
      production: production[player] || "N/A",
      opportunity: opportunity[player] || "N/A",
      offense: offense[player] || "N/A",
    };

    object.set(player, data);
  });

  let obj = Object.fromEntries(object);
  console.log(obj);
  return obj;
};

let data = allData(offenseData, opportunityData, productionData);
writeToFile("../../data/combinedData/combinedData.json", data);
