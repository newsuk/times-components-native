import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import {
  ArticleBylineWithLinks,
  hasBylineData
} from "@tcn/article-byline";
import Context from "@tcn/context";
import DatePublication from "@tcn/date-publication";
import { colours } from "@tcn/styleguide";

import metaPropTypes from "./article-meta-prop-types";
import styles from "../styles";

const Separator = () => <View style={styles.separator} />;

const ArticleMeta = ({
  bylines,
  isTablet,
  onAuthorPress,
  publicationName,
  publishedTime
}) => (
  <View style={[styles.metaContainer, isTablet && styles.metaContainerTablet]}>
    {hasBylineData(bylines) && (
      <View style={[styles.meta, isTablet && styles.metaTablet]}>
        <Context.Consumer>
          {({ theme: { sectionColour } }) => (
            <ArticleBylineWithLinks
              ast={bylines}
              color={sectionColour || colours.section.default}
              onAuthorPress={onAuthorPress}
            />
          )}
        </Context.Consumer>
      </View>
    )}
    {isTablet ? <Separator /> : null}
    <View style={[styles.meta, isTablet && styles.metaTablet]}>
      <Text
        style={[
          styles.datePublication,
          isTablet && styles.datePublicationTablet
        ]}
      >
        <DatePublication date={publishedTime} publication={publicationName} />
      </Text>
    </View>
  </View>
);

ArticleMeta.propTypes = {
  ...metaPropTypes,
  onAuthorPress: PropTypes.func.isRequired
};

export default ArticleMeta;
