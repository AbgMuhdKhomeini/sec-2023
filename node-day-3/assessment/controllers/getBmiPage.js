const fs = require("fs");
const path = require("path");

const bmiPageHtml = fs.readFileSync(
  path.join(__dirname, "../pages/bmi.html"),
  "utf8"
);

function getBmiPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(bmiPageHtml);
}

module.exports = getBmiPage;
