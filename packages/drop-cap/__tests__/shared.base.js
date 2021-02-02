import React from "react";
import TestRenderer from "react-test-renderer";

import DropCap from "../src/drop-cap";

export default () => {
  describe("DropCap", () => {
    it("renders a dropcap for medium scale", () => {
      const props = {
        dropCapColor: "#13354E",
        dropCapFont: "dropCap",
        dropCapFontSize: 108,
        dropCapText: "A",
        height: 72.468,
        scale: "medium",
        width: 88.992,
      };

      const renderer = TestRenderer.create(<DropCap {...props} />);

      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders a dropcap for large scale", () => {
      const props = {
        dropCapColor: "#13354E",
        dropCapFont: "dropCap",
        dropCapFontSize: 126,
        dropCapText: "A",
        height: 84.546,
        scale: "large",
        width: 103.824,
      };

      const renderer = TestRenderer.create(<DropCap {...props} />);

      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders a dropcap for xlarge scale", () => {
      const props = {
        dropCapColor: "#13354E",
        dropCapFont: "dropCap",
        dropCapFontSize: 138,
        dropCapText: "A",
        height: 92.598,
        scale: "xlarge",
        width: 113.712,
      };

      const renderer = TestRenderer.create(<DropCap {...props} />);

      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders a dropcap with default scale if provided scale unknown", () => {
      const props = {
        dropCapColor: "#13354E",
        dropCapFont: "dropCap",
        dropCapFontSize: 108,
        dropCapText: "A",
        height: 72.468,
        scale: "unknown scale",
        width: 88.992,
      };

      const renderer = TestRenderer.create(<DropCap {...props} />);

      expect(renderer.toJSON()).toMatchSnapshot();
    });

    it("renders a dropcap with default font padding if provided font not in map", () => {
      const props = {
        dropCapColor: "#13354E",
        dropCapFont: "body",
        dropCapFontSize: 108,
        dropCapText: "A",
        height: 72.468,
        scale: "medium",
        width: 88.992,
      };

      const renderer = TestRenderer.create(<DropCap {...props} />);

      expect(renderer.toJSON()).toMatchSnapshot();
    });
  });
};
