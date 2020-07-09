const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["article-list-prop-types.js", "**/**/utils/index.js"]
});
