/* eslint-disable global-require */
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  print
} from "@tcn/jest-serializer";
import "./mocks.native";
import { FontStorage } from "@tcn/typeset";
import shared from "./images.base";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@tcn/test-utils").TestFont
);
FontStorage.registerFont(
  "TimesDigitalW04-Bold",
  () => require("@tcn/test-utils").TestFont
);
FontStorage.registerFont(
  "TimesDigitalW04-Italic",
  () => require("@tcn/test-utils").TestFont
);
FontStorage.registerFont(
  "TimesModern-Regular",
  () => require("@tcn/test-utils").TestFont
);

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimaliseTransform((value, key) => key !== "style")
    )
  );

  const realIntl = Intl;

  beforeEach(() => {
    global.Intl = {
      DateTimeFormat: () => ({
        resolvedOptions: () => ({ timeZone: "Europe/London" })
      })
    };
  });

  afterEach(() => {
    global.Intl = realIntl;
  });

  shared();
};
