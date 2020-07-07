const jestConfigurator = require("@times-components-native/jest-configurator");

module.exports = jestConfigurator("common", __dirname, {
  coverageIgnoreGlobs: ["media-aspect-ratio.js"]
});
