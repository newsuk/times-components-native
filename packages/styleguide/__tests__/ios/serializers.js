const {
  addSerializers,
  minimalNative
} = require("@tcn/jest-serializer");

addSerializers(expect, minimalNative);
