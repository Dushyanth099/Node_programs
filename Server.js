var http = require("http");
//import NOde.js core module

var server = http.createServer(function (req, res) {
  //create web server
  if (req.url == "/") {
    //check the url of the current req

    //set respnse header
    res.writeHead(200, { "Content-Type": "text/html" });

    //set response content
    res.write("<html><body><p> This is home page.</p></body></html>");
    res.end();
  } else if (req.url == "/student") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p> This is Student page.</p></body></html>");
    res.end();
  } else if (req.url == "/admin") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<html><body><p> This is Admin page.</p></body></html>");
    res.end();
  } else res.end("Invalid request");
});
server.listen(8000);
console.log("Node.js web server at port 8000 is running..");
