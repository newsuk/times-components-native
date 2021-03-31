import { sizeMap } from "@times-components-native/ad/src/utils/generate-config";

const setupArticleMpuAd = (
  currentAdSlotIndex,
  contentWithoutAdSlot,
  skeletonProps,
) => {
  const adPosition = 5;
  const showMPUThreshold = 6;
  const singleMPUThreshold = 8;
  const doubleMPUThreshold = 10;

  const {
    data: { template },
  } = skeletonProps;

  const isCommentTemplate = /comment/.test(template);

  // Get index of nth (adPosition) paragraph
  let nthParagraphIndex = currentAdSlotIndex;
  let hasNonParagraphContentBeforeThreshold = false;
  let lastParagraphIndex;

  const numberOfParagraphs = contentWithoutAdSlot.reduce(
    (count, item, index) => {
      if (item.name !== "paragraph") {
        if (index < doubleMPUThreshold)
          hasNonParagraphContentBeforeThreshold = true;
        return count;
      }
      if (count === adPosition) {
        nthParagraphIndex = lastParagraphIndex;
      }
      lastParagraphIndex = index;
      return count + 1;
    },
    0,
  );

  if (numberOfParagraphs < showMPUThreshold) return contentWithoutAdSlot;

  const adSlotIndex = nthParagraphIndex;

  if (
    contentWithoutAdSlot[nthParagraphIndex - 1]?.name !== "paragraph" &&
    contentWithoutAdSlot[nthParagraphIndex + 1]?.name !== "paragraph"
  ) {
    return [
      ...contentWithoutAdSlot.slice(0, adSlotIndex + 1),
      {
        name: "ad",
        attributes: {
          slotName: isCommentTemplate
            ? "native-single-mpu"
            : "native-leaderboard",
        },
        children: [],
      },
      ...contentWithoutAdSlot.slice(adSlotIndex + 1),
    ];
  }

  const slotName =
    numberOfParagraphs < singleMPUThreshold ||
    hasNonParagraphContentBeforeThreshold
      ? "native-single-mpu"
      : "native-double-mpu";

  const { height, width } = sizeMap[slotName][0];

  const contentBeforeAd = contentWithoutAdSlot.slice(0, adSlotIndex);

  const numberOfCandidateParagraphsToInline = 7;

  let inlineContentEndIndex = adSlotIndex + numberOfCandidateParagraphsToInline;

  let inlineContent = contentWithoutAdSlot.slice(
    adSlotIndex,
    inlineContentEndIndex,
  );

  const nonParagraphIndex = inlineContent.findIndex(
    (item) => item.name !== "paragraph",
  );

  if (nonParagraphIndex !== -1) {
    inlineContentEndIndex = adSlotIndex + nonParagraphIndex;
    inlineContent = contentWithoutAdSlot.slice(
      adSlotIndex,
      inlineContentEndIndex,
    );
  }

  const contentAfterInlineAd = contentWithoutAdSlot.slice(
    inlineContentEndIndex,
  );

  return [
    ...contentBeforeAd,
    {
      name: "inlineContent",
      attributes: {
        height,
        inlineContent,
        originalName: "ad",
        skeletonProps,
        slotName,
        width,
      },
      children: [],
    },
    ...contentAfterInlineAd,
  ];
};

const templatesWithAds = [
  "mainstandard",
  "maincomment",
  "indepth",
  "magazinestandard",
  "magazinecomment",
];

export const setupAd = (skeletonProps) => {
  const {
    isArticleTablet,
    data: { content, template },
  } = skeletonProps;
  if (!isArticleTablet) return content;

  let currentAdSlotIndex;

  // Remove empty paragraphs
  const cleanedContent = content.filter(
    (item) => !(item.name === "paragraph" && !item.children.length),
  );

  const contentWithoutAdSlot = cleanedContent.filter((item, index) => {
    const isItemAd = item.name === "ad";
    if (isItemAd) currentAdSlotIndex = index;
    return !isItemAd;
  });

  if (!currentAdSlotIndex) return cleanedContent;

  // If tablet, only show on mainstandard/indepth/magazinestandard template
  if (isArticleTablet && !templatesWithAds.includes(template))
    return contentWithoutAdSlot;

  return setupArticleMpuAd(
    currentAdSlotIndex,
    contentWithoutAdSlot,
    skeletonProps,
  );
};
