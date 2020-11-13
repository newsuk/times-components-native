import React from "react";

import { useAppContext } from "@times-components-native/context";
import PullQuotes from "../src/pull-quote";

jest.mock("@times-components-native/context");

const content = "Some content";
const caption = "A caption";
const twitter = "@twitter";

export default (renderComponent) => {
  it("different colours", () => {
    useAppContext.mockImplementation(() => ({
      theme: { sectionColour: "#850029" },
    }));

    const output = renderComponent(
      <PullQuotes
        caption={caption}
        onTwitterLinkPress={() => null}
        twitter={twitter}
      >
        {content}
      </PullQuotes>,
    );

    expect(output).toMatchSnapshot();
  });
};
