import { withTrackEvents } from "@times-components-native/tracking";

const withArticleSaveTracking = Component =>
  withTrackEvents(Component, {
    analyticsEvents: [
      {
        actionName: "Pressed",
        eventName: "onArticleSavePress",
        getAttrs: ({ articleId, savedArticles }) => ({
          articleId,
          isSaved: !savedArticles[articleId]
        }),
        trackingName: "ArticleSave/Unsave"
      }
    ]
  });

export default withArticleSaveTracking;
