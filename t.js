const fs = require('fs');

function readfile(path) {
    return JSON.parse(fs.readFileSync(path, 'utf-8'))
}