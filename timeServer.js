var moment = require('moment');
var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket) {
      var time = Date.now();
      socket.end(moment(time).format("YYYY-MM-DD HH:mm"));
});
server.listen(port);





/*
## TIME SERVER (Exercise 10 of 13)

  Write a TCP time server!

  Your server should listen to TCP connections on the port provided by the
  first argument to your program. For each connection you must write the
  current date & 24 hour time in the format:

     "YYYY-MM-DD hh:mm"

  followed by a newline character. Month, day, hour and minute must be
  zero-filled to 2 integers. For example:

     "2013-07-06 17:42"

 ─────────────────────────────────────────────────────────────────────────────  
 
 ## HINTS

  For this exercise we'll be creating a raw TCP server. There's no HTTP
  involved here so we need to use the net module from Node core which has
  all the basic networking functions.

  The net module has a method named net.createServer() that takes a callback
  function. Unlike most callbacks in Node, the callback used by
  createServer() is called more than once. Every connection received by your
  server triggers another call to the callback. The callback function has
  the signature:

     function callback (socket) { / ... / }

  net.createServer() also returns an instance of your server. You must call
  server.listen(portNumber) to start listening on a particular port.

  A typical Node TCP server looks like this:

     var net = require('net')
     var server = net.createServer(function (socket) {
       // socket handling logic
     })
     server.listen(8000)

  Remember to use the port number supplied to you as the first command-line
  argument.

  The socket object contains a lot of meta-data regarding the connection,
  but it is also a Node duplex Stream, in that it can be both read from, and
  written to. For this exercise we only need to write data and then close
  the socket.

  Use socket.write(data) to write data to the socket and socket.end() to
  close the socket. Alternatively, the .end() method also takes a data
  object so you can simplify to just: socket.end(data).

  Documentation on the net module can be found by pointing your browser
  here:
   
   
 # LEARN YOU THE NODE.JS FOR MUCH WIN!  
   
 ## TIME SERVER (Exercise 10 of 13)  
   
  Write a TCP time server!  
   
  Your server should listen to TCP connections on the port provided by the  
  first argument to your program. For each connection you must write the  
  current date & 24 hour time in the format:  
   
     "YYYY-MM-DD hh:mm"  
   
  followed by a newline character. Month, day, hour and minute must be  
  zero-filled to 2 integers. For example:  
   
     "2013-07-06 17:42"  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
 ## HINTS  
   
  For this exercise we'll be creating a raw TCP server. There's no HTTP  
  involved here so we need to use the net module from Node core which has  
  all the basic networking functions.  
   
  The net module has a method named net.createServer() that takes a callback  
  function. Unlike most callbacks in Node, the callback used by  
  createServer() is called more than once. Every connection received by your  
  server triggers another call to the callback. The callback function has  
  the signature:  
   
     function callback (socket) { / ... / }  
   
  net.createServer() also returns an instance of your server. You must call  
  server.listen(portNumber) to start listening on a particular port.  
   
  A typical Node TCP server looks like this:  
   
     var net = require('net')  
     var server = net.createServer(function (socket) {  
       // socket handling logic  
     })  
     server.listen(8000)  
   
  Remember to use the port number supplied to you as the first command-line  
  argument.  
   
  The socket object contains a lot of meta-data regarding the connection,  
  but it is also a Node duplex Stream, in that it can be both read from, and  
  written to. For this exercise we only need to write data and then close  
  the socket.  
   
  Use socket.write(data) to write data to the socket and socket.end() to  
  close the socket. Alternatively, the .end() method also takes a data  
  object so you can simplify to just: socket.end(data).  
   
  Documentation on the net module can be found by pointing your browser  
  here:  
   
  file:///home/ubuntu/workspace/node_modules/learnyounode/node_apidoc/net.ht  
  ml  
   
  To create the date, you'll need to create a custom format from a new  
  Date() object. The methods that will be useful are:  
   
     date.getFullYear()  
     date.getMonth()     // starts at 0  
     date.getDate()      // returns the day of month  
     date.getHours()  
     date.getMinutes()  
   
  Or, if you want to be adventurous, use the strftime package from npm. The  
  strftime(fmt, date) function takes date formats just like the unix date  
  command. You can read more about strftime at:  
  [https://github.com/samsonjs/strftime](https://github.com/samsonjs/strftim  
  e)  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
   » To print these instructions again, run: learnyounode print                
   » To execute your program in a test environment, run: learnyounode run                                                                          
     program.js                                                                
   » To verify your program, run: learnyounode verify program.js               
   » For help run: learnyounode help
   
*/


/*
Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "2015-12-22 07:19"                  !=    "2015-12-22 19:19"                 

────────────────────────────────────────────────────────────────────────────────

  ✗  Submission results did not match expected!  
   
       
     # FAIL  
     Your solution to TIME SERVER didn't pass. Try again!  
   
peteshaw:~/workspace $ date
Tue Dec 22 19:20:09 UTC 2015
peteshaw:~/workspace $ learnyounode verify /home/ubuntu/workspace/timeServer.js 

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "2015-12-23 12:27"                  !=    "2015-12-22 19:27"                 

────────────────────────────────────────────────────────────────────────────────

  ✗  Submission results did not match expected!  
   
       
     # FAIL  
     Your solution to TIME SERVER didn't pass. Try again!  
   
peteshaw:~/workspace $ learnyounode verify /home/ubuntu/workspace/timeServer.js 

Your submission results compared to the expected:

                 ACTUAL                                 EXPECTED                
────────────────────────────────────────────────────────────────────────────────

   "2015-12-22 19:28"                  ==    "2015-12-22 19:28"                 

────────────────────────────────────────────────────────────────────────────────

  ✓  Submission results match expected  
   
  # PASS Your solution to TIME SERVER passed!  
   
  Here's the official solution in case you want to compare notes:  
   
 ─────────────────────────────────────────────────────────────────────────────  
   
     var net = require('net')  
       
     function zeroFill(i) {  
       return (i < 10 ? '0' : '') + i  
     }  
       
     function now () {  
       var d = new Date()  
       return d.getFullYear() + '-'  
         + zeroFill(d.getMonth() + 1) + '-'  
         + zeroFill(d.getDate()) + ' '  
         + zeroFill(d.getHours()) + ':'  
         + zeroFill(d.getMinutes())  
     }  
       
     var server = net.createServer(function (socket) {  
       socket.end(now() + '\n')  
     })  
       
     server.listen(Number(process.argv[2]))  
   
 ─────────────────────────────────────────────────────────────────────────────  
  You have 3 challenges left. Type 'learnyounode' to show the menu.  
  
  */