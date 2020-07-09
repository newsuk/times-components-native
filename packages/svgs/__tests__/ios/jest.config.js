const jestConfigurator = require("@tcn/jest-configurator");
const path = require("path");

module.exports = jestConfigurator("ios", __dirname, {
  setupFilesAfterEnv: path.join(__dirname, "../serializers.native")
});
