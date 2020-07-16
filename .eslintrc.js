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
    // "prettier/@typescript-eslint",
    // "plugin:prettier/recommended" // Must remain last
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
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/no-unused-vars": ["warn", { "ignoreRestSiblings": true }],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    // Temporarily disabled rules
    // "react-hooks/exhaustive-deps": "warn",
    "react-hooks/exhaustive-deps": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/prop-types": "off",
    "no-undef": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-this-alias": "off"
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
