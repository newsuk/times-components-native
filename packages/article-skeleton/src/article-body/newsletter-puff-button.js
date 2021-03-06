import React from "react";
import PropTypes from "prop-types";

import Button from "@times-components-native/button";
import {
  withTrackingContext,
  withTrackEvents,
} from "@times-components-native/tracking";
import { buttonStyles, textStyle } from "../styles/inline-newsletter-puff";

const NewsletterPuffButton = ({ updatingSubscription, onPress }) => (
  <Button
    title={updatingSubscription ? "Saving…" : "Sign up now"}
    onPress={onPress}
    style={buttonStyles}
    underlayColor="transparent"
    textStyle={textStyle}
  />
);

NewsletterPuffButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  updatingSubscription: PropTypes.bool.isRequired,
};

export default withTrackingContext(
  withTrackEvents(NewsletterPuffButton, {
    analyticsEvents: [
      {
        actionName: "onPress",
        eventName: "onPress",
        trackingName: "NewsletterPuffButton",
        getAttrs: ({ newsletterPuffName }) => ({
          article_parent_name: `${newsletterPuffName}`,
          event_navigation_name: `widget : puff : ${newsletterPuffName}`,
          event_navigation_browsing_method: "click",
        }),
      },
    ],
  }),
  {
    getAttrs: ({ newsletterPuffName }) => ({
      event_navigation_action: "navigation",
      event_navigation_name: `widget : puff : ${newsletterPuffName} : displayed`,
      article_parent_name: `${newsletterPuffName}`,
      event_navigation_browsing_method: "automated",
    }),
    trackingName: "NewsletterPuffButton",
    trackingObjectName: "NewsletterPuffButton",
  },
);
