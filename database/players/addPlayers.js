import writeToFile from "../../utils/writeToFile.js";
import playerData from "../../data/combinedData/combinedData.json" assert { type: "json" };

function createPlayersDatabase(playersJson) {
  let data = {
    2023: playersJson,
  };
  return data;
}

let data = createPlayersDatabase(playerData);
writeToFile("./players.json", data);
