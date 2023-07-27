import { createContext, useContext, useState } from "react";
import { createTodoRequest, getTodosRequest, deleteTodoRequest, editTodoRequest } from "../api/todo.api";

export const TodoContext = createContext()

export const useTodo = () => {
  const context = useContext(TodoContext)
  if (!context)
    throw new Error('useTasks must be used within a TodoContextProvider')
  return context
}

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([])

  const createTodo = async (todo) => {
    try {
      await createTodoRequest(todo)
      setTodos([...todos, todo])
    } catch (error) {
      console.log(error)
    }
  }

  const updateTodo = async (id, newFields) => {
    try {
      await editTodoRequest(id, newFields)
      setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? { ...todo, ...newFields } : todo))
      );
    } catch (err) {
      console.log(err)
    }
  }

  const deleteTodo = async (id) => {
    try {
      const result = await deleteTodoRequest(id)
      setTodos(todos.filter(todo => todo.id !== id))
      console.log(result);
    } catch (error) {
      console.log(error)
    }
  }

  const loadTodos = async () => {
    try {
      const result = await getTodosRequest()
      setTodos(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TodoContext.Provider value={{ todos, loadTodos, createTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  )
}