module.exports = {
  extends: ["@tcn/thetimes"],
  rules: {
    "graphql/template-strings": [
      "error",
      {
        env: "apollo",
        schemaJson: require("@tcn/schema/schema.json")
      }
    ]
  },
  plugins: ["graphql"]
};
