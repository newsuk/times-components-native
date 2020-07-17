// eslint-disable-next-line import/no-extraneous-dependencies
import { createSerializer } from "enzyme-to-json";

const compose = (printer, ...transformers) =>
  traverse(printer, (accum, node, props, children) =>
    transformers.reduce(
      ({ accum: a, node: n, props: p, children: c }, transformer) => {
        if (!n) {
          return {
            accum: a,
            children: c,
            node: n,
            props: p,
          };
        }

        return transformer(a, n, p, c);
      },
      {
        accum,
        children,
        node,
        props,
      },
    ),
  );

const addSerializers = (expect, ...serializers) => {
  serializers.forEach((serializer) => expect.addSnapshotSerializer(serializer));
};

const enzymeRenderedSerializer = () => createSerializer({ mode: "deep" });

const enzymeRootSerializer = () => createSerializer({ mode: "shallow" });

const enzymeTreeSerializer = () => createSerializer();

export {
  default as minimalise,
  minimaliseTransform,
  minimalNative,
  minimalNativeTransform,
} from "./minimalise";
export {
  default as flattenStyle,
  flattenStyleTransform,
} from "./flatten-style";
export {
  default as replace,
  justChildren,
  meltNative,
  propsNoChildren,
  replaceTransform,
} from "./replace";
export { default as replaceProp, replacePropTransform } from "./replace-prop";
export { hoistStyle, hoistStyleTransform } from "./hoist-style";
import traverse from "./traverse";
export { default as print, stylePrinter } from "./printers";

export {
  addSerializers,
  compose,
  enzymeRenderedSerializer,
  enzymeRootSerializer,
  enzymeTreeSerializer,
};
