import React, { useState } from "react";
import { Animated } from "react-native";
import ArticleSummary, {
  ArticleSummaryContent,
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";
import { SectionContext } from "@times-components-native/context";
import { ArticleFlags } from "@times-components-native/article-flag";
import { colours } from "@times-components-native/styleguide";
import { ResponsiveContext } from "@times-components-native/responsive";
import PositionedTileStar from "./positioned-tile-star";

interface Props {
  bylines?: any;
  bylineStyle?: any;
  flagColour?: any;
  flagsStyle?: any;
  headlineStyle?: any;
  labelColour?: string;
  linesOfTeaserToRender?: number;
  strapline?: string;
  straplineStyle?: any;
  style?: any;
  summary?: any;
  summaryStyle?: any;
  tile: any;
  withStar?: boolean;
  underneathTextStar?: boolean;
  centeredStar?: boolean;
  isDarkStar?: boolean;
  starStyle?: any;
  hideLabel?: boolean;
  whiteSpaceHeight?: number;
}

const TileSummary: React.FC<Props> = ({
  bylines,
  bylineStyle,
  flagColour = {},
  flagsStyle,
  headlineStyle,
  labelColour,
  linesOfTeaserToRender,
  strapline,
  straplineStyle,
  style,
  summary,
  summaryStyle,
  tile,
  withStar = true,
  whiteSpaceHeight,
  underneathTextStar = false,
  centeredStar = false,
  isDarkStar = false,
  starStyle,
  hideLabel = false,
}) => {
  const {
    headline: tileHeadline,
    article: {
      expirableFlags,
      longRead,
      hasVideo,
      headline,
      shortHeadline,
      label,
      section,
      id,
    },
  } = tile;

  const [textOpacity] = useState(new Animated.Value(1));
  const readArticleAnimationDuration = 300;
  const readArticleAnimationDelay = 500;

  const MarkAsRead = ({ children, markArticleAsRead }) =>
    markArticleAsRead ? (
      <Animated.View
        style={{
          opacity: textOpacity,
        }}
      >
        {children}
      </Animated.View>
    ) : (
      children
    );

  const renderContent = (markArticleAsRead) => (
    <MarkAsRead markArticleAsRead={markArticleAsRead}>
      <ArticleSummaryContent
        ast={summary}
        style={summaryStyle}
        lineHeight={(summaryStyle && summaryStyle.lineHeight) || undefined}
        whiteSpaceHeight={whiteSpaceHeight}
        initialLines={linesOfTeaserToRender}
      />
    </MarkAsRead>
  );

  const renderFlags = (markArticleAsRead) => (
    <MarkAsRead markArticleAsRead={markArticleAsRead}>
      <ArticleFlags
        {...flagColour}
        style={flagsStyle}
        flags={expirableFlags}
        longRead={longRead}
      />
    </MarkAsRead>
  );

  const renderSaveStar = () => (
    <PositionedTileStar
      articleId={id}
      isDarkStar={isDarkStar}
      centeredStar={centeredStar}
      underneathTextStar={underneathTextStar}
      style={starStyle}
    />
  );

  const renderHeadline = (markArticleAsRead) => (
    <MarkAsRead markArticleAsRead={markArticleAsRead}>
      <ArticleSummaryHeadline
        headline={tileHeadline || shortHeadline || headline}
        style={headlineStyle}
      />
    </MarkAsRead>
  );

  const renderStrapline = (markArticleAsRead) => (
    <MarkAsRead markArticleAsRead={markArticleAsRead}>
      <ArticleSummaryStrapline strapline={strapline} style={straplineStyle} />
    </MarkAsRead>
  );

  return (
    <ResponsiveContext.Consumer>
      {({ isTablet }) => (
        <SectionContext.Consumer>
          {({ readArticles }) => {
            const markArticleAsRead =
              isTablet && readArticles && readArticles.includes(id);

            if (markArticleAsRead) {
              Animated.timing(textOpacity, {
                delay: readArticleAnimationDelay,
                duration: readArticleAnimationDuration,
                toValue: 0.6,
                useNativeDriver: false,
              }).start();
            }

            return (
              <ArticleSummary
                bylineProps={bylines ? { ast: bylines, bylineStyle } : null}
                content={summary ? renderContent(markArticleAsRead) : undefined}
                flags={renderFlags(markArticleAsRead)}
                headline={renderHeadline(markArticleAsRead)}
                labelProps={{
                  color:
                    labelColour ||
                    colours.section[section] ||
                    colours.section.default,
                  isVideo: hasVideo,
                  title: label,
                  hide: hideLabel,
                  markArticleAsRead,
                }}
                strapline={
                  strapline ? renderStrapline(markArticleAsRead) : undefined
                }
                saveStar={withStar && renderSaveStar()}
                style={style}
                isTablet={isTablet}
              />
            );
          }}
        </SectionContext.Consumer>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default TileSummary;
