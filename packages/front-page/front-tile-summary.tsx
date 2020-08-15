import React, { useContext } from "react";
import {
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";

import { Text, View } from "react-native";
import styleFactory from "@times-components-native/front-page/styles";
import ArticleByline from "@times-components-native/article-byline";
import FrontArticleSummaryContent from "./front-article-summary-content";
import { ResponsiveContext } from "@times-components-native/responsive";
import { Markup } from "@times-components-native/fixture-generator/src/types";

interface Props {
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
    <FrontArticleSummaryContent summary={summary} summaryStyle={summaryStyle} />
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

const renderByline = (props: Props, breakpoint: string) => {
  const { bylines: ast } = props;
  if (!ast || ast.length === 0) return null;

  const styles = styleFactory(breakpoint);
  return (
    <Text style={styles.bylineContainer}>
      <ArticleByline ast={ast} bylineStyle={styles.bylineStyle} />
    </Text>
  );
};

const FrontTileSummary: React.FC<Props> = (props) => {
  // @ts-ignore
  const { editionBreakpoint } = useContext(ResponsiveContext);
  const styles = styleFactory(editionBreakpoint);

  return (
    <View style={[props.containerStyle, styles.container]}>
      {renderHeadline(props)}
      {renderStrapline(props)}
      {renderByline(props, editionBreakpoint)}
      {renderContent(props)}
    </View>
  );
};

export default FrontTileSummary;
