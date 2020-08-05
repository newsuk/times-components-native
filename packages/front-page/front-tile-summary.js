import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";

import { Text, View } from "react-native";
import styles from "@times-components-native/front-page/styles";
import ArticleByline from "@times-components-native/article-byline";
import { ArticleSummaryContent } from "@times-components-native/article-summary";
import renderTrees from "@times-components-native/markup-forest/src/markup-forest";
import { ResponsiveContext } from "@times-components-native/responsive";
import stylesFactory from "./styles";
import frontRenderers from "./front-renderer";
import { indent } from "./indent";

class FrontTileSummary extends Component {
  constructor(props) {
    super(props);
    this.renderContent = this.renderContent.bind(this);
    this.renderHeadline = this.renderHeadline.bind(this);
    this.renderStrapline = this.renderStrapline.bind(this);
  }

  renderContent(breakpoint) {
    const {
      summary,
      summaryStyle,
      whiteSpaceHeight,
      linesOfTeaserToRender,
    } = this.props;

    if (!summary) return null;
    const styles = stylesFactory(breakpoint);

    const indentedAst = indent(summary);
    return (
      <ArticleSummaryContent
        ast={indentedAst}
        style={[summaryStyle, styles.textPortrait]}
        whiteSpaceHeight={whiteSpaceHeight}
        initialLines={linesOfTeaserToRender}
        renderAst={(ast) => renderTrees(ast, frontRenderers)}
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

  renderByline() {
    const { bylines: ast, bylineStyle } = this.props;

    if (!ast || ast.length === 0) return null;

    return (
      <Text style={styles.bylineContainer}>
        <ArticleByline ast={ast} bylineStyle={bylineStyle} />
      </Text>
    );
  }

  render() {
    const { style } = this.props;
    return (
      <ResponsiveContext.Consumer>
        {({ breakpoint }) => (
          <View style={style}>
            {this.renderHeadline()}
            {this.renderStrapline()}
            {this.renderByline()}
            {this.renderContent(breakpoint)}
          </View>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

FrontTileSummary.propTypes = {
  bylineStyle: PropTypes.shape({}),
  headlineStyle: PropTypes.shape({}),
  strapline: PropTypes.string,
  straplineStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
  summary: PropTypes.arrayOf(PropTypes.shape({})),
  summaryStyle: PropTypes.shape({}),
  tile: PropTypes.shape({}).isRequired,
  bylines: PropTypes.arrayOf(PropTypes.shape({})),
};

FrontTileSummary.defaultProps = {
  bylineStyle: null,
  headlineStyle: null,
  strapline: null,
  straplineStyle: null,
  style: null,
  summary: null,
  summaryStyle: null,
};

export default FrontTileSummary;
