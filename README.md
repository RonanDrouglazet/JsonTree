JsonTree
========

Write json list of all directory's files path in a file

    npm install jsontree (-g)

## Module Usage

    var jsontree = require('jsontree');

    jsontree.write(dir, file);

dir: String optional default ./
file: String optional default ./manifest.json

## Shell Usage (assuming npm install -g jsontree)

    > jsontree [optional DIR=./] [optional FILE=[DIR]manifest.json]

## Output write on [file]

    ['foo.js', 'bar/foo.css', 'bar/foo/bar.txt']

