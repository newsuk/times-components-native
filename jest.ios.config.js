// const jestConfigurator = require("./packages/jest-configurator");
//
// console.log(jestConfigurator("ios", __dirname))
module.exports = {
  haste: {
    defaultPlatform: 'ios',
    platforms: ['ios'],
    providesModuleNodeModules: ['react-native']
  },
  // collectCoverageFrom: ['/Users/chrisjordan/Users/chrisjordan/Work/TNL/times-components-native'],
  coverageDirectory: 'coverage/ios/',
  // coveragePathIgnorePatterns: [],
  // modulePathIgnorePatterns: ['node_modules/redbox-react/node_modules/react/', 'node_modules/@storybook/'],
  preset: 'react-native',
  setupFiles: [
    './packages/jest-configurator/setup-jest.js',
    'jest-plugin-context/setup'
  ],
  setupFilesAfterEnv: [],
  testMatch: ['**/__tests__/ios/*.test.js'],
  // testPathIgnorePatterns: ['/Users/chrisjordan/Work/TNL/times-components-native/__tests__/ios/jest.config.js'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js',
    // '^.+\\.js$': './packages/jest-configurator/src/source-loader.js',
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.graphql': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(react-native|react-native-svg|react-native-webview|react-native-autoheight-webview|react-native-iphone-x-helper|@storybook/react-native|react-native-swipe-gestures|react-native-device-info)/)']
}

