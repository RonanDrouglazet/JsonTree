var fs = require('fs');

function init() {
    var dir, file;
    if (process.argv.length <= 2) {
        console.error("JsonTree error: missing arguments");
    } else {
        dir = process.argv[2];
        file = process.argv[3];

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

init();
