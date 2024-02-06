import "dotenv/config";
import writeToFile from "./utils/writeToFile.js";
import appendToFile from "./utils/appendToFile.js";
import sleeperAPI from "./utils/API/sleeperAPI.js";
import sportsDataAPI from "./utils/API/sportsDataAPI.js";
import teams from "./data/offense/offenseData.json" assert { type: "json" };

const api_key = process.env.SPORTS_DATA_KEY;
const BASE_URL = "https://api.sportsdata.io/v3/nfl/scores/json/Players/";

const teamsArray = Object.keys(teams);

const getRostersWithImages = (team) => {
  let url;

  if (team === "JAC") {
    url = `${BASE_URL}JAX?key=${api_key}`;
  } else {
    url = `${BASE_URL}${team}?key=${api_key}`;
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        resolve(data);
      });
  });
};

const getImages = async () => {
  let imageRequest = null;
  let object = new Map();

  teamsArray.forEach(async (team) => {
    imageRequest = getRostersWithImages(team);

    await imageRequest.then((data) => {
      object.set(team, data);
      let info = { [team]: data };
      appendToFile("./data/sportsData/rostersWithPhotos.json", info);
    });
  });
};

getImages();

/* ****** Get owners from all leagues ****** */

// sleeperAPI.getOwners(holURL).then((data) => {
//   writeToFile("./data/sleeper/owners/houseOfLambda.json", data);
// });

// sleeperAPI.getOwners(glaURL).then((data) => {
//   writeToFile("./data/sleeper/owners/glaDynasty.json", data);
// });

// sleeperAPI.getOwners(ddbURL).then((data) => {
//   writeToFile("./data/sleeper/owners/dirtyDroAndBoys.json", data);
// });

/* ****** Get rosters from all teams in all leagues ****** */

// sleeperAPI.getRosters(holURL).then((data) => {
//   writeToFile("./data/sleeper/rosters/houseOfLambdaRosters.json", data);
// });

// sleeperAPI.getRosters(glaURL).then((data) => {
//   writeToFile("./data/sleeper/rosters/glaDynastyRosters.json", data);
// });

// sleeperAPI.getRosters(ddbURL).then((data) => {
//   writeToFile("./data/sleeper/rosters/dirtyDroAndBoysRosters.json", data);
// });

/* ****** Get All Players from Sleeper ****** */

// sleeperAPI.getAllPlayers(allPlayersURL).then((data) => {
//   writeToFile("./data/sleeper/players/allPlayers.json", data);
// });
