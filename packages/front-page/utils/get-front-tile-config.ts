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

export const getFrontTileConfig = (summaryConfig: SummaryConfig) => {
  const { container, headline, strapline, bylines, content } = summaryConfig;

  const headlineMargin =
    strapline.height === 0 ? headline.marginBottom : strapline.marginTop;

  const headlineWithMargin = headlineMargin + headline.marginBottom;

  const straplineWithMargin =
    strapline.height > 0 ? strapline.height + strapline.marginBottom : 0;

  const bylineWithMargin =
    bylines.height > 0 ? bylines.height + bylines.marginBottom : 0;

  const canAccommodateStrapline =
    container.height >= headlineWithMargin + strapline.height;

  const canAccommodateByline =
    container.height >=
    headlineWithMargin + straplineWithMargin + bylines.height;

  const canAccommodateContent =
    container.height -
      (headlineWithMargin + straplineWithMargin + bylineWithMargin) >=
    content.lineHeight * minimumNumberOfTeaserTextLines;

  return {
    headline: {
      show: true,
      marginBottom:
        canAccommodateStrapline || canAccommodateByline || canAccommodateContent
          ? headlineMargin
          : 0,
    },
    strapline: {
      show: strapline.height > 0 && canAccommodateStrapline,
      marginBottom:
        canAccommodateByline || canAccommodateContent
          ? strapline.marginBottom
          : 0,
    },
    byline: {
      show: bylines.height > 0 && canAccommodateByline,
      marginBottom: canAccommodateContent ? bylines.marginBottom : 0,
    },
    content: { show: canAccommodateContent, marginBottom: 0 },
  };
};
