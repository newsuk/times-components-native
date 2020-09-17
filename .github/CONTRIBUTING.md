Please take a moment to review this document in order to make the contribution
process easy and effective for everyone involved.

Following these guidelines helps to get issues organised and PRs merged faster!

## Core Ideas

* Components should work across all platforms (web, iOS, Android) to the same
  level of minimum functionality (as determined by UX). This is to ensure that
  master is always in a releasable state and app projects can use our components
  with confidence. To enable this we're using
  [react-native-web](https://github.com/necolas/react-native-web)
* Components should provide a suite of sensible events for their interactions.
  This will allow metric components to report back for a given context
* Screenshots are required for visual changes on web, iOS and Android. Pictures
  are worth a thousand words
* Only add components that are wanted. They should form part of a larger feature
  and not be added in isolation because they might be useful in the future
* Use React perf and Chrome dev tools to identify issues AFTER the code is
  functionally complete

### Convention

* In general we use [yarn](https://yarnpkg.com/en/), add a yarn.lock file and
  keep it up to date for faster builds
* We use
  [Prettier](https://github.com/prettier/prettier) to ensure code consistency
  and reliability, this pattern should also be followed to avoid typical dev
  bike-shedding

### Heuristics

We're using [lerna](https://github.com/lerna/lerna) for the monorepo with each
component in it's own package that should stand alone with it's own tests and
react story etc. A component is published in two ways. A compiled `dist` version
for Native, so the platform doesn't need to worry about various Babel configs,
and a `rnw.js` bundle for web. The `package.json` `main` points at the `dist`
entrypoint and relative paths are used to access the `rnw` bundle.

For ease of use there is a CLI for creating a component. This is the quickest
way to create a package with the required scaffolding which is; a
component,`package.json`, stubbed test and showcase/story. Note that the stubbed
test will fail until a snapshot is created with`jest --updateSnapshot`or a test
run is made without the`--CI` flag.

To use this, in the root of the project run: `./times-components create
component ComponentName "Component Description"`

When developing a component it's easiest to use the
[storybooks](https://github.com/storybooks/storybook) with hot reloading. Make
sure you follow the
[React Native instructions](https://facebook.github.io/react-native/docs/getting-started.html)
to get up and running first. See [README.md](../README.md) for commands to run
the storybook.

### Development gotchas

> #### Caution
>
> There are some problems regarding the usage of native storybooks with the
> Android simulator, mainly with hot module reloading (HMR). To take full
> advantage of HMR while developing components while testing with storybooks use
> the iOS simulator instead.

`npm run storybook:build` will output the built web storybook into the default
`storybook-static` folder that is synced to the `gh_pages` branch to demo the
components in the web

## Component categories

When creating a new component you should specify the most suitable category in
the showcase file. The current categories are:

* <b>Primitive</b> - components that are the basic building blocks from which
  other components can be composed
* <b>Composed</b> - components that are composed of Primitives
* <b>Pages</b> - complex page level components made up from multiple Composed
  and Primitive components
* <b>Helpers</b> - tools, utilities and helpers

For example to add a `Slider` component to the the `Composed` category you just
prefix the category name in the `slider.showcase.js` file.

```
{
  name: "Composed/Slider",
  children: [
  ...showcases here
  ]
}
```

## Submitting a Pull Request

Good pull requests, such as patches, improvements, and new features, are a
fantastic help. They should remain focused in scope and avoid containing
unrelated commits. There should be a single PR for each component/package

Please **ask first** if somebody else is already working on this or the core
developers think your feature is in-scope. Generally always have a related issue
with discussions for whatever you are including.

## Testing

Every component should have a `XXXX.test.js` file with the component's Jest
tests split into the relevant platform folder e.g. `android`, `ios`, `web`.

## Local App Deployment

### Android

Follow these steps to deploy storybook native to a real android device.

* Plug the device into the computer
* Make sure your android device has trusted the connected computer and that `usb
  debugging / developer mode` has been turned on.
* For Android <4.2 go to Developer Options => Enable USB Debugging, and for
  Android >=4.2 go to About Phone/Tablet => Tap Build Number 7 Times =>
  Developer Options => Enable USB Debugging
* Install android tooling through `brew cask install android-platform-tools`
* Optionally start a local instance of
  [The Times Public Api](https://github.com/newsuk/times-public-api) (dependent
  on the stories you intend to view)
* Run `yarn`
* Run `yarn start`
* Run `yarn android:device` (to enable Times API)
* Open [storybook native](http:localhost:7007) on your computer and load a story

#### Troubleshooting

* If your device is complaining about being unable to reach `localhost` or `404`
  use the `adb` commands. Shake the device to bring up the developer menu and
  reload the app
* If still struggling; shake the device and `debug js remotely`. Open a console
  on your computer for more info on the error
* If you're still struggling verify that you are able to run `yarn storybook`
  and that it works in web view.
* If you have issues with jest test not updating to use latest code changes, try
  `yarn jest --clearCache` then run your tests again.

### iOS

#### Other iOS Build Issues

If when trying to run `yarn ios` you receive a `":CFBundleIdentifier", Does Not
Exist` error, either on XCode 10 after attempting the above instructions, or on
a previous version of Xcode, try clearing your React Native cache with

```
rm -r ~/.rncache
```

and clearing third party libraries

```
rm -r node_modules/react-native/third_party
```

This happens when React Native caches third party tools for previous versions of
React Native.

If the above does not work, another approach is to change the XCode build
system. Essentially you delete build artifacts by deleting the contents of your
`Library/Developer/Xcode/DerivedData` folder.

Then choose the [legacy build system](facebook/react-native#19573). Then clean
the XCode project (CMD-Shift-K) and build it again. This did result in a new
directory being created but we have
[.gitignored it for now](https://github.com/newsuk/times-components/pull/1381)
(until RN fix their issues with XCode 10).

### Font Naming Conventions

Android and iOS interpret fonts differently. The style property for `fontFamily`
on iOS refers to the internal post script name of the font. The style property
for `fontFamily` on Android refers to the filename of the font. React Native
Android only supports
[4 font weights](https://github.com/facebook/react-native/blob/master/ReactAndroid/src/main/java/com/facebook/react/views/text/ReactFontManager.java),
therefore we have made the following conventions

Also the fonts should have the correct `weight` and `style` meta attributes

## For all fonts which are; regular, bold, italic, bold and italic variants

### Filename format (physical file name): `<fontname>_<weight>` eg

* TimesDigitalW04.ttf
* TimesDigitalW04_italic.ttf
* TimesDigitalW04_bold.ttf

EXCEPT FOR REGULAR eg

TimesDigitalW04.ttf for a TimesDigitalW04-Regular.ttf font

### FontName format (meta of the font): `<fontname>-<weight>` eg

* TimesDigitalW04-Regular
* TimesDigitalW04-Italic
* TimesDigitalW04-Bold

### Family Name format (meta of the font): `<fontname>` eg

* TimesDigitalW04

## For fonts which have a font weight that is outside of the above font weights and styles

The filename, font name and family name should refer to the complete font file
name

* Filename format: `<fontname>-<weight>`
* Font Name / Full name format : `<fontname>-<weight>`
* Family Name format: `<fontname>-<weight>`

eg

* Filename = GillSansMTStd-Medium
* FontName / Full name = GillSansMTStd-Medium
* FamilyName = GillSansMTStd-Medium


### Overview of project directory structure

* `./app/storybook/` is home to the generated `story-loader.js` from the
  `yarn start` script, and the storybook bootstrapping
* android, ios, .babelrc, .buckconfig, .gitattributes, .watchmanconfig, app.json
  are all from a stock react-native project in order to run the native storybook

## Setting Up a Local Copy

1. Clone the repo with `https://github.com/newsuk/times-components-native.git`

2. Run `yarn` in the root folder.

Once it is done, you can run `yarn start` which will start the react-native server.

## Provider Queries package

The `Provider Queries package` is home to any GraphQL queries that should be
shared across the various platforms. The
[Times Public API](https://github.com/newsuk/times-public-api) schema is
generated in the `schema` package which should be updated when any fields are
changed. The packages linting will then check that each of the `gql` queries
within the package are properly formed

## Cutting a Release

Each component should be bumped and published correctly when it is merged to
master and has passed the CI process

_This was heavily sourced from
[CRA](https://github.com/facebookincubator/create-react-app/edit/master/CONTRIBUTING.md)_
