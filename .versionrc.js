const defaultStandardVersion = require("@dnb-org/standard-version-config");

const localStandardVersion = {
  scripts: {
    prerelease: "./bin/release-hook-prerelease.sh",
  },
  bumpFiles: [
    ...defaultStandardVersion.bumpFiles,
    { filename: "data/dnb/giscus/version.json", type: "json" },
  ],
};

module.exports = {
  ...defaultStandardVersion,
  ...localStandardVersion,
};
