const express = require("express");
const getBmiPage = require("./controllers/getBmiPage");
const postBmi = require("./controllers/postBmi");
const getNotFound = require("./controllers/getNotFoundPage");
const logger = require("./middlewares/logger");

const server = express();

server.use(express.static("public"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(logger);

server.get("/bmi", getBmiPage);
server.post("/bmi", postBmi);
server.get("/*", getNotFound);

const PORT = 9090;
server.listen(PORT, function () {
  console.log(`server is running at http://localhost:${PORT}`);
});
