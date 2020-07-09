const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("ios", __dirname, {
  coverageIgnoreGlobs: ["**/webview-event-callback-setup.js"]
});
