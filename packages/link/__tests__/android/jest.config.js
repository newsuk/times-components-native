const jestConfigurator = require("@times-components-native/jest-configurator")
  .default;

module.exports = jestConfigurator("android", __dirname);
