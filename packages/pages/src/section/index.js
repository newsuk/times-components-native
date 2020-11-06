import React from "react";
import PropTypes from "prop-types";

import Responsive from "@times-components-native/responsive";
import Section from "./section";

const SectionPage = (props) => (
  <Responsive
    initialWidth={props.displayWidth}
    initialHeight={props.displayHeight}
    initialFontScale={props.fontScale}
  >
    <Section {...props} section={JSON.parse(props.section)} />
  </Responsive>
);

SectionPage.propTypes = {
  publicationName: PropTypes.string,
  recentlyOpenedPuzzleCount: PropTypes.number,
  section: PropTypes.string.isRequired,
};

SectionPage.defaultProps = {
  publicationName: "TIMES",
  recentlyOpenedPuzzleCount: 0,
};

export default SectionPage;
