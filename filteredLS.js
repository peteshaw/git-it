var fs = require('fs') ;

var dir = process.argv[2];
var ext = process.argv[3];
//console.log(process.argv);

fs.readdir(dir, function (err, list) {
    if (err) throw err; 
        for (var i in list) {
        //console.log(list[i]);
        if (list[i].split(".")[1]==ext) {
            console.log(list[i]);
        }
    }
});