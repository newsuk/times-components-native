import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileBB } from "../../src/tiles";

export default () => {
  describe("tile bb", () => {
    describe("landscape", () => {
      it("medium", () => {
        testTile(TileBB, editionBreakpoints.medium, undefined, {
          orientation: "landscape",
        });
      });

      it("wide", () => {
        testTile(TileBB, editionBreakpoints.wide, undefined, {
          orientation: "landscape",
        });
      });

      it("huge", () => {
        testTile(TileBB, editionBreakpoints.huge, undefined, {
          orientation: "landscape",
        });
      });
    });
  });
};
