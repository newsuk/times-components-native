const jestConfigurator = require("@times-components-native/jest-configurator").default;
const path = require("path");

module.exports = jestConfigurator("web", __dirname, {
  setupFilesAfterEnv: path.join(__dirname, "./serializers")
});
