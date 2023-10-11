// The File System module has methods for updating files:

// fs.appendFile()
// fs.writeFile()
//.....
//The fs.appendFile() method appends the specified content at the end of the specified file:
//Append "This is my text." to the end of the file "mynewfile1.txt":
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'adding  This is my text to the file mynewfile1 created by using node.js.', function (err) {
//   if (err) throw err;
//   console.log('Updated!');
// }); 
//The fs.writeFile() method replaces the specified file and content:
//Replace the content of the file "mynewfile3.txt":
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is new content and previous content have been removed by writeafile methos in nodejs', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});