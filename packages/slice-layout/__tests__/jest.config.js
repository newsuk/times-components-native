const jestConfigurator = require("@times-components-native/jest-configurator");

module.exports = jestConfigurator(null, __dirname, {
  coverageIgnoreGlobs: ["templates", "slice-layout.js"]
});
