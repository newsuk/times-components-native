import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileALFront } from "../../src/tiles";

export default () => {
  describe("tile al front", () => {
    it("medium", () => {
      testTile(TileALFront, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileALFront, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileALFront, editionBreakpoints.huge);
    });
  });
};
