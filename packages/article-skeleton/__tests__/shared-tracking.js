/* eslint-disable global-require */
import "./mocks.native";

import { FontStorage } from "@tcn/typeset";
import shared from "./shared-tracking.base";

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

export default shared;
