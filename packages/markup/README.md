# Markup

This package is for core rendering of components such as `paragraph`, `text` or
`link`. Consumers provide an Abstract Syntax Tree (AST) to the traversal
functions from `markup-forest`, which iterates over and renders with the given
`renderer` functions. This packages provides those core renderers.

## Renderers

- bold
- block
- break
- emphasis
- inline
- italic
- paragraph
- strong
- text

This package should only have core renderers with no dependencies beyond
React/React Native. If a consumer would like to support more complex elements
they'll need to provide renderers for them.

## How to use

```js
import { renderTrees } from "@times-components-native/markup-forest";
import coreRenderers from "@times-components-native/markup";

const data = [
  {
    name: "inline",
    attributes: {},
    children: [
      {
        name: "text",
        attributes: {
          value: "Some text value here"
        },
        children: []
      }
    ]
  }
];

renderTrees(data, coreRenderers);

/*
native

<Text>
  Some text value here
</Text>

*/
```
