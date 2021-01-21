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

  return {
    headline: {
      show: true,
      marginBottom:
        canAccommodateStrapline ||
        canAccommodateByline ||
        canAccommodateContentWithoutByline
          ? headlineMargin
          : 0,
    },
    strapline: {
      show: strapline.height > 0 && canAccommodateStrapline,
      marginBottom:
        canAccommodateByline || canAccommodateContentWithoutByline
          ? strapline.marginBottom
          : 0,
    },
    byline: {
      show:
        bylines.height > 0 &&
        !shouldShowContentInsteadOfByline &&
        canAccommodateByline,
      marginBottom: canAccommodateContentWithByline ? bylines.marginBottom : 0,
    },
    content: canAccommodateContentWithByline
      ? {
          show: true,
          marginBottom: 0,
          numberOfLines: Math.floor(
            heightForContentWithByline / content.lineHeight,
          ),
        }
      : canAccommodateContentWithoutByline
      ? {
          show: true,
          marginBottom: 0,
          numberOfLines: Math.floor(
            heightForContentWithoutByline / content.lineHeight,
          ),
        }
      : {
          show: false,
          marginBottom: 0,
          numberOfLines: 0,
        },
  };
};
