#!/usr/bin/env bash
# Builds the docs site and deploys it to kpicc.github.io/freedom-design-system/
set -euo pipefail

SITE_REPO="kpicc/kpicc.github.io"
SUBDIR="freedom-design-system"
WORKDIR="$(mktemp -d)"
trap 'rm -rf "$WORKDIR"' EXIT

npm run docs:build

git clone --depth 1 "https://github.com/${SITE_REPO}.git" "$WORKDIR/site"
mkdir -p "$WORKDIR/site/$SUBDIR"
rm -rf "$WORKDIR/site/$SUBDIR"/* 
cp -r dist-docs/. "$WORKDIR/site/$SUBDIR/"

cd "$WORKDIR/site"
git add -A
if git diff --cached --quiet; then
  echo "No changes to deploy."
  exit 0
fi
git -c user.name="${GIT_USER:-kpicc}" -c user.email="${GIT_EMAIL:-kpicc@users.noreply.github.com}" \
  commit -m "Update $SUBDIR docs site"
git push origin HEAD:main
echo "Deployed to https://kpicc.github.io/$SUBDIR/"
