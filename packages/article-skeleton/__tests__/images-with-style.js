/* eslint-disable global-require */
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  print,
} from "@times-components-native/jest-serializer";
import "./mocks";
import { FontStorage } from "@times-components-native/typeset";
import shared from "./images.base";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@times-components-native/test-utils").TestFont,
);
FontStorage.registerFont(
  "TimesDigitalW04-Bold",
  () => require("@times-components-native/test-utils").TestFont,
);
FontStorage.registerFont(
  "TimesDigitalW04-Italic",
  () => require("@times-components-native/test-utils").TestFont,
);
FontStorage.registerFont(
  "TimesModern-Regular",
  () => require("@times-components-native/test-utils").TestFont,
);

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimaliseTransform((value, key) => key !== "style"),
    ),
  );

  const realIntl = Intl;

  beforeEach(() => {
    global.Intl = {
      DateTimeFormat: () => ({
        resolvedOptions: () => ({ timeZone: "Europe/London" }),
      }),
    };
  });

  afterEach(() => {
    global.Intl = realIntl;
  });

  shared();
};
