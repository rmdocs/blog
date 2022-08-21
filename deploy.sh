#!/usr/bin/env sh
 
# 确保脚本抛出遇到的错误
set -e

# 生成静态文件， npm run docs:build
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# git初始化，每次初始化不影响推送
git init
git add -A
git commit -m 'To run this deploy!'
git branch -M page

git push -f git@github.com:rmdocs/full-stack-blog.git page