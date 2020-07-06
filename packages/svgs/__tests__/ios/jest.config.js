const jestConfigurator = require("@times-components-native/jest-configurator");
const path = require("path");

module.exports = jestConfigurator("ios", __dirname, {
  setupFilesAfterEnv: path.join(__dirname, "../serializers.native")
});
