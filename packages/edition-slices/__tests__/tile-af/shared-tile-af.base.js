import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile, tile } from "../shared-tile-utils";
import { TileAF } from "../../src/tiles";

export default () => {
  describe("tile af", () => {
    it("shows an image", () => {
      testTile(TileAF, editionBreakpoints.wide, {
        ...tile,
        config: { showImage: true },
      });
    });

    it("medium", () => {
      testTile(TileAF, editionBreakpoints.wide);
    });

    it("wide", () => {
      testTile(TileAF, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileAF, editionBreakpoints.huge);
    });

    it("without breakpoint should be like wide", () => {
      testTile(TileAF);
    });
  });
};
