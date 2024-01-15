const fs = require("fs");
const path = require("path");

const thankYouPageHtml = fs.readFileSync(
  path.join(__dirname, "../pages/thank-you.html"),
  "utf8"
);

const postRegister = function (req, res) {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirm_password;

  console.log(req.body);

  res.setHeader("Content-type", "text/html");
  res.write(thankYouPageHtml.replace("##USERNAME##", username));
};

module.exports = postRegister;
