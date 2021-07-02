import React, { useEffect, useState } from "react";
import {
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";

import { View } from "react-native";
import styleFactory from "./styles";
import FrontArticleSummaryContent from "./front-article-summary-content";
import { Markup } from "@times-components-native/fixture-generator/src/types";
import { FrontPageByline } from "./front-page-byline";
import { MeasureContainer } from "./MeasureContainer";
import { getFrontTileConfig } from "./utils/get-front-tile-config";
import { useResponsiveContext } from "@times-components-native/responsive";
import { PlayIcon } from "@times-components-native/video";
import { getIconSize } from "@times-components-native/video/src/play-icon";

interface Props {
  columnCount?: number;
  headlineStyle?: any;
  strapline?: string;
  straplineStyle?: any;
  containerStyle?: any;
  summary: Markup;
  summaryStyle?: any;
  tile: any;
  bylines?: Markup;
  showKeyline?: boolean;
  bylineContainerStyle?: any;
  headlineMarginBottom: number;
  straplineMarginTop: number;
  straplineMarginBottom: number;
  bylineMarginBottom: number;
  justified?: boolean;
  summaryLineHeight: number;
  hasVideo?: boolean;
}

const renderContent = (
  props: Props,
  {
    numberOfLines,
    contentWidth,
    contentHeight,
  }: { numberOfLines: number; contentWidth: number; contentHeight: number },
) => {
  const { summary, summaryStyle, justified, columnCount, bylines } = props;

  return (
    <FrontArticleSummaryContent
      summary={summary}
      summaryStyle={summaryStyle}
      numberOfLines={numberOfLines}
      columnCount={columnCount}
      bylines={bylines}
      contentHeight={contentHeight}
      contentWidth={contentWidth}
      justified={justified}
    />
  );
};

const renderHeadline = (props: Props) => {
  const {
    tile: {
      headline: tileHeadline,
      article: { headline, shortHeadline },
    },
    headlineStyle,
  } = props;

  return (
    <ArticleSummaryHeadline
      headline={tileHeadline || shortHeadline || headline}
      style={[headlineStyle, { marginBottom: 0 }]}
      allowFontScaling={false}
    />
  );
};

const renderStrapline = (props: Props) => {
  const { strapline, straplineStyle } = props;
  if (!strapline) return null;

  return (
    <ArticleSummaryStrapline
      strapline={strapline}
      style={[straplineStyle, { marginBottom: 0 }]}
      allowFontScaling={false}
    />
  );
};

const renderByline = (props: Props) => {
  const { bylines: ast, columnCount } = props;
  if (!ast || ast.length === 0) return null;
  if (columnCount && columnCount > 1) return null;

  return (
    <FrontPageByline
      showKeyline={props.showKeyline}
      containerStyle={[props.bylineContainerStyle, { marginBottom: 0 }]}
      byline={ast}
    />
  );
};

const TileSummaryContainer: React.FC<{
  hidden: boolean;
  minHeight?: number;
  containerStyle?: any;
}> = ({ children, hidden, minHeight, containerStyle = {} }) => {
  const styles = styleFactory();
  const style = [containerStyle, styles.container];
  return (
    <View style={[...style, { minHeight, opacity: hidden ? 0 : 1 }]}>
      {children}
    </View>
  );
};

type Heights = {
  headline: number;
  strapline: number;
  byline: number;
};

type InputHeights = {
  headline?: number;
  strapline?: number;
  byline?: number;
};

const defaultHeights: Heights = { headline: -1, strapline: -1, byline: -1 };

const useHeights = (): [Heights, (newheights: InputHeights) => void] => {
  const [heights, setHeights] = useState(defaultHeights);

  const { headline, strapline, byline } = heights;

  let exportedHeights = defaultHeights;

  if (headline !== -1 && strapline !== -1 && byline !== -1) {
    exportedHeights = heights;
  }

  const mergeHeights = (newHeights: InputHeights) => {
    setHeights({ ...heights, ...newHeights });
  };

  return [exportedHeights, mergeHeights];
};

const FrontTileSummary: React.FC<Props> = (props) => {
  const {
    bylineMarginBottom,
    straplineMarginTop,
    straplineMarginBottom,
    headlineMarginBottom,
    summaryLineHeight,
    hasVideo = false,
    containerStyle,
  } = props;

  const { orientation } = useResponsiveContext();
  const [heights, setHeights] = useHeights();

  const {
    headline: headlineHeight,
    strapline: straplineHeight,
    byline: bylineHeight,
  } = heights;

  const allMeasured =
    headlineHeight !== -1 && straplineHeight !== -1 && bylineHeight !== -1;

  // re-measure/render on orientation change
  useEffect(() => {
    setHeights(defaultHeights);
  }, [orientation]);

  return (
    <>
      {!allMeasured && (
        <TileSummaryContainer hidden key={"unmeasured"} {...{ containerStyle }}>
          <View
            testID={"headlineWrapper"}
            onLayout={(e) =>
              setHeights({ headline: e.nativeEvent.layout.height })
            }
          >
            {renderHeadline(props)}
          </View>
          <View
            testID={"straplineWrapper"}
            onLayout={(e) =>
              setHeights({ strapline: e.nativeEvent.layout.height })
            }
          >
            {renderStrapline(props)}
          </View>
          <View
            testID={"bylineWrapper"}
            onLayout={(e) =>
              setHeights({ byline: e.nativeEvent.layout.height })
            }
          >
            {renderByline(props)}
          </View>
        </TileSummaryContainer>
      )}
      {allMeasured && (
        <MeasureContainer
          key={"measured"}
          render={({ width, height }) => {
            const frontTileConfig = getFrontTileConfig({
              container: {
                height,
              },
              headline: {
                height: headlineHeight,
                marginBottom: headlineMarginBottom,
              },
              strapline: {
                height: straplineHeight,
                marginTop: straplineMarginTop,
                marginBottom: straplineMarginBottom,
              },
              bylines: {
                height: bylineHeight,
                marginBottom: bylineMarginBottom,
              },
              content: {
                lineHeight: summaryLineHeight,
              },
            });

            return (
              <TileSummaryContainer
                hidden={false}
                minHeight={height}
                {...{ containerStyle }}
              >
                <View
                  style={{
                    marginBottom: frontTileConfig.headline.marginBottom,
                  }}
                >
                  {renderHeadline(props)}
                </View>
                {frontTileConfig.strapline.show && (
                  <View
                    style={{
                      marginBottom: frontTileConfig.strapline.marginBottom,
                    }}
                  >
                    {renderStrapline(props)}
                  </View>
                )}
                {frontTileConfig.byline.show && (
                  <View
                    style={{
                      marginBottom: frontTileConfig.byline.marginBottom,
                    }}
                  >
                    {renderByline(props)}
                  </View>
                )}
                {frontTileConfig.content.show &&
                  renderContent(props, {
                    numberOfLines: frontTileConfig.content.numberOfLines,
                    contentHeight:
                      frontTileConfig.content.numberOfLines * summaryLineHeight,
                    contentWidth: width,
                  })}
                {hasVideo && (
                  <View
                    style={{ position: "absolute", top: -getIconSize(width) }}
                  >
                    <PlayIcon size={getIconSize(width)} />
                  </View>
                )}
              </TileSummaryContainer>
            );
          }}
        />
      )}
    </>
  );
};

export default FrontTileSummary;
