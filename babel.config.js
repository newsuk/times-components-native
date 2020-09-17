module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      "@babel/plugin-transform-react-display-name",
      "@babel/plugin-transform-runtime",
      "@babel/plugin-proposal-export-default-from",
      "import-graphql",
      [
        "module-resolver",
        {
          extensions: [
            ".ios.ts",
            ".android.ts",
            ".ts",
            ".ios.tsx",
            ".android.tsx",
            ".tsx",
            ".jsx",
            ".js",
            ".json",
          ],
          alias: {
            "@times-components-native": "./packages",
          },
        },
      ],
    ],
  };
};
