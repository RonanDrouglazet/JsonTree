JsonTree
========

Write json list of all directory's files path in a file

    npm install (-g) jsontree-js

## Module Usage

    var jsontree = require('jsontree-js');

    // write directory's files list on a json file
    jsontree.write(dir, file);

    // return a json list of directory's files
    jsontree.list(done, dir);

dir: String optional default = ./

file: String optional default = ./manifest.json

## Shell Usage (assuming npm install -g jsontree-js)

    > jsontree [optional DIR=./] [optional FILE=[DIR]manifest.json]

## Output write on [file]

    ['foo.js', 'bar/foo.css', 'bar/foo/bar.txt']

