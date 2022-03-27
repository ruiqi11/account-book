#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
# git remote add origin git@github.com:ST2020wa/bookkeeping-2-website.git &&
git remote add origin git@gitee.com:st-li/bookkeeping-2-website.git &&
git push -u origin master -f
cd -