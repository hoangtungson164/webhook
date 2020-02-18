var http = require('http');
var port = 9000;
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  console.log('sdfasdlkfjsldkfjasdf');
  response.end('Hello Internet! Version 002');
};
var www = http.createServer(handleRequest);
console.log('Listening on http://localhost:' + port);
www.listen(port);
