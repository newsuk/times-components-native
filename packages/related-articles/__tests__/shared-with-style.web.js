import { AppRegistry } from "react-native-web";
import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  hoistStyleTransform,
  minimaliseTransform,
  minimalWebTransform,
  rnwTransform,
  stylePrinter
} from "@times-components-native/jest-serializer";
import { mockNativeModules } from "@times-components-native/mocks";

mockNativeModules();

const styles = [
  "alignItems",
  "borderBottomColor",
  "borderBottomWidth",
  "borderStyle",
  "borderTopColor",
  "borderTopWidth",
  "color",
  "display",
  "fontFamily",
  "fontSize",
  "fontWeight",
  "height",
  "justifyContent",
  "lineHeight",
  "marginBottom",
  "marginTop"
];

jest.mock("@times-components-native/card", () => "Card");
jest.mock("@times-components-native/link", () => "Link");

addSerializers(
  expect,
  enzymeRenderedSerializer(),
  compose(
    stylePrinter,
    minimalWebTransform,
    minimaliseTransform((value, key) => key !== "style" && key !== "className"),
    rnwTransform(AppRegistry, styles),
    hoistStyleTransform
  )
);

// eslint-disable-next-line global-require
require("jest-styled-components");
