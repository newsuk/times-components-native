const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator(null, __dirname, [
  "decorators.js",
  "storybook.js"
]);
