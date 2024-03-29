import fs from "fs";

function writeToFile(fileName, data) {
  let jsonString = JSON.stringify(data, null, " ");

  fs.writeFile(fileName, jsonString, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File was written successfully!");
    }
  });
}

export default writeToFile;
