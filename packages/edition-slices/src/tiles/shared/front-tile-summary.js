import React, { Component } from "react";
import PropTypes from "prop-types";
import ArticleSummary, {
  ArticleSummaryContent,
  ArticleSummaryHeadline,
  ArticleSummaryStrapline,
} from "@times-components-native/article-summary";

class FrontTileSummary extends Component {
  constructor(props) {
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
      <ArticleSummaryContent
        ast={summary}
        style={summaryStyle}
        whiteSpaceHeight={whiteSpaceHeight}
        initialLines={linesOfTeaserToRender}
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

    return (
      <ArticleSummaryStrapline strapline={strapline} style={straplineStyle} />
    );
  }

  render() {
    const { bylines, bylineStyle, strapline, style, summary } = this.props;
    return (
      <ArticleSummary
        bylineProps={bylines ? { ast: bylines, bylineStyle } : null}
        content={summary ? this.renderContent() : undefined}
        headline={this.renderHeadline()}
        strapline={strapline ? this.renderStrapline() : undefined}
        style={style}
      />
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
