import memoize from "memoize-one";

import { setupAd } from "./setupAd";
import { setupDropCap } from "./setupDropCap";
import { setupInlineContent } from "./setupInlineContent";

export { getStringBounds } from "./getStringBounds";

export default memoize((skeletonProps) => {
  return setupInlineContent(
    skeletonProps,
    setupDropCap(skeletonProps, setupAd(skeletonProps)),
  );
});
