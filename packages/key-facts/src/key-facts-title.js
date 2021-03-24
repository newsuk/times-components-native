import React from "react";
import { Text } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import propTypes from "./key-facts-title-prop-types";
import styles from "./styles";

const KeyFactsTitle = ({ color, fontStyle, title }) => {
  const { isArticleTablet } = useResponsiveContext();

  return (
    <Text
      style={[
        styles.title,
        isArticleTablet && styles.titleTablet,
        { color },
        fontStyle,
      ]}
    >
      {title.toUpperCase()}
    </Text>
  );
};

KeyFactsTitle.propTypes = propTypes;

export default KeyFactsTitle;
