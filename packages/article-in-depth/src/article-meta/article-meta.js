import React, { Fragment } from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import {
  ArticleBylineWithLinks,
  hasBylineData,
} from "@times-components-native/article-byline";
import Context from "@times-components-native/context";
import DatePublication from "@times-components-native/date-publication";
import { colours } from "@times-components-native/styleguide";

import metaPropTypes from "./article-meta-prop-types";
import styles from "../styles";

const ArticleMeta = ({
  articleId,
  bylines,
  isArticleTablet,
  onAuthorPress,
  onTooltipPresented,
  publicationName,
  publishedTime,
  tooltips,
}) => (
  <View style={isArticleTablet && styles.metaContainerTabletFlow}>
    {hasBylineData(bylines) && (
      <Fragment>
        <View style={styles.meta}>
          <Context.Consumer>
            {({ theme: { sectionColour } }) => (
              <ArticleBylineWithLinks
                articleId={articleId}
                ast={bylines}
                color={sectionColour || colours.section.default}
                onAuthorPress={onAuthorPress}
                onTooltipPresented={onTooltipPresented}
                tooltipArrowOffset={120}
                tooltips={tooltips}
                tooltipOffsetX={isArticleTablet ? -50 : -90}
                tooltipOffsetY={isArticleTablet ? 26 : 40}
              />
            )}
          </Context.Consumer>
        </View>
        {isArticleTablet && <View style={styles.separator} />}
      </Fragment>
    )}
    <View style={styles.meta}>
      <Text
        style={[
          styles.datePublication,
          isArticleTablet && styles.datePulicationTablet,
        ]}
      >
        <DatePublication date={publishedTime} publication={publicationName} />
      </Text>
    </View>
  </View>
);

ArticleMeta.propTypes = {
  ...metaPropTypes,
  onAuthorPress: PropTypes.func.isRequired,
};

export default ArticleMeta;
