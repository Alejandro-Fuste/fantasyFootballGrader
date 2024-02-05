import fs from "fs";

function appendToFile(fileName, data) {
  let jsonString = JSON.stringify(data, null, " ");

  fs.appendFile(fileName, jsonString, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("File was written successfully!");
    }
  });
}

export default appendToFile;
