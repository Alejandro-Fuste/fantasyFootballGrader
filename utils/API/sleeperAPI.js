// import "dotenv/config";
import { urlObject } from "./urls.js";

const { SLEEPER_BASE_URL, SLEEPER_USER_URL, SLEEPER_ALL_PLAYERS_URL } =
  urlObject;

const sleeperAPI = {
  getUserID: async (username) => {
    let url = SLEEPER_USER_URL + username;
    const response = await fetch(url);
    const results = await response.json();
    return results;
  },
  getLeagues: async (userID) => {
    let url = SLEEPER_USER_URL + userID + "/leagues/nfl/2023";
    console.log(url);
    const response = await fetch(url);
    const results = await response.json();
    return results;
  },
  getLeagueDetails: async (leagueID) => {
    let url = SLEEPER_BASE_URL + leagueID;
    const response = await fetch(url);
    const results = await response.json();
    return results;
  },
  getOwners: async (leagueID) => {
    const url = SLEEPER_BASE_URL + leagueID + "/users";
    const response = await fetch(url);
    const results = await response.json();
    return results;
  },
  getRosters: async (leagueID) => {
    const url = SLEEPER_BASE_URL + leagueID + "/rosters";
    const response = await fetch(url);
    const results = await response.json();
    return results;
  },
  getAllPlayers: async () => {
    const response = await fetch(SLEEPER_ALL_PLAYERS_URL);
    const results = await response.json();
    return results;
  },
};

export default sleeperAPI;
