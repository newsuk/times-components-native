import React from "react";
import {
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";

import { View } from "react-native";
import styleFactory from "@times-components-native/front-page/styles";
import FrontArticleSummaryContent from "./front-article-summary-content";
import { Markup } from "@times-components-native/fixture-generator/src/types";
import { FrontPageByline } from "@times-components-native/front-page/front-page-byline";

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
}

const renderContent = (props: Props) => {
  const { summary, summaryStyle } = props;

  return (
    <FrontArticleSummaryContent
      summary={summary}
      summaryStyle={summaryStyle}
      columnCount={props.columnCount}
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
      style={headlineStyle}
    />
  );
};

const renderStrapline = (props: Props) => {
  const { strapline, straplineStyle } = props;
  if (!strapline) return null;

  return (
    <ArticleSummaryStrapline strapline={strapline} style={straplineStyle} />
  );
};

const renderByline = (props: Props) => {
  const { bylines: ast, columnCount } = props;
  if (!ast || ast.length === 0) return null;
  if (columnCount && columnCount > 1) return null;

  return <FrontPageByline withKeyline={false} byline={ast} />;
};

const FrontTileSummary: React.FC<Props> = (props) => {
  const styles = styleFactory();

  return (
    <View style={[props.containerStyle, styles.container]}>
      {renderHeadline(props)}
      {renderStrapline(props)}
      {renderByline(props)}
      {renderContent(props)}
    </View>
  );
};

export default FrontTileSummary;
