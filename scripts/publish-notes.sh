#!/usr/bin/env bash
set -e

REPO_SLUG="newsuk/times-components-native"
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | sed 's/[\",\t ]//g' | awk -F: '{ print $2 }')

setup () {
    git config --global user.email "tools@news.co.uk"
    git config --global user.name "The Times Tools"
}

checkIfVersionExists () {
    echo "👀 Checking if current tag exists"

    if [ $(git tag -l "$PACKAGE_VERSION") ]; then
        echo "✋ Skipping publishing: Tag $PACKAGE_VERSION already exists."
        exit 0
    fi
}

createAndPushTag () {
    echo "📦 Tagging the release"
    TAG="v${PACKAGE_VERSION}"
    git tag $TAG
    git push --quiet origin $TAG
}

publishNotes () {
    echo "🚀 Publishing the GitHub Release"
    export CONVENTIONAL_GITHUB_RELEASER_TOKEN="$GH_TOKEN"
    npx --quiet conventional-github-releaser
    echo "👻 Success! Release published at https://github.com/$REPO_SLUG/releases/tag/v$PACKAGE_VERSION."
}

setup
checkIfVersionExists
createAndPushTag
publishNotes
