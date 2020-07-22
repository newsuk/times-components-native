#!/usr/bin/env bash
set -e

REPO_SLUG="newsuk/times-components-ios-artifacts"
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | sed 's/[\",\t ]//g' | awk -F: '{ print $2 }')

IS_BETA=$([[ "$PACKAGE_VERSION" = *"beta"* ]] && echo 1 || echo 0)
RELEASE_DEST=$([ $IS_BETA = 1 ]  && echo "beta" || echo "production") 

ARTIFACTS_REPO_SLUG=$([ $IS_BETA = 1 ] && echo "$REPO_SLUG-beta" || echo "$REPO_SLUG")
ARTIFACTS_REPO_SSH="git@github.com:$ARTIFACTS_REPO_SLUG.git"
TMP_ASSET_DIR=$(mktemp -d) || { logError "Failed to create temp file" ; exit 2; }


setup () {
    echo "🔧 Setting up git user"
    git config --global user.email "tools@news.co.uk"
    git config --global user.name "The Times Tools"
}

package () {
    echo "📦 Packaging the repository"

    git clone --quiet --branch master $ARTIFACTS_REPO_SSH $TMP_ASSET_DIR
    rm -rf $TMP_ASSET_DIR/assets
    cp -r lib/ios/assets $TMP_ASSET_DIR
    cp lib/ios/TimesComponents.podspec $TMP_ASSET_DIR
    rm -rf $TMP_ASSET_DIR/assets/**/.gitignore
}

checkIfVersionExists () {
    echo "👀 Checking if the current tag($PACKAGE_VERSION) exists in $RELEASE_DEST."

    cd $TMP_ASSET_DIR

    if [ $(git tag -l "$PACKAGE_VERSION") ]; then
        echo "✋ Skipping publishing: Version $PACKAGE_VERSION already exists in the artifacts repo."
        exit 0
    fi
}

publish () {
    echo "🚀 Publishing ($PACKAGE_VERSION) to the artifacts repo($RELEASE_DEST)"

    cd $TMP_ASSET_DIR
    sed -i -e "s/PACKAGE_VERSION/\"$PACKAGE_VERSION\"/g" TimesComponents.podspec

    git add .
    git commit --quiet -m "Publish iOS assets for v$PACKAGE_VERSION"
    git tag -a $PACKAGE_VERSION -m "Publish iOS assets for v$PACKAGE_VERSION"
    git push origin master --tags --quiet

    echo "👻 Success! Release published at https://github.com/$ARTIFACTS_REPO_SLUG/releases/tag/$PACKAGE_VERSION"
}

setup
package
checkIfVersionExists
publish
