var fs = require('fs');

exports.list = function() {
    var dir = process.argv.length > 2 ? process.argv[2] : './';
    if (dir[dir.length-1] !== '/') {
        dir += '/';
    }
    var file = process.argv.length > 3 ? process.argv[3] : dir + 'manifest.json';

    walk(dir, function(error, result) {
        if (!error) {
            result.forEach(function(entry, index) {
                result[index] = entry.replace(dir + "/", "");
            });
            console.log(result);
            fs.writeFileSync(file, JSON.stringify(result));
            console.log("JsonTree: file " + file + " saved");
        } else {
            console.error("JsonTree error", error);
        }
    });
}

function walk(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) {
            return done(err);
        }

        var pending = list.length;

        if (!pending) {
            return done(null, results);
        }

        list.forEach(function(file) {
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        if (!--pending) {
                            done(null, results);
                        }
                    });
                } else {
                    if (file.replace(dir, "").indexOf(".") !== 1) {
                        results.push(file);
                    }
                    if (!--pending) {
                        done(null, results);
                    }
                }
            });
        });
    });
}

if (process.argv[0] === 'jsontree' || process.argv[1].indexOf('jsontree.js') !== -1) {
    exports.list();
}
