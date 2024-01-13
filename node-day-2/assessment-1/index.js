const http = require("http");
const fs = require("fs");

// read html file

let htmlContent = fs.readFileSync("index.html", "utf8");
let userContent = fs.readFileSync("user.html", "utf8");
let notFound = fs.readFileSync("not-found.html", "utf8");
let cssContent = fs.readFileSync("public/style.css", "utf8");
let jsContent = fs.readFileSync("public/script.js", "utf8");

// const htmlContent = `
// <html>
//   <head><title>node.js HTTP server</title>
// </head>
// <body>
//   <h1>Hello world from node.js http server</h1>
// </body>
// </html>`;

// create server
const server = http.createServer(function (req, res) {
  // plain text
  // res.setHeader("content-type", "text/plain");
  // res.end("hello world from node.js HTTP server");
  // html content

  res.setHeader("content-type", "text/html");
  // routing css & js
  if (req.url === "/style.css") {
    res.setHeader("content-type", "text/css");
    res.end(cssContent);
    return;
  } else if (req.url === "/script.js") {
    res.setHeader("content-type", "text/javascript");
    res.end(jsContent);
    return;
  }

  // routing html

  if (req.url === "/user") {
    res.end(userContent);
    return;
  } else if (req.url === "/") {
    res.end(htmlContent);
    return;
  } else {
    res.end(notFound);
    return;
  }
});

// listen to port

const port = 3000;
server.listen(port, function () {
  console.log(`server listening on port ${port}`);
});
