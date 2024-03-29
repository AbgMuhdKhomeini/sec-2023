const fs = require("fs");
const path = require("path");

const registerPageHtml = fs.readFileSync(
  path.resolve(__dirname, "../pages/register.html"),
  "utf8"
);

function getRegisterPage(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.send(registerPageHtml);
}

module.exports = getRegisterPage;
