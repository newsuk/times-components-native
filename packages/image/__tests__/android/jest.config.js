const jestConfigurator = require("@times-components-native/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["index.js", "utils.js"]
});
