const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["tracking-context-types.js", "tracking.js"]
});
