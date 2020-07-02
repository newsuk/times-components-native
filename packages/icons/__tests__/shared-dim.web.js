import { mount } from "enzyme";
import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  print,
  propsNoChildren,
  replacePropTransform,
  replaceTransform
} from "@times-components-native/jest-serializer";
import { hash } from "@times-components-native/test-utils";
import shared from "./shared-dim.base";
import longKeysSet from "./shared-long-keys-set";

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(
      print,
      replaceTransform({
        svg: propsNoChildren
      }),
      minimaliseTransform((value, key) => key === "style" || key === "viewBox"),
      replacePropTransform(
        (value, key) =>
          longKeysSet.has(key) ? hash(JSON.stringify(value)) : value
      )
    )
  );

  shared(mount);
};
