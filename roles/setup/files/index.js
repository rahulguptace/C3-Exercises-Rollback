var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world! This is Rahul's Remote Control using Ansible");
});
server.listen(3000);