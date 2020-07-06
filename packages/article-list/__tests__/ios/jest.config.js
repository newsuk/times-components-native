const jestConfigurator = require("@times-components-native/jest-configurator");

module.exports = jestConfigurator("ios", __dirname, {
  coverageIgnoreGlobs: ["article-list-prop-types.js", "**/**/utils/index.js"]
});
