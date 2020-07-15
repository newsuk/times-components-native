#!/usr/bin/env bash
set -e

function publish {
  echo -e '\n'$1
  FILEPATH="$1.tar"
  tar -cf $FILEPATH $1
  curl -T $FILEPATH --header "X-Explode-Archive: true" -u${ARTIFACTORY_USER}:${ARTIFACTORY_API_KEY} "$ARTIFACTORY_URL"
}

echo "Publishing to jfrog $ARTIFACTORY_URL"
LIB_DIR="./lib/android"

# Upload contents of repo folder
cd "$LIB_DIR/repo"
ls -d */ | cut -f1 -d'/' | while read line ; do publish $line ; done
cd -
