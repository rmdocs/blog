#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e

git config --global user.email "icbugcoder@88.com"
git config --global user.name "icbugcoder"
git init
git add -A

git commit -m 'To refresh the content!'
git push git@github.com:rmdocs/full-stack-blog.git