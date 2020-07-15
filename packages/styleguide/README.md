# Styleguide

The styleguide package contains the shared styles and functionalities which are
commonly used across Times Components packages and components. Many of the
properties of the styleguide can be simply exported as named exports:

```
import { colours, spacing } from "@times-components-native/styleguide";
```

However, the default export is a factory method which takes a configuration
object.

## Configuration

The styleguide default method can be called much like a factory funtion with a
config object. This object includes a scale property which manages the
user-controlled font size settings:

```
import styleguide from "@times-components-native/styleguide";

const { colours, fontFactory, spacing } = styleguide({ scale });
```

## Animations

A cross-device component called `FadeIn` which animates a fade in

## Colours

Exports functional or section based colours.

## Fonts

Times Components fonts and font sizes.

## Font factory

The `fontFactory` method takes a `font` and `fontSize`, and returns an object
containing the appropriate font style properties, including a `lineHeight`.

## Line heights

Times Componets line heights. This is utilised as part of the font factory
scaling.

## Spacing

Provides a way to standardise layout, particularly in regards to the concept of
a consistent spacing layout across multiple breakpoints.

