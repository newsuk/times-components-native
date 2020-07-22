#!/usr/bin/env bash
set -e

PACKAGE_PATH="uk/co/thetimes/times-xnative"
PACKAGE_VERSION=$(cat package.json | grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')

IS_BETA=$([[ "$PACKAGE_VERSION" = *"beta"* ]] && echo 1 || echo 0)
ARTIFACTORY_API_KEY=$([ $IS_BETA = 1 ] && echo "$ARTIFACTORY_API_KEY_BETA" || echo "$ARTIFACTORY_API_KEY_PROD")
ARTIFACTORY_URL=$([ $IS_BETA = 1 ] && echo "$ARTIFACTORY_URL_BETA" || echo "$ARTIFACTORY_URL_PROD")
ARTIFACTORY_USER=$([ $IS_BETA = 1 ] && echo "$ARTIFACTORY_USER_BETA" || echo "$ARTIFACTORY_USER_PROD")
RELEASE_DEST=$([ $IS_BETA = 1 ]  && echo "beta" || echo "production") 

checkIfVersionExists () {
  echo "👀 Checking if the current version($PACKAGE_VERSION) exists in $RELEASE_DEST."

  STATUS=$(curl -s -o /dev/null -w '%{http_code}' -u${ARTIFACTORY_USER}:${ARTIFACTORY_API_KEY} "$ARTIFACTORY_URL/$PACKAGE_PATH/$PACKAGE_VERSION/")

  if [ $STATUS -eq 200 ]; then
    echo "✋ Skipping publishing: Version $PACKAGE_VERSION already exists in the artifacts repo."
    exit 0
  fi
}

publishTar () {
  echo -e '\n'$1
  FILEPATH="$1.tar"
  tar -cf $FILEPATH $1
  curl -T $FILEPATH --header "X-Explode-Archive: true" -u${ARTIFACTORY_USER}:${ARTIFACTORY_API_KEY} "$ARTIFACTORY_URL"
}

publish () {
  echo "🚀 Publishing $PACKAGE_PATH to the JFrog(${RELEASE_DEST}): ${ARTIFACTORY_URL}"
  LIB_DIR="./lib/android"

  # Upload contents of repo folder
  cd "$LIB_DIR/repo"
  ls -d */ | cut -f1 -d'/' | while read line ; do publishTar $line ; done
  cd -

  echo "👻 Success! Release ${PACKAGE_VERSION} published to JFrog($RELEASE_DEST)"
}

checkIfVersionExists
publish
