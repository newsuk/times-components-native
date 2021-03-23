import React from "react";
import { View } from "react-native";
import PropTypes from "prop-types";
import { Viewport } from "@skele/components";

import { withTrackEvents } from "@times-components-native/tracking";

const ArticleEndTracking = ({ onViewed }) => {
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

export default withTrackEvents(ArticleEndTracking, {
  analyticsEvents: [
    {
      actionName: "onViewed",
      eventName: "onViewed",
      getAttrs: () => ({
        event_navigation_action: "navigation",
        event_navigation_name: "article : view end",
        event_navigation_browsing_method: "scroll",
      }),
      trackingName: "ArticleEndTracking",
    },
  ],
});
