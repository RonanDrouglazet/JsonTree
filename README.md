JsonTree
========

Write json list of all directory's files path in a file

    npm install (-g) jsontree-js

## Module Usage

    var jsontree = require('jsontree-js');

    jsontree.write(dir, file);

dir: String optional default = ./

file: String optional default = ./manifest.json

## Shell Usage (assuming npm install -g jsontree-js)

    > jsontree [optional DIR=./] [optional FILE=[DIR]manifest.json]

## Output write on [file]

    ['foo.js', 'bar/foo.css', 'bar/foo/bar.txt']

