/* eslint-disable global-require */
import { FontStorage } from "@times-components-native/typeset";
import { getStringBounds, setAdPosition } from "../src/body-utils";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@times-components-native/test-utils").TestFont
);

export default () => {
  it("should return a bounding box", () => {
    const fontSettings = {
      fontFamily: "TimesDigitalW04",
      fontStyle: "",
      fontWeight: "",
      fontSize: 90,
      color: "black"
    };
    expect(getStringBounds(fontSettings, '"A')).toMatchSnapshot();
  });

  const content = [
    { name: "paragraph", children: [] },
    { name: "paragraph", children: [] },
    { name: "paragraph", children: [] },
    { name: "paragraph", children: [] },
    { name: "paragraph", children: [] },
    { name: "ad", children: [] },
    { name: "paragraph", children: [] }
  ];

  it("setAdPosition should return content untouched if no adPosition specified", () => {
    expect(setAdPosition(undefined, content)).toEqual(content);
  });

  it("setAdPosition should return content untouched if adPosition is not an integer", () => {
    expect(setAdPosition("wibble", content)).toEqual(content);
    expect(setAdPosition(6.1, content)).toEqual(content);
  });

  it("setAdPosition should return content untouched if adPosition is same as received from TPA", () => {
    expect(setAdPosition(6, content)).toEqual(content);
  });

  it("setAdPosition should return content untouched if no ad block present in content", () => {
    const contentWithoutAd = content.filter(item => item.name !== "ad");
    expect(setAdPosition(6, contentWithoutAd)).toEqual(contentWithoutAd);
  });

  it("setAdPosition should return content with the ad moved to the provided adPosition", () => {
    expect(setAdPosition(2, content)).toEqual([
      { name: "paragraph", children: [] },
      { name: "ad", children: [] },
      { name: "paragraph", children: [] },
      { name: "paragraph", children: [] },
      { name: "paragraph", children: [] },
      { name: "paragraph", children: [] },
      { name: "paragraph", children: [] }
    ]);
  });
};
