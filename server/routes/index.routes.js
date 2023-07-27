import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

router.get('/ping', async (_, res) => {
  const [result] = await pool.query('SELECT 1 + 1 AS RESULT')
  console.log(result);
  res.json(result[0])
})

// todos done: 'completed' || 'pending' || 'all'


export default router;