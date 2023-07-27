import { Router } from "express";
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../controllers/todos.controller.js";

const router = Router();

router.get('/api/todos', getTodos)

router.get('/api/todos/:id', getTodo)

router.post('/api/todos', createTodo) 

router.patch('/api/todos/:id', updateTodo)

router.delete('/api/todos/:id', deleteTodo)

export default router;