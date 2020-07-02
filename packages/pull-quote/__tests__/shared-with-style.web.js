import { AppRegistry } from "react-native-web";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  flattenStyleTransform,
  hoistStyleTransform,
  minimalWebTransform,
  rnwTransform,
  stylePrinter
} from "@times-components-native/jest-serializer";
import shared from "./shared-with-style.base";

jest.mock("@times-components-native/link", () => ({
  TextLink: "TextLink"
}));
jest.mock("@times-components-native/icons", () => ({
  IconTwitter: "IconTwitter"
}));

export default () => {
  const styles = [
    "alignItems",
    "borderLeftWidth",
    "borderLeftColor",
    "color",
    "display",
    "flexDirection",
    "fontFamily",
    "fontSize",
    "height",
    "lineHeight",
    "marginBottom",
    "marginLeft",
    "marginTop",
    "paddingLeft",
    "textDecorationLine"
  ];

  addSerializers(
    expect,
    compose(
      stylePrinter,
      minimalWebTransform,
      flattenStyleTransform,
      hoistStyleTransform,
      rnwTransform(AppRegistry, styles)
    )
  );

  // eslint-disable-next-line global-require
  require("jest-styled-components");

  shared(TestRenderer.create);
};
