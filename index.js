// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('shamim akhter');
// }).listen(8085);
// var http = require('http');
// var dt = require('./mymodule');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write("The date and time are currently: " + dt.myDateTime());
//   res.end();
// }).listen(5001);
// how to create a  file using node js
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'create a new file using node js ....using fs.appendFile module', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });
//Create a new, empty file using the open() method:
//.....
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
//..... Create a new file using the writeFile() method:
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'create a new file using writefile in nodejs ', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

