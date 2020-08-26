import React, { useContext } from "react";
import PropTypes from "prop-types";

import Link from "@times-components-native/link";
import { IconForwardArrow } from "@times-components-native/icons";
import {
  withTrackingContext,
  withTrackEvents,
} from "@times-components-native/tracking";
import { colours } from "@times-components-native/styleguide";
import { styleFactory } from "../styles/inline-newsletter-puff";
import { ResponsiveContext } from "@times-components-native/responsive";
import { Text, View } from "react-native";

const NewsletterPuffLink = ({ onPress }) => {
  const { editionBreakpoint: breakpoint } = useContext(ResponsiveContext);
  const styles = styleFactory(breakpoint);
  return (
    <Link url="https://home.thetimes.co.uk/myNews" onPress={onPress}>
      <View style={styles.preferencesView}>
        <Text style={styles.preferencesText}>Manage preferences here</Text>
        <View style={styles.iconContainer}>
          <IconForwardArrow fillColour={colours.functional.action} />
        </View>
      </View>
    </Link>
  );
};

NewsletterPuffLink.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default withTrackingContext(
  withTrackEvents(NewsletterPuffLink, {
    analyticsEvents: [
      {
        actionName: "onPress",
        eventName: "onPress",
        trackingName: "widget : puff : manage preferences here",
      },
    ],
  }),
  { trackingObjectName: "NewsletterPuffLink" },
);
