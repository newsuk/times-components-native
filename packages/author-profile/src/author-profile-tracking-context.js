import get from "lodash.get";
import { withTrackingContext } from "@tcn/tracking";

export default Component =>
  withTrackingContext(Component, {
    getAttrs: ({ author, page, pageSize }) => ({
      articlesCount: get(author, "articles.count", 0),
      authorName: author && author.name,
      page,
      pageSize
    }),
    trackingObjectName: "AuthorProfile"
  });
