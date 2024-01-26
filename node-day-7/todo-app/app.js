import express from "express";
import dbInit from "./database/dbinit.js";
import { checkHealth } from "./controller/health.js";
import {
  register,
  login,
  users,
  usersid,
  updateUsers,
  deleteUser,
} from "./controller/auth.js";

const app = express();
const PORT = 3000;

// middleware for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initialize database
dbInit();

// routes
app.get("/", checkHealth);
// this is how we send REST API response
app.post("/register", register);
app.post("/login", login);
app.get("/users", users);
app.get("/id", usersid);
app.put("/update", updateUsers);
app.delete("/delete", deleteUser);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
