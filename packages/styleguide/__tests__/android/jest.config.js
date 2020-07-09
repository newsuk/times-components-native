const jestConfigurator = require("@tcn/jest-configurator");
const path = require("path");

module.exports = jestConfigurator("android", __dirname, {
  setupFilesAfterEnv: path.join(__dirname, "./serializers")
});
