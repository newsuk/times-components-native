import React from "react";
import { Platform, View } from "react-native";
import PropTypes from "prop-types";
import { Viewport } from "@skele/components";

import { withTrackEvents } from "@times-components-native/tracking";

const ArticleEndTracking = ({ onViewed }) => {
  if (Platform.OS === "android") return null;

  const ViewportAwareView = Viewport.Aware(View);

  return (
    <ViewportAwareView testID="viewportAwareView" onViewportEnter={onViewed} />
  );
};

ArticleEndTracking.displayName = "ArticleEndTracking";

ArticleEndTracking.defaultProps = {};

ArticleEndTracking.propTypes = {
  onViewed: PropTypes.func.isRequired,
};

export default withTrackingContext(
  withTrackEvents(ArticleEndTracking, {
    analyticsEvents: [
      {
        actionName: "onPress",
        eventName: "onPress",
        getAttrs: () => ({
          event_navigation_action: "navigation",
          event_navigation_name: "article : view end",
          event_navigation_browsing_method: "scroll",
        }),
        trackingName: "ArticleEndTracking",
      },
    ],
  }), {
  getAttrs: ({ newsletterPuffName }) => ({
    event_navigation_action: "navigation",
    event_navigation_name: "article : view end",
    event_navigation_browsing_method: "scroll",
  }),
  trackingName: "ArticleEndTracking",
  trackingObjectName: "ArticleEndTracking",
});
