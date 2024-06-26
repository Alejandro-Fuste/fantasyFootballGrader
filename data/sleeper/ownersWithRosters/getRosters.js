// combine owners data with roster data

import writeToFile from "../../../utils/writeToFile.js";
// owners
import holOwners from "../transformedOwners/houseOfLambdaObject.json" assert { type: "json" };
import glaOwners from "../transformedOwners/glaDynastyObject.json" assert { type: "json" };
import ddBOwners from "../transformedOwners/dirtyDroAndBoysObject.json" assert { type: "json" };

// sleeper rosters
import holRosters from "../rosters/houseOfLambdaRosters.json" assert { type: "json" };
import glaRosters from "../rosters/glaDynastyRosters.json" assert { type: "json" };
import ddBRosters from "../rosters/dirtyDroAndBoysRosters.json" assert { type: "json" };

// players
import sleeperPlayers from "../players/allPlayers.json" assert { type: "json" };

let dataArray = [];

function getPlayerNames(rosterArray) {
  let array = [];
  rosterArray.forEach((player) => {
    if (!sleeperPlayers[player].full_name) {
      return;
    } else {
      array.push(sleeperPlayers[player].full_name);
    }
  });
  return array;
}

// loop through league rosters
function addPlayerDataToRosters(rosterArray, ownerObject) {
  rosterArray.forEach((owner) => {
    let object = {};

    object.ownerId = owner.owner_id;
    object.leagueId = ownerObject[owner.owner_id].league_id;
    object.displayName = ownerObject[owner.owner_id].display_name;
    object.teamName = ownerObject[owner.owner_id].metadata.team_name;
    object.avatar = ownerObject[owner.owner_id].avatar;
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

    let taxi = owner.taxi ? owner.taxi : [];
    let reserve = owner.reserve ? owner.reserve : [];

    object.starters = owner.starters;
    object.players = owner.players;
    object.taxi = taxi;
    object.reserve = reserve;

    object.rosterWithNames = getPlayerNames(owner.players);

    dataArray.push(object);
  });

  return dataArray;
}

let data = addPlayerDataToRosters(holRosters, holOwners);
writeToFile(
  "../../data/sleeper/ownersWithRosters/holOwnersAndRosters.json",
  data
);

// let data = addPlayerDataToRosters(glaRosters, glaOwners);
// writeToFile(
//   "../../data/sleeper/ownersWithRosters/glaOwnersAndRosters.json",
//   data
// );

// let data = addPlayerDataToRosters(ddBRosters, ddBOwners);
// writeToFile(
//   "../../data/sleeper/ownersWithRosters/ddbOwnersAndRosters.json",
//   data
// );
