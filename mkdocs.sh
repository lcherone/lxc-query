#!/bin/bash

# @see: http://www.mkdocs.org
# @dev: mkdocs serve -a 10.158.250.200:8000

sudo mkdocs gh-deploy

sudo rm site/ -Rf
