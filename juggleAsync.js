var http = require('http');
const bl = require('bl');
var hyperquest = require('hyperquest');
var count=0;
var responses = new Array;

for (var i=2;i<process.argv.length;i++) {
    fetch(process.argv[i],i);
}

function fetch(url,index) {
    var h = hyperquest(url);
    h.pipe(bl(function (err, data) {
        responses[index]=data.toString();
        //console.log(index);
        }));
    h.on('end',function () {checkIfDone() });
}

function checkIfDone() {
    count = count + 1;
    if (count == 3) {
        console.log(responses[2]);
        console.log(responses[3]);
        console.log(responses[4]);
    }
}
