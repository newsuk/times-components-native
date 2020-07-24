# times-components-native [![circleci][circleci-image]][circleci-url]

### Purpose

Home of The Times' `react native` components used in the mobile and tablet apps.

### Dev Environment

We require macOS with [Node.js](https://nodejs.org) (for specific version please check package.json restrictions),
[yarn](https://yarnpkg.com) (latest)

Native development requires:

- [Xcode](https://developer.apple.com/xcode),
- [Android Studio](https://developer.android.com/studio/index.html),
- [JDK 8](http://www.oracle.com/technetwork/java/javase/downloads/java-archive-javase8-2177648.html)

For more details read the React Native [documentation](https://reactnative.dev/docs/environment-setup).

## Getting Started

1. Install [fontforge](http://fontforge.github.io/en-US/): `brew install fontforge` (See [Fonts section](#fonts))

2. Run `yarn install`

3. Components can be seen running in a storybook:

4. `cd ios && pod install && cd -`
5. `yarn storybook-native` and leave it running
6. `yarn ios` to start the iOS app
7. To start the Android app:

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

## Testing

There is a mixture of different checks & tests split acrossing linting, typechecking and unit tests.

```
yarn lint
yarn test:all
yarn test:android
yarn test:ios
yarn test:common
```

## Releases

**Production Releases**:
The release to production pipeline comes with a _hold_ step on CircleCI for builds running on the `master` branch. Once you bump the version in a PR, merge your PR and trigger the `hold_release_prod` step in the build. This will publish the artifacts, for iOS in the artifacts repo and for Android in JFrog.

![Prod@3x](https://user-images.githubusercontent.com/6333409/88397111-64af2600-cdbb-11ea-8f7f-bbcc17d45200.png)

**Beta Releases**:
Similar to the production releases, you can triger builds with the `hold_release_beta` step from all branches (apart from `master`) as long as the version in `package.json` is a beta version (includes the word beta). Once the "hold" step is approved, the pipeline will build and push to the beta artifacts repos (different location to prod).

![Beta@3x](https://user-images.githubusercontent.com/6333409/88397120-67aa1680-cdbb-11ea-871d-ca454c0fb691.png)

**Updating the native apps**:
Once a release is published, you will have to bump the version in the native apps. That would be the `Podfile` for `iOS` and the `build.gradle` file for Android.

## Misc

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

## Contributing

See the [CONTRIBUTING.md](.github/CONTRIBUTING.md) for an extensive breakdown of
the project

[circleci-image]: https://circleci.com/gh/newsuk/times-components-native.svg?style=svg&circle-token=80d0af899358a9d50ea9c157366f319a809d88ae
[circleci-url]: https://circleci.com/gh/newsuk/times-components-native
