import tracking from "../tracking";
import trackEvents from "../track-events";
import trackingContext from "../tracking-context";
import resolveAttrs from "../resolve-attrs";

describe("Tracking tests on android", () => {
  tracking();
  trackEvents();
  trackingContext();
  resolveAttrs();
});
