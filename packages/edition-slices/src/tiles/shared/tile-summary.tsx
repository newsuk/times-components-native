import React, { useEffect, useState, ReactNode } from "react";
import { Animated, StyleProp, TextStyle, ViewStyle, View } from "react-native";
import ArticleSummary, {
  ArticleSummaryContent,
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";
import {
  BylineInput,
  Markup,
  Tile,
} from "@times-components-native/fixture-generator/src/types";
import { SectionContext } from "@times-components-native/context";
import { ArticleFlags } from "@times-components-native/article-flag";
import {
  colours,
  ARTICLE_READ_ANIMATION,
} from "@times-components-native/styleguide/index";
import { ResponsiveContext } from "@times-components-native/responsive";
import PositionedTileStar from "./positioned-tile-star";

interface Props {
  bylines?: BylineInput[];
  bylineStyle?: StyleProp<ViewStyle>;
  flagColour?: any;
  flagsStyle?: StyleProp<ViewStyle>;
  headlineStyle?: StyleProp<TextStyle>;
  labelColour?: string;
  linesOfTeaserToRender?: number;
  strapline?: string;
  straplineStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  summary?: Markup;
  summaryStyle?: any;
  tile: Tile;
  withStar?: boolean;
  underneathTextStar?: boolean;
  centeredStar?: boolean;
  isDarkStar?: boolean;
  starStyle?: StyleProp<ViewStyle>;
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

  const [standardOpacity] = useState(new Animated.Value(1));
  const [straplineOpacity] = useState(new Animated.Value(1));
  const [summaryOpacity] = useState(new Animated.Value(1));

  type ArticleRead = {
    id: string;
    highlight: boolean;
  };

  type ArticleReadState = {
    read: boolean;
    animate: boolean;
  };

  type MarkAsReadProps = {
    articleReadState: ArticleReadState;
    children: ReactNode;
    opacityAnimation?: Animated.Value;
    opacity: number;
  };

  const [articleReadState, setArticleReadState] = useState();

  const sharedTimingConfig = {
    delay: ARTICLE_READ_ANIMATION.DELAY,
    duration: ARTICLE_READ_ANIMATION.DURATION,
    useNativeDriver: true,
  };

  const articleReadOpacity = {
    standard: 0.57,
    summary: 0.7,
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(standardOpacity, {
        ...sharedTimingConfig,
        toValue: articleReadOpacity.standard,
      }),
      Animated.timing(straplineOpacity, {
        ...sharedTimingConfig,
        toValue: articleReadOpacity.standard,
      }),
      Animated.timing(summaryOpacity, {
        ...sharedTimingConfig,
        toValue: articleReadOpacity.summary,
      }),
    ]).start();
  }, [articleReadState.animate]);

  const getArticleReadState = (
    isTablet: boolean,
    readArticles: Array<ArticleRead> | null,
    articleId: string,
  ) => {
    const hasBeenRead = !!(
      isTablet &&
      readArticles &&
      readArticles.some((obj) => obj.id === articleId)
    );

    return {
      read: hasBeenRead,
      animate: hasBeenRead && !!readArticles?.some((obj) => obj.highlight),
    };
  };

  const MarkAsRead = ({
    children,
    articleReadState,
    opacityAnimation = standardOpacity,
    opacity = articleReadOpacity.standard,
  }: MarkAsReadProps) => (
    <>
      {articleReadState.animate ? (
        <Animated.View
          style={{
            opacity: opacityAnimation,
          }}
        >
          {children}
        </Animated.View>
      ) : articleReadState.read ? (
        <View style={{ opacity }}>{children}</View>
      ) : (
        children
      )}
    </>
  );

  const renderContent = (articleReadState: ArticleReadState) => (
    <MarkAsRead
      articleReadState={articleReadState}
      opacityAnimation={summaryOpacity}
      opacity={articleReadOpacity.summary}
    >
      <ArticleSummaryContent
        ast={summary}
        style={summaryStyle}
        lineHeight={(summaryStyle && summaryStyle.lineHeight) || undefined}
        whiteSpaceHeight={whiteSpaceHeight}
        initialLines={linesOfTeaserToRender}
      />
    </MarkAsRead>
  );

  const renderFlags = (articleReadState: ArticleReadState) => (
    <MarkAsRead
      articleReadState={articleReadState}
      opacity={articleReadOpacity.standard}
    >
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

  const renderHeadline = (articleReadState: ArticleReadState) => (
    <MarkAsRead
      articleReadState={articleReadState}
      opacity={articleReadOpacity.standard}
    >
      <ArticleSummaryHeadline
        headline={tileHeadline || shortHeadline || headline || ""}
        style={headlineStyle}
      />
    </MarkAsRead>
  );

  const renderStrapline = (articleReadState: ArticleReadState) =>
    strapline && (
      <MarkAsRead
        articleReadState={articleReadState}
        opacityAnimation={straplineOpacity}
        opacity={articleReadOpacity.standard}
      >
        <ArticleSummaryStrapline strapline={strapline} style={straplineStyle} />
      </MarkAsRead>
    );

  return (
    <ResponsiveContext.Consumer>
      {({ isTablet }) => (
        <SectionContext.Consumer>
          {({ readArticles }) => {
            updateArticleReadState(
              getArticleReadState(isTablet, readArticles, id),
            );
            return (
              <ArticleSummary
                bylineProps={bylines ? { ast: bylines, bylineStyle } : null}
                content={summary && renderContent(articleReadState)}
                flags={renderFlags(articleReadState)}
                headline={renderHeadline(articleReadState)}
                labelProps={{
                  color:
                    labelColour ||
                    (section && colours.section[section]) ||
                    colours.section.default,
                  isVideo: hasVideo,
                  title: label,
                  hide: hideLabel,
                  articleReadState,
                }}
                strapline={renderStrapline(articleReadState)}
                saveStar={withStar && renderSaveStar()}
                style={style}
              />
            );
          }}
        </SectionContext.Consumer>
      )}
    </ResponsiveContext.Consumer>
  );
};

export default TileSummary;
