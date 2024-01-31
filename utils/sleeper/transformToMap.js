import writeToFile from "../writeToFile.js";
import holOwners from "../../data/sleeper/owners/houseOfLambda.json" assert { type: "json" };
import glaOwners from "../../data/sleeper/owners/glaDynasty.json" assert { type: "json" };
import ddBOwners from "../../data/sleeper/owners/dirtyDroAndBoys.json" assert { type: "json" };

let dataArray = [];

function transformToMap(list) {
  let object = new Map();

  list.forEach((owner) => {
    let data = {
      ...owner,
    };
    object.set(owner.user_id, data);
  });
  let obj = Object.fromEntries(object);

  return obj;
}

// let data = transformToMap(holOwners);
// writeToFile(
//   "../../data/sleeper/transformedOwners/houseOfLambdaObject.json",
//   data
// );

// let data = transformToMap(glaOwners);
// writeToFile("../../data/sleeper/transformedOwners/glaDynastyObject.json", data);

let data = transformToMap(ddBOwners);
writeToFile(
  "../../data/sleeper/transformedOwners/dirtyDroAndBoysObject.json",
  data
);
