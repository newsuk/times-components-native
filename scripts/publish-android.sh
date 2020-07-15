#!/usr/bin/env bash
set -e

PACKAGE_PATH="uk/co/thetimes/times-xnative"
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | sed 's/[\",\t ]//g' | awk -F: '{ print $2 }')

checkIfVersionExists () {
  echo "👀 Checking if the current version exists."

  STATUS=$(curl -s -o /dev/null -w '%{http_code}' -u${ARTIFACTORY_USER}:${ARTIFACTORY_API_KEY} "$ARTIFACTORY_URL/$PACKAGE_PATH/$PACKAGE_VERSION/")

  if [ $STATUS -eq 200 ]; then
    echo "✋ Skipping publishing: Version $PACKAGE_VERSION already exists in the artifacts repo."
    exit 0
  fi
}

publish () {
  echo "🚀 Publishing $PACKAGE_PATH to the JFrog: ${ARTIFACTORY_URL}"
  LIB_DIR="./lib/android"

  # Upload contents of repo folder
  cd "$LIB_DIR/repo"
  ls -d */ | cut -f1 -d'/' | while read line ; do publishTar $line ; done
  cd -

  echo "👻 Success! Release ${PACKAGE_VERSION} published to JFrog."
}

function publishTar {
  echo -e '\n'$1
  FILEPATH="$1.tar"
  tar -cf $FILEPATH $1
  curl -T $FILEPATH --header "X-Explode-Archive: true" -u${ARTIFACTORY_USER}:${ARTIFACTORY_API_KEY} "$ARTIFACTORY_URL"
}

checkIfVersionExists
publish
