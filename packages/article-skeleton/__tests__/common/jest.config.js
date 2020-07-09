const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("common", __dirname, {
  coverageIgnoreGlobs: ["media-aspect-ratio.js"]
});
