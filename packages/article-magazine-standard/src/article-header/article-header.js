import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { hasBylineData } from "@times-components-native/article-byline";
import Context from "@times-components-native/context";
import { ArticleFlags } from "@times-components-native/article-flag";
import { fontFactory } from "@times-components-native/styleguide";

import Label from "../article-label/article-label";
import Meta from "../article-meta/article-meta";
import Standfirst from "../article-standfirst/article-standfirst";
import {
  articleHeaderPropTypes,
  articleHeaderDefaultProps,
} from "./article-header-prop-types";
import styles from "../styles";

const ArticleHeader = ({
  articleId,
  bylines,
  flags,
  isArticleTablet,
  hasVideo,
  headline,
  label,
  longRead,
  onAuthorPress,
  onTooltipPresented,
  publicationName,
  publishedTime,
  standfirst,
  tooltips,
}) => {
  const withBylineTooltip =
    hasBylineData(bylines) && tooltips.includes("profile");
  return (
    <Context.Consumer>
      {({ theme: { headlineFont, headlineCase } }) => (
        <View
          style={[
            styles.container,
            isArticleTablet && styles.tabletContainer,
            !isArticleTablet && withBylineTooltip && styles.containerWithMargin,
          ]}
        >
          <Label isVideo={hasVideo} label={label} />
          <Text
            style={[
              styles.articleHeadline,
              {
                ...fontFactory({
                  font: headlineFont || "headline",
                  fontSize: isArticleTablet ? "pageHeadline" : "headline",
                }),
              },
              headlineCase ? { textTransform: headlineCase } : null,
            ]}
          >
            {headline}
          </Text>
          <ArticleFlags flags={flags} longRead={longRead} withContainer />
          <Standfirst standfirst={standfirst} />
          <Meta
            articleId={articleId}
            bylines={bylines}
            isArticleTablet={isArticleTablet}
            onAuthorPress={onAuthorPress}
            onTooltipPresented={onTooltipPresented}
            publicationName={publicationName}
            publishedTime={publishedTime}
            tooltips={tooltips}
          />
        </View>
      )}
    </Context.Consumer>
  );
};

ArticleHeader.propTypes = {
  ...articleHeaderPropTypes,
  onAuthorPress: PropTypes.func.isRequired,
};

ArticleHeader.defaultProps = articleHeaderDefaultProps;

export default ArticleHeader;
