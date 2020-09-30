import { withTrackEvents } from "@times-components-native/tracking";

export default (Component) =>
  withTrackEvents(Component, {
    analyticsEvents: [
      {
        actionName: "Pressed",
        eventName: "onPress",
        getAttrs: ({ item: { id, title, strapline, mainLink } }) => ({
          id,
          title,
          strapline,
          articleId: mainLink.articleId ? mainLink.articleId : "",
          url: mainLink.url ? mainLink.url : "",
        }),
        trackingName: "InTodaysEdition",
      },
    ],
  });
