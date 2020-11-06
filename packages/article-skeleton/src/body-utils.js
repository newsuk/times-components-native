/* eslint-disable no-plusplus */
import memoize from "memoize-one";
import { FontStorage } from "@times-components-native/typeset";

// Collapse inlines into the following paragraphs on tablet
export const collapsed = (isTablet, content) => content;
// !isTablet
//   ? content
//   : content.reduceRight((acc, node, index) => {
//       // remove inline image if first
//       if (
//         index === 0 &&
//         node.name === "image" &&
//         node.attributes?.display === "inline"
//       )
//         return acc;

//       // backwards
//       if (
//         (node.name === "image" && node.attributes?.display === "inline") ||
//         node.name === "pullQuote"
//       ) {
//         // forwards
//         let i;
//         let children = [node];
//         const numberOfNodesToInline = 4;
//         const maxNodesToInline = Math.min(numberOfNodesToInline, acc.length);
//         for (i = 0; i < maxNodesToInline; i += 1) {
//           const next = acc[i];
//           if (next && next.name === "paragraph") {
//             children = [
//               ...children,
//               ...next.children,
//               { name: "break", children: [] },
//               { name: "break", children: [] },
//             ];
//           } else {
//             break;
//           }
//         }
//         return [
//           {
//             ...acc[0],
//             children,
//           },
//           ...acc.slice(i),
//         ];
//       }
//       return [node, ...acc];
//     }, []);

const setupInlineContent = (
  skeletonProps,
  unprocessedContent,
  processedContent = [],
) => {
  const numberOfCandidateParagraphsToInline = 7;

  // Find something that needs inlining
  const inlineItemIndex = unprocessedContent.findIndex(
    (item) => item.name === "image" && item.attributes?.display === "inline",
    // || item.name === "pullQuote",
  );

  // We got nothing so return
  if (inlineItemIndex === -1)
    return [...processedContent, ...unprocessedContent];

  // Otherwise stash everything before it
  processedContent.push(...unprocessedContent.slice(0, inlineItemIndex));

  // Grab the inline item
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
      inlineItemIndex,
      inlineContentEndIndex,
    );
  }

  // stash the rest of the content to append after
  const afterInlineContent = unprocessedContent.slice(inlineContentEndIndex);

  // Add
  processedContent.push({
    ...inlineItem,
    name: "inlineContent",
    attributes: {
      ...inlineItem.attributes,
      originalName: inlineItem.name,
      //   slotName,
      inlineContent,
      skeletonProps,
      //   width,
      //   height,
    },
  });

  if (afterInlineContent.length)
    return setupInlineContent(
      skeletonProps,
      afterInlineContent,
      processedContent,
    );

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
  const adSlotIndex = isControlGroup ? currentAdSlotIndex : adPosition - 1;

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
      name: "inlineAd",
      attributes: {
        slotName,
        inlineContent,
        skeletonProps,
        width,
        height,
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
  const { isTablet } = skeletonProps;
  // const stuff = collapsed(isTablet, setupAd(skeletonProps, variants));
  const stuff = collapsed(
    isTablet,
    setupInlineContent(skeletonProps, setupAd(skeletonProps, variants)),
  );
  console.log(
    "*($^%&^&%^$*%^$*^%$^%)$%)($&%)$^%*^%*£^%)&%(&%*^*$^%^%($^*(",
    stuff.map((s) => `${s.name} - ${!!s.children}`),
    // JSON.stringify(stuff),
  );
  return stuff;
});
