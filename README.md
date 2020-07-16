# times-components-native [![circleci][circleci-image]][circleci-url]

### Purpose

Home of The Times' `react native` components used in the mobile and tablet apps.

### Dev Environment

We require MacOS with [Node.js](https://nodejs.org) (for specific version please check package.json restrictions),
[yarn](https://yarnpkg.com) (latest)

Native development
requires [Xcode](https://developer.apple.com/xcode),
[Android Studio](https://developer.android.com/studio/index.html),
[JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html) and
[pip](https://pip.pypa.io/en/stable/installing/).

You can try without these requirements, but you'd be on your own.

## Viewing Our Components

Go to http://components.thetimes.co.uk

## Getting Started

1. Install [fontforge](http://fontforge.github.io/en-US/): `brew install fontforge` (See [Fonts section](#fonts))

2. Run `yarn install`

3. Components can be seen running in a storybook:

1. `cd ios && pod install && cd -`
2. `yarn storybook-native` and leave it running
3. `yarn ios` to start the iOS app
4. To start the Android app:
 - [Start a virtual device](https://developer.android.com/studio/run/managing-avds.html)
 - Check Android SDK path is exported to \$ANDROID_HOME. In Mac, android sdk
   is installed to ~/Library/Android/sdk by default. `export ANDROID_HOME="/Users/<USERNAME>/Library/Android/sdk"`
 - `yarn android`
 - If you get build errors, check your JDK version with `javac -version`,
   which should print `javac 1.8.XXXX`. Earlier or later versions may not
   work.

## Native App Dev Server

In order to run development servers for native applications, start react-native dev
server via:

`yarn android:app` or `yarn ios:app`

For step by step guide, see the corresponding Readme documentation for [android](./android-app/README.md) and [ios](./ios-app/README.md)

## Development

The code can be formatted and linted in accordance with the agreed standards.

```
yarn fmt
yarn lint
```

## Testing

This package uses [yarn](https://yarnpkg.com) (latest) to run unit tests on each
platform with [jest](https://facebook.github.io/jest/).

```
yarn test:all
yarn test:android
yarn test:ios
yarn test:common
```

### Fonts ⚠️

In order to view the storybook on native, you'll need to fix broken fonts. This
fix is done automatically when running storybook (both web and native), but
requires that [fontforge](http://fontforge.github.io/en-US/) is installed,
otherwise the fix won't be applied and you'll get the classic red error screen
when trying to use a broken font.

### Schema

See [utils package](packages/utils/README.md) on how to update the schema

## Debugging

The components in this project can be debugged through your browser's developer
tools. These steps assume the use of Chrome DevTools.

To debug our native Storybook:

1. `yarn storybook-native` and leave it running
2. `yarn android:logs` or `yarn ios:logs` (this will build storybook app and output logs)
   2a. Or you could just run `yarn android` or `yarn ios` to just build the apps
3. open the developer menu on your device (Cmd + M on Android, Cmd + D on iOS)
   and tap _Debug JS Remotely_
4. navigate to http://localhost:8081/debugger-ui if it hasn't opened
   automatically
5. open DevTools
6. click _Sources_
7. expand _debuggerWorker.js_ => _webpack://_ => _._ => _packages_

## Link times-components to the Render project

Follow these steps [here](https://github.com/newsuk/cps-content-render#locally-mount-your-custom-build-of-times-components)

## Debugging the tests

Tests are currently using [jest](https://jestjs.io/) to run so if you want to debug any test follow these steps:

1. (FIND YOUR TEST COMMAND) `jest --config="./test-setup/jest.android.config.js"`. Depending on whether you want to run android/ios/common unit tests, the `--config` directory may differ.

2. (START TESTS IN DEBUG MODE) We need to start the same command but through node while in debug mode like so:
   `node --inspect-brk ./node_modules/.bin/jest --config="./test-setup/jest.android.config.js" --runInBand`

> NOTE: `--runInBand` is a `jest` flag that runs all tests serially in the current process. If we don't add this flag, only the node process that started `jest` will be debuggable.

4. (ADD DEBUG STATEMENTS) Normally we would add breakpoints, but when remote debugging that's not always possible, because the files we need to put the breakpoints on aren't loaded yet by `jest`. So in order to make the debugger stop where we want it to, we need to add [`debugger;`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statements instead of breakpoints in the code and re-transpile if necessary.

5. (ATTACH TO WEB SOCKET) Once we've started the tests in debug mode, we need to attach to it:

- (RECOMMENDED) use chrome remote debug for node:

  1. open `chrome://inspect` in chrome address bar
  2. `Open dedicated DevTools for Node` button
  3. If you've started the tests with the aforementioned command it should automatically connect, but if it doesn't go to the `Connection` tab of the pop-up window and add connection `localhost:9229` or whatever your port is
  4. The debugger should stop on the first line because of the `--inspect-brk` flag and once you press the play button (resume execution) it should stop on your `debugger;` statement

  > NOTE: once it stops you may see all of your code is bundled up in one line. There's an easy fix for that: at the bottom of the debug window near the `Line: 1 Column: 1` labels you should see a `{}` button that will prettify your code and you will still be able to debug properly.

- (Use VSCode) Config should look close to this:

```json
...
    "configurations": [
      {
          "localRoot": "${workspaceFolder}/packages/provider", //change this depending on what test you're debugging
          "remoteRoot": "${workspaceFolder}/packages/provider", //change this depending on what test you're debugging
          "type": "node",
          "request": "attach",
          "name": "Attach to Server on 9229",
          "address": "127.0.0.1",
          "port": 9229
      }
  ]
```

## Contributing

See the [CONTRIBUTING.md](.github/CONTRIBUTING.md) for an extensive breakdown of
the project

[circleci-image]: https://circleci.com/gh/newsuk/times-components-native.svg?style=svg&circle-token=80d0af899358a9d50ea9c157366f319a809d88ae
[circleci-url]: https://circleci.com/gh/newsuk/times-components-native
