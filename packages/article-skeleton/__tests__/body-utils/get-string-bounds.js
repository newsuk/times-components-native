/* eslint-disable global-require */
import { FontStorage } from "@times-components-native/typeset";
import { getStringBounds } from "../../src/body-utils/getStringBounds";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@times-components-native/test-utils").TestFont,
);

export default () => {
  it("should return a bounding box", () => {
    console.log(
      "QWYERWUERWERWERQYWERQWYERWQYRYUQWYYWRYWRYTRYQWRTQTRUWTRYUQTRTWYTQWTWYQTUQ",
    );
    const fontSettings = {
      fontFamily: "TimesDigitalW04",
      fontStyle: "",
      fontWeight: "",
      fontSize: 90,
      color: "black",
    };
    expect(getStringBounds(fontSettings, '"A')).toMatchSnapshot();
  });
};
