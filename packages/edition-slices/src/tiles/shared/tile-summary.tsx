import React, { useState, ReactNode } from "react";
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

  type MarkAsReadProps = {
    children: ReactNode;
    markAsRead: boolean;
  };

  const MarkAsRead = ({ children, markAsRead }: MarkAsReadProps) => (
    <>
      {markAsRead ? (
        <Animated.View
          style={{
            opacity: textOpacity,
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
    <MarkAsRead markAsRead={markAsRead}>
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
        headline={tileHeadline || shortHeadline || headline}
        style={headlineStyle}
      />
    </MarkAsRead>
  );

  const renderStrapline = (markAsRead: boolean) =>
    strapline && (
      <MarkAsRead markAsRead={markAsRead}>
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
            const markAsRead = shouldMarkAsRead(isTablet, readArticles, id);

            if (markAsRead) {
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
                content={summary && renderContent(markAsRead)}
                flags={renderFlags(markAsRead)}
                headline={renderHeadline(markAsRead)}
                labelProps={{
                  color:
                    labelColour ||
                    colours.section[section] ||
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
