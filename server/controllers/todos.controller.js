import { pool } from "../db.js";

export const getTodos = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM todos");
  res.json(result);
}

export const getTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "SELECT * FROM todos WHERE id = ?";
    const [result] = await pool.query(query, [id]);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const createTodo = async (req, res) => {
  const { title, description, status } = req.body;
  try {
    const [result] = await pool.query("INSERT INTO todos (title, description, status) VALUES (?, ?, ?)", [title, description, status]);
    res.json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  try {
    const query = "UPDATE todos SET title = IFNULL(?, title), description = IFNULL(?, description), status = IFNULL(?, status) WHERE id = ?";
    const [result] = await pool.query(query, [title, description, status, id]);
    if (!result.affectedRows) return res.status(404).json({ message: "Todo not found" });

    const [rows] = await pool.query('SELECT * FROM todos WHERE id = ?', [id])

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}

export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const query = "DELETE FROM todos WHERE id = ?";
    const [result] = await pool.query(query, [id]);

    if (result.affectedRows === 0) return res.status(404).json({ message: "Todo not found" });

    res.sendStatus(204)
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}