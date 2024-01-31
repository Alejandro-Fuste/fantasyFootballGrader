// combine sleeper data with data collect from cypress files

import writeToFile from "../writeToFile.js";
// owners
import holOwners from "../../data/sleeper/transformedOwners/houseOfLambdaObject.json" assert { type: "json" };
import glaOwners from "../../data/sleeper/transformedOwners/glaDynastyObject.json" assert { type: "json" };
import ddBOwners from "../../data/sleeper/transformedOwners/dirtyDroAndBoysObject.json" assert { type: "json" };
// players
import sleeperPlayers from "../../data/sleeper/players/allPlayers.json" assert { type: "json" };
// sleeper rosters
import holRosters from "../../data/sleeper/rosters/houseOfLambdaRosters.json" assert { type: "json" };
import glaRosters from "../../data/sleeper/rosters/glaDynastyRosters.json" assert { type: "json" };
import ddBRosters from "../../data/sleeper/rosters/dirtyDroAndBoysRosters.json" assert { type: "json" };
// combined data
import combinedData from "../../data/combinedData/combinedData.json" assert { type: "json" };

const leagueId = {
  hol: "994022092423114752",
  gla: "918743381038239744",
  ddb: "992182800750813184",
};
let dataArray = [];

function getPlayerNameAndData(rosterArray) {
  let array = [];

  rosterArray.forEach((player) => {
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
function addPlayerDataToRosters(rosterArray, leagueObject) {
  const object = {};
  const allPlayers = [];

  rosterArray.forEach((owner) => {
    object.ownerId = owner.owner_id;
    object.leagueId = leagueObject[owner.owner_id].league_id;
    object.displayName = leagueObject[owner.owner_id].display_name;
    object.teamName = leagueObject[owner.owner_id].metadata.team_name;
    object.avatar = leagueObject[owner.owner_id].avatar;
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

    if (leagueId.hol === owner.league_id || leagueId.gla === owner.league_id) {
      object.full_roster = [...owner.starters, ...owner.players, ...owner.taxi];
    } else {
      object.full_roster = [
        ...owner.starters,
        ...owner.players,
        ...owner.keepers,
      ];
    }
  });

  // condition
}
