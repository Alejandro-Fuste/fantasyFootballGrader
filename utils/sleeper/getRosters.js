// combine sleeper data with data collect from cypress files

import writeToFile from "../writeToFile.js";
// owners
import holOwners from "../../data/sleeper/owners/houseOfLambda.json" assert { type: "json" };
import glaOwners from "../../data/sleeper/owners/glaDynasty.json" assert { type: "json" };
import ddBOwners from "../../data/sleeper/owners/dirtyDroAndBoys.json" assert { type: "json" };
// players
import sleeperPlayers from "../../data/sleeper/players/allPlayers.json" assert { type: "json" };
// sleeper rosters
import holRosters from "../../data/sleeper/rosters/houseOfLambdaRosters.json" assert { type: "json" };
import glaRosters from "../../data/sleeper/rosters/glaDynastyRosters.json" assert { type: "json" };
import ddBRosters from "../../data/sleeper/rosters/dirtyDroAndBoysRosters.json" assert { type: "json" };
// combined data
import combinedData from "../../data/combinedData/combinedData.json" assert { type: "json" };

let dataArray = [];

function getPlayerNameAndData(list) {
  let array = [];

  list.forEach((player) => {
    if (combinedData[sleeperPlayers[player].full_name]) {
      let data = {
        ...combinedData[sleeperPlayers[player].full_name],
        age: sleeperPlayers[player].age,
      };
      array.push(data);
    } else {
      array.push(`Could not find player: ${sleeperPlayers[player].full_name} `);
    }
  });
  return array;
}

// loop through league rosters
function addPlayerDataToRosters(list, league) {
  const object = {};

  list.forEach((owner) => {
    object.owner_id = owner.owner_id;
    object.wins = owner.settings.wins;
    object.losses = owner.settings.losses;
    object.ties = owner.settings.ties;
    object.waiversBudgetUsed = owner.settings.waiver_budget_used;
    object.pointsFor = parseFloat(
      `${owner.settings.fpts}.${owner.settings.fpts_decimal}`
    );
    object.pointsAgainst = parseFloat(
      `${owner.settings.fpts_against}.${owner.settings.fpts_against_decimal}`
    );
  });

  // condition
}
