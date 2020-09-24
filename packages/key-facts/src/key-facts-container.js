import React from "react";
import { View } from "react-native";
import { useResponsiveContext } from "@times-components-native/responsive";
import propTypes from "./key-facts-shared-prop-types";
import styles from "./styles";

const KeyFactsContainer = ({ children }) => {
  const { isTablet } = useResponsiveContext();
  return (
    <View style={[styles.container, isTablet && styles.containerTablet]}>
      {children}
    </View>
  );
};

KeyFactsContainer.propTypes = propTypes;

export default KeyFactsContainer;
