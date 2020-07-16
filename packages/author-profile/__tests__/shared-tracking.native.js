import shared from "./shared-tracking.base";
import author from "./fixtures";

export default () =>
  shared({
    analyticsStream() {
      return null;
    },
    author,
    onArticlePress() {
      return null;
    },
    onTwitterLinkPress() {
      return null;
    },
    refetch() {
      return null;
    },
    slug: "some-slug",
  });
