const path = require("path");
const fs = require("fs");

const notFoundhtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/404.html"),
  "utf8"
);

function getNotFoundPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(notFoundhtmlContent);
}

module.exports = getNotFoundPage;
