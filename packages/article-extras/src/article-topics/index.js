import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import ArticleTopics from "@times-components-native/article-topics";
import { useResponsiveContext } from "@times-components-native/responsive";
import styles from "./styles";

const ShowTopics = ({
  topics,
  onPress,
  onTooltipPresented,
  narrowContent,
  tooltips,
  articleId,
}) => {
  const { isTablet, narrowArticleBreakpoint } = useResponsiveContext();

  if (topics && topics.length > 0) {
    return (
      <View
        style={[
          styles.topicsContainer,
          isTablet && styles.topicsContainerTablet,
          narrowContent &&
            styles.narrow && {
              maxWidth: narrowArticleBreakpoint.content,
            },
        ]}
      >
        <ArticleTopics
          onPress={onPress}
          onTooltipPresented={onTooltipPresented}
          topics={topics}
          tooltips={tooltips}
          articleId={articleId}
        />
      </View>
    );
  }

  return null;
};

ShowTopics.propTypes = {
  narrowContent: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  onTooltipPresented: PropTypes.func,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }).isRequired,
  ),
  tooltips: PropTypes.array,
  articleId: PropTypes.string,
};

ShowTopics.defaultProps = {
  narrowContent: false,
  onTooltipPresented: () => null,
  tooltips: [],
  topics: null,
};

export default ShowTopics;
