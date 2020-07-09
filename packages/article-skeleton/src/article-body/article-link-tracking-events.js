import { withTrackEvents } from "@tcn/tracking";

export default Component =>
  withTrackEvents(Component, {
    analyticsEvents: [
      {
        actionName: "Pressed",
        eventName: "onPress",
        getAttrs: ({ linkType, url }) => ({
          linkType,
          linkUrl: url
        }),
        trackingName: "ArticleLink"
      }
    ]
  });
