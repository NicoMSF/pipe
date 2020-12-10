const fs = require("fs");

const getData = function (inputPath, cb) {
  try {
    if (fs.existsSync(inputPath)) {
      fs.readFile(inputPath, "utf8", function (err, data) {
        if (err) throw err;
        //console.log("data", data);
        if (cb) {
          cb(data);
        }
      });
    } else {
      console.error("file doesn't exist", inputPath);
    }
  } catch (error) {
    console.error("there is no countryRegionData in Node_modules", error);
  }
};

const saveData = function (data, outputPath, cb) {
  fs.writeFile(
    outputPath, //`${writeToAssets}/countryData.json`,
    JSON.stringify(data, null, 2),
    function (err) {
      if (err) return console.log(err);
      if (cb) {
        cb();
      }
    }
  );
};

const Util = {
  getData: getData,
  saveData: saveData,
};

module.exports = Util;
