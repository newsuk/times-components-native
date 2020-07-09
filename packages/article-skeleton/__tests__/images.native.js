/* eslint-disable global-require */
import {
  addSerializers,
  compose,
  print,
  minimaliseTransform,
  minimalNativeTransform
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

const omitKeys = new Set([
  "data",
  "disableVirtualization",
  "horizontal",
  "onViewableItemsChanged",
  "selectable",
  "style",
  "testID",
  "viewabilityConfig",
  "viewabilityConfigCallbackPairs"
]);

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalNativeTransform,
      minimaliseTransform((value, key) => omitKeys.has(key))
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
