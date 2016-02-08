var http = require('http');
const bl = require('bl');
var hyperquest = require('hyperquest');
var url = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

fetch(url);
fetch(url2);
fetch(url3);

function fetch(url) {
    hyperquest(url).pipe(bl(function (err, data) {
    console.log(data.length);
    console.log(data.toString());
    }))
}

