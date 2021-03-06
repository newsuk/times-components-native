import React from "react";
import TestRenderer from "react-test-renderer";
import { iterator } from "@times-components-native/test-utils";
import { PlayIcon } from "@times-components-native/video";
import Svg from "react-native-svg";
import { PLAY_ICON_SIZE } from "@times-components-native/video/src/play-icon";

export default () => {
  const tests = [
    {
      name: "PlayIcon with containerWidth of 0",
      test() {
        const testInstance = TestRenderer.create(
          <PlayIcon containerWidth={0} />,
        );

        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root.findByType(Svg).props.width).toBe(
          PLAY_ICON_SIZE.SMALL,
        );
        expect(testInstance.root.findByType(Svg).props.height).toBe(
          PLAY_ICON_SIZE.SMALL,
        );
      },
    },
    {
      name: "PlayIcon with containerWidth of 269",
      test() {
        const testInstance = TestRenderer.create(
          <PlayIcon containerWidth={269} />,
        );

        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root.findByType(Svg).props.width).toBe(
          PLAY_ICON_SIZE.SMALL,
        );
        expect(testInstance.root.findByType(Svg).props.height).toBe(
          PLAY_ICON_SIZE.SMALL,
        );
      },
    },
    {
      name: "PlayIcon with containerWidth of 270",
      test() {
        const testInstance = TestRenderer.create(
          <PlayIcon containerWidth={270} />,
        );

        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root.findByType(Svg).props.width).toBe(
          PLAY_ICON_SIZE.MEDIUM,
        );
        expect(testInstance.root.findByType(Svg).props.height).toBe(
          PLAY_ICON_SIZE.MEDIUM,
        );
      },
    },
    {
      name: "PlayIcon with containerWidth of 563",
      test() {
        const testInstance = TestRenderer.create(
          <PlayIcon containerWidth={563} />,
        );

        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root.findByType(Svg).props.width).toBe(
          PLAY_ICON_SIZE.LARGE,
        );
        expect(testInstance.root.findByType(Svg).props.height).toBe(
          PLAY_ICON_SIZE.LARGE,
        );
      },
    },
    {
      name: "PlayIcon with containerWidth of 755",
      test() {
        const testInstance = TestRenderer.create(
          <PlayIcon containerWidth={755} />,
        );

        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root.findByType(Svg).props.width).toBe(
          PLAY_ICON_SIZE.XLARGE,
        );
        expect(testInstance.root.findByType(Svg).props.height).toBe(
          PLAY_ICON_SIZE.XLARGE,
        );
      },
    },
    {
      name: "PlayIcon with size prop only",
      test() {
        const testInstance = TestRenderer.create(
          <PlayIcon size={PLAY_ICON_SIZE.MEDIUM} />,
        );

        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root.findByType(Svg).props.width).toBe(
          PLAY_ICON_SIZE.MEDIUM,
        );
        expect(testInstance.root.findByType(Svg).props.height).toBe(
          PLAY_ICON_SIZE.MEDIUM,
        );
      },
    },
    {
      name: "PlayIcon with size and containerWidth props",
      test() {
        const testInstance = TestRenderer.create(
          <PlayIcon size={PLAY_ICON_SIZE.LARGE} containerWidth={200} />,
        );

        expect(testInstance).toMatchSnapshot();
        expect(testInstance.root.findByType(Svg).props.width).toBe(
          PLAY_ICON_SIZE.LARGE,
        );
        expect(testInstance.root.findByType(Svg).props.height).toBe(
          PLAY_ICON_SIZE.LARGE,
        );
      },
    },
  ];

  iterator(tests);
};
