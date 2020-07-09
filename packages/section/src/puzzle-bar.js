import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { SectionContext } from "@tcn/context";
import { IconForwardArrow } from "@tcn/icons";
import { colours } from "@tcn/styleguide";
import styleFactory from "./styles";

const styles = styleFactory();

const PuzzleBar = ({ onPress }) => (
  <SectionContext.Consumer>
    {({ recentlyOpenedPuzzleCount: count }) =>
      count ? (
        <View style={styles.puzzleBarContainer}>
          <Text onPress={onPress} style={styles.puzzleBarText}>
            {count} recently opened puzzle
            {count > 1 && "s"}
          </Text>
          <View style={styles.puzzleBarArrow}>
            <IconForwardArrow fillColour={colours.section.puzzle} />
          </View>
        </View>
      ) : null
    }
  </SectionContext.Consumer>
);

PuzzleBar.propTypes = {
  onPress: PropTypes.func.isRequired
};

export default PuzzleBar;
