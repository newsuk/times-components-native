import { AppRegistry } from "react-native-web";
import {
  addSerializers,
  compose,
  enzymeTreeSerializer,
  minimaliseTransform,
  minimalWebTransform,
  hoistStyleTransform,
  stylePrinter,
  rnwTransform
} from "@times-components-native/jest-serializer";
import shared from "./shared-tile-an.base";

export default () => {
  addSerializers(
    expect,
    enzymeTreeSerializer(),
    compose(
      stylePrinter,
      hoistStyleTransform,
      minimalWebTransform,
      minimaliseTransform((value, key) => key === "style"),
      rnwTransform(AppRegistry, [
        "color",
        "flexWrap",
        "fontFamily",
        "fontSize",
        "fontWeight",
        "lineHeight",
        "marginBottom"
      ])
    )
  );

  shared();
};
