var http = require('http');
var url = process.argv[2];


var callback = function(response) {
    
    response.on('data', function (chunk) {
        console.log(chunk);
    });

    response.on('end', function () {
    });
    
    response.on("error",function(data) {
    });

    response.setEncoding("utf8");

  }

var req = http.get(url, callback);



