# Star Button

A star button component which is clickable and has three states: `default`, `selected`, `disabled`

- `StarButton` - wraps a star svg and is clicable.

## How to use

```js
import StarButton from "@times-components-native/star-button";

// works this way
<StarButton onPress={this.onStarPress} />;
<StarButton onPress={this.onStarPress} disabled={true} />;
<StarButton onPress={this.onStarPress} selected={true} />;
```

It changes colours and opacity based on the different state it has.
`default` star is clickable and has default colour.
`disabled` does not allow the star to be clicked.
`selected` would change the star colour.

If `disabled` and `selected` are both true - `disabled` takes precedence.
