// combine owners data with roster data

import writeToFile from "../writeToFile.js";
// owners
import holOwners from "../../data/sleeper/transformedOwners/houseOfLambdaObject.json" assert { type: "json" };
import glaOwners from "../../data/sleeper/transformedOwners/glaDynastyObject.json" assert { type: "json" };
import ddBOwners from "../../data/sleeper/transformedOwners/dirtyDroAndBoysObject.json" assert { type: "json" };

// sleeper rosters
import holRosters from "../../data/sleeper/rosters/houseOfLambdaRosters.json" assert { type: "json" };
import glaRosters from "../../data/sleeper/rosters/glaDynastyRosters.json" assert { type: "json" };
import ddBRosters from "../../data/sleeper/rosters/dirtyDroAndBoysRosters.json" assert { type: "json" };

const leagueId = {
  hol: "994022092423114752",
  gla: "918743381038239744",
  ddb: "992182800750813184",
};
let dataArray = [];

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

    if (leagueId.hol === owner.league_id || leagueId.gla === owner.league_id) {
      object.full_roster = [
        ...owner.starters,
        ...owner.players,
        ...taxi,
        ...reserve,
      ];
    } else {
      object.full_roster = [
        ...owner.starters,
        ...owner.players,
        ...owner.keepers,
      ];
    }

    dataArray.push(object);
  });

  return dataArray;
}

// let data = addPlayerDataToRosters(holRosters, holOwners);
// writeToFile(
//   "../../data/sleeper/ownersWithRosters/holOwnersAndRosters.json",
//   data
// );

// let data = addPlayerDataToRosters(glaRosters, glaOwners);
// writeToFile(
//   "../../data/sleeper/ownersWithRosters/glaOwnersAndRosters.json",
//   data
// );

let data = addPlayerDataToRosters(ddBRosters, ddBOwners);
writeToFile(
  "../../data/sleeper/ownersWithRosters/ddbOwnersAndRosters.json",
  data
);
