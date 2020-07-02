/* eslint-disable global-require */
const mockTpa = require("@times-components-native/mock-tpa-server");

module.exports = on => {
  on("task", {
    startMockServerWith(mockData) {
      return mockTpa.startWithMockData(mockData);
    },
    stopMockServer() {
      return mockTpa.stop();
    },
    failed: require("cypress-failed-log/src/failed")()
  });
};
