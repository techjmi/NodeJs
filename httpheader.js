var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('shamim akhter jamia millia islamia');
  res.end();
}).listen(8090);
