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

  const canAccommodateStrapline =
    container.height >=
    headline.height + headline.marginBottom + strapline.height;

  const canAccommodateByline =
    container.height >=
    headline.height +
      headline.marginBottom +
      strapline.height +
      strapline.marginBottom +
      bylines.height;

  const canAccommodateContent =
    container.height -
      (headline.height +
        headline.marginBottom +
        strapline.height +
        strapline.marginBottom +
        bylines.height +
        bylines.marginBottom) >=
    content.lineHeight * minimumNumberOfTeaserTextLines;

  return {
    headline: {
      show: true,
      marginBottom:
        canAccommodateStrapline || canAccommodateByline || canAccommodateContent
          ? headline.marginBottom
          : 0,
    },
    strapline: {
      show: canAccommodateStrapline,
      marginBottom:
        canAccommodateByline || canAccommodateContent
          ? strapline.marginBottom
          : 0,
    },
    byline: {
      show: canAccommodateByline,
      marginBottom: canAccommodateContent ? bylines.marginBottom : 0,
    },
    content: { show: canAccommodateContent, marginBottom: 0 },
  };
};
