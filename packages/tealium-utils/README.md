# Tealium Utils

Like the tealium package, this package is web-only. Mobile tracking is managed
natively. This package simply sets up a "dev" instance of the Tealium reporter
for usage in the Times Components showcases. Showcases typically import this
method and pass it to any component that utilises the tracking package.

```
import storybookReporter from "@times-components-native/tealium-utils";

...
<MyTrackedComponent analyticsStream={storybookReporter} />
```

Events can be tested and validated in the showcases by clicking on the "Action
Logger" tab at the bottom of the showcase. This utilises
[@storybook/addon-actions](https://github.com/storybooks/storybook/tree/master/addons/actions).
