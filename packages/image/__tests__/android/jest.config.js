const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["index.js", "utils.js"]
});
