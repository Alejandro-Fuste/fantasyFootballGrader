import leagues from "../sleeper/leagues/leagues.json" assert { type: "json" };
import draftOrder from "../sleeper/draftOrder/draftOrder.json" assert { type: "json" };
import writeToFile from "../../utils/writeToFile.js";

function compileLeagueDetails(data) {
  let details = [];

  details.push(data.total_rosters);

  if (data.settings.type === 2) {
    details.push("Dynasty");
  } else {
    details.push("Redraft");
  }

  if (data.scoring_settings.rec === 0.5) details.push(".5 PPR");

  if (data.roster_positions.includes("SUPER_FLEX")) details.push("Superflex");

  if (data.scoring_settings.bonus_rec_te === 0.5) details.push("TE Premium");

  return details;
}

function compileLeaguesData(array) {
  let data = [];

  array.forEach((league) => {
    let object = {};

    object.leagueInfo = league;
    object.details = compileLeagueDetails(league);
    object.draftOrder = draftOrder[league.name];
    object.rosters = [];

    data.push(object);
  });
  return data;
}

let data = compileLeaguesData(leagues);
writeToFile("./homeScreenData.json", data);
