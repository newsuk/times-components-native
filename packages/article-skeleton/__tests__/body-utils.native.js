/* eslint-disable global-require */
import { FontStorage } from "@times-components-native/typeset";
import { collapsed, getStringBounds, setupAd } from "../src/body-utils";

FontStorage.registerFont(
  "TimesDigitalW04",
  () => require("@times-components-native/test-utils").TestFont,
);

const createParagraph = (textValue) => ({
  name: "paragraph",
  children: [{ name: "text", attributes: { value: textValue }, children: [] }],
});

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
    createParagraph("a"),
    createParagraph("b"),
    createParagraph("c"),
    createParagraph("d"),
    createParagraph("e"),
    { name: "ad", children: [] },
    createParagraph("f"),
  ];

  it("collapsed should return content untouched if not tablet", () => {
    expect(collapsed(false, content)).toEqual(content);
  });

  it("collapsed should remove an inline image if it is the first item in content", () => {
    const contentWithFirstInlineImage = [
      { name: "image", attributes: { display: "inline" }, children: [] },
      ...content,
    ];

    expect(collapsed(true, contentWithFirstInlineImage)).toEqual(content);
  });

  it("collapsed should not remove an inline image if it is the not first item in content", () => {
    const contentWithSomeInlineImage = [
      ...content,
      { name: "image", attributes: { display: "inline" }, children: [] },
      { name: "paragraph", children: [] },
    ];

    const collapsedContentWithSomeInlineImage = [
      ...content,
      {
        name: "paragraph",
        children: [
          {
            attributes: {
              display: "inline",
            },
            children: [],
            name: "image",
          },
          {
            children: [],
            name: "break",
          },
          {
            children: [],
            name: "break",
          },
        ],
      },
    ];

    expect(collapsed(true, contentWithSomeInlineImage)).toEqual(
      collapsedContentWithSomeInlineImage,
    );
  });

  const skeletonProps = {
    data: { content, template: "mainstandard" },
    isTablet: true,
    narrowContent: false,
  };

  it("setupAd should return content untouched if not tablet", () => {
    expect(setupAd({ ...skeletonProps, isTablet: false }, undefined)).toEqual(
      content,
    );
  });

  it("setupAd should return content untouched if no variants specified", () => {
    expect(setupAd(skeletonProps, undefined)).toEqual(content);
  });

  it("setupAd should return content untouched if no variant tests specified", () => {
    expect(setupAd(skeletonProps, {})).toEqual(content);
  });

  it("setupAd should return content untouched if no ad block present in content", () => {
    const contentWithoutAd = content.filter((item) => item.name !== "ad");
    expect(
      setupAd(
        {
          ...skeletonProps,
          data: { ...skeletonProps.data, content: contentWithoutAd },
        },
        { someVariantTest: "B" },
      ),
    ).toEqual(contentWithoutAd);
  });

  it("setupAd should remove empty paragraphs", () => {
    const contentWithoutAd = content.filter((item) => item.name !== "ad");
    expect(
      setupAd(
        {
          ...skeletonProps,
          data: {
            ...skeletonProps.data,
            content: [{ name: "paragraph", children: [] }, ...contentWithoutAd],
          },
        },
        { someVariantTest: "B" },
      ),
    ).toEqual(contentWithoutAd);
  });

  describe("Article MPU Test", () => {
    it("setupAd should remove ad if tablet and template is not mainstandard", () => {
      const contentWithoutAd = content.filter((item) => item.name !== "ad");
      expect(
        setupAd(
          {
            ...skeletonProps,
            data: { ...skeletonProps.data, template: "maincomment" },
          },
          { articleMpu: { group: "B" } },
        ),
      ).toEqual(contentWithoutAd);
    });

    it("setupAd should not remove ad if not tablet and template is not mainstandard", () => {
      expect(
        setupAd(
          {
            ...skeletonProps,
            isTablet: false,
            data: { ...skeletonProps.data, template: "maincomment" },
          },
          { articleMpu: { group: "B" } },
        ),
      ).toEqual(content);
    });

    it("setupAd should return content untouched if articleMpu not specified", () => {
      expect(
        setupAd(skeletonProps, { notTheTestYouAreLookingFor: "B" }),
      ).toEqual(content);
    });

    it("setupAd should return content with the slotName overriden if articleMpu group is control group A", () => {
      expect(
        setupAd(skeletonProps, {
          articleMpu: { group: "A", slotName: "native-inline-ad-a" },
        }),
      ).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        createParagraph("e"),
        {
          name: "ad",
          attributes: {
            slotName: "native-inline-ad-a",
          },
          children: [],
        },
        createParagraph("f"),
      ]);
    });

    it("setupAd should return content with the inline mpu ad present and attributes overriden", () => {
      const longContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        createParagraph("e"),
        { name: "ad", children: [] },
        createParagraph("f"),
        createParagraph("g"),
        createParagraph("h"),
        createParagraph("i"),
        createParagraph("j"),
        createParagraph("k"),
        createParagraph("l"),
        createParagraph("m"),
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: longContent },
      };

      expect(
        setupAd(newSkeletonProps, {
          articleMpu: {
            group: "C",
            adPosition: 5,
            width: 300,
            height: 600,
            slotName: "native-inline-ad-c",
          },
        }),
      ).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 600,
            slotName: "native-inline-ad-c",
            inlineContent: [
              createParagraph("e"),
              createParagraph("f"),
              createParagraph("g"),
              createParagraph("h"),
              createParagraph("i"),
              createParagraph("j"),
              createParagraph("k"),
            ],
            skeletonProps: newSkeletonProps,
          },
          children: [],
        },
        createParagraph("l"),
        createParagraph("m"),
      ]);
    });

    it("setupAd should return content with the inline mpu ad present but split content on non-paragraph", () => {
      const longContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        createParagraph("e"),
        { name: "ad", children: [] },
        createParagraph("f"),
        { name: "image", children: [] },
        createParagraph("g"),
        createParagraph("h"),
        createParagraph("i"),
        createParagraph("j"),
        createParagraph("k"),
        createParagraph("l"),
        createParagraph("m"),
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: longContent },
      };

      expect(
        setupAd(newSkeletonProps, {
          articleMpu: {
            group: "C",
            adPosition: 5,
            width: 300,
            height: 600,
            slotName: "native-inline-ad-c",
          },
        }),
      ).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 600,
            slotName: "native-inline-ad-c",
            inlineContent: [createParagraph("e"), createParagraph("f")],
            skeletonProps: newSkeletonProps,
          },
          children: [],
        },
        { name: "image", children: [] },
        createParagraph("g"),
        createParagraph("h"),
        createParagraph("i"),
        createParagraph("j"),
        createParagraph("k"),
        createParagraph("l"),
        createParagraph("m"),
      ]);
    });
  });
};
