export const setupInlineContent = (
  skeletonProps,
  unprocessedContent,
  processedContent = [],
) => {
  const { isArticleTablet } = skeletonProps;
  if (!isArticleTablet) return unprocessedContent;

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
