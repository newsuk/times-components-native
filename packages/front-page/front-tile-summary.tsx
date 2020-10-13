import React, { useState } from "react";
import {
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";

import { View } from "react-native";
import styleFactory from "@times-components-native/front-page/styles";
import FrontArticleSummaryContent from "./front-article-summary-content";
import {
  Markup,
  TemplateType,
} from "@times-components-native/fixture-generator/src/types";
import { FrontPageByline } from "@times-components-native/front-page/front-page-byline";
import { MeasureContainer } from "@times-components-native/front-page/MeasureContainer";

interface Props {
  columnCount?: number;
  headlineStyle?: any;
  strapline?: string;
  straplineStyle?: any;
  containerStyle?: any;
  summary: Markup;
  summaryStyle?: any;
  template: TemplateType;
  tile: any;
  bylines?: Markup;
  showKeyline?: boolean;
  bylineContainerStyle?: any;
}

const renderContent = (props: Props) => {
  const { summary, summaryStyle, template } = props;

  return (
    <FrontArticleSummaryContent
      summary={summary}
      summaryStyle={summaryStyle}
      columnCount={props.columnCount}
      template={template}
      bylines={props.bylines}
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

const getFrontTileConfig = (
  props: Props,
  height: number,
  headlineHeight: any,
  straplineHeight: any,
  bylineHeight: any,
) => {
  const roomForStrapline = height > headlineHeight + straplineHeight;

  const roomForByline =
    height > headlineHeight + straplineHeight + bylineHeight;

  const roomForContent =
    height - (headlineHeight + straplineHeight + bylineHeight) >
    props.summaryStyle.lineHeight * 2;

  return {
    headline: {
      show: true,
      marginBottom:
        roomForStrapline || roomForByline || roomForContent
          ? props.headlineStyle.marginBottom
          : 0,
    },
    strapline: {
      show: roomForStrapline,
      marginBottom:
        props.strapline && (roomForByline || roomForContent)
          ? props.straplineStyle.marginBottom
          : 0,
    },
    byline: {
      show: roomForByline,
      marginBottom:
        props.bylines && props.bylines.length && roomForContent
          ? props.bylineContainerStyle.marginBottom
          : 0,
    },
    content: { show: roomForContent, marginBottom: 0 },
  };
};

const FrontTileSummary: React.FC<Props> = (props) => {
  const styles = styleFactory();
  const [headlineHeight, setHeadlineHeight] = useState();
  const [straplineHeight, setStraplineHeight] = useState();
  const [bylineHeight, setBylineHeight] = useState();

  const allMeasured =
    headlineHeight !== undefined &&
    straplineHeight !== undefined &&
    bylineHeight !== undefined;

  return (
    <MeasureContainer
      render={({ height }) => {
        const frontTileConfig = getFrontTileConfig(
          props,
          height,
          headlineHeight,
          straplineHeight,
          bylineHeight,
        );

        return (
          <View
            style={[
              props.containerStyle,
              styles.container,
              { opacity: allMeasured ? 1 : 0 },
            ]}
          >
            <View
              onLayout={(e) => setHeadlineHeight(e.nativeEvent.layout.height)}
              style={{
                marginBottom: frontTileConfig.headline.marginBottom,
              }}
            >
              {renderHeadline(props)}
            </View>
            <View
              onLayout={(e) => setStraplineHeight(e.nativeEvent.layout.height)}
              style={{
                opacity: frontTileConfig.strapline.show ? 1 : 0,
                marginBottom: frontTileConfig.strapline.marginBottom,
              }}
            >
              {renderStrapline(props)}
            </View>
            <View
              style={{
                opacity: frontTileConfig.byline.show ? 1 : 0,
                marginBottom: frontTileConfig.byline.marginBottom,
              }}
              onLayout={(e) => setBylineHeight(e.nativeEvent.layout.height)}
            >
              {renderByline(props)}
            </View>
            {frontTileConfig.content.show && renderContent(props)}
          </View>
        );
      }}
    />
  );
};

export default FrontTileSummary;
