import "../mocks-tiles";
import { editionBreakpoints } from "@times-components-native/styleguide";
import { testTile } from "../shared-tile-utils";
import { TileBD } from "../../src/tiles";

export default () => {
  describe("tile bd", () => {
    it("without breakpoint", () => {
      testTile(TileBD);
    });

    it("medium", () => {
      testTile(TileBD, editionBreakpoints.medium, undefined);
    });

    it("wide", () => {
      testTile(TileBD, editionBreakpoints.wide, undefined);
    });
  });
};
