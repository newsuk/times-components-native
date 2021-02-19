/* eslint-disable global-require */
import React from "react";

import { MockEdition } from "@times-components-native/fixture-generator";
import { SectionContext } from "@times-components-native/context";
import { editionBreakpoints } from "@times-components-native/styleguide";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  minimaliseTransform,
  minimalNativeTransform,
  print,
} from "@times-components-native/jest-serializer";
import TestRenderer from "react-test-renderer";
import PuzzleBar from "../src/puzzle-bar";
import Section from "../src/section";
import SectionItemSeparator from "../src/section-item-separator";
import { getSliceIndexByArticleId } from "../src/utils";

// fixes issues with hooks not being allowed during test run
jest.mock("react", () => {
  const react = require.requireActual("react");
  return react;
});
jest.mock("@times-components-native/responsive", () => ({
  useResponsiveContext: () => ({ isTablet: true, editionBreakpoint: "small" }),
}));
jest.mock("@times-components-native/edition-slices/src/slices", () => {
  const sliceMap = require.requireActual(
    "@times-components-native/edition-slices/src/slices",
  );
  const slicesMock = {};
  Object.keys(sliceMap).forEach((key) => {
    slicesMock[key] = key;
  });
  return slicesMock;
});

jest.mock("@times-components-native/icons", () => ({
  IconForwardArrow: "IconForwardArrow",
}));
jest.mock("@times-components-native/image", () => ({
  __esModule: true,
  default: "TimesImage",
}));

jest.mock("../src/utils", () => {
  const utils = require.requireActual("../src/utils");
  return {
    ...utils,
    getSliceIndexByArticleId: jest.fn(),
  };
});

export default () => {
  beforeEach(() => {
    jest.resetModules();
  });

  addSerializers(
    expect,
    compose(
      print,
      flattenStyleTransform,
      minimalNativeTransform,
      minimaliseTransform((value, key) => key !== "style"),
    ),
  );

  it("section page", () => {
    const edition = new MockEdition().get();

    expect(
      TestRenderer.create(
        <Section
          analyticsStream={() => null}
          onArticlePress={() => null}
          onPuzzleBarPress={() => null}
          onPuzzlePress={() => null}
          publicationName="TIMES"
          recentlyOpenedPuzzleCount={1}
          section={edition.sections[0]}
        />,
      ).toJSON(),
    ).toMatchSnapshot();

    expect(getSliceIndexByArticleId).not.toHaveBeenCalled();
  });

  it("should render Secondary 2 No Pic and 2 instead of Secondary 2 and 2 for tablet", () => {
    const edition = new MockEdition().get();

    expect(
      TestRenderer.create(
        <Section
          analyticsStream={() => null}
          onArticlePress={() => null}
          onPuzzleBarPress={() => null}
          onPuzzlePress={() => null}
          publicationName="TIMES"
          recentlyOpenedPuzzleCount={1}
          section={edition.sections[5]}
        />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("puzzle bar with no puzzles", () => {
    expect(
      TestRenderer.create(
        <SectionContext.Provider value={{ recentlyOpenedPuzzleCount: 0 }}>
          <PuzzleBar onPress={() => null} />
        </SectionContext.Provider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("puzzle bar with one puzzle", () => {
    expect(
      TestRenderer.create(
        <SectionContext.Provider value={{ recentlyOpenedPuzzleCount: 1 }}>
          <PuzzleBar onPress={() => null} />
        </SectionContext.Provider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("puzzle bar with more than one puzzle", () => {
    expect(
      TestRenderer.create(
        <SectionContext.Provider value={{ recentlyOpenedPuzzleCount: 3 }}>
          <PuzzleBar onPress={() => null} />
        </SectionContext.Provider>,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("Times magazine section", () => {
    const edition = new MockEdition().get();

    expect(
      TestRenderer.create(
        <Section
          analyticsStream={() => null}
          onArticlePress={() => null}
          onPuzzleBarPress={() => null}
          onPuzzlePress={() => null}
          publicationName="TIMES"
          section={edition.sections[4]}
        />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("Sunday Times magazine section", () => {
    const edition = new MockEdition().get();

    expect(
      TestRenderer.create(
        <Section
          analyticsStream={() => null}
          onArticlePress={() => null}
          onPuzzleBarPress={() => null}
          onPuzzlePress={() => null}
          publicationName="SUNDAY TIMES"
          section={edition.sections[4]}
        />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("Front Page section", () => {
    const edition = new MockEdition().get();

    expect(
      TestRenderer.create(
        <Section
          analyticsStream={() => null}
          onArticlePress={() => null}
          onPuzzleBarPress={() => null}
          onPuzzlePress={() => null}
          publicationName="TIMES"
          recentlyOpenedPuzzleCount={1}
          section={edition.sections[6]}
          debug
        />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("section item separator - small", () => {
    expect(
      TestRenderer.create(
        <SectionItemSeparator breakpoint={editionBreakpoints.small} />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("section item separator - medium", () => {
    expect(
      TestRenderer.create(
        <SectionItemSeparator breakpoint={editionBreakpoints.medium} />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("section item separator - wide", () => {
    expect(
      TestRenderer.create(
        <SectionItemSeparator breakpoint={editionBreakpoints.wide} />,
      ).toJSON(),
    ).toMatchSnapshot();
  });

  it("section item separator - huge", () => {
    expect(
      TestRenderer.create(
        <SectionItemSeparator breakpoint={editionBreakpoints.huge} />,
      ).toJSON(),
    ).toMatchSnapshot();
  });
};
