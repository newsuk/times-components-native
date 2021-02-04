/* eslint-disable global-require */
import { setupAd } from "../../src/body-utils/setupAd";

const createParagraph = (textValue) => ({
  name: "paragraph",
  children: [{ name: "text", attributes: { value: textValue }, children: [] }],
});

export default () => {
  const content = [
    createParagraph("a"),
    createParagraph("b"),
    createParagraph("c"),
    createParagraph("d"),
    createParagraph("e"),
    { name: "ad", children: [] },
    createParagraph("f"),
  ];

  const skeletonProps = {
    data: { content, template: "mainstandard" },
    isTablet: true,
    narrowContent: false,
  };

  describe("setupAd", () => {
    it("should return content untouched if not tablet", () => {
      expect(setupAd({ ...skeletonProps, isTablet: false })).toEqual(content);
    });

    it("should return content untouched if no ad block present in content", () => {
      const contentWithoutAd = content.filter((item) => item.name !== "ad");
      expect(
        setupAd({
          ...skeletonProps,
          data: { ...skeletonProps.data, content: contentWithoutAd },
        }),
      ).toEqual(contentWithoutAd);
    });

    it("should remove empty paragraphs", () => {
      const contentWithoutAd = content.filter((item) => item.name !== "ad");
      expect(
        setupAd({
          ...skeletonProps,
          data: {
            ...skeletonProps.data,
            content: [{ name: "paragraph", children: [] }, ...contentWithoutAd],
          },
        }),
      ).toEqual(contentWithoutAd);
    });

    it("should remove ad if tablet and template is not supported template", () => {
      const contentWithoutAd = content.filter((item) => item.name !== "ad");
      expect(
        setupAd({
          ...skeletonProps,
          data: { ...skeletonProps.data, template: "maincomment" },
        }),
      ).toEqual(contentWithoutAd);
    });

    it("should not remove ad if not tablet and template is not mainstandard", () => {
      expect(
        setupAd({
          ...skeletonProps,
          isTablet: false,
          data: { ...skeletonProps.data, template: "maincomment" },
        }),
      ).toEqual(content);
    });
  });

  describe("setupArticleMpuAd", () => {
    it("should return content with ad removed if less than 6 paragraphs", () => {
      const shortContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        createParagraph("e"),
        { name: "ad", children: [] },
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: shortContent },
      };

      expect(setupAd(newSkeletonProps)).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        createParagraph("e"),
      ]);
    });

    it("should return content with a leaderboard/billboard if non paragraph precedes and follows 5th paragraph", () => {
      const crowdedContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        { name: "image", children: [] },
        createParagraph("e"),
        { name: "ad", children: [] },
        { name: "image", children: [] },
        createParagraph("f"),
        createParagraph("g"),
        createParagraph("h"),
        createParagraph("i"),
        createParagraph("j"),
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: crowdedContent },
      };

      expect(setupAd(newSkeletonProps)).toEqual(crowdedContent);
    });

    it("should return content with the inline single mpu ad present when between 6 and 7 paragraphs", () => {
      const longContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        { name: "ad", children: [] },
        createParagraph("e"),
        createParagraph("f"),
        createParagraph("g"),
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: longContent },
      };

      expect(setupAd(newSkeletonProps)).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 250,
            slotName: "native-single-mpu",
            inlineContent: [
              createParagraph("e"),
              createParagraph("f"),
              createParagraph("g"),
            ],
            originalName: "ad",
            skeletonProps: newSkeletonProps,
          },
          children: [],
        },
      ]);
    });

    it("should return content with the inline single mpu ad present when 8 or more paragraphs and non-paragraph content within threshold", () => {
      const longContent = [
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        { name: "image", children: [] },
        createParagraph("d"),
        { name: "ad", children: [] },
        createParagraph("e"),
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

      expect(setupAd(newSkeletonProps)).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        { name: "image", children: [] },
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 250,
            slotName: "native-single-mpu",
            inlineContent: [
              createParagraph("e"),
              createParagraph("f"),
              createParagraph("g"),
              createParagraph("h"),
              createParagraph("i"),
              createParagraph("j"),
              createParagraph("k"),
            ],
            originalName: "ad",
            skeletonProps: newSkeletonProps,
          },
          children: [],
        },
        createParagraph("l"),
        createParagraph("m"),
      ]);
    });

    it("should return content with an inline double mpu ad present and attributes overriden when more than 8 and no non-paragraph content within threshold", () => {
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
        { name: "image", children: [] },
        createParagraph("m"),
      ];

      const newSkeletonProps = {
        ...skeletonProps,
        data: { ...skeletonProps.data, content: longContent },
      };

      expect(setupAd(newSkeletonProps)).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 600,
            slotName: "native-double-mpu",
            inlineContent: [
              createParagraph("e"),
              createParagraph("f"),
              createParagraph("g"),
              createParagraph("h"),
              createParagraph("i"),
              createParagraph("j"),
              createParagraph("k"),
            ],
            originalName: "ad",
            skeletonProps: newSkeletonProps,
          },
          children: [],
        },
        createParagraph("l"),
        { name: "image", children: [] },
        createParagraph("m"),
      ]);
    });

    it("should return content with the inline ad present but split content on non-paragraph", () => {
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

      expect(setupAd(newSkeletonProps)).toEqual([
        createParagraph("a"),
        createParagraph("b"),
        createParagraph("c"),
        createParagraph("d"),
        {
          name: "inlineContent",
          attributes: {
            width: 300,
            height: 250,
            slotName: "native-single-mpu",
            inlineContent: [createParagraph("e"), createParagraph("f")],
            originalName: "ad",
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
