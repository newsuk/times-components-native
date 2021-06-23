import React from "react";
import TestRenderer from "react-test-renderer";
import Label from "../index";

it("Shows the text `New` in the label", () => {
  const rendered = TestRenderer.create(<Label>New</Label>);
  let ScreenText = rendered.root.findByType("Text").props.children;

  expect(ScreenText).toBe("New");
});
