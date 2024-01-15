const fs = require("fs");
const path = require("path");

const notFoundPageHtml = fs.readFileSync(
  path.join(__dirname, "../pages/not-found.html"),
  "utf8"
);

function getNotFound(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(notFoundPageHtml);
}

module.exports = getNotFound;
