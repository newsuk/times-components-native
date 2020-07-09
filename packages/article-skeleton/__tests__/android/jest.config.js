const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["media-aspect-ratio.js"]
});
