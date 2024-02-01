import writeToFile from "../writeToFile.js";

// sleeper rosters
import holRosters from "../../data/sleeper/ownersWithRosters/holOwnersAndRosters.json" assert { type: "json" };
import glaRosters from "../../data/sleeper/ownersWithRosters/glaOwnersAndRosters.json" assert { type: "json" };
import ddbRosters from "../../data/sleeper/ownersWithRosters/ddbOwnersAndRosters.json" assert { type: "json" };

// players
import sleeperPlayers from "../../data/sleeper/players/allPlayers.json" assert { type: "json" };

// combined data
import combinedData from "../../data/combinedData/combinedData.json" assert { type: "json" };

let dataArray = [];
let sampleRoster = holRosters[0].full_roster;

function getPlayerNames(rosterArray) {
  let array = [];
  rosterArray.forEach((player) => {
    array.push(sleeperPlayers[player].full_name);
  });
  console.log(array);
  return array;
}

function getPlayerData(rosterArray) {
  let array = [];

  rosterArray.forEach((player) => {
    console.log(player);
    if (combinedData[sleeperPlayers[player].full_name]) {
      let data = {
        ...combinedData[sleeperPlayers[player].full_name],
        age: sleeperPlayers[player].age,
        sleeperPlayerId: player,
      };
      array.push(data);
    } else {
      array.push({
        name: sleeperPlayers[player].full_name,
        sleeperPlayerId: player,
        message: "No data available",
      });
    }
  });
  return array;
}

function addPlayerDataToOwnerData(league) {
  let owners = [];
  league.forEach((owner) => {
    owners.push({ ...owner, full_roster: getPlayerData(owner.full_roster) });
  });
  return owners;
}

// let data = addPlayerDataToOwnerData(holRosters);
// writeToFile("../../data/sleeper/completeData/holCompleteData.json", data);

let data = addPlayerDataToOwnerData(glaRosters);
writeToFile("../../data/sleeper/completeData/glaCompleteData.json", data);

// let data = addPlayerDataToOwnerData(ddbRosters);
// writeToFile("../../data/sleeper/completeData/ddbCompletedata.json", data);
