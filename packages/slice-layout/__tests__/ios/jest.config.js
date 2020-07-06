const jestConfigurator = require("@times-components-native/jest-configurator");

module.exports = jestConfigurator("ios", __dirname, {
  coverageIgnoreGlobs: ["slice-layout.js"]
});
