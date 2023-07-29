var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello World! This is Config and Deployment");
});
server.listen(3000);