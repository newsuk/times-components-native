const jestConfigurator = require("@times-components-native/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["media-aspect-ratio.js"]
});
