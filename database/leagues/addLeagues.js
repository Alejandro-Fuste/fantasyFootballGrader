import writeToFile from "../../utils/writeToFile.js";
import holOwnersWithPlayerData from "../../data/sleeper/completeData/holCompleteData.json" assert { type: "json" };
import glaOwnersWithPlayerData from "../../data/sleeper/completeData/glaCompleteData.json" assert { type: "json" };
import ddbOwnersWithPlayerData from "../../data/sleeper/completeData/ddbCompletedata.json" assert { type: "json" };

function createLeaguesDatabase(leagueOne, leagueTwo, leagueThree) {
  let data = {
    leagues: [
      { houseOfLambda: leagueOne },
      { glaDynasty: leagueTwo },
      { dirtyDroAndTheBoys: leagueThree },
    ],
  };
  return data;
}

let data = createLeaguesDatabase(
  holOwnersWithPlayerData,
  glaOwnersWithPlayerData,
  ddbOwnersWithPlayerData
);
writeToFile("./leagues.json", data);
