import { AppRegistry } from "react-native-web";
import TestRenderer from "react-test-renderer";
import {
  addSerializers,
  compose,
  minimaliseTransform,
  minimalWebTransform,
  print,
  rnwTransform
} from "@times-components-native/jest-serializer";
import shared from "./shared.base";

jest.mock("@times-components-native/link", () => ({
  TextLink: "TextLink"
}));
jest.mock("@times-components-native/icons", () => ({
  IconTwitter: "IconTwitter"
}));

export default () => {
  addSerializers(
    expect,
    compose(
      print,
      minimalWebTransform,
      minimaliseTransform(
        (value, key) => key === "style" || key === "className"
      ),
      rnwTransform(AppRegistry)
    )
  );

  shared(TestRenderer.create);
};
