/* eslint-disable no-plusplus */
import memoize from "memoize-one";
import { FontStorage } from "@times-components-native/typeset";

export const setupInlineContent = (
  skeletonProps,
  unprocessedContent,
  processedContent = [],
) => {
  const { isTablet } = skeletonProps;
  if (!isTablet) return unprocessedContent;

  const numberOfCandidateParagraphsToInline = 7;

  // Find something that needs inlining
  const inlineItemIndex = unprocessedContent.findIndex(
    (item) =>
      (item.name === "image" && item.attributes?.display === "inline") ||
      item.name === "pullQuote",
  );

  // We got nothing so return
  if (inlineItemIndex === -1)
    return [...processedContent, ...unprocessedContent];

  // Otherwise stash everything before it
  processedContent.push(...unprocessedContent.slice(0, inlineItemIndex));

  // Grab the item to inline
  const inlineItem = unprocessedContent[inlineItemIndex];

  const inlineContentStartIndex = inlineItemIndex + 1;

  let inlineContentEndIndex =
    inlineContentStartIndex + numberOfCandidateParagraphsToInline;

  // Grab the content to inline alongside the item
  let inlineContent = unprocessedContent.slice(
    inlineContentStartIndex,
    inlineContentEndIndex,
  );

  // Find anything that can't be inlined
  const flagggedInlineContentIndex = inlineContent.findIndex(
    (item) => item.name !== "paragraph",
  );

  // Only keep up to the last item that can be inlined
  if (flagggedInlineContentIndex !== -1) {
    inlineContentEndIndex =
      inlineContentStartIndex + flagggedInlineContentIndex;
    inlineContent = unprocessedContent.slice(
      inlineContentStartIndex,
      inlineContentEndIndex,
    );
  }

  // Stash the rest of the content to append after
  const afterInlineContent = unprocessedContent.slice(inlineContentEndIndex);

  // Add the item and content to inline
  processedContent.push({
    ...inlineItem,
    name: "inlineContent",
    attributes: {
      ...inlineItem.attributes,
      originalName: inlineItem.name,
      inlineContent,
      skeletonProps,
    },
  });

  // More content to check so round we go again
  if (afterInlineContent.length)
    return setupInlineContent(
      skeletonProps,
      afterInlineContent,
      processedContent,
    );

  // All done
  return processedContent;
};

const setupArticleMpuTestAd = (
  articleMpu,
  currentAdSlotIndex,
  contentWithoutAdSlot,
  skeletonProps,
) => {
  const { adPosition, group, width, height, slotName } = articleMpu;
  const isControlGroup = group === "A";

  // Get index of nth (adPosition) paragraph
  let nthParagraphIndex = currentAdSlotIndex;

  contentWithoutAdSlot.reduce((count, item, index) => {
    if (item.name !== "paragraph") return count;
    if (count === adPosition) {
      nthParagraphIndex = index - 1;
    }
    return count + 1;
  }, 0);

  const adSlotIndex = isControlGroup ? currentAdSlotIndex : nthParagraphIndex;

  const contentBeforeAd = contentWithoutAdSlot.slice(0, adSlotIndex);

  if (isControlGroup) {
    const contentAfterControlGroupAd = contentWithoutAdSlot.slice(adSlotIndex);
    return [
      ...contentBeforeAd,
      {
        name: "ad",
        attributes: {
          slotName,
        },
        children: [],
      },
      ...contentAfterControlGroupAd,
    ];
  }

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

export const setupAd = (skeletonProps, variants) => {
  const {
    isTablet,
    data: { content, template },
  } = skeletonProps;
  if (!isTablet || !variants || !Object.keys(variants).length) return content;

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

  const { articleMpu } = variants;

  if (!articleMpu || (articleMpu && template !== "mainstandard"))
    return cleanedContent;

  return setupArticleMpuTestAd(
    articleMpu,
    currentAdSlotIndex,
    contentWithoutAdSlot,
    skeletonProps,
  );
};

export const getStringBounds = (fontSettings, string) => {
  const { fontSize } = fontSettings;
  const font = FontStorage.getFont(fontSettings);
  const glyphs = font.stringToGlyphs(string);
  let x1 = 0;
  let x2 = 0;
  let y1 = 0;
  let y2 = 0;
  glyphs.forEach((glyph) => {
    const bbox = glyph.getBoundingBox();
    x1 = Math.min(x1, bbox.x1);
    x2 = Math.max(x2, bbox.x2) + 100 * (glyphs.length - 1);
    y1 = Math.min(y1, bbox.y1);
    y2 = Math.max(y2, bbox.y2);
  });
  const width =
    (x2 * fontSize) / font.unitsPerEm - (x1 * fontSize) / font.unitsPerEm;
  const height =
    (y2 * fontSize) / font.unitsPerEm - (y1 * fontSize) / font.unitsPerEm;
  return { width, height };
};

export default memoize((skeletonProps, variants) => {
  return setupInlineContent(skeletonProps, setupAd(skeletonProps, variants));
});
