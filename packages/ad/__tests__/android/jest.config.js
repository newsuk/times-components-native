const jestConfigurator = require("@times-components-native/jest-configurator");

module.exports = jestConfigurator("android", __dirname, {
  coverageIgnoreGlobs: ["**/webview-event-callback-setup.js"]
});
