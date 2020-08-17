module.exports = {
  preset: "react-native",
  setupFiles: [
    "<rootDir>/test-setup/setup-jest.js",
    "jest-plugin-context/setup",
  ],
  setupFilesAfterEnv: [],
  rootDir: "../",
  testMatch: ["**/__tests__/**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["android/", "ios/"],
  testURL: "http://localhost",
  transform: {
    "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$":
      "<rootDir>/node_modules/react-native/jest/assetFileTransformer.js",
    "\\.(gql|graphql)$": "jest-transform-graphql",
    "^.+\\.graphql": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react-native|react-native-svg|react-native-webview|react-native-autoheight-webview|@react-native-community/art|@storybook/react-native|react-native-swipe-gestures|react-native-device-info)/)",
  ],
};
