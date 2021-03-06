import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import styleguide from "@times-components-native/styleguide";

const { colours, fontFactory } = styleguide();
const styles = StyleSheet.create({
  message: {
    color: colours.functional.secondary,
    ...fontFactory({
      font: "supporting",
      fontSize: "pagingMeta",
    }),
    paddingTop: 4,
  },
});

const ResultsMessage = ({ children: message }) => (
  <Text style={styles.message} testID="results-message">
    {message}
  </Text>
);

ResultsMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ResultsMessage;
