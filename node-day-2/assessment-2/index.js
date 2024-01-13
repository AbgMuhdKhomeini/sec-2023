const express = require("express");
const fs = require("fs");
const path = require("path");

const server = express();

const index = fs.readFileSync(
  path.join(__dirname, "/pages/index.html"),
  "utf8"
);
const user = fs.readFileSync(path.join(__dirname, "/pages/user.html"), "utf8");
const notFound = fs.readFileSync(
  path.join(__dirname, "/pages/not-found.html"),
  "utf8"
);

server.use(express.static(path.join(__dirname, "public")));

server.get("/", function (req, res) {
  res.send(index);
  return;
});

server.get("/user", function (req, res) {
  res.send(user);
  return;
});

server.get("/user", function (req, res) {
  //   const params = req.params;
  const query = req.query;
  console.log(query);
  res.send(user);
  return;
});

// 404 route - this should always be the last route
server.get("*", function (req, res) {
  res.send(notFound);
  return;
});

server.listen(3000, function () {
  console.log("Server is listening on port 3000. Ready to accept request!");
});
