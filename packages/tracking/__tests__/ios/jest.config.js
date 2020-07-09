const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("ios", __dirname, {
  coverageIgnoreGlobs: ["tracking-context-types.js", "tracking.js"]
});
