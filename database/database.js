import writeToFile from "../utils/writeToFile.js";
import homeScreenData from "../data/homeScreen/homeScreenData.json" assert { type: "json" };
import holOwnersWithPlayerData from "../data/sleeper/completeData/holCompleteData.json" assert { type: "json" };
import glaOwnersWithPlayerData from "../data/sleeper/completeData/glaCompleteData.json" assert { type: "json" };
import ddbOwnersWithPlayerData from "../data/sleeper/completeData/ddbCompletedata.json" assert { type: "json" };
import playerData from "../data/combinedData/combinedPlayerData.json" assert { type: "json" };

function createLeaguesDatabase(leagueOne, leagueTwo, leagueThree) {
  let data = {
    leagues: [
      {
        "House of Lambda": {
          name: homeScreenData[0].leagueInfo.name,
          details: homeScreenData[0].details,
          draftOrder: homeScreenData[0].draftOrder,
          ranks: homeScreenData[0].ranks,
          owners: leagueOne,
        },
      },
      {
        "GLA-Dynasty": {
          name: homeScreenData[1].leagueInfo.name,
          details: homeScreenData[1].details,
          draftOrder: homeScreenData[1].draftOrder,
          ranks: homeScreenData[1].ranks,
          owners: leagueTwo,
        },
      },
      {
        "Dirty Dro and the Boys": {
          name: homeScreenData[2].leagueInfo.name,
          details: homeScreenData[2].details,
          draftOrder: homeScreenData[2].draftOrder,
          ranks: homeScreenData[2].ranks,
          owners: leagueThree,
        },
      },
    ],
    players: playerData,
  };
  return data;
}

let data = createLeaguesDatabase(
  holOwnersWithPlayerData,
  glaOwnersWithPlayerData,
  ddbOwnersWithPlayerData
);
writeToFile("./database.json", data);
