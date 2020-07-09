const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("ios", __dirname, {
  coverageIgnoreGlobs: ["article-list-prop-types.js", "**/**/utils/index.js"]
});
