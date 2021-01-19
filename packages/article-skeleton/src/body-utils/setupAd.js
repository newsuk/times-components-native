import { sizeMap } from "@times-components-native/ad/src/utils/generate-config";

const setupArticleMpuAd = (
  currentAdSlotIndex,
  contentWithoutAdSlot,
  skeletonProps,
) => {
  const adPosition = 5;
  const doubleMPUThreshold = 10;

  // Get index of nth (adPosition) paragraph
  let nthParagraphIndex = currentAdSlotIndex;

  let hasNonParagraphContentBeforeThreshold = false;

  contentWithoutAdSlot.reduce((count, item, index) => {
    if (item.name !== "paragraph") {
      if (index < doubleMPUThreshold)
        hasNonParagraphContentBeforeThreshold = true;
      return count;
    }
    if (count === adPosition) {
      nthParagraphIndex = index - 1;
    }
    return count + 1;
  }, 0);

  const adSlotIndex = nthParagraphIndex;

  const slotName = hasNonParagraphContentBeforeThreshold
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

export const setupAd = (skeletonProps) => {
  const {
    isTablet,
    data: { content, template },
  } = skeletonProps;
  if (!isTablet) return content;

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

  // If tablet, only show on mainstandard template
  if (isTablet && template !== "mainstandard") return contentWithoutAdSlot;

  return setupArticleMpuAd(
    currentAdSlotIndex,
    contentWithoutAdSlot,
    skeletonProps,
  );
};
