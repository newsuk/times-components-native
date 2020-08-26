import React from "react";
import { Text, View } from "react-native";
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
  flags,
  hasVideo,
  headline,
  label,
  longRead,
  publicationName,
  publishedTime,
  standfirst,
}) => (
  <Context.Consumer>
    {({ theme: { headlineFont, headlineCase } }) => (
      <View style={styles.header}>
        <View style={styles.container}>
          <Label isVideo={hasVideo} label={label} />
          <Text
            style={[
              styles.articleHeadline,
              {
                ...fontFactory({
                  font: headlineFont || "headline",
                  fontSize: "tabletCommentHeadline",
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
            hasStandfirst={standfirst}
            publicationName={publicationName}
            publishedTime={publishedTime}
          />
        </View>
      </View>
    )}
  </Context.Consumer>
);

ArticleHeader.propTypes = {
  ...articleHeaderPropTypes,
};

ArticleHeader.defaultProps = articleHeaderDefaultProps;

export default ArticleHeader;
