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
  bylines,
  isTablet,
  onAuthorPress,
  publicationName,
  publishedTime,
}) => (
  <View style={isTablet && styles.metaContainerTabletFlow}>
    {hasBylineData(bylines) && (
      <Fragment>
        <View style={styles.meta}>
          <Context.Consumer>
            {({ theme: { sectionColour } }) => (
              <ArticleBylineWithLinks
                ast={bylines}
                color={sectionColour || colours.section.default}
                onAuthorPress={onAuthorPress}
                disableTooltip={true}
              />
            )}
          </Context.Consumer>
        </View>
        {isTablet && <View style={styles.separator} />}
      </Fragment>
    )}
    <View style={styles.meta}>
      <Text
        style={[
          styles.datePublication,
          isTablet && styles.datePulicationTablet,
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
