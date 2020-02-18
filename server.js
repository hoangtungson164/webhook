var http = require('http');
var port = 8080;
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  console.log('something');
  response.end("Hello Internet. Once more, I'm here!!!!");
};
var www = http.createServer(handleRequest);
console.log('Listening on http://localhost:' + port);
www.listen(port);
