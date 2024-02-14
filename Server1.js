var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "./data") {
    //check the url of the current requst
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        message: "Hello world",
        id: 1,
        company: "Imarticus",
      })
    );
    res.end();
  }
});
server.listen(8000);
console.log("Node.js web server at port 8000 is running..");