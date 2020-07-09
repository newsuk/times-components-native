import { withTrackEvents } from "@tcn/tracking";

export default Component =>
  withTrackEvents(Component, {
    analyticsEvents: [
      {
        actionName: "Pressed",
        eventName: "onAuthorPress",
        getAttrs: ({ name, slug }) => ({
          name,
          slug
        }),
        trackingName: "ArticlePressAuthor"
      }
    ]
  });
