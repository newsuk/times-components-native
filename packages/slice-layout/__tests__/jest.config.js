const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator(null, __dirname, {
  coverageIgnoreGlobs: ["templates", "slice-layout.js"]
});
