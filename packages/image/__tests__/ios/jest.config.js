const jestConfigurator = require("@times-components-native/jest-configurator").default;

module.exports = jestConfigurator("ios", __dirname, {
  coverageIgnoreGlobs: ["utils.js"]
});
