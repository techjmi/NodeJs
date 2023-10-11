var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('jamai millia islami'); //write a response to the client
  res.end(); //end the response
}).listen(8088); //the server object listens on port 8087