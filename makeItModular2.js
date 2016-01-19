module.exports = function (dir, ext, callback) { 
    var fs = require('fs') ;  
    var data = [];
    //console.log(dir);
    fs.readdir(dir, function (err, list) {
        if (err) {
            //console.log("err");
            callback(err, null);
        } else {
            //console.log("success");
            for (var i in list) {
                //console.log(list[i]);
                if (list[i].split(".")[1]==ext) {
                    data.push(list[i]);
                }
            }
            callback(null, data);
        }
    });
}
    