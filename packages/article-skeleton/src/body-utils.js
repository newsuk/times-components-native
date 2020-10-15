/* eslint-disable no-plusplus */
import memoize from "memoize-one";
import { FontStorage } from "@times-components-native/typeset";

// Collapse inlines into the following paragraphs on tablet
export const collapsed = (isTablet, content) =>
  !isTablet
    ? content
    : content.reduceRight((acc, node, index) => {
        // remove inline image if first
        if (
          index === 0 &&
          node.name === "image" &&
          node.attributes?.display === "inline"
        )
          return acc;

        // backwards
        // if (
        //   ((node.name === "image" || node.name === "ad") &&
        //     node.attributes?.display === "inline") ||
        //   node.name === "pullQuote"
        // ) {
        if (
          (node.name === "image" && node.attributes?.display === "inline") ||
          node.name === "pullQuote"
        ) {
          // forwards
          let i;
          let children = [node];
          const maxNodesToInline = Math.min(4, acc.length);
          for (i = 0; i < maxNodesToInline; i += 1) {
            const next = acc[i];
            if (next && next.name === "paragraph") {
              children = [
                ...children,
                ...next.children,
                { name: "break", children: [] },
                { name: "break", children: [] },
              ];
            } else {
              break;
            }
          }
          return [
            {
              ...acc[0],
              children,
            },
            ...acc.slice(i),
          ];
        }
        return [node, ...acc];
      }, []);

const setupArticleMpuTestAd = (
  articleMpu,
  currentAdSlotIndex,
  contentWithoutAdSlot,
  skeletonProps,
) => {
  const { adPosition, group, width, height, slotName } = articleMpu;
  const isControlGroup = group === "A";
  const adSlotIndex = isControlGroup ? currentAdSlotIndex : adPosition - 1;
  const inlineContentEndIndex = adSlotIndex + 5;

  if (isControlGroup) {
    return [
      ...contentWithoutAdSlot.slice(0, adSlotIndex),
      {
        name: "ad",
        attributes: {
          slotName,
        },
      },
      ...contentWithoutAdSlot.slice(inlineContentEndIndex),
    ];
  }

  return [
    ...contentWithoutAdSlot.slice(0, adSlotIndex),
    {
      name: "inlineAd",
      attributes: {
        slotName,
        inlineContent: contentWithoutAdSlot.slice(
          adSlotIndex,
          inlineContentEndIndex,
        ),
        skeletonProps,
        display: "inline",
        width,
        height,
      },
      children: [],
    },
    ...contentWithoutAdSlot.slice(inlineContentEndIndex),
  ];
};

export const setupAd = (
  isTablet,
  variants,
  template,
  content,
  skeletonProps,
) => {
  if (!isTablet || !variants || !Object.keys(variants).length) return content;

  let currentAdSlotIndex;

  const contentWithoutAdSlot = content.filter((item, index) => {
    const isItemAd = item.name === "ad";
    if (isItemAd) currentAdSlotIndex = index;
    return !isItemAd;
  });

  if (!currentAdSlotIndex) return content;

  // If tablet, only show on mainstandard template
  if (isTablet && template !== "mainstandard") return contentWithoutAdSlot;

  const { articleMpu } = variants;

  if (!articleMpu || (articleMpu && template !== "mainstandard"))
    return content;

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

export default memoize((isTablet, variants, template, content, skeletonProps) =>
  collapsed(
    isTablet,
    setupAd(isTablet, variants, template, content, skeletonProps),
  ),
);
