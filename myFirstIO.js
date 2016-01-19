//console.log("test");

var args = process.argv;
//console.log(process.argv);

var fs = require('fs') ;
var newLineCount = 0;
var i = 0;
var inputFileName = args[2];
//console.log(inputFileName);

var buf=fs.readFileSync(inputFileName).toString();
var lines=buf.split("\n");
//console.log(lines);
console.log(lines.length-1);