#!/bin/bash

# @see: http://www.mkdocs.org
# @dev: mkdocs serve -a 10.158.250.200:8000

/usr/bin/mkdocs gh-deploy

rm site/ -Rf
