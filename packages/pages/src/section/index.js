import React from "react";
import PropTypes from "prop-types";

import Responsive from "@times-components-native/responsive";
import Section from "./section";

const SectionPage = (props) => (
  <Responsive
    displayWidth={props.displayWidth}
    displayHeight={props.displayHeight}
    fontScale={props.fontScale}
  >
    <Section {...props} section={JSON.parse(props.section)} />
  </Responsive>
);

SectionPage.propTypes = {
  publicationName: PropTypes.string,
  recentlyOpenedPuzzleCount: PropTypes.number,
  section: PropTypes.string.isRequired,
  displayHeight: PropTypes.number,
  displayWidth: PropTypes.number,
  fontScale: PropTypes.number,
};

SectionPage.defaultProps = {
  publicationName: "TIMES",
  recentlyOpenedPuzzleCount: 0,
};

export default SectionPage;
