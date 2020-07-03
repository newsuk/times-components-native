const jestPreset = require("babel-preset-jest");
const { transform : babelTransform } = require("@babel/core");
const babelIstanbulPlugin = require("babel-plugin-istanbul");
const { readFileSync } = require("fs");
const path = require("path");

const readSource = filename => readFileSync(filename).toString();

const isPackageFile = filename => filename.includes("@times-components");

const pointToSource = filename => filename.replace("dist", "src");

const transform = (
  src,
  targetFilename,
  { cwd, coveragePathIgnorePatterns }
) => {
  let source = src;
  let filename = targetFilename;

  if (isPackageFile(filename)) {
    filename = pointToSource(filename);
    source = readSource(filename);
  }

  const transformResult = babelTransform(source, {
    filename,
    plugins: [
      [
        babelIstanbulPlugin,
        {
          cwd: path.join(cwd, "src"),
          exclude: coveragePathIgnorePatterns
        }
      ]
    ],
    presets: [jestPreset]
  });

  return transformResult || source;
};

module.exports = { process: transform };
