const schemaJson = require("./packages/schema/schema.json");

module.exports = {
  "env": {
    "es6": true,
    "node": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "graphql",
    "import",
    "jsx-a11y",
    "react",
    "react-native"
  ],
  "rules": {
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/mock-*/**",
          "**/__tests__/**",
          "**/*.test.*",
          "**/fixtures/**",
          "**/*.stories*",
          "**/*.showcase*",
          "**/showcase-helper*",
          "**/scripts/**",
          "**/storybook/**",
          "webpack.config*.js"
        ],
        "optionalDependencies": false
      }
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        "components": ["Link"],
        "specialLink": ["url"],
        "aspects": ["noHref", "invalidHref", "preferButton"]
      }
    ],
    "no-restricted-properties": [
      2,
      {
        "object": "React",
        "property": "Component",
        "message": "Please destruct Component from React."
      },
      {
        "object": "React",
        "property": "PureComponent",
        "message": "Please destruct PureComponent from React."
      }
    ],
    "graphql/template-strings": [
      "error",
      {
        "env": "apollo",
        "schemaJson": schemaJson
      }
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "@typescript-eslint/no-var-requires": "off"
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".android.js", ".ios.js"]
      }
    },
    "react": {
      "version": "detect"
    }
  },
  "root": true
};
