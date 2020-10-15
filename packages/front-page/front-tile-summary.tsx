import React, { useState } from "react";
import {
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";

import { View } from "react-native";
import styleFactory from "./styles";
import FrontArticleSummaryContent from "./front-article-summary-content";
import {
  Markup,
  TemplateType,
} from "@times-components-native/fixture-generator/src/types";
import { FrontPageByline } from "./front-page-byline";
import { MeasureContainer } from "./MeasureContainer";
import { getFrontTileConfig } from "./utils/get-front-tile-config";

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
  headlineMarginBottom: number;
  straplineMarginBottom: number;
  bylineMarginBottom: number;
  summaryLineHeight: number;
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
        const frontTileConfig = getFrontTileConfig({
          container: {
            height,
          },
          headline: {
            height: headlineHeight,
            marginBottom: props.headlineMarginBottom,
          },
          strapline: {
            height: straplineHeight,
            marginBottom: props.straplineMarginBottom,
          },
          bylines: {
            height: bylineHeight,
            marginBottom: props.bylineMarginBottom,
          },
          content: {
            lineHeight: props.summaryLineHeight,
          },
        });

        return (
          <View
            style={[
              props.containerStyle,
              styles.container,
              { opacity: allMeasured ? 1 : 0 },
            ]}
          >
            <View
              testID={"headlineWrapper"}
              onLayout={(e) => setHeadlineHeight(e.nativeEvent.layout.height)}
              style={{
                marginBottom: frontTileConfig.headline.marginBottom,
              }}
            >
              {renderHeadline(props)}
            </View>
            <View
              testID={"straplineWrapper"}
              onLayout={(e) => setStraplineHeight(e.nativeEvent.layout.height)}
              style={{
                opacity: frontTileConfig.strapline.show ? 1 : 0,
                marginBottom: frontTileConfig.strapline.marginBottom,
              }}
            >
              {renderStrapline(props)}
            </View>
            <View
              testID={"bylineWrapper"}
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
