import writeToFile from "../../../utils/writeToFile.js";

// sleeper rosters
import holRosters from "../ownersWithRosters/holOwnersAndRosters.json" assert { type: "json" };
import glaRosters from "../ownersWithRosters/glaOwnersAndRosters.json" assert { type: "json" };
import ddbRosters from "../ownersWithRosters/ddbOwnersAndRosters.json" assert { type: "json" };

// combined data
import combinedData from "../../combinedData/combinedPlayerData.json" assert { type: "json" };

function getPlayerData(rosterArray) {
  let array = [];

  rosterArray.forEach((player) => {
    if (combinedData[player] && player != null) {
      let data = {
        ...combinedData[player],
      };
      array.push(data);
    } else {
      array.push({
        name: player,
        message: "No data available",
      });
    }
  });
  return array;
}

function addPlayerDataToOwnerData(league) {
  let owners = [];
  league.forEach((owner) => {
    owners.push({
      ...owner,
      rosterWithNames: getPlayerData(owner.rosterWithNames),
    });
  });
  return owners;
}

let data1 = addPlayerDataToOwnerData(holRosters);
writeToFile("./holCompleteData.json", data1);

let data2 = addPlayerDataToOwnerData(glaRosters);
writeToFile("./glaCompleteData.json", data2);

let data3 = addPlayerDataToOwnerData(ddbRosters);
writeToFile("./ddbCompletedata.json", data3);
