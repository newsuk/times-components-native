module.exports = {
  haste: {
    defaultPlatform: 'ios',
    platforms: ['ios'],
    providesModuleNodeModules: ['react-native']
  },
  preset: 'react-native',
  setupFiles: [
    './setup-jest.js',
    'jest-plugin-context/setup'
  ],
  setupFilesAfterEnv: [],
  rootDir: '../',
  testMatch: ['**/__tests__/ios/*.test.js'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': '<rootDir>/node_modules/react-native/jest/assetFileTransformer.js',
    '\\.(gql|graphql)$': 'jest-transform-graphql',
    '^.+\\.graphql': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!(react-native|react-native-svg|react-native-webview|react-native-autoheight-webview|react-native-iphone-x-helper|@storybook/react-native|react-native-swipe-gestures|react-native-device-info)/)']
}

