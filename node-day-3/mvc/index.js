const express = require("express");
const getHomePage = require("./controllers/getHomePage");
const getAboutPage = require("./controllers/getAboutPage");
const getNotFoundPage = require("./controllers/get404Page");
const getRegisterPage = require("./controllers/getRegisterPage");
const postRegister = require("./controllers/postRegister");
const logger = require("./middlewares/logger");

const server = express();

server.use(express.static("public"));
server.use(logger);
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routes
server.get("/", getHomePage);
server.get("/about", getAboutPage);
server.get("/register", getRegisterPage);
// post controller
server.post("/register", postRegister);
server.get("/*", getNotFoundPage);

const PORT = 9090;
server.listen(PORT, function () {
  console.log(`server is running at http://localhost:${PORT}`);
});
