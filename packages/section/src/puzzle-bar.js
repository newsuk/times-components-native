import React from "react";
import { Text, View } from "react-native";
import PropTypes from "prop-types";
import { SectionContext } from "@times-components-native/context";
import { IconForwardArrow } from "@times-components-native/icons";
import { colours } from "@times-components-native/styleguide";
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
            <IconForwardArrow fillColour={colours.section.puzzle} height={12} />
          </View>
        </View>
      ) : null
    }
  </SectionContext.Consumer>
);

PuzzleBar.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default PuzzleBar;
