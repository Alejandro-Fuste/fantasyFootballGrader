import "dotenv/config";
import writeToFile from "./utils/writeToFile.js";
import sleeperAPI from "./utils/API/sleeperAPI.js";

const BASE_URI = "https://api.sleeper.app/v1/league/";
const houseOfLambdaId = process.env.API_HOL;
const glaDynastyId = process.env.API_GLA;
const dirtyDroAndTheBoysId = process.env.API_DDB;
const holURL = `${BASE_URI}${houseOfLambdaId}`;
const glaURL = `${BASE_URI}${glaDynastyId}`;
const ddbURL = `${BASE_URI}${dirtyDroAndTheBoysId}`;

// Get owners from all three leagues

// sleeperAPI.getOwners(holURL).then((data) => {
//   writeToFile("./data/sleeper/owners/houseOfLambda.json", data);
// });

// sleeperAPI.getOwners(glaURL).then((data) => {
//   writeToFile("./data/sleeper/owners/glaDynasty.json", data);
// });

// sleeperAPI.getOwners(ddbURL).then((data) => {
//   writeToFile("./data/sleeper/owners/dirtyDroAndBoys.json", data);
// });

// Get rosters from all teams in all leagues

sleeperAPI.getRosters(holURL).then((data) => {
  writeToFile("./data/sleeper/players/houseOfLambdaRosters.json", data);
});

sleeperAPI.getRosters(glaURL).then((data) => {
  writeToFile("./data/sleeper/players/glaDynastyRosters.json", data);
});

sleeperAPI.getRosters(ddbURL).then((data) => {
  writeToFile("./data/sleeper/players/dirtyDroAndBoysRosters.json", data);
});
