import "dotenv/config";
import writeToFile from "./utils/writeToFile.js";
import sleeperAPI from "./utils/API/sleeperAPI.js";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb2v0vJwVyatiq_SHeKn8fjpmjKQjQ7RE",
  authDomain: "fantasy-football-app-cc2a9.firebaseapp.com",
  databaseURL: "https://fantasy-football-app-cc2a9-default-rtdb.firebaseio.com",
  projectId: "fantasy-football-app-cc2a9",
  storageBucket: "fantasy-football-app-cc2a9.appspot.com",
  messagingSenderId: "192666505782",
  appId: "1:192666505782:web:70b36c1afc1d9ba506fe97",
  measurementId: "G-T5BWJ1M20P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Code for Sleeper data
const BASE_URI = "https://api.sleeper.app/v1/league/";
const houseOfLambdaId = process.env.API_HOL;
const glaDynastyId = process.env.API_GLA;
const dirtyDroAndTheBoysId = process.env.API_DDB;
const holURL = `${BASE_URI}${houseOfLambdaId}`;
const glaURL = `${BASE_URI}${glaDynastyId}`;
const ddbURL = `${BASE_URI}${dirtyDroAndTheBoysId}`;
const allPlayersURL = "https://api.sleeper.app/v1/players/nfl";

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
