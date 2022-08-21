#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e

npm run build

git config --global user.email "icbugcoder@88.com"
git config --global user.name "icbugcoder"
git add .
git commit -m 'Update by the main.sh!'
git push origin