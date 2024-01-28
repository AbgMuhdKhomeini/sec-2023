import { response } from "express";
import pool from "../database/connection.js";

// create controller
async function create(req, res) {
  const title = req.body.title;
  const description = req.body.description;
  // this is how we get data from the middleware
  const authData = req.user;
  try {
    // create a todo in database
    const query = `INSERT INTO "Todos" (title, description, user_id) VALUES ($1, $2, $3)`;
    const values = [title, description, authData.id];
    const response = await pool.query(query, values);
    return res.json({
      message: "a todo is created",
      data: {
        title: title,
        description: description,
        user_id: authData.id,
      },
    });
  } catch (error) {
    return res.status(500).json(error);
  }
}

// list controller
async function list(req, res) {
  try {
    const authData = req.user;
    const query = `SELECT * FROM "Todos" WHERE user_id = $1`;
    const values = [authData.id];
    const response = await pool.query(query, values);
    return res.status(200).json({
      message: `${response.rows.length} todos found`,
      data: response.rows,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

//update controller
// route is PUT/todo/:id
async function update(req, res) {
  try {
    const title = req.body.title;
    const description = req.body.description;
    const authData = req.user;
    const query = `UPDATE "Todos" SET title = $2, description = $3 WHERE user_id = $1;`;
    const values = [authData.id, title, description];

    await pool.query(query, values);
    return res.status(200).json({
      message: `${authData.id} has been updated`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

//delete controller
// route is DELETE/todo/:id
async function deleteTodos(req, res) {
  try {
    const authData = req.user;
    const query = `DELETE FROM "Todos" WHERE user_id = $1;`;
    const values = [authData.id];
    await pool.query(query, values);
    return res.status(200).json({
      message: `Todos has been deleted`,
    });
  } catch (error) {
    res.status(500).json(error);
  }
}

//get controller
// route is GET/todo/:id
async function viewAll(req, res) {
  try {
    const query = `SELECT * FROM "Todos";`;

    await pool.query(query);
    return res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json(error);
  }
}

const todoController = {
  create: create,
  list: list,
  update: update,
  delete: deleteTodos,
  view: viewAll,
};

//get
export default todoController;
