const defaultStandardVersion = require("@davidsneighbour/config/standard-version");

const localStandardVersion = {
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/giscus/build.json", type: "json" },
  ],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
