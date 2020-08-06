import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileDFront } from "../../src/tiles";

export default () => {
  describe("tile d front", () => {
    it("medium", () => {
      testTile(TileDFront, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileDFront, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileDFront, editionBreakpoints.huge);
    });
  });
};
