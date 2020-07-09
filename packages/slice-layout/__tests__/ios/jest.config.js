const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("ios", __dirname, {
  coverageIgnoreGlobs: ["slice-layout.js"]
});
