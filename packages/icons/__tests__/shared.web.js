import { mount } from "enzyme";
import {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  minimaliseTransform,
  print,
  replacePropTransform
} from "@times-components-native/jest-serializer";
import { hash } from "@times-components-native/test-utils";
import shared from "./shared.base";
import longKeysSet from "./shared-long-keys-set";

export default () => {
  addSerializers(
    expect,
    enzymeRenderedSerializer(),
    compose(
      print,
      minimaliseTransform((value, key) => key === "style"),
      replacePropTransform(
        (value, key) =>
          longKeysSet.has(key) ? hash(JSON.stringify(value)) : value
      )
    )
  );

  shared(mount);
};
