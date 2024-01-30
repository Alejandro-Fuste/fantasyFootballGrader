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
