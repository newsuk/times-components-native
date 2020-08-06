import React, { Component } from "react";
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
  style: any;
  summary: Markup;
  summaryStyle?: any;
  tile: any;
  bylines?: Markup;
  whiteSpaceHeight: number;
  linesOfTeaserToRender?: number | undefined;
}

class FrontTileSummary extends Component<Props> {
  constructor(props: Props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.renderHeadline = this.renderHeadline.bind(this);
    this.renderStrapline = this.renderStrapline.bind(this);
  }

  renderContent() {
    const {
      summary,
      summaryStyle,
      whiteSpaceHeight,
      linesOfTeaserToRender,
    } = this.props;

    return (
      <FrontArticleSummaryContent
        summary={summary}
        summaryStyle={summaryStyle}
        whiteSpaceHeight={whiteSpaceHeight}
        linesOfTeaserToRender={linesOfTeaserToRender}
      />
    );
  }

  renderHeadline() {
    const {
      tile: {
        headline: tileHeadline,
        article: { headline, shortHeadline },
      },
      headlineStyle,
    } = this.props;

    return (
      <ArticleSummaryHeadline
        headline={tileHeadline || shortHeadline || headline}
        style={headlineStyle}
      />
    );
  }

  renderStrapline() {
    const { strapline, straplineStyle } = this.props;
    if (!strapline) return null;

    return (
      <ArticleSummaryStrapline strapline={strapline} style={straplineStyle} />
    );
  }

  renderByline(breakpoint: string) {
    const { bylines: ast } = this.props;

    if (!ast || ast.length === 0) return null;

    const styles = styleFactory(breakpoint);
    return (
      <Text style={styles.bylineContainer}>
        <ArticleByline ast={ast} bylineStyle={styles.bylineStyle} />
      </Text>
    );
  }

  render() {
    const { style } = this.props;
    return (
      <ResponsiveContext.Consumer>
        {(context) => {
          return (
            <View style={style}>
              {this.renderHeadline()}
              {this.renderStrapline()}
              {
                // @ts-ignore
                this.renderByline(context.editionBreakpoint)
              }
              {this.renderContent()}
            </View>
          );
        }}
      </ResponsiveContext.Consumer>
    );
  }
}

export default FrontTileSummary;
