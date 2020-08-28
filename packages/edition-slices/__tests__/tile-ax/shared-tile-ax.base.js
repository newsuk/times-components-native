import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileAX } from "../../src/tiles";

export default () => {
  describe("tile ax", () => {
    it("medium", () => {
      testTile(TileAX, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileAX, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAX, editionBreakpoints.huge);
    });
  });
};
