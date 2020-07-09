const {
  addSerializers,
  flattenStyle
} = require("@tcn/jest-serializer");

addSerializers(expect, flattenStyle);
