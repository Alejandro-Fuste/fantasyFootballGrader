// Combine players from each position group into one file

// import files
import writeToFile from "../writeToFile.js";
import offenseData from "../../data/offense/offenseData.json" assert { type: "json" };
import opportunityData from "../../data/opportunity/opportunityData.json" assert { type: "json" };
import productionData from "../../data/production/productionData.json" assert { type: "json" };
import overallGrade from "../../data/grade/overallGrade.json" assert { type: "json" };
import photoData from "../../data/sportsData/rostersWithPhotos.json" assert { type: "json" };

function filterPlayer(player) {
  let photoUrl;
  if (photoData[productionData[player].team]) {
    let data = photoData[productionData[player].team].filter(
      (p) => p.Name === player
    );
    photoUrl = !data[0]?.PhotoUrl ? "Missing photo url" : data[0].PhotoUrl;
    return photoUrl;
  } else {
    return "Can't find player";
  }
}

let allData = (offense, opportunity, production) => {
  let object = new Map();
  let data = {};
  let list = Object.keys(production);

  list.forEach((player) => {
    data = {
      name: player,
      overallGrade: overallGrade[player] ? overallGrade[player] : "N/A",
      position: production[player].position,
      teamShortName: production[player].team ? production[player].team : "N/A",
      team: offense[production[player].team]
        ? offense[production[player].team].name
        : "N/A",
      headShot: filterPlayer(player),
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
