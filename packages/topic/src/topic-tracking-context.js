import { withTrackingContext } from "@tcn/tracking";

export default Component =>
  withTrackingContext(Component, {
    getAttrs: ({ topic, page, pageSize }) => ({
      page,
      pageSize,
      topicName: topic && topic.name
    }),
    trackingObjectName: "Topic"
  });
