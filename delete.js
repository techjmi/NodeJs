//To delete a file with the File System module,  use the fs.unlink() method.

//The fs.unlink() method deletes the specified file:
//Delete "mynewfile2.txt":
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});