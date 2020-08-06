/* eslint-disable global-require */
import { FontStorage } from "@times-components-native/typeset";
import { getStringBounds, setupAd } from "../src/body-utils";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@times-components-native/test-utils").TestFont,
);

export default () => {
  it("should return a bounding box", () => {
    const fontSettings = {
      fontFamily: "TimesDigitalW04",
      fontStyle: "",
      fontWeight: "",
      fontSize: 90,
      color: "black",
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
    { name: "paragraph", children: [] },
  ];

  it("setupAd should return content untouched if no variants specified", () => {
    expect(setupAd(undefined, "mainstandard", content)).toEqual(content);
  });

  it("setupAd should return content untouched if no variant tests specified", () => {
    expect(setupAd({}, "mainstandard", content)).toEqual(content);
  });

  it("setupAd should return content untouched if no ad block present in content", () => {
    const contentWithoutAd = content.filter((item) => item.name !== "ad");
    expect(
      setupAd({ someVariantTest: "B" }, "mainstandard", contentWithoutAd),
    ).toEqual(contentWithoutAd);
  });

  describe("Article MPU Test", () => {
    it("setupAd should return content untouched if articleMpu not specified", () => {
      expect(
        setupAd({ notTheTestYouAreLookingFor: "B" }, "mainstandard", content),
      ).toEqual(content);
    });

    it("setupAd should return content untouched if articleMpu group is control group A", () => {
      expect(
        setupAd({ articleMpu: { group: "A" } }, "mainstandard", content),
      ).toEqual(content);
    });

    it("setupAd should return content untouched if template is not mainstandard", () => {
      expect(
        setupAd({ articleMpu: { group: "B" } }, "maincomment", content),
      ).toEqual(content);
    });

    it("setupAd should return content untouched if template is not mainstandard", () => {
      expect(
        setupAd({ articleMpu: { group: "B" } }, "maincomment", content),
      ).toEqual(content);
    });

    it("setupAd should return content with the ad present and attributes overriden", () => {
      expect(
        setupAd(
          {
            articleMpu: {
              group: "C",
              adPosition: 5,
              width: 300,
              height: 600,
              slotName: "native-inline-ad-c",
            },
          },
          "mainstandard",
          content,
        ),
      ).toEqual([
        { name: "paragraph", children: [] },
        { name: "paragraph", children: [] },
        { name: "paragraph", children: [] },
        { name: "paragraph", children: [] },
        {
          name: "ad",
          attributes: {
            display: "inline",
            width: 300,
            height: 600,
            slotName: "native-inline-ad-c",
          },
          children: [],
        },
        { name: "paragraph", children: [] },
        { name: "paragraph", children: [] },
      ]);
    });
  });
};
