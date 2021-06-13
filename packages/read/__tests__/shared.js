import React from "react";
import TestRenderer from "react-test-renderer";
import Read from "../index";

it("Shows the text `read` to the user", () => {
  const rendered = TestRenderer.create(<Read />);
  let ScreenText = rendered.root.findByType("Text").props.children;

  expect(ScreenText).toBe("Read");
});
