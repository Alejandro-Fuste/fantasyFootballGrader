import writeToFile from "../writeToFile.js";

// sleeper rosters
import holRosters from "../../data/sleeper/ownersWithRosters/holOwnersAndRosters.json" assert { type: "json" };
import glaRosters from "../../data/sleeper/ownersWithRosters/glaOwnersAndRosters.json" assert { type: "json" };
import ddbRosters from "../../data/sleeper/ownersWithRosters/ddbOwnersAndRosters.json" assert { type: "json" };

// players
import sleeperPlayers from "../../data/sleeper/players/allPlayers.json" assert { type: "json" };

// combined data
import combinedData from "../../data/combinedData/combinedData.json" assert { type: "json" };

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

// let data = addPlayerDataToOwnerData(holRosters);
// writeToFile("../../data/sleeper/completeData/holCompleteData.json", data);

// let data = addPlayerDataToOwnerData(glaRosters);
// writeToFile("../../data/sleeper/completeData/glaCompleteData.json", data);

let data = addPlayerDataToOwnerData(ddbRosters);
writeToFile("../../data/sleeper/completeData/ddbCompletedata.json", data);
