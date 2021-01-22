const minimumNumberOfTeaserTextLines = 2;

interface SummaryConfig {
  container: {
    height: number;
  };
  headline: {
    height: number;
    marginBottom: number;
  };
  strapline: {
    height: number;
    marginTop: number;
    marginBottom: number;
  };
  bylines: {
    height: number;
    marginBottom: number;
  };
  content: {
    lineHeight: number;
  };
}

const getNumberOfLines = (heightAvailable: number, lineHeight: number) => {
  if (heightAvailable < 0) return 0;
  return Math.floor(heightAvailable / lineHeight);
};

const calculateMarginBottom = (
  items: string[],
  item: string,
  itemMargin: number,
) => {
  const pos = items.indexOf(item);

  return pos < 0 || pos === items.length - 1 ? 0 : itemMargin;
};

export const getFrontTileConfig = (summaryConfig: SummaryConfig) => {
  const { container, headline, strapline, bylines, content } = summaryConfig;

  const headlineMargin =
    strapline.height === 0 ? headline.marginBottom : strapline.marginTop;

  const headlineWithMargin = headlineMargin + headline.height;

  const straplineWithMargin =
    strapline.height > 0 ? strapline.height + strapline.marginBottom : 0;

  const bylineWithMargin =
    bylines.height > 0 ? bylines.height + bylines.marginBottom : 0;

  const canAccommodateStrapline =
    container.height >= headlineWithMargin + strapline.height;

  const canAccommodateByline =
    container.height >=
    headlineWithMargin + straplineWithMargin + bylines.height;

  const heightForContentWithByline =
    container.height -
    (headlineWithMargin + straplineWithMargin + bylineWithMargin);

  const heightForContentWithoutByline =
    container.height - (headlineWithMargin + straplineWithMargin);

  const canAccommodateContentWithByline =
    heightForContentWithByline >=
    content.lineHeight * minimumNumberOfTeaserTextLines;

  const canAccommodateContentWithoutByline =
    heightForContentWithoutByline >=
    content.lineHeight * minimumNumberOfTeaserTextLines;

  const shouldShowContentInsteadOfByline =
    !canAccommodateContentWithByline && canAccommodateContentWithoutByline;

  const itemsToRender = [
    "headline",
    strapline.height > 0 && canAccommodateStrapline && "strapline",
    bylines.height > 0 &&
      canAccommodateByline &&
      !shouldShowContentInsteadOfByline &&
      "byline",
    (canAccommodateContentWithByline || canAccommodateContentWithoutByline) &&
      "content",
  ].filter(Boolean) as string[];

  return {
    headline: {
      show: true,
      marginBottom: calculateMarginBottom(
        itemsToRender,
        "headline",
        headlineMargin,
      ),
    },
    strapline: {
      show: itemsToRender.includes("strapline"),
      marginBottom: calculateMarginBottom(
        itemsToRender,
        "strapline",
        strapline.marginBottom,
      ),
    },
    byline: {
      show: itemsToRender.includes("byline"),
      marginBottom: calculateMarginBottom(
        itemsToRender,
        "byline",
        bylines.marginBottom,
      ),
    },
    content: {
      show: itemsToRender.includes("content"),
      marginBottom: 0,
      numberOfLines: canAccommodateContentWithByline
        ? getNumberOfLines(heightForContentWithByline, content.lineHeight)
        : canAccommodateContentWithoutByline
        ? getNumberOfLines(heightForContentWithoutByline, content.lineHeight)
        : 0,
    },
  };
};
