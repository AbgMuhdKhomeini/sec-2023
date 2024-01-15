const path = require("path");
const fs = require("fs");

const homehtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/home.html"),
  "utf8"
);

function getHomePage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(homehtmlContent);
}

module.exports = getHomePage;
