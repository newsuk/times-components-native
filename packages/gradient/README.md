# Gradient

The gradient component wraps any children and adds a gradient background. The
gradient's angle can be configured by the consumer of gradient. There are two
exported components:

- `Gradient` - used for image placeholders and loading screens
- `OverlayGradient` - developed for use when overlaying text over parts of an
  image

## How to use

```js
import Gradient, { OverlayGradient } from "@times-components-native/gradient";

// Works on it's own
<Gradient
  degrees={90}
  style={{
    width: 200,
    height: 200
  }}>
</Gradient>

// Works with children
<OverlayGradient
  degrees={90}
  style={{
    width: 200,
    height: 200
  }}>
  <Text>Example text</Text>
</OverlayGradient>
```

