import { withTrackEvents } from "@times-components-native/tracking";

export default Component =>
  withTrackEvents(Component, {
    analyticsEvents: [
      {
        actionName: "Pressed",
        eventName: "onPress",
        getAttrs: ({ target, url, children }) => ({
          url,
          target,
          linkText: children[0]
        }),
        trackingName: "ArticleLink"
      }
    ]
  });
