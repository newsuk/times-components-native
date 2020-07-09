const jestConfigurator = require("@tcn/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["**/webview-event-callback-setup.js"]
});
