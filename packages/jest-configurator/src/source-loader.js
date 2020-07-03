const babelJest = require('babel-jest');
const jestPreset = require("babel-preset-jest");
const { transform : babelTransform } = require("@babel/core");
const babelIstanbulPlugin = require("babel-plugin-istanbul");
const { readFileSync } = require("fs");
const { createHash } = require("crypto");
const path = require("path");

const readSource = filename => {
  console.log(filename)
  return readFileSync(filename).toString();
};

const isPackageFile = filename => filename.includes("@times-components");

const pointToSource = filename => filename.replace("dist", "src");

/* Based upon the babel-jest impl, but only
 * changes if raw source code has been updated.
 */
const getPackageCacheKey = filename =>
  createHash("md5")
    .update(readSource(pointToSource(filename)))
    .digest("hex");

const getCacheKey = (src, filename, config, cacheOptions) =>
  isPackageFile(filename)
    ? getPackageCacheKey(filename)
    : babelJest.getCacheKey(src, filename, config, cacheOptions);

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

module.exports = { getCacheKey, process: transform };
