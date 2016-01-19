var mymodule = require('./makeItModular2.js')  
var dir=process.argv[2];
var ext=process.argv[3];

mymodule(dir,ext,function(err, data) {
    if (err) {
        //console.log(err);
    } else {
        for (var i in data) {
            console.log(data[i]);
        }
    }
});/

/*
  _/home/ubuntu/workspace/node_modules/learnyounode/exercises/make_it_modula  
  r/solution/solution.js_ :  
   
     var filterFn = require('./solution_filter.js')  
     var dir = process.argv[2]  
     var filterStr = process.argv[3]  
       
     filterFn(dir, filterStr, function (err, list) {  
       if (err)  
         return console.error('There was an error:', err)  
       
       list.forEach(function (file) {  
         console.log(file)  
       })  
     })  
   
 ─────────────────────────────────────────────────────────────────────────────  
  _/home/ubuntu/workspace/node_modules/learnyounode/exercises/make_it_modula  
  r/solution/solution_filter.js_ :  
   
     var fs = require('fs')  
     var path = require('path')  
       
     module.exports = function (dir, filterStr, callback) {  
       
       fs.readdir(dir, function (err, list) {  
         if (err)  
           return callback(err)  
       
         list = list.filter(function (file) {  
           return path.extname(file) === '.' + filterStr  
         })  
       
         callback(null, list)  
       })  
     }  
   
 ─────────────────────────────────────────────────────────────────────────────  
  You have 7 challenges left. Type 'learnyounode' to show the menu.  
  */