import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileBF } from "../../src/tiles";

export default () => {
  describe("tile bf", () => {
    it("medium", () => {
      testTile(TileBF, editionBreakpoints.medium);
    });

    it("wide", () => {
      testTile(TileBF, editionBreakpoints.wide);
    });

    it("huge", () => {
      testTile(TileBF, editionBreakpoints.huge);
    });

    it("without breakpoint should be like medium", () => {
      testTile(TileBF);
    });
  });
};
