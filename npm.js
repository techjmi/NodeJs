var http = require('http')
var uc = import('upper-case').then(module => module.default);

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("this package will convert the text in upper case using the package uper case!"));
  res.end();
}).listen(8080);