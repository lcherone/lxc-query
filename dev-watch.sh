#!/bin/bash

SRC="./"
#
function block {
    inotifywait -q -r -e modify,move,create,delete $SRC
}
#
function main {
    #
    clear
    #
    npm run test
}
#
main
#
while block; do
    main
done