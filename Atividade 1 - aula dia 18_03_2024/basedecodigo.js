var minnhabiblioteca = require("./exemploBilio");
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      "RGM: " +
        minnhabiblioteca.rgm +
        " Primeiro nome: " +
        minnhabiblioteca.primeironome +
        " Ultimo nome: " +
        minnhabiblioteca.ultimonome
    );
  })
  .listen(8080);
