const path = require("path");
const fs = require("fs");

const abouthtmlContent = fs.readFileSync(
  path.resolve(__dirname, "../pages/about.html"),
  "utf8"
);

function getAboutPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(abouthtmlContent);
}

module.exports = getAboutPage;
