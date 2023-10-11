const path = require('node:path');
path.basename('C:\NodeJS\pathmodule');
// Returns: 'C:\\temp\\myfile.html'
console.log(path.dirname('C:\NodeJS\pathmodule'));
// Returns: '/foo/bar/baz/asdf')
console.log(path.extname('C:/NodeJS/pathmodule/index.js'));
console.log(path.basename('C:/NodeJS/pathmodule/index.js'));
// to find all details all together use parse method
console.log(path.parse('C:/NodeJS/pathmodule/index.js'));
// only object....
const mypath=path.parse('C:/NodeJS/pathmodule/index.js')
console.log(mypath.name)
console.log(mypath.root)
