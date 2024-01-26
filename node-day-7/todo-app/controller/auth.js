import pool from "../database/connection.js";

export async function register(req, res) {
  try {
    const reqBody = req.body;

    //create new user in database
    const query = `INSERT INTO "Users" (username, email, "password")
    VALUES ($1, $2, $3);`;
    const values = [reqBody.username, reqBody.email, reqBody.password];
    await pool.query(query, values);
    const apiResponse = {
      message: "User created succesfully",
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json(error);
  }
}

export async function login(req, res) {
  try {
    const reqBody = req.body;
    // check if email existing in database
    const query = `SELECT * FROM "Users" WHERE email=$1;`;
    const values = [reqBody.email];
    const response = await pool.query(query, values);

    //if email not exist return 404
    if (response.rowCount === 0) {
      return res.status(404).json({ message: "Email not found" });
    }

    // if email found check if password match

    if (reqBody.password !== response.rows[0].password) {
      return res.status(401).json({ message: "Password incorrect" });
    }
    const apiResponse = {
      message: "Login Successful",
      user: response.rows[0],
    };
    res.status(200).json(apiResponse);
  } catch (error) {
    res.status(500).json(error);
  }
}

// List all users
// route : GET/users

export async function users(req, res) {
  try {
    const query = `SELECT * FROM "Users";`;
    const response = await pool.query(query);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
}

// Get user by id
// route : Get/users/:id

export async function usersid(req, res) {
  try {
    const reqBody = req.body;
    const query = `SELECT * FROM "Users" WHERE id=$1;`;
    const values = [reqBody.id];
    const response = await pool.query(query, values);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
}
// update user by id
// route : PUT/users/:id

export async function updateUsers(req, res) {
  try {
    const reqBody = req.body;
    const query = `UPDATE "Users" SET username = $2, email = $3, password = $4 WHERE id=$1;`;
    const values = [
      reqBody.id,
      reqBody.username,
      reqBody.email,
      reqBody.password,
    ];
    await pool.query(query, values);
    res.status(200).json({ message: "User update successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
}

// delete user by id
// route : DELETE/users/:id

export async function deleteUser(req, res) {
  try {
    const reqBody = req.body;
    const query = `DELETE FROM "Users" WHERE id = $1;`;
    const values = [reqBody.id];
    await pool.query(query, values);

    res.status(200).json({ message: "User has been remove" });
  } catch (error) {
    res.status(500).json(error);
  }
}
