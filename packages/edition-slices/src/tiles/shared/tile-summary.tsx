import React, { useEffect, useState, ReactNode } from "react";
import { Animated, StyleProp, ViewStyle } from "react-native";
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
  headlineStyle?: StyleProp<ViewStyle>;
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

  const [markAsRead, setMarkAsRead] = useState(false);

  const sharedTimingConfig = {
    delay: ARTICLE_READ_ANIMATION.DELAY,
    duration: ARTICLE_READ_ANIMATION.DURATION,
    useNativeDriver: true,
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(standardOpacity, {
        ...sharedTimingConfig,
        toValue: 0.57,
      }),
      Animated.timing(straplineOpacity, {
        ...sharedTimingConfig,
        toValue: 0.57,
      }),
      Animated.timing(summaryOpacity, {
        ...sharedTimingConfig,
        toValue: 0.7,
      }),
    ]).start();
  }, [markAsRead]);

  type MarkAsReadProps = {
    children: ReactNode;
    markAsRead: boolean;
    opacity?: Animated.Value;
  };

  const MarkAsRead = ({
    children,
    markAsRead,
    opacity = standardOpacity,
  }: MarkAsReadProps) => (
    <>
      {markAsRead ? (
        <Animated.View
          style={{
            opacity,
          }}
        >
          {children}
        </Animated.View>
      ) : (
        children
      )}
    </>
  );

  const renderContent = (markAsRead: boolean) => (
    <MarkAsRead markAsRead={markAsRead} opacity={summaryOpacity}>
      <ArticleSummaryContent
        ast={summary}
        style={summaryStyle}
        lineHeight={(summaryStyle && summaryStyle.lineHeight) || undefined}
        whiteSpaceHeight={whiteSpaceHeight}
        initialLines={linesOfTeaserToRender}
      />
    </MarkAsRead>
  );

  const renderFlags = (markAsRead: boolean) => (
    <MarkAsRead markAsRead={markAsRead}>
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

  const renderHeadline = (markAsRead: boolean) => (
    <MarkAsRead markAsRead={markAsRead}>
      <ArticleSummaryHeadline
        headline={shortHeadline || headline || ""}
        style={headlineStyle}
      />
    </MarkAsRead>
  );

  const renderStrapline = (markAsRead: boolean) =>
    strapline && (
      <MarkAsRead markAsRead={markAsRead} opacity={straplineOpacity}>
        <ArticleSummaryStrapline strapline={strapline} style={straplineStyle} />
      </MarkAsRead>
    );

  const shouldMarkAsRead = (
    isTablet: boolean,
    readArticles: Array<string> | null,
    articleId: string,
  ) => !!(isTablet && readArticles && readArticles.includes(articleId));

  return (
    <ResponsiveContext.Consumer>
      {({ isTablet }) => (
        <SectionContext.Consumer>
          {({ readArticles }) => {
            setMarkAsRead(shouldMarkAsRead(isTablet, readArticles, id));
            return (
              <ArticleSummary
                bylineProps={bylines ? { ast: bylines, bylineStyle } : null}
                content={summary && renderContent(markAsRead)}
                flags={renderFlags(markAsRead)}
                headline={renderHeadline(markAsRead)}
                labelProps={{
                  color:
                    labelColour ||
                    (section && colours.section[section]) ||
                    colours.section.default,
                  isVideo: hasVideo,
                  title: label,
                  hide: hideLabel,
                  markAsRead,
                }}
                strapline={renderStrapline(markAsRead)}
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
